# MORE IS YOURS – BUILD BRIEF: Pilot-Modus 0.1

**Stand:** 15.09.2026  
**Status:** BUILD-VORSCHAG / PETRA REVIEW – noch nicht starten ohne Petras Freigabe  
**Ziel:** Nur die Funktionen bauen, die den ersten echten Piloten sicherer, beobachtbarer und auswertbarer machen. Keine neue Produktlogik.

## Verbindliche Quellen

1. `master/2026-09-14-more-is-yours-gesamt-master-3.0.md`
2. `MASTER-TODO.md`
3. `forschung/2026-09-15-pilotplan-0.1.md`
4. `forschung/Economic-Profile-Matching-Rule-Library-0.2.md` – PETRA APPROVED
5. `gesetze/2026-09-15-ui-gesetz-lebendig-spielerisch.md` – VERBINDLICH FÜR JEDE SICHTBARE SEITE
6. vorhandene Datenschutz-/Einwilligungs- und Quality-Guard-Entscheidungen

## Vorbedingung

Die bereits freigegebenen aktuellen Bauaufträge aus dem MASTER-TODO werden zuerst sauber abgeschlossen:

- Option Genome Framework 0.4-Korrektur, falls noch offen
- Option Genome Framework 0.5 Zoom-Mechaniken
- zehn fachliche Optionsfassungen sauber in die technische Library übertragen
- technischer Matchinglauf mit Pilotin 0 prüfen

Pilot-Modus darf diese Arbeiten nicht umgehen oder fachlich ersetzen.

---

# 0. UI IST TEIL DES PRODUKTS – KEIN OPTIONALER POLISH

Für alle sichtbaren Pilotseiten gilt verbindlich:

> **Technisch funktionsfähig ist noch nicht fertig.**

Die Oberfläche muss vor Übergabe an Joscha/Nicole/Nadja zugleich:

- schön und hochwertig wirken
- freundlich und farbig sein
- aufgeräumt statt überladen sein
- auf Mobilgeräten sehr gut lesbar sein
- in gutem, natürlichem Deutsch geschrieben sein
- ohne technische oder interne Fachbegriffe verständlich sein
- erwachsen und spielerisch wirken, nicht kindisch
- die vorhandene helle A+-Farbwelt und das bestehende UI-Gesetz verwenden
- Karten, Bilder und visuelle Zustände nutzen statt Formularwüsten
- deutlich erkennbare Hierarchien haben: Überschrift, Erklärung, Handlung
- große, gut klickbare Bedienelemente haben
- ausreichend Weißraum besitzen

## Lesbarkeit – Mindestanforderung

- normaler Fließtext auf Pilotseiten grundsätzlich in gut lesbarer Größe; Zielgröße etwa 18 px
- wesentliche Texte nicht kleiner als 16 px
- kleine Metadaten dürfen zurückhaltender sein, aber nie zur Hauptinformation werden
- ausreichender Zeilenabstand
- keine langen Textzeilen über die ganze Bildschirmbreite
- keine hellgraue Schrift auf hellem Grund
- Kontrast muss ohne Anstrengung lesbar sein
- auf 375 px darf nichts gequetscht, abgeschnitten oder winzig wirken

## Sprache – Mindestanforderung

Sichtbare Texte müssen die Küchentisch-Probe bestehen:

> **Würde Petra diesen Satz einer Frau gegenüber wirklich so sagen?**

Nicht sichtbar verwenden:

- interne Feldnamen
- Datenbankbegriffe
- Entwicklerbegriffe
- `Economic Profile`, wenn auf der Oberfläche `dein wirtschaftliches Profil` verständlicher ist
- `Status`, `Record`, `Fingerprint`, `Payload`, `Evidence`, `Matching Engine` oder ähnliche Maschinenbegriffe
- KI-/Coaching-Floskeln

Fehlermeldungen müssen sagen:
- was passiert ist
- was die Frau jetzt tun kann

Nicht nur technische Fehlercodes ausgeben.

## Spielerische Pflichtschicht

Das verbindliche UI-Gesetz `gesetze/2026-09-15-ui-gesetz-lebendig-spielerisch.md` gilt.

Insbesondere:

- sichtbare Zustände werden möglichst visuell gezeigt, nicht nur als Textzeile
- Karten statt Tabellen/Formularwüsten, wo fachlich sinnvoll
- ein Schritt pro Bildschirm, wenn eine Eingabe Konzentration braucht
- bestehende Spielzüge aus der früheren Ideenfinderin wiederverwenden statt neue beliebige Gimmicks erfinden
- Bewegung leise einsetzen (`fade`, `bump`, `pulse`), nie blinkend oder drängend
- keine Fortschrittsbalken, die Druck erzeugen
- kein Spielzug darf die Frau bewerten

Die UI ist eine Darstellungsschicht. Daten/API/Fachlogik bleiben unverändert.

## UI-Abnahme vor Pilot

Claude Code muss jede Seite, die eine Pilotperson sieht, vor Übergabe prüfen auf:

1. Desktop
2. 375 px Mobilansicht
3. Lesbarkeit ohne Zoomen
4. verständliche Sprache
5. sinnvolle Farb- und Kontrastwirkung
6. keine abgeschnittenen Texte/Buttons
7. kein horizontaler Scroll
8. keine rohe Entwickler-/Admin-Optik im Nutzerbereich

Wenn eine Seite funktional ist, aber diese Kriterien nicht erfüllt, ist sie **NICHT pilotbereit**.

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

Der Fingerprint ist intern. Die Pilotin soll keine technische Versionsliste auf ihrer normalen Oberfläche sehen müssen.

## D. Einfacher Feedback-Abschluss

Nach Abschluss der Strecke die fünf festgelegten Pilotfragen aus `forschung/2026-09-15-pilotplan-0.1.md` anzeigen und Antworten speichern.

Wichtig:
- Wortlaut nicht eigenmächtig verändern
- keine Bewertungsskala erfinden
- keine automatische Interpretation der Antworten
- Antworten bleiben Aussagen der Testperson
- Darstellung wie eine ruhige Gesprächs-/Kartenstrecke, nicht wie ein Behördenformular

## E. „Problem melden“-Möglichkeit

Ein sehr einfacher Button / Link innerhalb des Piloten:

> „Hier stimmt etwas nicht“

Möglichst mit:
- aktuellem Bereich / Seite automatisch referenziert
- freiem Text der Testperson
- Zeitstempel
- Versions-Fingerprint

Nicht automatisch psychologisch oder fachlich klassifizieren.

Die Nutzerin sieht nur die verständliche Meldemöglichkeit, nicht die technischen Metadaten.

## F. Pilotübersicht für Petra

Eine schlichte interne Übersicht, ohne neue Auswertungs-KI:

Pro Person sichtbar:
- Testerrolle preflight / pilot
- begonnen / letzter Stand / abgeschlossen
- technische Fehlerhinweise
- abgegebene Pilot-Abschlussantworten
- verwendete Versionen

Keine Rankings von Frauen. Keine Scores. Keine automatische „Erfolgsquote“ über persönliche Inhalte.

Die interne Petra-Oberfläche darf nüchterner sein als die Nutzeroberfläche, muss aber ebenfalls lesbar und verständlich bleiben.

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
- neue Designwelt neben dem bestehenden A+-/UI-Gesetz

---

# 3. Dossier

Die bereits beauftragte **Beispiel-Dossier-Vorschau** darf gebaut werden.

Für echte Pilotinnen gilt zunächst:

> Das endgültige Dossier darf manuell nachgearbeitet werden.

Claude Code soll deshalb jetzt keine eigene Dossier-Fachlogik erfinden.

Er darf vorhandene freigegebene Daten sichtbar machen, aber fehlende Begründungen oder Handlungsempfehlungen nicht selbst ergänzen.

CONTENT GAP statt Improvisation.

Auch das Dossier muss das UI-Gesetz erfüllen: reichhaltiger Inhalt, aber klare Navigation, angenehme Lesbarkeit, Farbe, Karten/visuelle Einstiege und keine Textwand ohne Orientierung.

---

# 4. Akzeptanzkriterien

Pilot-Modus 0.1 ist technisch UND gestalterisch ausreichend, wenn:

1. nur eingeladene Testpersonen teilnehmen können
2. preflight und pilot intern unterscheidbar sind
3. jeder Lauf einen Versions-Fingerprint hat
4. die fünf Pilotfragen am Ende unverändert beantwortet werden können
5. Probleme mit Seite + Version gemeldet werden können
6. Petra den Testfortschritt überblicken kann
7. Testdaten sauber gelöscht / zurückgesetzt werden können
8. keine neue Fachlogik entstanden ist
9. alle Nutzerseiten auf 375 px ohne Zoomen gut lesbar sind
10. Fließtext angenehm groß und kontrastreich ist
11. die Oberfläche die helle A+-Farbwelt sichtbar nutzt
12. die Sprache für eine fachfremde Pilotin verständlich ist
13. keine rohe Formular-/Tabellen-/Entwickleroptik die Nutzerreise dominiert
14. das UI-Gesetz sichtbar umgesetzt ist
15. Joscha/Nicole/Nadja nicht erklären müssen, was ein Button oder eine Seite bedeutet

---

# 5. Erwartete Rückmeldung von Claude Code

Bitte nur melden:

- was umgesetzt wurde
- geänderte / neue Dateien
- Migrationen
- Tests und Ergebnis
- welche bereits bestehenden Komponenten wiederverwendet wurden
- UI-Prüfung Desktop: bestanden/nicht bestanden
- UI-Prüfung 375 px: bestanden/nicht bestanden
- welche sichtbaren Seiten geprüft wurden
- offene TECH GAPS
- offene CONTENT / METHOD / DATA GAPS
- ausdrücklich: welche Teile NICHT gebaut wurden
