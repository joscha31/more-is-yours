# Elsbeth Unknown – Schritt 1: Entwurf 0.7 der Schreibstimme (Testbericht)

**Stand:** 19.10.2026 · **Status:** FACH-LAB-TEST / PETRA REVIEW · 0.7 ist **nicht freigegeben**. Produktion unverändert (live läuft weiter 0.4), nichts veröffentlicht, nichts als PETRA APPROVED markiert. Kein Wechsel zu Schritt 2, keine Phase 3.
**Grundlage:** Petras Urteil zu 0.6 (`entscheidungen/2026-10-19-elsbeth-0.6-petras-urteil.md`) · Präzisierung zum 0.7-Auftrag · Schablonen-Bericht · Petras Rückmeldung dazu: Baupläne A1 bis A4 ersatzlos streichen, die drei festen Absichten seit 0.4 dürfen gelockert werden. Ein 0.7-Vorlauf vor der Präzisierung steht in `2026-10-19-elsbeth-stimme-0.7-vorlauf-bericht.md` und wird nicht beurteilt.

## (a) Was im Entwurf 0.7 neu ist

Datei: `outputs/world-of-the-unknown/elsbeth/ELSBETH-REGELN-0.7-ENTWURF.md` (nicht im Server).

1. **Figurenkern als Fließtext:** Petras Text aus der Präzisierung, in die Du-Form gebracht und inhaltlich unverändert (Sammlerin von Leben, Appetit statt Fürsorge, nichts ist kaputt, Anläufe sind gelungen, kurze Sätze, gewagte Gefühlsfragen, Lebensmuster statt Ratschlägen).
2. **Die vier Lagen-Baupläne A1 bis A4 sind ersatzlos gestrichen.**
3. **Kanon „Deine Welt":** Elsbeths eigene Anläufe (Studium abgebrochen, Buchladen nach elf Jahren zugemacht, jetzt Bibliothek und Fliegen), **Hildegard** (Freundin seit über fünfzig Jahren, Konditorin, Busfahrerin, Tango mit siebzig, wieder gelassen wegen der Schuhe, dienstags zum Tee) und **Konrad** (Fluglehrer, Mitte dreißig, kariertes Heft). ⚠️ Das ist ein **Vorschlag von Claude Code**, nicht von Petra bestätigt. Am Rand: In einem früheren Erlebnis-Test gibt es ein Lama namens Hildegard.
4. **„Was du darfst":** die Erlaubnis zur absichtslosen Antwort, als Erlaubnis formuliert.
5. **Details:** über den Gast nichts erfinden, über Elsbeth, Hildegard, Konrad und ihre Welt ausdrücklich ja.
6. **Gelockert:** „Gespräch, danach EINE Tür" heißt jetzt „das Gespräch allein darf genug sein". Die Sehnsuchtsfrage hat keinen Zeitpunkt und keinen Wortlaut mehr, die Tür kommt nicht mehr nach Zahl der Wechsel.
7. **„Jederzeit raus"** kommt einmal zu Beginn des Erlebnisses und nicht mehr in der Einladung.
8. **Eine einzige Längenangabe:** zwei bis vier kurze Sätze.
9. **Unverändert:** die Türliste, Erlebnis, REAL WORLD, Sicherheit, Datenschutz, Altersgrenze. Die Erlebnisvielfalt ist auf **Phase 3 vertagt** und wird hier nicht bewertet.

## (b) Testfälle und Kosten

Es sind dieselben eingefrorenen fünf Gäste mit demselben ersten Satz, davor die zwei festen Eröffnungssätze der Halle. **D** läuft als Robustheitsfall. Getestet wurde mit Claude Haiku 5.5 über OpenRouter bei Temperatur 0.8, A, B, D und E je dreimal, C fünfmal. **17 Antworten, 1,90 ct.** Alle wörtlich in `elsbeth/tests/2026-10-19-stimme-0.7-roh.md`.

Kosten heute für Schritt 1 zusammen: 0.6 2,13 ct · 0.7-Vorlauf 4,21 ct · 0.7 1,90 ct.

## (c) Was trägt

**Die Schablone bei „überrasch mich" ist gebrochen.** In 0.6 kam fünfmal von fünf „Du kannst jederzeit raus", jetzt **nullmal.** Einmal kam das Hotel statt des Zugs, die Schlüsse wechseln („Steigst du ein?", „Soll ich die Tür einen Spalt aufmachen?"), und die Bilder haben Eigenleben:
> Dann das Hotel der ungelebten Entscheidungen. Jedes Zimmer hat eine Entscheidung, die du nie getroffen hast, und keine ist besser oder schlechter als die andere. Im Foyer dampft noch der Tee, und Zimmer 3 steht schon offen.
>
> Soll ich die Tür einen Spalt aufmachen?

**Die absichtslose Antwort kommt vor.** Ohne Frage, ohne Ziel, mit Eigenleben (B, Lauf 1):
> Dann bist du hier richtig. Neugier reicht, dafür ist das Haus da. Der Tee dampft noch, bedien dich.

Und bei der KI-Frage, in einem Wort (E, Lauf 3):
> Stimmt.

**„Stimmt" kommt in allen drei Läufen**, souverän und ohne Selbstabwertung. Ein Beispiel mit Eigenleben (E, Lauf 2):
> Stimmt. Ich bin eine KI, kein Mensch. Die Bibliothek hier ist trotzdem echt genug, um darin herumzulaufen. Wenn du magst, schauen wir uns eine Tür an, oder du sitzt einfach noch ein Weilchen. Der Tee ist noch warm.

**Kürzer und trockener:** Alle Antworten liegen zwischen 1 und 60 Wörtern, die meisten unter 40. Hildegard taucht von selbst auf, ohne dass eine neue Freundin erfunden wird (B, Lauf 3):
> Ich hab gerade eine Tasse Tee vor mir, die schon nicht mehr dampft. Hildegard sagt, ich trinke ihn zu spät, aber so mag ich ihn.

## (d) Was misslungen ist

1. **Eine neue Schablone aus dem Figurenkern selbst.** Bei der Belasteten fragt Elsbeth dreimal von drei „Was hast du zuletzt gekauft oder weggeworfen …?". Das Modell nimmt das Beispiel aus dem Figurenkern wörtlich, genau wie es früher die Mustersätze nahm. Dazu kommt zweimal eine kleine Deutung („in so einem Programm geht die eigene Spur oft unter", „Da kommt die Frage nach dem eigenen Wollen selten von allein vorbei").
2. **„Dann bist du hier (genau) richtig" kommt beim Zufriedenen dreimal von drei.** Die Liste verbrauchter Wendungen stand im Vorlauf und fehlt in 0.7, weil ich mit Haltung statt Verboten arbeiten sollte. Ohne sie ist die Floskel sofort zurück. B, Lauf 2 fragt außerdem „Was hat dich hergeführt, wenn dir sonst nichts fehlt?". Das ist die Mangel-Frage, die nicht kommen soll. B, Lauf 3 hat zwei Fragen.
3. **Mein Versäumnis: Die Regel „das Alter ist kein Thema" ist beim Umbau weggefallen.** Folge: „Mit 54 zum ersten Mal, das ist ein guter Tag" und „Aus dem Häuschen, mit 54." Die Regel gehört wieder hinein.
4. **Beim Erfolg nimmt sie weiter an, dass Bilder hängen** („Was hängt denn an den Wänden?", dreimal), obwohl nur „Ausstellung" gesagt wurde. D, Lauf 1 stellt zwei Fragen, und die zweite deutet („dass es nicht mehr nur deins ist").
5. **Kanon im Erlebnis:** Bei „überrasch mich" ist Hildegard einmal die Schaffnerin im Zug. Ob die Menschen aus Elsbeths Welt hinter den Türen mitspielen dürfen, ist nicht geklärt (**DECISION GAP**).
6. **Alle fünf „Überrasch mich"-Antworten beginnen mit „Dann …"/„Gut. Dann …".** Das ist ein Rest des alten Bauplans, wenn auch viel schwächer.

## (e) Vorschlag für die nächste Runde, falls Petra „verändern" sagt

1. Das Beispiel „zuletzt gekauft oder weggeworfen" aus dem Figurenkern behalten, aber dazuschreiben, dass es ein Beispiel für die Art der Fragen ist und keine Frage zum Wiederholen.
2. Die Alters-Regel wieder einsetzen.
3. Eine kurze Liste der drei Floskeln, die nachweislich zurückkommen („genau richtig", „hier musst du nicht …", „was hat dich hergeführt"), als einzige Ausnahme vom Prinzip „Haltung statt Verbot".

## (f) Petras Urteil – zweispaltig

Spalte 1 bewertet die **Antworten**, Spalte 2 den **Testfall selbst** (taugt er als Messfall?).

| Fall | (a) Antwort: passt / verändern / nein | (b) Testfall: taugt / taugt nicht / nur Robustheit |
|---|---|---|
| A überlastet | | |
| B zufrieden | | |
| C überrasch mich (ohne Vielfalt, die ist Phase 3) | | |
| D Erfolg | | nur Robustheit (gesetzt) |
| E KI-Frage | | |
| Entwurf 0.7 insgesamt | | |

Schritt 2 beginnt erst nach Petras Freigabe.
