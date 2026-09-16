# Bericht — Schritt 1 als GPT-Live-1-Pilot vorbereitet (16.09.2026)

Kontext für dich: Petra hat den Build Brief `build-briefs/2026-09-16-schritt-1-rohmaterial-sammler-0.1.md` freigegeben und nachträglich entschieden: Schritt 1 läuft im Pilot primär gesprochen über GPT-Live-1 im eigenen ChatGPT-Plus-Konto der Testerin. Keine eigene Voice-API, keine technische Verbindung zwischen Plus-Konto und App. Hier die Antwort in den sechs erbetenen Punkten.

## 1. Was gebaut und vorbereitet wurde

Alles liegt im neuen Ordner `schritt-1-live/`.

- **Vollständige Projektanweisung „More is Yours – Schritt 1“** (7.280 Zeichen): Ilse-Ton aus dem Persona-Kern B7 verdichtet, die Aufgabe von Schritt 1, die Regel „Können ist nicht Wollen“ mit ausdrücklicher Doppelfrage, die Sperren (kein Geschäftsmodell, keine Nische, kein Angebot, keine Positionierung, kein Content, kein Matching, keine Deutung, keine Zukunft aus Vergangenheit), gesagt/abgeleitet/vermutet, die zehn Gesprächsblöcke, die vier Zuordnungen je Fund, Geschichten-Merken für die Storybank ohne Content, Pause und Fortsetzung, Abschlusslogik und Abschlussformat.
- **Kurzer Starttext** für die Testerin.
- **Gesprächsregeln für Live**: eine Frage, höchstens drei Sätze, erst reagieren dann fragen, einmal nachhaken, Unterbrechung sofort, „weiter“ / „weiß ich nicht“ / „will ich nicht vertiefen“ / Korrektur jederzeit, Zwischenstand ohne Zählen und ohne Drängen.
- **Abschlussbefehl und Abschlusslogik**: „Ilse, mach mir den Abschluss“, Text im Chat statt Vorlesen, Korrekturschleife, Übergabe an Petra oder ins Fach.
- **Strukturierte Abschlussausgabe** in genau der bestellten Ordnung: Das bringe ich mit (sieben Unterabschnitte) · Das nehme ich mit · Das lasse ich zurück · Das kann ich, will ich aber nicht mehr beruflich machen · Must-haves · No-Gos · Offene Punkte · Geschichten für später. Jeder Punkt trägt Herkunft (gesagt, abgeleitet, Vermutung, klären) und Beleg (Beispiel, Selbstaussage, erlebt, offen) in Klammern.
- **Sehr einfache Anleitung** (`anleitung.md`): Projekt öffnen, Anweisung einfügen, Live starten, sprechen, Abschluss erzeugen, plus „wenn etwas hakt“.
- **Kleine Startseite** (`index.html`): fünf Schritte als Karten in der hellen A+-Farbwelt (Papier, weiße Karten, Nachtblau, Orange, Playfair), 19 px Fließtext, Kopierknopf je Text, hell und dunkel, mobil geprüft bei 375 px ohne Querscrollen. Die Seite wird aus den Textdateien gebaut, damit Anweisung und Seite nie auseinanderlaufen.

## 2. Geänderte Dateien

| Datei | Was |
|---|---|
| `schritt-1-live/SCHRITT-1-LIVE-0.1.md` | neu: Gesprächsbrief, Zuständigkeiten ChatGPT vs. More is Yours, Abschlusslogik, Format, Testprotokoll, Gaps |
| `schritt-1-live/anleitung.md` | neu: Anleitung für Petra, Nicole, Anne |
| `schritt-1-live/texte/01-projektanweisung.txt` | neu: die Projektanweisung (Quelle) |
| `schritt-1-live/texte/02-starttext.txt`, `03-abschlussbefehl.txt`, `04-weiterbefehl.txt` | neu: die kurzen Texte |
| `schritt-1-live/vorlage.html`, `build-startseite.mjs`, `index.html` | neu: Startseite und Generator |
| `schritt-1-live/test.mjs` | neu: Prüfskript |
| `INDEX.md`, `MASTER-TODO.md` | ergänzt |
| `build-briefs/2026-09-16-schritt-1-rohmaterial-sammler-0.1.md` | Statuszeile ergänzt |

Keine Migration, keine Änderung an bestehender Fachlogik, kein Code im Ilse-Haus.

## 3. Genaue Schritte für Petra, Nicole und Anne

1. ChatGPT (Plus) öffnen, links **Projekte**, **Neues Projekt**, Name „More is Yours – Schritt 1“. Erinnerung: nur in diesem Projekt.
2. Im Projekt **Anweisungen** öffnen, den Text aus `schritt-1-live/texte/01-projektanweisung.txt` einfügen, speichern. Passt er nicht: als Datei „Ilse Schritt 1.txt“ hochladen und in die Anweisungen nur „Du bist Ilse. Folge in allem der Datei Ilse Schritt 1.“
3. Im Projekt neuen Chat öffnen, Sprach-Knopf, dann sagen: „Hallo Ilse, ich bin [Vorname]. Ich möchte Schritt 1 machen und meinen Rucksack auspacken.“
4. Reden. Jederzeit: „weiter“, „weiß ich nicht“, „will ich nicht vertiefen“, „stopp, das war anders“, „Pause“. Später weiter mit „Ilse, weiter mit Schritt 1.“
5. Zum Schluss „Ilse, mach mir den Abschluss.“ Liest sie vor statt zu schreiben: Sprachfunktion beenden, den Satz im selben Chat tippen. Text prüfen, korrigieren lassen, kopieren, an Petra schicken.

## 4. Tests

| Test | Ergebnis |
|---|---|
| `node schritt-1-live/test.mjs` (54 Prüfungen: Zeichenlimit, keine Gedankenstriche, alle Pflichtregeln und Abschnitte in der Anweisung, alle zehn Blöcke, keine Empfehlungssprache, Startseite zeigt die Texte wortgleich, Kopierknöpfe, Dokumentkopf, Schriftgröße, keine fremden Skripte) | alles grün |
| Startseite bei 375 px (Chromium, Screenshot) | kein Querscrollen, lesbar, Karten und Knöpfe sauber |
| Echter Durchlauf mit ChatGPT-Plus-Konto und Mikrofon | **nicht möglich aus dieser Session**, Testprotokoll T1 bis T8 liegt in `SCHRITT-1-LIVE-0.1.md` Abschnitt 6; Petra macht den ersten |

## 5. Offene Gaps

TECH: Zeichenlimit des Anweisungsfelds unbekannt (Umgehung über Datei eingebaut) · ob Live den langen Abschluss schreibt statt vorliest (Umgehung: tippen) · kein Rückweg in die App, editierbare Rucksack-Ansicht mit Speicherung je Frau in Supabase noch nicht gebaut (Ilse-Code liegt in `meine-projekte`, nicht angebunden) · eingebettete Voice in der eigenen App bleibt TECH GAP mit eigener Kostenentscheidung · Startseite ist im Repo, aber noch nirgends als Seite erreichbar.

CONTENT / METHOD / DATA: Datenschutz-Satz statt förmlicher Einwilligung (für die drei Testerinnen vertretbar, vor fremden Frauen nicht) · wie der Abschluss ins Fach übernommen wird und wer bestätigt · ob GPT-Live-1 mini reicht.

## 6. Bewusst nicht gebaut

Keine Realtime-/Voice-API. Keine Verbindung zwischen Plus-Konto und App, keine Zugangsdaten, kein Auslesen. Kein App-Teil in dieser Runde (Supabase, editierbare Ansicht). Schritt 2 bis 5, Positionierung, Content, Angebot, Matching, Option Genome, Human Design, Preise, Community, Export.
