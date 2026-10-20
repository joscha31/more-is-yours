# Mabels Wissen – wie sie vor jeder Folge auf dem Laufenden ist

**Stand:** 20.10.2026
**Status:** `FACH-LAB-VORSCHLAG / PETRA REVIEW` · nichts umgebaut, keine kostenpflichtigen Tests, Elsbeth-Produktion unverändert
**Grundlagen:** `entscheidungen/2026-10-20-podcast-mabel-rolle.md` (PETRA APPROVED) · `entscheidungen/2026-10-20-podcast-mabel-studio-und-nie-live.md` · `forschung/2026-10-20-podcast-mabel-charakter-vorschlag.md` (Teil 4: erste Probe) · GPT-Live-Doku „Prompting“ und „Managing sessions“ (abgerufen 20.10.2026) · Mabel-Studio-Code (lokal auf Petras Mac)

---

## TEIL 1 – Für Petra, in einfacher Sprache

### Die Idee: drei Schubladen

| Schublade | Was drin ist | Wie oft sie sich ändert | Länge |
| --- | --- | --- | --- |
| **1 · Wer Mabel ist** | Ihre Rolle, ihr Ton, deine freigegebenen Entscheidungen | selten, nur mit deinem Ja | wie heute, ca. 450 Wörter |
| **2 · Was wir bauen** | More is Yours, die Erlebnisbibliothek, Elsbeth, verbindliche Entscheidungen | ab und zu, nur mit deinem Ja | höchstens 400 Wörter |
| **3 · Was gerade los ist** | Fortschritte, Rückschläge, Pannen und offene Fragen der letzten Tage | vor jeder Aufnahme neu | höchstens 200 Wörter, 5 Punkte |

**Wie es für dich aussieht:**
Du öffnest das Mabel-Studio. Oben erscheint eine Karte **„Das weiß Mabel heute“** mit Datum und den fünf Punkten. Du überfliegst sie, dann klickst du auf „Aufnahme starten“ und ihr redet. Mehr musst du nicht tun.

**Woher Schublade 3 kommt:** Claude Code schreibt sie in GitHub, und zwar nach jeder Arbeitsrunde, genau wie heute schon STATUS.md. Das Studio holt sie beim Öffnen von dort ab. Es entstehen keine Zusatzkosten, kein neues Programm läuft mit, und GitHub bleibt die Wahrheit.

**Was die Länge kostet:** Nichts. GPT-Live rechnet nach Gesprächsminuten ab, nicht nach Textmenge. Ob die Gesprächsqualität leidet, hängt dagegen sehr an der Länge. Deshalb bleiben alle drei Schubladen zusammen bei rund 1.000 Wörtern.

**Ein Hinweis zum Stand:** Das Gespräch, das du super fandest, lief mit Mabel 0.1. Danach habe ich nach deinem Satz „verschnarcht“ schon eine Fassung 0.2 ins Studio gelegt, die aber noch nicht getestet ist. Du entscheidest, auf welcher Fassung wir aufbauen (siehe Teil 3).

---

## TEIL 2 – Die Prüffragen

### 1. Wie kommt Mabels Anweisung heute ins Studio?

Beim Klick auf „Aufnahme starten“ liest der kleine Server auf deinem Mac zwei Dateien frisch ein: `mabel-anweisung.md` (wer Mabel ist) und `bau-stand.md` (was sie weiß). Er hängt beide aneinander und schickt sie als `instructions` an GPT-Live. Dazu kommt eine kurze Startnachricht für die Begrüßung (Feld `input`). Eine Änderung an den Dateien wirkt also ab der nächsten Aufnahme, ohne Neustart.

### 2. Wie viel Wissen verträgt GPT-Live?

- **Technische Grenzen (Doku):** `instructions` bis 16.384 Tokens, Startverlauf `input` bis 8.192 Tokens. Das Kontextfenster umfasst 128.000 Tokens, Audio eingerechnet.
- **Empfehlung von OpenAI:** Die Gesprächsanweisung soll kurz sein. Sie beschreibt Rolle und Sprechweise. Ausführliches Wissen gehört eigentlich in einen „Backend“-Helfer, den Mabel nicht hat.
- **Unsere eigene Erfahrung:** Mit 731 Wörtern Beschreibung klang Mabel in der ersten Probe brav und bestätigend („Ja, genau“). Deshalb ist die Grenze eine Frage der Qualität, nicht der Technik.
- **Vorschlag:** Verhalten und Wissen trennen. Schublade 1 bleibt die Anweisung (`instructions`). Die Schubladen 2 und 3 gehen als **Hintergrund** in den Startverlauf (`input`), klar überschrieben mit „Hintergrund, kein Gesprächsplan“. So liest Mabel sie als Wissen, das sie nutzen kann, und nicht als Auftrag, alles zu erzählen. Zusammen sind das etwa 1.000 Wörter, gut 1.500 Tokens, also weit unter den Grenzen.

### 3. Kann Mabel automatisch eine GitHub-Zusammenfassung bekommen?

Ja. Dafür gibt es zwei Wege:

| | Weg A: Claude Code schreibt sie (Empfehlung) | Weg B: Ein Modell fasst beim Öffnen zusammen |
| --- | --- | --- |
| Wie | Nach jeder Arbeitsrunde zieht Claude Code `podcast/mabel-aktuell.md` in GitHub nach, wie STATUS.md. Das Studio lädt die Datei beim Öffnen. | Das Studio liest STATUS.md und die letzten Einträge im Verlauf und lässt ein Sprachmodell daraus fünf Punkte schreiben. |
| Kosten | 0 | ca. 1 bis 3 Cent je Zusammenfassung (geschätzt), braucht dein Ja |
| Datenschutz | Ein Mensch-Plus-Regel-Schritt: Claude Code wendet die Tabelle unten an, bevor etwas in die Datei kommt | Ein Modell entscheidet allein, was hineinkommt. Das ist riskanter. |
| Schwäche | Ist eine Weile niemand am Projekt, wird die Datei älter. Dann zeigt die Karte das Datum deutlich an. | – |

Den Rohstoff für Weg A gibt es schon, denn STATUS.md ist die Fachfassung. `mabel-aktuell.md` ist dieselbe Wahrheit in Erzählsprache.

**Ablage in GitHub (Vorschlag):** ein eigener Ordner `podcast/` mit `mabel-anweisung.md` (Schublade 1), `mabel-projektwissen.md` (Schublade 2) und `mabel-aktuell.md` (Schublade 3). Das Studio holt die drei Dateien aus dem öffentlichen Repository. Ist das Netz weg, nimmt es die letzte Kopie auf dem Mac. Der API-Schlüssel wird dafür nicht gebraucht.

### 4. Was ist öffentlich erzählbar, was bleibt privat?

| Erzählbar | Nur mit Petras Ja | Bleibt privat |
| --- | --- | --- |
| Das freigegebene Manifest „Mehr ist möglich“ und der Leitsatz | Ideen, die noch nicht freigegeben sind (Denkarium, Erlebnisentwürfe) | Gesundheit, Familie, private Lebensumstände |
| Wie die Erlebnisbibliothek gedacht ist (Übungsraum, Türen, Brücke in die Wirklichkeit) | Teile des Elsbeth-Kanons, die noch PETRA REVIEW sind | Geld: Einnahmen, Ziele in Zahlen, Preise, Verträge |
| Wie gebaut wird: Versionen, Tests, Rückschläge, Pannen | Was später einmal verkauft werden könnte | Empfehlungsmarketing, Lifeplus, Downline, Upline |
| Die Rollen der KIs (ChatGPT, Claude im Browser, Claude Code) | Petras Antworten aus dem Fragenpool | Namen echter Menschen außer Petra (Pilotinnen, Familie, Coach) |
| Freigegebene Entscheidungen zu Elsbeth und zum Podcast | | Alles aus Petras privatem Arbeitsordner auf dem Mac (Vision, Notizen, Diktate) |

**Wie das gesichert wird:**
1. Die Quellen sind nur das öffentliche Repository, und dort nur STATUS.md, `entscheidungen/` und die Berichte. Der private Arbeitsordner auf dem Mac ist nie Quelle.
2. Claude Code prüft jeden Punkt gegen diese Tabelle, bevor er in `mabel-aktuell.md` steht.
3. Du siehst die Karte vor dem Start.
4. Es wird nie live gesendet. Was trotzdem durchrutscht, wird geschnitten.

### 5. Wie verhindern wir veraltete Stände und erfundene Erinnerungen?

- **Datum vorn:** Schublade 3 beginnt mit „Stand: Datum, Uhrzeit“. Ist sie älter als 3 Tage, zeigt die Karte das in Gelb, und Mabel bekommt den Satz „Seitdem kann sich etwas getan haben“.
- **Klare Kennzeichnung in Schublade 2:** Jede Aussage trägt „entschieden“, „in Arbeit“ oder „offen“. Eine offene Frage wird so nicht als Tatsache erzählt.
- **Überholtes heißt überholt:** Alte Fassungen tauchen nur als Geschichte auf („0.10 ist aus der Rolle gefallen, 0.11 ist wieder stabil“), nie als aktueller Stand.
- **Kein Gedächtnis zwischen Folgen:** GPT-Live speichert bei uns nichts (`store: false`). Mabel weiß von früheren Folgen nur, was in Schublade 3 steht, zum Beispiel ein Punkt „Letzte Folge: …“. Dass sie nur bereitgestellten Stand als Tatsache darstellt, steht schon in ihrer Anweisung (deine Entscheidung vom 20.10.).
- **Petra hat das letzte Wort:** Sagt Petra im Gespräch etwas anderes, gilt Petra. Das ist ein Satz in Schublade 1.

### 6. Was kostet der zusätzliche Text, und was macht er mit der Qualität?

- **Kosten:** 0 € beim Gespräch, weil nach Minuten abgerechnet wird. Weg A kostet ebenfalls 0 €. Weg B kostet ca. 1 bis 3 Cent pro Folge (geschätzt).
- **Qualität:** Mehr Text kann Mabel in den Vortragsmodus bringen, dann zählt sie Fakten auf, statt zu reden. Dagegen helfen drei Dinge: wenig Text, Hintergrund getrennt vom Verhalten und ein Satz in Schublade 1: „Du musst nichts davon unterbringen. Bring höchstens hin und wieder etwas ein, wenn es ins Gespräch passt.“
- **Prüfen lässt sich das nur mit einer Probe.** Vorschlag: einmal 5 Minuten mit allen drei Schubladen, etwa 0,40 $. Das braucht dein Ja.

---

## TEIL 3 – Beispiel und nächste Schritte

### Beispiel: Schublade 3 „Was gerade los ist“ (Stand 20.10.2026)

> **Stand: 20.10.2026, 16:00 Uhr. Hintergrund für dich, kein Gesprächsplan.**
>
> - **Fortschritt:** Deine Mutter Elsbeth ist in Fassung 0.11 wieder ganz sie selbst. Bei 5 von 5 Testgesprächen hat sie die gleiche gute Richtung genommen. Live bei Gästen läuft aber noch die alte Fassung 0.4.
> - **Rückschlag:** In Fassung 0.10 ist Elsbeth mitten im Test aus der Rolle gefallen und hat gesagt „ich spiele sie“. Schuld war ein Text, der in der dritten Person über sie sprach.
> - **Panne:** Für Elsbeth gibt es inzwischen einen Pool mit 144 Fragen, die Petra beantworten kann, auch beim Spazierengehen per Sprache. Eine Antwort war ein Hörfehler der Spracherkennung und musste wieder raus.
> - **Neu:** Dich gibt es seit heute. Bei eurer ersten Probe fand Petra dich „noch ein bisschen verschnarcht“, und mittendrin warst du „weggeschneit“, weil die Verbindung kurz weg war.
> - **Offen:** Petra muss noch entscheiden, ob ihr 0.11 gefällt. Außerdem ist offen, ob Elsbeth in jedem Gespräch andere Beispielsätze bekommt, damit sie sich nicht wiederholt.

Prüfung gegen die Tabelle: keine Namen außer Petra, kein Geld, nichts Privates, nur Dinge aus STATUS.md und den Berichten. Die Testkosten in Cent sind bewusst weggelassen.

### Gliederung für Schublade 2 „Was wir bauen“ (ausgeschrieben erst nach deinem Ja)

1. More is Yours in zwei Sätzen: ein Übungsraum, um sich etwas zu trauen, bevor man sich trauen muss. Es wird noch nichts verkauft (entschieden).
2. Die Erlebnisbibliothek: Türen ins Unbekannte, ausprobieren ohne Risiko, dazu eine Brücke in die echte Welt (Manifest, entschieden).
3. Elsbeth Unknown: 80, Münchnerin in Münster, empfängt die Gäste und öffnet ihnen eine Tür. Sie ist eine Sammlerin von Leben, keine Helferin (Kanon in Teilen entschieden, sonst in Arbeit).
4. Die fünf Phasen, und dass gerade Phase 2 „Elsbeth spricht“ läuft (entschieden).
5. Wer mitbaut: Petra entscheidet, ChatGPT erfindet mit, Claude im Browser kritisiert, Claude Code baut (entschieden).
6. Der Podcast: wird nie live gesendet, Mabel ist offen eine KI-Figur (entschieden).

### Was du entscheidest

1. **Schubladen-Aufbau** wie oben: ja oder nein?
2. **Weg A** (Claude Code schreibt Schublade 3, 0 Kosten) oder Weg B (ein Modell fasst zusammen, ein paar Cent)?
3. **Die Tabelle „erzählbar und privat“:** passt sie, oder soll etwas verschoben werden?
4. **Welche Mabel ist die Basis:** 0.1 (die aus dem guten Gespräch) oder 0.2 (frecher, noch ungetestet)?
5. Danach eine **Probe von 5 Minuten** mit allen drei Schubladen (ca. 0,40 $)?

Bis zu deiner Entscheidung bleibt das Studio, wie es ist.
