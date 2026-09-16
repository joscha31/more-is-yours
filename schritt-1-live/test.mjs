// Prüft Texte und Startseite. Aufruf: node test.mjs
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
const hier = dirname(fileURLToPath(import.meta.url));
const lies = (p) => readFileSync(join(hier, p), "utf8");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
let fehler = 0;
const pruefe = (ok, was) => { console.log((ok ? "OK   " : "FEHL ") + was); if (!ok) fehler++; };

const anweisung = lies("texte/01-projektanweisung.txt");
const zeichen = [...anweisung.trim()].length;
pruefe(zeichen <= 8000, `Projektanweisung hat ${zeichen} Zeichen (Deckel 8000)`);
for (const t of ["01-projektanweisung", "02-starttext", "03-abschlussbefehl", "04-weiterbefehl"]) {
  const s = lies(`texte/${t}.txt`);
  pruefe(!/[–—]/.test(s), `${t}: keine Gedankenstriche`);
}
const pflicht = ["KÖNNEN IST NICHT WOLLEN", "Kein Geschäftsmodell", "Keine psychologische Deutung", "Eine Frage, dann zuhören",
  "Weiß ich nicht", "Will ich nicht vertiefen", "Pause", "Ilse, weiter mit Schritt 1", "Ilse, mach mir den Abschluss",
  "## Das bringe ich mit", "## Das nehme ich mit", "## Das lasse ich zurück", "## Das kann ich, will ich aber nicht mehr beruflich machen",
  "## Meine Must-haves", "## Meine No-Gos", "## Offene Punkte", "Storybank", "gesagt, abgeleitet, Vermutung, klären",
  "Beispiel, Selbstaussage, erlebt, offen", "0800 111 0 111", "BEHALTEN", "NO-GO"];
for (const p of pflicht) pruefe(anweisung.includes(p), `Anweisung enthält „${p}“`);
for (let i = 1; i <= 10; i++) pruefe(new RegExp(`^${i}\\. `, "m").test(anweisung), `Gesprächsblock ${i} vorhanden`);
const verboten = [/ich empfehle dir/i, /dein Geschäftsmodell/i, /Positionierung:/];
for (const v of verboten) pruefe(!v.test(anweisung), `Anweisung ohne ${v}`);

const html = lies("index.html");
for (const [id, datei] of [["projektanweisung", "01-projektanweisung"], ["starttext", "02-starttext"], ["abschluss", "03-abschlussbefehl"], ["weiter", "04-weiterbefehl"]]) {
  const soll = esc(lies(`texte/${datei}.txt`).replace(/\s+$/, ""));
  pruefe(html.includes(`id="${id}">${soll}</pre>`), `Startseite zeigt ${datei} wortgleich`);
  pruefe(html.includes(`data-kopiere="${id}"`), `Kopierknopf für ${id} vorhanden`);
}
pruefe(!/\{\{[A-Z]+\}\}/.test(html), "keine offenen Platzhalter");
pruefe(html.startsWith("<!doctype html>"), "index.html hat Dokumentkopf");
pruefe(html.includes('lang="de"'), "Sprache Deutsch");
pruefe(/font-size:\s*19px/.test(html), "Fließtext 19px");
pruefe((html.match(/<section/g) || []).length === 7, "sieben Abschnitte (5 Schritte + 2 Hinweise)");
pruefe(!/https?:\/\/(?!fonts\.googleapis\.com|fonts\.gstatic\.com)/.test(html.replace(/https:\/\/claude\.ai[^\s"]*/g, "")), "keine fremden Skripte oder Bilder außer Google Fonts");
console.log(fehler ? `\n${fehler} Fehler` : "\nAlles grün");
process.exit(fehler ? 1 : 0);
