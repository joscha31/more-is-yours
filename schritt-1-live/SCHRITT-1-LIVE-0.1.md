# MORE IS YOURS – Schritt 1 in GPT-Live-1: Gesprächsbrief und Pilotaufbau 0.1

**Stand:** 16.09.2026
**Status:** IMPLEMENTED (Live-Pilotweg) · noch nicht TESTED mit echtem Konto
**Grundlage:** `build-briefs/2026-09-16-schritt-1-rohmaterial-sammler-0.1.md` (PETRA APPROVED / BUILD READY), `persona/2026-09-15-ilse-persona-kern-b7-systemisch.md`, `gesetze/2026-09-15-ui-gesetz-lebendig-spielerisch.md`, `forschung/Voice-Ermittlung-Eigener-ChatGPT-Account-0.2.md`

## 1. Was hier liegt

| Datei | Funktion |
|---|---|
| `texte/01-projektanweisung.txt` | die vollständige Projektanweisung „More is Yours – Schritt 1“, wortgleich zum Einfügen in ChatGPT (7.280 Zeichen) |
| `texte/02-starttext.txt` | der kurze Starttext der Testerin |
| `texte/03-abschlussbefehl.txt` | der Abschlussbefehl |
| `texte/04-weiterbefehl.txt` | der Befehl zum Fortsetzen |
| `anleitung.md` | die sehr einfache Anleitung für Petra, Nicole und Anne |
| `index.html` | die kleine Startseite mit den fünf Schritten und Kopierknöpfen (wird aus `vorlage.html` und den Texten gebaut) |
| `build-startseite.mjs` | baut `index.html`; Texte bleiben die einzige Wahrheit |
| `test.mjs` | prüft Texte und Startseite |

Die `.txt`-Dateien sind die Quelle. Wer die Anweisung ändert, ändert sie dort und baut die Seite neu (`node build-startseite.mjs && node test.mjs`).

## 2. Was in ChatGPT Live passiert und was in More is Yours

| Teil | Wo | Wer |
|---|---|---|
| Projekt anlegen, Anweisung einfügen | ChatGPT-Konto der Testerin | die Testerin, einmalig |
| Das Gespräch (Blöcke 1 bis 10, Nachfragen, Zwischenstände, Pause, Fortsetzung) | GPT-Live-1 im Projekt der Testerin | Ilse (Live) und die Testerin |
| Abschluss als strukturierter Text | Chat im Projekt der Testerin | Ilse (Live oder Text) |
| Korrekturen am Abschluss | derselbe Chat | die Testerin |
| Übergabe des Abschlusses | Kopie an Petra (Mail, Nachricht) oder später ins eigene Fach | die Testerin, von Hand |
| Einordnung nach Herkunft und Evidenz, editierbare Rucksack-Ansicht, Speicherung je Frau | More is Yours (Ilse-Haus, Supabase) | **noch nicht gebaut in dieser Runde**, siehe Gaps |

Keine technische Verbindung zwischen dem ChatGPT-Plus-Konto und der More-is-Yours-App. Keine Zugangsdaten, keine Cookies, kein Auslesen. Der Abschluss geht als Text von Hand über die Grenze. Das ist im Pilot so gewollt.

## 3. Gesprächsregeln für Live (Kurzfassung, vollständig in der Anweisung)

1. Eine Frage, dann zuhören. Nie mehrere Fragen, nie eine Liste vorlesen.
2. Höchstens drei Sätze am Stück, außer Zwischenstand und Abschluss.
3. Zuerst auf das reagieren, was sie gesagt hat, dann die nächste Frage.
4. Einmal nachhaken, wenn eine Geschichte oder ein Beleg dahinter steckt, dann weiter.
5. Unterbrechung: sofort aufhören, zuhören.
6. „Weiter“, „weiß ich nicht“, „will ich nicht vertiefen“ und Korrekturen sind jederzeit gültig. „Will ich nicht vertiefen“ wird nie wieder angesprochen.
7. Zwischenstand alle paar Themen, drei bis fünf Punkte, ohne Zählen, ohne Drängen.
8. Themen 8 bis 10 (mitnehmen, zurücklassen, Must-haves und No-Gos) werden immer gefragt.
9. Bei jeder wichtigen Sache die Zuordnung erfragen: behalten, offen, kann ich aber will ich nicht mehr beruflich, No-Go.
10. Küchentisch-Deutsch, kein Lob fürs Antworten, Schweres kurz und ehrlich, Sicherheitsregel Telefonseelsorge.

Fachliche Grenzen, die in Live vollständig gelten: Können ist nicht Wollen · keine Geschäftsmodell-, Nischen-, Angebots-, Positionierungs- oder Content-Vorschläge · kein Matching · keine psychologische Deutung · keine Zukunft aus Vergangenheit · gesagt, abgeleitet, vermutet bleiben getrennt.

## 4. Abschlusslogik

Auslöser: „Ilse, mach mir den Abschluss“ (auch „Abschluss bitte“, „Rucksack zeigen“, „Zusammenfassung“). Gesprochen oder getippt.

Ablauf:
1. Ilse kündigt kurz an, dass der Text im Chat entsteht.
2. Ilse schreibt den Abschluss in voller Länge in den Chat, im festen Format (Abschnitt 5). Im Gespräch wird er nicht vorgelesen.
3. Ilse fragt: „Was stimmt nicht, was fehlt, was soll weg?“ und gibt nach Korrekturen neu aus.
4. Ilse sagt der Frau, dass sie den Text an Petra schickt oder in ihr Fach kopiert. Kein Fazit, keine Empfehlung.

Empfohlener Weg im Pilot: Sprachfunktion beenden und den Abschlussbefehl im selben Chat **tippen**. Dann schreibt das Textmodell den Text sauber. Ob Live selbst den langen Text zuverlässig in den Chat schreibt statt vorzulesen, ist Testpunkt T4.

## 5. Format des Abschlusses

```
# Mein Rucksack · Schritt 1 · [Vorname] · Stand [Datum]

## Das bringe ich mit
### Erfahrungen
### Fähigkeiten
### Wissen
### Lebens- und Berufsgeschichten
### Gelöste Probleme
### Themen und Interessen
### Netzwerk, Ruf, Mittel

## Das nehme ich mit
## Das lasse ich zurück
## Das kann ich, will ich aber nicht mehr beruflich machen
## Meine Must-haves
## Meine No-Gos
## Offene Punkte
## Geschichten für später (Storybank-Vorbereitung)
  Titel · Was ist passiert · Warum war es prägend · Was habe ich daraus gelernt · Könnte später relevant sein für: offen
```

Jeder Punkt trägt zwei Marken in Klammern, die die Frau ignorieren darf und die More is Yours später braucht:
- **Herkunft:** gesagt · abgeleitet · Vermutung · klären
- **Beleg:** Beispiel · Selbstaussage · erlebt · offen

Beispiel: „Ich habe zehn Jahre eine Praxis geführt (gesagt, erlebt)“. Leere Abschnitte stehen als „noch nichts“. Nichts wird erfunden, nichts ergänzt, was nicht gesagt oder als Ableitung oder Vermutung gekennzeichnet ist.

## 6. Testprotokoll für den ersten echten Durchlauf (Petra zuerst)

| Nr. | Test | Erwartung | Ergebnis |
|---|---|---|---|
| T1 | Projekt anlegen, Anweisung einfügen, Live starten, Starttext sagen | Ilse begrüßt mit „Hallo, liebe Petra“, erklärt in zwei Sätzen, stellt eine offene Frage | offen |
| T2 | Fünf Minuten sprechen | eine Frage nach der anderen, kurze Reaktionen, kein Fragenkatalog | offen |
| T3 | Gezielt fragen: „Was soll ich denn damit machen?“ | Ilse verweist auf später, macht keinen Vorschlag | offen |
| T4 | „Ilse, mach mir den Abschluss“ gesprochen | Text steht vollständig im Chat, Format stimmt, Marken vorhanden. Falls vorgelesen: Sprachfunktion beenden, Befehl tippen | offen |
| T5 | Neuer Chat im Projekt, „Ilse, weiter mit Schritt 1“ | Ilse fasst den Stand aus dem vorigen Chat in drei bis fünf Punkten zusammen | offen |
| T6 | „Will ich nicht vertiefen“ zu einem Thema, später prüfen | Ilse fragt nie wieder danach, Punkt steht unter „Offene Punkte“ | offen |
| T7 | Passt die Anweisung ins Feld? | Kein Abschneiden. Sonst Weg über Datei (Anleitung Schritt 2) | offen |
| T8 | Anweisung sichtbar? | Ilse nennt sich Ilse, kennt „Können ist nicht Wollen“, wenn danach gefragt | offen |

Ergebnisse bitte als Nachtrag hier oder in `quality-lab/` dokumentieren. Erst danach Status TESTED.

## 7. Offene TECH GAPS

1. **Zeichenlimit des Anweisungsfelds** in ChatGPT-Projekten ist nicht dokumentiert. Die Anweisung hat 7.280 Zeichen. Falls abgeschnitten wird: Weg über Projektdatei (steht in Anleitung und Startseite). Testpunkt T7.
2. **Langer Text aus Live heraus:** nicht belegt, ob GPT-Live-1 den Abschluss als Text schreibt oder vorliest. Umgehung: Befehl tippen. Testpunkt T4.
3. **Kein Rückweg in die App:** der Abschluss wandert von Hand. Eine editierbare Rucksack-Ansicht mit Speicherung je Frau (Supabase, Herkunft und Evidenz als Felder, getrennte Profile für Petra, Nicole, Anne) ist im Brief vorgesehen und in dieser Runde nicht gebaut; der Ilse-Code liegt im Repo `meine-projekte`, das für diese Session nicht angebunden war.
4. **Eingebettete Voice in der eigenen App:** bewusst nicht gebaut. Wenn später gewünscht: eigene Realtime-/Voice-API-Lösung mit eigener Kostenentscheidung (siehe Variante D in `forschung/Voice-Ermittlung-Eigener-ChatGPT-Account-0.2.md`).
5. **Startseite erreichbar machen:** `index.html` liegt im Repo; GitHub zeigt sie nicht als Seite an. Sie kann als Datei verschickt, als claude.ai-Artifact geteilt oder bei Vercel abgelegt werden.

## 8. Offene CONTENT / METHOD / DATA GAPS

1. **Datenschutz-Hinweis für die Testerinnen:** Das Gespräch liegt im eigenen ChatGPT-Konto (USA). Der Trainings-Schalter („Modell für alle verbessern“) sollte aus sein. Ein Satz dazu steht in der Anleitung, eine förmliche Einwilligung gibt es nicht. Für Petra, Nicole und Anne im Pilot vertretbar, vor fremden Frauen nicht (⚖️ wie im Security-Review vom 15.09.).
2. **Übernahme nach More is Yours:** Wer den Abschluss ins Fach einträgt und wie Herkunft und Evidenz dort landen, ist Methodenfrage für das Fach-Lab. Vorschlag: alles landet zunächst als „offen“, die Frau bestätigt jeden Punkt selbst.
3. **Ob GPT-Live-1 mini (Free/Go) reicht:** nicht getestet, Empfehlung bleibt Plus.

## 9. Bewusst nicht gebaut

Schritt 2 bis 5 · Positionierung · Content · Angebot · Matching · Option Genome · Human Design · Preislogik · Community · eigene Voice-/Realtime-API · jede Verbindung zwischen ChatGPT-Plus-Konto und App · Export.
