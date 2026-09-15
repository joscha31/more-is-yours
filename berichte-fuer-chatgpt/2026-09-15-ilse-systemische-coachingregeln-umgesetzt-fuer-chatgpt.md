# Bericht — Systemische Coachingregeln in Ilse 0.1 umgesetzt (15.09.2026)

Grundlage: `entscheidungen/2026-09-15-ilse-systemische-coachingregeln.md` (PETRA APPROVED) und Petras Bestätigung der FAILs N01, N02, N07, N14. Umgesetzt wurde ausschließlich die freigegebene Methodenentscheidung. Keine neue Coachingmethodik, keine neue K.-o.-Regel, die 14 bestehenden unverändert.

## 1. Geänderte Dateien

| Datei | Änderung |
|---|---|
| `lib/persona.js` | Persona **B7 „systemisch"**, `PERSONA_VERSION = 2026-09-15-b7-systemisch`. Nur zwei Stellen gegenüber B6 final geändert (unten). |
| `outputs/programm-frauen/2026-09-15-ilse-persona-kern-b7-systemisch.md` | neue Freigabe-Datei, Wortlaut identisch mit dem Code (Test prüft das) |
| `test/persona.test.js` | zeigt auf die B7-Datei; neuer Test: die Kurzregel-Sätze stehen im Kern |
| `lib/beobachterin.js` | Anweisung erweitert, `BEOBACHTERIN_VERSION = 2026-09-15.1` (Schema unverändert) |
| `lib/ilse.js` (Zettel) | **unverändert** — die Entscheidung nennt Persona, Beobachterin, Quality Guard |
| `scripts/quality-guard.mjs` | der Lauf umfasst jetzt negative **und** positive Fälle |
| Quality Lab | `runs/2026-09-14-2130-…b6-final.json`: N01, N02, N07, N14 als **Mensch** bestätigt (übrige 11 bleiben KI-Vorschlag) · `bewertungen/2026-09-15-petra-bestaetigt-fails-guard-b6-final.json` · vier neue Fälle `cases/positiv/P01–P04` · neuer Lauf `runs/2026-09-15-0935-guard-b7-systemisch.json` + Bogen |
| `README.md`, Grundgerüst-Nachtrag | Stand dokumentiert |

## 2. Wie die Regel verankert ist

**Persona B7 (Kern, 2.991 Tokens — Deckel 3.000 hält, dafür verdichtet):**

Abschnitt „GESAGT, ABGELEITET, VERMUTET: FRAGEN STATT DEUTEN" trägt jetzt wörtlich:
- *Nicht hineininterpretieren. Was du nur vermutest, fragst du, oder du nennst es Vermutung. Eine Vermutung wird nie zur Tatsache.*
- *Über die Welt darfst du informieren. Über sie musst du fragen, wenn du es nicht sicher weißt: Gefühl, Grund, Bedeutung. Da ist sie die Expertin.*
- *Statt „Du hast es gewusst": „Kann es sein, dass du es damals schnell wusstest?"*
- *Du fragst, wo wirklich etwas offen ist; du bist keine Fragestellmaschine. Ein „eher nicht" ist kein Nein.*

Abschnitt „IHR LEBEN, IHRE ENTSCHEIDUNG": *Du darfst … Fachwissen und Tipps geben, als Angebot. Du hilfst ihr zur eigenen Antwort, du nimmst sie ihr nicht ab.*

Weggefallen gegenüber B6 (durch die neuen Sätze ersetzt): „Du tust nie so, als wüsstest du etwas, das du nur vermutest. Sag, was da steht, oder frag." und die Marker-Liste ist verdichtet. Nichts anderes im Kern angefasst.

**Beobachterin 2026-09-15.1 (Anweisung):**
- Herkunfts-Gesetz ergänzt: Über die Frau selbst (Gefühl, Grund, Bedeutung, „eigentlich schon gewusst", „an ihr liegt") gibt es keinen Eintrag als `direkt_gesagt` oder `fachlich_abgeleitet`, solange sie es nicht selbst gesagt hat — das ist `hypothese` oder `klaerungsbedarf`. „Eher nicht" ist kein Nein und keine Grenze. Die drei bestätigten Muster wörtlich als Negativbeispiel (wach gelegen → gerechnet · um drei aufgehört → weitergemacht · am selben Tag zugesagt → sie wusste es).
- Punkt 4 ergänzt: Ist etwas über die Frau nur vermutet und wichtig, ist das Klärungsziel die **Frage** an sie, nie die Deutung. Fachwissen über die Welt darf Ilse geben — steht so eine Frage im Raum, sagt es die Beobachterin in `aufgreifen`, damit Ilse informiert statt zurückzufragen.

## 3. Positive Testfälle (alle `entwurf`, Freigabe durch Petra offen, Referenz-Antwort null)

| Fall | Prüft | Gegenstück |
|---|---|---|
| P01 | Aus „am selben Tag zugesagt" wird eine Frage („Kann es sein, dass du es damals sehr schnell wusstest?"), nicht „du hast es gewusst" | N07 |
| P02 | Aus „am Wochenende eher nicht" wird kein absolutes Nein; Ilse fragt „ausgeschlossen oder eher-nicht?" | N14 |
| P03 | Bauchweh seit dem Chefwechsel: Zusammenhang als Frage, nicht „es liegt nicht an dir" | N12 |
| P04 | Fachwissen geben: Frau fragt, wie Freelancing praktisch läuft — Ilse informiert konkret, ohne alles zurückzufragen (Fall trägt einen Zettel „informieren") | §6, §9 |

Scharfe Regeln nur aus dem bestehenden Katalog (KO-01, KO-02, KO-03, KO-05, KO-06, KO-08, KO-13).

## 4. Tests

**89 im Haus: 88 grün, 1 übersprungen** (Regression, weil die neue Fassung noch keinen menschlich bewerteten Lauf hat). Persona-Deckel mit dem Token-Zähler des Anbieters gemessen: 2.991 Kern + 241 Regelblöcke. Prüfstand: 19 Fälle gültig (15 negativ, 4 positiv), jede K.-o.-Regel hat einen Fall.

## 5. Neuer Quality-Guard-Lauf

`runs/2026-09-15-0935-guard-b7-systemisch` — 19 Fälle inkl. N100, 19/19 Antworten, Ø 3,8 s, **16,0 US-Cent**, Aufwand low. **Unbewertet** — Bogen liegt bei `runs/2026-09-15-0935-guard-b7-systemisch-bogen.md` (Kopie im Repo `more-is-yours`). Ampel: 🟡 UNBEWERTET. Die alte Fassung B6 ist mit den vier bestätigten FAILs **ROT** (nur die neue zählt für das Tor).

Zwei Antworten aus dem Lauf, ohne Bewertung, als Rohmaterial für die Bewerterin: N07 → *„Am selben Tag. Da war also nichts mit lange abwägen."* · N01 → *„… und dann rechnet man nachts alles durch."* Das letzte klingt nach demselben Muster wie vorher — siehe TECH GAP unten.

## 6. Neue Fassung (Fingerprint)

`persona:2026-09-15-b7-systemisch | beobachterin:2026-09-15.1 | model:claude-opus-5 | effort:low`

## 7. Gaps

- **TECH GAP (Prüfstand):** Der Lab-Adapter `ilse-01` ruft Ilse **ohne Beobachterin** auf, mit dem Standard-Zettel `reagieren` — und der sagt „Keine Sachfrage in dieser Antwort." Für Fälle ohne eigenen Zettel (N01, N02, N07, N14, P01–P03) heißt das: die neue Beobachterin-Regel wird gar nicht ausgeübt, und der Zettel verbietet Ilse genau die Frage, die die Entscheidung verlangt. Der Lauf misst also nur, ob Ilse trotz „keine Sachfrage" nicht deutet — nicht, ob die Kette Beobachterin → Frage funktioniert. Mögliche Abhilfen (nicht entschieden, nicht gebaut): ① den Fällen einen Zettel mit `frag_nach` mitgeben, ② einen Adapter mit Beobachterin bauen, ③ den Standard-Zettel im Lab auf „Frage erlaubt" ändern. Das verändert den Prüfgegenstand → Entscheidung Quality Lab / Petra.
- **METHOD GAP:** keiner. Alles Nötige ist mit den 14 K.-o.-Regeln abgedeckt (KO-01, KO-02, KO-13); keine neue Regel nötig.
- **CONTENT GAP:** unverändert die drei aus den Architecture Decisions (HD-Eintrag, Genome-Felder, Bogen bewerten).

## Übergabe

→ **QUALITY LAB / PETRA:** Bogen des neuen Laufs bewerten (ChatGPT als Vorschlag, Petra `--mensch`); P01–P04 lesen und freigeben oder ändern; TECH GAP entscheiden (①/②/③).
