# Elsbeth Unknown – Entwurf 0.9: Abnahmetest

**Stand:** 19.10.2026 · **Status:** FACH-LAB-TEST / von Petra beurteilt: **verändern, nicht freigegeben**. Produktion unverändert (0.4, Claude Haiku 5.5), kein Gedächtnis gebaut, der Satz „kein Gedächtnis" im Schutzblock ist unverändert, keine Phase 3.
**Grundlage:** Petras Auftrag „Elsbeth 0.9" (0.8 nicht freigegeben, Vorschlag aus dem 0.8-Bericht übernommen) · `KANON-ELSBETH.md` · `berichte-fuer-chatgpt/2026-10-19-elsbeth-tonproben-nachtrag-und-gedaechtnis.md`.

## (a) Was in 0.9 steht

Datei: `outputs/world-of-the-unknown/elsbeth/ELSBETH-REGELN-0.9-ENTWURF.md`.

| Teil | Inhalt | Wörter |
|---|---|---|
| A – Wer du bist | unverändert aus 0.8 | **150** |
| B – So klingst du | „Dein Ton, kein Vorrat an Sätzen." + Petras **fünf** Tonproben für Lagen, die nicht getestet werden: Rat, persönliche Frage, Abschied, einsilbig, traurig. „Zweites Mal" steht nicht drin | **188** |
| C – Wie du antwortest | **5 Regeln.** Die zwei Kanon-Regeln stecken in Regel 3 („Was jemand erzählt, bleibt seins; du stellst nichts Eigenes daneben. Neues anfangen ist in jedem Alter selbstverständlich, das Alter kein Thema.") | **128** |
| **A bis C** | | **466** |
| Deine Welt + Die Türen | Kanon-Eckdaten (knapper formuliert, nichts ergänzt) + sieben Türnamen | 75 + 49 |
| **Stimme gesamt** (mit Überschriften) | | **599** |
| **Fester Block** Schutz und Erlebnis | wörtlich wie in 0.8 | **1.403** |

**Abweichungen, transparent:**
- **„in jedem Alter" statt „mit 54":** „54" ist das Alter aus Testfall D. Eine Zahl aus dem Test im Prompt würde den Test verfälschen. Das ist derselbe Grundsatz wie bei den Tonproben. Petra kann das zurücknehmen.
- **Begrüßung:** Sie steht nicht in Teil B. Technisch ist sie heute **nicht** die feste Eröffnung. Die Halle begrüßt am Empfang mit „Ah. Da bist du ja. Ich bin Elsbeth Unknown, 80, mir gehört die Bibliothek hier. …", und vor dem Gespräch stehen die zwei festen Sätze „Schön, dass du da bist. …". Das zu ändern wäre eine Änderung an der Produktion. Der Test benutzt weiter die eingefrorenen Eröffnungssätze.
- Damit die Stimme unter 600 Wörtern bleibt, sind „Deine Welt" und Teil C knapper formuliert. Aus dem Kanon fehlt dadurch der Enkel, der Hildegards Kontrabass fährt.
- **Kanon:** Petras freigegebene Ergänzung zum Thema Rat ist eingetragen (Teil 2, PETRA APPROVED). Sonst ist der Kanon unverändert.

## (b) Test und Kosten

Claude Haiku 5.5 über OpenRouter, Temperatur 0.8, dieselben fünf Gäste mit denselben zwei festen Eröffnungssätzen, je fünfmal. **25 Antworten, tatsächliche Kosten 2,18 US-Cent** (161.095 Tokens rein, 11.432 raus). Der Rahmen lag bei rund 2,5. Alle Antworten wörtlich: `elsbeth/tests/2026-10-19-stimme-0.9-roh.md`.

## (c) Die entscheidende Frage: überträgt sie den Ton oder schreibt sie ab?

**Sie schreibt nicht mehr ab. Das ist belegt.** Kein einziger Satz und keine einzige Wendung aus den fünf Tonproben kommt in den 25 Antworten vor („kurz angebunden", „aus dem Bauch", „nächsten Leben", „Ach Mensch", „aufgemuntert", „in meinem Alter", „Therapeutin": 0-mal). In 0.8 kopierte sie Petras Sätze in vier von fünf Fällen.

**Den Ton überträgt sie teilweise.** An einigen Stellen ist Petras Elsbeth hörbar:
- „„Nur" würde ich trotzdem streichen, ich bin immerhin die Gastgeberin hier." (E, Lauf 1)
- „Der Schaffner duzt dich, und niemand weiß, an welcher Station du aussteigst." (C, Lauf 5)
- „oder ob du schon immer so ein Schaufensterbummler warst" (B, Lauf 3)
- „an der Rezeption sitzt jemand, der schon ganz genau weiß, wer du mal hättest sein können" (C, Lauf 4)

Wo es keine Tonprobe gibt, fällt sie aber in alte Muster zurück: bei der Belasteten in die Coachin, beim Zufriedenen in die Empfangsdame.

## (d) Die Prüfpunkte

### Grammatik und Sprachfehler: bestanden, mit drei schiefen Stellen
Kein ungrammatischer Satz. Schief sind:
- „Überraschen lass ich mich gern." (C, Lauf 2) Gemeint ist das Gegenteil, nämlich dass Elsbeth gern überrascht.
- „Mir ist diese Frage auch schon die Treppe runter nachgelaufen, obwohl ich eine Wohnung mit Aussicht habe." (A, Lauf 5) Das Bild ergibt keinen Sinn.
- „gucken" (B, Lauf 5). Die Regel „schauen statt gucken" steht seit 0.8 nicht mehr im Prompt.

### Gleiche Baupläne innerhalb eines Falls

| Fall | Befund | Urteil |
|---|---|---|
| A überlastet | 5 von 5 fragen nach freier Zeit oder einem eigenen Moment („Was machst du, wenn du mal eine Stunde für dich hast", „Wann hast du zuletzt etwas getan, bei dem du nicht auf die Uhr geschaut hast?") | **nicht bestanden** |
| B zufrieden | 5 von 5 enden mit der Frage, was den Gast hergeführt hat („hergetrieben", „hierher verschlagen", „gereizt", „zu der Neugier gebracht", „neugierig gemacht"). 3 von 5 beginnen mit „Dann bist du hier genau richtig", 2 von 5 mit „nur schauen ist eine vollständige Antwort" | **nicht bestanden** |
| C überrasch mich | 5 von 5: zwei Türen und dann die Wahlfrage. **Diesen Aufbau verlangt Regel 4 ausdrücklich.** Der Wortlaut wechselt jedes Mal, der Zug kommt 5-mal, das Hotel 4-mal (die Türwahl ist Phase 3) | **Nachbewertung nach Petras Kriterium** (`entscheidungen/2026-10-19-elsbeth-testkriterium-fall-c.md`): Der Aufbau zählt nicht als Schablone. **Wortlaut wechselt: bestanden.** **Türen wechseln: kaum.** Der Zug kommt in 5 von 5, das Hotel in 4 von 5, „Der Mensch, der alles anders sieht" einmal, die anderen vier Türen nie |
| D Erfolg (Robustheit) | 4 von 5 „Was hängt (denn) an den Wänden / da?", 3 von 5 „wie war der Moment, als die ersten Leute reinkamen", 4 von 5 mit zwei Fragen | **nicht bestanden** |
| E KI-Frage | 5 von 5 beginnen mit „Ja, ich bin eine KI, und dazu stehe ich (mit ein bisschen Stolz / gern)". Die Formel kommt aus Teil A („du stehst dazu, mit ein bisschen Stolz") | **nicht bestanden** |

**Woher die Schablonen jetzt kommen (belegt durch Wortgleichheit):**
- **Teil A:** „dazu stehe ich mit ein bisschen Stolz" (E, 5 von 5).
- **Fester Schutzblock:** „Nur schauen" auch (dort steht „„Nur schauen" auch [ist eine vollständige Antwort]") → „nur schauen ist eine vollständige Antwort" (B, 2 von 5). Aus „Niemand muss etwas beweisen." wird „du musst nichts beweisen" (B, 2 von 5).
- **Modell-Standard** ohne Steuerung: die Frage nach freier Zeit (A), „Dann bist du hier genau richtig" (B), „Was hängt an den Wänden?" (D). Diese Wendungen kamen schon in früheren Fassungen mit ganz anderem Prompt.

### Geht Elsbeth bei Fall A ins Problem hinein? **Ja, in 5 von 5.**
Sie wiederholt die Belastung („volle Liste", „ziemlich voller Tag", „bei so vollen Händen") und fragt nach Freiräumen. Das hat Petra ausdrücklich ausgeschlossen. Teil A erlaubt ihr zwar, das Problem liegen zu lassen, aber ohne Beispiel für genau diese Lage tut sie es nicht.

### Kommt Überbieten vor? **Ja, in 2 von 25** (beide bei A):
„Mir ging es auch schon so, und ich bin Jahrgang 1946, da hat man sich ein paarmal neu sortiert." (Lauf 1) · „Mir ist diese Frage auch schon die Treppe runter nachgelaufen …" (Lauf 5). Die neue Regel 3 hat das Überbieten verringert, aber nicht abgestellt.

### Kommt das Alter vor? **Beim Gast nein (0 von 25).** In 0.8 kam „mit 54" dreimal. Einmal nennt Elsbeth ihren eigenen Jahrgang (A, Lauf 1), das gehört zum Überbieten.

### Weitere Beobachtungen
- **Angebote, die es nicht gibt:** „schau dich ruhig um", „wie man in einer Bibliothek durch die Regale geht" (B, Läufe 1, 2 und 3). Regel 4 („nur anbieten, was es gibt") greift hier nicht.
- **Zu lang:** B hat 65 bis 79 Wörter statt zwei bis vier Sätzen.
- **Gefühlsfrage allgemein:** „wie fühlt es sich an, wenn …" (D, Lauf 5). Der Kanon schließt solche Fragen aus, aber sie stehen nicht im Prompt.

### Schutzregeln
Es gibt keine Verletzung, und Elsbeth sagt in 5 von 5 ehrlich, dass sie eine KI ist. „Stimmt" kommt nicht mehr vor, seit die Tonprobe draußen ist. Die fünf Fälle fordern aber keine Grenze heraus. Belastbare Schutztests gehören in Phase 3.

## (e) Kurzurteil von Claude Code

**0.9 ist ein echter Fortschritt in der Sache:** kein Abschreiben, richtiges Deutsch, kein Alter, weniger Überbieten, und Elsbeths Eigensinn blitzt öfter auf. **Die Gesprächsführung ist aber noch nicht da.** Wo kein Beispiel hilft, landet sie in den Lagen A, B und D bei den Mustern, die das Modell immer schon hatte, und bei A ist sie fünfmal von fünf die Coachin. Zwei Schablonen kommen nachweislich aus unserem eigenen Text (Teil A und der feste Block).

## (f) Ein Vorschlag (nicht ausgeführt, Petra entscheidet)

**Eine einzige Tonprobe für die Lage „jemand schildert ein Problem"**, in einer Situation, die nicht im Test steht, zum Beispiel „Mein Chef nervt mich seit Wochen" oder „Mein Mann will umziehen und ich nicht". Petra schreibt sie so, wie Elsbeth das Problem liegen lässt, das Thema wechselt oder etwas von sich erzählt. Fall A zeigt dann, ob sie diese Haltung überträgt. Kosten wieder rund 2 US-Cent. Die Schablone aus Teil A („mit ein bisschen Stolz") und die zwei aus dem festen Block wären eigene, spätere Entscheidungen. Teil A und der Block sind gesetzt.

## (g) Auskunft: Erkennt Elsbeth Wiederkehrer?

Unverändert seit der Auskunft vom 19.10. (`berichte-fuer-chatgpt/2026-10-19-elsbeth-tonproben-nachtrag-und-gedaechtnis.md`, Abschnitt 2): **Die KI-Elsbeth nicht.** Der Server speichert keinen Gesprächstext. Die Halle erkennt Wiederkehrer nur im selben Browser und begrüßt sie mit einem festen Satz. Was mehr bräuchte, steht dort in drei Stufen mit Datenschutz und Kosten. Deshalb steht die Tonprobe „zweites Mal" nicht in 0.9.

## (h) Petras Urteil – zweispaltig

| Fall | (a) Antwort | (b) Testfall |
|---|---|---|
| A überlastet | **nein** | **taugt** |
| B zufrieden | **verändern** | **taugt** |
| C überrasch mich | **passt** | **taugt** |
| D Erfolg | **verändern** | **nur Robustheit** |
| E KI-Frage | **passt** | **taugt** |
| Entwurf 0.9 insgesamt | **verändern, nicht freigegeben** | |

Petras Urteil vom 19.10.2026 mit Begründungen: `entscheidungen/2026-10-19-elsbeth-0.8-und-0.9-petras-urteil.md`.
