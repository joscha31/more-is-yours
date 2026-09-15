# MORE IS YOURS – Voice-Zugangsschutz über geteilte ChatGPT-Projekte 0.1

**Stand:** 15.09.2026
**Status:** TECH-RESEARCH / PETRA REVIEW · NICHT BUILD READY · KEINE finale Architekturentscheidung
**Bereich:** Ilse Voice · eigener ChatGPT-Account · Kündigung/Zugangsschutz · Supabase · Provider-Unabhängigkeit

## 1. Problem

Die gewünschte Low-Cost-Architektur nutzt GPT-Live im eigenen ChatGPT-Account der Nutzerin, damit More is Yours nicht die laufenden Voice-API-Minuten bezahlt.

Würde die vollständige Ilse-Anweisung einfach in ein persönliches Projekt der Nutzerin kopiert, könnte More is Yours den Zugriff nach Kündigung nicht sauber entziehen. Außerdem würde zu viel proprietärer Inhalt dauerhaft im Account der Nutzerin liegen.

## 2. Aktuell stärkste technische Arbeitshypothese

Nicht die Nutzerin besitzt das Ilse-Projekt, sondern More is Yours.

Für jede aktive Nutzerin wird ein eigenes, getrenntes ChatGPT-Projekt vorgesehen:

- Owner: More is Yours / dafür vorgesehener ChatGPT-Account bzw. Workspace
- Mitglied: genau diese Nutzerin
- Zugriff: möglichst nur Chatten, nicht Bearbeiten
- Voice: GPT-Live innerhalb des Projekts
- Daten-Wahrheit: Supabase / More is Yours
- pro Frau eigenes Projekt, keine gemeinsame Mehrnutzerinnen-Umgebung

OpenAI dokumentiert, dass Voice in Projects Projektanweisungen, Projektquellen und frühere Projektchats verwenden kann. Geteilte Projekte können Mitglieder mit Chat- oder Bearbeitungszugriff enthalten. Der Project Owner kann Mitglieder später entfernen.

Damit wäre prinzipiell möglich:

> aktives Abo → Projektzugriff aktiv
> Kündigung/Ablauf → Mitglied aus dem Projekt entfernen

## 3. Wichtige Einschränkung

Das ist kein perfekter Kopierschutz.

Mitglieder können Inhalte sehen, die im Projekt für sie sichtbar sind. Sichtbare Anweisungen, Dateien oder frühere Antworten können grundsätzlich kopiert werden. Außerdem können Projektmitglieder eigene Chats aus einem geteilten Projekt verschieben.

Deshalb darf der proprietäre Kern von More is Yours NICHT vollständig in den sichtbaren Projektanweisungen oder Projektdateien liegen.

## 4. Thin-Shell-Prinzip

Das ChatGPT-Projekt enthält nur eine dünne Ilse-Schale:

- Ton und Gesprächshaltung
- wenige zentrale Dialogschutzregeln
- kein vollständiges Economic-Profile-Schema
- kein vollständiges Option Genome
- keine Matchinglogik
- keine vollständige Reality-Learning-Logik
- keine internen Golden Cases
- keine internen Qualitätsregeln in voller Tiefe
- keine geheimen Systemdaten

Der eigentliche Produktwert bleibt bei More is Yours:

- Supabase-Profil
- Economic Profile
- Option Genome
- Matching
- Reality Learning
- Historie
- Versionierung
- bestätigte Entscheidungen
- aktuelle fachliche Regeln
- Text-Ilse als Daten-/Methodentor

## 5. Dynamischer Kontext bleibt abonnementsgebunden

Weil GPT-Live derzeit keine verbundenen Apps oder Plugins unterstützt, kann es Supabase nicht direkt lesen/schreiben.

Deshalb bleibt für den MVP die Start-/Abschlusskarten-Brücke sinnvoll:

### Vor dem Gespräch
More is Yours erzeugt nur für aktive Nutzerinnen eine aktuelle Startkarte aus Supabase.

Die Startkarte enthält ausschließlich den für die Sitzung nötigen Kontext und keine vollständige Methode.

### Nach dem Gespräch
GPT-Live erzeugt eine Abschlusskarte.

Die Nutzerin übergibt sie zurück an More is Yours.

Die Text-Ilse prüft:
- direkt gesagt
- Ableitung
- Hypothese
- Widerspruch
- Änderungsvorschlag

Erst nach Bestätigung wird Supabase aktualisiert.

Nach Kündigung gibt es:
- keinen Zugriff mehr auf das von More is Yours besessene geteilte Projekt
- keine neuen Startkarten
- keinen Zugriff auf aktuelle Supabase-Datenwelt
- kein Matching / Reality Learning / Text-Ilse-System

Eine zuvor kopierte dünne Persona-Schale ist damit nicht gleichbedeutend mit dem More-is-Yours-Produkt.

## 6. Skalierungsfrage

OpenAI dokumentiert derzeit die Erstellung und Freigabe von ChatGPT-Projekten primär über die ChatGPT-Oberfläche. Die öffentlich dokumentierte Projects API der OpenAI API-Plattform ist ein anderes Produkt (API-Organisationsprojekte) und darf nicht mit ChatGPT Shared Projects verwechselt werden.

Für einen MVP kann deshalb ein persönliches Shared Project pro Pilotin zunächst manuell eingerichtet werden.

Vor Skalierung muss geprüft werden:
- lässt sich Erstellung/Einladung/Entfernung von ChatGPT Shared Projects automatisieren?
- reicht ein Business-/Enterprise-Workspace für sauberes Lifecycle-Management?
- welche Compliance-/Datenschutzanforderungen entstehen?
- wie wird verhindert, dass mehrere Frauen gegenseitig Chats sehen? Antwortvorgabe: grundsätzlich ein getrenntes Projekt pro Frau.

## 7. Kündigungslogik als Test

Ein kleiner Proof of Concept soll prüfen:

1. More is Yours erstellt ein Shared Project für Testnutzerin A.
2. A tritt mit ihrem eigenen ChatGPT-Account als Chat-Mitglied bei.
3. A startet GPT-Live innerhalb dieses Projekts.
4. Live nutzt Projektanweisung + Startkarte.
5. A führt ein 10–15-Minuten-Testgespräch.
6. A erzeugt Abschlusskarte.
7. More is Yours übernimmt und prüft sie.
8. Danach wird A aus dem Projekt entfernt.
9. Prüfen:
   - verliert A den Zugriff auf das Projekt?
   - welche Chats/Informationen bleiben ggf. in ihrem Account sichtbar?
   - konnte A vorher Chats aus dem Projekt verschieben?
   - was bleibt nach Entzug tatsächlich nutzbar?
10. Ergebnis dokumentieren, bevor diese Architektur als BUILD READY gilt.

## 8. Langfristiger Schutz: Open-Source-Orchestrierungsschicht

Petra bewertet den Ansatz einer austauschbaren Voice-Hülle (z. B. Pipecat oder LiveKit) als strategisch sehr interessant.

Aktuelle Richtung, noch keine finale Bauentscheidung:

> More is Yours soll langfristig nicht neu gebaut werden müssen, wenn GPT-Live verschwindet oder ein anderer Voice-Provider deutlich besser wird.

Zielbild:

> More-is-Yours-System / Supabase
> ↕
> austauschbare Orchestrierungsschicht
> ↕
> Voice-Provider A / B / C

Die Orchestrierungsschicht ist kein Ersatz für die heutige günstige BYO-ChatGPT-Live-Lösung, sondern ein langfristiger Resilienzpfad.

Moshi wird aktuell nicht weiter priorisiert, weil die derzeit dokumentierte Sprachunterstützung für eine deutsche Ilse nicht passt.

## 9. Noch NICHT entschieden

- welcher ChatGPT-Tarif für Nutzerinnen Mindestvoraussetzung wird
- ob das Shared-Project-Modell langfristig automatisierbar ist
- ob Business/Enterprise nötig wird
- wie viel Persona-/Methodenwissen in der Thin Shell sichtbar sein darf
- wie genau Start-/Abschlusskarten UX-seitig eingebettet werden
- Pipecat versus LiveKit
- welche deutsche Open-Source-/Low-Cost-Voice später als Fallback dient

## 10. Nächster sinnvoller Test

Kein großer Build.

Zuerst ein manueller End-to-End-Test mit einer Testnutzerin:

> More is Yours Shared Project → GPT-Live → Startkarte → Gespräch → Abschlusskarte → Text-Ilse → Supabase → Zugriff entziehen.

Der Test muss sowohl Gesprächsqualität als auch Kündigungs-/Zugangslogik prüfen.
