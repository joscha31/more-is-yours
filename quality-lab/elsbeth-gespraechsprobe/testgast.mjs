#!/usr/bin/env node
// Antwortender Testgast: Ein zweites Modell spielt drei erfundene Gäste, die auf Elsbeth reagieren.
// Jeder Gast spricht mit beiden Fassungen, gleich oft. Die Gespräche bekommen nur Nummern (blind),
// der Schlüssel liegt getrennt in gespraeche-testgast/schluessel.json.
//
//   node testgast.mjs                                         Trockenlauf: zeigt nur den Plan, sendet nichts
//   node testgast.mjs --ja --modell anthropic/claude-sonnet-5.5 --gast anthropic/claude-sonnet-5.5 --budget 6 --wiederholungen 2
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { JA, MODELL, GAST_MODELL, BUDGET, BEGRUESSUNG, PREISE, elsbeth, frage, ausgegeben } from './ki.mjs';

const HIER = path.dirname(new URL(import.meta.url).pathname);
const ABLAGE = path.join(HIER, 'gespraeche-testgast');
const G = JSON.parse(fs.readFileSync(path.join(HIER, 'gaeste.json'), 'utf8'));
const args = process.argv.slice(2);
const wert = n => { const i = args.indexOf('--' + n); return i < 0 ? null : args[i + 1]; };
const WDH = Number(wert('wiederholungen') || 1) || 1;
const MODELLE = (wert('modelle') || MODELL).split(',');
for (const m of MODELLE) if (!PREISE[m]) { console.log('Unbekanntes Modell:', m); process.exit(1); }
const MAX = 16;

// Alle Läufe planen und mischen, damit die Nummer nichts über Modell, Fassung oder Gast verrät.
const plan = [];
for (const modell of MODELLE) for (const p of G.profile) for (const f of ['X', 'Y']) for (let w = 1; w <= WDH; w++) plan.push({ modell, profil: p, fassung: f, w });
for (let i = plan.length - 1; i > 0; i--) { const j = crypto.randomInt(i + 1); [plan[i], plan[j]] = [plan[j], plan[i]]; }

// --nachholen: Fertige Gespräche bleiben, wie sie sind. Die fehlenden Kombinationen bekommen zufällig die freien Nummern.
const NACHHOLEN = args.includes('--nachholen');
const SF = path.join(ABLAGE, 'schluessel.json');
const schluessel = NACHHOLEN && fs.existsSync(SF) ? JSON.parse(fs.readFileSync(SF, 'utf8')) : [];
if (NACHHOLEN) {
  const fertig = new Set(schluessel.map(s => `${s.modell}|${s.profil}|${s.fassung}`));
  const offen = plan.filter(x => !fertig.has(`${x.modell}|${x.profil.kurz}|${x.fassung}`));
  const freieNr = plan.map((_, i) => i + 1).filter(n => !schluessel.some(s => s.nr === n));
  plan.fill(null);
  offen.forEach((x, k) => { plan[freieNr[k] - 1] = x; });
  console.log(`Nachholen: ${offen.length} offene Gespräche auf die Nummern ${freieNr.join(', ')}`);
}

console.log(`${plan.length} Gespräche geplant, bis ${MAX} Wechsel je Gespräch. Elsbeth: ${MODELLE.join(', ')} · Gast: ${GAST_MODELL}`);
if (!JA) { console.log('Trockenlauf: Es wird nichts gesendet. Für den echten Lauf --ja und --budget angeben.'); process.exit(0); }
fs.mkdirSync(ABLAGE, { recursive: true });

async function einGespraech(i) {
    const { modell, profil, fassung } = plan[i], nr = i + 1;
    const verlauf = [{ wer: 'elsbeth', text: BEGRUESSUNG }];
    const zeilen = [`Gespräch ${nr}`, '', `Elsbeth: ${BEGRUESSUNG}`, ''];
    let kosten = 0;
    for (let n = 1; n <= MAX; n++) {
      // Der Gast sieht Elsbeths Sätze als Gegenüber, seine eigenen als eigene Antworten.
      const gm = verlauf.map(v => ({ role: v.wer === 'elsbeth' ? 'user' : 'assistant', content: v.text }));
      const g = await frage({ modell: GAST_MODELL, system: G.rahmen + profil.text, messages: gm, maxTokens: 1500, temperatur: 0.9, etikett: `gast/${nr}/${n}` });
      kosten += g.kosten;
      const ende = g.text.includes('[ENDE]'), gast = g.text.replace('[ENDE]', '').trim();
      verlauf.push({ wer: 'gast', text: gast }); zeilen.push(`Gast: ${gast}`, '');
      if (ende && n > 1) break;
      const e = await elsbeth(fassung, verlauf, `testgast/${nr}/${n}`, modell);
      kosten += e.kosten; verlauf.push({ wer: 'elsbeth', text: e.text }); zeilen.push(`Elsbeth: ${e.text}`, '');
      if (e.tuer) { zeilen.push('(Hier öffnet sich die Tür. Die Probe endet an der Tür.)'); break; }
    }
    const datei = `gespraech-${String(nr).padStart(2, '0')}.md`;
    fs.writeFileSync(path.join(ABLAGE, datei), zeilen.join('\n'));
    schluessel.push({ nr, datei, modell, profil: profil.kurz, fassung, kosten_usd: kosten, wechsel: verlauf.filter(v => v.wer === 'gast').length });
    schluessel.sort((a, b) => a.nr - b.nr);
    fs.writeFileSync(path.join(ABLAGE, 'schluessel.json'), JSON.stringify(schluessel, null, 1));
    console.log(`Gespräch ${nr}: ${verlauf.length - 1} Beiträge, ${(kosten * 100).toFixed(1)} ct · fertig ${schluessel.length} von ${plan.length} insgesamt`);
}

// Mehrere Gespräche gleichzeitig; die Obergrenze prüft jede einzelne Anfrage.
const GLEICHZEITIG = Number(wert('gleichzeitig') || 6);
let naechstes = 0;
await Promise.all(Array.from({ length: GLEICHZEITIG }, async () => {
  while (naechstes < plan.length) {
    const i = naechstes++;
    if (!plan[i]) continue;
    try { await einGespraech(i); } catch (e) { console.log(`Gespräch ${i + 1} abgebrochen:`, e.message); }
  }
}));
console.log(`Insgesamt bisher ${ausgegeben().toFixed(3)} $ von ${BUDGET} $`);
