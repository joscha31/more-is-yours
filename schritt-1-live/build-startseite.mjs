// Baut index.html aus vorlage.html und den Texten in texte/.
// Aufruf: node build-startseite.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const hier = dirname(fileURLToPath(import.meta.url));
const lies = (p) => readFileSync(join(hier, p), "utf8").replace(/\s+$/, "");
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const texte = {
  PROJEKTANWEISUNG: lies("texte/01-projektanweisung.txt"),
  STARTTEXT: lies("texte/02-starttext.txt"),
  ABSCHLUSS: lies("texte/03-abschlussbefehl.txt"),
  WEITER: lies("texte/04-weiterbefehl.txt"),
};

let html = lies("vorlage.html");
for (const [k, v] of Object.entries(texte)) {
  html = html.split(`{{${k}}}`).join(esc(v));
}
if (/\{\{[A-Z]+\}\}/.test(html)) throw new Error("Platzhalter offen: " + html.match(/\{\{[A-Z]+\}\}/)[0]);
// index.html: eigenständig im Browser zu öffnen (mit Kopf). artifact.html: Seiteninhalt ohne Kopf, für claude.ai-Artifacts.
const kopf = '<!doctype html>\n<html lang="de">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n';
const [head, body] = html.split("\n<main>");
writeFileSync(join(hier, "index.html"), kopf + head + "\n</head>\n<body>\n<main>" + body + "\n</body>\n</html>\n");
if (process.argv[2]) writeFileSync(process.argv[2], html + "\n");
console.log("index.html geschrieben,", html.length, "Zeichen Inhalt");
