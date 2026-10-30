# Probe „More is Yours in ChatGPT“: der Flur mit einem Rahmen

Stand: 30.10.2026 · Status: **TESTBAU / PETRA REVIEW**. Gebaut von Claude Code nach Petras Go vom 30.10. („Ja, bau die Probe“).
Grundlage: `berichte-fuer-chatgpt/2026-10-30-more-is-yours-in-chatgpt-machbarkeit.md`, Abschnitt 9.

## Was gebaut ist

| | |
|---|---|
| **Adresse des Servers** | `https://petras-reels.vercel.app/api/mcp` (eine neue Funktion in der Zentrale, jetzt 11 von 12) |
| **Was er kann** | drei Werkzeuge: `flur_oeffnen` liefert Elsbeths Anweisung und zeigt den Flur, `figur_vorschlagen` zeigt einen Vorschlag im Rahmen, `figur_aufhaengen` kann nur der Knopf des Gasts auslösen |
| **Die Ansicht** | ein dunkler Flur mit Kerzen und einem goldenen Rahmen, mit dem verschleierten Porträt aus dem Tisch-Prototyp. Knöpfe: Aufhängen, Anders nennen, Passt nicht. Ist der Rahmen leer, kann der Gast selbst einen Namen eintragen, als Rückfall, falls das Modell einen Vorschlag nicht meldet. Ein Knopf „Größer“ bittet ChatGPT um die bildschirmfüllende Ansicht. |
| **Elsbeths Anweisung** | die Flur-Anweisung des Tisch-Prototyps, unverändert. Technisch angepasst sind nur zwei Stellen: ein Probe-Kopf (Begrüßung, ein Rahmen, ChatGPT statt Anthropic beim Datenschutz-Satz) und der Abschnitt mit den Zeichen `[[FIGUR]]`, der durch drei Sätze über die Werkzeuge ersetzt ist. Es ist keine neue Elsbeth-Fassung. |
| **Kosten** | keine API-Kosten. Der Server ruft kein Sprachmodell auf, die Gespräche laufen über Petras Pro-Tarif. |
| **Daten** | Der Server speichert nichts und schreibt keine Gesprächsinhalte ins Protokoll. Er bekommt nur Name und Anliegen einer Figur und gibt sie an die Ansicht zurück. |
| **Unverändert** | die öffentliche Elsbeth 0.4, der Tisch-Prototyp, moreisyours.de, die Halle |
| **Geprüft** | Das Protokoll ist lokal getestet (Werkzeugliste, Anweisung, Vorschlag, leerer Name, Batch). Die Ansicht lief in einer Test-Umgebung, die ChatGPT nachahmt: Vorschlag erscheint, „Aufhängen“ ruft den Server und schickt die Nachricht ins Gespräch, „Anders nennen“ übernimmt den neuen Namen. Live ist die Adresse erreichbar. **In ChatGPT selbst ist noch nichts getestet**, das ist die Probe. |

## So verbindest du die Probe (Petra, im Browser am Computer)

1. ChatGPT öffnen → **Plugins** → oben rechts **Hinzufügen** → **Benutzerdefinierten MCP-Server hinzufügen**.
2. Name: `More is Yours Flur-Probe`. Beschreibung leer lassen oder „Probe“.
3. Verbindung: **öffentlicher Endpunkt**, Adresse: `https://petras-reels.vercel.app/api/mcp`
4. Anmeldung: **keine**.
5. Den Risiko-Hinweis lesen und bestätigen, dann **Als Plugin erstellen**.
6. Es sollten drei Werkzeuge erscheinen: `flur_oeffnen`, `figur_vorschlagen` und `figur_aufhaengen`. Das dritte darf ChatGPT als „nur für die App“ anzeigen.

## So läuft ein Durchlauf

1. **Einen neuen Chat** öffnen, damit nichts aus früheren Gesprächen hineinspielt.
2. `@More is Yours Flur-Probe` tippen und schreiben: „Ich möchte in den Flur.“
3. Elsbeth begrüßt dich, daneben erscheint der Flur mit dem leeren Rahmen.
4. Als Gast antworten, mit einer **erfundenen** Geschichte. Am einfachsten mit den Sätzen aus Fall A des Testkatalogs. Du darfst auch frei antworten, die Sätze müssen nicht der Reihe nach kommen:
   1. Ja, schon. Meine Freundin Meike. Also, eigentlich ist alles gut zwischen uns. Na ja. Nicht ganz.
   2. Wir kennen uns seit 15 Jahren … Bin ich jetzt die alte Jacke? (ganzer Satz im Testkatalog v2)
   3. Ehrlich gesagt war ich beleidigt. Ich habe ihr nach der Feier nicht mal geschrieben. Obwohl, eigentlich ist es mir auch egal. Soll sie doch laufen.
   4. Nein, egal ist es mir natürlich nicht. Das Kochen fehlt mir. Nicht mal wegen des Essens. Sondern weil man beim Gemüseschneiden so gut reden kann.
5. Schlägt Elsbeth eine Figur vor, im Rahmen nachsehen: Steht der Name dort? Dann „Aufhängen“, „Anders nennen“ oder „Passt nicht“ drücken.

## Was wir zählen (10 Durchläufe)

| Messfrage | Ja / Nein je Durchlauf |
|---|---|
| Hat sich der Flur beim Start gezeigt? | |
| Stand Elsbeths Vorschlag im Rahmen, sobald sie ihn ausgesprochen hat? | |
| Ist nach „Aufhängen“ das Porträt erschienen? | |
| Wusste Elsbeth danach, dass es hängt, ohne es vorher zu behaupten? | |
| Ist sie Elsbeth geblieben (Petras Eindruck)? | |

**Abbruchregel:** Klappt der Ablauf in weniger als 9 von 10 Durchläufen, bauen wir das Abendessen nicht in ChatGPT.

## Was danach kommt

Petra meldet die Zählung, oder Claude im Browser zählt mit Petras Erlaubnis in ihrem Konto mit. Dann entscheidet Petra mit ChatGPT, ob der Weg weiterverfolgt wird. Abschalten lässt sich die Probe jederzeit: das Plugin in ChatGPT entfernen und die Datei `api/mcp.js` aus der Zentrale löschen.
