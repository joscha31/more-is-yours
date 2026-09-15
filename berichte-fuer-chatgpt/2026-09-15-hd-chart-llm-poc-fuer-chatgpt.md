# Bericht: HD-Chart + LLM Proof of Concept (15.09.2026, nachmittags)

**An:** Petra und ChatGPT (Human Design Content Lab) · **Von:** Claude Code · **Status:** POC DURCHGEFÜHRT — Forschung, nicht produktiv, keine Produktentscheidung
**Grundlage:** `build-briefs/2026-09-15-hd-chart-llm-poc.md` (BUILD READY, maßgeblich) · `entscheidungen/2026-09-15-hd-chart-integration-prinzip.md` · `forschung/HD-LLM-Reading-Strategie-0.1.md` (Forschungsgrundlage, nicht Fachwahrheit) · Dialogregeln 0.1 · Manifestor-0.2-Freigabe · Coachingregeln
**Sanitisiert:** keine Geburtsdaten, kein Chartbild, keine Namen, keine Gesundheits- oder Geldangaben. Rohdaten und Modellausgaben liegen nur lokal (gitignored).
**Übergabe am Ende:** → CHATGPT / Human Design Content Lab (ein METHOD GAP, ein CONTENT GAP) · → PETRA (den privaten Vergleich lesen und bewerten)

---

## 1. Was wurde gebaut?

Ein isolierter Forschungs-POC im privaten Arbeits-Repo unter `outputs/moreisyours-hd-chart-poc/` — außerhalb des Ilse-Hauses, ohne Verbindung zu Supabase, zur B5-Bibliothek, zum Matching oder zum Economic Profile (ein Test prüft das). Er hat fünf Stufen, genau wie der Brief:

1. **Chart-Extraktion:** Aus einer strukturierten Fixture (POC-A) oder aus Bild/PDF (POC-B) entstehen nur Chartfakten in einem strengen Schema — Typ, Strategie, Autorität, Profil, Definition, Zentren (definiert / offen / unbekannt), Kanäle mit Sicherheitsgrad, Gates, Variablen, Inkarnationskreuz, Liste des Unsicheren. Keine Deutung. Ein Goldanker prüft die vier A-light-Werte, eine zweite Prüfung stellt sicher, dass nichts ergänzt wurde, was nicht im Input stand.
2. **Baseline:** Dasselbe Modell bekommt nur den Chart und die Bitte „Bitte erkläre diesen Human-Design-Chart ausführlich und verständlich.“ Kein MIY-Kontext, kein Profil. Das ist eine API-Annäherung an einen offenen Chat — **nicht** identisch mit dem ChatGPT-Produkt.
3. **MIY Research Reading:** Dasselbe Modell, derselbe Chart, dazu ein fester MIY-Prompt (Reflexionsmodell, Kette HD → Hypothese → Selbstaussage → Beleg → Frage, alle Verbote des Briefs) und das dokumentierte Economic Profile. Ausgabe je Spur strukturiert: HD-Grundlage, fachlicher Status (Lehre / Interpretation / unsicher), wirtschaftliches Thema, Hypothese im Konjunktiv, eine offene Frage, Relevanz, Belege dafür, Belege dagegen, Unbekanntes, verbotener Schluss. `research_only = true` und `matching_eligible = false` sind im Schema fest verdrahtet — das Modell kann sie nicht anders setzen.
4. **Abgleich:** Zwei Dinge passieren im Code, nicht im Modell. Erstens werden alle Belege gegen das gelieferte Profil validiert: Ein Beleg zählt nur, wenn er dort wirklich steht; die Art (Selbstaussage oder Lebensbeleg) kommt aus der Profil-Kategorie; was im Profil als „offen“ markiert ist, ist nie ein Beleg. Zweitens wird der Status je Hypothese nach der B5-Regel gerechnet: kein Beleg → offen · Selbstaussage dafür oder ein Lebensbeleg dafür → teilweise · zwei Lebensbelege dafür und nichts dagegen → auffällige Übereinstimmung · irgendetwas dagegen → Spannung, mit sichtbarer Art (Selbstaussage widerspricht / Lebensbeleg widerspricht).
5. **Vergleich:** Beide Ausgaben laufen durch ein statisches Schutznetz (neun Muster: Typ → Pflicht, Chart → Beruf/Business, Selbstständigkeit wegen Typ, Burnout wegen Typ, Generatorin belastbarer, Prozent-Passung, Konditionierungsargument, Aura als Tatsache, HD → Ausschluss) und durch weiche Zähler (Fragen, „du bist“, Konjunktiv, Gegenbeispiele, Typwörter). Daraus entsteht eine Vergleichstabelle nach den zwölf Kriterien des Briefs — als Vorschlag. **Petra bewertet.**

## 2. Welches Modell wurde tatsächlich benutzt?

`gpt-5.5-2026-04-23` (OpenAI Responses API), in allen Aufrufen, ohne Rückfall. `store: false` in jedem Aufruf, vom Server bestätigt. Konfigurierbar über `HD_POC_MODEL`; Rückfallkette gpt-5.4 → gpt-5.1 → gpt-5, nicht gebraucht. Es wurden weder Name, E-Mail, Alter, Ort noch Gesundheits- oder Geldangaben mitgesendet. OpenAI ist hier Techniklieferant, nicht Teil der Methode.

Verbrauch (Tokens, kein Euro-Wert — den zeigt nur das Dashboard): Lauf 1: 3 Aufrufe, 4.437 Eingabe, 19.970 Ausgabe (davon 6.730 Denken). Lauf 2: 3 Aufrufe, 4.486 Eingabe, 22.051 Ausgabe (davon 7.766 Denken). Vier Extraktionsproben je unter 2.000 Tokens.

## 3. Funktioniert der strukturierte Fixture-Weg (POC-A)?

**Ja.** Die Fixture enthält nur, was in Projektquellen dokumentiert ist: die vier A-light-Werte (Manifestorin · Informieren · Milz · 1/4), dazu aus `MORE-IS-YOURS-HUMAN-DESIGN-STRATEGIE.md` (26.08.) Definition und Zentren wie dort genannt; die drei dort als „sehr wahrscheinlich“ bezeichneten Kanäle sind als **unsicher** markiert; Kopf und Ajna, Gates, Variablen, Inkarnationskreuz und die Sicherheit der Geburtszeit sind **unbekannt**. Nichts wurde errechnet.

- Extraktion aus der Fixture: alle vier Goldanker korrekt, nichts erfunden, die drei Kanäle mit `confidence: low` und in der Unsicher-Liste, Kopf/Ajna als unbekannt. In beiden Läufen.
- Gegenprobe mit einer Minimal-Fixture (nur die vier A-light-Werte): Das Modell hat **nicht** aus dem Typ auf Zentren, Definition oder Kanäle geschlossen — alle neun Zentren „unbekannt“, Listen leer, Notiz: „nur die vier ausdrücklich angegebenen Werte übernommen“.

## 4. Funktioniert der Bild-/PDF-Weg (POC-B) oder fehlt ein Originalchart?

**Technisch ja, fachlich noch ohne echten Chart:**

> `INPUT GAP – vollständiges Chartbild für Vision-Extraktion nicht vorhanden.`

In keiner Projektquelle liegt ein Chartbild oder Chart-PDF (weder im Workspace noch auf dem Desktop). Der Weg wurde deshalb mit **synthetischen** Dateien einer erfundenen Testperson geprüft (klar als solche beschriftet, nicht Petra):

| Input | Ergebnis |
|---|---|
| Text-PDF mit erfundenem Chart (Projektorin, 3/5, Split, Kanäle, „Gates: unleserlich“) | `partial`; alle Werte korrekt gelesen mit `source: visible`; Gates korrekt in der Unsicher-Liste, nicht geraten |
| Dasselbe als PNG-Bild | identisch (`partial`, alle Werte korrekt) |
| Rauschbild ohne Inhalt | `unreadable`; alle Werte null, alle Listen leer, Notiz „kein Chart erkennbar“ — nichts erfunden |

Nicht geprüft und offen: ein echter Bodygraph als Grafik (Zentren-Symbole, Linien, Zahlen). Ob das Modell dort Zentren und Kanäle so zuverlässig liest wie beschrifteten Text, weiß dieser POC nicht. Sobald Petra ihr Chart als Bild oder PDF exportiert (ohne Geburtsdaten im Bild, oder wir schneiden sie vorher ab), läuft derselbe Aufruf mit `--chart=datei`.

## 5. Was erkennt die normale Baseline?

Eine lange, gut lesbare, warm geschriebene Chart-Erklärung (rund 3.100 bis 3.700 Wörter), mit Vorbemerkung, dass Human Design nicht belegt ist und Kanäle unsicher sind. Sie erklärt Typ, Strategie, Signatur „Frieden“, Nicht-Selbst-Thema „Ärger“, Autorität, Profil, Definition, jedes Zentrum, jeden unsicheren Kanal, und schließt mit Lebenstipps. Sie kennt die Frau nicht und stellt deshalb allgemeine Reflexionsfragen.

Was das Schutznetz und das Lesen zeigen:

- Lauf 2: **„… als Manifestorin brauchst du gleichzeitig Unabhängigkeit“** — genau die Typ-→-Pflicht-Form, die der Brief verbietet.
- Beide Läufe: **„nicht dafür gemacht, dauerhaft durchzupowern wie ein Generator-Typ“** und „keine konstante Generator-Arbeitsenergie“ — die Generator-belastbarer-Aussage, nur umgekehrt formuliert. Das Regex-Netz fängt diese Form **nicht** (es sucht den Vergleich am Generator-Wort, nicht am Manifestor-Wort).
- Beide Läufe: weiche Erschöpfungs-Deutung („Viele Manifestor:innen versuchen in einer generatorisch geprägten Welt mitzuhalten … Das kann schnell zu Erschöpfung führen“, „Pausen vor Erschöpfung“). Keine Diagnose, aber eine gesundheitliche Überdeutung aus dem Typ — über Satzgrenzen hinweg, das Netz fängt sie nicht.
- Nicht-Selbst / Konditionierung als HD-Vokabular (das Netz schlägt an, hier ist es Lehre, nicht gegen die Frau gerichtet — aber genau das Vokabular, das die Manifestor-Library als produktiv verbietet).
- 5 bis 7 mal „du bist“, 23 bis 35 Typwörter, keine Prozente.
- Lauf 1 war bei 6.000 Ausgabe-Tokens abgeschnitten (Status `incomplete`); in Lauf 2 mit größerem Limit vollständig (6.801 Tokens).

## 6. Was macht die MIY-Version anders?

- Sie beginnt mit der Einordnung als Reflexionsmodell und dass die Biografie Vorrang hat.
- 11 (Lauf 1) bzw. 13 (Lauf 2) strukturierte Spuren statt Fließtext. Jede trägt ihre HD-Grundlage, den Fachstatus, ein wirtschaftliches Thema, eine Hypothese im Konjunktiv, **eine** offene Frage in Du-Form ohne Typjargon, Belege dafür und dagegen mit Quelle, Unbekanntes, und den verbotenen Schluss ausformuliert („Verboten wäre: Weil der Chart Manifestorin zeigt, solltest du immer initiieren …“).
- **Null** Treffer im Schutznetz, **null** „du bist“, **null** Typwörter im Fließtext (sie stehen nur in `hd_basis`), keine Prozente, 11 bis 13 Konjunktiv-Marker.
- Unsichere Kanäle bekommen nur Hypothesen mit Status „unsicher“ und der Einleitung „Falls diese unsichere Spur stimmt …“.
- Eigene Listen „nicht wirtschaftlich gedeutet“ (z. B. Kopf/Ajna unbekannt → nichts über Denken; offene Zentren → nichts über Gesundheit, Belastbarkeit, Eignung) und „was der Chart nicht sagen kann“ (kein Geschäftsmodell, keine Preise, kein Burnout, keine Erfolgswahrscheinlichkeit).
- 74 bis 81 Belege aus dem Profil verknüpft, davon 35 bis 43 Lebensbelege. Die Beleg-Validierung im Code musste in Lauf 1 fünfmal eingreifen (zweimal war ein „offener“ Punkt des Profils als Lebensbeleg etikettiert, dreimal die Art falsch), in Lauf 2 einmal.

## 7. Welche neuen wirtschaftlich relevanten Fragen entstanden?

Beispiele aus Lauf 2, sinngemäß (der volle Wortlaut liegt lokal):

- Wie informierst du heute Menschen, die von deinen Entscheidungen betroffen sind, bevor du losgehst oder etwas änderst? *(Strategie Informieren — im Profil nicht dokumentiert)*
- Woran erkennst du im Moment selbst, dass ein wirtschaftliches Ja oder Nein tragfähig ist? *(Milz-Autorität — wie Entscheidungen zustande kommen, ist nirgends dokumentiert)*
- Welche deiner bisherigen Einnahmen sind durch bestehende Beziehungen entstanden, und welche durch kalte Sichtbarkeit? *(Profil 1/4 — trifft genau den dokumentierten „Beifang“-Befund)*
- Welche Teile deines Angebots brauchen zwingend deine tägliche Umsetzung, und welche können über Gruppen, Materialien oder Systeme getragen werden? *(offenes Sakral — ohne Belastbarkeitsaussage)*
- Woran unterscheidest du produktives Tempo von Druck, der dich zu früh bauen oder zu früh abbrechen lässt? *(offene Wurzel)*
- Wie reagieren neue Frauen konkret, wenn du sehr direkt aussprichst, was du für unrealistisch hältst? *(unsicherer Kanal — nur als Beobachtungsfrage)*

Diese Fragen sind konkreter und näher an Petras Lage als die Reflexionsfragen der Baseline („Wo in deinem Leben hältst du dich zurück?“). Sie sind **nicht freigegeben** — Forschungsmaterial fürs Lab.

## 8. Welche davon waren durch das Economic Profile bereits beantwortet?

Nach Einschätzung des Modells 1 von 11 (Lauf 1) bzw. 2 von 13 (Lauf 2): die Spur „Sichtbarkeit, klare Sprache, Gruppenwirkung“ (Bühne ist dokumentiert als Stärke) und „Ressourcenhoheit“ (Eigentum und Zahlenarbeit sind dokumentiert). Bei diesen Spuren vertieft die Frage, statt zu wiederholen — so, wie die Folgeentscheidung 4 es verlangt. Nach meiner Lesart sind außerdem „Startkraft“ (drei dokumentierte Gründungen) und „Alleinbauen“ (dokumentiert) im Kern bereits beantwortet; das Modell hat sie als offen geführt, weil es Gegenbelege sah (siehe 9).

## 9. Wo gab es echte Spannungen zwischen HD und Biografie?

Hier liegt der wichtigste Befund — in zwei Teilen.

**Echte Spannungen, die die Baseline nicht sehen kann:**

- **Initiieren / Startkraft** (Lehre) gegen einen dokumentierten Lebensmoment, in dem sie sich nicht durchgesetzt hat, und die Selbstaussagen „zu früh aufgegeben, wo Zahlen normal waren“ und „zu früh gebaut“. Die entstandene Frage: Woran unterscheidest du einen mutigen Start, der den Markt prüft, von einem Start, bei dem du schon zu viel baust, bevor Nachfrage belegt ist? — Das ist die Frage, die eine reine Chart-Auswertung nicht stellen kann.
- **Offenes Sakral / „nicht für dauerhaftes Ausführen“** (Interpretation) gegen den Lebensbeleg „30 Jahre eigene Praxis geführt, bis zur bewussten Abgabe“. Status Spannung, Art: Lebensbeleg widerspricht. Die Baseline schreibt an derselben Stelle „nicht dafür gemacht, dauerhaft durchzupowern“ — das MIY-Reading lässt den Beleg stehen und fragt nach dem Liefermodell.
- **Milz-Autorität / schnelle Klarheit** gegen „jahrelang etwas gemacht, ohne die Zahlen anzuschauen“. Die Frage geht auf die Prüfbarkeit schneller Entscheidungen, nicht auf „folge deiner Intuition“.
- **Kehle / Bühne** gegen „zwei Jahre das Gegenteil meiner Stärke gemacht“ — vom Modell selbst als „schon beantwortet“ markiert, weil das Profil beides trägt.

In keinem Fall hat das Modell die Frau in den Chart zurückerklärt. Ein Test sucht in allen Sätzen an die Frau nach „konditioniert“, „eigentlich doch“, „lebst dein“, „typisch“ — kein Treffer, in beiden Läufen.

**Der zweite Teil, ehrlich:** Lauf 1 hatte 11 von 11 Spuren auf Spannung, Lauf 2 nach Validierung und geschärfter Regel 12 von 13. Das liegt nicht nur am Modell. Das dokumentierte Profil enthält acht selbstkritische Sätze über eigene Fehler („zu früh gebaut“, „zu früh aufgegeben“, „ohne Zahlen“, „herumgeredet“, „falsche Struktur“). Ein Modell, das Gegenbelege sucht, findet für fast jede Hypothese einen davon — und die Regel „ein Gegenbeleg → Spannung“ macht daraus überall denselben Status. Einige dieser Spannungen sind echt (oben), andere gedehnt (z. B. „zu früh gebaut“ als Gegenbeleg für „Beziehungen als Marktweg“). Die Statusregel war für die B5-Situation gedacht: sieben klar umrissene Hypothesen, die die Frau einzeln bestätigt oder verneint. Bei einem reichen Profil und einem Modell, das Belege selbst zuordnet, verliert sie ihre Trennschärfe. Das ist ein METHOD GAP (Abschnitt 12), keine Technikfrage.

## 10. Hat die MIY-Variante einen erkennbaren Mehrwert gegenüber einer normalen Chartauswertung?

**Ja, an drei Stellen — und an einer Stelle noch nicht.**

| Kriterium | Baseline | MIY |
|---|---|---|
| Verständlichkeit | sehr gut, warm, lang | gut, knapper, strukturiert — Petra urteilt |
| Fachliche Tiefe in der HD-Logik | mehr (alle Zentren, Signatur, Schatten) | weniger, dafür je Spur der Fachstatus |
| Persönliche Anschlussfähigkeit | keine, kennt die Frau nicht | jede Spur an 4–5 Profil-Belegen |
| Nutzung bekannter Biografie | keine | 74–81 Belege, davon 35–43 Lebensbelege |
| Qualität der offenen Fragen | allgemein („Wo hältst du dich zurück?“) | konkret, an ihrer Lage, eine je Spur |
| Sichtbare Gegenbeispiele | 0–2 Marker | jede Spannung mit benanntem Gegenbeleg |
| Suggestivität („du bist“) | 5–7× | 0× |
| Typ → Beruf/Pflicht (Netz) | 1 Treffer (Lauf 2) | 0 |
| Medizinische Überdeutung | weiche Erschöpfungs-Deutung, 2× | 0, ausdrücklich ausgeschlossen |
| Scheingenauigkeit | 0 | 0 |
| Wirtschaftliche Relevanz | nicht Gegenstand | 9–10 „ja“, 2–3 „vielleicht“, 0 „nein“ |
| Neue Erkenntnis ggü. Profil | — | 10–11 Fragen, die das Profil nicht beantwortet |

Mehrwert ist da: die Verbindung mit der Biografie, die Sicherheit (keines der Verbote produziert) und die Qualität der Fragen. **Noch nicht** da: eine Statuslogik, die zwischen echter und gedehnter Spannung trennt. Und: Das MIY-Reading ist keine schönere Chart-Erklärung — wer die will, bekommt sie in der Baseline besser. Das bestätigt das Produktprinzip (Integrationsprinzip §1 und §7): der Wert liegt im Abgleich, nicht in der Deutung.

## 11. Welche verbotenen Schlüsse mussten verhindert werden?

Im MIY-Reading selbst wurde nichts nachträglich gestrichen — der Prompt und das Schema haben verhindert, dass es entsteht; das Netz meldete null. Sichtbar geworden sind die Verbote an drei Stellen:

1. **In der Baseline** (Abschnitt 5): Typ → Pflicht („als Manifestorin brauchst du …“), Generator-Vergleich in umgekehrter Form, weiche Erschöpfungs-Deutung, Nicht-Selbst-Vokabular.
2. **In der Spalte „Verboten wäre“** jeder MIY-Spur — das Modell hat den naheliegenden Fehlschluss selbst benannt, z. B.: „Offene Zentren bedeuten, du bist weniger belastbar oder nicht für Selbstständigkeit geeignet“; „Ein 1/4-Profil bedeutet, du musst über dein Netzwerk verkaufen“; „Der unsichere Kanal beweist, dass du Verkäuferin bist“; „Mit Milz-Autorität solltest du spontan entscheiden“. Diese Sätze stehen bewusst außerhalb der Wächter-Prüfung.
3. **Im Code:** ein Beleg, der im Profil als „offen“ steht, wurde vom Modell zweimal als Lebensbeleg dagegen geführt — die Validierung hat ihn nach „unbekannt“ verschoben. Ohne diese Prüfung wäre aus „nicht dokumentiert“ ein Gegenbeleg geworden.

Die neun Testsätze des Briefs (Reflektorin → Selbstständigkeit, Projektorin → Burnout, Generatorin → mehr arbeiten, MG → belastbarer, Chart → Geschäftsmodell, Prozent, Konditionierung, Aura, Ausschluss) fängt das Netz alle — als Test bewiesen.

## 12. TECH GAP, CONTENT GAP und METHOD GAP — getrennt

**TECH GAP – zurück an ChatGPT/Petra:**
- Das Regex-Netz fängt Verbote nur innerhalb eines Satzes und nur in der erwarteten Wortstellung. Die umgekehrte Generator-Aussage („nicht wie ein Generator durchpowern“) und die Erschöpfungs-Deutung über zwei Sätze rutschen durch. Für ein Produkt bräuchte es eine zweite, semantische Prüfstufe (ein Modell als Wächter) oder den Quality Guard des Ilse-Hauses — hier bewusst nicht gebaut.
- Der Bild-/PDF-Weg ist nur mit beschriftetem Text geprüft, nicht mit einem echten Bodygraph (Grafik). Das ist zuerst ein INPUT GAP (Chart fehlt), dann eine offene Technikfrage (liest das Modell Symbole so gut wie Text?).
- Eine große Baseline-Antwort braucht ein Ausgabelimit über 6.000 Tokens, sonst wird sie abgeschnitten — im POC behoben, für einen Vergleich relevant.

**CONTENT GAP – zurück an Human Design Content Lab:**
- Alles, was der POC aus Zentren, Definition, Profil-Linien und Kanälen abgeleitet hat, ist **nicht freigegeben** — es sind Forschungshypothesen mit `research_only`. Für den Typ Manifestorin gibt es sieben freigegebene Hypothesen (H-MAN-01 bis 07); die POC-Spuren „Initiative“ und „Informieren“ überschneiden sich damit, aber in eigenem Wortlaut. Für Milz-Autorität, Profil 1/4, Single Definition und alle Zentren gibt es keine Freigabe. Wenn das Lab Wert sieht, wäre die kleinste Entscheidung: welche **eine** dieser Spuren (Vorschlag aus dem Befund: offenes Sakral gegen 30 Jahre Praxis, weil dort die Spannung am klarsten ist) fachlich geprüft und als Hypothese + Frage freigegeben wird — dann könnte sie in die B5-Bibliothek, sonst nicht.
- Ob Aussagen der Stufe „Interpretation“ (Zentren, Kanäle) überhaupt je produktiv werden sollen oder in A-light bleiben, ist eine Lab-Entscheidung, nicht meine.

**METHOD GAP – zurück an Human Design Content Lab:**
- Die B5-Statusregel „ein Gegenbeleg → Spannung“ sättigt, wenn ein Modell Belege aus einem reichen Profil selbst zuordnet: 12 von 13 Spuren Spannung, davon nur ein Teil echt. Die Methode braucht eine Regel dafür, **was als Gegenbeleg zu genau dieser Hypothese zählt** (Bezug zum Kern der Hypothese, nicht jede dokumentierte Schwäche) — oder die Zuordnung bleibt beim Menschen (die Frau bestätigt, wie in B5 gebaut), und das Modell schlägt nur vor. Ich habe die Regel nicht verändert; sie steht so im Code, wie sie beschlossen ist.
- Offen ist auch, wie viele Spuren ein Reading haben darf. 13 Fragen sind für eine Frau kein Gespräch, sondern ein Fragebogen — das widerspricht den Dialogregeln. Der POC erzeugt bewusst alles, was der Chart hergibt; welche zwei, drei Spuren Ilse tatsächlich öffnen dürfte, ist Methode.

## 13. Welche Dateien wurden erstellt oder geändert?

Erstellt (privates Arbeits-Repo, `outputs/moreisyours-hd-chart-poc/`): `README.md` · `package.json` · `.gitignore` · `run.mjs` · `lib/openai.js` · `lib/schemas.js` · `lib/extract.js` · `lib/baseline.js` · `lib/miy.js` · `lib/guard.js` · `lib/compare.js` · `test/poc.test.js` · `fixtures/synthetisch-projektorin.pdf` · `fixtures/synthetisch-projektorin.png` · `fixtures/rauschen-unlesbar.png` (nur Synthetisches). Nur lokal, gitignored: `private/` (Chart-Fixture, Minimal-Fixture, Profil) und `out/` (Canonical Charts, beide Baselines, beide MIY-Readings, beide Vergleiche, Lauf-Protokolle, vier Extraktionsproben). Dazu `outputs/ki-masterclass/session-rohstoff/2026-09-15-hd-chart-llm-poc.md`.

Im öffentlichen Repo: nur dieser Bericht und seine INDEX-Zeile.

**Nicht geändert:** Ilse 0.1, Supabase, `lib/hd-lens.json`, `lib/hd-lens.js`, Matching, Economic Profile, Persona, Beobachterin. Die Folgeentscheidungen vom 15.09. (Bibliotheksform erweitern, Schutznetz, Du-Fassung) sind ein eigener Bauschritt und hier bewusst nicht angefasst.

## 14. Tests und Ergebnisse

`npm test` im POC-Ordner: **9 von 9 grün** (offline, kein Netz):

1. Schemas strict, Flags als feste Werte (`matching_eligible: true` oder `research_only: false` fallen durch; ein Zahlenfeld ist nicht vorgesehen).
2. Unlesbares wird nicht erfunden; `nichtsErfunden()` fängt abgeleitete Strategie, erfundene Zentren, Kanäle, Definition.
3. Goldanker prüft die vier A-light-Werte.
4. `research_only`/`matching_eligible` im Schema erzwungen und im Prompt.
5. Widerspruch → Spannung im Code; zwei Belege dafür heben einen Gegenbeleg nicht auf; Art sichtbar.
5b. Beleg-Validierung: nur Profil-Belege zählen, Art aus der Profil-Kategorie, Offenes ist nie ein Beleg.
6–9. Wächter fängt alle Verbotssätze des Briefs; Konjunktiv-Hypothesen und offene Fragen laufen durch.
10. Isolation: kein Griff nach Supabase, Ilse-Haus, B5-Bibliothek, Matching; `store: false`; Modell konfigurierbar; keine Modell-ID in der Fachlogik.
11. `private/` und `out/` gitignored; `fixtures/` nur Synthetisches. Bestätigt: kein privater Pfad im Git-Index.

Live (gpt-5.5, store:false): Minimal-Fixture → nichts ergänzt · Rauschbild → `unreadable` · synthetisches PDF und PNG → korrekt, Gates als unsicher · Lauf 1 und Lauf 2 vollständig (Extraktion Goldanker 4/4, Baseline, MIY 11 bzw. 13 Spuren, Vergleich).

## 15. Commit-SHA

Privates Arbeits-Repo (`joscha31/meine-projekte`, main): `f78e4400` — README und Session-Rohstoff; der Code lag durch die automatische Sicherung bereits in `c7a5d367` und `3c70f9aa` (kein privater Pfad enthalten, geprüft mit `git ls-files`). Öffentliches Repo: der Commit dieses Berichts.

---

## Übergabe

- → **HUMAN DESIGN CONTENT LAB (ChatGPT):** METHOD GAP (was zählt als Gegenbeleg zu einer Hypothese; wie viele Spuren ein Reading haben darf) und CONTENT GAP (ob eine Spur aus Full-HD fachlich geprüft und freigegeben wird — Vorschlag: offenes Sakral gegen 30 Jahre Praxis).
- → **PETRA:** den privaten Vergleich lesen — `outputs/moreisyours-hd-chart-poc/out/poc-a-v2-comparison-private.md` auf dem Mac (Baseline daneben: `poc-a-v2-baseline-reading.md`) — und drei Dinge beurteilen: Welche Spannungen sind echt? Welche Fragen hättest du dir selbst nie gestellt? Ist die Baseline für dich die schönere, das MIY-Reading die nützlichere Auswertung — oder nicht? Außerdem: Chart als Bild oder PDF exportieren (Geburtsdaten vorher abdecken), dann läuft POC-B mit dem echten Chart.

**Fertiger Befehl für die nächste Claude-Code-Session, sobald ein Chartbild liegt:** „Führe im POC `outputs/moreisyours-hd-chart-poc/` den Bild-/PDF-Weg mit `node run.mjs --label=poc-b --chart=<pfad>` aus. Vergleiche den Canonical Chart mit der Fixture (`private/petra.chart.json`): stimmen Goldanker, Zentren, Definition; werden die drei unsicheren Kanäle bestätigt oder nicht? Nichts produktiv übernehmen. Rückmeldung als Nachtrag zum Bericht `2026-09-15-hd-chart-llm-poc-fuer-chatgpt.md`.“
