# Elsbeth im Tisch-Prototyp: OpenAI als neues Gehirn prüfen (29.10.2026)

Stand: 29.10.2026 · Status: **NUR AUSKUNFT / PETRA REVIEW**
Geschrieben von Claude Code im Auftrag von Petra und ChatGPT. Keine OpenAI-Aufrufe, nichts öffentlich umgestellt, keine neue Datenweitergabe, keine Änderung an der Live-Elsbeth 0.4.

Gehört zu: `prototypen/2026-10-27-tisch-erlebnis-prototyp-testbau.md` · Referenz `forschung/2026-10-27-tisch-erlebnis-flur-gespraechstest-chatgpt.md`.

---

## Kurz für Petra

1. **Empfehlung:** Zuerst zwei OpenAI-Modelle gegen das heutige Haiku antreten lassen: **`gpt-6-luna`** als günstige Wahl (gleicher Preis wie Haiku) und **`gpt-6.1-terra`** als stärkeres Vergleichsmodell (laut OpenAI für „klares, natürliches Schreiben“). Ehrlich vorweg: `gpt-6-luna` spielt in derselben Preisklasse wie Haiku. Ob es lebendiger klingt, weiß niemand, bevor es getestet ist. Die Elsbeth aus dem Chat-Test vom 27.10. lief in der ChatGPT-App mit einem großen Modell.
2. **Kosten je vollständigem Erlebnis (rund 20 KI-Antworten):** Haiku heute gemessen **1,4 bis 1,7 Cent** · `gpt-6-luna` geschätzt **1,2 bis 1,7 Cent** · `gpt-6.1-terra` geschätzt **12 bis 16 Cent**.
3. **100 / 1.000 kostenlose Erlebnisse:** Haiku rund 1,70 $ / 17 $ · `gpt-6-luna` rund 1,20 bis 1,70 $ / 12 bis 17 $ · `gpt-6.1-terra` rund 12 bis 16 $ / 120 bis 160 $.
4. **Aufwand der Umstellung:** klein. Eine Weiche im vorhandenen Elsbeth-Server für den Tisch, keine neue Server-Funktion, Bilder und Seite bleiben, wie sie sind. Etwa ein halber Arbeitstag mit Tests.
5. **Was Petra tun muss:** bei OpenAI ein eigenes Projekt mit harter Ausgabengrenze und einen eigenen Schlüssel anlegen (Anleitung unten). Für echte Gäste zusätzlich Dr. Falks Prüfung und ihre Freigabe.
6. **Nächster kleinster Schritt:** ein Vergleichslauf mit einer erfundenen Geschichte, drei Modelle, Budget 0,30 $. Das Skript dafür ist fertig.

---

## 1. Bestehende Technik (geprüft)

| Frage | Befund |
|---|---|
| Modell im Tisch-Prototyp | `claude-haiku-5-5` (Anthropic), dasselbe wie in der Live-Elsbeth 0.4 |
| Wo | `api/elsbeth.js` im Zentrale-Projekt, Weiche `erlebnis:'tisch'`; die Anweisung steht in `api/_tisch-regeln.js` |
| Was übergeben wird | (a) die feste Anweisung je Szene (Flur, Tisch, Abschied, Rückkehr) mit wörtlich übernommenen Kanon-Abschnitten der Live-Elsbeth (Wer du bist, Haus, Was du nie tust, Sicherheit); (b) der STAND von der Seite: Thema, bestätigte Figuren, offener Vorschlag, abgelehnte Namen, im Flur Erzähltes; (c) der Gesprächsverlauf; (d) eine kurze unsichtbare Regie je Anfrage. Die Anweisung wird zwischengespeichert (Cache). Davor laufen Losung, Gerätegrenze, Tagesdeckel und der feste Schutzfilter (Krise, Sex), unabhängig vom Modell. |
| Steuerung der Bilder | unsichtbare Zeichen im Text (`[[FLUR]]`, `[[THEMA: …]]`, `[[FIGUR: Name \| Anliegen]]`, `[[AUSKLANG]]`). Aufgehängt wird nur per Klick des Gasts. Das funktioniert mit jedem Modell, das Text schreibt; ein Wechsel auf JSON-Ausgaben ist nicht nötig. |
| Gemessene Kosten | ganzes Erlebnis mit 5 Figuren und 8 Tischrunden: **23 Aufrufe, 1,68 Cent**; Vergleichsgeschichte: **19 Aufrufe, 1,36 Cent**. Je Aufruf rund 8.500 Eingabe-Tokens, davon gut 70 % aus dem Cache, und rund 750 Ausgabe-Tokens (davon etwa zwei Drittel unsichtbares Nachdenken, das Haiku 5.5 von sich aus einschaltet). |
| Fund am Rande | Der Kostenzähler im Server rechnet die Cache-Tokens nicht mit und zeigt dadurch etwa **16 % zu wenig** (1,41 statt 1,68 Cent). Der Tagesdeckel greift deshalb etwas später als gedacht. Sollte beim Umbau mit behoben werden; betrifft auch den Zähler der Live-Elsbeth, deshalb nicht eigenmächtig geändert. |

**OpenAI einbinden ohne Umbau:** Im Server bekommt der Tisch eine zweite Ruf-Funktion für OpenAI (Responses-Schnittstelle). Dieselbe Anweisung, derselbe STAND, derselbe Verlauf, nur in OpenAIs Form (`instructions` + `input`). Welches Modell antwortet, entscheidet eine Umgebungsvariable bei Vercel. Ein Zurückschalten ist ein Klick. Die Seite, die Bilder und die Schutzfilter bleiben unverändert.

## 2. OpenAI-Modelle und Preise (offiziell)

Quelle: [developers.openai.com/api/docs/pricing](https://developers.openai.com/api/docs/pricing) und [/api/docs/models](https://developers.openai.com/api/docs/models), abgerufen am 29.10.2026. Preise in USD je 1 Million Tokens, Standard-Stufe, Eingaben unter 272.000 Tokens.

| Modell-ID | Eingabe | Cache gelesen | Ausgabe | Einordnung laut OpenAI |
|---|---|---|---|---|
| `gpt-6-luna` | 0,10 | 0,01 | 0,50 | „unser effizientestes Modell für fokussierte Aufgaben in großer Menge“ · strukturierte Ausgaben ✔ · Nachdenken einstellbar (none bis max, Standard medium) · EU-Datenresidenz möglich |
| `gpt-5.6-luna` | 0,20 | 0,02 | 1,20 | ältere Luna-Generation, teurer als gpt-6-luna |
| `gpt-5.4-nano` | 0,20 | 0,02 | 1,25 | ältere Kleinstklasse |
| `gpt-5.4-mini` | 0,75 | 0,075 | 4,50 | ältere Mittelklasse |
| `gpt-6.1-terra` | 1,00 | 0,05 | 5,00 | „schnell, effizient“, unter anderem für „klares, natürliches Schreiben“ |
| `gpt-6.1-sol` | 2,00 | 0,10 | 10,00 | „nahe an Astra“, für komplexe Arbeit |
| `gpt-6-astra` | 10,00 | 1,00 | 50,00 | Flaggschiff |

Zum Vergleich Anthropic: `claude-haiku-5-5` 0,10 / 0,01 / 0,50 (heute im Einsatz) · `claude-sonnet-5-5` 2,00 / 0,20 / 10,00.

**Wiederverwenden unveränderter Anweisungsteile:** OpenAI speichert gleiche Anfänge einer Anfrage ab 1.024 Tokens automatisch zwischen (bei den neuen Modellen mindestens 30 Minuten). Gelesener Cache kostet bei `gpt-6-luna` ein Zehntel, bei `gpt-6.1-terra` ein Zwanzigstel des Eingabepreises; das Schreiben kostet das 1,25-Fache. Unsere Anweisung steht schon vorn und ändert sich nicht, deshalb greift das ohne Umbau. Weitere Hebel: Nachdenken auf `low` oder `none` stellen (Nachdenk-Tokens werden als Ausgabe bezahlt) und `prompt_cache_key` setzen. **Aufschlag:** EU-Datenresidenz kostet bei neueren Modellen 10 % mehr.

**Kostenschätzung je Erlebnis** (Grundlage: die gemessenen Token-Mengen von Haiku; OpenAI zählt Tokens etwas anders, deshalb Spannen; Ausgabe 8.000 bis 17.000 Tokens je nach Nachdenken):

| Modell | je Erlebnis | 100 Erlebnisse | 1.000 Erlebnisse |
|---|---|---|---|
| `claude-haiku-5-5` (gemessen) | 1,4–1,7 ct | ~1,70 $ | ~17 $ |
| `gpt-6-luna` | 1,2–1,7 ct | ~1,20–1,70 $ | ~12–17 $ |
| `gpt-5.4-mini` | 9–13 ct | ~9–13 $ | ~90–130 $ |
| `gpt-6.1-terra` | 12–16 ct | ~12–16 $ | ~120–160 $ |
| `claude-sonnet-5-5` | 25–40 ct | ~25–40 $ | ~250–400 $ |

## 3. Qualitätsvergleich

**Noch nicht gemessen**, weil keine OpenAI-Aufrufe erlaubt waren. Vorbereitet ist ein Vergleich über ein ganzes Gespräch (Flur bis Abschied, rund 20 Antworten), nicht nur den ersten Satz. Bewertet wird nach den zehn Merkmalen aus dem Auftrag: natürliches Deutsch · eigenständige Elsbeth · konkretes Aufgreifen · Humor · keine KI-Trostsätze · keine Therapie-Gesprächsführung · freie, passende Rückfragen · Bestätigung durch den Gast · zuverlässige Zeichen für die Porträts · Schutzregeln. Die kursiven Handlungszeilen bleiben, weil sie aus der Anweisung kommen.

**Grundlinie Haiku (echter Lauf mit der Vergleichsgeschichte, 29.10.):**
- trägt: *„Vom Fahrrad aus, im Vorbeifahren. Nach zwei Jahren fast täglichem Telefonieren ist das ein ziemlich abrupter Schluss.“* · konkrete Rückfragen · 5 von 5 Figurvorschlägen mit gültigem Zeichen · der vom Gast gewählte Name wird übernommen · am Tisch kein Streit, die Kreative nimmt ihre Idee selbst zurück.
- trägt noch nicht: Die Namensformen werden gemischt („der kreative Anteil“ spricht am Tisch als „die Kreative“) · einmal „Ding“ (Hausregel) · der erste Satz bleibt teils allgemein („Ach, das ist ja unerfreulich.“) · kaum Witz.

**Schutzregeln:** Der feste Filter (Krise mit Nachfrage, Sex) läuft vor dem Modell und gilt für jedes Modell gleich. Die Sicherheitsfälle A bis I aus dem Prototyp-Bericht müssen mit einem neuen Modell trotzdem einmal neu laufen, bevor ein Gast es sieht.

## 4. Vergleichstest (vorbereitet, ohne neue Kosten)

`scripts/tisch-modellvergleich.js` im Arbeitsbereich (nicht im Server, keine neue Vercel-Funktion). Es spielt dieselbe erfundene Geschichte mit mehreren Modellen durch, simuliert die Bestätigung der Figuren (einmal mit eigenem Namen des Gasts) und schreibt je Modell ein Protokoll mit Kosten und Zeichen-Quote.
- Ohne `--ja` ruft es nichts auf (Trockenlauf).
- Mit `--ja --budget 0.30` bricht es ab, sobald 0,30 $ erreicht sind.
- Für OpenAI sendet es `store:false`.
- Schlüssel liest es nur vom Desktop (`OPENAI-API-KEY-TISCHTEST.txt`), nie aus dem Repo.

## 5. Kostenbegrenzung

| Was | Wie | Erzwungen oder nur Warnung? |
|---|---|---|
| Kleines Testbudget | eigenes OpenAI-Projekt „More is Yours Tischtest“ mit **harter Ausgabengrenze** (z. B. 5 $) + `--budget` im Skript | **erzwungen** (OpenAI: „Hard spend limits stop affected API traffic when tracked spend reaches the limit“) |
| Monatliches Gesamtbudget | (a) harte Ausgabengrenze im Produktiv-Projekt beim Anbieter; (b) zusätzlich ein Monatsdeckel in unserem Server (ein Blob je Monat, wie der heutige Tagesdeckel) | **beides erzwungen**; (b) greift vorher und mit freundlichem Elsbeth-Satz statt Fehlermeldung |
| Höchstzahl kostenloser Erlebnisse | Zähler je Monat im Server: ein Erlebnis zählt beim ersten Flur-Aufruf; ist die Zahl erreicht, sagt Elsbeth freundlich, dass das Speisezimmer diesen Monat voll ist | **erzwungen** |
| Automatisches Stoppen | heute schon: Tagesdeckel 0,70 $ (Umgebungsvariable), 150 Tisch-Nachrichten je Gerät und Tag, Losungswort. Der Monatsdeckel und der Erlebnis-Zähler kämen dazu. | **erzwungen** |
| Ausgaben-Warnungen | „Spend alerts“ / Benachrichtigungsschwellen bei OpenAI, Warnungen in der Anthropic-Konsole | **nur Warnung**, stoppt nichts |

Wichtig: Eine Warnung schickt nur eine E-Mail. Nur die harte Grenze beim Anbieter und unsere eigenen Deckel stoppen wirklich. Vorher muss der Zähler die Cache-Tokens mitrechnen (siehe Fund oben).

## 6. Datenschutz beim Wechsel zu OpenAI

Heute nennt die Datenschutzerklärung nur **Anthropic** als Empfänger (USA, Löschung nach 30 Tagen, kein Training, Auftragsverarbeitung nach Art. 28 DSGVO). Ein Wechsel ist eine **neue Datenweitergabe**. Vorher nötig:
1. Auftragsverarbeitungsvertrag (DPA) mit OpenAI abschließen.
2. Dr. Falk prüft: Vertragspartner und Sitz, Drittlandübermittlung (USA), Löschfristen, Einwilligung und Hinweis im Erlebnis.
3. Datenschutzerklärung ergänzen (OpenAI als Empfänger, Zweck, Speicherdauer).

Was OpenAI laut eigener Doku zusichert ([Your data](https://developers.openai.com/api/docs/guides/your-data)): API-Daten werden **nicht zum Training** genutzt, außer man willigt ein · Missbrauchs-Protokolle bis zu **30 Tage** · die Responses-Schnittstelle legt Gespräche 30 Tage als Anwendungszustand ab, **außer mit `store:false`** (so im Skript) · **EU-Datenresidenz** (Speicherung und Verarbeitung in Europa, `eu.api.openai.com`) gibt es nur für neue Projekte, nach Prüfung durch den Vertrieb und zusammen mit Null-Speicherung oder geänderter Missbrauchskontrolle, und sie kostet 10 % mehr · **Null-Speicherung (ZDR)** nur nach Genehmigung durch OpenAI.

**Bis zur Freigabe:** mit OpenAI nur erfundene Testgeschichten, keine echten Gästegespräche. Nichts davon ist aktiviert.

## 7. Was Petra selbst tun muss (nur für den Vergleichstest)

Petra hat schon ein OpenAI-Konto (der Schlüssel für die Spracherkennung liegt auf dem Desktop). Für den Test bitte einen **eigenen** Schlüssel in einem eigenen Projekt, damit die Grenze nur den Test betrifft:
1. https://platform.openai.com öffnen und anmelden.
2. Oben links auf den Projektnamen tippen, dann „Create project“, Name „More is Yours Tischtest“.
3. In diesem Projekt unter „Limits“ eine harte monatliche Ausgabengrenze von 5 $ setzen.
4. Unter „API keys“ auf „Create new secret key“ tippen und den Schlüssel einmal kopieren.
5. Auf dem Mac eine Textdatei `OPENAI-API-KEY-TISCHTEST.txt` auf den Schreibtisch legen und nur den Schlüssel hineinkopieren.
6. Den Schlüssel nie in einen Chat, eine Mail, auf GitHub oder in eine Webseite kopieren.

Dann sagt Petra „Vergleich starten“, und Claude Code lässt die Testgeschichte mit `claude-haiku-5-5`, `gpt-6-luna` und `gpt-6.1-terra` laufen (geschätzt zusammen unter 0,25 $).

## 8. Nächster kleinster Schritt

Der Vergleichslauf aus Abschnitt 7, danach die drei Protokolle nebeneinander mit den zehn Merkmalen bewerten. Phase 2 und der nächste Schritt in STATUS.md bleiben unverändert; der Wechsel des Modells für echte Gäste wäre eine eigene Freigabe.

---

## Prüfprotokoll
- **Deutsch-Tor:** laut gelesen, ganze Sätze, „du“ klein, Zahlen bis 10 als Ziffer.
- **Zahlen:** Preise aus der offiziellen Preisseite (29.10.); Haiku-Kosten gemessen; alle OpenAI-Kosten sind ausdrücklich Schätzungen.
- **Grenzen:** keine OpenAI-Aufrufe, keine Kosten außer zwei Haiku-Messläufen (zusammen rund 3 Cent), Live-Elsbeth unverändert, nichts freigegeben behauptet.
