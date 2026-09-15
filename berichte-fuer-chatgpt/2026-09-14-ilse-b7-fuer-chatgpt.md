# Bericht Baupaket B7 — Quality Guard 0.1 (Ilse 0.1, 14.09.2026 nachts)

Kontext für dich: Gesamt-Master 3.0 §18 (14 harte K.-o.-Regeln, N100 bleibt Regressionstest), §23 B7, §25 (Claude Code legt keine neuen K.-o.-Regeln fest). Der Prüfstand `ilse-quality-lab` (14.09.) bleibt, wo er ist; der Guard im Haus hält beides zusammen.

## Was gebaut ist

1. **Katalog = Master §18:** Test, dass die 14 K.-o.-Regeln des Labs die 14 des Masters sind (gleiche Reihenfolge), jede Regel einen Fall hat, jeder negative Fall nur bekannte Regeln nennt. **N100 dauerhaft** — fehlt er, schlägt der Test fehl.
2. **Fassungen aus dem Code:** Persona, Beobachterin, Zielkarten, Matcher, Optionen, HD, Dienstag, Realitätscheck — nie getippt.
3. **Das Tor (Regression):** liest die Läufe des Labs zur heutigen Fassung (Persona + Beobachterin gleich). **Nur eine Bewertung eines Menschen zählt**; ein KI-Vorschlag bleibt Vorschlag. Ein FAIL → ROT (Test schlägt fehl). Alles bewertet ohne FAIL → GRÜN. Sonst wird der Regressionstest mit Grund **übersprungen** — nie grün ohne Mensch.
4. **`scripts/quality-guard.mjs --lauf`:** alle negativen Golden Cases gegen die echte Ilse 0.1 + Bewertungsbogen. **Erster Lauf gefahren:** 15 Fälle inkl. N100, 15/15 Antworten, Ø 3,0 s, 11,8 US-Cent. Bogen: `runs/2026-09-14-2130-guard-2026-09-14-b6-final-bogen.md`.
5. Ampel heute: 🟡 UNBEWERTET · Katalog 14/14 ✅ · N100 da · 87 Tests grün, 1 übersprungen (der Regressionstest, mit Grund).

## Was der Guard bewusst NICHT tut

Keine Regex-Prüfung von Ilses Live-Antworten — das wäre eine erfundene Regel mit Wirkung auf die Frau. Das technische Netz gibt es nur, wo der Master es beschlossen hat (HD-Wächter U-01–U-11 für Bibliothekstexte, B5).

## Offene Annahmen — bitte prüfen

1. „Dieselbe Fassung“ = Persona + Beobachterin gleich. Soll ein Modellwechsel als neue Fassung zählen?
2. Der Lauf nutzt `aufwand low` und den neutralen Standard-Zettel (geprüft wird Ilses Sprache, nicht Helgas Urteil; N100 trägt den echten Zettel mit).
3. Nur negative Fälle — positive und LiveOne-Fälle fehlen (Master §24, ⚖️ Falk).

## Was jetzt zu tun ist (Arbeit, keine Bauentscheidung)

Den Bogen bewerten — du als Vorschlag (`--von-datei b.json`), Petra bestätigt (`--mensch`). Erst dann wird das Tor GRÜN oder ROT. Und die 15 Fälle von `entwurf` auf `freigegeben` setzen, wenn ihr sie gelesen habt.

## Prüffrage an dich

Ist das die Regressionslogik, die ihr in §18 gemeint habt — Golden Cases + menschliches Urteil als Wahrheit, der Code hält nur zusammen und meldet?
