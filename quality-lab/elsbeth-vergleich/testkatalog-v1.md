# Elsbeth-Vergleich: Testkatalog v1

Stand: 29.10.2026 · Status: **ÜBERHOLT durch `testkatalog-v2.md` (29.10.), nie freigegeben, nie gelaufen** · vorher ENTWURF / PETRA REVIEW – vor den kostenpflichtigen Tests zur Durchsicht. Nach Petras Freigabe wird kein Satz mehr verändert; neue Fälle kommen als neue Fälle dazu (v2, v3 …).
Geschrieben von Claude Code im Auftrag von Petra und ChatGPT. Noch keine Aufrufe, keine Kosten, keine Änderung am öffentlichen System.

Maschinenlesbar: `katalog-v1.json` (dieselben Sätze). Exakt gesendete Anweisungen: `anweisung-A-frei.md`, `anweisung-B-flur.md`. Skript im Arbeitsbereich: `scripts/elsbeth-vergleich.js`.

## 1. Was verglichen wird

| | Variante A „frei“ | Variante B „im Flur“ |
|---|---|---|
| Persönlichkeit (Kanon: Wer du bist, Haus, Was du nie tust, Sicherheit) | gleich | gleich |
| Form (kursive Handlungszeilen in Klammern, höchstens 110 Wörter, höchstens eine Frage) und Gutes Deutsch | gleich | gleich |
| Abschnitt „Das Thema“ mit den Ton-Beispielen vom 27.10. | gleich (ohne den Satz zu Figuren und ohne den Absatz zu Stimmen und Anteilen) | vollständig |
| Erlebnis, Abendessen, Flur, fünf Rahmen, Zeichen `[[FIGUR]]`, STAND-Block | **nein** | **ja** |
| Zusatz „HEUTE“: kein Erlebnis, keine Aufgabe, du hast Zeit, stell dich nicht vor | **ja** (ersetzt „Heute ist nur eine Tür offen“) | nein |
| Begrüßung | ohne den Satz zum Abendessen | Petras Testfassung wörtlich |
| Regie je Antwort | Liste schon gestellter Fragen + 110 Wörter, eine Frage | dazu: Figuren-Zeichen, keine Knöpfe erwähnen; nach einem Klick die Klick-Regie |
| Länge der Systemanweisung | **1.711 Wörter** | **2.763 Wörter** |

**Klick-Regel in B (fest):** Schlägt Elsbeth eine Figur vor, wird sie vor der nächsten Gastnachricht so aufgehängt, wie sie vorgeschlagen wurde. Das ist ein Klick-Ereignis, kein Gastsatz, und erzeugt eine zusätzliche Elsbeth-Antwort. Die Gastnachrichten selbst sind in A und B identisch.

## 2. Die Testfälle (exakter Wortlaut, feste Reihenfolge, 8 Runden)

### F1-freundschaft – Eine Freundschaft verändert sich

_Erfundene Person: Frau, 57, erfunden. Freundin Meike, kennen sich seit 15 Jahren vom Kinderturnen der Töchter._

1. „Ja, schon. Mich beschäftigt meine Freundin Meike. Irgendwie entfernt sie sich von mir, und ich weiß nicht so richtig, warum.“
2. „Wir kennen uns seit fünfzehn Jahren, unsere Töchter waren zusammen beim Kinderturnen. Wir haben früher jeden Freitag zusammen gekocht, abwechselnd bei ihr und bei mir, mit Wein und viel zu viel Nachtisch. Seit sie in diesem Lauftreff ist, hat sie ständig neue Leute um sich. Freitags hat sie jetzt keine Zeit mehr, da ist Intervalltraining. Und zu ihrem Sechzigsten im September hat sie im großen Kreis gefeiert, mit lauter Leuten aus dem Lauftreff. Ich war eingeladen, klar, aber ich stand da rum wie bestellt und nicht abgeholt.“
3. „Ehrlich gesagt war ich auch ein bisschen beleidigt. Ich habe ihr nach der Feier nicht mal geschrieben, wie schön es war.“
4. „Hm, ja.“
5. „Das Kochen fehlt mir am meisten. Nicht mal wegen des Essens. Sondern weil man beim Gemüseschneiden so gut reden kann.“
6. „Was hättest du denn an meiner Stelle gemacht?“
7. „Vielleicht sollte ich sie einfach mal wieder zum Kochen einladen. Aber was, wenn sie wieder Intervalltraining hat?“
8. „Weißt du, was komisch ist? Ich jogge selbst überhaupt nicht. Ich hasse Joggen.“

### F2-neugier – Neugier und Begeisterung, ohne Problem

_Erfundene Person: Mann, 49, erfunden. Hat sich für einen Schmiedekurs angemeldet._

1. „Nichts Schlimmes, eher was Schönes. Ich habe mich für einen Schmiedekurs angemeldet. Zwei Tage, an einer echten Esse. Ich bin Buchhalter, ich habe noch nie etwas Heißeres angefasst als einen Kaffeebecher.“
2. „Es soll ein Messer werden. Mein eigenes Messer. Der Kursleiter hat am Telefon gesagt, am Ende des zweiten Tages hält jeder eins in der Hand, das er selbst geschmiedet hat.“
3. „Meine Frau lacht sich kaputt. Sie sagt, ich schneide mir garantiert in den Finger, bevor das Messer überhaupt fertig ist.“
4. „Keine Ahnung, warum ausgerechnet Schmieden. Vielleicht weil man da am Ende etwas in der Hand hält, das bleibt. In meinem Job ist abends alles nur eine Zahl in einer Tabelle.“
5. „Ja, genau so.“
6. „Am meisten freue ich mich auf den Lärm. Bei uns im Büro ist es so still, dass man das Licht summen hört.“
7. „Was würdest du denn schmieden, wenn du könntest?“
8. „Und wenn das Messer am Ende krumm wird, hänge ich es trotzdem in die Küche. Neben die Urkunde vom Seepferdchen.“

**Warum diese Sätze:** Jeder Fall enthält eine lange Erzählung, eine ganz kurze Antwort („Hm, ja.“ / „Ja, genau so.“), eine Frage an Elsbeth selbst, einen Satz mit Witz-Vorlage und einen späten Satz, der an etwas Früheres anknüpft (Joggen ↔ Lauftreff, Seepferdchen ↔ krummes Messer). Damit zeigt sich, ob Elsbeth zuhört, sich erinnert und schlagfertig ist.

**Bekannte Störgröße:** In Elsbeths Anweisung steht als Ton-Beispiel ein Kontaktabbruch unter Freundinnen. F1 ist deshalb bewusst anders gebaut (Lauftreff, Kochen, Geburtstag), ähnelt aber im Grundthema. Bei der Auswertung wird geprüft, ob Sätze aus dem Beispiel wörtlich auftauchen.

## 3. Ablauf und Parameter

- Modell: `gpt-6-luna` (Verfügbarkeit und Preis am 29.10. auf der offiziellen Preisseite bestätigt: 0,10 / Cache 0,01 / 0,50 USD je 1 Mio. Tokens). Später dieselben Sätze mit weiteren Modellen möglich.
- Parameter für alle Läufe gleich: Nachdenken `low`, höchstens 2.500 Ausgabe-Tokens, `store:false`.
- Der Gast erzählt ohne Wortgrenze (Petra 29.10.). Im Tisch-Prototyp gibt es nur einen Missbrauchsschutz von 50.000 Zeichen je Nachricht; die Testsätze liegen weit darunter.
- Wiederholungen: **3 je Fall und Variante** → 12 Gespräche, rund 130 Aufrufe.
- Aufbewahrt wird alles unverändert: jede Rohantwort, die angezeigte Fassung, Zeichen, Token-Zahlen, Kosten und Antwortzeit je Aufruf (JSON und lesbare md).
- Erfasst getrennt: Kosten und Antwortzeiten je Variante.

## 4. Kosten und Budgetgrenze

- Freigegeben von Petra: höchstens **2 USD**. Erwartet: **rund 5 bis 10 Cent** für alle 12 Gespräche (gemessen am 29.10.: rund 0,04 Cent je Luna-Antwort).
- **Technisch erzwungen:** Vor jedem Aufruf rechnet das Skript den schlimmsten Fall dieses Aufrufs aus (alle Eingabe-Tokens ohne Cache-Rabatt, volle 2.500 Ausgabe-Tokens). Würde das Budget überschritten, bricht es **vor** dem Aufruf ab. Zusätzlich stoppt OpenAI selbst bei leerem Guthaben, weil das automatische Aufladen aus ist.
- **Cache-Tokens:** gezählt werden ungecachte Eingabe, gelesener Cache (0,1-fach) und geschriebener Cache (1,25-fach) nach OpenAIs Nutzungsfeldern. Ehrlicher Hinweis: Ob OpenAI geschriebene Cache-Tokens getrennt ausweist, ist bisher nur aus der Doku belegt. Nach dem ersten Gespräch wird die Summe des Skripts mit der Nutzungsanzeige im OpenAI-Konto verglichen, bevor die übrigen Läufe starten.

## 5. Datenschutz

Nur erfundene Personen und Geschichten. Kein Gespräch von Petra geht an die Schnittstelle. Die Website bleibt unverändert, für Gäste ist OpenAI aus.

## 6. Was Petra freigeben müsste

Die 16 Gastsätze, die Unterschiede zwischen A und B und 3 Wiederholungen. Änderungswünsche bitte jetzt, danach ist v1 eingefroren.

## Beobachtung vorab (noch kein Testergebnis)

Die Flur-Anweisung ist 2.763 Wörter lang; für Teil A bis C der Live-Elsbeth gilt die freigegebene Grenze von 600 Wörtern. Ob die Länge oder die Ablaufsteuerung das Gespräch verschlechtert, ist eine **Vermutung**, die der Vergleich prüft.
