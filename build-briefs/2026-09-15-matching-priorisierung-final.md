# BUILD BRIEF – Matching-Priorisierung final

**Stand:** 15.09.2026  
**Status:** BUILD READY  
**Bereich:** B3 Matcher / Vorschlags-Ebene

## Verbindliche Fachgrundlagen

- `master/2026-09-14-more-is-yours-gesamt-master-3.0.md`
- `entscheidungen/2026-09-15-matching-vorschlaege-priorisierung.md`
- `entscheidungen/2026-09-15-matching-priorisierung-final.md`
- `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md`
- `forschung/Economic-Profile-Matching-Rule-Library-0.2.md`

Diese Fassung ersetzt die offenen Lesarten der ersten Vorschlagsimplementierung.

---

# 1. Ziel

Die Nutzerin erhält aus B3 eine **begründete, priorisierte Auswahl wirtschaftlicher Möglichkeiten**.

Mehrere Wege dürfen gemeinsam vorne liegen.

Keine Prozentwerte, keine Gesamtnote, kein versteckter Score, keine universelle starre Kriterienrangfolge.

---

# 2. Bestehende Einzelbefunde erhalten

Weiterhin:

- passt
- konflikt
- unbekannt
- testen

Diese bleiben Daten-/Befundebene.

Die neue Vorschlags-Ebene sitzt darüber.

---

# 3. Gates

Vor jeder Priorisierung prüfen:

- harte Grenze
- aktuelle Grenze
- verbindlicher wirtschaftlicher Mindestbedarf mit Zeitbezug
- zwingende Voraussetzung

Nur belastbar bestätigte Gates verwenden.

Ein Gate darf nie wegkompensiert werden.

Ein Wunschwert oder langfristiges Ziel ist kein Gate.

---

# 4. Szenario-Rolle ergänzen

Für jede Option kann im Matching-Snapshot eine vorgeschlagene Rolle geführt werden:

- hauptweg
- nebenweg
- uebergang
- testweg

Wichtig:

- Rolle ist relationale Matchinginformation
- nicht als feste Eigenschaft der Option speichern
- nicht als dauerhafte Eigenschaft der Frau speichern
- Vorschlag/Hypothese, von der Frau korrigierbar

Wenn dafür eine kleine neue Datenstruktur nötig ist, darf sie im Matching-Snapshot ergänzt werden.

Keine große neue Datenarchitektur.

---

# 5. Starre Kriterienrangfolge entfernen

Die aktuell implementierte universelle Vergleichsfolge

- starke Präferenz
- Ziele
- Voraussetzungen
- Wirtschaft
- Offenheit
- Evidenz

DARF NICHT mehr als globale Rankinglogik verwendet werden.

Es gibt keine allgemeine Regel „Präferenz schlägt Ziel“ oder „Ziel schlägt Wirtschaft“.

---

# 6. Individuelle entscheidende Faktoren

Die Vorschlags-Ebene nutzt nur Faktoren, die für die jeweilige Frau / Rolle / Situation tatsächlich entscheidungsrelevant sind.

Dazu dürfen gehören:

- bestätigte starke Präferenzen
- bestätigte Präferenzen
- wirtschaftliche Mindestbedingungen
- kurz-/langfristige Ziele
- gewünschter Alltag
- Planbarkeit
- Skalierbarkeit
- Zeitbindung
- Menschenkontakt
- Verkauf / Sichtbarkeit / Akquise
- Ort / Mobilität
- Absicherung
- Ressourcen / Voraussetzungen
- Wachstumsrolle

Keine neue universelle Gewichtung erfinden.

---

# 7. Qualitative Priorisierung ohne Score

Vergleichsregel:

Option A darf vor Option B stehen, wenn:

1. kein Gate gegen A spricht,
2. A bei mindestens einem entscheidenden Faktor klar besser trägt,
3. A dafür keinen gleich schweren oder schwereren Nachteil bei einem anderen entscheidenden Faktor erzeugt.

Wenn beide unterschiedliche Stärken/Nachteile haben und keine klar dominiert:

> gleiche Priorität

Keine künstliche Siegerin.

Diese Logik ist qualitativ, nicht numerisch.

---

# 8. `gemischt` korrigieren

`gemischt` darf NICHT wie `nichts` behandelt werden.

`gemischt` = echter Trade-off.

Der Trade-off muss sichtbar bleiben und kann dazu führen, dass Optionen gleichrangig bleiben.

---

# 9. Evidenz aus Ranking entfernen

Evidenz darf NICHT als Passungsbonus oder Rankingfaktor verwendet werden.

Evidenz steuert nur die Sicherheit der Aussage.

User-facing:

- gut belegt
- teilweise belegt
- vorläufig / noch zu prüfen

Keine Prozentwerte.

---

# 10. Fehlendes Optionswissen

Verbindliche RC-2-Regel:

Wenn Optionswissen fehlt:

- kein persönlicher Realitätscheck
- nächster Schritt = Recherche / Option Genome
- Option darf als Vorschlag sichtbar bleiben, wenn andere Gründe sie tragen
- fehlendes Wissen begrenzt Sicherheit

Ein `testen`-Befund mit ausschließlich offenen Optionsfeldern darf NICHT allein die Gruppe `pruefenswert` auslösen.

---

# 11. Suchraum

`ausgeschlossen` ist nicht automatisch harte Grenze.

Abbilden:

- derzeit nicht prüfen → eigener Nutzerinnenbereich / kein aktiver Top-Vorschlag
- harte Grenze nur, wenn entsprechend bestätigt

Keine stille Hochstufung.

---

# 12. Nutzerinnen-Ausgabe

Keine erzwungene Plätze-1-bis-10-Liste.

Empfohlene Bereiche:

## Deine stärksten Möglichkeiten
Ein oder mehrere gleichrangige Top-Kandidaten.

## Weitere sinnvolle Möglichkeiten
Interessant, aber weniger klar oder mit mehr Klärungsbedarf.

## Als Neben-/Übergangsweg interessant
Für ergänzende / zeitlich begrenzte Rolle.

## Aktuell zurückstellen
Mit konkretem Gate-/Konfliktgrund.

## Von dir derzeit ausgeschlossen
Explizit zurückgestellte Optionen.

Je Karte:

- Weg / Variante / ggf. Tätigkeit
- vorgeschlagene Rolle
- Warum interessant
- Was passt stark
- Was reibt sich / Trade-off
- Was noch offen ist
- Sicherheit der Aussage
- nächster sinnvoller Schritt

---

# 13. Nächster Schritt

Je Option genau einen priorisierten nächsten Klärungsschritt ableiten:

- Recherche
- konkrete Variante wählen
- konkrete Tätigkeit/Rolle ergänzen
- Profilaussage bestätigen
- Realitätscheck
- Bewerbung/Gespräch
- kleines Angebot
- Arbeitsprobe
- Zahlencheck

Nicht mehrere Tests gleichzeitig.

---

# 14. Quality Tests ergänzen

Mindestens folgende Fälle:

1. harte Grenze bleibt Gate trotz vieler Passungen
2. aktuelle Grenze bleibt Gate
3. Wunschwert wird nicht als Mindestbedarf behandelt
4. bestätigter Mindestbedarf + strukturell unvereinbare Option → Gate
5. Mindestbedarf + fehlendes Optionswissen → Recherche, kein Konflikt erfinden
6. zwei Optionen mit unterschiedlichen Trade-offs → gleichrangige Top-Kandidaten
7. `gemischt` bleibt Trade-off und wird nicht zu `nichts`
8. Evidenzstärke verändert Sicherheit, nicht Rang
9. Ressource vorhanden ≠ Wunsch
10. hilfreiche Voraussetzung fehlt ≠ Konflikt
11. `ausgeschlossen` im Suchraum ≠ automatisch harte Grenze
12. Optionswissen fehlt → kein Realitätscheck der Frau
13. Szenario-Rolle wird im Matching-Snapshot geführt, nicht in Option/Profile
14. kein Prozent / Score / Gesamtnote
15. keine erzwungene Einzel-Siegerin

---

# 15. Darf NICHT

- neue Fachlogik erfinden
- numerischen Score einführen
- starre universelle Kriterienhierarchie behalten
- positive Befunde zählen
- Evidenz als Rankingbonus nutzen
- Trade-offs glattbügeln
- Rolle als feste Optionseigenschaft speichern
- Suchraum-Ausschluss als Grenze interpretieren
- fehlendes Optionswissen durch Test der Frau ersetzen
- die Frau zu einer Entscheidung drängen

Wenn etwas fachlich fehlt:

> CONTENT GAP

---

# 16. Erwartete Rückmeldung

1. geänderte Dateien
2. Datenstruktur für Szenario-Rolle
3. wie Gates umgesetzt sind
4. wie qualitative Gleichrangigkeit / Trade-offs umgesetzt sind
5. wie starre Kriterienreihenfolge entfernt wurde
6. wie Evidenz vom Ranking getrennt wurde
7. wie `gemischt` behandelt wird
8. wie Suchraum-Ausschlüsse behandelt werden
9. neue Tests und Ergebnis
10. CONTENT GAPs

Keine weitere Fachentscheidung selbst treffen.
