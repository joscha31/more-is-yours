# MORE IS YOURS – Build Brief: HD Chart + LLM Proof of Concept

**Stand:** 15.09.2026  
**Status:** **BUILD READY – isolierter Forschungs-POC, NICHT PRODUKTIV**  
**Owner:** Claude Code  

## 1. Grundlage

Maßgeblich sind:

- `master/2026-09-14-more-is-yours-gesamt-master-3.0.md` – MASTER / aktuell
- `entscheidungen/2026-09-15-hd-chart-integration-prinzip.md` – **PETRA APPROVED**
- `entscheidungen/2026-09-15-hd-b5-folgeentscheidungen.md` – **PETRA APPROVED / BUILD READY**
- `entscheidungen/2026-09-15-hd-manifestor-0.2-freigabe.md` – **PETRA APPROVED / BUILD READY B5**
- `entscheidungen/2026-09-15-ilse-systemische-coachingregeln.md` – **PETRA APPROVED**
- `forschung/Human-Design-Dialogregeln-0.1.md` – verbindliche HD-Arbeitsregel
- `forschung/HD-LLM-Reading-Strategie-0.1.md` – Forschungsgrundlage
- `gesetze/2026-09-15-projektregel-github-arbeitsweise.md` – **PETRA APPROVED**

Verbindliches Produktprinzip:

> **Chart → KI-gestützte Auswertung → vorsichtige HD-Hypothesen → Abgleich mit Economic Profile + Biografie + realem Verhalten → nur dann wirtschaftlich relevante Einordnung**

Dieser POC prüft die technische und methodische Machbarkeit. Er ist **kein neues Produktfeature**.

---

## 2. Ziel des POC

Prüfen, ob ein starkes multimodales LLM einen vollständigen bzw. erweiterten Human-Design-Chart so lesen und mit Petras Economic Profile verbinden kann, dass daraus ein zusätzlicher MIY-Nutzen entsteht, der über eine allgemeine offene ChatGPT-Auswertung hinausgeht.

Der POC soll vier Fragen beantworten:

1. Kann das Modell Chartdaten aus Bild/PDF zuverlässig in ein neutrales Schema extrahieren?
2. Kann es daraus vorsichtige, wirtschaftlich relevante **Forschungs-Hypothesen und Fragen** erzeugen, ohne Berufs-/Geschäftsmodell-Urteile zu fällen?
3. Kann es diese Hypothesen gegen vorhandene Economic-Profile-/Biografieinformationen halten und Übereinstimmung, Spannung und offene Lücken sichtbar machen?
4. Ist die MIY-Ausgabe erkennbar nützlicher/sicherer als eine einfache allgemeine Chart-Auswertung?

---

## 3. Harte Grenze: nichts Produktives verändern

Der POC darf NICHT:

- Ilse 0.1 verändern
- Supabase-Schema verändern
- produktive B5-Library verändern
- Matching verändern
- Chartdaten oder POC-Hypothesen ins Economic Profile schreiben
- neue HD-Inhalte als `PETRA APPROVED` behandeln
- Voll-HD produktiv freigeben
- Geburtsdaten oder Chartbilder in das öffentliche `more-is-yours`-Repo committen
- personenbezogene Rohdaten in Reports im öffentlichen Master-Repo ablegen

Der gesamte POC soll außerhalb des produktiven Ilse-Hauses liegen, bevorzugt in einem isolierten Arbeitsverzeichnis im privaten Arbeits-Repo, z. B.:

`outputs/moreisyours-hd-chart-poc/`

Falls die bestehende Repo-Struktur einen passenderen isolierten Ort vorgibt, darf Claude ihn wählen, muss ihn aber dokumentieren.

---

## 4. Datenschutz / Speicherung

Chartbild, Chart-Rohdaten und Economic Profile sind personenbezogene Daten.

Für API-Aufrufe:

- Responses API verwenden, sofern OpenAI genutzt wird
- `store: false` setzen
- keine unnötigen Namen, E-Mail-Adressen oder sonstigen Identifikatoren mitsenden
- nur für den Test notwendige Profildaten mitsenden
- lokale Roh- und Ergebnisdateien in `.gitignore`
- keine persönlichen Rohdaten committen

Im öffentlichen Repo darf anschließend nur ein **sanitisierter technischer Ergebnisbericht ohne persönliche Detaildaten** landen.

---

## 5. Modell / Anbieter

Die Architektur bleibt anbieteraustauschbar.

Für den ersten OpenAI-POC:

- Modell über `HD_POC_MODEL` konfigurierbar machen
- als Default das aktuell leistungsfähigste verfügbare OpenAI-Modell mit Bildinput + Structured Outputs verwenden, sofern der vorhandene API-Key Zugriff hat
- tatsächliche Modell-ID in jedem Lauf protokollieren
- falls Default nicht verfügbar ist, sauber auf ein verfügbares bildfähiges Modell zurückfallen und das ausdrücklich melden

Keine Modell-ID hart in die Fachlogik einbauen.

OpenAI ist im POC Techniklieferant, nicht Teil der MIY-Methode.

---

## 6. Zwei Testwege

### POC-A – sofort testbar mit dokumentierten Chartdaten

Damit der POC nicht am fehlenden Original-Chartbild hängt, soll ein strukturierter Testdatensatz möglich sein.

Nur bereits dokumentierte Chartwerte dürfen als Fixture verwendet werden. Nichts ergänzen oder errechnen.

Mindestens sicher dokumentiert für Petra:

- Typ: Manifestorin
- Strategie: Informieren
- Autorität: Milz
- Profil: 1/4

Weitere historische Chartangaben dürfen nur übernommen werden, wenn Claude sie in vorhandenen Projektdateien eindeutig als Chartangabe findet; unsichere Angaben müssen als `unsicher` markiert werden und dürfen nicht zu Fakten hochgestuft werden.

### POC-B – echter Chart als Bild/PDF

Der POC soll zusätzlich einen lokalen Chart-Upload / Dateipfad akzeptieren.

Das Vision-Modell extrahiert daraus Chartdaten.

Wenn kein echter Chart verfügbar ist:

> `INPUT GAP – vollständiges Chartbild für Vision-Extraktion nicht vorhanden.`

POC-A wird trotzdem durchgeführt.

Kein Rekonstruieren eines Vollcharts aus Erinnerung oder Geburtsdaten.

---

## 7. Stufe 1 – Canonical Chart Extraction

Erzeuge aus Bild/PDF oder strukturiertem Fixture **nur Chartfakten, keine Deutung**.

Structured Output / JSON Schema mindestens:

```json
{
  "input_quality": "readable|partial|unreadable",
  "type": {"value": "", "confidence": "high|medium|low", "source": "visible|provided"},
  "strategy": {"value": "", "confidence": "high|medium|low", "source": "visible|provided"},
  "authority": {"value": "", "confidence": "high|medium|low", "source": "visible|provided"},
  "profile": {"value": "", "confidence": "high|medium|low", "source": "visible|provided"},
  "definition": {"value": null, "confidence": "high|medium|low|unknown"},
  "centers_defined": [],
  "centers_undefined": [],
  "channels": [],
  "gates": [],
  "variables": [],
  "incarnation_cross": null,
  "unreadable_or_uncertain": []
}
```

Regeln:

- unbekannt bleibt unbekannt
- keine Ableitung aus Typ/Autorität
- keine stillen Ergänzungen aus allgemeinem HD-Wissen
- jeder unsichere Wert muss sichtbar unsicher bleiben

Die bekannten A-light-Werte von Petra können als Goldanker für die Extraktionsprüfung dienen.

---

## 8. Stufe 2 – Baseline-Reading

Erzeuge mit demselben Modell eine allgemeine HD-Auswertung als Vergleichsbasis.

Prompt bewusst einfach halten, ungefähr:

> „Bitte erkläre diesen Human-Design-Chart ausführlich und verständlich.“

Kein MIY-Kontext, kein Economic Profile, keine MIY-Schutzlogik außer allgemeinen Sicherheitsgrenzen.

Wichtig:

Dieser Lauf ist nur eine **API-Annäherung an einen offenen ChatGPT-Chat**. Im Bericht nicht behaupten, er sei identisch mit dem ChatGPT-Produkt.

Rohantwort nur lokal speichern, nicht committen.

---

## 9. Stufe 3 – MIY Research Reading

Erzeuge einen zweiten Lauf mit demselben Chart und einem festen MIY-HD-Developer-Prompt.

Der Prompt muss erzwingen:

- Human Design = Reflexionsmodell, keine objektive Wahrheit
- keine Typ→Beruf-Schlüsse
- kein Chart→Geschäftsmodell
- keine Ausschlüsse allein aus HD
- keine Match-Prozente
- keine medizinischen/klinischen Aussagen wie „Projektorinnen bekommen schneller Burnout“
- keine Behauptung, Reflektorinnen seien ungeeignet für Selbstständigkeit
- keine Generator-/MG-Aussage als höhere Belastbarkeit
- gelebte Realität schlägt Chartannahme
- über die Frau fragen, wenn nicht sicher
- Gegenbeispiele ausdrücklich suchen

Der MIY-Lauf darf Full-HD-Elemente **nur als Forschungsinput** verwenden. Daraus entstehen keine produktiven Matchingdaten.

Structured Output je Hypothese mindestens:

```json
{
  "id": "research-hd-...",
  "hd_basis": ["..."],
  "hd_status": "lehre|interpretation|unsicher",
  "economic_theme": "...",
  "hypothesis": "Es könnte ...",
  "open_question": "...",
  "why_economically_relevant": "...",
  "profile_evidence_for": [],
  "profile_evidence_against": [],
  "profile_evidence_unknown": [],
  "current_status": "offen|teilweise|auffaellige_uebereinstimmung|spannung",
  "matching_eligible": false,
  "research_only": true,
  "prohibited_inference": "..."
}
```

`matching_eligible` ist in diesem POC für alle neu aus Full-HD entstandenen Hypothesen zwingend `false`.

Nur bereits freigegebene A-light-Inhalte dürfen als vorhandene produktive Referenz erkannt werden; der POC selbst schreibt trotzdem nichts produktiv.

---

## 10. Stufe 4 – Economic-Profile-Abgleich

Verwende für Petra nur bereits vorhandene, dokumentierte Economic-Profile-/Biografieinformationen aus dem privaten Arbeitskontext.

Der POC soll für jede Hypothese zeigen:

- Was sagt der Chart innerhalb der HD-Logik?
- Was sagt Petra selbst bereits?
- Welche konkreten Lebensbelege sprechen dafür?
- Welche konkreten Lebensbelege sprechen dagegen?
- Was ist tatsächlich noch offen?
- Welche **eine offene Frage** wäre sinnvoll?
- Hat das Thema für einen wirtschaftlichen Weg überhaupt Relevanz?

Nicht jede HD-Spur muss wirtschaftlich relevant sein.

Kein Realitätscheck wird automatisch ausgelöst.

---

## 11. Stufe 5 – Vergleich Baseline vs. MIY

Erzeuge lokal einen Vergleichsbericht mit mindestens diesen Kriterien:

- Verständlichkeit
- fachliche Tiefe innerhalb der HD-Logik
- persönliche Anschlussfähigkeit
- Nutzung bereits bekannter Biografie
- Qualität der offenen Fragen
- sichtbare Gegenbeispiele
- Suggestivität
- Typ→Beruf-/Business-Fehlschlüsse
- medizinische/gesundheitliche Überdeutung
- Scheingenauigkeit
- wirtschaftliche Relevanz
- neue Erkenntnis gegenüber dem bereits bekannten Economic Profile

Zusätzlich statische Schutzprüfung auf mindestens:

- „als Manifestorin/Projektorin/Reflektorin solltest du ...“
- „dein Chart zeigt, dass [Beruf/Business] ...“
- „Selbstständigkeit ist ungeeignet/geeignet wegen Typ“
- „Burnout-Risiko wegen Typ“
- „Generatorin/MG kann mehr leisten“
- Prozent-/Score-Passungen aus HD
- Konditionierungsargumente gegen Widerspruch der Frau

Automatische Bewertung ist nur Vorschlag. **Petra bleibt die menschliche Bewertungsinstanz.**

---

## 12. Minimaler Output

Lokal / nicht committen:

- `chart-canonical.json`
- `baseline-reading.md`
- `miy-research-reading.json`
- `comparison-private.md`

Im öffentlichen `more-is-yours`-Repo anschließend nur:

`berichte-fuer-chatgpt/2026-09-15-hd-chart-llm-poc-fuer-chatgpt.md`

Dieser Bericht darf keine Geburtsdaten, kein Chartbild und keine unnötigen persönlichen Details enthalten.

Er soll erklären:

1. Was wurde gebaut?
2. Welches Modell wurde tatsächlich genutzt?
3. Funktionierte Bild-/PDF-Extraktion oder nur der Fixture-Weg?
4. Welche Chartfelder wurden zuverlässig/unsicher erkannt?
5. Welche Unterschiede gab es zwischen Baseline und MIY?
6. Entstanden relevante neue Fragen durch Full-HD?
7. Welche davon waren bereits durch Economic Profile beantwortet?
8. Wo entstanden echte Spannungen/Gegenbelege?
9. Gab es verbotene Schlüsse oder klinische Überdeutungen?
10. Ist der Ansatz fachlich/technisch vielversprechend?
11. Was wäre der kleinstmögliche nächste Schritt?
12. TECH GAP / CONTENT GAP / METHOD GAP getrennt.

---

## 13. Tests

Mindestens testen:

1. Structured Output entspricht Schema.
2. Unlesbare Chartwerte werden nicht erfunden.
3. A-light-Goldanker Petra werden bei geeignetem Input korrekt erkannt.
4. Full-HD-Hypothesen tragen immer `research_only=true` und `matching_eligible=false`.
5. Widerspruch in der Biografie erzeugt Spannung, keine Umdeutung.
6. „Reflektorin → Selbstständigkeit ungeeignet“ wird verhindert.
7. „Projektorin → Burnout-Risiko“ wird als unzulässige klinische/kausale Aussage verhindert.
8. Generator/MG wird nicht als automatisch belastbarer dargestellt.
9. Keine Prozent-Matches.
10. Kein POC-Ergebnis wird in produktive DB/B5-Library geschrieben.
11. Keine persönlichen Rohdaten werden committed.

---

## 14. Nicht tun

Nicht:

- Full-HD-Produkt bauen
- HD-Library für alle Typen/Zentren/Kanäle befüllen
- Chart-Rechner bauen
- Geburtsdaten berechnen
- Ilse-UI erweitern
- B5 umbauen
- POC-Ergebnisse ins Matching übernehmen
- aus dem Test eine Produktentscheidung ableiten

Wenn der POC zeigt, dass Full-HD zusätzlichen Wert haben könnte, geht das Ergebnis zurück ins Human Design Content Lab.

---

## 15. Definition of Done

Der POC ist fertig, wenn:

- isolierter Code existiert
- Fixture-Weg funktioniert
- Bild/PDF-Weg entweder funktioniert oder sauber als INPUT/TECH GAP dokumentiert ist
- Baseline und MIY mit demselben Modell vergleichbar erzeugt wurden
- Economic-Profile-Abgleich erzeugt wurde
- Schutztests grün sind
- keine Produktivdaten verändert wurden
- sanitiserter Bericht in `berichte-fuer-chatgpt/` liegt
- Commit-SHA und geänderte Dateien im Bericht genannt sind

**Status dieses Briefs: BUILD READY.**
