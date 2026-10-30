// Gemeinsamer KI-Anschluss für die Gesprächsprobe (Seite und Testgast).
// Ohne --ja wird NICHTS gesendet (Trockenlauf, keine Kosten).
// Mit --ja geht jede Anfrage über OpenRouter; vor JEDEM Aufruf wird der schlimmste Fall gegen die Obergrenze gerechnet.
// Elsbeth bekommt nur ihre Anweisung und den Gesprächsverlauf: kein Zähler, keine Regie-Zeile, kein Flur.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';

const HIER = path.dirname(new URL(import.meta.url).pathname);
const args = process.argv.slice(2);
const opt = (n, d) => { const i = args.indexOf('--' + n); return i < 0 ? d : args[i + 1]; };

export const JA = args.includes('--ja');
export const MODELL = opt('modell', 'anthropic/claude-sonnet-5.5');
export const GAST_MODELL = opt('gast', 'anthropic/claude-sonnet-5.5');
export const BUDGET = Number(opt('budget', '0'));
export const FASSUNGEN = {
  X: fs.readFileSync(path.join(HIER, 'fassungen', 'elsbeth-0.11.txt'), 'utf8').trim(),
  Y: fs.readFileSync(path.join(HIER, 'fassungen', 'elsbeth-0.12-pruef.txt'), 'utf8').trim(),
};
// X und Y sind nur interne Namen. Welche Fassung ein Gespräch bekommt, mischt der Server; die Seite zeigt nur Nummern.
export const FASSUNG_NAME = { X: '0.11', Y: '0.12-Prüffassung' };
// Petras freigegebene Begrüßung (Entscheidung 19.10., 0.8-Freigabe Punkt 2). Die Seite zeigt sie fest, in beiden Fassungen gleich.
export const BEGRUESSUNG = 'Da bist du ja. Ich bin Elsbeth Unknown. Und wie darf ich dich nennen?';

// Listenpreise in $ je Million Tokens (OpenRouter, abgerufen 30.10.2026). Nur für die Vorab-Bremse; gebucht wird der echte Preis.
const PREISE = {
  'anthropic/claude-haiku-5.5': [0.1, 0.5], 'anthropic/claude-sonnet-5.5': [2, 10], 'anthropic/claude-opus-5.5': [4, 20],
};
const AUSGABEN = path.join(HIER, 'ausgaben.json');
const bisher = () => fs.existsSync(AUSGABEN) ? JSON.parse(fs.readFileSync(AUSGABEN, 'utf8')) : { gesamt_usd: 0, posten: [] };
export const ausgegeben = () => bisher().gesamt_usd;

function schluessel() {
  return fs.readFileSync(path.join(os.homedir(), 'Desktop', 'OPENROUTER-API-KEY.txt'), 'utf8').trim();
}

// messages: [{role:'user'|'assistant', content}]
export async function frage({ modell, system, messages, maxTokens = 700, temperatur = 0.8, etikett }) {
  if (!JA) return { text: '', kosten: 0, trocken: true };
  const p = PREISE[modell];
  if (!p) throw new Error('Unbekanntes Modell: ' + modell);
  if (!BUDGET) throw new Error('Keine Obergrenze gesetzt (--budget).');
  const zeichen = system.length + messages.reduce((s, m) => s + m.content.length, 0);
  const schlimmst = (zeichen / 3) * p[0] * 1.25 / 1e6 + maxTokens * p[1] / 1e6;
  const b = bisher();
  if (b.gesamt_usd + schlimmst > BUDGET) throw new Error(`Obergrenze erreicht: ${b.gesamt_usd.toFixed(3)} $ von ${BUDGET} $ ausgegeben. Nichts mehr gesendet.`);
  const body = {
    model: modell, max_tokens: maxTokens, temperature: temperatur, usage: { include: true },
    messages: [{ role: 'system', content: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }] }, ...messages],
  };
  let d;
  for (let versuch = 1; ; versuch++) {
    const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: { authorization: 'Bearer ' + schluessel(), 'content-type': 'application/json', 'X-Title': 'Elsbeth-Gespraechsprobe' },
      body: JSON.stringify(body),
    });
    d = await r.json();
    if (r.ok && d.choices?.[0]?.message?.content) break;
    if (versuch >= 3) throw new Error(`${r.status} ${JSON.stringify(d).slice(0, 300)}`);
    await new Promise(z => setTimeout(z, 3000 * versuch));
  }
  const kosten = Number(d.usage?.cost || 0);
  b.gesamt_usd += kosten;
  b.posten.push({ zeit: new Date().toISOString(), modell, etikett, usd: kosten, ein: d.usage?.prompt_tokens, aus: d.usage?.completion_tokens });
  fs.writeFileSync(AUSGABEN, JSON.stringify(b, null, 1));
  return { text: d.choices[0].message.content.trim(), kosten };
}

// Elsbeth antwortet. verlauf: [{wer:'elsbeth'|'gast', text}], beginnt mit der festen Begrüßung.
export async function elsbeth(fassung, verlauf, etikett) {
  const messages = verlauf.map(v => ({ role: v.wer === 'elsbeth' ? 'assistant' : 'user', content: v.text }));
  // Die Begrüßung steht als Elsbeths erste Antwort im Verlauf; davor braucht das Modell einen Gast-Anfang.
  messages.unshift({ role: 'user', content: '(Der Gast kommt in die Bibliothek.)' });
  const r = await frage({ modell: MODELL, system: FASSUNGEN[fassung], messages, etikett });
  if (r.trocken) {
    await new Promise(z => setTimeout(z, 500));
    return { text: '(Trockenlauf: Hier antwortet Elsbeth, sobald Petra Modell und Obergrenze freigegeben hat.)', kosten: 0, tuer: false };
  }
  return { text: r.text, kosten: r.kosten, tuer: r.text.includes('▸ UNKNOWN') };
}
