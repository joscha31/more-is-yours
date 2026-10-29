# Elsbeths Gehirn, Stufe 1: technische Ergebnisse (29.10.2026)

Status: **TECHNISCHER BERICHT / PETRA REVIEW**. Claude Code dokumentiert nur Messwerte und gibt keine kreative Bewertung oder Freigabe. Die Qualitätsentscheidung trifft Petra, und zwar blind auf der Zentrale-Seite `elsbeth-blindvergleich.html`.
Hinweis an Petra: Bitte zuerst blind vergleichen und erst danach die Gesprächsdateien in `stufe-1-gespraeche/` öffnen, denn ihre Dateinamen nennen das Modell.

## Was gelaufen ist
- 30 Gespräche: 3 Modelle × 5 Fälle (Katalog v2, freigegeben) × 2 Wiederholungen, alle in Bedingung 2 („im Erlebnis“), der Kanon Teil 1 bis 3 unverändert angehängt.
- Die exakt gesendeten Anweisungen: `anweisung-2-erlebnis.md` (3.659 Wörter) und `anweisung-1-frei.md` (2.633 Wörter, für Stufe 2).
- Alle Personen und Geschichten sind erfunden.

## Kosten und Zeiten (gemessen)

| Modell | Gespräche | Kosten gesamt | je Gespräch | Antwortzeit je Antwort | Ausgabe-Tokens je Antwort (mit Nachdenken) |
|---|---|---|---|---|---|
| `gpt-6-astra` | 10 | 2,52 $ | 25,2 ct | 5,9 s | 167 |
| `gpt-6.1-sol` | 10 | 0,46 $ | 4,6 ct | 6,7 s | 173 |
| `claude-opus-5-5` | 10 | 3,66 $ | 36,6 ct | 11,9 s | 1.014 |
| **zusammen** | 30 | **6,64 $** von 25 $ | | | |

- **Gegenprobe der Kostenzählung:** Für das erste Gespräch (Astra, Fall A) zählte das Skript 0,354 $. Die OpenAI-Nutzungsanzeige stieg um genau 0,35 $ und 10 Anfragen.
- **Opus ist teurer als geschätzt,** weil es je Antwort rund 1.000 Ausgabe-Tokens schreibt, den größten Teil davon als unsichtbares Nachdenken. Deshalb braucht es auch doppelt so lange.

## Beobachtungen ohne Wertung (aus den Steuerzeichen, nicht aus dem Text)
- **Fall D (Korrektur):** Alle 6 Läufe haben zuerst „ängstlich“ vorgeschlagen. Nach der Ablehnung hängte jedes Modell in jedem Lauf „die Ungeduldige“ auf, also den Namen des Gasts. In einem Opus-Lauf (w2) hing danach zusätzlich „Die Ängstliche“ im Flur.
- **Fall E (knapp):** Astra und Sol haben in keinem Lauf einen Rahmen vorgeschlagen, Opus in jedem Lauf einen.
- **Anzahl der Rahmen nach 8 Gastsätzen:** Opus füllt im Schnitt die meisten Rahmen, Astra die wenigsten.
- **Schreibweise der Namen:** Je nach Lauf heißt es „der … Anteil“, „die …“ oder „Der …“. Das war schon bei früheren Läufen so.

## Nächster Schritt
Petra vergleicht blind. Mit dem Modell, das sie am meisten überzeugt, läuft danach Stufe 2: frei gegen Erlebnis, Fälle A, B, C und E, je 2-mal, 8 Gespräche, geschätzt 0,40 $ (Sol) bis 3 $ (Opus).
