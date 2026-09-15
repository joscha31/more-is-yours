# MORE IS YOURS – HD LLM Reading Strategie 0.1

**Stand:** 15.09.2026  
**Status:** **FACH-LAB-VORSCHLAG / PETRA REVIEW**  
**Bereich:** Human Design Content Lab / Produktstrategie

## Ausgangspunkt

Petra weist auf einen zentralen Wettbewerbsrealitätscheck hin:

> Wenn eine Nutzerin ihren vollständigen Human-Design-Chart aus einem kostenlosen Online-Tool in ChatGPT eingibt, kann sie bereits heute eine sehr gute und ausführliche HD-Auswertung erhalten.

Daraus folgt für More is Yours:

> More is Yours sollte nicht versuchen, durch eine statische eigene HD-Wissensdatenbank bloß dieselbe generische Chart-Deutung nachzubauen.

Das wäre leicht ersetzbar und würde voraussichtlich schlechter skalieren als ein starkes LLM.

## Strategische Richtung

More is Yours sollte den Mechanismus kopieren, nicht die Texte.

Empfohlenes Prinzip:

> **Chartdaten + starkes Sprachmodell + feste MIY-Anweisungen + kuratierte Fachregeln + strukturierte Ausgabe + wirtschaftlicher Kontext der Frau**

Die Qualität entsteht nicht daraus, dass jede mögliche Human-Design-Kombination vorab als Text geschrieben wird.

Sie entsteht aus:

1. den strukturierten Chartdaten,
2. einem leistungsfähigen LLM,
3. klaren Developer-/System-Instruktionen,
4. einer freigegebenen Fachbibliothek und Schutzregeln,
5. dem Economic Profile und der realen Biografie der Frau,
6. einer Ausgabeform, die zwischen HD-Lehre, Hypothese, Selbstaussage und Beleg trennt.

## Zwei klar getrennte Ebenen

### Ebene A – reichhaltige HD-Reflexion

Ziel:

Eine hochwertige, persönliche Chart-Erklärung, die sich ähnlich nützlich anfühlen kann wie eine gute ChatGPT-Auswertung.

Möglicher Ablauf:

- Nutzerin lädt Chartdaten bzw. einen extern erzeugten Chart hoch oder gibt strukturierte Werte ein.
- Das Modell erklärt das Chart verständlich, persönlich und differenziert.
- Es stellt bei Bedarf Reflexionsfragen.
- Es kennzeichnet Human Design klar als Reflexionsmodell, nicht als objektive Wahrheit.

Wichtig:

Diese Ebene darf NICHT automatisch wirtschaftliche Entscheidungen treffen.

Sie kann perspektivisch mehr Chartdaten verwenden als A-light, muss aber fachlich separat entwickelt und freigegeben werden.

### Ebene B – MIY Economic HD Lens

Diese Ebene bleibt streng proprietär und methodisch kontrolliert.

Nur freigegebene wirtschaftlich relevante HD-Hypothesen dürfen in Economic Profile / Matching einfließen.

Aktuell A-light:

- Typ
- Strategie
- Autorität
- Profil

Prinzip:

> HD-Hypothese → Selbstaussage → gelebter Beleg → Frage → erst danach mögliche wirtschaftliche Relevanz

Keine direkte Ableitung:

- Typ → Beruf
- Chart → Geschäftsmodell
- HD → Ausschluss
- HD → Match-Prozent

## Warum diese Trennung wichtig ist

Die Nutzerin kann durchaus Freude an einer ausführlichen vollständigen HD-Auswertung haben.

Aber der eigentliche More-is-Yours-Zusatznutzen entsteht nicht dadurch, dass Ilse ein Chart schöner erklärt als ChatGPT.

Er entsteht dadurch, dass More is Yours:

- das Chart mit dem Economic Profile verbindet,
- Aussagen nicht einfach glaubt, sondern mit Biografie prüft,
- Spannungen sichtbar macht,
- bekannte Informationen über Zeit weiterverwendet,
- wirtschaftliche Optionen gegen reale Lebensbedingungen hält,
- aus Reflexion keine Scheingenauigkeit macht.

Kurz:

> **ChatGPT kann ein Chart gut erklären. More is Yours soll zusätzlich prüfen, was davon im wirklichen Leben dieser Frau trägt und ob es wirtschaftlich überhaupt relevant ist.**

## Technische Grundidee

Eine mögliche technische Architektur wäre:

1. **Chart Input**
   - externe Chartquelle / Upload / strukturierte Eingabe
   - eigener Chart-Rechner nicht zwingend nötig

2. **Canonical Chart Data**
   - Chartdaten werden in ein neutrales strukturiertes Format übersetzt
   - keine Deutung in diesem Schritt

3. **LLM Reading Layer**
   - starkes Sprachmodell erzeugt verständliche Reflexion
   - festes MIY Developer-Prompt steuert Ton, Vorsicht, Grenzen und Transparenz

4. **Structured Extraction Layer**
   - aus der Reflexion dürfen nur freigegebene MIY-Felder/Hypothesen als strukturierte Daten weitergereicht werden
   - nicht freigegebene Erkenntnisse bleiben Text/Reflexion, nicht Matchingdaten

5. **MIY Validation Layer**
   - Selbstaussage
   - Biografie / Lebensbelege
   - Gegenbeispiele
   - wirtschaftliche Relevanz

6. **Quality Guard**
   - verbotene Typ→Beruf-/Business-Aussagen
   - Konditionierungsargumente gegen Selbstaussage
   - Match-Prozente aus HD
   - Aura-/Chartbehauptungen als Tatsache

## Warum ein LLM dafür geeignet ist

Aktuelle OpenAI-Dokumentation zeigt, dass Developer-/System-Anweisungen verwendet werden können, um Modellverhalten konsistent zu steuern. Structured Outputs können zusätzlich vorgegebene Schemas erzwingen. Dadurch ist eine Architektur möglich, in der ein Modell frei und natürlich erklärt, während die Datenweitergabe in das Produkt stark strukturiert bleibt.

Wichtig:

Das ist eine technische Möglichkeit, noch keine Festlegung auf OpenAI als dauerhaften Anbieter.

Die Architektur sollte modellunabhängig gedacht werden:

> **LLM austauschbar – MIY-Methode und Datenmodell bleiben Eigentum des Produkts.**

## Nicht empfohlen

Nicht sinnvoll wäre:

- jede Chartkombination vollständig statisch vorformulieren
- ChatGPT-Ausgaben kopieren oder nachbauen
- Voll-HD direkt in das Matching geben
- ungeprüfte LLM-Deutungen als Economic-Profile-Fakt speichern
- das Produktversprechen auf „bessere Human-Design-Auswertung“ reduzieren

## Empfohlener Proof of Concept

Noch nichts Großes bauen.

Kleinster Test:

1. Petras vollständige Chartdaten aus einer bestehenden Quelle nehmen.
2. Einen sehr guten MIY-HD-Developer-Prompt schreiben.
3. Dasselbe Chart einmal mit normalem ChatGPT und einmal mit dem MIY-Prompt auswerten lassen.
4. Vergleichen:
   - Verständlichkeit
   - Tiefe
   - Persönlichkeit
   - Suggestivität
   - unerlaubte Berufsschlüsse
   - Qualität der Fragen
   - Anschluss an Economic Profile
5. Danach entscheiden, ob eine eigene „reiche HD-Reflexion“ überhaupt Produktwert schafft.

## Strategische Prüffrage

> **Wenn ChatGPT die allgemeine Chart-Auswertung bereits sehr gut kann: Was kann More is Yours danach besser, sicherer oder persönlicher als ein einzelner offener Chat?**

Arbeitshypothese:

> **Nicht die Deutung ist der Burggraben. Der Burggraben ist Kontext + Langzeitgedächtnis + Economic Profile + reale Belege + wirtschaftliche Übersetzung + Quality Guard.**

## Status

Dieses Dokument ist **FACH-LAB-VORSCHLAG / PETRA REVIEW**.

Noch nicht PETRA APPROVED.
Noch kein Build-Auftrag.
