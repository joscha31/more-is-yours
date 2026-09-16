# MORE IS YOURS – BUILD BRIEF: Schritt 1 · Rohmaterial-Sammler 0.1

**Stand:** 16.09.2026  
**Status:** PETRA APPROVED / BUILD READY  
**Zweck:** Einen kleinen, eigenständig nutzbaren ersten Baustein bauen, mit dem Petra, Nicole und Anne strukturiert erfassen können, was sie mitbringen, behalten wollen, nicht mehr wollen und woraus später Storybank, Positionierung, Angebot und Daily Business Companion entstehen können.

## Grundsatz

Nicht für jeden Schritt einen eigenen „Agenten“ mit eigener Persönlichkeit bauen.

Technische Leitidee:

> **Eine Ilse / eine Oberfläche – mehrere klar getrennte Module bzw. Skills.**

Für 0.1 wird nur Schritt 1 gebaut.

## Nutzerziel

Die Frau soll nach Schritt 1 nicht „analysiert“ wirken, sondern selbst klarer sehen:

- Was habe ich gemacht?
- Was kann ich?
- Was habe ich erlebt?
- Welche Probleme habe ich selbst gelöst?
- Wobei fragen mich andere um Rat?
- Welche Themen ziehen sich durch mein Leben?
- Welche Ressourcen / Kontakte / Reputation bringe ich mit?
- Was davon möchte ich weiter nutzen?
- Was kann ich zwar, will ich aber nicht mehr beruflich machen?
- Was sind klare Must-haves und No-Gos für mein nächstes Kapitel?

## Wichtige fachliche Regel

> **Können ist nicht Wollen.**

Beispiel: Viel Erfahrung in TCM darf nie automatisch zur Empfehlung führen, daraus ein TCM-/Menopause-Business zu machen.

Darum muss jeder relevante Fund am Ende mindestens einer dieser Kategorien zugeordnet werden können:

- BEHALTEN / WEITER NUTZEN
- OFFEN / NOCH NICHT KLAR
- KANN ICH, WILL ICH ABER NICHT MEHR BERUFLICH MACHEN
- KLARES NO-GO

## Gesprächslogik

Kein Fragebogengefühl.

Ilse fragt in natürlichem Küchentisch-Deutsch, sammelt Stück für Stück und zeigt Zwischensummen sichtbar an.

Mögliche Gesprächsblöcke:

1. Stationen und Wendepunkte
2. Arbeit / Projekte / Unternehmertum
3. Fähigkeiten und Wissen
4. Gelöste Probleme / schwierige Phasen
5. Dinge, für die andere die Frau fragen
6. Interessen / Themen / Haltung
7. Netzwerk / Reputation / vorhandene Ressourcen
8. Was davon will ich mitnehmen?
9. Was lasse ich bewusst zurück?
10. Must-haves / No-Gos

Ilse darf nachhaken, wenn eine Antwort konkrete Geschichten oder Belege vermuten lässt.

Sie darf NICHT:

- aus einer Fähigkeit ein Geschäftsmodell machen
- aus Vergangenheit eine Zukunft ableiten
- psychologisieren
- die Frau auf eine Nische festlegen
- Vorschläge zu Content, Angebot oder Positionierung machen; das kommt später

## Ergebnis von Schritt 1

Am Ende bekommt die Frau eine editierbare Übersicht:

# Das bringe ich mit
- Erfahrungen
- Fähigkeiten
- Wissen
- Lebens-/Berufsgeschichten
- gelöste Probleme
- Themen / Interessen
- Netzwerk / Reputation / Ressourcen

# Das nehme ich mit

# Das lasse ich zurück

# Das will ich nie wieder beruflich machen

# Meine Must-haves

# Meine No-Gos

# Offene Punkte

Zusätzlich intern strukturiert:
- Herkunft: direkt gesagt / abgeleitet / Hypothese / Klärungsbedarf
- Evidenz: Selbstaussage / konkretes Beispiel / reale Erfahrung / offen

Die Frau muss jeden Punkt korrigieren oder löschen können.

## Storybank-Vorbereitung

Schritt 1 darf konkrete Geschichten markieren, aber noch NICHT zu Content machen.

Pro Story nur:
- kurzer Titel
- was ist passiert?
- warum war es prägend?
- was habe ich daraus gelernt?
- könnte später relevant sein für: offen

## Technik 0.1

Claude Code soll die technisch einfachste Lösung in der bestehenden More-is-Yours-Anwendung verwenden.

Wichtig:
- kein neues Agenten-Framework nur für diesen Schritt
- vorhandene Ilse-/Chat-Infrastruktur wiederverwenden
- Daten strukturiert in bestehende Supabase-Architektur integrieren, wenn passend
- wenn Schema nicht passt: minimale additive Erweiterung, keine Löschung / Umbenennung bestehender Felder
- Petra, Nicole und Anne müssen getrennte Profile haben
- jeder Durchlauf muss fortsetzbar sein
- Zwischenspeichern
- Ergebnisübersicht editierbar
- Export zunächst nicht nötig

## UI

Verbindlich gilt:
`gesetze/2026-09-15-ui-gesetz-lebendig-spielerisch.md`

Keine Formularwüste.

Schritt 1 soll sich eher wie „Koffer auspacken“ / „Rucksack leeren“ anfühlen:
- gefundene Dinge werden sichtbar gesammelt
- Kategorien verständlich beschriftet
- warme, helle, erwachsene Farbwelt
- große lesbare Schrift
- mobil sauber
- ein Gedanke / eine Frage je Bildschirm

## Nicht bauen

- Schritt 2–5
- Positionierungsmaschine
- Content-Generator
- Angebotsgenerator
- Daily Business Companion
- Matching gegen Optionen
- Option Genome-Erweiterung
- Human Design
- Preislogik
- Community

## Akzeptanzkriterien

Schritt 1 ist ausreichend, wenn:

1. Petra, Nicole und Anne getrennt starten und fortsetzen können
2. die Frau mindestens Erfahrungen, Fähigkeiten, Wissen, Geschichten, Ressourcen, Must-haves und No-Gos sammeln kann
3. „kann ich / will ich nicht mehr“ explizit möglich ist
4. keine automatische Geschäftsmodell-Empfehlung erfolgt
5. Ergebnis übersichtlich und editierbar ist
6. relevante Herkunft/Evidenz intern gespeichert wird
7. UI lesbar, warm, verständlich und nicht formularartig ist
8. bestehende Fachlogik nicht überschrieben wird

## Erwartete Rückmeldung

Claude meldet nach Umsetzung nur:

1. was bereits vorhanden war
2. was neu gebaut wurde
3. geänderte Dateien / Migrationen
4. Screens / Wege zum Testen
5. Tests und Ergebnisse
6. offene TECH GAPS
7. offene CONTENT / METHOD / DATA GAPS
8. was bewusst NICHT gebaut wurde
