# INDEX – Modulares Entscheidungssystem

**Stand:** 15. September 2026  
**Funktion:** Zentrales Inhaltsverzeichnis des Projekts

> Der Index enthält keine ausführlichen Fachinhalte. Er zeigt nur, welche Dateien es gibt, wofür sie zuständig sind und welchen Status sie haben.

## Prioritätsregel bei Widersprüchen

1. aktuelle `Quelle-der-Wahrheit-*.md`
2. ausdrücklich bestätigte spätere strategische Entscheidung
3. freigegebene Spezifikation
4. Forschungsberichte
5. Pilot- und Entwicklungsprotokolle
6. Marketing-Ideen
7. ältere Chats / Brainstormings

Widersprüche werden sichtbar gemacht und bewusst entschieden.

---

## Strategie

| Datei | Funktion | Status |
|---|---|---|
| `strategie/Quelle-der-Wahrheit-2.1.md` | Verbindlicher strategischer Stand des Gesamtprojekts | verbindlich |
| `strategie/Vision.md` | Ausführliche Vision / emotionaler Nordstern | noch aus Visions-Chat zu erstellen |
| `strategie/Mission.md` | Falls später eine ausführliche Mission außerhalb der Quelle benötigt wird | optional / noch nicht angelegt |

---

## Forschung

| Datei | Funktion | Status |
|---|---|---|
| `forschung/Forschungsbericht-1.0-Bewertungsraster.md` | Fachliche Grundlagen für Bewertungsraster und Entscheidungslogik | vorhanden / Referenz |
| `forschung/Pruefung-Forschungsbericht-1.0.md` | Verdichtung des Berichts auf die kleinste testbare Strecke | vorhanden / Referenz |

---

## Pilotierung

| Datei | Funktion | Status |
|---|---|---|
| `pilot/Kleinste-Strecke-1.0.md` | Drei Ebenen, zehn Fragen – kleinste testbare Entscheidungsstrecke | Arbeitsmodell |
| `pilot/Pilotin-0-Petra.md` | Petras persönlicher Testdurchlauf | laufend |

---

## System

| Datei | Funktion | Status |
|---|---|---|
| `system/Ilse-Prinzipien.md` | Verbindliche Dialog-, Sprach- und Begleitprinzipien für Ilse | im Aufbau |
| `entscheidungen/2026-09-15-ilse-systemische-coachingregeln.md` | Systemische Gesprächsregeln: Hypothesen fragen statt behaupten; Fachwissen geben, Entscheidung bei der Frau | **PETRA APPROVED** |
| `gesetze/2026-09-15-projektregel-github-arbeitsweise.md` | Projektweite Regel: GitHub als Masterquelle; wichtige Inhalte zusätzlich im Chat; fertiger Claude-Befehl bei Übergaben | **PETRA APPROVED** |
| `system/Programmarchitektur.md` | Fachliche Arbeitsarchitektur aus den Forschungsergebnissen; Teil A Klarheit, Teil B Möglichkeit, Teil C Umsetzung | vorhanden / Arbeitsmodell |
| `system/Offene-Forschungsfragen.md` | Systemfragen, die bewusst noch nicht entschieden sind | sinnvoll, noch anzulegen |

---

## Marketing

| Datei | Funktion | Status |
|---|---|---|
| `marketing/Marketing-Ideen.md` | Parkplatz für Marketingideen, die strategisch noch nicht bearbeitet werden | anzulegen |

---

## Entwicklungsprotokolle

| Datei | Funktion | Status |
|---|---|---|
| `entwicklungsprotokolle/2026-08-24.md` | Rekonstruktion der Entwicklung vom 24.08.2026 | vorhanden |
| `entwicklungsprotokolle/2026-08-25.md` | Entwicklung vom 25.08.2026 | vorhanden |

Künftige Protokolle werden nach relevantem Arbeitstag ergänzt.

---

## Spätere technische Spezifikationen

| Datei / Ordner | Funktion | Status |
|---|---|---|
| `specs/` | Fachlich freigegebene Vorgaben für Claude Code | noch nicht beginnen |
| `specs/Ilse-Spezifikation-0.1.md` | Erste umsetzbare Spezifikation nach ausreichender Pilotierung | später |

**Versionsregel:** Versionsnummern stehen für fachlich geschlossene Entwicklungsstände, nicht für Kalendertage.

---

## Empfohlene Repository-Struktur

```text
modulares-entscheidungssystem/
├── INDEX.md
├── strategie/
├── forschung/
├── pilot/
├── system/
├── marketing/
├── entwicklungsprotokolle/
└── specs/
```

---

## Regel für neue Dateien

Eine neue Datei entsteht nur, wenn das Wissen dauerhaft gebraucht wird und eine eigene Funktion hat, die nicht sauber von einer bestehenden Datei erfüllt wird.

Jede neue dauerhafte Projektdatei wird anschließend in diesem `INDEX.md` ergänzt.

---

## Seit 15.09.2026: Umbenannt in „More is Yours" — und die Wahrheit des Programms liegt hier

Das Repo hieß früher `modulares-entscheidungssystem-`. Heute heißt das Programm More is Yours, und dieses Repo ist seine Wahrheit. Neu dazu:

| Ordner | Was drin liegt |
|---|---|
| `master/` | der **Gesamt-Master 3.0** (14.09.2026) — zentrale Arbeits- und Orientierungsgrundlage für Petra, ChatGPT, Claude Co-Work und Claude Code |
| `gesetze/` | Projektweite Regeln für jede Seite, jeden Text und die Zusammenarbeit – u. a. UI-Gesetz und GitHub-/Übergaberegel |
| `entscheidungen/` | verbindliche Architektur- und Fachentscheidungen nach Petra-Freigabe (z. B. B4–B7 und Ilses systemische Coachingregeln, 15.09.) — was Claude Code danach umsetzt |
| `berichte-fuer-chatgpt/` | die Rückmeldungen je Baupaket in der Form von Master §25 (B4 Dienstag · B5 HD Lens · B6 Realitätscheck · B7 Quality Guard · UI-Gesetz) |

**Wo der Code liegt:** Ilse 0.1 (das Haus) im Arbeits-Repo `meine-projekte` unter `outputs/moreisyours-ilse/`, live auf `https://ilse.moreisyours.de`. Landingpage: `https://moreisyours.de`.
