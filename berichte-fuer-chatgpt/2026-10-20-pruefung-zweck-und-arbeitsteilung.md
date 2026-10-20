# Prüfbericht: Entscheidungsvorlage „Wofür Elsbeth da ist und wer was macht"

**Stand:** 20.10.2026 · **Status:** PRÜFBERICHT von Claude Code. Die Vorlage bleibt FACH-LAB-VORSCHLAG / PETRA REVIEW. Nichts umgeschrieben, nichts gebaut, nichts getestet.
**Geprüft:** `co-work-briefs/2026-10-20-elsbeth-zweck-und-arbeitsteilung-vorlage.md` gegen STATUS, PROZESS, `KANON-ELSBETH.md`, Entwurf 0.9/0.10, die PETRA-APPROVED-Entscheidungen und die Technik (`api/elsbeth.js`, Halle).

## Was passt
- **Zwecktext:** Leitsatz aus PROZESS.md („sich trauen können, bevor man sich trauen muss"), Übungsraum statt Behandlung, keine Diagnose, keine Coachin. Dazu kommt erstmals, was Elsbeth stattdessen tun darf. Das deckt sich mit `2026-10-19-elsbeth-gespraechsvorgaben-gelockert.md`.
- **Arbeitsteilung:** Sie passt zur Lehre aus 0.7 (eine überladene Anweisung) und zu 0.8/0.9 (je kürzer, desto besser das Deutsch). Sie verkleinert Elsbeths Anweisung zusätzlich, weil die Erlebnisregeln später ins Erlebnis wandern.
- **Höchstens zwei Vorfragen, erst nach der Wahl der Tür:** Das passt zu „kein Fragebogen" und zu „Gast entscheidet". **Fragen nach der Zeit**: unproblematisch.
- **Minimale Übergabe als Liste, kein Gesprächstext:** Das passt zur Datenminimierung im Schutzblock und zum Sicherheitskonzept (der Server speichert keinen Text). Technisch ist der Weg vorhanden: Die Halle führt schon heute pro Gerät eine Liste (`localStorage` `wotu`: Türen, Mitbringsel) und schickt den Verlauf bei jeder Anfrage mit.
- **Keine Methodennamen:** Das passt zu „Kein Coaching-Vokabular" im festen Block. In Stimme und Block von 0.9 kommt kein Methodenname vor.
- **ChatGPTs Satz zur Intensität** passt zu allen Schutzregeln (siehe unten) und ist besser als die Vorlage.

## Was bestehenden Regeln widerspricht
1. **Regel 3a „Nur Material, keine Erlaubnis"** liest sich wörtlich gegen die PETRA-APPROVED-Regel `2026-10-17-elsbeth-erlaubnis-vor-tieferen-themen.md`: „Vor einer Vertiefung fragt Elsbeth um ausdrückliche Erlaubnis." Gemeint ist sicher „keine Erlaubnis zur Dosis". Wörtlich im Prompt könnte das Modell aber auch die Erlaubnisfrage vor tieferen Themen weglassen.
2. **Regel 3b „Wie weit ein Erlebnis geht, bestimmt Elsbeth"** steht gegen „Gast entscheidet", „Nie drängen", „jederzeit raus" und die Erlebnisregel „keine Katastrophen" im festen Block. Das gilt besonders zusammen mit dem gestrichenen Beispiel „Soll auch etwas Unangenehmes dabei sein?". Daraus kann man lesen, dass Elsbeth Unangenehmes einbauen darf, ohne zu fragen.
3. **Vorfragen-Beispiel „Namen und Stimmen" bei „Fünf an einem Tisch":** Sind damit Namen echter Menschen aus dem Leben des Gasts gemeint, kollidiert das mit dem Schutzblock („Du bittest nie um … Namen Dritter"). Sind es erfundene Namen für die fünf Ichs, passt es.
4. **Keine Methodennamen vs. Transparenz:** `2026-10-17-elsbeth-erleben-statt-vorschlagen.md` (PETRA APPROVED) sagt, Besucher müssen über die Methode nicht im Unklaren gelassen werden, „kein Tarnen". „Nie nennen" darf also nicht heißen, eine ausdrückliche Frage danach zu umgehen.
5. **Zwecktext:** Dort steht „Elsbeth", gilt aber immer „Elsbeth Unknown" (PETRA APPROVED). Außerdem „in eine andere Welt geholt": Laut `…positionierung-persoenlichkeitsentwicklung-klare-grenzen.md` sind die Welten ein Mittel, kein Eskapismus. Und er ersetzt den Teil A so, dass drei schon entschiedene Punkte wegfallen: Elsbeth duzt alle, sie darf sich einfach mitfreuen und ohne Frage enden, und sie ist eine KI und steht dazu. Einzelheiten stehen in der Vorlage, Abschnitt 7.

## Persönlichkeit: was verloren ginge und wo es bleiben sollte
Vom heutigen Teil A fielen weg: neugierige Frau mit eigenem Kopf · gewöhnliche Leben ehrlich interessant · „Gejammer reizt dich wenig, der Mensch dahinter sehr" · Abbrechen oder neu Anfangen heißt, jemand hat gemerkt und gehandelt · wenig von Lebensplänen und vom Sich-Finden, daher der Humor · „wie ein interessanter Mensch, den man zufällig kennenlernt". **Im Kanon (Teil 2) bleibt das alles erhalten**, dort muss nichts geändert werden. In der **Anweisung** wären es die Sätze, aus denen in 0.9 die Antwort kam, die Petra „meine Elsbeth" nannte. Wenn sie die Anweisung verlassen, sollte ein Satz Eigensinn in Teil C oder als vierter Zusatz in Teil A bleiben, zum Beispiel „Du hast einen eigenen Kopf, und Gejammer reizt dich wenig, der Mensch dahinter sehr" (etwa 14 Wörter). Das ist ein Vorschlag, Petra entscheidet.

## Kleinste notwendige Änderungen (Vorschlag, nicht eingetragen)
1. **3a:** „Nur Material, keine Erlaubnis **zur Dosis**. Die Erlaubnisfrage vor tieferen persönlichen Themen bleibt."
2. **3b:** Den letzten Satz durch **ChatGPTs Fassung** ersetzen: „Elsbeth Unknown bestimmt die erzählerischen Überraschungen. Der Gast behält jederzeit die Kontrolle über seine Teilnahme und persönliche Grenzen. Niemand muss die Intensität vorab festlegen. Wer abbrechen, ausweichen oder etwas nicht erleben möchte, kann das jederzeit tun." Damit verschwindet der Widerspruch zu „Gast entscheidet", „jederzeit raus" und „keine Katastrophen", und die Absicht der Vorlage (nicht nach der Dosis fragen) bleibt.
3. **Vorfragen:** ein Halbsatz, „keine Namen echter Menschen" (Schutzblock).
4. **Methodennamen:** „nennt von sich aus keine. Fragt jemand ausdrücklich, antwortet sie ehrlich in einfachen Worten."
5. **Zwecktext:** „Elsbeth Unknown" statt „Elsbeth". „Aus dem Alltag geholt" bestätigen. Dazu die drei Sätze duzen, mitfreuen/ohne Frage enden, KI und dazu stehen. Dann hätte Teil A rund 146 Wörter.

## Arbeitsteilung und Technik: was erst Phase 3 braucht
**Heute** führt Elsbeth das Erlebnis selbst: Die Erlebnisregeln (▸ UNKNOWN, Szenen, ▸ REAL WORLD) stehen im festen Block ihrer eigenen Anweisung, und es gibt nur einen Server-Weg (`api/elsbeth.js`, ein Prompt). Für 0.10 ändert die Arbeitsteilung deshalb nichts. Erst in Phase 3 wird gebraucht:
- **eine eigene Anweisung je Erlebnis**, mit dem Schutzblock auch darin. Der Schutz muss in jedem Prompt stehen, der mit Gästen spricht.
- **ein Moduswechsel im bestehenden `api/elsbeth.js`** (Gastgeberin oder Erlebnis X), keine neue Server-Funktion. Das Vercel-Limit liegt bei 12, 11 sind belegt.
- **die Übergabe-Liste** als eigenes Feld der Anfrage, aus der Halle wie die Mitbringsel, nicht im Gesprächstext.
- **Vorfragen je Erlebnis** in dessen Vorlage, darunter „braucht nichts" als gültige Angabe.
- **die Rückkehr zu Elsbeth** nach dem Erlebnis: Sie bekommt höchstens den Titel der Tür, nicht das Erlebnis.
- danach **die Erlebnisregeln aus Elsbeths festem Block herausnehmen.** Ihre Anweisung wird dadurch deutlich kürzer.
- **Tests:** dieselben fünf Gäste für Elsbeth, je Erlebnis eigene Fälle und Schutzfälle.

## Zur 600-Wörter-Grenze von 0.10 (offen)
Petra hat entschieden: Die Grenze gilt für die ganze Stimme. Mit der neuen Tonprobe „Problem" läge 0.10 bei rund 648 Wörtern, und „Deine Welt" mit 67 Wörtern hat in der Aufteilung keinen Platz. Der Zwecktext ändert daran fast nichts: Teil A bliebe mit den drei Zusätzen bei rund 146 statt 150 Wörtern. Mit einem Satz Eigensinn wären es rund 160, also über 150. Offen bleibt also: entweder die zwei Tonproben „Persönliche Frage" und „Abschied" herausnehmen (dann rund 592) oder „Deine Welt" kürzen. Zusätzlich müsste Petra entscheiden, ob Teil A für den Eigensinn begründet etwas mehr als 150 Wörter bekommt.
