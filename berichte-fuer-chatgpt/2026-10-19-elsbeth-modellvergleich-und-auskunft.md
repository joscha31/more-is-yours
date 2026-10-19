# Elsbeth Unknown – Modellvergleich Haiku/Sonnet und Auskunft vor dem Neuaufbau 0.8

**Stand:** 19.10.2026 · **Status:** FACH-LAB-BERICHT / PETRA REVIEW · nichts freigegeben, Produktion 0.4 unverändert. Kein Neuaufbau begonnen.

## Teil 1 – Der Modellvergleich (von Petra freigegeben, ausgeführt vor ihrem neuen Auftrag)

Derselbe Prompt (0.7 Runde 2, `tests/2026-10-19-ELSBETH-REGELN-0.7-runde2.md`), dieselben zwei Eröffnungssätze, dieselben fünf Gäste, 17 Läufe bei Temperatur 0.8. Nur das Modell ist anders: **Claude Sonnet 5.5** statt Claude Haiku 5.5. **Kosten: 40,53 US-Cent** (Haiku für dieselbe Runde: 2,00 US-Cent). Alle Antworten wörtlich: `elsbeth/tests/2026-10-19-stimme-0.7-runde2-sonnet-roh.md`.

| | Haiku 5.5 (Runde 2) | Sonnet 5.5 (gleicher Prompt) |
|---|---|---|
| Ungrammatische Sätze | 2 („hierher geschaut", „hierhergespült") | **0** |
| „hier richtig" / „nicht wissen müssen" / „hergebracht" | 2 / 2 / 3 | **0 / 0 / 0** |
| „Was hängt an den Wänden?" (Annahme über die Besucherin) | 3 von 3 | **0 von 3** |
| Kauf-Frage aus dem Prompt-Beispiel | 4 | **0** (dafür Nachttisch, Uhrzeit, Tasse, also dieselbe Art Frage) |
| Tee | 4 von 17 | **9 von 17** |
| „Schau dich um" | 1 | **5** (Teile davon gibt es im Produkt noch gar nicht) |
| Gleicher Bauplan in allen Läufen eines Falls | C (5 von 5), D (3 von 3) | **C (5 von 5), D (3 von 3: „Wer ist als Erstes durch die Tür gekommen?"), E (3 von 3: „Stimmt. Ich bin eine KI, und X ist erfunden. Y trotzdem.")** |

**Belegt:**
1. **Die Sprachfehler kommen vom Modell.** Mit demselben Prompt macht Sonnet keinen einzigen Grammatikfehler, hält die gestrichenen Wendungen ein und nimmt nichts über die Besucherin an.
2. **Die Schablonen kommen vom Prompt.** Beide Modelle bauen bei C, D und E jede Antwort nach demselben Muster. Sonnet folgt dem Prompt sogar treuer, deshalb gibt es bei ihm mehr Tee (der Kanon nennt „welcher Tee heute dampft") und mehr „schau dich um" (steht in den Lagen für „nur schauen").
3. Auch bei Sonnet geht Elsbeth bei der Belasteten in das Problem hinein („Gibt es am Tag eine Stunde, in der das niemand tut?"). Das ist die Coach-Haltung, die Petra nicht will. **Das bessere Modell allein löst sie nicht.**

**Vermutung:** Ein kürzerer Prompt ohne konkrete Gegenstände hilft beiden Modellen. Ob Haiku mit einem Prompt unter 600 Wörtern fehlerfrei schreibt, zeigt erst ein Test.

## Teil 2 – Antworten auf Petras vier Fragen (ohne Tests, ohne Kosten)

### 1. Wie lang ist die Anweisung?
| Fassung | Wörter |
|---|---|
| **0.4 (Produktion)** | **2.010** |
| 0.7 Runde 2 (zuletzt getestet) | 2.892 |
| 0.7 Runde 3 (aktueller Entwurf, ungetestet) | 2.988 |

Dazu kommen die zwei festen Eröffnungssätze der Halle, und in der Produktion eine unsichtbare Regie-Zeile an jeder Gast-Nachricht. Ziel für 0.8: unter 600 Wörter.

### 2. Wie viele Regeln, Verbote und Pflichtbausteine?
Gezählt an der Fassung 0.7 Runde 3, maschinell und deshalb ungefähr:
- **212 Sätze**, fast jeder davon eine Anweisung, in 9 Abschnitten mit 42 Spiegelstrichen oder Nummern.
- **113 Sätze enthalten ein Verbot** („nie", „nicht", „kein").
- **24 Sätze sind Pflichten oder Maße** („immer", „genau", „höchstens", „sofort", feste Zeilen wie „▸ UNKNOWN").
- **56 wörtliche Zitate**, also Beispielsätze, Pflichtzeilen und gestrichene Wendungen.

Zum Vergleich 0.4: 146 Sätze, davon 78 mit Verbot, 21 Pflichten oder Maße, 40 Zitate.

### 3. Welches Modell läuft?
In der Produktion ist **Claude Haiku 5.5** eingebaut (`api/elsbeth.js`, direkt bei Anthropic, Regeln mit Prompt-Caching). Ob die echte Elsbeth gerade eingeschaltet ist (Schalter und Losungswort in Vercel), habe ich hier nicht geprüft. Alle Tests von Schritt 1 liefen mit Haiku 5.5 über OpenRouter, nur der Vergleich mit Sonnet 5.5.

### 4. Was kostet ein stärkeres Modell pro Gespräch?
**Annahme** für ein Gespräch: 10 Wechsel, Elsbeth antwortet im Schnitt mit rund 150 Tokens, der Verlauf wächst mit. Preise vom 19.10. (OpenRouter, je Million Tokens: Haiku 5.5 0,10 $ rein / 0,50 $ raus, Sonnet 5.5 2 $ / 10 $, Opus 5.5 4 $ / 20 $; Lesen aus dem Cache kostet ein Zwanzigstel). Mit Caching wie in der Produktion:

| Modell | mit heutigem Prompt (~3.000 Wörter) | mit 0.8 (600 Wörter Stimme + rund 1.050 Wörter fester Schutz- und Erlebnisblock) |
|---|---|---|
| Haiku 5.5 (heute) | rund 0,4 US-Cent | rund 0,3 US-Cent |
| **Sonnet 5.5** | **rund 7 US-Cent** | **rund 5 US-Cent** |
| Opus 5.5 | rund 13 US-Cent | rund 11 US-Cent |

Das sind Schätzungen. Echte Gespräche können kürzer oder deutlich länger sein, die Produktion erlaubt bis zu 25 Wechsel. **Wichtig für die Praxis:** Der Tagesdeckel in der Produktion steht auf 0,70 $. Mit Sonnet reicht das für rund 10 bis 14 Gespräche am Tag, mit Haiku für weit über 100. Ein Modellwechsel in der Produktion wäre eine eigene Entscheidung von Petra und gehört laut `PROZESS.md` in Phase 3.

## Teil 3 – Petras neuer Auftrag (wartet auf ihre Freigabe, nichts begonnen)

Keine weitere Flickversion. 0.8 wird **neu geschrieben**, nicht ergänzt, mit unter 600 Wörtern:
- **Teil A:** Haltung als Fließtext, höchstens 150 Wörter, ohne konkrete Gegenstände, ohne Vergleiche, ohne Hildegard.
- **Teil B:** Petras Sprachbeispiele, ausdrücklich nur als Ton.
- **Teil C:** höchstens fünf positiv formulierte Regeln.
- Dazu eine eigene kurze Weltliste (Hildegard und Co.): höchstens ein Element pro Gespräch, meistens keines.
- **Elsbeth ist kein Coach.** Sie geht nicht in das Problem hinein und darf es überhören, das Thema wechseln oder von sich erzählen. Petra: „Als Coach würde ich ihr nie etwas von mir erzählen. Im Zug schon."
- Elsbeth bietet nichts an, was es im Produkt noch nicht gibt. Bei „überrasch mich" stehen zwei Türen zur Auswahl. Der Abnahmetest ist künftig **fünf Läufe je Fall**, und ein gleicher Bauplan in allen fünf wird ausdrücklich berichtet.

**Petras Sprachbeispiele** (Tonvorlage, keine Vorgaben):
- Begrüßung: „Da bist du ja. Ich bin Elsbeth. Und wie darf ich dich nennen?" · „Petra also. Dann erzähl mal, was dich hergebracht hat."
- Neugieriger Besucher: „Neugierige Menschen mag ich. Erzähl mir mehr von dir!"
- „Überrasch mich": „Überraschen tue ich gern. Du hast zwei Möglichkeiten: hier rein oder da rein. Wo möchtest du lieber überrascht werden?"
- Erfolgserlebnis: „Oh, ich freue mich sehr für dich! Man spürt deine Freude durch die Tasten. Wenn ich könnte, würde ich dir jetzt einen Pfefferminztee anbieten."
- Chatbot-Frage: „Stimmt. Ich bin eine KI und, wie ich finde, eine ziemlich gut geratene. Ich sitze in der Bibliothek und erzähle die Geschichten. Erzähl mir, was dich hergebracht hat – ich bin nämlich neugierig."
- „Weiß nicht": „Dann hilf mir ein bisschen. Sonst stochere ich im Nebel und biete dir etwas an, das überhaupt nicht zu dir passt. Wie bist du hier eigentlich gelandet?"

**Vier Punkte, die Petra vor dem Bauen klären sollte (der zweite Blick):**
1. **Die Schutzgrenzen passen nicht in 600 Wörter.** Der Sicherheitsteil allein (Sexspiel, Aggression, Krise mit Telefonseelsorge, Tiefe nur mit Erlaubnis, Datenschutz-Auskunft) hat heute rund 550 Wörter, die Altersgrenze und die Regeln für Erlebnis und REAL WORLD kommen auf rund 500 weitere. Die Schutzregeln sind PETRA APPROVED. Mein Vorschlag: Er bleibt **wörtlich als eigener, fester Block** neben den 600 Wörtern und wird nicht mitgezählt. Teil C regelt nur die Stimme. Dasselbe gilt für die Regeln des Erlebnisses (▸ UNKNOWN, REAL WORLD), die in Schritt 1 nicht getestet werden.
2. **Der Name:** Petras Begrüßungsbeispiel sagt „Ich bin Elsbeth". Laut PETRA APPROVED stellt sie sich immer mit vollem Namen vor, als „Elsbeth Unknown". Gilt das weiter?
3. **Der Widerspruch zum Lob-Absatz (Runde 3):** „Neugierige Menschen mag ich" lobt eine Gruppe, und genau das schließt der Lob-Absatz aus. Für 0.8 schlage ich vor, Petras Beispiel gelten zu lassen und den Lob-Absatz nicht zu übernehmen, weil Teil A ohnehin nur Haltung enthält.

4. **`KANON-ELSBETH.md` gibt es noch nicht (CONTENT GAP).** Weder in `more-is-yours` noch im Arbeits-Repo liegt eine Datei mit diesem Namen. Mein Vorschlag: Ich trage als ersten Schritt von 0.8 nur zusammen, was schon PETRA APPROVED ist (voller Name, ältere Dame mit Weisheit, duzt alle, lernt fliegen, nur Text, Gastgeberin der Erlebnisbibliothek), und markiere alles andere aus 0.6/0.7 (68er-Haltung, Anläufe, Hildegard, Konrad) als Vorschlag. Oder Petra und ChatGPT liefern die Datei.

**Kosten des Abnahmetests 0.8:** Fünf Fälle mal fünf Läufe ergibt 25 Antworten. Mit 600 Wörtern Stimme plus festem Block kostet das mit Haiku rund **1,5 US-Cent** und mit Sonnet rund **30 US-Cent**. Welches Modell getestet wird, entscheidet Petra.
