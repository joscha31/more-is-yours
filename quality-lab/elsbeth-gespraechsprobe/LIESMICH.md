# Elsbeth-Gesprächsprobe (0.11 gegen 0.12-Prüffassung)

Stand: 30.10.2026 · Status: **TEST / PETRA REVIEW** · nur auf diesem Mac · ohne Petras Ja zu Modell und Obergrenze wird nichts gesendet.
Bericht und vollständiger Text: `../../berichte-fuer-chatgpt/2026-10-30-elsbeth-0.12-pruef-fassung.md`.

## Was hier liegt
| Datei | wofür |
|---|---|
| `fassungen/elsbeth-0.11.txt` | Vergleichsfassung 0.11 (doppeltes Satzstück herausgenommen) |
| `fassungen/elsbeth-0.12-pruef.txt` | die Prüffassung |
| `probe.html` · `server.mjs` | Petras Probe-Seite: blind, ausgewogen gemischt, Bewertung nach jedem Gespräch, Auflösen am Ende |
| `testgast.mjs` · `gaeste.json` | antwortender Testgast: 3 erfundene Gäste × 2 Fassungen × 2 Wiederholungen, blind nummeriert |
| `ki.mjs` | gemeinsamer Anschluss über OpenRouter mit harter Obergrenze (`ausgaben.json`) |
| `gespraeche-petra/` | Petras eigene Gespräche (nur auf dem Mac, nicht im Git) |
| `gespraeche-testgast/` | Testgast-Gespräche und getrennter Schlüssel |

## Starten (macht Claude Code nach Petras Ja)
- Trockenlauf, nichts wird gesendet: `node server.mjs` → `http://127.0.0.1:8794`
- Echt: `node server.mjs --ja --modell anthropic/claude-sonnet-5.5 --budget 6`
- Testgast: `node testgast.mjs --ja --modell anthropic/claude-sonnet-5.5 --gast anthropic/claude-sonnet-5.5 --budget 6 --wiederholungen 2`

Beide teilen sich dieselbe Obergrenze. Elsbeth bekommt nur Anweisung und Verlauf: kein Flur, kein Zähler, keine Regie. Die Begrüßung ist Petras freigegebener Satz und steht fest auf der Seite. Sobald eine Tür aufgeht (▸ UNKNOWN), endet die Probe.

## Grenzen
Keine Verbindung zur Zentrale, zur Halle, zum Elsbeth-Server oder zu moreisyours.de. Erreichbar nur unter `127.0.0.1`.
