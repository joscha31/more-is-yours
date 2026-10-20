# Elsbeth: wechselnde Beispielsätze. Auskunft, keine Umsetzung

**Stand:** 20.10.2026 · **Status:** AUSKUNFT. Nichts gebaut, nichts getestet, nichts ausgegeben. 0.4 läuft unverändert, der Entwurf 0.10 ist unverändert.
**Gelesen:** `outputs/reel-generator-tool/api/elsbeth.js`, `ELSBETH-REGELN-0.10-ENTWURF.md`, Testbericht 0.10, Fragenpool (`fragen.json`, Sicherung vom 20.10.), die Anthropic-Unterlagen zu Prompt-Caching und zu den Haiku-5.5-Preisen.

## Das Wichtigste vorweg

1. **Technisch geht es ohne neue Server-Funktion.** Der Vorrat liegt als Datei neben den Regeln (`api/_elsbeth-tonproben.js`). Dateien mit Unterstrich zählen bei Vercel nicht als Funktion, genau wie heute `_elsbeth-regeln.js`. Es bleibt bei 11 von 12.
2. **Am besten zieht man je Gespräch, nicht je Nachricht.** Dann bleibt der Systemtext während des ganzen Gesprächs gleich. Das Caching funktioniert ab der zweiten Nachricht, egal an welcher Stelle die Beispiele stehen. Die Reihenfolge aus 0.10 kann also bleiben.
3. **Die Kosten entscheiden hier nichts.** Mit Haiku 5.5 kostet ein Gespräch in jeder Spielart unter 2 US-Cent. Der Unterschied zwischen der teuersten und der günstigsten Spielart liegt bei höchstens 0,7 Cent.
4. **Der Vorrat ist noch nicht so weit.** In der Sicherung vom 20.10. liegen 7 Antworten, alle zum Thema „Wer sie ist“. Das sind Beschreibungen von Elsbeth, keine Tonproben. Als Tonprobe taugt nur ein Paar aus Gast-Satz und Elsbeths Antwort darauf. Ob in der Zentrale schon mehr Antworten liegen, habe ich nicht geprüft.
5. **Meine Empfehlung:** beide Spielarten verbinden, so wie 0.10 es schon im Kleinen macht. Jede Tonprobe trägt ihr Muster in einer Zeile in Klammern bei sich. Die Regel steht also immer neben einem Beispiel und nie allein.

---

## 1. Technik

**So läuft es heute:** `api/elsbeth.js` schickt bei jeder Nachricht denselben Systemtext (`REGELN`) mit einem einzigen Cache-Merker. Den Verlauf schickt das Gerät des Gastes mit. Der Server speichert davon nichts.

**Der einfachste Umbau (beschrieben, nicht gebaut):**
- Der Systemtext wird zu einer Vorlage, in der „SO KLINGST DU“ eine Lücke hat.
- Der Vorrat liegt als Liste in `api/_elsbeth-tonproben.js`. Jeder Eintrag hat eine Kennung, eine Lage (Rat, Trauriges, Problem, einsilbig, Abschied …), den Gast-Satz, Elsbeths Antwort und das Muster in einer Zeile.
- Der Server zieht drei Einträge und setzt sie in die Lücke. Mehr braucht es nicht, also keinen Speicher und keine Datenbank.

**Drei Arten, die Auswahl zu treffen:**

| Auswahl | Wie | Urteil |
|---|---|---|
| je Anfrage zufällig | bei jeder Nachricht neu ziehen | Elsbeths Ton kann innerhalb eines Gesprächs springen. Das Caching geht verloren, wenn die Beispiele vor dem festen Block stehen. **Nicht empfohlen.** |
| **je Gespräch zufällig** | einmal ziehen, dann stehen lassen | Der Ton ist im Gespräch beständig, das Caching bleibt erhalten. **Empfohlen.** |
| passend zur Lage | ein Beispiel passend zur Lage des Gastes, zwei zufällig | Das klingt klug, hat aber eine Falle: Gibt es zu einer Lage nur eine Probe, zieht jedes Gespräch in dieser Lage dieselbe Probe, und die Schablone ist zurück. Erst sinnvoll, wenn es je Lage mindestens 4 bis 5 Proben gibt. |

**Woher der Server „je Gespräch“ weiß:** Er speichert nichts, er sieht nur den Verlauf. Er braucht deshalb eine Zahl, die über das ganze Gespräch gleich bleibt. Zwei Wege:
- **Die Halle würfelt beim Betreten eine Zufallszahl** und schickt sie mit jeder Nachricht mit. Das ist eine kleine Änderung an der Seite der Halle. **Das ist der saubere Weg.**
- Der Server bildet die Zahl aus der ersten Nachricht des Gastes. Das kommt ohne Änderung an der Halle aus, hat aber einen Haken: Fast alle beginnen mit „Hallo“ und bekämen dann dieselben drei Proben. Die Schablone wäre durch die Hintertür zurück. **Nicht empfohlen.**

**Schutz der fünf eingefrorenen Testfälle:** Der Vorrat führt eine feste Sperrliste mit den Kennungen aller Proben, die zu einem der fünf Fälle (A bis E) gehören. Die Ziehung überspringt diese Kennungen grundsätzlich. Zusätzlich prüft die Ziehung beim Laden, ob ein Gast-Satz aus dem Vorrat einem der fünf Test-Gastsätze zu ähnlich ist, und lässt ihn dann ebenfalls aus. Die Sperrliste pflegt nur ein Mensch, keine Ziehung.

## 2. Prompt-Caching

**Wie es funktioniert:** Gespeichert wird immer der Anfang des Textes bis zum Merker. Ändert sich ein einziges Zeichen, gilt alles dahinter als neu.

**Wo der wechselnde Teil stehen müsste:**
- **Bei Ziehung je Nachricht** müsste er hinter dem festen Schutzblock stehen, damit der Block weiter aus dem Speicher kommt. Dann rücken die Tonproben aber ans Ende des Textes, und was am Ende steht, wirkt oft am stärksten. Die Proben könnten dann stärker ziehen als heute. Das wäre eine Änderung am Aufbau, die 0.10 nicht getestet hat.
- **Bei Ziehung je Gespräch ist die Frage hinfällig.** Der ganze Systemtext bleibt im Gespräch gleich, die Reihenfolge aus 0.10 kann bleiben, der Schutzblock bleibt, wo er ist.

**Was verloren geht:** Nur das Teilen des Speichers zwischen zwei verschiedenen Gästen. Das bringt schon heute wenig, weil der Speicher nach 5 Minuten verfällt und Gäste selten im 5-Minuten-Takt kommen.

**Kosten je Gespräch** (Schätzung). Haiku 5.5 kostet laut Anthropic-Liste 0,10 $ je Million Tokens rein und 0,50 $ raus. Schreiben in den Speicher kostet das 1,25-Fache, Lesen ein Zehntel. Annahmen: Systemtext 0.10 rund 3.700 Tokens, Elsbeth antwortet mit rund 150 Tokens, je Wechsel kommen rund 200 Tokens Verlauf dazu.

| Spielart | 10 Wechsel | 25 Wechsel |
|---|---|---|
| heute (fester Block, mit Caching) | rund 0,26 Cent | rund 0,95 Cent |
| **je Gespräch gezogen** | **rund 0,26 Cent** (gleich) | **rund 0,95 Cent** (gleich) |
| je Nachricht gezogen, Proben ans Ende | rund 0,29 Cent | rund 1,0 Cent |
| je Nachricht gezogen, Proben in der Mitte (wie 0.10) | rund 0,5 Cent | rund 1,65 Cent |

Der Tagesdeckel von 0,70 $ reicht im teuersten Fall noch für rund 40 lange Gespräche am Tag, heute für rund 70.

Haiku 5.5 denkt ohne ausdrückliche Einstellung von selbst ein wenig nach, bevor es antwortet. Diese Denk-Tokens werden als Ausgabe berechnet, und meine Schätzung enthält sie nicht. Für den Tagesdeckel spielt das keine Rolle, weil der Server die echten Zahlen von Anthropic zählt.

## 3. Wechsel je Gespräch

Ja, so bleibt das Caching innerhalb des Gesprächs erhalten. Die erste Nachricht schreibt den Systemtext einmal in den Speicher, jede weitere Nachricht innerhalb von 5 Minuten liest ihn. Das ist der Weg, den ich empfehle. Er kostet so viel wie heute und braucht nur die kleine Änderung an der Halle (die Zufallszahl).

## 4. Wortgrenze (600 Wörter für Teil A bis C)

Heute stehen in 0.10 sechs Proben mit zusammen 235 Wörtern, also rund 39 Wörter je Probe samt Lage-Zeile. A bis C kommen auf 515 Wörter.

- **Drei Proben im heutigen Zuschnitt** (Gast-Lage, Antwort, ein Satz Muster) brauchen rund 120 Wörter. A bis C kämen dann auf rund 400 Wörter.
- **Vorsicht bei Petras Diktaten:** Die gesicherten Antworten sind im Mittel 66 Wörter lang, die längste hat 201. Drei solche Antworten ergeben 200 bis 600 Wörter, und die Grenze wäre schnell gerissen. Jede Probe braucht deshalb vor der Aufnahme in den Vorrat eine Obergrenze. Mein Vorschlag sind höchstens 50 Wörter, ausgewählt aus Petras Antwort, nicht umgeschrieben.
- **Die Diktate brauchen außerdem eine Säuberung.** Die Spracherkennung hat zum Beispiel aus „Elsbeth Unknown“ „Elsbeth Annaun“ gemacht. Solche Fehler würde Elsbeth sonst mitlernen.

## 5. Abnahmetest

**Der Vorschlag mit zwei Durchgängen ist gut, aber er beweist noch nicht ganz, was er beweisen soll.** Verschwinden die Schablonen im wechselnden Durchgang, kann das zwei Gründe haben: das Wechseln selbst, oder schlicht anderes Material (Petras Diktate statt der heutigen sechs Proben). Ein dritter Durchgang trennt beides:

| Durchgang | Beispielblock | prüft |
|---|---|---|
| 1 | 0.10 wie heute, sechs feste Proben | den Ausgangsstand |
| 2 | **drei feste Proben aus dem neuen Vorrat** | ob anderes Material allein schon hilft |
| 3 | drei je Lauf gezogene Proben aus dem Vorrat | ob das Wechseln hilft |

**Damit der Test etwas aussagt:**
- **Feste Ziehungen statt Zufall.** Lauf 1 bis 10 im dritten Durchgang benutzen festgelegte Zufallszahlen. Der Test lässt sich dann wiederholen, und im Protokoll steht bei jeder Antwort, welche drei Proben sie gesehen hat.
- **Im dritten Durchgang 10 statt 5 Läufe je Fall.** Mit nur 5 verschiedenen Ziehungen bleibt zu viel Zufall.
- **Zwei Zählungen statt einer.** (a) wie bisher: Haben alle Läufe eines Falls denselben Bauplan? (b) neu: Wie viele Wortfolgen aus den gezogenen Proben tauchen wörtlich in der Antwort auf? Das misst das Abschreiben direkt.
- Dieselben fünf Gäste, dieselben Eröffnungssätze, Temperatur 0.8, Haiku 5.5, wie bei 0.10.

**Kosten:** Der Test zu 0.10 kostete für 25 Antworten 2,13 US-Cent.
- Petras Doppeltest mit 2 × 25 Antworten: **rund 4,3 Cent**.
- Mein Dreifachtest mit 25 + 25 + 50 Antworten: **rund 8,5 Cent**.

Dazu kommt eine Erweiterung von `scripts/elsbeth-stimme-test.py` um die Ziehung und die Abschreib-Zählung. Das ist Bauarbeit und gehört in eine eigene Freigabe.

## Die zweite Spielart: Stilregeln statt Sätze

**Nur Regeln** verspricht weniger. 0.6 und 0.7 sind genau daran gescheitert: Abstrakte Regeln hat Haiku befolgt, aber der Ton wurde dabei glatt und allgemein. Regeln sagen, was Elsbeth tun soll, aber nicht, wie es klingt.

**Nur wechselnde Beispiele** verhindert das Abschreiben einzelner Proben. Haiku kann aber aus drei zufälligen Proben das Falsche verallgemeinern, zum Beispiel „Elsbeth erzählt immer von Münster“.

**Die Verbindung ist am stärksten, und 0.10 hat sie schon im Kleinen erfunden:** Die neue Probe „Ein Problem“ trägt ihr Muster in Klammern bei sich: „du machst dich kleiner statt klüger und antwortest mit dir selbst“. So würde jeder Eintrag im Vorrat aussehen. Das Beispiel zeigt den Klang, die Klammer sagt, was daran übertragbar ist. Die Regel steht also nie allein und wird nie abstrakt, und das Beispiel wird nie zur Vorlage, weil es wechselt.

Zusätzlich könnten zwei oder drei feste Sätze über allen Proben stehen, etwa „Diese Beispiele zeigen den Ton, nicht die Worte.“ Mehr nicht. Jede weitere Regel zählt gegen die 600 Wörter und führt zurück zu 0.6.

## Was offen ist

- **Entscheidung (Petra):** ob und wann. Wenn ja, zuerst ein Vorrat von mindestens 20 Paaren aus Gast-Satz und Antwort, gesäubert und gekürzt, mit Sperrliste für die fünf Testfälle. Erst dann lohnt der Test.
- **Nachgeprüft am 20.10.:** In der Zentrale liegen dieselben 7 Antworten wie in der Sicherung, alle zu „Wer sie ist“ (c01 bis c07). c07 ist ein Fehler der Spracherkennung („Untertitel der Amara.org-Community“) und keine Antwort. Es gibt also 6 echte Antworten, und noch keine davon ist eine Tonprobe.
- STATUS.md im GitHub-Haus habe ich nicht angefasst, weil sich durch diese Auskunft am Stand nichts ändert.

## Nachtrag 20.10.: Taugen die 127 Fragen für den Vorrat?

**Antwort c07 ist gelöscht** (Petras Auftrag). In der Zentrale liegen jetzt 6 Antworten (c01 bis c06).

**Nur 48 der 127 Fragen sind überhaupt Tonproben-Fragen.** Nur dort sagt ein Gast etwas und Petra antwortet als Elsbeth: 40 Fragen am Eingang (a02 bis a56) und 8 im Übungsraum (u01 bis u08). Die übrigen 79 Fragen beschreiben Elsbeth von außen („Wie reagiert sie, wenn …“). Sie sind wertvoll für ihre Figur und ihre Welt, liefern aber keine Klangbeispiele.

**Davon fallen noch einige weg:**
- a22 und a36 sind als Maßstab markiert und kommen nie in den Vorrat.
- a17 (alles erreicht, langweilig), a35 (was soll ich mit meinem Leben machen) und a46 (will nur spielen) liegen nah an den Testfällen B, A und C. Ob sie in den Vorrat dürfen, entscheidet Petra. Bis dahin sind sie gesperrt.
- Die 8 Übungsraum-Fragen gehören zu einem Raum, den es in der Halle noch nicht gibt. Elsbeth bietet nur an, was es gibt. Deshalb kommen sie vorerst nicht in den Vorrat.
- **Bleiben 35 brauchbare Gast-Sätze.** Für drei gezogene Beispiele je Gespräch reicht das.

**Aber der Vorrat ist einseitig.** Fast alle 35 Gast-Sätze sind Fragen an Elsbeth, Probleme oder Skepsis. Es fehlen Gäste, die gut gelaunt sind, sich freuen, nur „ok“ schreiben oder in einer Szene stecken. Ein Vorrat, der fast nur aus Problemen besteht, zieht Elsbeth in den Tröste-Ton, genau das, was im Test bei Fall A auffiel.

**Vorschlag: 10 neue Gast-Sätze** (nur Vorschlag, noch nicht auf der Seite):
1. „Ich bin Oma geworden!“
2. „Ich hab mich heute endlich getraut, Nein zu sagen.“
3. „Ich hab den ganzen Tag nichts geschafft, und es war herrlich.“
4. „Erzähl mir einen Witz.“
5. „Ok.“
6. „Hm.“
7. „Ich hab gerade laut gelacht.“
8. „Gibt's das, was ich eben erlebt hab, auch in echt?“
9. „Nee, in echt reizt mich daran nichts.“
10. „Ich komm gerade vom Sport und bin völlig fertig, aber glücklich.“

Freude-Sätze dürfen den Testfällen B (glücklich, neugierig) und D (Ausstellung mit 54) nicht zu nah kommen. Deshalb fehlt hier zum Beispiel ein Satz über einen eigenen Erfolg.

**Tipp fürs Beantworten:** Sprich direkt als Elsbeth („Ach, wie schön …“), nicht über sie („Sie würde sagen …“). Ein bis drei Sätze reichen.

## Nachtrag 2, 20.10.: Die 10 neuen Fragen stehen auf der Seite. Entsteht so ein guter Vorrat?

**Umgesetzt:** neues Thema „Ein Gast sagt das – gute Laune und kurze Antworten“ mit f01 bis f10, direkt nach den Eingangs-Fragen. Die Liste hat jetzt 137 Fragen (Seite, `fragen.json`, `elsbeths-fragen.md`).

**Der Vorrat hat jetzt 45 brauchbare Gast-Sätze, nach Lage sortiert:**

| Lage | Anzahl | Kennungen |
|---|---|---|
| schwere Lebenslage, Problem | 11 | a07 a12 a15 a16 a18 a37 a38 a39 a43 x39 a45 |
| Fragen an Elsbeth selbst | 10 | a02 a23 a24 a25 a28 a29 a30 a32 a34 a56 |
| Freude, gute Laune | 7 | a09 a14 f01 f02 f03 f07 f10 |
| Fragen zur Halle | 6 | a03 a04 a05 a06 a48 a49 |
| Skepsis, Kritik | 5 | a19 a21 a51 a53 a55 |
| kurze Antworten | 2 | f05 f06 |
| Brücke in die echte Welt | 2 | f08 f09 |
| Spiel, Witz | 1 | f04 |
| Abschied | 1 | a50 |

**Urteil:** Für die zufällige Ziehung von drei Beispielen je Gespräch ist das ein guter Vorrat. Die Probleme machen jetzt ein Viertel aus statt fast die Hälfte. Nur in rund 6 von 10 Gesprächen ist überhaupt ein Problem-Beispiel dabei. Für eine Auswahl „passend zur Lage“ reicht er noch nicht, weil kurze Antworten, Brücke, Witz und Abschied zu wenige Beispiele haben.

**Wichtig:** Der Vorrat zeigt Elsbeth als Gastgeberin. Wie sie in einer Szene erzählt, zeigt er nicht. Das ist so gewollt, denn das Erlebnis hat seine eigenen festen Regeln.

## Sind die übrigen 92 Fragen nötig und sinnvoll?

Nötig für den Vorrat sind sie nicht. Sinnvoll sind die meisten trotzdem, aber für etwas anderes: Sie schärfen die Figur, liefern Stoff für ihre Welt und dienen später als Prüfmaßstab.

| Thema | Wofür | Empfehlung |
|---|---|---|
| Wie sie spricht (12) | Ihre Redewendungen, wie sie anfängt und aufhört. Damit lässt sich prüfen, ob Elsbeth immer gleich beginnt. | **sehr wertvoll**, gleich nach den Gast-Sätzen |
| Gefühle und schwierige Momente (9) | g01, g02, g05, g07 sind eigentlich Gast-Lagen | **wertvoll.** Wenn du dort direkt als Elsbeth antwortest, werden sie weitere Tonproben. |
| Gastgeberin der Bibliothek (10) | b03, b05, b07 sind Gast-Lagen; b01, b02, b04 ihr Antrieb | sinnvoll |
| Ehrlichkeit, Nähe und Grenzen (10) | pampig, Flirt, Vorführen, Wegschicken | sinnvoll als Maßstab für den Ton. Dafür gibt es feste Schutzsätze, die Antworten ändern daran nichts. |
| Ihre Neugier (9) | n04 (redet ohne Punkt), n10 (keine Antwort) sind Gast-Lagen | sinnvoll |
| Humor, Eigensinn (8) · Haltung zum Leben (7) · Wer sie ist (4) · Ihre Welt (9) | Figur und Kanon | schön, aber ohne Eile |
| Zum Schluss (1) | Was ein gelungenes Gespräch ausmacht | **wertvoll** als Abnahmemaßstab |
| Im Übungsraum (8) | ein Raum, den es noch nicht gibt | **zurückstellen**, bis der Raum entschieden ist |

**Reihenfolge, wenn du Lust hast:** zuerst die 45 Gast-Sätze, dann „Wie sie spricht“, dann „Gefühle“. Der Rest kann warten.

## Nachtrag 3, 20.10.: Übungsraum zurückgestellt, 15 neue Gast-Sätze

- **u01 bis u08 ruhen** (in `fragen.json` unter „zurueckgestellt“, auf der Seite ausgeblendet).
- **Neu f11 bis f25.** Das Thema heißt jetzt „Ein Gast sagt das – Alltag, Freude und Abschied“ und hat 25 Fragen. Die Liste hat insgesamt 144 Fragen.
- **Ausgewählt nach den Lücken im Vorrat:** kurze Antworten („Ja.“, „Nö.“, „Mal sehen.“), Brücke und Rückweg in die Geschichte, Witz und Alltagskomik, Smalltalk, ein Gast kommt wieder, viermal Abschied.
- **Bewusst weggelassen:** „Weiß nicht“ und „Lass uns was Verrücktes machen“, weil beides zu nah an Testfall C (überrasch mich) liegt. Außerdem nichts über einen eigenen Erfolg (Fall D) und nichts zu „Chatbot“ (Fall E).
- „Da bin ich wieder!“ prüft nebenbei etwas Wichtiges: Elsbeth erinnert sich an niemanden, weil der Server nichts speichert. Ihre Antwort darf nicht so tun, als kenne sie den Gast.

**Vorrat jetzt: 60 Gast-Sätze**

| Lage | Anzahl |
|---|---|
| schwere Lebenslage, Problem | 11 |
| Fragen an Elsbeth | 10 |
| Freude | 7 |
| Halle, Wiederkommen | 7 |
| Skepsis, Kritik | 5 |
| kurze Antworten | 5 |
| Brücke, Rückweg | 5 |
| Witz, Alltag, Smalltalk | 5 |
| Abschied | 5 |

Damit hat jede Lage mindestens 5 Beispiele. Jetzt wäre auch eine Auswahl „passend zur Lage“ möglich (ein passendes Beispiel plus zwei zufällige), ohne dass immer dasselbe Beispiel kommt.
