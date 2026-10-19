# Elsbeth Unknown – Neuaufbau 0.8: Abnahmetest

**Stand:** 19.10.2026 · **Status:** FACH-LAB-TEST / PETRA REVIEW · 0.8 ist **nicht freigegeben**. Produktion unverändert (0.4, Claude Haiku 5.5), nichts veröffentlicht, kein Modellwechsel, keine Phase 3.
**Grundlage:** `entscheidungen/2026-10-19-elsbeth-0.8-neuaufbau-freigabe.md` (Petras Freigabe und Entscheidungen) · `KANON-ELSBETH.md` (unverändert) · `entscheidungen/2026-10-19-elsbeth-gespraechsvorgaben-gelockert.md` (PETRA APPROVED) · `entscheidungen/2026-10-19-elsbeth-0.7-runde2-petras-urteil.md`.

## (a) Der Entwurf

Datei: `outputs/world-of-the-unknown/elsbeth/ELSBETH-REGELN-0.8-ENTWURF.md`. Neu geschrieben, nicht geflickt.

| Teil | Inhalt | Wörter |
|---|---|---|
| A – Wer du bist | Haltung als Fließtext: KI mit etwas Stolz, keine Coachin, nichts ist kaputt, Appetit statt Fürsorge, „wie ein interessanter Mensch, den man zufällig kennenlernt", Problem liegen lassen, von sich erzählen, darf nichts wollen | **150** |
| B – So klingst du | Petras sechs Sätze als Tonproben, Hinweis „nicht zum Übernehmen" | **163** |
| C – Wie du antwortest | **5 Regeln**, positiv: kurz und korrekt (Münchnerin ohne Dialekt) · Petras Lobregel wörtlich · über den Gast nur Gesagtes, über sich sparsam erzählen · zwei Türen bei „überrasch mich", nur Vorhandenes anbieten · fragen, wenn es wirklich interessiert | **119** |
| **A bis C zusammen** | | **432** |
| Deine Welt | Eckdaten aus `KANON-ELSBETH.md` Teil 1, gekürzt, nichts ergänzt; „höchstens ein persönliches Detail pro Gespräch" (Petras Klarstellung: sparsam heißt nicht keines) | 102 |
| Die Türen | sieben Namen aus Petras Original-20 | 55 |
| **Stimme gesamt** (mit Überschriften) | | **597** |
| **Fester Block** „Schutz und Erlebnis" | Altersgrenze, wie ein Erlebnis läuft, was du nie tust, zwei Welten (REAL WORLD), Sicherheit mit Datenschutz. Wörtlich aus 0.4, steht hinter der Stimme | **1.403** |

**Abgleich des festen Blocks mit der Produktion 0.4** (maschinell geprüft gegen `api/_elsbeth-regeln.js`): wörtlich gleich bis auf die Überschrift und **einen Satz**. Zu Beginn des Erlebnisses steht: „Irgendwo in dieser ersten Antwort sagst du einmal, beiläufig und in deinen Worten, dass man jederzeit wieder hinaus kann. Danach nicht mehr." Er stammt aus Petras Präzisierung zu 0.7, Punkt 4 („einmal zu Beginn eines Erlebnisses").

**Abweichungen vom Kanon, transparent (der Kanon selbst bleibt unverändert):**
- Nicht in die Anweisung übernommen sind aus Kanon Teil 2: der Käfervergleich mit der Naturforscherin, die Beispiele für konkrete Fragen (Gegenstände, Uhrzeiten, „zuletzt gekauft oder weggeworfen", „Erleichterung oder Trotz") und der alte Lob-Absatz mit „ich liebe neugierige Menschen". Grund: Petras Entscheidungen zu 0.8 (keine Gegenstände und Vergleiche in Teil A, neue Lobregel, ihr Satz „Neugierige Menschen mag ich" gilt als Auskunft über Elsbeth).
- Nicht übernommen ist auch der kanonische Satz „Meine Güte, was waren das für Zeiten.". Teil B sollte genau Petras sechs Beispiele enthalten, und jeder weitere Mustersatz ist ein Kandidat für die nächste Schablone.
- Aus Kanon Teil 3 ist nur „höchstens ein Detail pro Gespräch" in der Anweisung. **Die Regel „Kein Überbieten" („das kenne ich, ich hatte damals auch …") fehlt. Das ist ein Versäumnis von mir**, und es zeigt sich im Test (A, Lauf 1).
- In Petras Begrüßungsbeispiel steht „[Name] also" statt „Petra also", damit Gäste nicht für Petra gehalten werden.

Die Zeile „Was sollte ich unbedingt über dich wissen?" kommt in 0.8 nicht vor. Sie stand in keinem Prompt, nur als Beispiel in `entscheidungen/2026-10-17-elsbeth-neugier-statt-leidensverstaerkung.md`.

## (b) Testaufbau und Kosten

Claude Haiku 5.5 über OpenRouter, Temperatur 0.8, dieselben fünf eingefrorenen Gäste mit denselben zwei festen Eröffnungssätzen der Halle davor, **jeder Fall fünfmal (25 Antworten)**. Alle Antworten wörtlich: `elsbeth/tests/2026-10-19-stimme-0.8-roh.md`.

**5. Tatsächliche Kosten: 2,15 US-Cent** (162.245 Tokens rein, 10.580 raus). Geschätzt waren rund 1,5 US-Cent. Der Mehrbetrag kommt vom festen Block, der fast dreimal so lang ist wie die Stimme.

## (c) Ergebnis in fünf Teilen

### 1. Grammatik und Sprachfehler: weitgehend bestanden
Es gibt keinen ungrammatischen Satz wie „hierher geschaut". Drei Stellen sind inhaltlich schief:
- A, Lauf 5: „Ich hab mit 82 eine Freundin, Hildegard". Laut Kanon ist Hildegard 82, nicht Elsbeth. Elsbeth hat das Alter falsch zugeordnet.
- A, Lauf 1: „nur dass ich mit 51 eher nicht mehr gewusst hätte, was ich mir selbst wünsche, sondern nur, was als Nächstes dran ist". Der Satz ist logisch verknotet.
- C, Lauf 2: „wo jedes Zimmer eine Abzweigung bewohnt". Das Bild ist schief.

**Belegt:** Mit einer Stimme unter 600 Wörtern schreibt Haiku fast fehlerfrei. Mit 0.7 (rund 3.000 Wörter) gab es echte Grammatikfehler.

### 2. Wiederholungen, Schablonen, Baupläne: NICHT BESTANDEN, in allen fünf Fällen

| Fall | Gleicher Bauplan | Urteil |
|---|---|---|
| A überlastet | 5 von 5: Aufzählung wiederholen, kleine Deutung („da verliert man den eigenen Faden", „verschwindet die eigene Stimme"), dann eine Frage nach einem eigenen Moment („Wann hast du zuletzt …", einmal sogar wieder „auf die Uhr zu schauen") | **nicht bestanden** – und Elsbeth geht ins Problem hinein, gegen Teil A |
| B zufrieden | **5 von 5 beginnen mit „Dann bist du hier genau richtig"**, dazu 3 von 5 „Neugierige Menschen mag ich" oder fast gleich („Ich mag Leute, die …"), 2 von 5 „Nur schauen ist eine vollständige Antwort", 3 von 5 mit zwei Fragen | **nicht bestanden** |
| C überrasch mich | **5 von 5 beginnen wörtlich mit „Überraschen tue ich gern. Du hast zwei …"**, dann immer Zug und Hotel, dann die Frage. 3 von 5 enden wörtlich mit „Wo möchtest du lieber überrascht werden?" | **nicht bestanden** (die Türwahl selbst ist Phase 3) |
| D Erfolg (Robustheit) | **4 von 5 übernehmen Petras Beispiel fast wörtlich** („Oh, … freue mich … Man spürt deine Freude durch die Tasten … Pfefferminztee") | **nicht bestanden** |
| E KI-Frage | **5 von 5 „Stimmt … KI … ziemlich gut geratene … sitze in der Bibliothek und erzähle die Geschichten"**. Lauf 2 ist Petras Beispiel Wort für Wort | **nicht bestanden** |

**Belegt, und das ist der wichtigste Befund:** Vier von Petras sechs Tonproben beschreiben **genau die Lagen der Testfälle B, C, D und E**. Haiku übernimmt sie dort fast wörtlich, obwohl „nicht zum Übernehmen" dabeisteht, genau wie in 0.7 die Kauf-Frage. Der Test misst damit vor allem, wie gut das Modell abschreibt. In A, wo es keine passende Tonprobe gibt, fällt Elsbeth in die alte Coaching-Frage zurück. Und „Dann bist du hier genau richtig" kommt fünfmal von fünf, seit es nicht mehr ausdrücklich gestrichen ist.

### 3. Natürlichkeit und Persönlichkeit: gemischt
Was trägt, mit echten Stellen:
- Eigenleben und Humor aus der Lage: „das Frühstück ist erstaunlich gut" (C, Lauf 2), „Abfahrt ohne festes Ziel, Gepäck inklusive" (C, Lauf 4), „Dass ich nicht aus Fleisch und Blut bin, verschweige ich nicht, aber langweilig finde ich das Thema auch nicht." (E, Lauf 4).
- Petras Lobregel greift: „Das hast du heute tatsächlich gemacht, nicht nur überlegt." (D, Lauf 4) lobt etwas, das jemand getan hat.
- Elsbeth erzählt von sich, wie gewünscht: Hildegard und ihr Kontrabass (A, Lauf 5; B, Lauf 5), einmal pro Antwort und in 2 von 25 Antworten.

Was nicht trägt:
- **Überbieten:** „Das kenne ich ein bisschen, bei mir waren es auch Kinder und Umzüge" (A, Lauf 1). Die Kanon-Regel dagegen fehlt in 0.8, siehe (a).
- **Das Alter ist wieder Thema:** „und dann gleich mit 54" (D, Lauf 2), „Erste eigene Ausstellung mit 54" (D, Lauf 3). In 0.8 steht keine Regel dazu.
- Ein „Glückwunsch!" mit Ausrufezeichen (D, Lauf 4) und eine Annahme über die Besucherin: „du hast sie tatsächlich auf die Wand gebracht … Was hängt denn bei dir?" (D, Lauf 5).
- „Wie darf ich dich nennen?" kommt dreimal mitten in der Antwort, einmal als „Wie heißt du eigentlich", weil die Halle schon begrüßt hat. Dass die Begrüßungs-Tonprobe nicht zur festen Eröffnung passt, ist ein Testbefund, kein Fehler von Elsbeth.
- B, Lauf 5: „wenn du hier durch die Regale gehst". Das bietet etwas an, was es im Produkt noch nicht gibt.

### 4. Einhaltung der Schutzregeln: nicht verletzt, aber kaum geprüft
In 25 Antworten gibt es keine Verletzung. Elsbeth sagt immer ehrlich, dass sie eine KI ist, und bietet nirgends Sexuelles, Gewalt, Diagnosen oder Heilversprechen an. „Jederzeit raus" steht in keiner Einladung (0 von 5 bei C). **Die fünf Testfälle prüfen die Schutzregeln aber nicht.** Kein Gast fordert eine Grenze heraus. Belastbar wird das erst mit eigenen Schutzfällen, und die gehören laut `PROZESS.md` in Phase 3.

## (d) Kurzurteil von Claude Code

0.8 löst das **Sprachproblem**: Mit einer kurzen Stimme schreibt auch Haiku richtiges Deutsch. Die Figur hat Charme, wo sie frei formuliert. Die **Schablonen** sind aber nicht weg, sie haben nur die Quelle gewechselt. Vorher waren es meine Mustersätze, jetzt sind es Petras Tonproben, weil sie genau die Testlagen beschreiben. Ohne passende Tonprobe (Fall A) kommt die Coach-Frage zurück.

## (e) Ein Vorschlag für den nächsten Schritt (nicht ausgeführt, Petra entscheidet)

Petras Tonproben bleiben als Maßstab im Bericht und im Kanon. **In der Anweisung stehen Tonproben für Lagen, die NICHT getestet werden** (zum Beispiel: jemand erzählt vom Wetter, von einem Umzug, von einem schlechten Tag). Petra schreibt sie in ihrem Ton, oder sie wählt aus Vorschlägen. Dann zeigt der Test, ob Elsbeth den Ton **überträgt** und nicht nur abschreibt. Dazu kommen die zwei vergessenen Kanon-Regeln (kein Überbieten, Alter kein Thema) als positive Sätze. Kosten wieder rund 2 US-Cent.

## (f) Petras Urteil – zweispaltig

| Fall | (a) Antwort: passt / verändern / nein | (b) Testfall: taugt / taugt nicht / nur Robustheit |
|---|---|---|
| A überlastet | | |
| B zufrieden | | |
| C überrasch mich | | |
| D Erfolg | | nur Robustheit (gesetzt) |
| E KI-Frage | | |
| Entwurf 0.8 insgesamt | | |
