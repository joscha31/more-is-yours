# BERICHT FÜR CHATGPT – OPTION GENOME FRAMEWORK 0.3 TECHNISCH UMGESETZT

**Stand:** 15.09.2026, mittags  
**Status:** IMPLEMENTED / geprüft  
**Quelle:** Rückmeldung von Claude Code nach Umsetzung des BUILD-READY-Briefs 0.3

## Kurzfassung

Claude Code hat das Option-Genome-Framework 0.3 technisch umgesetzt.

Wichtig:

- bestehende Optionsdaten wurden erhalten
- keine Fachinhalte oder Zahlen wurden erfunden
- die drei Ebenen Familie / Variante / Rolle wurden technisch vorbereitet
- neue Felder für Einkommensentwicklung, Marge, Absicherung und rechtliche Besonderheiten wurden ergänzt
- alte Feldnamen bleiben lesbar
- Live-Prüfungen waren erfolgreich

## Technisch geändert

Unter anderem:

- `lib/option-genome.schema.json`: Schema 0.1 → 0.2
- `lib/optionen.json`: Datei-Version 2026-09-15.1 → 2026-09-15.2
- `lib/optionen.js`: alte Feldnamen bleiben lesbar; Ebenen und Sonderwerte werden verstanden
- `lib/matcher.js` und `lib/realitaetscheck.js`: alte und neue Feldnamen werden sauber gelesen
- `lib/dienstag.js`: `nicht anwendbar` wird gesondert behandelt
- Oberfläche zeigt Ebenen und die vier Grundfragen
- Migration und Tests wurden ergänzt

## Neue Struktur

Neu vorbereitet:

- `ebenen.familie`
- `ebenen.variante`
- `ebenen.rolle`

Umbenannt:

- `f3_wofuer_zahlt_der_kunde` → `f3_wer_zahlt_und_wofuer`
- `f29_kundengewinnung` → `f29_zugang_zum_einkommen`
- `f26_kostenstruktur_marge` → `f26_kostenstruktur`

Neu:

- `f34_einkommensentwicklung`
- `f35_marge_ueberschuss`
- `f36_absicherung`
- `f37_rechtliche_besonderheiten`

Die drei Dienstag-Felder blieben zunächst technisch als Stufenfelder:

- `f31_leistungserbringung_lieferung`
- `f32_recherche_vorbereitung`
- `f33_leerlauf_warten`

Genau daraus entstand später ein fachlicher Korrekturbedarf für Framework 0.4.

## Datenerhalt

Claude Code meldet:

- 414 alte Werte unverändert übernommen
- belegte Kernfelder vor und nach Migration: 11 → 11
- zweiter Migrationslauf ändert nichts
- kein vorhandener Feldtext wurde umgeschrieben

## Tests

Gemeldeter Stand:

- `node --test`: 99 Tests, davon 98 grün und 1 bewusst übersprungen
- Migration: 414 Werte unverändert, 0 Fehler
- JSON-Schema-Prüfung: 0 Fehler bei 10 Optionen
- Live-Prüfung `probe-optionen`: 22 / 22 grün
- Live-Prüfung `probe-dienstag`: 11 / 11 grün

## Von Claude korrekt zurückgegebene CONTENT GAPs

1. Ebenen-Zuordnung der Startoptionen und Varianten
2. Grundfrage 3 „Wie wird geliefert?“ war technisch noch nicht sauber abbildbar, weil f31 nur eine Stufe war
3. Verhältnis des neuen Rechtsfelds zu alten Rechtsfeldern
4. Frage, ob die Kategorien 1–7 dasselbe wie Optionsfamilien sind
5. Bedeutung von `f27_kapitalbedarf_wachstum`

## Danach fachlich geklärt

Durch bestehende und am 15.09.2026 bestätigte Entscheidungen gilt:

- Teilzeit/Nebenjob → Familie `Anstellung`
- Kategorien 1–7 bleiben nur Ordnung, nicht Optionsfamilien
- f31–f33 werden beschreibende Textfelder
- neue rechtliche Inhalte werden nur noch in f37 gepflegt; alte Felder bleiben lesbarer Altbestand
- f27 bedeutet Kapitalbedarf beim Wachstum; f6 bleibt Einstiegskosten

Maßgebliche Folgeentscheidung:

`entscheidungen/2026-09-15-option-genome-content-gaps-claude-bericht.md`

Aktuelles Fachframework danach:

`forschung/Option-Genome-Framework-0.4.md`
