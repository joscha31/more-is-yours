# BUILD BRIEF – OPTION GENOME FRAMEWORK 0.5

**Stand:** 15.09.2026  
**Status:** BUILD READY  
**Ziel:** Zwei freigegebene Fachregeln technisch sauber ergänzen, ohne neue Fachlogik zu erfinden.

## Verbindliche Quellen

- `master/2026-09-14-more-is-yours-gesamt-master-3.0.md`
- `entscheidungen/2026-09-15-option-genome-struktur.md`
- `entscheidungen/2026-09-15-option-genome-content-gaps-claude-bericht.md`
- `entscheidungen/2026-09-15-option-genome-zoom-und-mechaniken.md`
- `forschung/Option-Genome-Framework-0.5.md`
- `forschung/Economic-Profile-Matching-Rule-Library-0.2.md`
- `entscheidungen/2026-09-15-matching-priorisierung-final.md`

## Ziel 1 – Erst hineinzoomen, dann urteilen

Wenn ein für die Frau entscheidender Faktor auf der aktuellen Ebene der Option nicht eindeutig belegt ist, darf die Technik daraus nicht automatisch `passt` oder `konflikt` machen.

Technisch soll sichtbar werden können:

- aktuelle betrachtete Ebene: Familie / Variante / Rolle
- für welchen entscheidenden Faktor die Ebene zu grob ist
- dass zuerst eine konkretere Variante/Rolle oder weitere Optionsrecherche nötig ist

Wichtig:

- fehlendes Optionswissen ≠ persönlicher Realitätscheck
- kein automatisches Erraten von Varianten/Rollen
- kein künstlicher Konflikt
- kein künstliches `passt`

Wenn die vorhandene Technik diesen Fall bereits sauber als `unbekannt` + Optionsrecherche abbildet, bitte möglichst wenig ändern und nur die nötige Zoom-/Routing-Information ergänzen.

## Ziel 2 – Option und Einnahmemechanik getrennt halten

Die bestehende technische Mechaniken-Struktur soll weiterverwendet werden.

Keine neue große Datenebene bauen, wenn sie nicht nötig ist.

Regeln:

- Option = verständliches wirtschaftliches Modell
- Mechaniken = Hintergrundbeschreibung, wie Geld entsteht
- Mischmodelle dürfen mehrere bestehende Optionen/Mechaniken kombinieren
- nicht automatisch für jede Kombination neue Optionen erzeugen

Bitte prüfen, ob die bestehende `mechaniken`-Struktur dafür bereits reicht.

Wenn ja: keine unnötige Migration.

Wenn nein: CONTENT GAP / TECH GAP berichten, nicht selbst fachlich erweitern.

## Nicht tun

Claude Code darf nicht:

- neue Optionsfamilien definieren
- Varianten oder Rollen fachlich zuordnen
- neue Einnahmemechaniken erfinden
- neue Matchinggewichte erfinden
- Match-Prozente einführen
- aus fehlenden Optionsdaten persönliche Tests erzeugen
- alte Daten löschen
- Mischmodelle automatisch als neue Optionsdatensätze anlegen

## Tests

Mindestens testen:

1. entscheidender Faktor auf Familienebene variabel → kein automatisches `passt`/`konflikt`
2. vorhandene Variante mit belegtem Wert → tieferer Befund möglich
3. fehlendes Optionswissen → Recherche-/Zoom-Routing, kein Reality Check der Frau
4. mehrere Mechaniken an einer Option bleiben möglich
5. Mischmodell erzeugt nicht automatisch neue Option
6. alte Daten bleiben lesbar
7. bestehende Matchingtests bleiben grün

## Rückmeldung

Bitte danach verständlich berichten:

1. Was wurde geändert?
2. Musste das Datenmodell geändert werden?
3. Wie erkennt das System künftig: „erst hineinzoomen“?
4. Wie werden Mechaniken behandelt?
5. Wie bleiben alte Daten erhalten?
6. Welche Tests wurden gemacht?
7. Sind alle Tests grün?
8. Gibt es CONTENT GAP oder TECH GAP?
