# MORE IS YOURS – Economic Profile & Matching Rule Library 0.2

**Stand:** 15.09.2026  
**Status:** PETRA APPROVED / fachlich konsolidiert  
**Bereich:** Economic Profile & Matching Lab

## 1. Zweck

Diese Fassung konsolidiert die verbindliche Matchinglogik für More is Yours.

Maßgebliche Entscheidungen:

- `entscheidungen/2026-09-15-matching-vorschlaege-priorisierung.md`
- `entscheidungen/2026-09-15-matching-priorisierung-final.md`
- `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md`
- `entscheidungen/2026-09-15-ilse-systemische-coachingregeln.md`

Sie ersetzt die offenen Lesarten aus `Economic-Profile-Matching-Rule-Library-0.1.md`, soweit diese der finalen Priorisierungslogik widersprechen.

---

## 2. Grundmodell

Gematcht wird nicht:

> ganze Frau ↔ ganzer Beruf

sondern:

> **entscheidungsrelevante Aussage der Frau ↔ belegte Eigenschaft einer Option / Variante / Rolle**

Die Ausgabe für die Frau besteht aus **priorisierten Vorschlägen**, nicht aus einem Score.

---

## 3. Einzelbefunde bleiben

Erlaubte Einzelbefunde:

- `passt`
- `konflikt`
- `unbekannt`
- `testen`

Bedeutung:

- `passt` = an diesem konkreten Punkt aktuell vereinbar
- `konflikt` = konkreter Widerspruch
- `unbekannt` = notwendige Information fehlt
- `testen` = persönliche offene Annahme lässt sich sinnvoll real prüfen

`unbekannt` bleibt intern erlaubt, ist aber **kein Nutzerinnen-Gesamtergebnis**.

---

## 4. Gates vor Priorisierung

Nicht wegkompensierbar:

1. bestätigte harte Grenze
2. bestätigte aktuelle Grenze
3. bestätigter wirtschaftlicher Mindestbedarf mit Zeitbezug, wenn die Option ihn nach belastbaren Daten strukturell nicht erfüllen kann
4. zwingende Voraussetzung, wenn sie für die betrachtete Variante nicht realistisch erfüllbar ist

Ein Gate gilt immer für die **betrachtete Rolle / Variante / aktuelle Situation**.

---

## 5. Szenario-Rolle

Mögliche Rollen:

- Hauptweg
- Nebenweg
- Übergang
- Test-/Lernweg

Die Rolle ist eine Relation zwischen Frau und Option.

Sie wird im Matching-Snapshot gespeichert.

Sie ist weder dauerhafte Eigenschaft der Frau noch dauerhafte Eigenschaft der Option.

Das System darf eine Rolle vorschlagen, die Frau bestätigt oder korrigiert.

---

## 6. Keine universelle Gewichtung

Es gibt keine feste Rangfolge von:

- Präferenzen
- Zielen
- wirtschaftlichen Anforderungen
- Ressourcen
- Evidenz

Stattdessen werden die für diese Frau und das aktuelle Szenario **entscheidenden Faktoren** bestimmt.

Eine Information beeinflusst die Priorisierung nur, wenn nachvollziehbar ist, warum sie hier entscheidungsrelevant ist.

---

## 7. Vergleich ohne Score

Priorisierung arbeitet qualitativ.

### Vorrang

Option A kommt vor Option B, wenn:

- kein Gate gegen A spricht,
- A mindestens einen entscheidenden Faktor klar besser erfüllt,
- A dafür keinen gleich schweren oder schwereren Nachteil bei einem anderen entscheidenden Faktor erzeugt.

### Gleichrang

Wenn Optionen unterschiedliche Stärken und Nachteile haben und keine klar dominiert:

> gleichrangige Priorität

Trade-off wird erklärt.

Keine erzwungene Einzel-Siegerin.

---

## 8. `gemischt`

`gemischt` bedeutet:

> in einem relevanten Bereich spricht etwas dafür und etwas dagegen.

Es ist nicht gleichbedeutend mit `nichts bekannt`.

Es bleibt als echter Trade-off sichtbar.

---

## 9. Evidenz

Evidenz bestimmt die **Sicherheit eines Befunds**, nicht dessen Attraktivität.

User-facing Sicherheit:

- gut belegt
- teilweise belegt
- vorläufig / noch zu prüfen

Keine Prozentwerte.

---

## 10. Fehlendes Optionswissen

Wenn Wissen über die Option fehlt:

- kein Realitätscheck der Frau
- Recherche / Option Genome
- Option kann trotzdem als Vorschlag sichtbar bleiben, wenn andere Gründe tragen
- fehlendes Wissen reduziert Sicherheit und bestimmt den nächsten Schritt

---

## 11. Persönliche offene Annahme

`testen` nur wenn:

- Option ausreichend bekannt
- persönliche Annahme relevant
- nicht durch Gespräch allein sinnvoll klärbar
- sicherer kleiner Test möglich
- keine harte/aktuelle Grenze betroffen

---

## 12. Suchraum

`ausgeschlossen` im Suchraum ist nicht automatisch harte Grenze.

Unterscheiden:

- derzeit nicht prüfen
- grundsätzlich ausgeschlossen / harte Grenze

Keine stille Hochstufung.

---

## 13. Ressourcen

Ressource vorhanden:

> Machbarkeit / Einstieg kann leichter sein.

Nicht:

> Frau soll das tun.

Fehlende hilfreiche Ressource:

> Aufbauaufwand, kein automatischer Konflikt.

---

## 14. Zahlen

Jede Zahl braucht Bedeutung und Zeitbezug.

Mindestens unterscheiden:

- Mindestbedarf
- Wunsch für den Anfang
- langfristiges Ziel
- Budget
- akzeptabler Verlust
- Zeit bis Einnahmen

Nur bestätigter Mindestbedarf mit Zeitbezug kann Gate werden.

Aktueller Wert ist niemals automatisch Obergrenze.

---

## 15. Wachstum

Wenn langfristige Entwicklung relevant ist, werden mindestens betrachtet:

- Start
- stabil
- Wachstum
- größere / neue Rolle

Eine Option kann im Start passen und im Wachstum einen Trade-off erzeugen.

---

## 16. Nutzerinnen-Ausgabe

Hauptansicht:

### Deine stärksten Möglichkeiten
Ein bis mehrere Top-Kandidaten.

### Weitere sinnvolle Möglichkeiten
Interessant, aber weniger klar oder stärker klärungsbedürftig.

### Als Neben-/Übergangsweg interessant
Sinnvoll für eine begrenzte oder ergänzende Rolle.

### Aktuell zurückstellen
Nur mit konkretem Gate-/Konfliktgrund.

### Von dir derzeit ausgeschlossen
Explizit von der Frau zurückgestellte Wege.

Je Vorschlag:

- Option / Variante / ggf. Tätigkeit
- vorgeschlagene Szenario-Rolle
- warum interessant
- starke Passungen
- Trade-offs / Konflikte
- offene Punkte
- Sicherheit der Aussage
- nächster sinnvoller Schritt

---

## 17. Reality Learning

Nach echtem Test:

1. alte Annahme bleibt erhalten
2. Test wird gespeichert
3. Ergebnis wird gespeichert
4. Erkenntnis aktualisiert das Profil
5. neuer Matchinglauf
6. neuer Snapshot

Keine stille Überschreibung.

---

## 18. Quality Guard – harte Fehler

- Prozent-/Score-Matching
- starre universelle Kriterienrangfolge
- positive Befunde zählen und daraus Rang ableiten
- Gate wegkompensieren
- `gemischt` wie `nichts` behandeln
- Evidenz als Bonus für Passung behandeln
- fehlendes Optionswissen durch Test der Frau ersetzen
- Wunschwert als Mindestbedarf behandeln
- aktuelle Zahl zur Obergrenze machen
- Fähigkeit automatisch Beruf
- Ressource automatisch Wunsch
- Szenario-Rolle als Optionseigenschaft speichern
- Suchraum-Ausschluss automatisch harte Grenze
- künstliche Einzel-Siegerin bei echtem Trade-off

---

## 19. Kurzform

> **Gates respektieren → Rolle im Szenario bestimmen → individuelle entscheidende Faktoren vergleichen → nur bei klarer qualitativer Überlegenheit priorisieren → sonst gleichrangige Top-Kandidaten mit Trade-offs zeigen → Unsicherheit sichtbar machen → genau den nächsten sinnvollen Recherche- oder Realitätsschritt ableiten.**
