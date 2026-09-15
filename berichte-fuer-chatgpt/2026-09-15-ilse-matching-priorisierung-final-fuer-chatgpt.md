# Bericht — Matching-Priorisierung final umgesetzt (Ilse 0.1, 15.09.2026, später Nachmittag)

Auftrag: `build-briefs/2026-09-15-matching-priorisierung-final.md` (BUILD READY) auf Grundlage von `entscheidungen/2026-09-15-matching-priorisierung-final.md`, `entscheidungen/2026-09-15-matching-vorschlaege-priorisierung.md`, `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md` und `forschung/Economic-Profile-Matching-Rule-Library-0.2.md` (alle PETRA APPROVED). Vorher stand die erste Vorschlagsimplementierung mit starrer Kriterienfolge (14:11 Uhr); sie ist ersetzt. Nur die vier verlangten Punkte.

## 1. Was geändert wurde

**Dateien:** `lib/vorschlaege.js` (neu geschrieben, Fassung `2026-09-15.3`) · `lib/matcher.js` (Belege tragen `status` und `bestaetigt_von`; die Kiste geht mit an die Vorschlags-Ebene; Rollen-Zettel zählen nicht als „Gesagtes") · `api/konto.js` (`POST {was:'passung_rolle', weg, rolle|null}`) · `passung.html` (Nutzerinnenansicht neu) · `test/vorschlaege.test.js` (neu) · `scripts/probe-vorschlaege.mjs` (Live-Probe neu) · README, Grundgerüst-Nachtrag. Keine Datenbank-Migration: die Rolle passt in die bestehende Kiste.

**Gates (Stufe 1, nie verrechnet):** harte Grenze · aktuelle Grenze · bestätigter Mindestbedarf mit Zeitbezug gegen belegte Optionsdaten · zwingende Voraussetzung (f7 belegt). Ein Gate führt in „Aktuell zurückstellen" mit Grund; die Passungen daneben bleiben sichtbar. Mindestbedarf gilt nur als Gate, wenn der Zettel von der Frau bestätigt ist **und** einen Zeitbezug in ihren Worten trägt (Monat, Woche, Jahr, „ab …", „bis …") **und** das Optionsfeld belegt ist. Fehlt der Zeitbezug oder die Bestätigung: kein Gate, nächster Schritt „Profilaussage bestätigen". Fehlt Optionswissen: Recherche, kein Konflikt. Wunschwert, Vorstellungsgrenze, Entwicklungsspielraum: nie Gate. Hilfreiche Voraussetzung (f8) fehlt: Aufbauhinweis, keine Reibung.

**Szenario-Rolle (Datenstruktur):** ein Kisten-Zettel `bereich passung · typ entscheidung · bezug <Weg> · art hauptweg|nebenweg|uebergang|testweg` mit `optionen_version` und `matcher_version` — Teil des Matching-Snapshots, nicht in der Option, nicht als dauerhafte Eigenschaft der Frau (er trägt die Versionen des Laufs und wird als `veraltet` markiert, wenn sich die Optionsdaten ändern). Die Frau setzt und korrigiert sie über `POST passung_rolle`; der alte Zettel zeigt per `ersetzt_durch` auf den neuen. Neben-, Übergangs- und Testweg führen in „Als Neben- oder Übergangsweg interessant". **Der Code schlägt keine Rolle vor** (siehe CONTENT GAP).

**Starre Kriterienfolge entfernt:** `KRITERIEN`, Plätze, `begruendung.vor_dem_naechsten`, „erstes unterscheidendes Kriterium" sind weg (ein Test prüft, dass sie im Code nicht mehr existieren). Stattdessen **individuelle Faktoren**: nur Aussagen der Frau hinter einem Befund, deren Gewicht sie selbst gesetzt hat — Stufe (starke Präferenz, Präferenz) oder Geldregel (Mindestbedarf, Wunsch für den Anfang, Vorstellungsgrenze, Entwicklungsspielraum). Schwere ist ein Wort aus ihrer Skala: starke Präferenz und Mindestbedarf = schwer, die übrigen = leicht. Ressourcen (`mitbringen`) sind Machbarkeit („Der Einstieg wäre leichter … Das sagt nichts darüber, ob du diesen Alltag willst") und tragen keinen Rang.

**Qualitative Gleichrangigkeit / Trade-offs:** je Faktor zwei Seiten (was dafür spricht: dafür › gemischt › nichts; was dagegen spricht: dagegen › gemischt › nichts). A hat einen Vorteil bei einem Faktor, wenn A dort mehr dafür oder B mehr dagegen hat. **A dominiert B**, wenn A mindestens einen Vorteil hat und B keinen gleich schweren oder schwereren. Sonst gleichrangig. „Stärkste Möglichkeiten" = die nicht dominierten Wege mit mindestens einem Faktor dafür; zwischen ihnen steht ein Trade-off-Satz („X trägt bei …, Y bei … — beide sind Top-Kandidaten, aus unterschiedlichen Gründen"). Nichts wird addiert oder gezählt.

**`gemischt`:** hat auf beiden Seiten etwas. Es hält einen leichteren Vorteil eines anderen Weges auf (beide bleiben vorne, der Trade-off steht in der Karte), macht den eigenen Weg aber nie zur Siegerin gegen einen sauber besseren am selben Faktor. Getestet in beide Richtungen.

**Evidenz vom Ranking getrennt:** Evidenz und Bestätigung gehen nur in `sicherheit` (gut belegt · teilweise belegt · vorläufig, mit Grund in einem Satz). Ein Test tauscht die Evidenz aus und prüft, dass Gruppe und Reihenfolge gleich bleiben.

**Suchraum:** ein Zettel `bereich suchraum · art ausgeschlossen · bezug <Weg>` führt in „Von dir derzeit ausgeschlossen" — kein Gate, kein aktiver Top-Vorschlag, kein Nachfragen, nächster Schritt „wieder öffnen". Liegt daneben eine harte Grenze, bleibt ihr Wunsch vorn und die Grenze sichtbar. `schwer_vorstellbar` bleibt eine Reibung in ihren Worten, ohne Gruppenwechsel.

**Fehlendes Optionswissen (RC-2):** Testfrage nur auf offenen Optionsfeldern → Recherche, nie Realitätscheck, nie allein Grund für „stärkste". Wachstum: Reibungen auf f25/f34/f35/f27/f19 oder am Entwicklungsziel heißen „Beim Wachsen: …". Genau ein nächster Schritt je Weg (Recherche · Variante wählen · Rolle ergänzen · Profilaussage bestätigen · Realitätscheck · Zahlencheck · Grenze prüfen · wieder öffnen).

## 2. Tests

| Test | Ergebnis |
|---|---|
| `test/vorschlaege.test.js`: die 15 Fälle aus Brief §14 (Fall 1–15) plus Struktur, Wachstum, nächster Schritt, Tor | **16 / 16 grün** |
| Gesamtes Haus (`node --test`) | **118 Tests: 117 grün, 1 übersprungen** (der bekannte Regressions-Test bis zur menschlichen Guard-Bewertung); alle B3-Tests unverändert grün |
| `scripts/probe-vorschlaege.mjs` gegen **ilse.moreisyours.de** mit echter Probe-Frau (Profil + acht Befunde in der Live-Datenbank, Petra-Sicht, Frau-Sicht, Rolle setzen → Übergang → Hauptweg → falsche Rolle 400, danach gelöscht) | **alle 33 Prüfungen grün** (nach einer Nachbesserung: der Rollen-Zettel braucht ein Zitat) |

## 3. Bildet die Nutzerinnenansicht die finale Logik ab?

Ja. `passung.html` zeigt oberhalb der Einzelbefunde die fünf Bereiche in der Folge der Entscheidung: Deine stärksten Möglichkeiten · Weitere sinnvolle Möglichkeiten · Als Neben- oder Übergangsweg interessant · Aktuell zurückstellen · Von dir derzeit ausgeschlossen. Je Weg eine Karte mit Rolle, warum interessant, was gut passt, wo es sich reibt, was noch zu klären ist, wie sicher die Aussage ist, der nächste Schritt — in ganzen Sätzen, mit farbigen Kacheln, 18-px-Schrift (Petras Zuruf während des Baus: „so braucht man eine Lupe"). Keine Plätze, keine Prozente, keine Note, keine Chips mit Fachwörtern. Die Frau setzt die Rolle per Knopf. Die B3-Einzelbefunde stehen unverändert darunter; Zähler und Prüfdetails sieht nur Petra.

## 4. Offene CONTENT GAPs

| Nr. | Bereich | Inhalt | Wofür | Kleinste Entscheidung |
|---|---|---|---|---|
| 1 | Matching | **Regel für die vorgeschlagene Szenario-Rolle.** Die Entscheidung sagt „das System darf eine Rolle vorschlagen", nennt aber keine Ableitung aus Frau × Weg × Situation × Ziel. Struktur und Korrektur durch die Frau stehen; der Code schlägt nichts vor, der Bereich „Neben-/Übergangsweg" füllt sich nur durch die Frau. | Feld „vorgeschlagene Rolle", Gruppe C | Welche Konstellation ergibt welche Rolle? (Beispiel der Entscheidung: Minijob → Übergang bei hohem Entwicklungsziel und aktueller Grenze) |
| 2 | Matching | **Auslöser für Bewerbung/Gespräch, kleines Angebot, Arbeitsprobe** als nächster Schritt: welches Optionswissen oder welcher Stand der Frau macht sie zum kleinsten sinnvollen Schritt? Die Sorten stehen im Code, werden aber nicht vorgeschlagen. | Feld „nächster Schritt" | Regel je Weg-Familie |

Lesarten, die du kippen kannst (im Code als Kommentar markiert): Zeitbezug des Mindestbedarfs aus den Worten der Frau (Monat/Woche/Jahr/ab/bis) · Schwere = Stufe der Frau (schwer: starke Präferenz, Mindestbedarf; leicht: Präferenz, Wunsch, Vorstellungsgrenze, Entwicklungsspielraum) · zwingende Voraussetzung ist Gate, wenn f7 belegt ist und die Matcherin dort einen Konflikt gesetzt hat (ob sie „aufbaubar, delegierbar, ersetzbar" ist, prüft kein Code) · „ausgeschlossen" plus harte Grenze → ihr Wunsch zuerst (Bereich E), die Grenze sichtbar.
