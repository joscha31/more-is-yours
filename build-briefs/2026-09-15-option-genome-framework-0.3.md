# BUILD BRIEF – OPTION GENOME FRAMEWORK 0.3

**Stand:** 15.09.2026  
**Status:** BUILD READY  
**Fachliche Freigabe:** PETRA APPROVED

## Geltende Dateien

1. `entscheidungen/2026-09-15-option-genome-struktur.md` — **PETRA APPROVED**
2. `forschung/Option-Genome-Framework-0.3.md` — **PETRA APPROVED**
3. `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md` — **PETRA APPROVED**
4. `master/2026-09-14-more-is-yours-gesamt-master-3.0.md` — **MASTER / aktuell**

Bei Widerspruch gelten die späteren PETRA-APPROVED-Entscheidungen.

## Ziel

Die bestehende Option-Genome-Technik so anpassen, dass die freigegebene Fachstruktur 0.3 abgebildet werden kann.

## Umsetzen

- drei Ebenen fachlich abbilden: Optionsfamilie, Optionsvariante, Rolle/konkrete Tätigkeit
- bisheriges Feld `Wofür zahlt der Kunde?` fachlich zu `Wer zahlt – und wofür?` erweitern bzw. migrationssicher umbenennen
- bisherige `Kundengewinnung` fachlich als `Wie entsteht Zugang zum Einkommen?` abbilden
- Einkommensentwicklung getrennt von Skalierbarkeit speichern/darstellen
- Einkommenszahlen dürfen `unbekannt`, `stark kontextabhängig` oder `nicht sinnvoll allgemein quantifizierbar` sein
- Kostenstruktur und Marge/Überschuss getrennt abbilden; `nicht anwendbar` erlauben
- neues Feld `Absicherung / soziale Absicherung`
- neues Feld `rechtliche / regulatorische Besonderheiten`
- die vier Grundfragen einer Option sichtbar abbildbar machen:
  1. Wer zahlt?
  2. Wofür wird gezahlt?
  3. Wie wird geliefert?
  4. Wie entsteht Zugang zum Zahler?
- bereits freigegebene Dienstag-Felder beibehalten:
  - Leistungserbringung/Lieferung
  - Recherche/Vorbereitung
  - Leerlauf/Warten
- bestehende Daten möglichst migrationssicher erhalten

## Nicht tun

Claude Code darf nicht:

- neue wirtschaftliche Inhalte erfinden
- Einkommenswerte schätzen
- neue Fachregeln ergänzen
- Match-Prozente einführen
- den normalen Dienstag mit erfundenen Szenen füllen
- die drei Ebenen eigenmächtig anders definieren
- rechtliche oder Versicherungsberatung erzeugen
- bestehende Goldstandard-Inhalte inhaltlich umschreiben

Wenn die vorhandene technische Struktur eine fachliche Entscheidung erzwingt, die hier nicht beschrieben ist:

> **CONTENT GAP**

und stoppen, statt selbst zu entscheiden.

## Erwartete Rückmeldung

Claude Code soll nach Umsetzung knapp berichten:

1. welche Dateien / Migrationen geändert wurden
2. welche Felder neu oder umbenannt wurden
3. wie bestehende Daten erhalten wurden
4. ob es offene technische Risiken gibt
5. ob ein CONTENT GAP entstanden ist
6. welche Tests ausgeführt wurden und mit welchem Ergebnis

Kein allgemeiner Roman. Nur Änderungen, Tests, offene Punkte.
