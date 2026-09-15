# MORE IS YOURS – Economic Profile & Matching Priorisierung Review 0.1

**Stand:** 15.09.2026  
**Status:** FACH-LAB-REVIEW / PETRA REVIEW  
**Bereich:** Economic Profile & Matching Lab  
**Geprüft:** Claude-Code-Bericht zur priorisierten Vorschlags-Ebene sowie `lib/vorschlaege.js` im Arbeitsrepo `joscha31/meine-projekte`

## Kurzurteil

Die technische Erweiterung ist sauber strukturiert, testbar und respektiert viele bestehende Schutzregeln. Fachlich ist sie jedoch noch **nicht abnahmefähig**, weil mehrere neue methodische Entscheidungen im Code getroffen wurden, die nicht aus der PETRA-APPROVED Entscheidung folgen.

Die neue Entscheidung „immer priorisierte, begründete Vorschläge; niemals `unbekannt` als Nutzerinnen-Gesamtergebnis“ bleibt verbindlich. `unbekannt` darf nur interner Einzelbefund sein.

---

## A. Harte Korrektur – bereits durch bestehende PETRA-APPROVED Regel gedeckt

### A1 – Fehlendes Optionswissen darf keinen Realitätscheck der Frau auslösen

Im aktuellen `vorschlaege.js` wird eine Option bereits dann als `pruefenswert` gruppiert, wenn `tests.length > 0` gilt. Das passiert auch dann, wenn `optionswissenFehlt(...)` für diese Testfrage `true` ergibt.

Damit kann ein Weg wegen einer Testfrage in der primären Gruppe landen, obwohl der offene Punkt eigentlich durch Recherche im Option Genome geklärt werden muss.

Das widerspricht der freigegebenen RC-2-Regel:

> Wenn Wissen über die Option fehlt, wird nicht die Frau getestet. Erst Option recherchieren.

**Folge:** Ein Testbefund mit ausschließlich offenem Optionswissen darf nicht als persönliche Testbarkeit gewertet werden. Er ist ein Recherchebedarf.

Status: **KORREKTUR ERFORDERLICH / keine neue Petra-Entscheidung nötig**

---

## B. Neue methodische Entscheidungen, die Claude ohne Freigabe getroffen hat

### B1 – Starre universelle Prioritätsreihenfolge

Der Code priorisiert aktuell lexikographisch in dieser festen Reihenfolge:

1. starke Präferenzen
2. Ziele
3. Ressourcen/Voraussetzungen
4. wirtschaftliche Anforderungen
5. offene Unsicherheiten
6. Evidenzqualität

Das erste Kriterium, in dem zwei Wege unterschiedlich sind, entscheidet die Reihenfolge.

Diese Reihenfolge war im Build Brief nur als Liste zu berücksichtigender Faktoren enthalten. Sie war **nicht** als universelle Rangordnung freigegeben.

Problem:
Eine starke Präferenz würde dadurch grundsätzlich ein wirtschaftliches Ziel schlagen, unabhängig davon, worum es konkret geht. Das ist eine versteckte Gewichtung ohne individuellen Bezug zur Frau.

Status: **NICHT FREIGEGEBENE METHODIK**

### B2 – Erfüllte harte/aktuelle Grenze wird als positiver Präferenzpunkt behandelt

`WICHTIG` enthält im Code:
- harte Grenze
- aktuelle Grenze
- starke Präferenz

Eine belegte Passung an einer harten oder aktuellen Grenze kann dadurch beim Kriterium „starke Präferenzen“ positiv für die Priorisierung wirken.

Fachlicher Einwand:
Eine harte Grenze ist primär ein Gate. Dass eine Option eine Mindestbedingung nicht verletzt, ist nicht automatisch ein zusätzlicher Bonus gegenüber anderen ebenfalls zulässigen Optionen.

Status: **NICHT FREIGEGEBENE METHODIK**

### B3 – `gemischt` wird für die Reihenfolge wie `nichts` behandelt

Der Code setzt für den Vergleich `gemischt` mit `nichts` gleich.

Das ist eine methodische Entscheidung. Gemischte Evidenz ist fachlich nicht dasselbe wie fehlende Evidenz.

Status: **NICHT FREIGEGENE METHODIK**

### B4 – „Sobald mehr bekannt ist“ erfüllt Petras Regel „immer Vorschläge“ noch nicht vollständig

Die neue Nutzerinnenlogik kennt zwar kein Gesamtergebnis `unbekannt`, kann aber alle Wege in „Sobald mehr bekannt ist“ einsortieren.

Das ist sprachlich freundlicher, funktional aber weiterhin kein echter Vorschlag.

Petras bestätigte Regel bedeutet stärker:

> Nach abgeschlossenem Matching bekommt die Frau immer mindestens eine begründete, priorisierte Möglichkeit bzw. mehrere gleich priorisierte Möglichkeiten, die sie sinnvoll weiter prüfen kann.

Wenn der aktuelle Wissensstand dafür nicht reicht, ist der Matchingprozess fachlich noch nicht fertig und muss gezielt Daten/Optionswissen ergänzen, statt die Frau mit einer leeren Ergebnisgruppe zu entlassen.

Status: **FACHLICHE NACHSTEUERUNG ERFORDERLICH**

---

## C. Empfehlungen zu den drei von Claude gemeldeten Gaps

### C1 – Rolle der Option im Szenario

**Empfehlung:** Die Rolle `Hauptweg / Nebenweg / Übergang` gehört weder fest ins Economic Profile noch ins Option Genome.

Sie ist eine **relationale Szenario-Aussage zwischen Frau und konkreter Option**.

Beispiel:
- Minijob als Hauptweg: möglicherweise unpassend zum langfristigen Ziel
- derselbe Minijob als sechsmonatiger Übergang: möglicherweise sinnvoll

Fachliche Struktur:

`Frau × Option × Szenario-Rolle`

Die Rolle darf vom System als Hypothese vorgeschlagen werden, muss aber von der Frau bestätigt/korrigiert werden.

Status: **FACH-LAB-VORSCHLAG / PETRA REVIEW**

### C2 – Suchraum „ausgeschlossen“

**Empfehlung:** `ausgeschlossen` im Suchraum ist nicht automatisch eine harte Grenze.

Der Suchraum ist Navigation, nicht eine zweite Grenzsystematik.

Ein Ausschluss soll auf einen Grund im Profil verweisen:
- harte Grenze
- aktuelle Grenze
- starke Präferenz
- bewusste Nicht-Prüfung / aktuell kein Interesse

Wenn nur „ausgeschlossen“ vorliegt, ohne geklärten Grund, fragt Ilse nach:

> Ist das für dich wirklich ein klares Nein – oder möchtest du es gerade einfach nicht weiter prüfen?

Status: **FACH-LAB-VORSCHLAG / PETRA REVIEW**

### C3 – Mindestbedarf × Zeit bis Einnahmen

**Empfehlung:** Wirtschaftliche Angaben werden nicht allein deshalb zur Grenze, weil es um Geld geht.

Entscheidend ist die semantische Funktion der Aussage.

Beispiele:
- „Ab Monat 4 brauche ich mindestens 1.500 € zusätzlich, sonst funktioniert es finanziell nicht.“ → aktuelle/hart wirkende wirtschaftliche Bedingung
- „1.500 € im Monat wären für den Anfang schön.“ → Ziel/Wunsch, kein Gate
- „Langfristig möchte ich fünfstellig verdienen.“ → Entwicklungsziel, kein kurzfristiges Veto

Regel:

> Die Stärke des Matchingbefunds kommt aus der bestätigten Bedeutung im Economic Profile, nicht aus der Zahlenhöhe.

Wenn Optionsdaten nicht belastbar genug sind, um den Mindestbedarf gegen Zeit/Einkommen zu prüfen, wird recherchiert statt ein Konflikt behauptet.

Status: **FACH-LAB-VORSCHLAG / PETRA REVIEW**

---

## D. Empfohlene Priorisierungslogik ohne Score

### D1 – Keine universelle feste Kriteriumsreihenfolge

Priorisierung folgt nicht einer für alle Frauen identischen Liste.

### D2 – Zuerst Gates

Nicht aktuell priorisieren, wenn:
- bestätigte harte Grenze verletzt
- bestätigte aktuelle Grenze verletzt
- zwingende Voraussetzung fehlt und aktuell nicht überbrückbar ist

Die Option bleibt sichtbar und begründet.

### D3 – Dann individuelle Entscheidungsrelevanz

Bei den verbleibenden Optionen werden nur die für diese Frau tatsächlich entscheidungsrelevanten, bestätigten Kriterien verwendet.

Starke Präferenzen, Ziele, wirtschaftliche Bedingungen und Ressourcen werden nicht pauschal in derselben Reihenfolge gewichtet.

### D4 – Dominanz statt Punktescore

Option A darf vor Option B stehen, wenn sie bei den aktuell entscheidungsrelevanten Punkten klar besser trägt und keinen stärkeren Gegenkonflikt besitzt.

Wenn A und B unterschiedliche Vorteile/Spannungen haben, ohne dass fachlich eine eindeutige Dominanz besteht:

> gleiche Prioritätsstufe, Trade-off sichtbar machen.

Keine künstliche Reihenfolge erzwingen.

### D5 – Evidenz beeinflusst Sicherheit, nicht Lebenswert

Stärkere Evidenz macht einen Befund belastbarer. Sie macht eine Option nicht automatisch „besser“.

Daher Evidenz als Vertrauens-/Sicherheitsdimension anzeigen, nicht als universelles späteres Ranking-Kriterium.

### D6 – Szenario-Rolle mitdenken

Eine Option kann je Rolle unterschiedlich priorisiert werden:
- Hauptweg
- Nebenweg
- Übergang

Damit wird vermieden, dass z. B. ein Minijob als langfristiger Hauptweg und als kurzfristige Brücke identisch beurteilt werden.

---

## E. Freigabeempfehlung

### Technisch/fachlich gut und beibehalten
- zusätzliche Vorschlags-Ebene oberhalb der Einzelbefunde
- mehrere Möglichkeiten gleichzeitig möglich
- gleiche Plätze möglich
- keine Prozente / keine Gesamtnote
- harte/aktuelle Grenzkonflikte bleiben sichtbar und werden nicht kompensiert
- Einzelbefunde bleiben erhalten
- offene Punkte und nächste Klärungswege werden gezeigt
- Freigabetor bleibt erhalten

### Vor fachlicher Abnahme korrigieren/entscheiden
1. RC-2-Bug: offenes Optionswissen darf nicht als persönlicher Testweg `pruefenswert` machen.
2. Starre universelle Rankingreihenfolge entfernen/ersetzen.
3. harte/aktuelle Grenze nicht als positiven Präferenzbonus verwenden.
4. `gemischt = nichts` nicht als unverbindliche Methodik stehen lassen.
5. sicherstellen, dass der abgeschlossene Matchingprozess echte priorisierte Vorschläge liefert, nicht nur „sobald mehr bekannt“.
6. Szenario-Rolle fachlich verorten.
7. Suchraum-Ausschluss fachlich verorten.
8. wirtschaftliche Mindestbedingungen semantisch sauber behandeln.

**Gesamtstatus: NOCH NICHT FACHLICH ABGENOMMEN.**
