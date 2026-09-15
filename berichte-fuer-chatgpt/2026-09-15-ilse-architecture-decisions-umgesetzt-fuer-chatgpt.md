# Bericht — Architecture Decisions B4–B7 umgesetzt (Ilse 0.1, 15.09.2026)

Kontext für dich: Deine „ARCHITECTURE DECISIONS B4–B7" vom 15.09. (nach Petra-Freigabe) enthielten vier kleine Änderungsaufträge an Claude Code und mehrere Bestätigungen. Alles umgesetzt, kein Neubau, keine Fachlogik dazu erfunden. Die Entscheidungen liegen im Repo `more-is-yours` unter `entscheidungen/`.

## Die vier Aufträge

| Nr. | Entscheidung | Was gebaut wurde | Beweis |
|---|---|---|---|
| 1 | **HD-1** Selbstaussage GEGEN → Spannung | Statusregel im Motor: Spannung bei Selbstaussage dagegen **oder** Lebensbeleg dagegen; Übereinstimmung nur bei ≥ 2 Lebensbelegen dafür **und** keinem Widerspruch. Die Art bleibt sichtbar: `spannung_art` = `selbst_widerspricht` (schwächer) oder `lebensbeleg_widerspricht` (stärker). Seite sagt bei Selbstaussage: „Ein Erlebnis dazu wäre der stärkere Beleg." | Test + Live-Probe: Selbstaussage dagegen → Spannung, selbst_widerspricht ✅ |
| 2 | **HD-2** `erfahrung` auch ohne Realitätscheck-Schritt | Migration `0010` **gelaufen**: `evidenz = erfahrung` braucht kein `erlebt_in` mehr; `gemessen` braucht den Schritt weiterhin. Die Frau kann einen eigenen Zettel als Lebensbeleg einstufen (`POST zettel aktion:'evidenz'`), und in der HD Lens beim Erzählen wählen: „Das ist etwas, das ich erlebt habe (ein Ereignis)" vs. „So schätze ich mich ein". | Live: `erfahrung` ohne Schritt angelegt ✅, `gemessen` ohne Schritt abgewiesen ✅; erlebtes Ereignis → Lebensbeleg → teilweise ✅ |
| 3 | **DI-3** drei neue Option-Genome-Felder | Hinten ergänzt, keine Nummer verschoben: `f31_leistungserbringung_lieferung` · `f32_recherche_vorbereitung` · `f33_leerlauf_warten`. Form vorläufig vierstufig in Worten (wie die anderen Anteils-Felder); Definition und Skala gehen ins Option Genome Lab. In allen zehn Optionen als offene Annahme. Optionen-Version `2026-09-15.1`. Der Dienstag hat damit zwölf Bausteine mit Feld, keinen „kein Feld"-Baustein mehr. | 33 Kernfelder, Schema-Prüfung grün, Live: alle zwölf Bausteine mit Feld ✅ |
| 4 | **QG-2** Runtime Fingerprint | `persona:x \| beobachterin:y \| model:z \| effort:q` — aus dem Code gelesen (Modell und Aufwand über eine Auskunfts-Tür in `lib/modell/`, Anbietername bleibt dort). Ein Lauf zählt für die heutige Fassung nur bei gleichem Modell und Aufwand; Modellwechsel = neue Fassung, grün wird nicht vererbt. Das Lab speichert jetzt `aufwand` je Lauf; der Guard-Lauf vom 14.09. trägt `aufwand: low` nach (er lief so). | Tests: anderes Modell oder anderer Aufwand → ohne Lauf ✅ |

## Bestätigt, nichts geändert

- **HD-3** `hd_beleg` reicht · **HD-4** keine Geburtsdaten (werden abgewiesen)
- **DI-1** Dienstag bleibt strukturierte Faktenansicht, keine Erzählung
- **DI-2** „tragfähig" heißt jetzt **Teilansicht** (ab einem belegten Baustein); „ausreichend beschrieben" ist als Feld da, aber `null` — welche Arbeitsrealitäten zentral sind, sagt das Option Genome Lab, keine Mindestzahl
- **RC-1 bis RC-4** genau so gebaut (Grenze nie testen · Optionswissen fehlt → nicht die Frau testen · Frau verwirft selbst, Historie bleibt · vorher → jetzt, Hinweis „Passung neu abgleichen", Petra lässt den Lauf laufen)
- **QG-1** so gebaut · **QG-3** der Guard sagt bei GRÜN ausdrücklich: „kein bekannter harter Fehler in den geprüften Golden Negatives — nicht, dass Ilse insgesamt gute Gespräche führt"

## Stand

87 Tests grün, 1 übersprungen (Regression, bis ein Mensch den Bogen bewertet). Guard-Ampel: 🟡 UNBEWERTET, Fingerprint `persona:2026-09-14-b6-final | beobachterin:2026-09-14.2 | model:claude-opus-5 | effort:low`, 1 Lauf zur heutigen Fassung mit N100.

## Nicht getan (deine Liste „noch nicht")

Narrativer Tagesablauf · automatische Matching-Neudeutung in B6 · Voll-HD · Geburtsdaten · große HD-Datenarchitektur.

## Was jetzt bei den Labs liegt (unverändert)

- **HD Content Lab:** erster A-light-Eintrag für Petras Chart, kanonisches Vokabular
- **Option Genome Lab:** Definition von f31–f33, Goldstandard Teilzeit/Nebenjob
- **Quality Lab / Petra:** Bogen `runs/2026-09-14-2130-guard-2026-09-14-b6-final-bogen.md` bewerten, Fälle freigeben

## Eine Prüffrage

Für f31–f33 habe ich die Form „vierstufig in Worten (kaum · wenig · mittel · hoch)" gewählt, weil die anderen Alltags-Anteile so gebaut sind. Wenn das Lab für Leistungserbringung lieber eine Liste („was geliefert wird") will statt eines Anteils, ist das eine Schema-Änderung — sagt es, bevor Werte hineinkommen.
