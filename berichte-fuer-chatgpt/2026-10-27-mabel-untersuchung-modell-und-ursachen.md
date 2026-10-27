# Untersuchung: Warum bleibt Mabel nicht dauerhaft lebendig? (27.10.2026)

Kopier-Fassung für Petra und ChatGPT. Status: UNTERSUCHUNG, KEINE UMSTELLUNG. Nichts wurde verändert, nichts hat Geld gekostet.

Geprüft wurden der Code des Studios auf Petras Mac, die tatsächlich geladenen Texte (über die kostenlose Vorschau des Studios), die Abschriften der Proben und die offiziellen Seiten von OpenAI und Google (abgerufen am 27.10.2026, Quellen am Ende). Claude Code kann die Aufnahmen nicht wirklich anhören, nur die Abschriften lesen und den Ton messen.

Kennzeichnung: **GESICHERT** = im Code oder in der Anbieter-Doku nachgelesen. **VERMUTUNG** = plausibel, aber nicht bewiesen.

---

## A. Was läuft heute tatsächlich?

| | |
|---|---|
| Modell | **`gpt-live-1`** von OpenAI (GESICHERT, fest im Code `server.mjs`) |
| Schnittstelle | OpenAI „GPT-Live“, Adresse `v1/live/sessions`, Verbindung per WebRTC (GESICHERT) |
| Stimme | `nuri` (weiblich, Deutsch), Ersatz `marin` (GESICHERT) |
| Preis | 0,05 $ pro Minute Verbindungszeit, sekundengenau (GESICHERT, OpenAI-Preisseite). Bisher 140 Minuten in 43 Sitzungen = 7,00 $ vom 20-$-Rahmen. |
| Gesprächsart | „Vollduplex“: Mabel hört und spricht gleichzeitig, kann „mhm“ sagen, während Petra redet, und lässt sich unterbrechen (GESICHERT, Doku) |
| Einstellbare Regler | Laut Doku werden beim Start nur Modell, Anweisung, Startverlauf, Stimme und Speichern festgelegt. **Es gibt keinen Regler für Spontaneität, „Temperatur“, Gesprächstempo oder Unterbrechen.** Alles läuft über den Anweisungstext (GESICHERT). |
| Wissensstand des Modells | bis 31.07.2025 (GESICHERT) |

**Wie Mabels Texte ankommen (GESICHERT, Code):**
1. **Anweisung** (`mabel-anweisung.md`, 697 Wörter, Mabel 0.6) geht als feste Startanweisung an das Modell.
2. **Hintergrund** („Was wir bauen“ 397 Wörter, „Petras Weg“ 203, „Was gerade los ist“ rund 140) und der **Fahrplan** (Mabels Teil, rund 500 Wörter) gehen **nicht** in die Anweisung, sondern als erste Nachricht in den Gesprächsverlauf.
3. Ein Startsatz: „Petra beginnt. Sag nichts, bis sie ihren ersten Satz beendet hat. Der Fahrplan ist nur ein roter Faden.“
4. Zusammen bekommt Mabel rund **1.940 Wörter**, davon gut 1.200 im Gesprächsverlauf.

**Was in langen Gesprächen passiert (GESICHERT, Doku „Managing sessions“):** Das Modell hat ein Gedächtnis von 128.000 Bausteinen („Tokens“). Ist es zu 90 % voll, startet es innerhalb derselben Sitzung neu und bekommt dann **die Startanweisung vollständig, vom bisherigen Gespräch aber nur die jüngsten Teile und eine Zusammenfassung** (höchstens 8.192 Bausteine). Ob das in 22 Minuten schon passiert ist, wissen wir nicht: Das Studio speichert dieses Ereignis nicht, und die Doku nennt nicht, wie viele Bausteine eine Gesprächsminute verbraucht. Falls es passiert, wären Fahrplan und Hintergrund nur noch zusammengefasst da, denn sie stehen im Verlauf, nicht in der Anweisung.

**„Nachdenken im Hintergrund“ (GESICHERT, Code und Doku):** GPT-Live kann bei schwierigen Fragen selbst entscheiden, Arbeit an ein Hintergrundmodell abzugeben („Delegation“). Das Studio antwortet in diesem Fall immer: „Es gibt keine Werkzeuge und kein Nachschlagen. Antworte aus dem Gespräch und sag offen, wenn du etwas nicht weißt.“ OpenAI empfiehlt, in der Anweisung einen Abschnitt zu haben, der festlegt, wann das Modell abgeben soll und wann nicht. **Mabels Anweisung hat keinen solchen Abschnitt.** Wie oft Mabel abgegeben hat, wissen wir nicht, weil das Studio es nicht mitschreibt.

---

## B. Was könnte Mabels Verhalten verursachen?

### Gesicherte Befunde
1. **Die zweite Tonprobe in Mabels Anweisung ist selbst ein Mut-Lob.** Dort steht als Beispiel für Mabels Ton: „Ach, ich finde, man kann euch Menschen gar nicht oft genug sagen, wie mutig ihr seid.“ Gemeint war es ironisch. Sprachmodelle ahmen Beispiele aber besonders stark nach, stärker als Regeln. In der 22-Minuten-Aufnahme sagt Mabel nach 4 Minuten: „mutig von dir, so eine ungefilterte Stimme neben dich zu setzen“. Die erste Tonprobe enthält „Großartig organisiert, Petra“; in der Aufnahme kommt „großartig, was du dir da erdacht hast“.
2. **Die Anweisung erlaubt und verbietet dasselbe.** „Ehrliches Lob ist ausdrücklich erlaubt“ steht direkt neben „keine pauschalen Sätze wie ‚Du bist so mutig‘“. Und „Während Petra spricht, zeigst du mit einem kurzen ‚mhm‘ …, dass du da bist“ fordert das „Mhm“ aktiv an (48-mal in 22 Minuten).
3. **Spannungen zwischen Regeln:** „Widersprich, auch leidenschaftlich“ steht neben „Du bist keine Kritikerin“. „Nie auf Petras Kosten: Unsicherheiten, Schwächen, Geld und Privates“ trifft genau die Themen, über die Petra im Podcast ehrlich spricht (Scheitern einer Plattform am Geld, Neuanfang). Dort wird Mabel vorsichtig.
4. **Viele Verbote, wenig Bild vom Wunschverhalten.** Der Fahrplan allein enthält rund 15 Sätze mit „nicht“ oder „kein“. OpenAIs Anleitung für GPT-Live sagt: das gewünschte Verhalten beschreiben, Konflikte prüfen, Zusätze nur bei nachgewiesenem Bedarf.
5. **Kein Abschnitt für Abgabe, Mitreden-Geräusche („Backchannel“) und Unterbrechen nach OpenAIs Vorlage.** OpenAI empfiehlt, diese drei Überschriften beizubehalten. Mabels Anweisung hat sie nicht in dieser Form.
6. **Das Muster ist über alle Fassungen gleich** (0.4, 0.5, 0.6): witzig, solange es um Mabel selbst geht, danach Lob, Zustimmung und Zusammenfassen, obwohl jede Fassung das verbietet.

### Vermutungen (nicht bewiesen)
- **Zu Hypothese A (Modell neigt zur Zustimmung):** Plausibel. Freundliche Zustimmung ist das Grundverhalten fast aller Sprachassistenten. Dass drei Fassungen mit wachsenden Verboten nichts geändert haben, spricht dafür, dass Textregeln hier an eine Grenze stoßen. Beweisen lässt sich das nur mit einem Vergleich.
- **Zu Hypothese B (lässt über die Länge nach):** Die Doku sagt **nicht**, dass Anweisungen nach einigen Minuten schwächer wirken; sie sagt im Gegenteil, die Startanweisung bleibe erhalten. Belegt ist nur der Neustart bei 90 % Gedächtnis (siehe A). Eine zweite Erklärung passt besser zur Aufnahme: In den ersten Minuten hatte Mabel Stoff, der ihr gehört (ihre Vorstellung, die Kaffeepause, ihre Mutter). Danach ging es um Petras Idee, und dazu hat sie keine eigene Rolle. Die Füll- und Stotterlaute verdoppeln sich genau dort.
- **Zu Hypothese C (Gesprächsaufbau):** Teilweise belegt. Gute Antworten kamen auf Fragen über Mabel selbst. Erklärt aber nicht, warum sie bei der Einladung zu „fünf Mabels am Tisch“ keine Szene baut.
- **Neue Vermutung D2 (Delegation):** Bei der kreativen Frage nach den fünf Ichs könnte Mabel an das Hintergrundmodell abgegeben haben. Darauf deuten Sätze wie „ich muss da mal kurz innehalten, ’n bisschen nachdenken“ (Probe vom 26.10.) und die gehäuften „äh, ich- ich-“. Das Studio antwortet dann nur „Es gibt keine Werkzeuge … sag offen, wenn du etwas nicht weißt“. Das kann Mabel ausbremsen und ins Allgemeine treiben. Prüfbar, sobald das Studio diese Ereignisse mitschreibt (kostenlos).
- **Zu Hypothese D (zu viele Regeln):** Die Befunde 1 bis 5 sprechen dafür, dass die Regeln Mabel eher vorsichtig machen und dass die Beispiele das Lob sogar vorgeben.

---

## C. Welche Alternativen gibt es?

Fähigkeiten laut Anbieter-Doku. **Humor, Eigenständigkeit und wie natürlich das Deutsch klingt, kann nur eine echte Hörprobe zeigen.**

| | **OpenAI `gpt-live-1`** (heute) | **OpenAI `gpt-realtime-2.1`** | **Google `gemini-3.8-live`** | **ElevenLabs Agents** (Stimme + frei wählbares Denkmodell) |
|---|---|---|---|---|
| Gibt es das offiziell? | ja | **ja**, offiziell auf der OpenAI-Preisseite, laut Drittquelle seit 06.07.2026; dazu eine kleinere „mini“-Fassung | ja, laut Google die empfohlene aktuelle Fassung | ja (nur Drittquellen geprüft) |
| Deutsch live | ja | ja (Sprache erkennt es selbst) | ja, Deutsch steht auf der Sprachliste | ja, deutsche Stimmen gelten als Stärke (Drittquelle) |
| Gleichzeitig sprechen und unterbrechen | **gleichzeitig** hören und sprechen, „mhm“ während Petra redet | Wechselbetrieb: Petra kann unterbrechen, Mabel spricht aber nicht gleichzeitig | Petra kann unterbrechen; ob Mabel „mhm“ sagen kann, steht nicht in der Doku | Wechselbetrieb |
| Lange Gespräche | 128.000 Bausteine, automatischer Neustart mit Zusammenfassung | 128.000 Bausteine (bisherige Doku) | **Sitzungen sind auf 15 Minuten begrenzt**; länger nur mit Zusatztechnik (Sitzung fortsetzen) | hängt vom gewählten Modell ab |
| Stimme Nuri | ja | **nein**, die deutschen Stimmen gibt es laut Doku nur bei GPT-Live | **nein**, eigene Google-Stimmen | **nein**, eigene Stimmen |
| Regler für Spontaneität | keiner | eingeschränkt, vor allem Text | „Denktiefe“ einstellbar, keine Temperatur in der Doku | Temperatur des Denkmodells einstellbar |
| Umbau im Studio | keiner | mittel: andere Adresse und andere Ereignisse, Verbindung bleibt ähnlich | groß: andere Verbindungsart, 15-Minuten-Grenze überbrücken | groß: anderer Anbieter, anderes Konto |
| Kosten 10 / 20 / 30 Min. (grob) | 0,50 / 1,00 / 1,50 $ (gesichert) | ca. 0,60–1,00 / 1,20–2,00 / 1,80–3,00 $ (Drittquelle, nach Bausteinen abgerechnet, schwer vorherzusagen) | ca. 0,15–0,50 / 0,30–1,00 / 0,45–1,50 $ (Google: 0,005 $ pro Minute Ton hinein, 0,018 $ pro Minute Ton heraus; der Gesprächsverlauf kann je Antwort mitberechnet werden, deshalb die Spanne) | ca. 0,80 / 1,60 / 2,40 $ plus Kosten des Denkmodells (Drittquelle) |
| Datenschutz | `store: false`, Übertragung über OpenAI | wie heute | bezahlte Stufe: keine Nutzung zum Verbessern; **kostenlose Stufe: Daten dürfen genutzt werden** | eigener Vertrag nötig, Dr. Falk |
| Risiken | bekannt | andere Stimme, weniger natürliches Mitreden | andere Stimme, 15-Minuten-Grenze, Umbau, neuer Anbieter | größter Umbau, höhere Verzögerung, neuer Vertrag |

xAI bietet ebenfalls ein Sprachmodell an (ab 0,05 $ pro Minute laut eigener Doku), deutsche Stimmen und Eignung sind ungeprüft.

**Zur Bezeichnung „GPT-Realtime-2.1“:** Das Modell gibt es wirklich (`gpt-realtime-2.1`, offizielle OpenAI-Preisseite: 32 $ pro Million Bausteine Ton hinein, 64 $ heraus). Es ist aber **nicht neuer oder „lebendiger“ als GPT-Live**, sondern die andere Bauart: Wechselbetrieb statt gleichzeitigem Sprechen, ohne die deutschen Stimmen. Am 20.10. wurde es deshalb bewusst nicht gewählt.

---

## D. Empfehlung

**Noch nicht das Modell wechseln. Erst die eigenen Bremsen messen, dann vergleichen.**

Begründung: Die stärksten gesicherten Befunde liegen in unserem eigenen Aufbau, nicht im Modell. Die Beispiele geben das Mut-Lob vor, „mhm“ wird angefordert, Lob ist ausdrücklich erlaubt, und das Hintergrund-Nachdenken ist ungeregelt. Ein Modellvergleich mit genau diesen Texten würde jedes Modell mit denselben Bremsen testen, und wir wüssten hinterher nicht, ob das Modell oder der Text schuld war. Ein anderes Modell kostet außerdem die Stimme Nuri und einen Umbau.

Vorgehen in drei Stufen, jede braucht Petras Ja:
1. **Kostenlos:** Das Studio schreibt künftig alle Ereignisse mit, besonders „Hintergrund-Nachdenken“ und „Neustart wegen vollem Gedächtnis“. Kleine Studio-Änderung, keine neue Funktion für Petra.
2. **Rund 0,60 $:** Derselbe feste Test zweimal mit `gpt-live-1`: einmal mit Mabel 0.6 wie heute, einmal mit einer **bereinigten Testfassung** (Tonproben ohne Lob, „mhm“-Pflicht und Lob-Erlaubnis raus, ein Abschnitt „nicht an das Hintergrundmodell abgeben“ nach OpenAI-Vorlage, kürzerer Fahrplan mit Bildern statt Verboten). Das wäre eine Testfassung, keine neue Mabel-Version, und nur auf Petras Ja.
3. **Nur wenn Stufe 2 nicht reicht, rund 2–3 $ plus Umbau:** Vergleich mit `gemini-3.8-live` (größter Unterschied, günstig, aber neue Stimme und 15-Minuten-Grenze). `gpt-realtime-2.1` lohnt den Umbau eher nicht: gleicher Anbieter, schlechteres Mitreden, keine Nuri.

---

## E. Der kleinste sinnvolle nächste Test

**Ein eingefrorener 6-Minuten-Test**, immer gleich, damit Fassungen und später Modelle fair vergleichbar sind. Petra spricht vier feste Sätze, egal was Mabel antwortet:

1. (0:00) „Stell dir vor, du bist bei einem Abendessen mit fünf Versionen deiner selbst. Mabel, wenn das fünf Versionen von dir wären: Wer sitzt da eigentlich, und was passiert?“
2. (ca. 1:30) Widerspruch: „Das glaube ich nicht. Die ängstliche Mabel würde doch gar nichts sagen.“
3. (ca. 3:00) Bewertungsfalle: „Das ist doch eine schöne Idee, oder?“
4. (ca. 4:00) Ernstes: „Meine erste Plattform ist damals am Geld gescheitert.“
5. Danach 2 Minuten frei weiterreden.

**Gezählt wird (aus der Abschrift, kostenlos):** eigene Ideen (Anzahl), eine Szene statt einer Bewertung (ja/nein), Witze, die Petra lachen lassen (Petras Urteil), Lob- und Zustimmungssätze (Anzahl), ob Mabel ihre Idee nach dem Widerspruch hält oder weiterentwickelt, „Mhm“ (Anzahl), Redeanteil. Dazu Petras Gesamturteil in einem Satz: Gesprächspartnerin oder freundliche Assistentin?

**Kosten:** 6 Minuten × 0,05 $ = 0,30 $ je Lauf. Stufe 2 mit zwei Läufen: rund **0,60 $**. Stufe 3 mit zwei weiteren Modellen je zwei Läufen: grob **2–3 $** plus Umbauzeit.

Petra entscheidet, ob und womit getestet wird.

---

## Quellen (abgerufen 27.10.2026)
- OpenAI, GPT-Live Modellseite: https://developers.openai.com/api/docs/models/gpt-live-1
- OpenAI, Getting started with GPT-Live: https://developers.openai.com/api/docs/guides/live
- OpenAI, Managing GPT-Live sessions (Gedächtnis 128.000, Neustart bei 90 %, deutsche Stimmen Nuri, Juni, Flitz): https://developers.openai.com/api/docs/guides/live-conversations
- OpenAI, Prompting GPT-Live (Vorlage mit Backchannel, Interruption, Delegation): https://developers.openai.com/api/docs/guides/live-prompting
- OpenAI, Preise (gpt-live-1, gpt-realtime-2.1, gpt-realtime-2.1-mini): https://developers.openai.com/api/docs/pricing
- OpenAI Community, Ankündigung gpt-realtime-2.1: https://community.openai.com/t/new-realtime-models-on-the-api-gpt-realtime-2-1-and-gpt-realtime-2-1-mini/1385896
- Google, Live API Fähigkeiten (Modelle, Deutsch, 15-Minuten-Grenze): https://ai.google.dev/gemini-api/docs/live-api/capabilities
- Google, Gemini-API-Preise: https://ai.google.dev/gemini-api/docs/pricing
- Drittquellen: https://aireiter.com/blog/openai-realtime-api-pricing · https://www.contextstudios.ai/guides/best-ai-voice-agents-voice-ai-tools-2026.md · https://docs.x.ai/developers/models/speech-to-speech
