# MORE IS YOURS – TECH-CHECK OPTION GENOME 0.3

**Stand:** 15.09.2026, mittags  
**Quelle:** Rückmeldung von Claude Code nach Umsetzung des BUILD-READY-Briefs `build-briefs/2026-09-15-option-genome-framework-0.3.md`  
**Status:** TECHNISCH UMGESETZT / 5 CONTENT GAPS ans Option Genome Lab

## Technischer Stand

Claude Code hat das freigegebene Option-Genome-Framework 0.3 technisch umgesetzt.

Wesentliche Änderungen:
- Schema von 0.1 auf 0.2
- drei Ebenen technisch vorbereitet: Familie, Variante, Rolle
- `Wer zahlt – und wofür?` technisch übernommen
- `Wie entsteht Zugang zum Einkommen?` technisch übernommen
- Einkommensentwicklung von Skalierbarkeit getrennt
- Kostenstruktur von Marge/Überschuss getrennt
- Absicherung ergänzt
- rechtliche Besonderheiten ergänzt
- alte Feldnamen bleiben lesbar
- bestehende Daten wurden nicht überschrieben

## Datenerhalt

Laut Claude-Code-Prüfung:
- 414 alte Werte unverändert übernommen
- 11 belegte Kernfelder vorher und nachher erhalten
- neue Felder zunächst offen
- Migration ist wiederholbar, ohne beim zweiten Lauf erneut etwas zu verändern

## Tests

- 99 Tests: 98 grün, 1 bewusst übersprungen
- JSON-Schema-Prüfung: 0 Fehler bei 10 Optionen
- Live-Prüfung Optionen: 22/22 grün
- Live-Prüfung normaler Dienstag: 11/11 grün

## Bekannte technische Hinweise

- alte und neue Feldnamen können vorübergehend gemeinsam in gespeicherten alten Matching-Befunden vorkommen; Aliaslogik hält sie lesbar
- nach neuer Optionen-Version ist ein neuer Matchinglauf sinnvoll
- der Dienstag zeigt `nicht anwendbar` noch nicht als eigene Zeile; aktuell nutzt noch keine Option diesen Wert
- Kernfelder f31–f37 und Ausbau-Felder f31–f50 haben gleiche Nummern in getrennten Bereichen; technisch sauber, beim Lesen potenziell verwirrend

## CONTENT GAPS ans Option Genome Lab

1. Ebenen-Zuordnung: Familie / Variante / Rolle für Startoptionen und bestehende Bibliothekseinträge
2. Grundfrage 3 `Wie wird geliefert?`: aktuelles f31 ist technisch als Anteil/Stufe angelegt; fachlich fehlt die klare Antwort auf das Wie
3. Verhältnis von `f37_rechtliche_besonderheiten` zu altem `f0b_rechtliche_huerde` und `ausbau.f41_regulatorik`
4. Ist `kategorie` 1–7 dasselbe wie Optionsfamilie? Claude hat es bewusst nicht gleichgesetzt
5. Entspricht `f27_kapitalbedarf_wachstum` dem Framework-Feld `Kapitalbedarf`?

## Regel

Claude Code entscheidet diese fünf Punkte nicht selbst. Sie gehen zurück ins Option Genome Lab.
