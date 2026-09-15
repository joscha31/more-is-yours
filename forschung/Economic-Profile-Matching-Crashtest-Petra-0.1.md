# MORE IS YOURS – Economic Profile & Matching Crashtest Petra 0.1

**Stand:** 15.09.2026  
**Status:** FACH-LAB-VORSCHLAG / CRASHTEST  
**Bereich:** Economic Profile & Matching Lab  
**Zweck:** Belastungstest der Matchinglogik mit Petra als Pilotin 0 gegen die drei aktuellen Goldstandard-Optionen. Keine PETRA-APPROVED-Entscheidung und keine technische Spezifikation.

---

# 1. Verwendeter aktueller Projektstand

Masterquelle:
- `master/2026-09-14-more-is-yours-gesamt-master-3.0.md`

Spätere verbindliche Entscheidungen:
- `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md`
- `entscheidungen/2026-09-15-ilse-systemische-coachingregeln.md`

Economic Profile / Matching:
- `forschung/Economic-Profile-Matching-Rule-Library-0.1.md`

Goldstandard-Optionen:
- `forschung/Option-Genome-01-Teilzeit-Nebenjob-0.1.md`
- `forschung/Option-Genome-02-Freelancing-Done-for-you-0.1.md`
- `forschung/Option-Genome-03-Digitales-Produkt-0.1.md`
- `forschung/Option-Genome-Goldstandard-Vergleich-0.1.md`

Petras dokumentierte Profilhinweise stammen hier nur aus GitHub, insbesondere:
- `entwicklungsprotokolle/2026-08-25.md`
- `entwicklungsprotokolle/2026-08-26.md`
- `entwicklungsprotokolle/2026-08-27.md`

Wichtig: Dieser Crashtest liest nicht direkt aus der Live-Supabase. Er prüft die fachliche Logik mit den in GitHub dokumentierten Petra-Aussagen.

---

# 2. Relevante Petra-Aussagen für diesen Test

Nur Aussagen verwendet, die in GitHub dokumentiert sind:

## P1 – Zeitsouveränität
Petra möchte Arbeit spontan unterbrechen und später ohne problematische Folgen fortsetzen können.

Quelle: Entwicklungsprotokoll 25.08.

Funktion: starke Präferenz / genaue Grenzstufe für produktives Matching noch von Petra zu bestätigen.

## P2 – Systemaufbau statt dauerhaft nur Zeit gegen Geld
Langfristig möchte Petra nicht ausschließlich persönliche Zeit gegen Einkommen tauschen, sondern Systeme oder Produkte schaffen, die mehrfach Wert erzeugen können.

Quelle: Entwicklungsprotokoll 25.08.

Funktion: langfristiges wirtschaftliches Ziel / starke Präferenz.

## P3 – Eigenständigkeit und Systemaufbau wiegen für Petra schwerer als schnelles Einkommen
Ein hypothetisch hohes Einkommen bei festen Arbeitszeiten und ohne eigenen Systemaufbau wurde klar abgelehnt.

Quelle: Entwicklungsprotokoll 25.08.

Funktion: starke Präferenz; nicht ohne Petra-Bestätigung als harte Grenze setzen.

## P4 – Menschenkontakt ja, aber nicht den ganzen Tag intensiv
Regelmäßiger Kontakt ist wichtig. Zoom, Telefon oder Live-Treffen sind willkommen; Remote-Kontakt reicht grundsätzlich. Kein Wunsch nach dauerhaft intensivem Menschenkontakt über den ganzen Arbeitstag.

Quelle: Entwicklungsprotokoll 26.08.

Funktion: Präferenzprofil Menschenkontakt.

## P5 – Investitionsgrenze ist situativ
Petras aktuelle Investitionsgrenze ist nicht als dauerhafte Obergrenze zu lesen.

Quelle: Entwicklungsprotokoll 25.08.

Funktion: aktuelle Grenze / Betrag in diesem Test nicht ausreichend dokumentiert.

## P6 – Fähigkeiten sind Ressourcen, keine Berufsempfehlung
Dokumentierte Ressourcen unter anderem: systemisches Coaching, jahrzehntelange Arbeit mit Menschen, Ausbildung von Coaches, Technik-/KI-Kompetenz, Strukturieren, Fragen stellen, kreative Problemlösung.

Quelle: Entwicklungsprotokolle 26./27.08.

Funktion: Ressourcen. Daraus darf kein Weg automatisch als passend erklärt werden.

---

# 3. Crashtest A – Petra × Teilzeit / Nebenjob

## 3.1 Zeitsouveränität

Optionsrealität:
- Teilzeit bedeutet nicht automatisch freie Zeiteinteilung.
- feste Termine sind abhängig von Vertrag, Schichtplan, Öffnungszeiten und Rolle häufig mittel bis hoch.
- gleichzeitig existieren auch flexiblere Varianten.

Petra:
- Zeitsouveränität ist stark wichtig.

Befund:
> **UNBEKANNT auf Familienebene.**

Warum:
Die Optionsfamilie ist zu breit. Ohne konkrete Variante und konkrete Stelle darf aus `Teilzeit/Nebenjob` kein Konflikt mit Zeitsouveränität konstruiert werden.

Benötigt:
- Variante: reguläre Teilzeit / Minijob
- Arbeitszeitmodell
- Rollen-/Tätigkeits-Overlay

## 3.2 Systemaufbau / Skalierbarkeit

Optionsrealität:
- persönliche Arbeitszeitbindung hoch
- Skalierbarkeit als persönliches Arbeitsmodell gering
- Einkommensentwicklung möglich, aber nicht klassische Skalierung

Petra:
- langfristig nicht nur Zeit gegen Geld
- Systemaufbau ist wichtig

Befund:
> **KONFLIKT auf dem Aspekt langfristige Arbeits-/Einkommensmechanik.**

Wichtig:
Kein Gesamturteil über die Option. Der Konflikt kann stark relevant sein, wenn Teilzeit der langfristige Hauptweg sein soll; als Übergangs- oder Nebenbaustein kann derselbe Konflikt deutlich weniger bedeutsam sein.

## 3.3 Menschenkontakt

Optionsrealität:
- von kaum bis sehr hoch, komplett rollenabhängig

Petra:
- regelmäßiger Kontakt erwünscht, dauerhaft intensiver Kontakt nicht

Befund:
> **UNBEKANNT.**

Ohne Rolle kein valider Abgleich.

## 3.4 Planbarkeit

Optionsrealität:
- tendenziell hoch bis mittel bei festen Stunden und stabilem Vertrag

Petra:
- Planbarkeit ist in den alten Pilotdaten nicht ausreichend fein bestätigt, um daraus eine belastbare Passung zu machen.

Befund:
> **UNBEKANNT auf Profilseite.**

## 3.5 Zwischenfazit Teilzeit/Nebenjob

Die Option zeigt zwei Dinge gleichzeitig:

1. Es existiert ein echter Konflikt zwischen Petras langfristigem Systemaufbau-Wunsch und der strukturell zeitgebundenen Einkommensmechanik.
2. Viele Alltagsfragen können erst auf Varianten-/Rollenebene geprüft werden.

Es wäre fachlich falsch, daraus entweder `Teilzeit passt` oder `Teilzeit passt nicht` zu machen.

---

# 4. Crashtest B – Petra × Freelancing / Done-for-you

## 4.1 Zeitsouveränität

Optionsrealität:
- kann sehr freie asynchrone Projektarbeit ermöglichen
- kann aber ebenso Kundentermine, Deadlines und Erreichbarkeitsfenster erzeugen

Petra:
- hohe Zeitsouveränität wichtig

Befund:
> **UNBEKANNT auf Familienebene / VARIANTENABHÄNGIG.**

Es muss mindestens geklärt werden:
- konkrete Dienstleistung
- Lieferform
- Projekt vs Retainer
- Kundenanforderungen

## 4.2 Langfristige persönliche Zeitbindung

Optionsrealität:
- Solo-Freelancing ist stark an eigene Lieferkapazität gebunden
- Skalierbarkeit zunächst begrenzt
- Wachstum über Preise, Standardisierung, Produktisierung, Team oder Agentur möglich

Petra:
- langfristig Systemaufbau und weniger lineares Zeit-gegen-Geld wichtig

Befund:
> **KONFLIKT in der reinen Solo-Dauerform, POTENZIELLE PASSUNG in einer später transformierten Wachstumsform.**

Das beweist die Notwendigkeit, Start, Stabilität, Wachstum und neue Rolle getrennt zu matchen.

## 4.3 Menschenkontakt

Optionsrealität:
- typischerweise mittel bis hoch
- Briefing, Abstimmung, Feedback und Übergabe oft unvermeidbar

Petra:
- Kontakt erwünscht, aber nicht dauerhaft intensiv

Befund:
> **UNBEKANNT / konkretisieren.**

Die konkrete Serviceform entscheidet.

## 4.4 Verkauf / Akquise

Optionsrealität:
- Verkauf strukturell vorhanden
- Akquise in der Startphase oft hoch

Petra:
- dokumentierte Verkaufserfahrung bzw. kommunikative Stärke kann Ressource sein
- daraus folgt nicht, dass sie diesen Alltag will

Befund:
> **UNBEKANNT auf Präferenzseite.**

Schutzregel bestätigt:
> Können ist nicht Wollen.

## 4.5 Zwischenfazit Freelancing

Freelancing zeigt, warum Wachstum getrennt betrachtet werden muss. Derselbe Weg kann am Start stark zeitgebunden sein und später durch Produktisierung oder Team in ein anderes Betriebsmodell kippen.

Ein einziges statisches Match wäre irreführend.

---

# 5. Crashtest C – Petra × digitales Produkt

## 5.1 Zeitbindung / Systemaufbau

Optionsrealität:
- Erstellung zunächst oft zeitintensiv
- zusätzlicher Verkauf kann deutlich weniger zusätzliche Lieferzeit benötigen
- Erstellung und Verkauf können strukturell entkoppelt werden

Petra:
- langfristig nicht nur Zeit gegen Geld
- Systeme/Produkte sollen mehrfach Wert erzeugen können

Befund:
> **PASST an diesem konkreten Aspekt.**

Keine Aussage, dass `digitales Produkt` insgesamt zu Petra passt.

## 5.2 Feste Termine / Zeitsouveränität

Optionsrealität:
- reiner Download kann sehr asynchron gestaltet werden
- Termine können durch Launches, Support, Live-Boni oder Kooperationen entstehen, sind aber nicht zwingende Basiseigenschaft

Petra:
- Zeitsouveränität wichtig

Befund:
> **PASST für eine asynchrone Download-/Asset-Variante; UNBEKANNT für andere Varianten.**

Das bestätigt erneut die Variantenlogik.

## 5.3 Skalierbarkeit

Optionsrealität:
- strukturell höher möglich als bei individueller Dienstleistung
- aber nur bei funktionierender Nachfrage, Distribution und tragfähigem Betrieb

Petra:
- Skalierbarkeit / Systemaufbau wichtig

Befund:
> **PASST an der strukturellen Mechanik, aber Markt-/Distributionsrealität bleibt offen.**

Wichtig:
`skalierbar möglich` ist keine Aussage über tatsächlichen Erfolg.

## 5.4 Menschenkontakt

Optionsrealität:
- typischerweise weniger direkter Kundenkontakt als 1:1-Dienstleistung
- Kontakt kann durch Support, Feedback oder Vertriebsweg entstehen

Petra:
- regelmäßiger menschlicher Kontakt ist wichtig

Befund:
> **MÖGLICHER KONFLIKT, aber kein belastbarer Konflikt ohne Szenario.**

Warum:
Ein digitales Produkt muss nicht Petras gesamte Arbeitswoche abbilden. Kontakt kann aus Team, Partnerschaften, Forschung oder anderen Einkommensbausteinen kommen.

Das führt zu einer neuen Matchingfrage:
> Muss diese einzelne Option alle Bedürfnisse erfüllen – oder ist sie ein Baustein in einem Portfolio?

## 5.5 Verkauf / Distribution

Optionsrealität:
- Verkauf ist strukturell hoch relevant
- Produkt ohne Distribution ist noch kein funktionierendes Geschäftsmodell

Petra:
- vorhandene Kommunikations-/Verkaufsressourcen sind dokumentiert
- Wunsch nach dem konkreten Vertriebsalltag ist damit nicht bewiesen

Befund:
> **RESSOURCE vorhanden ist möglich; PASSUNG der Vertriebsarbeit bleibt UNBEKANNT.**

Erneut:
> Fähigkeit ≠ Wunsch.

---

# 6. Zentrale neue Befunde aus dem Crashtest

## M-C1 – Matching braucht die richtige Granularität

Die aktuelle Fachlogik des Option Genome zeigt bereits:

> Optionsfamilie → Optionsvariante → ggf. Rollen-/Tätigkeits-Overlay

Für das Matching folgt daraus:

> **Wenn ein entscheidungsrelevantes Merkmal innerhalb einer Optionsfamilie stark variiert, darf der Matcher auf Familienebene keinen Passungs- oder Konfliktbefund erzwingen.**

Dann gilt:
- konkrete Variante wählen/erzeugen
- bei Tätigkeitsabhängigkeit Rollen-/Tätigkeits-Overlay ergänzen
- bis dahin `unbekannt`

Status: FACH-LAB-VORSCHLAG.

## M-C2 – Optionsrolle / Szenario ist Matchingkontext

Dasselbe Modell kann als:
- Hauptweg
- Nebenweg
- Übergangsweg
- Experiment

unterschiedlich zu bewerten sein.

Beispiel:
Die geringe Skalierbarkeit eines Minijobs kann als langfristiger Hauptweg Konflikt sein, als vorübergehender Zusatzverdienst aber irrelevant oder bewusst akzeptiert.

Vorschlag:
> **Vor wirtschaftlichen Zielkonflikten muss klar sein, welche Rolle die Option im individuellen Szenario spielen soll.**

Die Rolle gehört nicht ins Option Genome selbst, sondern in den Matching-/Szenariokontext.

Status: FACH-LAB-VORSCHLAG; anschlussfähig an Masterregel `Haupt-/Neben-/Übergangsrolle gehört ins individuelle Szenario`.

## M-C3 – `testen` darf kein Ersatz für fehlendes Optionswissen sein

Aktueller B3-Code erlaubt `testen` auf einem offenen Optionsfeld, solange der Profilzettel keine harte/aktuelle Grenze ist.

Das kollidiert mit der später PETRA-APPROVED-Regel RC-2:

> Wenn Wissen über die Option fehlt, wird nicht die Frau getestet.

Fachlicher Vorschlag:
> **`testen` setzt voraus, dass die relevante Eigenschaft/Anforderung der Option ausreichend bekannt ist und die Unsicherheit tatsächlich auf der persönlichen Seite liegt.**

Wenn Optionswissen fehlt:
> `unbekannt` → Option Genome / Recherche.

Status: WIDERSPRUCH AKTUELLER CODE ↔ SPÄTERE PETRA-APPROVED-REGEL; fachlich zu korrigieren.

## M-C4 – Profil-Hypothesen dürfen nicht still matchen

Der aktuelle B3-Code filtert eigene alte Matchinghypothesen und HD-Hypothesen heraus, aber allgemeine aktive Profilzettel mit `herkunft = hypothese` können grundsätzlich in den Matcher gelangen.

Fachlicher Vorschlag:
> **Eine unbestätigte Hypothese über die Frau darf nie allein `passt` oder `konflikt` tragen.**

Erlaubt:
- `unbekannt`
- oder `testen`, wenn die Option bekannt und ein kleiner sicherer persönlicher Test sinnvoll ist.

Status: FACH-LAB-VORSCHLAG; entspricht der neuen PETRA-APPROVED systemischen Grundregel Hypothese ≠ Tatsache.

## M-C5 – Vertrauensgrad der Optionsquelle muss Matchingwirkung beeinflussen

Aktueller Matcher behandelt technisch jedes Feld als `belegt`, sobald es nicht `offene_annahme` ist und einen Wert enthält. Der Vertrauensgrad wird dem Modell gezeigt, aber nicht als harte Validierungsregel geprüft.

Risiko:
Ein Feld mit `vertrauen = niedrig` kann prinzipiell einen scheinbar klaren `passt`- oder `konflikt`-Befund tragen.

Offene Fachentscheidung:
- Ab welchem Vertrauensgrad darf `passt` entstehen?
- Ab welchem Vertrauensgrad darf ein Konflikt mit starker/harter Grenze entstehen?
- Wann muss stattdessen `unbekannt / Optionswissen nachschärfen` gelten?

Vorschlag für 0.1 als Schutzrichtung:
> Je schwerer die Matchingfolge, desto belastbarer muss die Optionsseite belegt sein.

Noch keine starre Schwelle beschlossen.

Status: CONTENT GAP / FACH-LAB-VORSCHLAG.

## M-C6 – Kein user-facing Gesamturteil aus Einzelbefunden ableiten

Der Master definiert die vier Befunde `passt`, `Konflikt`, `unbekannt`, `testen` **je Aspekt**.

Der aktuelle B3-Code verdichtet dennoch je Weg zu einem Gesamtstatus. Dabei gilt technisch unter anderem:
- Grenzkonflikt → konflikt
- sonst testen → testen
- sonst irgendein passt → passt
- weiche Konflikte dominieren nie

Risiko:
Eine Option könnte mehrere starke Präferenzkonflikte und genau eine belegte Passung haben und user-facing insgesamt als `passt` wirken.

Fachlicher Vorschlag:
> **User-facing kein zusammenfassendes `passt` für die ganze Option.**

Stattdessen:
- einzelne Befunde nebeneinander
- harte Blockade sichtbar
- offene Punkte sichtbar
- Testbedarf sichtbar
- Frau entscheidet, ob der Weg interessant genug bleibt

Falls die Technik einen internen Prozessstatus braucht, darf dieser nicht mit einem Lebensurteil verwechselt werden.

Status: FACH-LAB-VORSCHLAG / B3 REVIEW.

---

# 7. Was dieser Crashtest über die Methode zeigt

Die Matchinglogik wird belastbarer, wenn sie vier verschiedene Dinge trennt:

1. **Wer ist die Frau / was gilt für sie?** – Economic Profile
2. **Wie funktioniert die Option?** – Option Genome
3. **Welche konkrete Ausprägung prüfen wir?** – Variante / Rollenoverlay
4. **Welche Rolle soll dieser Weg in ihrem wirtschaftlichen Leben spielen?** – individuelles Szenario

Erst dann ist ein wirtschaftlicher Zielkonflikt wirklich interpretierbar.

Kurzform:

> **Profil × Optionsfamilie × konkrete Variante × Szenario × Entwicklungsstufe**

Nicht jeder Match braucht immer alle fünf Ebenen. Aber sobald eine Ebene den Befund materiell verändert, darf sie nicht still weggelassen werden.

---

# 8. Noch nicht an Claude Code geben

Noch keine Umsetzung, bis Petra mindestens zu folgenden Punkten entschieden hat:

1. M-C2: Szenario-/Rollenebene im Matching
2. M-C3: `testen` nur bei bekannter Optionsseite
3. M-C5: Evidenz-/Vertrauensschwelle für Optionsdaten
4. M-C6: kein user-facing Gesamturteil pro Option

M-C1 ist eng mit OG-S1 aus dem Option Genome Lab verbunden und sollte gemeinsam entschieden werden.

M-C4 ist methodisch stark durch die PETRA-APPROVED systemischen Regeln gestützt, sollte aber vor Codeänderung als konkrete Matcher-Regel freigegeben werden.

---

# 9. Nächster fachlicher Schritt

Petra Review der sechs Matchingbefunde M-C1 bis M-C6.

Danach:
- bestätigte Regeln unter `entscheidungen/` dokumentieren
- Rule Library auf 0.2 konsolidieren
- klaren Claude-Code-Auftrag für B3-Korrekturen schreiben
- anschließend Crashtest gegen konkrete Varianten wiederholen
