# BUILD BRIEF – Beispiel-Dossier sichtbar machen

**Stand:** 15.09.2026  
**Status:** BUILD READY FOR PROTOTYPE ONLY  
**Ziel:** Eine visuelle Beispielseite / Landingpage-Komponente bauen, die zeigt, was eine Frau bei More is Yours konkret in der Hand haben kann.

## Verbindliche Quellen

1. `forschung/2026-09-15-beispiel-dossier-landingpage-0.1.md` – FACH-LAB-VORSCHLAG / PETRA REVIEW; für diesen Prototyp exakt verwenden, nicht fachlich erweitern
2. `entscheidungen/2026-09-15-ergebnisprodukt-mehr-ist-mehr.md` – PETRA APPROVED
3. `entscheidungen/2026-09-15-ergebnisversprechen-konkreter-handlungsplan.md` – PETRA APPROVED
4. `gesetze/2026-09-15-ui-gesetz-lebendig-spielerisch.md` – PETRA APPROVED
5. `master/2026-09-14-more-is-yours-gesamt-master-3.0.md` – MASTER

## Ziel

Petra soll eine visuelle Vorschau sehen können, bei der sofort verständlich wird:

> **Das ist der konkrete Gegenwert von More is Yours.**

Die Vorschau soll wie ein Ausschnitt aus einem hochwertigen persönlichen Dossier wirken – nicht wie eine interne Datenansicht und nicht wie ein Formular.

## Wichtig

Das Beispiel ist fiktiv und muss sichtbar als solches gekennzeichnet werden:

> **Beispielauszug – so kann dein persönliches Dossier aussehen.**

Keine echte Kundin vortäuschen.
Keine Testimonials erfinden.
Keine Erfolgsgarantie.

## Inhalt

Nutze die Beispielperson Sabine, 52, und die Inhalte aus der Fachdatei.

Die sichtbare Vorschau soll mindestens diese 6 Bereiche enthalten:

1. **Was du mitbringst**
2. **Was für dein Leben wichtig ist**
3. **3 geprüfte Möglichkeiten**
4. **Dein normaler Dienstag**
5. **Was noch offen ist**
6. **Dein konkreter Plan für die nächsten Schritte**

Die Nutzerin soll auf einen Blick erkennen:

- More is Yours sammelt nicht nur Eigenschaften.
- Es vergleicht reale Möglichkeiten.
- Es zeigt Gründe dafür und dagegen.
- Es zeigt offene Fragen ehrlich.
- Es übersetzt eine Möglichkeit in Alltag.
- Es endet mit konkreten nächsten Schritten.

## Darstellungsprinzip

Bitte das UI-Gesetz anwenden:

- hell, hochwertig, erwachsen
- spielerisch, aber nicht kindisch
- Karten dürfen Navigation sein, nicht der ganze Inhalt
- hinter einem Einstieg darf Tiefe sichtbar werden
- keine sterile Tabellenansicht als Hauptdarstellung
- keine dunkle Hero-Fläche
- keine Prozent-Matches

Empfehlung für die Vorschau:

### Kopf

`Beispielauszug – so kann dein persönliches Dossier aussehen`

Darunter:

`Sabine, 52 · fiktives Beispiel`

Kurzer Ausgangssatz:

> „Ich weiß gar nicht, was ich Besonderes kann. Ich habe einfach immer gemacht, was gemacht werden musste.“

### Danach

Die 6 Bereiche als hochwertige aufklappbare Dossier-Kapitel / Karten.

Mindestens 1 Bereich soll auf dem ersten Screenshot geöffnet sein, damit sofort sichtbar ist, dass hinter den Karten echter Inhalt liegt.

### Besonders sichtbar

Der Abschnitt **„Was du jetzt konkret tun sollst“** soll visuell stärker sein als die übrigen Kapitel.

Er darf wie eine persönliche Gebrauchsanleitung wirken:

- JETZT
- NOCH NICHT
- DANACH

Keine To-do-App-Optik; eher hochwertiges persönliches Dossier.

## Darf

- vorhandene A+-Farbwelt und Komponenten wiederverwenden
- bestehende Dossier-/Kartenmuster verwenden, wenn vorhanden
- Inhalte aus der Fachdatei kürzen, wenn die volle Fassung per Aufklappen/Detailansicht erreichbar bleibt
- leichte Bewegung / Aufklappen / Siegel / sichtbare Zustände aus dem UI-Gesetz verwenden

## Darf NICHT

- neue Optionsdaten erfinden
- Einkommenszahlen ergänzen
- Matching-Scores erfinden
- Sabines Profil um neue Eigenschaften ergänzen
- fachliche Begründungen umdeuten
- neue Ergebnislogik bauen
- live deployen
- bestehende Live-Landingpage verändern

## Technischer Ort

Baue zuerst eine separate `noindex, nofollow`-Vorschau im bestehenden Arbeitsrepo der More-is-Yours-Seite.

Wenn sinnvoll, als eigene Datei, z. B.:

`outputs/reel-generator-tool/moreisyours-dossier-beispiel-2026-09-15.html`

Kein Deploy.

## Mobile Pflicht

Auf 375 px muss sofort erkennbar sein:

1. persönliches Dossier
2. echte Tiefe hinter den Karten
3. konkrete nächste Schritte

## Akzeptanzkriterien

1. Petra versteht ohne Erklärung, was die Frau am Ende konkret bekommt.
2. Das Ergebnis wirkt nach substanzieller Leistung, nicht nach 3 KI-generierten Karten.
3. Es ist klar als fiktives Beispiel gekennzeichnet.
4. Gründe dafür/dagegen/offen bleiben sichtbar.
5. Der normale Dienstag ist sichtbar.
6. Der konkrete Handlungsplan ist sichtbar und stark.
7. Keine neue Fachlogik wurde erfunden.
8. Live-Seite bleibt unverändert.
9. Kein Deploy.

## Rückmeldung von Claude Code

Bitte nur zurückgeben:

- Vorschau-Link / lokaler Pfad
- neu angelegte oder geänderte Dateien
- mobile Prüfung 375 px: ja/nein
- Live-Seite unverändert: ja/nein
- Deploy durchgeführt: nein
- CONTENT / METHOD / DATA GAPS, falls beim Bauen entdeckt

Keine weiteren Änderungen ohne neuen Auftrag.
