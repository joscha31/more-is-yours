# MORE IS YOURS – ARCHITECTURE DECISIONS B4–B7

**Stand:** 15.09.2026  
**Status:** Verbindliche Architekturentscheidungen nach Petra-Freigabe  
**Betroffene Baupakete:** B4 Normaler Dienstag · B5 HD Lens A-light · B6 Realitätscheck · B7 Quality Guard

## 1. Zweck

Dieses Dokument hält die fachlichen Entscheidungen fest, die aus der Prüfung der Baupakete B4–B7 entstanden sind.

Grundregel:

> Fachliche Lücken werden nicht von Claude Code geschlossen.  
> Code setzt nur freigegebene Fachlogik um.

---

## 2. B5 – HD Lens A-light

### Entscheidung HD-1 – Selbstaussage GEGEN eine Hypothese

Eine Selbstaussage der Frau **gegen** eine HD-Hypothese erzeugt den Hauptstatus:

> **Spannung**

Dafür ist kein zusätzlicher Lebensbeleg erforderlich.

Evidenzstärke bleibt sichtbar:

- Selbstaussage dagegen → Spannung
- Lebensbeleg dagegen → Spannung
- Lebensbeleg dagegen ist evidenzstärker als reine Selbstaussage

Empfohlene Statuslogik:

- **offen**: keine Selbstaussage, kein Lebensbeleg
- **teilweise**: Selbstaussage dafür oder genau ein Lebensbeleg dafür
- **auffällige Übereinstimmung**: mindestens zwei Lebensbelege dafür und kein Widerspruch
- **Spannung**: Selbstaussage dagegen oder mindestens ein Lebensbeleg dagegen

Die Art der Spannung soll sichtbar bleiben, z. B.:

- `selbst_widerspricht`
- `lebensbeleg_widerspricht`

### Entscheidung HD-2 – Was als Lebensbeleg zählt

Ein Lebensbeleg ist ein **konkretes Ereignis oder beobachtbares Verhalten aus dem wirklichen Leben**.

Ein Lebensbeleg muss nicht aus einem More-is-Yours-Realitätscheck stammen.

Beispiele:

- 30 Jahre eigene Praxis geführt
- Team aufgebaut
- Auftrag gewonnen
- Angebot verkauft
- Job beendet
- Realitätscheck durchgeführt

Nicht ausreichend:

> „Ich bin ausdauernd.“

Das ist eine Selbstaussage.

Ausreichend:

> „Ich habe meine Praxis 30 Jahre geführt.“

Das ist ein biografischer Lebensbeleg.

Technische Konsequenz:

`evidenz = erfahrung` muss auch ohne zwingendes `erlebt_in = naechster_schritt` möglich sein.

### Entscheidung HD-3 – `hd_beleg`

`hd_beleg` reicht für Ilse 0.1 als Ablageebene aus.

Es verknüpft:

- HD-Hypothese
- Zettel der Frau
- Richtung: für / gegen / neutral
- gesetzt von Frau oder Petra

Die Evidenzklasse bleibt am Zettel.

Keine zusätzliche große HD-Datenebene für 0.1.

### Entscheidung HD-4 – Geburtsdaten

Für A-light werden in Ilse 0.1 **keine Geburtsdaten gespeichert**.

Verwendet werden nur die bereits bestimmten Werte:

- Typ
- Strategie
- Autorität
- Profil

Ein späterer eigener Chart-Rechner wäre eine neue technische, fachliche und datenschutzrechtliche Entscheidung.

### CONTENT GAP HD

Der erste fachlich freigegebene Eintrag für Petras Chart wird im **Human Design Content Lab** entwickelt und von Petra freigegeben.

Erst danach geht er an Claude Code.

---

## 3. B4 – Der normale Dienstag

### Entscheidung DI-1 – Darstellungsform 0.1

Der normale Dienstag bleibt in Version 0.1:

> **strukturierte, faktenbasierte Alltagsansicht**

Noch keine erzählte Tagesgeschichte.

Keine erfundenen:

- Uhrzeiten
- Kundenszenen
- Abläufe
- Zwischenhandlungen

Nur belegte Optionsdaten werden übersetzt.

### Entscheidung DI-2 – „Tragfähig“

Ein einzelner belegter Baustein reicht **nicht** für die Aussage:

> „So sieht dein Dienstag aus.“

Besser:

- **Teilansicht möglich**: mindestens ein belegter Baustein
- **Dienstag ausreichend beschrieben**: zentrale Arbeitsrealitäten sind belegt oder ausdrücklich nicht relevant

Keine willkürliche Mindestzahl wie „6 von 12“.

### Entscheidung DI-3 – Drei neue Option-Genome-Felder

Die folgenden drei Dimensionen werden in das Option Genome aufgenommen:

1. **Leistungserbringung / Lieferung**
2. **Recherche / Vorbereitung**
3. **Leerlauf / Warten**

Sie sind für den realen Arbeitsalltag entscheidungsrelevant.

Technisch sollen bestehende Feldnummern nicht verschoben werden. Neue Felder werden hinten ergänzt.

### CONTENT GAP DI

Die genaue Definition der drei neuen Felder und die Goldstandard-Option **Teilzeit/Nebenjob** gehen ins **Option Genome Lab**.

---

## 4. B6 – Realitätscheck 0.1

### Entscheidung RC-1 – Grenzen werden nicht getestet

Eine harte oder aktuelle reale Grenze ist keine Hypothese.

Beispiel:

> „Ich kann aktuell nur zehn Stunden pro Woche arbeiten.“

Daraus wird kein Test:

> „Probier mal, ob du doch 20 Stunden schaffst.“

Grenzen werden respektiert.

Präferenzen dürfen erkundet werden.

### Entscheidung RC-2 – Fehlendes Wissen über die Option

Wenn das System zu wenig über eine Option weiß, wird **nicht die Frau getestet**.

Dann lautet der Befund:

> Hier fehlt Wissen über den Weg, nicht über dich.

Folge:

→ Recherche / Option Genome  
nicht  
→ Realitätscheck der Frau

### Entscheidung RC-3 – Frau verwirft ihre Annahme selbst

Wenn die Frau nach einem Test sagt:

> „Das stimmt für mich nicht.“

darf die Annahme automatisch als verworfen markiert werden.

Keine zweite Freigabe durch Petra nötig.

Historie bleibt erhalten:

- vorherige Annahme
- tatsächlicher Test
- Ergebnis
- neue Erkenntnis

### Entscheidung RC-4 – Reality Learning 0.1

Für 0.1 reicht:

> **Vorher → Jetzt**

Der Realitätscheck schreibt nicht selbst die neue Matchinginterpretation.

Stattdessen:

1. Erkenntnis ins Profil
2. Hinweis „Passung neu abgleichen“
3. neuer Matchinglauf
4. neuer Befund

---

## 5. B7 – Quality Guard 0.1

### Entscheidung QG-1 – Grundlogik

Die Regressionslogik ist richtig:

> Golden Cases definieren den Prüfgegenstand.  
> Code führt den Test aus.  
> Ein Mensch bewertet die Bedeutung.

Regeln:

- N100 bleibt dauerhaft Regressionstest
- kein automatisches GRÜN ohne menschliche Bewertung
- KI-Vorschlag ist keine Freigabe
- ein FAIL setzt das Tor auf ROT

### Entscheidung QG-2 – Modellwechsel = neue Fassung

Ein Modellwechsel zählt als neue Regression-Fassung.

Die Fassung muss mindestens enthalten:

- Persona-Version
- Beobachterin-Version
- Modell-ID
- relevante Modellkonfiguration

Empfohlen:

`persona:x | beobachterin:y | model:z | effort:q`

Bei Änderung eines behavior-relevanten Bestandteils ist ein neuer Regressionslauf nötig.

Eine alte grüne Bewertung wird nicht vererbt.

### Entscheidung QG-3 – Bedeutung von GRÜN

Für B7 0.1 bedeutet GRÜN nur:

> Kein bekannter harter Fehler in den geprüften Golden Negatives.

GRÜN bedeutet nicht:

> Ilse führt insgesamt gute Gespräche.

Positive Golden Cases und Conversation-Quality-Cases werden später separat ergänzt.

---

## 6. Übergaben

### → HUMAN DESIGN CONTENT LAB

- erster A-light-Eintrag für Petra
- kanonisches HD-Vokabular
- weitere Library-Inhalte

### → OPTION GENOME LAB

- Definition der drei neuen Dienstag-Felder
- Goldstandard Teilzeit/Nebenjob

### → CLAUDE CODE

Nach Freigabe gezielt umsetzen:

1. Selbstaussage GEGEN → Spannung
2. `erfahrung` auch ohne zwingenden Realitätscheck-Schritt erlauben
3. drei neue Option-Genome-Felder ergänzen
4. Runtime Fingerprint für Quality Regression ergänzen

Keine weitere Fachlogik erfinden.

### → QUALITY LAB / PETRA

- B7-Bewertungsbogen prüfen
- N100 und übrige Fälle menschlich bewerten
- Freigabestatus setzen

### → NOCH NICHT

- narrativer KI-Tagesablauf
- automatische Matching-Neudeutung direkt in B6
- Voll-HD
- Geburtsdaten
- große neue HD-Datenarchitektur

---

## 7. Nächster technischer Schritt

Claude Code erhält nur die vier kleinen, freigegebenen Änderungsaufträge.

Die fachlichen CONTENT GAPS gehen zurück in die zuständigen Labs.

> **Kein Neubau. Nur gezielte Korrekturen an den Schnittstellen zwischen Fachinhalt, Evidenz und Technik.**
