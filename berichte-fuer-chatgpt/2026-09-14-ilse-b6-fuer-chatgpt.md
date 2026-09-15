# Bericht Baupaket B6 — Realitätscheck 0.1 (Ilse 0.1, 14.09.2026 nachts)

Kontext für dich: Gesamt-Master 3.0 §16 (Annahme → kleinster Test → echtes Ergebnis → neue Erkenntnis → Profil aktualisieren), §17 (Reality Learning, Historie bleibt), §23 B6, §28 Bereich 4 „Das probiere ich jetzt“.

## Was gebaut ist

1. **Migration 0009 (gelaufen):** `naechster_schritt.abgebrochen_am` und **`realitaetscheck_auswerten` als eine Transaktion** — der Schritt bekommt tatsächlich · Ergebnis · Überraschung · Bewertung; jede Erkenntnis wird ein Kisten-Zettel in ihren Worten (`direkt_gesagt`, `evidenz erfahrung`, `erlebt_in` = der Schritt, `verweist_auf` = die Annahme); die Annahme wird **nur wie die Frau sagt** bestätigt, verworfen (`ersetzt_durch` → erste Erkenntnis) oder bleibt offen. Ein zweites Auswerten wird abgewiesen: die Historie wird nie überschrieben.
2. **`lib/realitaetscheck.js` — die Regeln des Masters als Code:** Annahmen sind offene Hypothesen und Klärungsbedarf (Passung nur freigegebene Befunde); **eine harte oder aktuelle Grenze ist nie eine Annahme**; ein Passungs-Befund „testen“, dessen Optionsfelder alle offen sind, heißt **„hier fehlt Wissen über den Weg, nicht über dich“** und wird nicht zum Test; Annahme, Test und Sorte (die elf des Aktenschranks) sind Pflicht; je Annahme höchstens ein laufender Test.
3. **Seite `probieren.html`:** Vermutungen mit Quelle (Gespräch · Abgleich · Human Design) → Test anlegen → „Ich hab's gemacht — eintragen“ / „Hab ich nicht gemacht“ → **„Was dachten wir vorher – was wissen wir jetzt?“** als Vorher/Jetzt-Paar. Rückwirkung: Erkenntnis steht sofort im Profil (real erlebt), ist Lebensbeleg für die HD Lens, und die Seite meldet „Passung neu abgleichen“ (den Lauf stößt Petra an).
4. API: `GET probieren`, `POST realitaetscheck` (anlegen · auswerten · abbrechen). 81/81 Tests, Live-Probe 26/26 gegen `ilse.moreisyours.de`. Keine Kosten.

## Ein Fund

Das Anfragefeld für den Test hieß erst `was` — der Schalter der Konto-API heißt auch `was`; es wurde beim Senden überschrieben. Lokal unsichtbar, live gefunden, in `test` umbenannt. Lehre: Feldnamen nie wie API-Schalter.

## Offene Annahmen — bitte prüfen

1. **„So klein wie möglich“** prüft der Code nicht — die Frau formuliert, Ilse könnte im Gespräch begleiten (Zielkarte 6 bleibt Rahmen).
2. **Die sechs Erkenntnis-Fragen** (Zielkarte 8) sind nicht erfunden: das Formular fragt die Felder des Aktenschranks ab (tatsächlich · Ergebnis · Überraschung · Erkenntnis · Urteil · wie weiter). Beschließt ihr die sechs Fragen, werden sie die Beschriftungen.
3. Erkenntnis = Selbstaussage mit Evidenz „real erlebt“, immer von der Frau bestätigt. „Gemessen“ (eine Zahl) ist technisch da, im Formular noch nicht unterschieden.
4. Ein Test ohne Zettel-Annahme ist erlaubt (Annahme nur in ihren Worten).

## Prüffragen an dich

- Trifft „Grenze nie testen“ und „bei fehlendem Optionswissen nicht die Frau testen“ so, wie ihr §16 und Fachentscheidung 3 gemeint habt?
- Soll die Annahme beim Auswerten automatisch verworfen werden, wenn die Frau „stimmt so nicht“ sagt — so ist es gebaut — oder erst nach einem zweiten Blick von Petra?
- Reicht „vorher → jetzt“ als Reality Learning 0.1, oder wollt ihr eine Zeile „was sich im Matching ändert“ direkt daneben (heute: Hinweis + Petra lässt den Abgleich neu laufen)?
