// Gemeinsamer KI-Anschluss für die Gesprächsprobe (Seite und Testgast).
// Ohne --ja wird NICHTS gesendet (Trockenlauf, keine Kosten).
// Mit --ja geht jede Anfrage direkt an Anthropic oder OpenAI (oder mit --weg openrouter über OpenRouter); vor JEDEM Aufruf wird der schlimmste Fall gegen die Obergrenze gerechnet.
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

// Listenpreise in $ je Million Tokens (abgerufen 30.10.2026, bei OpenRouter und direkt gleich). Daraus werden die Kosten je Anfrage gerechnet.
export const PREISE = {
  'anthropic/claude-haiku-5.5': [0.1, 0.5], 'anthropic/claude-sonnet-5.5': [2, 10], 'anthropic/claude-opus-5.5': [4, 20],
  'openai/gpt-6-luna': [0.1, 0.5], 'openai/gpt-6.1-sol': [2, 10], 'openai/gpt-6-astra': [10, 50],
};
// OpenAI-Modelle denken vor der Antwort; das zählt in die Ausgabe-Tokens und braucht mehr Platz.
const PLATZ = modell => modell.startsWith('openai/') ? 3000 : 1500;
// Jeder Prozess (Seite, Testgast) führt sein eigenes Kassenbuch, damit sich zwei gleichzeitige Läufe nicht überschreiben.
const AUSGABEN = path.join(HIER, opt('kasse', 'ausgaben.json'));
const bisher = () => fs.existsSync(AUSGABEN) ? JSON.parse(fs.readFileSync(AUSGABEN, 'utf8')) : { gesamt_usd: 0, posten: [] };
export const ausgegeben = () => bisher().gesamt_usd;

// Weg zu den Modellen: direkt bei Anthropic und OpenAI (Standard, Schlüssel vom Modellvergleich)
// oder über OpenRouter (--weg openrouter). Der direkte Weg hängt nicht am OpenRouter-Guthaben.
const WEG = opt('weg', 'direkt');
const datei = n => fs.readFileSync(path.join(os.homedir(), 'Desktop', n), 'utf8').trim();
const DIREKT_ID = m => m.split('/')[1].replace('claude-haiku-5.5', 'claude-haiku-5-5').replace('claude-sonnet-5.5', 'claude-sonnet-5-5').replace('claude-opus-5.5', 'claude-opus-5-5');

async function sende(modell, system, messages, maxTokens, temperatur) {
  const anthropic = modell.startsWith('anthropic/'), p = PREISE[modell];
  if (WEG === 'openrouter') {
    const body = { model: modell, max_tokens: maxTokens, temperature: temperatur, usage: { include: true },
      messages: [{ role: 'system', content: anthropic ? [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }] : system }, ...messages] };
    if (!anthropic) { delete body.temperature; body.reasoning = { effort: 'medium' }; }
    const r = await fetch('https://openrouter.ai/api/v1/chat/completions', { method: 'POST',
      headers: { authorization: 'Bearer ' + datei('OPENROUTER-API-KEY.txt'), 'content-type': 'application/json', 'X-Title': 'Elsbeth-Gespraechsprobe' }, body: JSON.stringify(body) });
    const d = await r.json();
    return { ok: r.ok, status: r.status, d, text: d.choices?.[0]?.message?.content, kosten: Number(d.usage?.cost || 0), ein: d.usage?.prompt_tokens, aus: d.usage?.completion_tokens };
  }
  if (anthropic) {
    const r = await fetch('https://api.anthropic.com/v1/messages', { method: 'POST',
      headers: { 'x-api-key': datei('ANTHROPIC-API-KEY.txt'), 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: DIREKT_ID(modell), max_tokens: maxTokens,
        system: [{ type: 'text', text: system, cache_control: { type: 'ephemeral' } }], messages }) });
    const d = await r.json(), u = d.usage || {};
    const kosten = ((u.input_tokens || 0) * p[0] + (u.cache_read_input_tokens || 0) * p[0] * 0.1 + (u.cache_creation_input_tokens || 0) * p[0] * 1.25 + (u.output_tokens || 0) * p[1]) / 1e6;
    return { ok: r.ok, status: r.status, d, text: (d.content || []).filter(x => x.type === 'text').map(x => x.text).join('').trim(), kosten, ein: u.input_tokens, aus: u.output_tokens };
  }
  const r = await fetch('https://api.openai.com/v1/responses', { method: 'POST',
    headers: { authorization: 'Bearer ' + datei('OPENAI-API-KEY-TISCHTEST.txt'), 'content-type': 'application/json' },
    body: JSON.stringify({ model: DIREKT_ID(modell), instructions: system, input: messages, reasoning: { effort: 'medium' },
      max_output_tokens: maxTokens, store: false, prompt_cache_key: 'elsbeth-probe-' + DIREKT_ID(modell) }) });
  const d = await r.json(), u = d.usage || {}, cache = u.input_tokens_details?.cached_tokens || 0;
  const text = (d.output || []).filter(o => o.type === 'message').flatMap(o => o.content || []).filter(c => c.type === 'output_text').map(c => c.text).join('').trim();
  const kosten = (((u.input_tokens || 0) - cache) * p[0] + cache * p[0] * 0.1 + (u.output_tokens || 0) * p[1]) / 1e6;
  return { ok: r.ok, status: r.status, d, text, kosten, ein: u.input_tokens, aus: u.output_tokens };
}

// messages: [{role:'user'|'assistant', content}]
export async function frage({ modell, system, messages, maxTokens, temperatur = 0.8, etikett }) {
  if (!JA) return { text: '', kosten: 0, trocken: true };
  maxTokens = maxTokens || PLATZ(modell);
  const p = PREISE[modell];
  if (!p) throw new Error('Unbekanntes Modell: ' + modell);
  if (!BUDGET) throw new Error('Keine Obergrenze gesetzt (--budget).');
  const zeichen = system.length + messages.reduce((s, m) => s + m.content.length, 0);
  const schlimmst = (zeichen / 3) * p[0] * 1.25 / 1e6 + maxTokens * p[1] / 1e6;
  if (bisher().gesamt_usd + schlimmst > BUDGET) throw new Error(`Notbremse: ${bisher().gesamt_usd.toFixed(3)} $ von ${BUDGET} $ ausgegeben. Nichts mehr gesendet.`);
  let r;
  for (let versuch = 1; ; versuch++) {
    r = await sende(modell, system, messages, maxTokens, temperatur);
    if (r.ok && r.text) break;
    if (versuch >= 4) throw new Error(`${r.status} ${JSON.stringify(r.d).slice(0, 300)}`);
    await new Promise(z => setTimeout(z, 4000 * versuch));
  }
  const b = bisher();
  b.gesamt_usd += r.kosten;
  b.posten.push({ zeit: new Date().toISOString(), weg: WEG, modell, etikett, usd: r.kosten, ein: r.ein, aus: r.aus });
  fs.writeFileSync(AUSGABEN, JSON.stringify(b, null, 1));
  return { text: r.text.trim(), kosten: r.kosten };
}

// Elsbeth antwortet. verlauf: [{wer:'elsbeth'|'gast', text}], beginnt mit der festen Begrüßung.
export async function elsbeth(fassung, verlauf, etikett, modell = MODELL) {
  const messages = verlauf.map(v => ({ role: v.wer === 'elsbeth' ? 'assistant' : 'user', content: v.text }));
  // Die Begrüßung steht als Elsbeths erste Antwort im Verlauf; davor braucht das Modell einen Gast-Anfang.
  messages.unshift({ role: 'user', content: '(Der Gast kommt in die Bibliothek.)' });
  const r = await frage({ modell, system: FASSUNGEN[fassung], messages, etikett });
  if (r.trocken) {
    await new Promise(z => setTimeout(z, 500));
    return { text: '(Trockenlauf: Hier antwortet Elsbeth, sobald Petra Modell und Obergrenze freigegeben hat.)', kosten: 0, tuer: false };
  }
  return { text: r.text, kosten: r.kosten, tuer: r.text.includes('▸ UNKNOWN') };
}
