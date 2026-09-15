# Bericht — Option Genome Framework 0.3 technisch umgesetzt (Ilse 0.1, 15.09.2026, mittags)

Kontext für dich: Petra hat Claude Code den Build Brief `build-briefs/2026-09-15-option-genome-framework-0.3.md` (BUILD READY) gegeben, mit den geltenden Dateien `entscheidungen/2026-09-15-option-genome-struktur.md`, `forschung/Option-Genome-Framework-0.3.md`, `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md` (alle PETRA APPROVED) und dem Master 3.0. Aufgabe: die bestehende Technik so anpassen, dass die Fachstruktur 0.3 abgebildet werden kann — ohne Inhalte, Zahlen, Fachregeln, Match-Prozente oder Tagesabläufe zu erfinden. Hier die Rückmeldung in den sechs Punkten des Briefs.

## 1. Was wurde geändert (Dateien / Migration)

| Datei | Was |
|---|---|
| `lib/option-genome.schema.json` | Schema **0.1 → 0.2**: `ebenen` (Pflicht), drei Felder umbenannt, vier Felder hinten, zwei Sonderwerte, `varianten[].ebene` |
| `lib/optionen.json` | Datei-Version **2026-09-15.1 → 2026-09-15.2**, Regel ⑧ ergänzt; migriert mit `scripts/optionen-migration-0-2.mjs` (neu) |
| `lib/optionen.js` | versteht alte Feldnamen (`ALT_NAMEN`, `feldName`), prüft Ebenen und Sonderwerte, liefert `grundfragen(o)`, `migrieren(o)`, Landkarte `FRAMEWORK_0_3` (Nr. 1–40 → Feld) |
| `lib/matcher.js` · `lib/realitaetscheck.js` | lesen gespeicherte Feldnamen über `feldName` — Befunde in der Datenbank (`kiste.felder`) mit alten Namen bleiben gültig; Sonderwerte kommen als Worte („nicht anwendbar", „keine allgemeine Zahl — …"), nie als Zahl |
| `lib/dienstag.js` | Version 2026-09-15.2: „nicht anwendbar" ist ein eigener Stand (zählt weder belegt noch offen; Teilansicht nur aus belegten Bausteinen) |
| `api/konto.js` | `GET ?was=optionen` liefert je Option zusätzlich `grundfragen` (Petra- und Frau-Sicht) |
| `optionen.html` · `passung.html` | Ebenen-Chips, Block „Die vier Grundfragen", neue Feldgruppen und Namen, Sonderwerte lesbar |
| `scripts/probe-optionen.mjs` | fünf neue Live-Prüfungen für Schema 0.2 |
| `test/optionen.test.js` · `test/matcher.test.js` · `test/dienstag.test.js` | 10 neue oder erweiterte Tests |

**Keine Datenbank-Migration nötig:** die Optionsdaten leben als Datei (Entscheidung 14.09.), die Datenbank trägt nur Feldnamen in `kiste.felder` — die werden per Alias weitergelesen. Deploy aus `main`, live seit 12:31.

## 2. Neue und geänderte Felder

**Neu, auf Optionsebene (Grunddaten, keine Evidenzfelder):**
- `ebenen.familie` · `ebenen.variante` · `ebenen.rolle` — Optionsfamilie, Optionsvariante, Rolle/konkrete Tätigkeit. Pflicht als Struktur, Wert `null` erlaubt = vom Option Genome Lab noch nicht zugeordnet. Bei allen zehn Startoptionen steht `null`. `kategorie` (1–7) bleibt reine Ordnung und wurde **nicht** zur Optionsfamilie erklärt.
- `varianten[].ebene` (optional): `variante` oder `rolle`. Bei keinem der zwölf Bibliothekseinträge gesetzt.

**Umbenannt (Werte unverändert, alte Namen bleiben lesbar):**
- `f3_wofuer_zahlt_der_kunde` → **`f3_wer_zahlt_und_wofuer`** („Wer zahlt – und wofür?", Grundfragen 1 + 2)
- `f29_kundengewinnung` → **`f29_zugang_zum_einkommen`** („Wie entsteht Zugang zum Einkommen?", Grundfrage 4). `f15_akquiseanteil` bleibt daneben als Arbeitsrealität.
- `f26_kostenstruktur_marge` → **`f26_kostenstruktur`** (Marge steht jetzt getrennt)

**Neu, hinten im Kern (DI-3: keine Nummer verschoben), alle als `offene_annahme`:**
- `f34_einkommensentwicklung` (Text) — „Wie kann das Einkommen wachsen?", getrennt von `f25_skalierbarkeit`
- `f35_marge_ueberschuss` (Text) — nur wo sinnvoll; darf `nicht anwendbar` sein
- `f36_absicherung` (Liste) — Absicherung / soziale Absicherung, Struktur des Weges
- `f37_rechtliche_besonderheiten` (Liste) — rechtliche / regulatorische Bereiche, die zu prüfen sind

**Zwei erlaubte Sonderwerte:**
- `wert: { nicht_anwendbar: true, grund? }` — an jeder Feldform (Framework Grundregel 9)
- `wert: { keine_zahl: "unbekannt" | "stark_abhaengig_vom_einzelfall" | "nicht_sinnvoll_allgemein_quantifizierbar", grund? }` — nur an Zahlenfeldern (f6, f10, f11, f23, f27; Framework §6)
- Beide sind **belegte Aussagen** und brauchen darum eine Quelle (wer sagt das). Ohne Quelle bleibt das Feld `offene_annahme` — so bleibt „noch nicht angeschaut" von „geprüft: keine allgemeine Zahl" unterscheidbar. Feld 23 bleibt auch als `keine_zahl` ein interner Bauwert (die Frau sieht es nie).

**Bleibt:** `f31_leistungserbringung_lieferung` · `f32_recherche_vorbereitung` · `f33_leerlauf_warten` (die drei Dienstag-Felder), Form unverändert.

**Landkarte Framework 0.3 → Technik (`FRAMEWORK_0_3`, lückenlos 1–40):** 1 name · 2 kurz · 3–5 ebenen · 6 f3 · 7 f4 · 8 f5 · 9 f29 · 10 f10 · 11 f11 · 12 f24 · 13 f34 · 14 f25 · 15 f23 · 16 f26 · 17 f35 · 18 f27 · 19 f7 · 20 f8 · 21 f9 · 22 f6 · 23 f12 · 24 f13 · 25 f14 · 26 f15 · 27 f16 · 28 f17 · 29 f18 · 30 f19 · 31 f20 · 32 f21 · 33 f22 · 34 f31 · 35 f32 · 36 f33 · 37 f28 · 38 f30 · 39 f36 · 40 f37.

## 3. Wie bestehende Daten erhalten wurden

- Das Migrationsskript beweist es selbst und bricht sonst ab: **414 alte Werte** (Kern und Varianten) stehen unverändert unter ihrem neuen Namen wieder da; **belegte Kernfelder 11 → 11**; die neuen Felder sind bei allen zehn offen; ein zweiter Lauf ändert nichts (idempotent).
- Ein Test nimmt den git-Stand **vor** der Migration (`adb74ba1`), migriert ihn und vergleicht Feld für Feld mit der heutigen Datei: gleich.
- Beispiel: der Variantenwert `amazon-kdp` „die Plattform (Amazon-Suche, Kategorie-Ranking)" stand unter `f29_kundengewinnung` und steht jetzt wörtlich unter `f29_zugang_zum_einkommen` — live geprüft.
- Kein Text eines Feldes wurde umgeschrieben. Die Goldstandard-Inhalte sind unangetastet.

## 4. Offene technische Risiken

- Die Matcherin sieht die Wege jetzt unter neuen Feldnamen; Befunde aus früheren Läufen tragen alte Namen und werden per Alias gelesen (`veraltet`-Marke greift ohnehin, weil `optionen_version` neu ist). Ein neuer Passungslauf schreibt neue Namen. Kein Bruch, aber ein Mischzustand in der Kiste, bis Petra den Lauf neu startet.
- Der Cache-Block der Matcherin (die Wege als Text) ist durch die neue Version kalt — der nächste Lauf kostet einmal die kalte Rate (gemessen 14.09.: ~14–16 ¢ statt ~6–9 ¢).
- Die Zahlen im Kopf des Dienstag-Standes haben ein neues Feld `nicht_anwendbar` — `dienstag.html` zeigt den Stand noch nicht als eigene Zeile (kein Weg benutzt ihn bisher). Kleine Nacharbeit, sobald das Lab den ersten Sonderwert setzt.
- Numerierung: `kern.f31–f37` und `ausbau.f31–f50` (Premium-Felder, Papier §6) tragen dieselben Nummern in getrennten Objekten — technisch sauber, beim Lesen verwechselbar. Seit DI-3 so, hier nicht verschoben.

## 5. CONTENT GAPs (fachlich offen, nicht selbst entschieden — Option Genome Lab)

| Nr. | Bereich | Inhalt | Wofür | Kleinste Entscheidung |
|---|---|---|---|---|
| 1 | Option Genome | **Ebenen-Zuordnung**: Welche Ebene ist jede der zehn Startoptionen (z. B. ist „Teilzeit-/Nebenjob" eine Familie oder eine Variante von „Anstellung"?), und sind die zwölf Bibliothekseinträge (`stelle-anders`, `minijob`, `amazon-kdp`, `etsy-eduki` …) Varianten oder Rollen? | Ebenen-Chips auf `optionen.html`, spätere Passung je Ebene | Für die drei Goldstandard-Optionen `familie` und `variante` je einmal benennen |
| 2 | Option Genome | **Grundfrage 3** „Wie wird die Leistung oder das Produkt geliefert?" hat kein Feld: f31 ist ein *Anteil* des Alltags, kein *Wie*; f4 ist „wie entsteht Geld". | Block „Die vier Grundfragen" (zeigt heute CONTENT GAP) | Sagen, welches Feld die Antwort trägt — oder ob f31 als Text statt Stufe gemeint ist |
| 3 | Option Genome / Recht | Verhältnis **`f37_rechtliche_besonderheiten`** (Framework Nr. 40, Bereiche) zu **`f0b_rechtliche_huerde`** (Wege-Bibliothek/Falk, konkrete Hürde) und `ausbau.f41_regulatorik` | doppelte Pflege vermeiden | Bleiben beide, oder geht f0b in f37 auf? |
| 4 | Option Genome | Ist **`kategorie` 1–7** (Petra 14.09., „nur zur Ordnung") dasselbe wie die **Optionsfamilie**? Ich habe es *nicht* gleichgesetzt. | ob `ebenen.familie` aus `kategorie` abgeleitet werden darf | Ja/Nein |
| 5 | Option Genome | Entspricht `f27_kapitalbedarf_wachstum` („Kapital beim Wachsen") dem Framework-Feld 18 „Kapitalbedarf"? So zugeordnet, zu bestätigen. | Landkarte 1–40 | Bestätigen oder Feld umbenennen |

Kleinere Lesarten, die ich getroffen habe und die du kippen kannst: Sonderwerte brauchen eine Quelle (statt eines neuen `wert_typ`); „nicht anwendbar" zählt im Dienstag nicht zur Teilansicht; f34/f35 als Text, f36/f37 als Liste.

## 6. Tests

| Test | Ergebnis |
|---|---|
| `node --test` (Haus, ohne Netz) | **99 Tests: 98 grün, 1 übersprungen** (der bekannte Regressions-Test, bis ein Mensch den Guard-Bogen bewertet) |
| Migrationsskript, eingebauter Beweis | 414 Werte unverändert · belegt 11 → 11 · Prüfung 0 Fehler · zweiter Lauf leer |
| Unabhängiger Validator ajv, JSON Schema Draft 2020-12 | 0 Fehler bei 10 Optionen; Sonderwerte und Ebenen gültig; `keine_zahl` am Textfeld abgelehnt; Option ohne `ebenen` abgelehnt |
| `scripts/probe-optionen.mjs` gegen **ilse.moreisyours.de** | 22 / 22 grün (Petra-Sicht, echte angemeldete Probe-Frau, Feld 23 gesperrt, Grundfragen, alte Werte unter neuem Namen, 401 ohne Anmeldung) |
| `scripts/probe-dienstag.mjs` gegen live | 11 / 11 grün, Live-Antwort identisch mit lokaler Berechnung |

Nicht erfunden, nicht geschätzt, nicht neu geregelt: kein Feld hat einen neuen Wert bekommen, kein Prozent, kein Tagesablauf.

## Was jetzt bei den Labs liegt

- **Option Genome Lab:** die fünf CONTENT GAPs oben; Definition von f31–f33 (offen seit DI-3); Goldstandard Teilzeit/Nebenjob befüllen — jetzt mit Ebenen, f34–f37 und den Sonderwerten.
- **Claude Code:** nichts, bis Inhalte kommen. Ein Passungslauf nach der Befüllung zeigt, ob die Aliase auch im echten Mischzustand tragen.
