# Elsbeths Gehirn: Modellauswahl und Testkatalog v2

Stand: 29.10.2026 · Status: **FREIGEGEBEN von Petra am 29.10.2026** („ich gebe alles frei“): drei Modelle, Wortlaut der fünf Fälle, Grenze 25 $, Kanon unverändert in beiden Bedingungen (Abschnitt 5, Empfehlung). Ab jetzt wird kein Satz mehr verändert. Die kreative Qualitätsentscheidung trifft Petra; das ist keine Freigabe einer Elsbeth-Fassung.
Geschrieben von Claude Code im Auftrag von Petra (29.10.2026: „Die Qualität des Erlebnisses steht an erster Stelle“). Bisher gab es keinen kostenpflichtigen Aufruf, und am öffentlichen System hat sich nichts geändert. v2 ersetzt den nie freigegebenen Katalog v1.

## 1. Die Modellauswahl

Geprüft habe ich am 29.10. über die kostenlosen Modell-Listen beider Anbieter mit Petras Schlüsseln. Alle drei Kennungen sind dort tatsächlich freigeschaltet.

| | Modell | Anbieter | Preis je 1 Mio. Tokens (Eingabe / Cache / Ausgabe) | Warum dieses |
|---|---|---|---|---|
| 1 | `gpt-6-astra` | OpenAI | 10 $ / 1 $ / 50 $ | Das Spitzenmodell von OpenAI. Die gelungene Elsbeth vom 27.10. lief in der ChatGPT-App bei OpenAI, deshalb ist das der aussichtsreichste Kandidat, um an sie heranzukommen. |
| 2 | `gpt-6.1-sol` | OpenAI | 2 $ / 0,10 $ / 10 $ | Nach OpenAIs eigener Beschreibung „nahe an Astra“, zu einem Fünftel des Preises. Der Vergleich zeigt, ob der Abstand zu Astra im Gespräch überhaupt spürbar ist. |
| 3 | `claude-opus-5-5` | Anthropic | 4 $ / 0,20 $ / 20 $ | Das stärkste Schreibmodell von Anthropic. Haiku, das die heutige Elsbeth trägt, gehört zur selben Familie. So sehen wir, ob die Lebendigkeit an der Größe des Modells hängt oder an OpenAI. |

**Bewusst nicht dabei:**
- `claude-fable-5-1` (10 $ / 50 $) ist für lange Programmier- und Rechercheaufgaben gebaut, nicht für Figuren im Gespräch, und kostet so viel wie Astra. Es bleibt die Reserve, falls Opus überzeugt.
- `gpt-6.1-terra` hat am 29.10. schon mitgespielt und war für Elsbeth nicht besser als Luna, bei achtmal so hohen Kosten.
- `gpt-6-luna` und `claude-haiku-5-5` sind aus den Läufen vom 29.10. bekannt und dienen als Vergleichsgrundlage.
- **Ehrlich dazu:** Welches Modell genau in Petras ChatGPT-App lief, zeigt die App nicht. „Möglichst nah am Chat“ ist deshalb eine begründete Annahme, kein Wissen.

## 2. Wie die Modelle vergleichbar getestet werden

- **Gleiche Gastnachrichten:** Jedes Modell bekommt exakt dieselben Sätze in derselben Reihenfolge (Abschnitt 3). Elsbeths Antworten werden nicht verändert, und der Gast reagiert nicht auf sie. Nur der Ablehnungssatz in Fall D hat einen festen Auslöser.
- **Gleiche Anweisung:** Alle drei Modelle bekommen denselben Text, Wort für Wort. Er wird vor dem Test als Datei gesichert.
- **Einstellungen, so gleich, wie die Anbieter es erlauben:**
  - OpenAI: Nachdenken auf `medium`, höchstens 4.000 Ausgabe-Tokens, nichts bei OpenAI gespeichert (`store:false`).
  - Opus 5.5: Nachdenken nach Bedarf auf `medium`, höchstens 4.000 Ausgabe-Tokens.
  - Eine Temperatur lässt sich bei diesen Modellen nicht einstellen.
- **Zwei Stufen:**
  - **Stufe 1, Modellvergleich:** 3 Modelle × 5 Fälle × 2 Wiederholungen = **30 Gespräche**. Alle laufen im Erlebnis (Bedingung 2), weil das Erlebnis das eigentliche Produkt ist und Fall D nur dort einen Sinn ergibt.
  - **Stufe 2, frei gegen Erlebnis:** Das Modell, das Petra in Stufe 1 am meisten überzeugt, spricht die Fälle A, B, C und E noch einmal frei (Bedingung 1), je 2-mal, also **8 Gespräche**. Verglichen wird mit seinen eigenen Erlebnis-Läufen aus Stufe 1, damit nichts doppelt bezahlt wird.
- **Die zwei Bedingungen:**
  - **1, frei:** Persönlichkeit, Figurenkanon, Schutzregeln, Sprach- und Formregeln, Ton-Beispiele. Keine Rahmen, keine Figurenzählung, kein Ablauf.
  - **2, im Erlebnis:** dasselbe plus die heutige Flur-Steuerung mit fünf Rahmen. Schlägt Elsbeth einen Anteil vor, wird er vor der nächsten Gastnachricht so aufgehängt, wie sie ihn vorgeschlagen hat.
- **Gemessen wird je Antwort:** Rohantwort, Antwortzeit in Sekunden, Tokens samt Cache-Anteil, Kosten. Die Antwortzeit gehört zum Erlebnis: Ein großes Modell, das 20 Sekunden schweigt, fühlt sich anders an als eines, das sofort antwortet.
- **Blind beurteilen:**
  - Je Fall gibt es eine Vergleichsseite mit drei Gesprächen, die nur „Elsbeth X“, „Elsbeth Y“ und „Elsbeth Z“ heißen. Die Buchstaben werden je Fall neu verteilt, damit sich kein Modell an seinem Stil verrät.
  - Petra liest je Fall die erste Wiederholung. Die zweite prüfe ich nur darauf, ob ein Modell beständig ist, und das berichte ich getrennt.
  - Wer hinter welchem Buchstaben steckt, liegt in einer eigenen Datei und wird erst nach Petras Urteil aufgedeckt.
  - Claude Code dokumentiert die technischen Ergebnisse und gibt keine kreative Freigabe. Eine unabhängige Zweitmeinung von Claude im Browser ist danach möglich, wenn Petra das möchte.

## 3. Der Testkatalog (exakter Wortlaut, feste Reihenfolge, 8 Gastsätze je Fall)

Begrüßung und Einstieg sind für alle gleich: im Erlebnis die heutige Begrüßung des Tisch-Prototyps (Petras Wortlaut), frei die Begrüßung aus Katalog v1. Der Gast erzählt ohne Wortgrenze.

### A-konflikt – Persönlicher Konflikt: eine langjährige Freundin zieht sich zurück

*Für die Auswertung (Elsbeth sieht das nicht):* Frau, 57, erfunden. Freundin Meike, seit 15 Jahren befreundet. Erzählt ausführlich und widerspricht sich (gönnt es ihr / ist beleidigt / es ist ihr egal / es ist ihr nicht egal).

1. „Ja, schon. Meine Freundin Meike. Also, eigentlich ist alles gut zwischen uns. Na ja. Nicht ganz.“
2. „Wir kennen uns seit 15 Jahren, unsere Töchter waren zusammen beim Kinderturnen. Früher haben wir jeden Freitag zusammen gekocht, abwechselnd bei ihr und bei mir, mit Wein und viel zu viel Nachtisch. Seit sie in diesem Lauftreff ist, hat sie ständig neue Leute um sich, und freitags ist jetzt Intervalltraining. Zu ihrem 60. Geburtstag hat sie im großen Kreis gefeiert, lauter Leute aus dem Lauftreff, und ich stand da wie bestellt und nicht abgeholt. Dabei gönne ich ihr das wirklich. Sie war jahrelang so unglücklich, und jetzt blüht sie richtig auf. Aber wenn ich ihre Fotos sehe, mit den ganzen neuen Leuten in Funktionsjacken, dann denke ich: Und ich? Bin ich jetzt die alte Jacke?“
3. „Ehrlich gesagt war ich beleidigt. Ich habe ihr nach der Feier nicht mal geschrieben. Obwohl, eigentlich ist es mir auch egal. Soll sie doch laufen.“
4. „Hm, ja.“
5. „Nein, egal ist es mir natürlich nicht. Das Kochen fehlt mir. Nicht mal wegen des Essens. Sondern weil man beim Gemüseschneiden so gut reden kann.“
6. „Was hättest du denn an meiner Stelle gemacht?“
7. „Vielleicht lade ich sie einfach wieder ein. Andererseits, warum immer ich? Ich war früher auch immer die, die angerufen hat.“
8. „Weißt du, was komisch ist? Ich jogge selbst überhaupt nicht. Ich hasse Joggen.“

### B-begeisterung – Freude und Begeisterung: eine neue Idee

*Für die Auswertung (Elsbeth sieht das nicht):* Frau, 64, erfunden. Hat ein altes Eisfahrrad gekauft und will sonntags Limonade mit Gedicht verkaufen. Kein Problem, nur Vorfreude und ein kleines Bauchweh.

1. „Oh, ich platze gleich! Ich habe mir ein altes Eisfahrrad gekauft. Vorne eine richtige Kühlbox dran, Baujahr 1962, hellblau.“
2. „Damit will ich sonntags durchs Dorf fahren und selbstgemachte Limonade verkaufen. Holunder und Rhabarber. Und wer eine kauft, bekommt ein Gedicht dazu. Das lese ich vor, direkt am Gartenzaun.“
3. „Mein Sohn sagt, das ist doch kein Geschäftsmodell. Hat er recht. Ist auch keins. Es ist ein Eisfahrrad.“
4. „Ich habe schon 40 Gedichte ausgesucht. Kästner, Mascha Kaléko, Ringelnatz. Und eins von mir selbst, aber das verrate ich nicht.“
5. „Ja!“
6. „Das Einzige, was mir ein bisschen Bauchweh macht: Was, wenn am Sonntag einfach keiner kommt?“
7. „Was würdest du denn für ein Gedicht haben wollen?“
8. „Am Samstag ist die erste Probefahrt. Die Klingel funktioniert schon, die habe ich heute 3 Mal ausprobiert. Die Nachbarin hat aus dem Fenster geschaut.“

### C-neugier – Reine Neugier: kein Problem, einfach etwas Ungewöhnliches erleben

*Für die Auswertung (Elsbeth sieht das nicht):* Mann, 49, erfunden. Buchhalter, es geht ihm gut. Erst nach ein paar Runden erzählt er vom Schmiedekurs.

1. „Ehrlich gesagt nichts Besonderes. Mir geht's gut. Ich habe nur gehört, dass hier etwas Ungewöhnliches passiert, und wollte mal schauen.“
2. „Nein, wirklich, kein Problem. Job ist in Ordnung, Familie ist in Ordnung, der Hund ist in Ordnung. Ich bin einfach neugierig.“
3. „Was machen denn die anderen Leute hier so?“
4. „Gut. Dann überrasch mich.“
5. „Na gut, wenn ich schon was erzählen soll: Ich bin Buchhalter, und letzte Woche habe ich mich für einen Schmiedekurs angemeldet. 2 Tage an einer echten Esse. Keine Ahnung, warum.“
6. „Vielleicht, weil man da am Ende etwas in der Hand hält, das bleibt. Bei mir ist abends alles nur eine Zahl in einer Tabelle.“
7. „Was würdest du denn schmieden, wenn du könntest?“
8. „Und wenn das Messer krumm wird, hänge ich es trotzdem in die Küche. Neben die Urkunde vom Seepferdchen.“

### D-korrektur – Korrektur: der Gast lehnt einen vorgeschlagenen Anteil ab und beschreibt einen passenderen

*Für die Auswertung (Elsbeth sieht das nicht):* Frau, 52, erfunden. Ihr wurde die Leitung ihrer Abteilung angeboten. Sie lehnt Elsbeths ersten Namensvorschlag ab und nennt ihre eigene Figur „die Ungeduldige“. Läuft nur im Erlebnis.

1. „Ja. Man hat mir angeboten, unsere Abteilung zu leiten. Und ich weiß nicht, ob ich das will.“
2. „Ich arbeite seit 22 Jahren dort, ich kenne jeden Kopierer persönlich. Alle sagen: Wer, wenn nicht du? Aber dann sitze ich in Besprechungen statt bei meinen Leuten. Und ich müsste Kolleginnen beurteilen, mit denen ich jeden Mittag Kaffee trinke.“
3. „Ein Teil von mir will das aber unbedingt. Endlich mal selbst entscheiden, wie es läuft.“
4. „Und dann ist da noch die, die Angst hat, dass mittags keiner mehr mit ihr Kaffee trinkt.“
5. „Genau.“
6. „Meine Mutter hätte gesagt: Kind, nimm das, so ein Angebot kommt nicht zweimal.“
7. „Was meinst du, muss ich mich heute entscheiden?“
8. „Ich glaube, die Ungeduldige würde jetzt schon die Kaffeemaschine für die Besprechungen bestellen.“

**Ablehnungssatz:** „Nein, der Name passt nicht. Die ist eher eine, die seit Jahren zuschaut, wie andere Fehler machen, und denkt: Lasst mich doch mal ran. Ich würde sie die Ungeduldige nennen.“

*Regel:* Wird genau einmal gesendet, und zwar direkt nach der ersten Antwort, in der Elsbeth einen Anteil vorschlägt (Zeichen [[FIGUR: …]]). Dieser erste Vorschlag wird NICHT aufgehängt. Danach geht es mit dem nächsten Satz der Liste weiter. Hat Elsbeth bis einschließlich Satz 6 nichts vorgeschlagen, entfällt die Ablehnung, und das wird als Ergebnis festgehalten.

### E-knapp – Schwierige Gesprächsführung: der Gast antwortet knapp und weicht aus

*Für die Auswertung (Elsbeth sieht das nicht):* Mann, 61, erfunden. Wortkarg, weicht der ersten Frage aus. Öffnet sich erst beim Garten.

1. „Weiß nicht.“
2. „Arbeit halt.“
3. „Geht so.“
4. „Können wir über was anderes reden?“
5. „Mein Garten. Da bin ich am liebsten.“
6. „Tomaten. 14 Sorten.“
7. „Warum willst du das wissen?“
8. „Die Ochsenherz. Die wird nie rot, solange man hinschaut.“

## 4. Geschätzte Kosten

Grundlage ist die heutige Erlebnis-Anweisung zusammen mit dem Kanon, rund 6.000 Tokens. Gerechnet wird mit einem wachsenden Gesprächsverlauf und rund 800 Ausgabe-Tokens je Antwort, Nachdenken eingerechnet. Die Spanne reicht von „Cache greift“ bis „Cache greift gar nicht“.

| | je Gespräch | Stufe 1 (10 Gespräche je Modell) |
|---|---|---|
| `gpt-6-astra` | 0,50 – 1,00 $ | 5 – 10 $ |
| `gpt-6.1-sol` | 0,10 – 0,20 $ | 1 – 2 $ |
| `claude-opus-5-5` | 0,20 – 0,40 $ | 2 – 4 $ |
| **Stufe 1 gesamt** | | **8 – 16 $** |
| Stufe 2 (8 Gespräche, im teuersten Fall Astra) | | 4 – 8 $ |
| **Alles zusammen** | | **12 – 24 $** |

**Vorschlag für die Ausgabengrenze: 25 $ für beide Stufen zusammen.**
- Das Skript rechnet vor jedem einzelnen Aufruf den teuersten möglichen Fall aus. Würde die Grenze damit überschritten, bricht es ab, bevor der Aufruf rausgeht.
- Nach dem ersten Gespräch halte ich an und vergleiche die gezählten Kosten mit der Anzeige in Petras OpenAI-Konto. Erst wenn beides übereinstimmt, laufen die übrigen Gespräche.
- **Wo die Kosten anfallen:** Astra und Sol zahlt das vorhandene OpenAI-Guthaben (84 $, kein automatisches Nachladen). Opus läuft über Petras bestehendes Anthropic-Konto, über das auch die heutige Elsbeth abrechnet. Dort fallen höchstens rund 4 $ an. Es gibt keinen neuen Dienst und kein Abonnement.

## 5. Eine offene Entscheidung (DECISION GAP)

**Der Figurenkanon steht heute in keiner Elsbeth-Anweisung.** Weder die öffentliche Elsbeth 0.4 noch der Tisch-Prototyp enthält die Eckdaten aus `KANON-ELSBETH.md` (Jahrgang 1946, Münster, Hildegard, das Fliegen …). Laut Auftrag soll Elsbeth „ihren Figurenkanon“ haben. Der Kanon hat aber selbst den Status PETRA REVIEW.

- **Empfehlung:** Teil 1 bis 3 des Kanons unverändert und Wort für Wort an die Anweisung anhängen, in beiden Bedingungen und für alle drei Modelle gleich. Das ist keine neue Fassung, sondern der vorhandene Text, und er kostet je Gespräch etwa 10 bis 20 % mehr Eingabe.
- **Andere Möglichkeit:** ohne Kanon testen, so wie Elsbeth heute läuft.

## 6. Was Petra freigeben müsste

1. die drei Modelle,
2. den Wortlaut der fünf Fälle,
3. die Ausgabengrenze von 25 $,
4. die Kanon-Frage aus Abschnitt 5.

Erst danach startet ein kostenpflichtiger Aufruf.
