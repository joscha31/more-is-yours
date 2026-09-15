# Bericht — Option Genome Framework 0.4: die drei Korrekturen umgesetzt (Ilse 0.1, 15.09.2026, nachmittags)

Kontext für dich: Petra hat die fünf CONTENT GAPs aus dem 0.3-Bericht geklärt (`entscheidungen/2026-09-15-option-genome-content-gaps-claude-bericht.md`, Framework 0.4) und Claude Code den Korrektur-Brief (`build-briefs/2026-09-15-option-genome-framework-0.4-korrektur.md`, BUILD READY) gegeben. Kein Neubau — drei Korrekturen an der laufenden Technik. Hier die Antwort in den acht Punkten des Briefs.

## 1. Was wurde geändert

| Datei | Was |
|---|---|
| `lib/option-genome.schema.json` | Schema **0.2 → 0.3**: f31–f33 als Text, f0b und ausbau.f41 als `deprecated` Altbestand, Beschreibungen f6/f27/f37 eindeutig |
| `lib/optionen.json` | Datei **2026-09-15.2 → 2026-09-15.3**, Regel ⑨, `teilzeit-nebenjob.ebenen.familie = "Anstellung"` — sonst kein Wert angefasst (Skript `scripts/optionen-korrektur-0-4.mjs`, idempotent, mit Beweis) |
| `lib/optionen.js` | Grundfrage 3 → f31; Altbestand-Regel (`ALTBESTAND`, Stichtag 15.09.2026, Ziel f37); Landkarte 1–40 unverändert, Nr. 18 = f27, Nr. 22 = f6 |
| `optionen.html` · `passung.html` | Beschriftungen: „Einstiegskosten — was kostet der Start?", „Kapitalbedarf beim Wachstum — braucht sie später zusätzlich Geld?", „Rechtliche Hürde (Altbestand, nur lesen)", „… Besonderheiten (Hauptstelle)", „Wie geliefert wird"; f31–f33 stehen jetzt auch auf der Seite (fehlten seit DI-3) |
| `scripts/probe-optionen.mjs` · Tests | Live-Probe angepasst, drei neue Tests |

Matcher, Dienstag, Realitätscheck und API brauchten keine Änderung: sie lesen Text- und Stufenwerte ohnehin als Worte.

## 2. Wie alte Daten erhalten wurden

- Das Korrekturskript vergleicht vorher und nachher Feld für Feld und bricht ab, wenn außer der einen Familien-Zuordnung, Version, Schema-Nummer und Regel ⑨ irgendetwas anders ist. Belegte Kernfelder **11 → 11**.
- Der Migrationstest gegen den git-Stand vor Schema 0.2 läuft weiter (jetzt mit der geklärten Familie als einziger Abweichung).
- Nichts wurde gelöscht: alle f0b-Werte (Kern und zwölf Varianten) stehen da und zählen weiter als belegt.

## 3. Sind f31–f33 jetzt beschreibend nutzbar?

Ja. Alle drei sind Textfelder (bis 600 Zeichen), mit Herkunft und Quelle wie jedes Feld. Ein Satz wie „als laufende Arbeit für einen Arbeitgeber, vor Ort" ist gültig, „kein besonderes Leerlaufrisiko" auch; eine Zahl oder Spanne wird abgewiesen. Alte vierstufige Worte (kaum · wenig · mittel · hoch) bleiben als Text gültig — es gab aber ohnehin keine, alle drei sind bei allen zehn Wegen offen. Grundfrage 3 zeigt f31; sobald das Lab einen Satz einträgt, steht er dort. Ein Anteil am Arbeitstag wurde **nicht** eingebaut (Klärung: neue Entscheidung, nicht jetzt).

## 4. Wie werden die alten Rechtsfelder behandelt?

- `f37_rechtliche_besonderheiten` ist die Hauptstelle (Schema, Beschriftung, Gruppe „Recht und Nachsehen" ganz oben).
- `f0b_rechtliche_huerde` (Kern und Varianten) und `ausbau.f41_regulatorik` sind im Schema `deprecated` und heißen auf der Seite „Altbestand, nur lesen". Sie bleiben Pflicht-Struktur, lesbar, zählen weiter als belegt, werden nie gelöscht.
- Die Prüfung lässt einen **neuen** Inhalt dort nicht mehr durch: trägt ein Altbestand-Feld ein `gueltig_ab` nach dem 15.09.2026, meldet sie „gehört nach f37". Eine spätere Nachprüfung des alten Inhalts (`zuletzt_geprueft`) bleibt erlaubt.

## 5. Ist f27 eindeutig als Wachstumskapital gekennzeichnet?

Ja. Schema-Beschreibung, Beschriftung auf beiden Seiten und Landkarte (Nr. 18 „Kapitalbedarf beim Wachstum" = f27, Nr. 22 „Einstiegskosten" = f6) sagen es wörtlich: f6 = Was kostet der Start? · f27 = Braucht die Frau später zusätzlich Geld, wenn die Option größer wird? Beide bleiben getrennte Spannen-Felder; die belegte Start-Spanne von Teilzeit (0 €) ist unangetastet.

## 6. Tests

| Test | Ergebnis |
|---|---|
| `node --test` (Haus, ohne Netz) | **111 Tests: 110 grün, 1 übersprungen** (der bekannte Regressions-Test bis zur menschlichen Guard-Bewertung) |
| Korrekturskript, eingebauter Beweis | belegt 11 → 11, nur die eine Zuordnung geändert, zweiter Lauf leer |
| ajv, JSON Schema Draft 2020-12 | 0 Fehler bei 10 Optionen; f31 als Text gültig |
| `scripts/probe-optionen.mjs` gegen **ilse.moreisyours.de** | siehe Zeile unten |
| `scripts/probe-dienstag.mjs` gegen live | siehe Zeile unten |

**Live (ilse.moreisyours.de, 14:10 Uhr, Deploy aus main):** `probe-optionen.mjs` **23 / 23 grün** (Version 2026-09-15.3, Schema 0.3, Grundfrage 3 aus f31, nur Teilzeit/Nebenjob mit Familie Anstellung, Feld 23 gesperrt, 401 ohne Anmeldung), `probe-dienstag.mjs` **11 / 11 grün**, Live-Antwort identisch mit lokaler Berechnung.

## 7. Sind alle Tests erfolgreich?

Ja — Haus, Validator und Live.

## 8. Gibt es noch ein CONTENT GAP?

**Nein.** Alle fünf vom Vormittag sind geklärt und eingebaut. Weiterhin beim Lab (kein GAP, sondern Befüllung): Varianten und Rollen unter „Anstellung", die Familien der anderen neun Wege, und die Sätze für f31–f37 der drei Goldstandard-Optionen. Kein Wert wurde erfunden, keine Zahl, kein Tagesablauf, keine weitere Zuordnung.
