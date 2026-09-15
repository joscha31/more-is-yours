# MORE IS YOURS – BUILD BRIEF: Pilot-Modus 0.1

**Stand:** 15.09.2026  
**Status:** BUILD-VORSCHLAG / PETRA REVIEW – noch nicht starten ohne Petras Freigabe  
**Ziel:** Nur die Funktionen bauen, die den ersten echten Piloten sicherer, beobachtbarer und auswertbarer machen. Keine neue Produktlogik.

## Verbindliche Quellen

1. `master/2026-09-14-more-is-yours-gesamt-master-3.0.md`
2. `MASTER-TODO.md`
3. `forschung/2026-09-15-pilotplan-0.1.md`
4. `forschung/Economic-Profile-Matching-Rule-Library-0.2.md` – PETRA APPROVED
5. vorhandene Datenschutz-/Einwilligungs- und Quality-Guard-Entscheidungen

## Vorbedingung

Die bereits freigegebenen aktuellen Bauaufträge aus dem MASTER-TODO werden zuerst sauber abgeschlossen:

- Option Genome Framework 0.4-Korrektur, falls noch offen
- Option Genome Framework 0.5 Zoom-Mechaniken
- zehn fachliche Optionsfassungen sauber in die technische Library übertragen
- technischer Matchinglauf mit Pilotin 0 prüfen

Pilot-Modus darf diese Arbeiten nicht umgehen oder fachlich ersetzen.

---

# 1. Was jetzt sinnvoll gebaut werden darf

## A. Invite-only Pilotzugang

Ziel: Nur ausdrücklich eingeladene Testpersonen kommen in die Pilotstrecke.

Claude Code darf dafür die technisch einfachste saubere Lösung wählen.

Kein öffentliches Self-Signup für den Pilot.

## B. Interne Testerrolle

Minimal unterscheiden:

- `preflight` – z. B. Joscha, zählt nicht zur Zielgruppenvalidierung
- `pilot` – Zielgruppen-Pilotin

Diese Kennzeichnung ist intern und darf keine fachlichen Antworten verändern.

## C. Versions-Fingerprint je Test

Für jeden Pilotdurchlauf soll nachvollziehbar sein, welche Fassung lief:

- Persona-Version
- Beobachterin-Version
- Modell-ID / relevante Modellkonfiguration
- Matching-Version
- Option-Genome-Version
- weitere bereits vorhandene relevante Methoden-/Logikversionen

Ziel: Wenn Nicole etwas anderes erlebt als Nadja, muss erkennbar sein, ob zwischenzeitlich die Software verändert wurde.

## D. Einfacher Feedback-Abschluss

Nach Abschluss der Strecke die fünf festgelegten Pilotfragen aus `forschung/2026-09-15-pilotplan-0.1.md` anzeigen und Antworten speichern.

Wichtig:
- Wortlaut nicht eigenmächtig verändern
- keine Bewertungsskala erfinden
- keine automatische Interpretation der Antworten
- Antworten bleiben Aussagen der Testperson

## E. „Problem melden“-Möglichkeit

Ein sehr einfacher Button / Link innerhalb des Piloten:

> „Hier stimmt etwas nicht“

Möglichst mit:
- aktuellem Bereich / Seite automatisch referenziert
- freiem Text der Testperson
- Zeitstempel
- Versions-Fingerprint

Nicht automatisch psychologisch oder fachlich klassifizieren.

## F. Pilotübersicht für Petra

Eine schlichte interne Übersicht, ohne neue Auswertungs-KI:

Pro Person sichtbar:
- Testerrolle preflight / pilot
- begonnen / letzter Stand / abgeschlossen
- technische Fehlerhinweise
- abgegebene Pilot-Abschlussantworten
- verwendete Versionen

Keine Rankings von Frauen. Keine Scores. Keine automatische „Erfolgsquote“ über persönliche Inhalte.

## G. Sauberes Löschen / Zurücksetzen einer Testperson

Für Testbetrieb muss Petra eindeutig erkennen können:
- Pilotdaten vollständig löschen
- Testkonto zurücksetzen

Bestehende Datenschutz-/Löschregeln beachten. Keine parallele Schattenkopie erzeugen.

---

# 2. Was Claude Code jetzt NICHT bauen soll

- Bezahlsystem / Checkout
- endgültige Preislogik
- Community
- Voll-HD
- neue Voice-Infrastruktur
- weitere Optionen außerhalb der freigegebenen 10
- neue Matchingmethodik
- Match-Prozente
- automatische Karriereentscheidung
- automatische Interpretation des Pilotfeedbacks
- vollautomatische Erstellung des endgültigen Dossiers, solange dessen fachliche Architektur nicht BUILD READY ist
- große Analytics-Infrastruktur
- Funnel-Automationen

---

# 3. Dossier

Die bereits beauftragte **Beispiel-Dossier-Vorschau** darf gebaut werden.

Für echte Pilotinnen gilt zunächst:

> Das endgültige Dossier darf manuell nachgearbeitet werden.

Claude Code soll deshalb jetzt keine eigene Dossier-Fachlogik erfinden.

Er darf vorhandene freigegebene Daten sichtbar machen, aber fehlende Begründungen oder Handlungsempfehlungen nicht selbst ergänzen.

CONTENT GAP statt Improvisation.

---

# 4. Akzeptanzkriterien

Pilot-Modus 0.1 ist technisch ausreichend, wenn:

1. nur eingeladene Testpersonen teilnehmen können
2. preflight und pilot intern unterscheidbar sind
3. jeder Lauf einen Versions-Fingerprint hat
4. die fünf Pilotfragen am Ende unverändert beantwortet werden können
5. Probleme mit Seite + Version gemeldet werden können
6. Petra den Testfortschritt überblicken kann
7. Testdaten sauber gelöscht / zurückgesetzt werden können
8. keine neue Fachlogik entstanden ist

---

# 5. Erwartete Rückmeldung von Claude Code

Bitte nur melden:

- was umgesetzt wurde
- geänderte / neue Dateien
- Migrationen
- Tests und Ergebnis
- welche bereits bestehenden Komponenten wiederverwendet wurden
- offene TECH GAPS
- offene CONTENT / METHOD / DATA GAPS
- ausdrücklich: welche Teile NICHT gebaut wurden
