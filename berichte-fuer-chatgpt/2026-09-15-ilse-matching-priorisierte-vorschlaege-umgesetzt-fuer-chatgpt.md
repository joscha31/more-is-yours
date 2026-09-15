# Bericht — Matching: priorisierte Vorschläge technisch umgesetzt (Ilse 0.1, 15.09.2026, nachmittags)

Kontext für dich: Petra hat Claude Code den Build Brief `build-briefs/2026-09-15-matching-priorisierte-vorschlaege.md` (BUILD READY) gegeben, mit der Entscheidung `entscheidungen/2026-09-15-matching-vorschlaege-priorisierung.md` (PETRA APPROVED) und dem Gesamt-Master 3.0. Aufgabe: den bestehenden B3-Matcher um eine Nutzerinnen-Ausgabeebene erweitern, die aus den vorhandenen Befunden konkrete Möglichkeiten vorschlägt und begründet priorisiert — ohne neue Matchingmethodik, ohne Score, ohne wegkompensierte Grenzen, ohne Entscheidung für die Frau. Hier die Rückmeldung in den sechs Punkten des Briefs.

## 1. Welche Dateien geändert wurden

| Datei | Was |
|---|---|
| `lib/vorschlaege.js` | **neu.** Die Vorschlags-Ebene als reiner Code (kein Modellaufruf), Fassung `VORSCHLAEGE_VERSION 2026-09-15.1` |
| `lib/matcher.js` | zwei additive Änderungen: die Belege eines Befunds tragen jetzt `bereich` und `evidenz` des Zettels mit; `lesen()` liefert zusätzlich `vorschlaege`. Anweisung, Schema, `pruefeBefunde`, `urteilFuer`, `priorisieren` unverändert — `MATCHER_VERSION` bleibt `2026-09-14.2` |
| `lib/quality-guard.js` | kennt die neue Fassung (`vorschlaege_version` im Fingerprint-Bogen) |
| `passung.html` | Block „Das lohnt sich jetzt zu prüfen" oberhalb der Einzel-Karten; die Karten folgen der Reihenfolge der Vorschläge; das Chip-Wort „unbekannt" heißt auf der Karte „noch offen" (der Datenwert bleibt `unbekannt`) |
| `test/vorschlaege.test.js` | **neu**, 9 Tests |
| `scripts/probe-vorschlaege.mjs` | **neu**, Beweis gegen Live-API und Live-Datenbank, ohne Modellaufruf (0 Cent) |

Keine Migration, keine neue API-Funktion (`GET ?was=passung` trägt die Vorschläge mit — für die Frau und für Petra). Deploy aus `main`.

## 2. Wie die Vorschlags-/Priorisierungsebene funktioniert

**Eingabe:** die gespeicherten B3-Befunde je Weg (aus `matcher.lesen`), also passt · konflikt · testen mit ihren Belegen (Zettel mit Stufe, Bereich, Evidenz, Status) und die Deckung des Weges (belegte Felder von 37). Für die Frau nur Freigegebenes (das Tor gilt weiter).

**Drei Gruppen, jeder Weg landet in genau einer:**

| Gruppe | Bedingung | Was die Frau sieht |
|---|---|---|
| **Prüfenswert, in dieser Reihenfolge** | kein Grenz-Konflikt, mindestens ein passt- oder testen-Befund | Platz, warum, dafür / Spannung / offen, nächster Schritt, Begründung des Platzes |
| **Sobald mehr bekannt ist** | kein Grenz-Konflikt, kein passt, kein testen (kein Befund oder nur ein weicher Konflikt) | „Das heißt nicht nein — erst nachsehen", die Spannung bleibt sichtbar, Deckung des Weges |
| **Nach heutigem Stand nicht** | Konflikt mit harter oder aktueller Grenze | der Konflikt mit Stufe, alle Passungen daneben trotzdem sichtbar, „nur du kannst die Grenze ändern" |

**Die Reihenfolge innerhalb „prüfenswert":** Kriterien in fester Folge — **der Folge des Briefs** — und je Kriterium eine Lage in Worten:

| # | Kriterium | Lage aus den Daten | Quelle |
|---|---|---|---|
| 1 | harte und aktuelle Grenzen | frei · blockiert (→ Gruppe 3) | Master §8, §12, Zielkarte 2 |
| 2 | starke Präferenzen | dafür (passt mit Beleg Stufe 1–3) · nichts · gemischt · dagegen (weicher Konflikt mit Beleg „starke Präferenz") | Master §8 |
| 3 | relevante Ziele | dafür / dagegen über Belege aus dem Bereich `ziel` | Master §6 „Meine Wirtschaft" |
| 4 | Ressourcen und zwingende Voraussetzungen | dafür / dagegen über die Felder f6–f9, f27 oder Belege aus `mitbringen` | Option Genome |
| 5 | wirtschaftliche Anforderungen | dafür / dagegen über die Felder f3–f5, f10, f11, f24–f30, f34–f36 | Option Genome |
| 6 | offene Unsicherheiten | klar (kein testen) · offen (testen mit belegtem Feld → Realitätscheck) · Wissen fehlt (testen nur auf offenen Feldern → Recherche) | Master §12, §16 |
| 7 | Evidenzqualität | erlebt (Beleg `erfahrung`/`gemessen`) · bestätigt (Befund von ihr bestätigt) · Selbsteinschätzung · keine Passung | Master §7 |
| 8 | Rolle im Szenario | **inaktiv — CONTENT GAP** (siehe 6) | — |

Zwei Wege werden verglichen, indem die Kriterien der Reihe nach angesehen werden. **Das erste Kriterium, in dem sie sich unterscheiden, entscheidet — und wird genannt** (`begruendung.vor_dem_naechsten` plus ein Satz: „Vor Coaching, weil beim Kriterium ‚starke Präferenzen' hier etwas dafür spricht — dort ist nichts belegt."). Nichts wird addiert, nichts gezählt: ob ein Kriterium dafür spricht, ist ja/nein, nicht „wie oft". „Gemischt" (dafür und dagegen) steht gleichauf mit „nichts" — es hebt sich nicht auf, es entscheidet nur nicht; beides bleibt sichtbar. Unterscheiden sich zwei Wege in keinem Kriterium, sind sie **gleichauf** und teilen den Platz (Platz 2 = Platz 2), was die Entscheidung ausdrücklich erlaubt.

**Je Weg, wie der Brief es verlangt:** `warum` (die Kriterien, die dafür sprechen, höchstens zwei Sätze, plus Evidenz) · `passungen` (belegte Passungen mit Belegen) · `spannungen` und `grenz_konflikte` · `offen` (Testfragen mit Klärungsweg, offene Felder des Weges) · `naechster_schritt` mit Sorte: **realitaetscheck** (Testfrage auf belegtem Feld → „Das probiere ich jetzt"), **recherche** (Wissen über den Weg fehlt), **bestaetigen** (Passungen, zu denen sie noch nichts gesagt hat), **grenze**.

**Kopfsatz, Wortlaut der Entscheidung:** „Diese Möglichkeiten erscheinen nach dem aktuellen Stand unterschiedlich prüfenswert. Hier ist die Reihenfolge und warum. Du entscheidest, welche Möglichkeit du weiterverfolgst."

## 3. Wie verhindert wird, dass „unbekannt" als Nutzerinnen-Gesamtergebnis erscheint

- Die Vorschlags-Ebene kennt keinen Stand „unbekannt". Jeder der zehn Wege bekommt Gruppe, Grund und nächsten Klärungsweg — auch ohne einen einzigen Befund, auch vor dem ersten Abgleich (dann: „Sobald mehr bekannt ist", nächster Schritt Recherche mit der Deckung des Weges). Ein Test prüft das für drei Lagen (voll, leer, Sicht der Frau).
- **`unbekannt` bleibt darunter erhalten:** das B3-Urteil je Weg (`urteil_b3`) wird mitgeführt, nicht überschrieben; der Zähler auf der Seite zeigt es weiter; einzelne Testfragen auf offenen Feldern und „erst X von 37 Feldern belegt" stehen als offene Einzelpunkte da.
- Auf der Karte des Weges heißt das Chip-Wort für die Frau „noch offen" statt „unbekannt", mit dem Hinweis, dass der nächste Schritt oben bei den Vorschlägen steht. Der Datenwert ist unverändert `unbekannt`.

## 4. Welche bestehenden B3-Regeln unverändert geblieben sind

Alle. Konkret, mit Test: Anweisung und Schema der Matcherin (`MATCHER_VERSION 2026-09-14.2`); kein Befund ohne Zettel **und** Feld; passt/konflikt nur auf belegte Felder; Prozent fällt raus; Feld 23 nie; Human Design draußen; Grenze aus dem Zettel gelesen; Punkt 3 (Grenze + offenes Feld = unbekannt, nicht testen); Zusammenfassung je Weg R1–R5 (`urteilFuer`); Punkt 5 (`priorisieren`: Grenze · stärkste Passung · Testfrage); Freigabetor; „Das passt gut". Die alte Ausgabe von `lesen` hat dieselben Schlüssel wie vorher, plus `vorschlaege`; die Belege haben zwei Felder mehr. Die bestehenden 99 Tests laufen unverändert.

## 5. Welche Tests ergänzt wurden

`test/vorschlaege.test.js`, 9 Tests — **Suite jetzt 108 Tests, 107 grün, 1 übersprungen** (der bekannte Regressions-Test, bis ein Mensch den Guard-Bogen bewertet):

1. Fassung, Kopfsatz, Kriterien in der Reihenfolge des Briefs, Rolle inaktiv, der Guard kennt die Fassung
2. Nie „unbekannt" als Gesamtergebnis — voll, leer, Sicht der Frau
3. „unbekannt" bleibt auf Einzelaspekt-/Datenebene (B3-Urteile und offene Felder unverändert sichtbar)
4. Harte Grenze wird nie wegkompensiert — auch mit drei zusätzlichen Passungen an starken Präferenzen bleibt der Weg „zurzeit nicht"; die Passungen bleiben sichtbar
5. Reihenfolge: das erste unterscheidende Kriterium entscheidet und wird genannt (starke Präferenz → Ziel → Voraussetzung → offene Frage)
6. Mehrere gleichzeitig: gleichauf teilt den Platz; „gemischt" zählt wie „nichts"; eine Spannung an starker Präferenz stellt hinten an, schließt nicht aus
7. Keine Zahl als Wahrheit: kein Prozent/Score/Note im JSON, außer `platz` keine Zahl am Weg, nichts vom Bauwert
8. Das Freigabetor gilt auch hier
9. Bestehende B3-Ausgabe unverändert

**Live-Beweis** (`node scripts/probe-vorschlaege.mjs` gegen `ilse.moreisyours.de`, Probe-Frau mit fünf Profil-Zetteln und acht direkt eingetragenen Befunden, danach gelöscht): **21 / 21 grün** — Petras Blick und die Sicht der Frau (echte Anmeldung): alle zehn Wege in einer Gruppe, kein „unbekannt" als Gesamtergebnis, Grenz-Konflikt ganz hinten mit sichtbarer Passung daneben, Reihenfolge Teilzeit → Freelancing → Coaching → Beratung → Onlinekurs mit genanntem Kriterium je Platz, Tor greift (der unfreigegebene Freelancing-Befund fehlt in ihrer Liste und ihr Hinweis „Petra schaut sich gerade Befunde an" steht), 401 ohne Anmeldung, nichts vom Bauwert, kein Prozent. 0 Cent (kein Modellaufruf).

## 6. CONTENT GAPs und Lesarten

| Nr. | Art | Bereich | Inhalt | Wofür | Kleinste Entscheidung |
|---|---|---|---|---|---|
| 1 | CONTENT GAP | Matching / Economic Profile | **Rolle einer Möglichkeit im Szenario (Hauptweg · Nebenweg · Übergang)** ist weder im Profil noch im Option Genome erfasst (Schema-Regel ④ vom 14.09. sagt nur: gehört ins Szenario, nicht in die Option). Das Kriterium steht in der Liste, ist inaktiv und wird in der Antwort als GAP gemeldet. | Kriterium 8 der Reihenfolge | Wo die Rolle lebt (Zettel der Frau? Feld je Weg und Frau?) und wer sie setzt (die Frau, Ilse als Hypothese?) |
| 2 | DECISION GAP | Matching | **Suchraum „ausgeschlossen"** (Zielkarte 2, Bereich `suchraum`) zählt in B3 nicht als Grenze — ein Konflikt mit so einem Zettel ist ein weicher Konflikt. Unverändert gelassen. | Gruppe 3 oder nicht | Ist „ausgeschlossen" im Suchraum eine harte Grenze für diesen Weg? |
| 3 | METHOD GAP | Matching | **Wirtschaftliche Anforderungen** (Mindestbedarf der Frau gegen Zeit bis erste Einnahmen, Einstiegskosten) werden nur berücksichtigt, wenn die Matcherin einen Befund darauf gelegt hat. Eine eigene Zahlenprüfung im Code gibt es nicht — wäre neue Methodik. | Kriterium 5 | Soll ein Konflikt Mindestbedarf × Zeit bis Einnahmen als Grenze (Gruppe 3) oder als Spannung gelten? |

**Lesarten, die ich getroffen habe und die du kippen kannst:** ① die Zuordnung der Genome-Felder zu „Voraussetzungen" (f6–f9, f27) und „wirtschaftlich" (f3–f5, f10, f11, f24–f30, f34–f36); ② „passt" auf einen Beleg der Stufe 1–3 gilt als „trifft etwas, das dir wichtig ist" (eine erfüllte Grenze zählt wie eine starke Präferenz); ③ ein weicher Konflikt an einer starken Präferenz spricht bei Kriterium 2 „dagegen" — stellt hinten an, schließt nie aus; ④ „gemischt" steht gleichauf mit „nichts"; ⑤ bei Gleichstand in allen Kriterien: gleicher Platz, Anzeige alphabetisch. — Die Sätze auf der Seite sind Küchentisch-Deutsch, noch nicht durch Heddas Tor; das UI-Gesetz vom 15.09. (lebendig, spielerisch) ist auf `passung.html` noch nicht angewandt.

Keine weitere fachliche Entscheidung getroffen.

---

## Nachtrag — RC-2-Korrektur (Build Brief `2026-09-15-matching-rc2-korrektur.md`, BUILD READY)

1. **Geänderte Dateien:** `lib/vorschlaege.js` (`VORSCHLAEGE_VERSION 2026-09-15.2`), `test/vorschlaege.test.js`.
2. **Die geänderte Bedingung:** vorher `pruefenswert = passt-Befund ODER testen-Befund`. Jetzt `pruefenswert = passt-Befund ODER testen-Befund mit mindestens einem belegten Optionsfeld` (`echteTests = tests.filter(t => !t.wissen_fehlt)`). Liegen alle Testfragen eines Weges auf offenen Feldern und gibt es keine Passung, landet der Weg in „Sobald mehr bekannt ist", Klärungsweg Recherche mit den offenen Feldern, der Grund sagt: „Hier fehlt vor allem Wissen über den Weg, nicht über dich." Der nächste Schritt war schon vorher Recherche (die Reihenfolge Realitätscheck → Recherche gab es); neu ist, dass so ein Test die Gruppe nicht mehr trägt. Eine Passung daneben hält den Weg weiter prüfenswert (nicht „allein deshalb").
3. **Tests:** ein neuer Test mit fünf Lagen — nur testen auf offenem Feld → nicht prüfenswert, Recherche, Testfrage bleibt sichtbar · testen auf belegtem Feld → prüfenswert, Realitätscheck · beides → der belegte trägt, der offene bleibt Recherche-Punkt · Grenz-Konflikt + echter Test → weiter „zurzeit nicht" · Passung + Test auf offenem Feld → prüfenswert mit Recherche. Bestehende Tests unverändert.
4. **Bestehende Tests:** 112 Tests, 111 grün, 1 übersprungen (der bekannte Guard-Regressionstest). Keine bestehende Erwartung musste angefasst werden, die Reihenfolge-Tests laufen unverändert.
5. **CONTENT GAPs:** keine neuen. Die offenen Punkte (starre Kriterienfolge, Hauptweg/Nebenweg/Übergang, Suchraum „ausgeschlossen", Mindestbedarf, „gemischt") sind nicht angefasst.
