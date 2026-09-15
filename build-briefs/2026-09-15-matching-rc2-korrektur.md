# BUILD BRIEF – Matching RC-2 Korrektur

**Stand:** 15.09.2026  
**Status:** BUILD READY  
**Bereich:** B3 Matching / Vorschlags-Ebene

## Fachliche Grundlage

Verbindlich:
- `master/2026-09-14-more-is-yours-gesamt-master-3.0.md`
- `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md` – PETRA APPROVED, insbesondere RC-2
- `entscheidungen/2026-09-15-matching-vorschlaege-priorisierung.md` – PETRA APPROVED

Review:
- `forschung/Economic-Profile-Matching-Priorisierung-Review-0.1.md`

## Problem

Im aktuellen `lib/vorschlaege.js` kann ein Weg bereits dann in die Gruppe `pruefenswert` gelangen, wenn ein `testen`-Befund existiert, auch wenn `optionswissenFehlt(...) === true` gilt.

Damit kann fehlendes Wissen über den Weg fälschlich als persönliche Testfrage der Frau behandelt werden.

Das widerspricht RC-2:

> Wenn Wissen über die Option fehlt, wird nicht die Frau getestet. Dann folgt Recherche / Option Genome.

## Ziel

Ein `testen`-Befund darf nur dann als persönlicher Realitätscheck und als Grundlage für `pruefenswert` wirken, wenn das betreffende Optionsfeld ausreichend belegt ist.

Wenn alle offenen Testbefunde eines Weges ausschließlich auf fehlendem Optionswissen beruhen:
- kein persönlicher Realitätscheck
- Klärungsweg = Recherche / Option Genome
- nicht allein deshalb `pruefenswert`

## Darf

- `lib/vorschlaege.js` gezielt korrigieren
- Tests ergänzen/anpassen
- Text für Recherchebedarf präzisieren

## Darf NICHT

- die aktuelle universelle Rangreihenfolge fachlich weiterentwickeln
- neue Priorisierungsmethodik erfinden
- Szenario-Rolle lösen
- Suchraum-Gap lösen
- wirtschaftliche Mindestbedarfslogik neu definieren
- Option-Genome-Inhalte erfinden
- Persona verändern

Diese Punkte bleiben bis Petra-Freigabe offen.

## Erwartete Tests

Mindestens:
1. Weg mit ausschließlich `testen` auf offenem Optionsfeld wird nicht wegen dieses Befunds persönlich `pruefenswert`.
2. Nächster Schritt ist Recherche, nicht Realitätscheck.
3. Weg mit echtem `testen` auf belegtem Optionsfeld kann weiter `pruefenswert` sein.
4. Harte/aktuelle Grenzen bleiben unverändert.
5. bestehende B3-Regeln bleiben grün.

## Rückmeldung

Claude berichtet:
1. geänderte Dateien
2. genaue neue Bedingung
3. Tests
4. ob Nebenwirkungen auf bestehende Vorschlagslogik entstanden sind
5. CONTENT GAPs – falls neue auftauchen, nicht selbst lösen
