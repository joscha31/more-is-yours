# Podcast Folge 1: „Wie wird aus einer Coaching-Übung ein Abenteuer?“ (27.10.2026)

Status: KREATIVER ENTWURF / PETRA REVIEW. Keine Freigabe zur Veröffentlichung. Projektphase unverändert.

## Auftrag (Petra und ChatGPT, 27.10.2026)
Neues Thema für die nächste interne Aufnahme von Folge 1, Beispiel: ein Abendessen mit fünf Versionen des eigenen Ichs. Zwei getrennte Hilfen: eine Karteikarte nur für Petra und ein kurzer Gesprächshintergrund für Mabel.

## Was geändert ist
- `podcast/mabel-fahrplan.md` neu: Mabels Teil = Hintergrund (wörtlich aus dem Auftrag) + „Deine Rolle heute“ (die Punkte aus dem Auftrag) + die Beginn-Regeln vom 23.10., leicht gekürzt. Petras Teil (hinter „=== NUR FÜR PETRA“) = Petras Karteikarte wörtlich. Das Studio schickt den Petra-Teil nicht an Mabel.
- Alter Fahrplan („Eine Frau. Mehrere KIs. …“, entschärft 27.10.) gesichert: `podcast/archiv/mabel-fahrplan-folge-1-stand-2026-10-27-eine-frau-mehrere-kis.md`.
- `podcast/mabel-was-gerade-los-ist.md`: Podcast-Punkt auf das neue Thema gebracht.
- Studio (lokal, `outputs/mabel-studio/index.html`): Die vorhandene Petra-Box im Kasten „Das weiß Mabel heute“ heißt jetzt „Deine Karteikarte · nur für dich, Mabel bekommt sie nicht“ statt „Dein Text fürs Intro“. Keine neue Funktion.

## Was unverändert bleibt
- Mabel 0.6 (`podcast/mabel-anweisung.md`), keine neue Version.
- Intro v9 mit Musik C3 (Petras Wahl 26.10.).
- Die Karte „Das weiß Mabel heute“ mit dem ✕ zum Weglassen von Punkten.
- Elsbeth, Erlebnisbibliothek, Homepage.

## Offen
Aus den Rückmeldungen vom 26./27.10. noch nicht entschieden: Umgang mit erfundenen Verwandten („Cousins“), eingefrorene Testfälle für Mabel.

## Fassung 2 (27.10.2026, Auftrag „Podcast Folge 1 vollständig vorbereiten“)
- `podcast/mabel-fahrplan.md` neu geschrieben. Mabels Teil: „Dein Beginn“ (sie wartet auf Petras Frage „Wer bist du eigentlich?“, stellt nur sich vor, darf Elsbeth als Mutter erwähnen, muss nicht), „Hintergrund für diese Folge“ (wörtlich aus dem Auftrag), „Wie du heute mitredest“ (die Punkte aus dem Auftrag). Die alten Beginn-Regeln vom 23.10. sind darin aufgegangen; die Regel „Elsbeth am Anfang nicht erwähnen“ ist durch „darf, muss nicht“ ersetzt.
- Petras Karteikarte: Einstieg zum Vorlesen (wörtlich), Selbstvorstellung (wörtlich), fünf Stationen in ganzen Sätzen wie im Auftrag, möglicher Abschluss.
- Fassung 1 gesichert: `podcast/archiv/mabel-fahrplan-folge-1-stand-2026-10-27-karteikarte-1.md`.
- Mabel 0.6, Stimme Nuri, Intro v9, Studio-Code unverändert.

## Codewort „Schnitt“ (27.10.2026, Petras Ja)
Petra nimmt am Stück auf und stoppt nicht mehr, wenn Mabel etwas Unpassendes sagt. Sie sagt „Schnitt“ und wiederholt ihre Frage; Claude Code schneidet hinterher anhand der Abschrift (getrennte Spuren). Im Fahrplan steht für Mabel: kein Kommentar zu „Schnitt“, ganz neu antworten, Herausgeschnittenes später nicht erwähnen. Auf Petras Karteikarte steht ein Hinweis dazu.

## Vergleichstest vorbereitet (27.10.2026, Empfehlung von ChatGPT nach dem Untersuchungsbericht)
Freigegeben war: Protokoll und Vorbereitung der zwei Testfassungen. Die Hörproben (rund 0,60 $) stimmt Petra vorher ausdrücklich ab.
- **Studio (lokal):** schreibt jetzt alle Ereignisse außer der Abschrift mit (`<Aufnahme>_ereignisse.txt`), zum Beispiel Hintergrund-Nachdenken oder Neustart. Neue Auswahl „Was nimmst du auf?“: Folge, Test 1, Test 2. Ein Test endet spätestens nach 7 Minuten. In `sitzung.json` stehen Testart und eine Kennung der benutzten Anweisung.
- **Test 1** = Mabel 0.6 unverändert (`podcast/mabel-anweisung.md`). **Test 2** = bereinigte Testfassung `podcast/test/mabel-anweisung-test-b.md` (TEST / PETRA REVIEW, keine neue Mabel-Version). Beide mit demselben Fahrplan `podcast/test/mabel-test-6-minuten.md` und demselben Hintergrund. Die Zuordnung steht nur hier, damit Petra blind hören kann.
- **Was in Test 2 anders ist als in 0.6:** neue Tonproben ohne Lob (Widerspruch mit Aufziehen, eine ausgemalte Szene, ein schneller Witz), Themen fern vom Test; Lob bleibt erlaubt, aber als eigene Reaktion mit Begründung; „Wie du mitdenkst“ beschreibt, was sie tun soll (eigener Gedanke, Einwand, Szene ausspielen) statt Verboten; ernste Themen: ernst bleiben und die eigene Sicht sagen; „Keine Kritikerin“ und die „mhm“-Pflicht gestrichen, dafür Abschnitte Backchannel, Unterbrechen und Nachdenken im Hintergrund nach OpenAIs Vorlage (kein <|SpawnThinking|> bei Meinung, Fantasie, Witz, Widerspruch, Ernstem). 638 statt 697 Wörter.
- Mabel 0.6 und die Folge-Einstellungen unverändert.

## Testfassung C „mehr Persönlichkeit, weniger Regeln“ (27.10.2026, Auftrag Petra und ChatGPT)
- Neu: `podcast/test/mabel-anweisung-test-c.md` (533 Wörter; B: 638, 0.6: 697). TEST / PETRA REVIEW, keine Mabel 0.7. Mabel 0.6 und Test B unverändert.
- Aufbau: Wer du bist · Wie du denkst und redest · ein Tonbeispiel · Was du weißt · Grenzen · Technik fürs Live-Gespräch (Backchannel, Unterbrechen, Nachdenken im Hintergrund, unverändert aus B), Persönlichkeit und Technik getrennt.
- Neu beschrieben statt verboten: Widersprüche bemerken und sagen (neugierig, nicht rechthaberisch); sich selbst lachend zurückholen, wenn sie sich verrennt; bei Ernstem beim Thema bleiben.
- Gestrichen: Tabu für Witze über Geld/Unsicherheiten (ersetzt durch „Grenze ist Herabsetzen und Bloßstellen“), „keine ausgedachten Vergleiche“, „Werbung/Vorträge“, „nichts ankündigen“, „keine Kalendersprüche“, „kein Zusammenfassen/Schlusswort“, „Achte darauf, dass Petra genug zu Wort kommt“, „nicht jeder Beitrag endet mit einer Frage“, zwei der drei Tonbeispiele aus B.
- Im Studio als „Test 3“ wählbar (Auswahl erweitert, sonst keine Technik geändert). Im Test-Fahrplan für Petra: Satz 2 nennt eine Mabel, die nicht aufgezählt wurde.

## Testfassung D (27.10.2026, Auftrag Petra und ChatGPT)
- Verbindlich (Petra und ChatGPT): GPT-Live-1 und Nuri bleiben, keine Modellvergleiche mehr, nur Mabels Gesprächspersönlichkeit wird weiterentwickelt. Der erfundene Gast wird nicht mit Spezialregeln verfolgt.
- Neu: `podcast/test/mabel-anweisung-test-d.md` (577 Wörter) = C mit zwei Änderungen: (1) Tonbeispiel aus C ersetzt durch zwei aus B (Widerspruch zu „Pläne werden überschätzt“, ohne das Spickzettel-Detail, weil das eine Tatsache über Petra unterstellt hätte; „Steuererklärung … freigesprochen?“). (2) Ernste Themen: neugierig auf die Sache, nachfragen, wie es dazu kam, eigene Sicht auf die Sache; „Wie es Petra damit geht und was das über sie sagt, erzählt sie selbst.“
- 0.6, B und C unverändert. Im Studio als „Test 4“ wählbar (nur die Auswahl erweitert). TEST / PETRA REVIEW, keine Mabel 0.7.
