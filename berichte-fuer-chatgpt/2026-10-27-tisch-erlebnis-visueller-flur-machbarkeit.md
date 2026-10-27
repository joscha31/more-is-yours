# Machbarkeitsprüfung: der visuelle Flur und das Abendessen „Fünf von dir an einem Tisch“

Stand: 27.10.2026 · Geschrieben von Claude Code · Status: **AUSKUNFT / PETRA REVIEW**
Auftrag: Petra und ChatGPT, technische Machbarkeitsprüfung, ausdrücklich noch keine Umsetzung.
Nichts programmiert, nichts am System geändert, kein Dienst eingerichtet, keine Kosten entstanden. Elsbeth Unknown ist unverändert. Phase 2 und der nächste Schritt aus STATUS.md bleiben, wie sie sind.

Gelesen: `STATUS.md`, `PROZESS.md`, beide Fassungen des Tisch-Erlebnisses in `forschung/`, die heutige Halle (`halle-7k3q/index.html`, rund 80 KB) und Elsbeths Server-Funktion (`api/elsbeth.js`).

---

## 1. Die kurze Antwort

**Ja, die Flur-Idee ist mit unserer vorhandenen Technik umsetzbar, und zwar ohne neuen Dienst und ohne neue laufende Kosten**, wenn die Porträts vorbereitet sind und nicht in Echtzeit gemalt werden. Die Halle kann heute schon Bilder überblenden, Clips abspielen, Bewegung bei Bedarf abschalten und Elsbeths Antworten mit unsichtbaren Markierungen steuern. Genau diese vier Fähigkeiten braucht der Flur.

Meine Empfehlung für den ersten Prototyp: **ein gemalter Flur mit leeren Rahmen, eine vorbereitete Porträt-Galerie im Mystic-Stil, und Elsbeth setzt im Gespräch unsichtbare Zeichen, welches Porträt in welchen Rahmen kommt.** Echtzeit-Bilder sind möglich, aber für den ersten Durchlauf zu langsam, zu unberechenbar im Stil und das einzige, was neue laufende Kosten bringt.

---

## 2. Was unsere Technik heute schon kann

| Fähigkeit | Wo sie heute steckt | Was das für den Flur heißt |
|---|---|---|
| Bilder und Räume weich überblenden | Halle: Empfang → Tresen → Türen, Übergänge 1 bis 2 Sekunden | Rahmen können sich langsam füllen, ein Bild kann verblassen. |
| Kurze Filme abspielen | Clips „Elsbeth erwacht“, „Halle lebt“, „Tür öffnet sich“ | Die Tür zum Speisezimmer kann sich mit einem echten Clip öffnen, der schon existiert. |
| Bewegung abschalten | „Bewegung reduzieren“ wird in Halle und Homepage beachtet | Wer keine Bewegung möchte, sieht ruhige Standbilder. |
| Elsbeths Antworten steuern die Seite | Markierungen wie „▸ REAL WORLD“ und `modus:'ende'` | Dasselbe Prinzip trägt „Rahmen 3 bekommt Porträt X“. |
| Sprechen statt tippen | Mikrofonknopf, Test mit `?sprache=1` | Der Gast kann im Flur weiter sprechen. |
| Kosten deckeln | Tagesdeckel, Grenze je Gerät, Schutzfilter vor und nach dem Modell | Gilt automatisch auch für das Abendessen, wenn es über denselben Server läuft. |

---

## 3. Die Prüffragen einzeln

### A. Technische Möglichkeiten

| Frage | Antwort | Vorhanden oder neu? |
|---|---|---|
| Kann die Webseite einen solchen Flur darstellen? | Ja. Ein gemaltes Flurbild mit fünf Rahmen als Hintergrund, die Rahmen als eigene Ebenen darüber. | Bildtechnik vorhanden, Flurbild fehlt. |
| Ist eine Bewegung durch den Flur möglich? | Ja, als **gefühlte** Bewegung: das Bild zoomt langsam nach vorn, Kerzenlicht flackert, die Rahmen gleiten vorbei. Eine echte 3D-Welt zum Herumlaufen wäre deutlich aufwändiger und am Handy schwerfälliger. | Gefühlte Bewegung vorhanden (CSS), 3D wäre neu. |
| Können Porträts während des Gesprächs erscheinen oder sich ändern? | Ja. Ein Porträt kann aus dem Nebel auftauchen, verblassen, sich verschleiern oder ersetzt werden. | Überblenden vorhanden. |
| Können die Figuren in den Speiseraum übernommen werden? | Ja. Die Seite merkt sich die fünf gewählten Porträts und setzt sie an die Plätze des Tisches. | Neu zu bauen, aber kleine Arbeit. |
| Lässt sich der Dialog mit den Bildern synchronisieren? | Ja, über unsichtbare Zeichen in Elsbeths Antwort, wie heute bei „▸ REAL WORLD“. Elsbeths Text erscheint, das Bild folgt im selben Moment. | Prinzip vorhanden, die neuen Zeichen fehlen. |
| Können Figuren beim Abendessen ausgetauscht werden? | Ja. Ein Stuhl wird leer, ein neues Porträt setzt sich. Technisch dasselbe wie im Flur. | Neu, klein. |

**Ein Punkt verdient Sorgfalt:** Das Zeichen muss zuverlässig kommen. Ein Sprachmodell vergisst ab und zu eine Markierung oder erfindet einen Namen, der nicht in der Galerie steht. Deshalb braucht die Seite einen Rückfall: Fehlt das passende Bild, erscheint ein verschleiertes Porträt mit dem Namen der Figur auf einem Messingschild. Der Flur sieht dann trotzdem gewollt aus.

### B. Möglichkeiten der Bilderstellung

| Variante | Wie es funktioniert | Stärke | Schwäche | Für den ersten Prototyp? |
|---|---|---|---|---|
| **1. Vorbereitete Porträt-Galerie** | Rund 20 bis 30 Porträts im Mystic-Stil, aus dem Elsbeth-Masterbild abgeleitet. Elsbeth wählt das passende aus einer festen Liste. | Sofort da, immer im Stil, hochwertig, keine laufenden Kosten | Eigene Ideen des Gastes treffen nicht immer ein passendes Bild | **Ja, empfohlen** |
| **2. Verschleierte Porträts mit Namensschild** | Kein Gesicht, sondern eine Gestalt hinter Nebel oder Seide, darunter der Name der Figur in Gold | Passt zu jeder Figur, auch zu den eigenen Ideen des Gastes, sehr geheimnisvoll, billigste Lösung | Weniger Überraschung beim Hinschauen | **Ja, als Rückfall zu Variante 1** |
| **3. Zusammengesetzte Figuren** | Bausteine (Gestalt, Gegenstand, Licht, Farbe) werden je Figur kombiniert | Viele Kombinationen aus wenigen Teilen | Viel Gestaltungsarbeit, wirkt schnell nach Baukasten statt nach Bibliothek | Eher nicht |
| **4. KI-Bilder in Echtzeit** | Für jede Figur wird während des Gesprächs ein Bild gemalt | Jede Figur einmalig | Wartezeit je Bild, Stil schwer zu halten, Gesichter können unheimlich geraten, neue laufende Kosten, braucht die letzte freie Server-Funktion (11 von 12 sind belegt) | **Nein, frühestens später** |
| **5. Mischform** | Galerie für die meisten Figuren, Echtzeit nur für eigene Ideen des Gastes | Das Beste aus beidem | Erbt die Wartezeit und die Kosten von Variante 4 | Später prüfen, wenn der Prototyp trägt |

Woher die Bilder für Variante 1 kommen könnten: Petra macht sie selbst in Higgsfield, wie beim Auftrag für die Stockwerke (`2026-10-15-higgsfield-auftrag-stockwerke.md`), oder wir erzeugen Entwürfe mit dem vorhandenen Bildwerkzeug (Gemini-Bildmodell). Welche Figuren die Galerie enthält, ist eine kreative Entscheidung von Petra und ChatGPT und wird hier nicht festgelegt.

### C. Benutzerfreundlichkeit

| Frage | Antwort |
|---|---|
| Funktioniert es am Smartphone? | Ja. Am Handy steht der Flur oben als Bild (etwa 40 Prozent der Höhe), das Gespräch läuft darunter. Die fünf Rahmen werden dort eher nebeneinander als kleine Reihe gezeigt, sonst sind sie zu klein. Das muss am echten Handy geprüft werden. |
| Langsames Internet? | Mit Variante 1 gut beherrschbar: Porträts als kleine Bilddateien (geschätzt 60 bis 120 KB je Bild), nur die nötigen werden geladen. Ein Flurbild plus fünf Porträts sind zusammen etwa 1 MB (Schätzung). Der Tür-Clip ist mit 6,5 MB groß und sollte für den Flur verkleinert oder nur bei schneller Verbindung gezeigt werden. Bei Echtzeit-Bildern käme die Wartezeit des Bildmodells noch dazu. |
| Kann der Gast bequem sprechen oder schreiben? | Ja. Eingabefeld und Mikrofonknopf bleiben, wo sie heute sind. Die Bilder laufen nur nebenher. |
| Entstehen störende Wartezeiten? | Mit Variante 1 nicht mehr als heute bei Elsbeth: das Bild erscheint mit ihrer Antwort. Mit Echtzeit-Bildern läge die Wartezeit nach bisheriger Erfahrung mit solchen Bildmodellen bei mehreren Sekunden je Porträt (Schätzung); das würde den Fluss im Gespräch stören. |
| Kann man die Darstellung überspringen? | Ja, und das sollte von Anfang an eingebaut sein: ein Knopf „Ohne Bilder“ in der Kopfzeile, dazu die bestehende Regel „Bewegung reduzieren“. Das Gespräch funktioniert dann ganz ohne Flur. |

### D. Kosten und Aufwand (alle Zahlen sind Schätzungen)

| | Variante 1 + 2 (empfohlen) | Variante 4 (Echtzeit) |
|---|---|---|
| Einmaliger Entwicklungsaufwand | **Schätzung:** 2 bis 3 Arbeitsrunden mit Claude Code für Flur, Rahmen, Zeichen, Speisezimmer und Rückfall. Dazu kommen die Bilder: in Higgsfield über Petras vorhandenes Konto (Kosten je nach ihrem Tarif) oder mit dem Gemini-Bildmodell, geschätzt 2 bis 5 Euro für Entwürfe und Verwerfungen. | **Schätzung:** zusätzlich 2 bis 4 Arbeitsrunden (Bild-Funktion, Stilvorlage, Warteanzeige, Fehlerfälle, Inhaltsfilter für Bilder). |
| Laufende Kosten im Monat | **Keine neuen.** Die Bilder liegen bei Vercel wie die heutigen Halle-Bilder. | Neuer kostenpflichtiger Dienst je Bild. Die Einrichtung bräuchte Petras ausdrückliche Freigabe. |
| Kosten je Erlebnisdurchlauf | Nur der Text über Elsbeths bestehenden Server. **Schätzung:** etwa 1 bis 3 Cent je Abendessen, weil fünf Figuren mehr Text erzeugen als ein Gespräch am Tresen (heute rund 0,26 Cent bei 10 Wechseln). | Text wie links, dazu **Schätzung** 5 bis 10 Bilder zu je etwa 4 Cent (letzter bekannter Listenpreis des Gemini-Bildmodells, vor einer Entscheidung frisch prüfen), also etwa 20 bis 40 Cent je Durchlauf. |
| Technische Risiken | Elsbeth vergisst ein Zeichen oder nennt einen Namen, der nicht in der Galerie steht (Rückfall: verschleiertes Porträt). Am kleinen Handy kann es eng werden. | Wartezeit, Stilbrüche, unheimliche Gesichter, Ausfall des Bilddienstes, Vercel-Funktionsgrenze erreicht (dann wäre keine weitere Funktion mehr frei). |
| Wartung | Gering. Neue Figuren = neue Bilddatei plus ein Eintrag in der Liste. | Höher. Modellwechsel beim Anbieter können den Stil ändern, Kosten müssen beobachtet werden. |

---

## 4. Die Empfehlung für den ersten Prototyp

**Variante 1 mit Variante 2 als Rückfall:** ein gemalter Flur mit fünf leeren Rahmen, eine kleine Porträt-Galerie im Mystic-Stil, verschleierte Porträts mit Namensschild für alles, was nicht in der Galerie steht, und die vorhandene Tür, die sich öffnet. Im Speisezimmer ein Tisch mit fünf Plätzen, an die die gewählten Porträts wandern.

Warum: Das fühlt sich lebendig, geheimnisvoll und hochwertig an, weil jedes Bild sorgfältig ausgewählt ist und nichts ruckelt. Es bleibt einfach, weil es dieselbe Technik nutzt wie die Halle. Und es kostet je Durchlauf nur den Text, den Elsbeth ohnehin erzeugt.

| Mit vorhandener Technik möglich | Braucht zusätzliche Entwicklung | Braucht zusätzliche Kosten |
|---|---|---|
| Überblenden, Clips, Bewegung abschalten, Sprechen, Kostendeckel, Steuerung über Zeichen | Flur-Seite, Rahmen-Logik, die neuen Zeichen in einer eigenen Erlebnisanweisung, Speisezimmer, Knopf „Ohne Bilder“ | Nur bei Echtzeit-Bildern (Variante 4 oder 5). Die Bilder für die Galerie kosten einmalig wenig oder nichts, je nachdem, wie Petra sie erstellt. |

**Zur Einordnung im Prozess:** Ein eigenes Erlebnis mit eigener Anweisung und einem Moduswechsel im Server ist laut STATUS.md für Phase 3 vorgemerkt. Dieser Bericht ist deshalb nur eine Auskunft. Gebaut wird erst, wenn Petra das freigibt und die Phase es erlaubt.

---

## 5. Offene Punkte, die nicht Claude Code entscheidet

- **Geklärt (Petras Entscheidung im Chat, 27.10.):** „es sind Persönlichkeitsanteile“. Die fünf Figuren sind mögliche Persönlichkeitsanteile des Gastes; der Satz aus Fassung 2 („erfundene Figuren“) gilt dafür nicht mehr. Die Grenze aus PROZESS.md bleibt gewahrt, weil Elsbeth nur vorschlägt und der Gast selbst entscheidet (`entscheidungen/2026-10-27-tisch-erlebnis-persoenlichkeitsanteile.md`).
- **DECISION GAP:** Welche Figuren in die Galerie kommen, wie viele es sind und wie sie aussehen.
- **DECISION GAP:** Ob der Gast Vorschläge nur im Gespräch annimmt und ablehnt, oder zusätzlich mit kleinen Knöpfen am Rahmen („behalten“, „lieber nicht“). Beides ist technisch möglich.
- **DECISION GAP:** Ob die Figuren im Speisezimmer Gesichter haben oder verschleiert bleiben.
