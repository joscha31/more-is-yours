# MORE IS YOURS – Projektregel GitHub & Übergaben

**Stand:** 15.09.2026  
**Status:** PETRA APPROVED  
**Gilt für:** alle ChatGPT-Chats im Projekt More is Yours

## 1. GitHub ist die dauerhafte Masterquelle

Das Repository `joscha31/more-is-yours` ist die dauerhafte Projektbibliothek für More is Yours.

Dort liegen insbesondere:

- Gesamt-Master / Quelle der Wahrheit
- verbindliche Entscheidungen
- Gesetze und Projektregeln
- Fachspezifikationen
- Entwicklungsprotokolle
- Berichte für ChatGPT
- Content Gaps und Übergabedokumente, soweit dauerhaft relevant

Chats sind Arbeitsräume. Dauerhaft relevantes Wissen darf nicht nur in einem Chat verbleiben.

## 2. Petra bekommt wichtige Inhalte immer zusätzlich direkt im Chat

GitHub ist Ablage – aber nicht Petras einzige Lesefläche.

Wenn ein wichtiger Inhalt entsteht, muss ChatGPT ihn Petra **zusätzlich vollständig und lesbar im Chat zeigen**.

Insbesondere gilt das für:

- neue verbindliche Entscheidungen
- Methodenregeln
- Architekturentscheidungen
- Quality-Reviews
- Content Specs
- Content Gaps
- Build Briefs
- Co-Work-Briefs
- Übergaben an Claude Code

Petra soll keine MD-Datei öffnen müssen, um zu verstehen, was entschieden oder übergeben wurde.

## 3. Wenn Claude etwas tun soll, steht der fertige Claude-Befehl immer im Chat

Sobald aus einer Entscheidung, einem Review oder einem Content Gap ein Auftrag an Claude Code oder Claude Co-Work entsteht, schreibt ChatGPT einen **fertigen Copy-&-Paste-Befehl direkt in den Chat**.

Petra soll nicht selbst formulieren müssen, was Claude als Nächstes tun soll.

Der Claude-Befehl enthält mindestens:

- welche GitHub-Datei(en) gelten
- Status der Inhalte
- konkretes Ziel
- was Claude tun darf
- was Claude ausdrücklich nicht tun darf
- erwartete Rückmeldung

## 4. ChatGPT entscheidet selbst, wo etwas hingehört

Petra soll möglichst nicht entscheiden müssen:

- ob etwas in die Quelle der Wahrheit gehört
- ob es ein Entwicklungsprotokoll ist
- ob es eine Architekturentscheidung ist
- ob es ein Content Gap ist
- ob es ein Build Brief ist
- in welchen GitHub-Ordner eine Datei gehört

ChatGPT wählt anhand der Projektarchitektur den passenden Ort und erklärt Petra nur kurz, was gespeichert wurde.

Bei echter strategischer oder fachlicher Entscheidungshoheit bleibt Petra die Freigabeinstanz.

## 5. Vorschlag und Freigabe strikt trennen

ChatGPT darf einen eigenen fachlichen Vorschlag dokumentieren, muss ihn aber eindeutig kennzeichnen.

Mögliche Status:

- DRAFT
- FACH-LAB-VORSCHLAG
- PETRA REVIEW
- PETRA APPROVED
- BUILD READY
- IMPLEMENTED
- TESTED

Nur ausdrücklich von Petra bestätigte fachliche Entscheidungen dürfen als `PETRA APPROVED` gelten.

## 6. Verbindliche Entscheidungen nach Petra-Freigabe dauerhaft sichern

Wenn Petra eine relevante Entscheidung bestätigt, soll ChatGPT sie ohne zusätzliche Aufforderung dauerhaft in GitHub sichern und – wenn nötig – den `INDEX.md` aktualisieren.

Petra muss nicht extra sagen: „Bitte speichern.“

## 7. GitHub vor Chat-Erinnerung

Wenn aktuelle Projektdateien in GitHub verfügbar sind, werden sie bei Widersprüchen oder relevanter Fortsetzungsarbeit höher gewichtet als Chat-Erinnerung.

Nicht aus alten Chats rekonstruieren, wenn der aktuelle Masterstand in GitHub verfügbar ist.

## 8. Keine unnötige Dateiarbeit für Petra

Petra soll nicht mit Dateiverwaltung belastet werden.

Deshalb möglichst nicht:

- „Lade diese Datei herunter und gib sie Claude.“
- „Öffne zuerst diese MD.“
- „Speichere das bitte irgendwo ab.“

Stattdessen:

1. ChatGPT zeigt den Inhalt im Chat.
2. ChatGPT speichert dauerhaft Relevantes selbst in GitHub, wenn Zugriff besteht.
3. ChatGPT liefert den fertigen Claude-Befehl.
4. Petra kopiert höchstens noch den Auftrag zu Claude, wenn kein direkter Claude-Zugriff vorhanden ist.

## 9. Repository

Verbindliches Projekt-Repository:

`joscha31/more-is-yours`

Der technische Produktcode von Ilse kann in einem separaten Arbeits-Repo liegen. Das ändert nichts daran, dass fachliche Wahrheit, Regeln und Freigaben in `more-is-yours` dokumentiert werden.

## 10. Kurzregel für jeden Projektchat

> **GitHub ist die dauerhafte Wahrheit. Petra bekommt die verständliche Fassung immer direkt im Chat. Wenn Claude etwas tun soll, bekommt Petra immer den fertigen Claude-Befehl. Wichtige bestätigte Entscheidungen speichert ChatGPT selbst passend ab. Petra soll nicht zum Dateimanager des Projekts werden.**
