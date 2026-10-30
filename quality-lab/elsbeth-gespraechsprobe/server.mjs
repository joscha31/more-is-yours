#!/usr/bin/env node
// Elsbeth-Gesprächsprobe: Petra spricht selbst mit Elsbeth, blind, 0.11 gegen 0.12-Prüffassung.
// Nur auf diesem Mac (127.0.0.1). Keine Verbindung zur Zentrale, zur Halle oder zum Elsbeth-Server.
//
//   node server.mjs                                   Trockenlauf: Seite läuft, nichts wird gesendet
//   node server.mjs --ja --modell anthropic/claude-sonnet-5.5 --budget 6
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { JA, MODELL, BUDGET, BEGRUESSUNG, FASSUNG_NAME, PREISE, elsbeth, ausgegeben } from './ki.mjs';

// --modelle a,b,c: Jedes neue Gespräch bekommt verdeckt eines davon, reihum in gemischter Reihenfolge.
const args = process.argv.slice(2);
const MODELLE = (args.includes('--modelle') ? args[args.indexOf('--modelle') + 1] : MODELL).split(',');
for (const m of MODELLE) if (!PREISE[m]) { console.log('Unbekanntes Modell:', m); process.exit(1); }

const HIER = path.dirname(new URL(import.meta.url).pathname);
const ABLAGE = path.join(HIER, 'gespraeche-petra');
const TESTGAST = path.join(HIER, 'gespraeche-testgast');
fs.mkdirSync(ABLAGE, { recursive: true });
const PORT = 8794;

const alle = () => fs.readdirSync(ABLAGE).filter(f => f.endsWith('.json')).map(f => JSON.parse(fs.readFileSync(path.join(ABLAGE, f), 'utf8')));
const speichere = g => fs.writeFileSync(path.join(ABLAGE, g.id + '.json'), JSON.stringify(g, null, 1));
const lade = id => { if (!/^[a-f0-9]{12}$/.test(id)) throw new Error('falsche Nummer'); return JSON.parse(fs.readFileSync(path.join(ABLAGE, id + '.json'), 'utf8')); };

// Ausgewogen mischen: In jedem Paar kommt jede Fassung einmal vor, die Reihenfolge im Paar ist zufällig.
function naechsteFassung() {
  const g = alle().sort((a, b) => a.nr - b.nr);
  if (g.length % 2 === 1) return g[g.length - 1].fassung === 'X' ? 'Y' : 'X';
  return crypto.randomInt(2) ? 'X' : 'Y';
}

// Modell: in jedem Durchgang durch die Liste kommt jedes Modell einmal dran, Reihenfolge zufällig.
function naechstesModell() {
  const echte = alle().filter(g => g.modell !== 'trockenlauf');
  const runde = echte.length % MODELLE.length, rundeStart = echte.length - runde;
  const schon = echte.sort((a, b) => a.nr - b.nr).slice(rundeStart).map(g => g.modell);
  const offen = MODELLE.filter(m => !schon.includes(m));
  return offen[crypto.randomInt(offen.length)];
}

function ohneSchluessel(g) { const { fassung, modell, ...rest } = g; return rest; }

async function api(pfad, daten) {
  if (pfad === '/api/stand') return { trocken: !JA, modell: JA ? (MODELLE.length > 1 ? `${MODELLE.length} Modellen, verdeckt gemischt` : MODELL) : null, ausgegeben: ausgegeben(), budget: BUDGET, gespraeche: alle().map(g => ({ id: g.id, nr: g.nr, rolle: g.rolle, wechsel: g.verlauf.filter(v => v.wer === 'gast').length, bewertet: !!g.bewertung })) };
  if (pfad === '/api/neu') {
    const nr = alle().length + 1;
    const g = { id: crypto.randomBytes(6).toString('hex'), nr, fassung: naechsteFassung(), modell: JA ? naechstesModell() : 'trockenlauf', rolle: String(daten.rolle || '').slice(0, 60), beginn: new Date().toISOString(), verlauf: [{ wer: 'elsbeth', text: BEGRUESSUNG }], kosten: 0, tuer: false };
    speichere(g); return ohneSchluessel(g);
  }
  if (pfad === '/api/sag') {
    const g = lade(daten.id);
    if (g.tuer) throw new Error('Die Tür ist schon offen, die Probe endet hier.');
    const text = String(daten.text || '').trim().slice(0, 1500);
    if (!text) throw new Error('leer');
    g.verlauf.push({ wer: 'gast', text });
    const r = await elsbeth(g.fassung, g.verlauf, `petra/${g.nr}/${g.verlauf.length}`, g.modell);
    g.verlauf.push({ wer: 'elsbeth', text: r.text }); g.kosten += r.kosten; g.tuer = r.tuer;
    speichere(g); return { text: r.text, tuer: r.tuer };
  }
  if (pfad === '/api/bewerte') {
    const g = lade(daten.id);
    g.bewertung = { weiterreden: String(daten.weiterreden || ''), lebendig: String(daten.lebendig || '').slice(0, 2000), kuenstlich: String(daten.kuenstlich || '').slice(0, 2000), zeit: new Date().toISOString() };
    speichere(g); return { ok: true };
  }
  if (pfad === '/api/testgast') {
    if (!fs.existsSync(TESTGAST)) return { liste: [] };
    return { liste: fs.readdirSync(TESTGAST).filter(f => /^gespraech-\d+\.md$/.test(f)).sort().map(f => ({ name: f, text: fs.readFileSync(path.join(TESTGAST, f), 'utf8') })) };
  }
  if (pfad === '/api/aufloesung') {
    const petra = alle().sort((a, b) => a.nr - b.nr).map(g => ({ nr: g.nr, fassung: FASSUNG_NAME[g.fassung], modell: g.modell.split('/').pop(), rolle: g.rolle, weiterreden: g.bewertung?.weiterreden || '–' }));
    const sf = path.join(TESTGAST, 'schluessel.json');
    const gast = fs.existsSync(sf) ? JSON.parse(fs.readFileSync(sf, 'utf8')) : [];
    return { petra, testgast: gast.map(s => ({ nr: s.nr, profil: s.profil, fassung: FASSUNG_NAME[s.fassung], modell: s.modell.split('/')[1] })) };
  }
  throw new Error('unbekannt');
}

http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
      res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return res.end(fs.readFileSync(path.join(HIER, 'probe.html')));
    }
    if (req.method === 'POST' && req.url.startsWith('/api/')) {
      let roh = ''; for await (const s of req) { roh += s; if (roh.length > 10000) throw new Error('zu lang'); }
      const out = await api(req.url, roh ? JSON.parse(roh) : {});
      res.writeHead(200, { 'content-type': 'application/json' }); return res.end(JSON.stringify(out));
    }
    res.writeHead(404); res.end();
  } catch (e) {
    res.writeHead(400, { 'content-type': 'application/json' }); res.end(JSON.stringify({ fehler: e.message }));
  }
}).listen(PORT, '127.0.0.1', () => {
  console.log(`Gesprächsprobe läuft: http://127.0.0.1:${PORT}/`);
  console.log(JA ? `ECHT: Modelle ${MODELLE.join(', ')}, Obergrenze ${BUDGET} $, bisher ${ausgegeben().toFixed(3)} $` : 'TROCKENLAUF: Es wird nichts gesendet, keine Kosten.');
  if (JA && !BUDGET) { console.log('Ohne --budget wird nichts gesendet.'); }
});
