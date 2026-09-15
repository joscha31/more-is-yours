# BUILD BRIEF – OPTION GENOME FRAMEWORK 0.4

**Stand:** 15.09.2026  
**Status:** BUILD READY  
**Ziel:** kleine technische Korrektur nach Petras Freigabe

## Verbindliche Dateien

- `master/2026-09-14-more-is-yours-gesamt-master-3.0.md` – MASTER
- `entscheidungen/2026-09-15-option-genome-struktur.md` – PETRA APPROVED
- `entscheidungen/2026-09-15-option-genome-content-gaps-claude-bericht.md` – PETRA APPROVED
- `forschung/Option-Genome-Framework-0.4.md` – PETRA APPROVED
- `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md` – PETRA APPROVED

## Ziel

Die bereits umgesetzte Option-Genome-Technik wird nur an drei Stellen korrigiert.

Kein Neubau.

---

## 1. f31, f32 und f33 als beschreibende Textfelder

Diese Felder sollen beschreiben, was tatsächlich passiert:

- `f31_leistungserbringung_lieferung`
- `f32_recherche_vorbereitung`
- `f33_leerlauf_warten`

Sie sollen nicht mehr nur eine Stufe wie hoch / mittel / niedrig speichern.

Beispiele:
- Lieferung: vor Ort, per Zoom, Download, Plattform, laufende Arbeitsleistung
- Vorbereitung: Recherche, Materialvorbereitung, Einarbeitung, Vorproduktion
- Leerlauf: Warten auf Aufträge, Freigaben, Verkäufe oder kein besonderes Leerlaufrisiko

Wichtig:
- bestehende alte Werte nicht löschen
- wenn nötig migrationssicher lesbar halten
- keine neuen Inhalte selbst eintragen
- Grundfrage 3 „Wie wird geliefert?“ soll daraus verständlich beantwortet werden können

---

## 2. Rechtliche Informationen nur noch an einer Hauptstelle pflegen

Hauptfeld für neue fachliche Inhalte:

- `f37_rechtliche_besonderheiten`

Altbestände:

- `f0b_rechtliche_huerde`
- `ausbau.f41_regulatorik`

Regel:
- alte Daten bleiben lesbar
- keine alten Daten löschen
- neue Inhalte nicht parallel in mehrere Felder schreiben
- neue fachliche Rechtsinhalte gehören in `f37_rechtliche_besonderheiten`
- Alt-Felder technisch als Legacy/Altbestand behandeln

---

## 3. f27 klar als Kapitalbedarf beim Wachstum benennen

`f6_einstiegskosten` bedeutet:

> Was kostet der Start?

`f27_kapitalbedarf_wachstum` bedeutet:

> Braucht die Frau später zusätzlich Geld, wenn die Option wächst?

Bitte Beschriftung, Beschreibung und Framework-Zuordnung entsprechend eindeutig halten.

Keine Zusammenlegung von f6 und f27.

---

## Bereits geklärt – nichts neu entscheiden

- `Teilzeit / Nebenjob` gehört zur Optionsfamilie `Anstellung`.
- Kategorien 1–7 sind nur Ordnung und nicht automatisch Optionsfamilien.

Claude Code darf daraus keine weiteren Familienzuordnungen für andere Optionen ableiten.

---

## Claude Code darf NICHT

- wirtschaftliche Inhalte erfinden
- neue Zahlen einsetzen
- neue Fachregeln ergänzen
- andere Startoptionen eigenmächtig einer Familie zuordnen
- alte Daten löschen
- Match-Prozente einführen
- Tagesabläufe erfinden

Wenn bei der Umsetzung neue fachliche Fragen entstehen:

> **CONTENT GAP**

und zurück an das Option Genome Lab.

---

## Erwartete Rückmeldung

Bitte danach verständlich berichten:

1. Was wurde geändert?
2. Wie wurden alte Daten erhalten?
3. Sind f31–f33 jetzt beschreibend nutzbar?
4. Wie werden die alten Rechtsfelder behandelt?
5. Ist f27 eindeutig als Wachstumskapital gekennzeichnet?
6. Welche Tests wurden durchgeführt?
7. Sind alle Tests erfolgreich?
8. Gibt es noch ein CONTENT GAP?
