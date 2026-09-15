# Bericht Baupaket B4 — Der normale Dienstag, technisch vorbereitet (Ilse 0.1, 14.09.2026 nachts)

Kontext für dich: Gesamt-Master 3.0 §14 („Er wird aus belegten Optionsdaten erzeugt. Nicht aus Fantasie.“), §23 B4, §28. Claude Code hat den Dienstag als **reine Übersetzung belegter Felder** gebaut — kein Modellaufruf, keine Uhrzeiten, kein erfundener Tagesablauf.

## Was gebaut ist

- **`lib/dienstag.js`:** die zwölf Bausteine des Masters auf die Felder des Option Genome gelegt: Kundenkontakt → f13 · Akquise → f15 · Sichtbarkeit → f16 · Verkauf → f14 · Inhalte → f17 · Verwaltung → f18 · Termine → f20 · Team → f22 · Ort → f21. **Lieferung, Recherche, Leerlauf haben im Genome kein Feld** → kommen immer als „kein Feld“ zurück (CONTENT GAP, siehe unten). Rahmen: typische Tätigkeiten (f12), Zeitbindung (f19).
- Je Baustein ein Stand: **belegt** (Wert in Worten, Erklärung, Herkunft Fakt/Spanne/Schätzung/Erfahrungswert, Vertrauen, Quelle mit Datum) · **offen** (Lücke, keine Vermutung) · **kein Feld**. Ein Weg ohne belegten Baustein ist „nicht tragfähig“ — die Seite zeigt dann keinen Dienstag, sondern sagt, er wäre erfunden.
- `GET ?was=dienstag[&weg=…]`, `dienstag.html` „Zeig mir meinen Dienstag“, 5 Tests (75/75 im Haus), Live-Probe 12/12 — die Live-Antwort ist byte-gleich mit der lokalen Berechnung. Keine Migration, keine Kosten.

## Stand der Daten heute

4 von 10 Wegen haben mindestens einen belegten Baustein; die meisten Kacheln sind „offen“. Das ist ehrlich und genau der Hebel fürs Option Genome Lab.

## Offene Annahmen — bitte prüfen

1. Die Zuordnung Baustein → Feld (oben). Versteht das Lab ein Feld anders, ändert Claude Code nur die Tabelle.
2. „Tragfähig“ = mindestens ein belegter Baustein (technischer Schwellenwert). Sollen es mehr sein?
3. Wortlaut der Fragen je Baustein: Küchentisch-Deutsch, Hedda liest noch gegen.

## CONTENT GAP (kleinstmögliche Entscheidung)

- **Eine Goldstandard-Option** (Teilzeit/Nebenjob) mit belegten Feldern f13–f22 → der erste vollständige Dienstag steht.
- **Drei fehlende Felder** im Schema: Lieferung/Erbringung · Recherche/Vorbereitung · Leerlauf/Warten. Entscheidung: ins Schema aufnehmen (Schema-Version hoch, Claude Code zieht die Namen nach) — oder der Dienstag bleibt bei neun Bausteinen.

## Prüffragen an dich

- Reicht „belegtes Feld = Baustein in Worten“ als Dienstag 0.1, oder erwartet ihr eine erzählte Tagesform? (Der Master sagt: aus Optionsdaten, Unsicherheit sichtbar — so ist es gebaut.)
- Sollen die drei fehlenden Bausteine Felder werden?
