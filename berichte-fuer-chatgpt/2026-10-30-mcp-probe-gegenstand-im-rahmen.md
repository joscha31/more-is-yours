# MCP-Probe „Gegenstand im Rahmen“: geschützter Techniktest

Stand: 30.10.2026 · Status: **INTERNER TECHNIKTEST / keine Produktfreigabe**. Gebaut von Claude Code im Auftrag von Petra und ChatGPT.
Dabei gab es keine neue Internetadresse, keine Hostingkosten, keine Veröffentlichung, keine Änderung an der Zentrale, an Elsbeth oder an der Web-App. Die Probe läuft nur auf Petras Mac.

**Quellen** (am 30.10.2026 gelesen): OpenAI-Entwicklerdoku *Authentication* (`developers.openai.com/plugins/build/auth`), *Reference* (`developers.openai.com/plugins/reference`), *IP addresses* (`developers.openai.com/api/docs/guides/ip-addresses`), dazu der Prüfbericht `2026-10-30-more-is-yours-in-chatgpt-machbarkeit.md`. Die Hilfeseite zum Entwicklermodus (help.openai.com) war für den Abruf gesperrt; Aussagen dazu stammen aus dem Prüfbericht vom selben Tag.

---

## Wichtig vorab: Es gibt schon eine Flur-Probe in der Zentrale

Am 30.10. wurde nach Petras Go („Ja, bau die Probe“) bereits eine Flur-Probe gebaut: `https://petras-reels.vercel.app/api/mcp` mit drei Werkzeugen und Elsbeths Flur-Anweisung (Anleitung: `2026-10-30-chatgpt-probe-flur-anleitung.md`). Sie liegt **in der öffentlichen Zentrale** und ist **ohne Anmeldung** erreichbar. Sie speichert nichts, ruft kein Modell auf und kostet nichts; wer die Adresse kennt, kann aber ihre Werkzeuge aufrufen.

Der neue Auftrag verlangt dagegen: keine Änderung an der Zentrale, ein geschützter Zugang, keine Tisch-Anweisung, wenn sie nicht nötig ist. Deshalb ist die neue Probe **getrennt** gebaut. Die vorhandene Flur-Probe ist **nicht angefasst**. Ob sie online bleibt, ist Petras Entscheidung (DECISION GAP).

---

## 1. Was gebaut ist

Ordner im privaten Arbeitsrepo: `outputs/more-is-yours-mcp-probe/`.

| | |
|---|---|
| **Werkzeug** | eines: `gegenstand_im_rahmen_zeigen` mit einer Bezeichnung (höchstens 40 Zeichen). Leer = Rahmen leeren. |
| **Ansicht** | der Flur mit dem goldenen Rahmen aus der Flur-Probe (Gestaltung übernommen, ohne Figuren und ohne Knöpfe). Im Rahmen erscheint ein Täfelchen mit der Bezeichnung. Format: MCP Apps (`text/html;profile=mcp-app`), keine Bilder oder Schriften von außen. |
| **Inhalt** | kein kreativer Inhalt, keine Elsbeth-Anweisung, keine Tisch-Anweisung. Für diesen Nachweis ist keine Gesprächsanweisung nötig: Es genügt, dass ChatGPT das Werkzeug aufruft. |
| **Schreibzugriff** | keiner. Das Werkzeug ändert nichts außerhalb der Ansicht und ist als nur-lesend markiert (`readOnlyHint: true`). |
| **Speicher** | keiner, kein Protokoll mit Inhalten |
| **Technik** | Node ohne Zusatzpakete; nichts heruntergeladen |

### Schutz

ChatGPT kann laut Doku nur zwei Arten der Anmeldung: **ohne Anmeldung** oder **OAuth 2.1**. 📄 „nor can it present custom API keys“ („Authentication“). Ein einfaches Passwort oder ein fester Schlüssel geht also nicht. Für einen Techniktest ohne Konten ist OAuth zu groß. Deshalb vier Schichten:

1. **Nur auf dem Mac:** Der Server hört ausschließlich auf `127.0.0.1`. Von außen erreichbar wird er erst durch einen Tunnel, den Petra selbst startet und jederzeit schließt.
2. **Geheimer Pfad:** Der Endpunkt heißt `/mcp/<zufälliges Wort>`. Das Wort entsteht beim ersten Start in einer Datei, die nie ins Repo geht. Ein falscher Pfad bekommt nur „nicht gefunden“.
3. **Nur ChatGPT:** Liegt die offizielle Adressliste von OpenAI daneben (📄 `https://openai.com/chatgpt-connectors.json`, „IP addresses“: Plugins, Konnektoren, GPT Actions), antwortet der Server nur Anfragen aus diesen Bereichen.
4. **Bremse:** höchstens 60 Anfragen je Minute, höchstens 32 KB je Anfrage.

Die Testseite, die ChatGPT nachahmt, ist nur direkt am Mac erreichbar, nie durch einen Tunnel.

---

## 2. Was nachweislich funktioniert (lokal getestet am 30.10.)

| Prüfung | Ergebnis |
|---|---|
| MCP-Handschlag, Werkzeugliste, Ansicht laden | ✓ |
| Werkzeug ist als nur-lesend markiert | ✓ |
| Ansicht meldet sich beim Gastgeber an (`ui/initialize`) | ✓ |
| Werkzeugaufruf → Gegenstand erscheint im Rahmen | ✓ (mit Screenshot) |
| Ansicht meldet dem Modell, was zu sehen ist (`ui/update-model-context`) | ✓ |
| Unbekanntes Werkzeug wird abgewiesen | ✓ |
| Falscher Pfad → 404 · GET → 405 · Testseite durch Tunnel → 404 | ✓ |
| HTML in der Bezeichnung wird entschärft und nur als Text gezeigt | ✓ |
| Zu große Anfrage wird abgebrochen | ✓ |
| Adressliste: Adresse aus der Liste → 200, fremde oder fehlende Adresse → 404 | ✓ |

**Noch nicht nachgewiesen:** die Anzeige **in ChatGPT selbst**. Das gilt für diese Probe und auch für die Flur-Probe in der Zentrale. Die Test-Umgebung ahmt ChatGPTs Verhalten nach der Doku nach. Ob ChatGPT die Ansicht bei einem zweiten Aufruf im selben Fenster aktualisiert oder ein neues Fenster zeigt, sagt die Doku nicht (❓). Das zeigt erst der echte Test.

---

## 3. Was auf Petras Pro-Konto möglich ist

- 📄/✓ **Eigenen MCP-Server hinzufügen:** wird in Petras Konto angeboten (am 30.10. im Browser nachgesehen, „Benutzerdefinierten MCP-Server hinzufügen“), obwohl die Hilfeseite nur Business und Enterprise/Edu nennt.
- 📄 **Nur im Browser am Computer**, nicht in der Handy-App (Prüfbericht, „Connecting custom MCP servers“).
- ❓ **Schreibzugriff auf Pro:** Die offizielle Hilfeseite war nicht abrufbar. Drittquellen sagen, Pro habe nur lesende Werkzeuge, voller Schreibzugriff sei Business/Enterprise vorbehalten; andere sagen das Gegenteil. 📄 Die Entwicklerdoku verbindet Schreibaktionen mit Anmeldung („With authentication in place, you can expose … write actions“). **Für diese Probe spielt das keine Rolle:** Das Werkzeug schreibt nichts und ist als nur-lesend markiert.
- 📄 **Anmeldung beim Verbinden:** „ohne Anmeldung“ wählen. OAuth wäre erst für echte Gäste mit Konto nötig.

---

## 4. Was der Betrieb kostet

| | Kosten |
|---|---|
| Server auf dem Mac | 0 € |
| Sprachmodell | 0 €: Die Gespräche laufen über Petras ChatGPT-Pro-Tarif, der Server ruft kein Modell auf |
| Tunnel für den Test (z. B. Cloudflare Quick Tunnel) | 0 €, ohne Konto; braucht aber ein kleines Programm auf dem Mac (`cloudflared`) und erzeugt eine **vorübergehende** Internetadresse |
| Später: eigenes Projekt bei Vercel (Hobby) | 0 €, aber eine neue, dauerhafte Adresse |
| Später für echte Gäste | Anmeldung (OAuth) und Speicher: Aufwand, nicht unbedingt Geld; Prüfung durch OpenAI, Pflichtseiten |

---

## 5. Was Petra zum Verbinden tun müsste

Zuerst eine Entscheidung, denn ChatGPT erreicht den Mac nur über eine öffentliche HTTPS-Adresse:

| Weg | Was passiert | Bewertung |
|---|---|---|
| **A. Tunnel vom Mac (empfohlen für den Test)** | Server am Mac starten, Tunnel starten → vorübergehende Adresse; Fenster zu = Adresse weg | kostenlos, nichts in der Zentrale, abschaltbar in einer Sekunde; braucht Petras Ja zum Installieren von `cloudflared` und zur vorübergehenden Adresse |
| B. Vorhandene Flur-Probe in der Zentrale | schon online, keine neue Adresse | sofort möglich, aber ungeschützt und in der öffentlichen Zentrale, mit Elsbeths Anweisung |
| C. Eigenes Vercel-Projekt | dauerhafte Adresse außerhalb der Zentrale | kostenlos, aber dauerhaft öffentlich; erst sinnvoll, wenn der Weg weiterverfolgt wird |

**Ablauf bei Weg A** (Claude Code richtet alles am Mac ein, Petra klickt nur in ChatGPT):
1. Claude Code startet Server und Tunnel und lädt die OpenAI-Adressliste.
2. Petra öffnet ChatGPT im Browser am Computer → Plugins → Hinzufügen → **Benutzerdefinierten MCP-Server hinzufügen**.
3. Name: `Rahmen-Probe`, Adresse: die Tunnel-Adresse mit dem geheimen Pfad (Claude Code nennt sie), Anmeldung: **keine**.
4. Neuer Chat → `@Rahmen-Probe` → zum Beispiel: „Zeig im Rahmen einen Testgegenstand.“
5. Beobachten: Erscheint der Flur? Steht die Bezeichnung im Rahmen? Ändert er sich beim zweiten Gegenstand im selben Fenster?
6. Danach: Plugin in ChatGPT entfernen, Tunnel schließen.

Zählung: 10 Aufrufe, davon 5 in einem laufenden Gespräch nacheinander. Abbruch, wenn weniger als 9 von 10 sichtbar im Rahmen ankommen.

---

## 6. Reicht das für eine überzeugende Erlebniswelt?

**Was geht:** eine eigene, frei gestaltete Ansicht im Gespräch (Karte, bildschirmfüllend oder als Bild-im-Bild), Bilder, Animationen, Knöpfe, die direkt den Server rufen, und die Ansicht kann dem Modell sagen, was zu sehen ist. Die Szene kann also auf das Gespräch reagieren, und das Gespräch auf die Szene.

**Wo es eng wird:**
- **Das Gespräch gehört ChatGPT.** Modell, Erinnerung, eigene Anweisungen des Gasts haben Vorrang; es gibt keine Regie je Antwort. Ob ChatGPT ein Werkzeug jedes Mal aufruft, liegt beim Modell.
- **Die Bühne ist ein Fenster im Chat**, keine ganze Welt: Ton, große Clips, Übergänge zwischen Räumen sind möglich, aber im abgeschotteten Fenster und auf jedem Gerät anders. Bilder müssen eingebettet oder ihre Domain freigegeben werden.
- **Private Tests nur am Computer**, veröffentlicht ab 13 Jahren, kein Verkauf in ChatGPT (Prüfbericht vom 30.10.).

**Einschätzung:** Für eine geheimnisvolle Welt, die ganz auf den Gast reagiert, bleibt die eigene Web-App die bessere Bühne (Bericht `2026-10-30-technische-grundlage-lebendige-erlebniswelt.md`): dort steuern wir Figuren, Szene und Schutz selbst. ChatGPT eignet sich als **zusätzliche Tür** oder als Kostprobe, deren Gespräch nichts kostet. Beide Wege können dieselbe Idee teilen: Die KI wählt aus einem festen Katalog, die Bühne zeigt. Die Werkzeuge des MCP-Servers sind genau dieser Katalog.

---

## 7. Offene Entscheidungen für Petra

1. **Verbinden:** Weg A (Tunnel, vorübergehende Adresse, `cloudflared` installieren), B oder C.
2. **Vorhandene Flur-Probe in der Zentrale:** online lassen, bis die Zählung gemacht ist, oder abschalten.
