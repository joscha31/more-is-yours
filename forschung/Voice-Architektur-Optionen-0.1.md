# MORE IS YOURS – Voice-Architektur-Optionen 0.1

**Stand:** 15.09.2026  
**Status:** FACH-LAB-/TECH-RESEARCH-VORSCHLAG · **NICHT PETRA APPROVED** · **NICHT BUILD READY**  
**Bereich:** Ilse Voice · Kosten · Provider-Unabhängigkeit · Supabase-Verknüpfung

## 1. Ziel

More is Yours soll die außergewöhnlich gute Gesprächsqualität von GPT-Live-1 möglichst nutzen, ohne dass bei intensiver Nutzung untragbare variable Voice-Kosten entstehen und ohne dass das Produkt vollständig von einem einzigen Voice-Provider abhängig wird.

Leitfrage:

> Wie bekommen wir eine sehr natürliche Live-Ilse, halten Supabase als Daten-Wahrheit und bleiben wirtschaftlich sowie technisch beweglich?

## 2. Wichtiger aktueller Befund

OpenAI GPT-Live-1 ist seit 10.09.2026 als API verfügbar. Offizieller Preis der Voice-Schicht: **0,05 USD pro Minute**, Backend-Modell und Tools zusätzlich.

Eine Stunde täglich entspricht allein für die Voice-Schicht ungefähr 90 USD pro 30-Tage-Monat. Das bestätigt den bisherigen wirtschaftlichen Einwand gegen eine dauerhaft offene GPT-Live-API-Verbindung für jede Nutzerin.

OpenAI ChatGPT Live im eigenen Nutzerkonto unterstützt aktuell **keine verbundenen Apps oder Plugins**. Damit kann Live derzeit nicht vollautomatisch während des Gesprächs Supabase lesen oder schreiben.

Voice kann inzwischen jedoch in ChatGPT-Projekten mit Projektanweisungen, Quellen und Dateien arbeiten. Das eröffnet einen möglichen halbautomatischen Übergangsweg über eine kompakte Start-/Abschlusskarte.

## 3. Arbeitshypothese: Hybrid ist aktuell der stärkste Weg

### More-is-Yours-App = Zuhause und Daten-Wahrheit

Dort liegen:
- Login / Identität
- Supabase-Profil
- Economic Profile
- Option Genome
- Matching
- bestätigte Entscheidungen
- Realitätschecks
- Historie

### ChatGPT Live = Gesprächsraum

Live wird dort genutzt, wo es besonders stark ist:
- freies gesprochenes Denken
- Nachfragen
- Wärme
- Unterbrechungen
- natürliche Gesprächsdynamik
- offene Exploration

### Text-Ilse = Daten- und Methodentor

Text-Ilse übernimmt insbesondere:
- strukturierten Datenabgleich
- Herkunft/Evidenz
- Profiländerungen
- Matching
- Speichern bestätigter Ergebnisse
- Prüfung einer Live-Abschlusskarte
- Klärung vor Supabase-Schreibvorgängen

Prinzip:

> Live spricht frei. Text-Ilse prüft und speichert sauber.

## 4. Winziger Proof of Concept: „Voice Bridge ohne Voice-API“

### Testfrage

> Kann eine Frau in ihrem eigenen ChatGPT-Account mit GPT-Live sprechen, während More is Yours davor und danach zuverlässig den Kontext führt – ohne dass More is Yours die Voice-Minuten bezahlt?

### Was gebaut werden darf

Nur ein isolierter POC. Keine Produktionsintegration.

#### A. In More is Yours

Für genau einen Testaccount:

1. Supabase-Testnutzer `VOICE-POC-001` anlegen bzw. vorhandenen Testaccount verwenden.
2. Eine **Startkarte** erzeugen mit:
   - pseudonymer Session-ID
   - Ilse-Version
   - 5–10 relevanten bestätigten Kontextpunkten
   - aktuellem Gesprächsziel
   - offenen Fragen
   - kurzer Herkunftsregel: Gesagtes / Ableitung / Hypothese nicht vermischen
   - Hinweis: keine Daten selbst als bestätigt speichern
3. Einen Button `Startkarte kopieren` anbieten.
4. Nach dem Live-Gespräch ein Feld `Abschlusskarte einfügen` anbieten.
5. Die Text-Ilse prüft die Abschlusskarte gegen den vorhandenen Supabase-Stand.
6. Vor jedem Schreibvorgang zeigt sie der Frau:
   - neu direkt gesagt
   - mögliche Ableitungen
   - offene Hypothesen
   - vorgeschlagene Änderungen
7. Erst nach Bestätigung der Frau wird in Supabase geschrieben.

#### B. In ChatGPT Live

1. Frau öffnet ihren eigenen ChatGPT-Account.
2. Sie fügt die Startkarte in einen normalen Chat ein.
3. Sie startet Live.
4. Kurzer echter Gesprächstest mit einem klar abgegrenzten Thema.
5. Am Ende sagt sie: `Ilse, mach mir bitte die Abschlusskarte.`
6. Live gibt einen kompakten Block zurück mit:
   - direkt gesagt
   - mögliche Hypothesen
   - offene Fragen
   - getroffene Entscheidungen
   - nächster sinnvoller Schritt
7. Frau kopiert diesen Block zurück in More is Yours.

### Erfolgskriterien des POC

Der Test gilt nur dann als technisch interessant, wenn:

- More is Yours zahlt **0 USD Voice-API-Kosten** für die Live-Sitzung.
- die richtige Testnutzerin bleibt eindeutig zugeordnet.
- Live versteht die Startkarte und verwendet den vorhandenen Kontext sinnvoll.
- keine Hypothese wird beim Rückimport automatisch zur Tatsache.
- die Text-Ilse erkennt Änderungen/Unklarheiten korrekt und verlangt Bestätigung.
- nach Bestätigung landet der richtige neue Stand im richtigen Supabase-Profil.
- der Nutzerinnenweg besteht im Kern aus **einmal hinein kopieren + einmal heraus kopieren**, ohne Datei-Management.
- mindestens ein echter Quality-Case wird parallel geprüft.

Der POC beweist noch **nicht**:
- Skalierbarkeit
- Datenschutz-Freigabe
- finale UX
- Eignung für Free-Accounts
- langfristige Verfügbarkeit von GPT-Live

## 5. Wichtige Produktabhängigkeit bei ChatGPT Live

Nach aktuellem OpenAI-Stand:

- bezahlte persönliche ChatGPT-Tarife: GPT-Live-1
- Free: GPT-Live-1 mini

Damit ist der eigene ChatGPT-Account zwar ein starker Kostenhebel, aber die Gesprächsqualität kann je nach Tarif unterschiedlich sein.

Das muss im POC ausdrücklich getrennt getestet werden.

## 6. Alternative technische Wege

### Option A – BYO ChatGPT Live + Start-/Abschlusskarte

**Kosten für MIY-Voice:** praktisch keine direkten Voice-API-Kosten.  
**Qualität:** höchste bisher beobachtete Ilse-Gesprächsqualität bei GPT-Live-1.  
**Supabase:** aktuell nur halbautomatisch über Übergabekarte.  
**Abhängigkeit:** hoch von OpenAI/ChatGPT.  
**Empfehlung:** sofortiger POC-Kandidat.

### Option B – Hybrid mit kurzen GPT-Live-API-Fenstern

Eigene App nutzt GPT-Live-1 nur gezielt für kurze Gesprächsfenster; strukturierte Arbeit bleibt Text-Ilse.

Offiziell 0,05 USD/min nur für die Voice-Schicht, Backend/Tools zusätzlich.

Beispiele nur zur Größenordnung:
- 120 Voice-Minuten/Monat → 6 USD Voice-Schicht
- 240 Voice-Minuten/Monat → 12 USD Voice-Schicht
- 300 Voice-Minuten/Monat → 15 USD Voice-Schicht
- 1.800 Voice-Minuten/Monat → 90 USD Voice-Schicht

**Vorteil:** volle Supabase-/Tool-Integration möglich.  
**Nachteil:** variable Kosten bleiben; OpenAI-Abhängigkeit bleibt.  
**Empfehlung:** Reserve-/Premium-Modell testen, nicht Standardarchitektur festlegen.

### Option C – Gemini Live API

Google Gemini Live unterstützt bidirektionales Audio und Function Calling. Eine eigene App könnte damit Supabase-Funktionen aufrufen.

Preislogik ist tokenbasiert. Google weist ausdrücklich darauf hin, dass in längeren Live-Sitzungen der aktive Kontext bei jedem Turn erneut berechnet werden kann; dadurch können Langgespräche überproportional teurer werden.

**Vorteil:** echte Alternative zu OpenAI mit Tool-/Supabase-Anbindung.  
**Risiko:** Qualität von Ilse und reale Langzeitkosten noch ungetestet.  
**Empfehlung:** Benchmark-Kandidat für 10/30/60-Minuten-Test, nicht vorschnell produktiv.

### Option D – Deepgram Voice Agent API

Deepgram bietet eine komplette Echtzeit-Voice-Agent-Schicht mit STT, Orchestrierung, TTS, Turn-Taking und BYO-LLM/TTS.

Aktueller veröffentlichter Preis für den Full Stack: **4,50 USD/Stunde**.

**Vorteil:** kontrollierbare Architektur, Function Calling, BYO-LLM, vorhersehbare Minutenkosten.  
**Nachteil:** bei 1 Stunde täglich ca. 135 USD/Monat; Gesprächsqualität für Ilse muss unabhängig geprüft werden.  
**Empfehlung:** Qualitäts-/Fallback-Benchmark, kein offensichtlicher Kostensieger bei Dauergebrauch.

### Option E – ElevenLabs Agents

Aktuell ab **0,08 USD/Minute** für die gehostete Voice-Schicht, LLM zusätzlich. Eleven v3 Conversational bietet expressive Stimmen und prosodisches Turn-Taking.

**Vorteil:** sehr starke Stimme/Expressivität.  
**Nachteil:** bei Dauergebrauch teuer; LLM-Kosten zusätzlich.  
**Empfehlung:** Stimme/Emotion benchmarken, nicht als Standard-Kostensieger betrachten.

### Option F – Eigener modularer Voice-Stack mit Pipecat oder LiveKit

Pipecat ist Open Source und kann STT, LLM, TTS und Realtime-Transport frei kombinieren. LiveKit bietet ebenfalls eine austauschbare Realtime-Agent-Schicht.

Mögliche Kette:

> Mikrofon → STT → Ilse-LLM → TTS → Lautsprecher

Provider können einzeln ausgetauscht werden.

**Vorteil:** höchste Provider-Unabhängigkeit und volle Supabase-Kontrolle.  
**Nachteil:** mehr Engineering; natürliche Unterbrechungen, Timing, Pausen und emotionale Qualität müssen selbst zusammengesetzt werden.  
**Empfehlung:** strategischer Unabhängigkeits-Pfad, nicht sofort Produktionsweg.

### Option G – Open Source Full-Duplex, z. B. Moshi

Moshi ist ein offenes Full-Duplex-Sprachmodell und kann selbst gehostet werden.

Aktuelle harte Einschränkung: Moshi ist laut eigener Dokumentation im Wesentlichen **englischsprachig** und benötigt für die unquantisierte PyTorch-Version erhebliche GPU-Ressourcen.

**Vorteil:** echte Provider-Unabhängigkeit.  
**Nachteil:** aktuell für eine deutsche Ilse fachlich nicht geeignet.

## 7. Empfohlene Architektur-Forschung in drei Spuren

### Spur 1 – Jetzt

**BYO ChatGPT Live + Start-/Abschlusskarte** testen.

Ziel: Können wir die beste Gesprächsqualität heute schon nutzen, obwohl die Supabase-Brücke nicht direkt im Live-Chat liegt?

### Spur 2 – Fallback / Wettbewerb

Mit denselben 5–10 Golden Voice Cases testen:
- GPT-Live-1
- Gemini Live
- Deepgram Voice Agent
- ElevenLabs Agents

Immer dieselben Kriterien:
- Gesprächsqualität
- Unterbrechungen
- Denkpausen
- Wärme/Natürlichkeit
- Methodentreue
- Erkenntnisqualität
- Supabase-/Tool-Fähigkeit
- Kosten 10/30/60 Minuten

### Spur 3 – strategische Unabhängigkeit

Pipecat oder LiveKit als mögliche **austauschbare Voice-Hülle** untersuchen.

Ziel:

> More is Yours soll nicht neu gebaut werden müssen, wenn der beste Voice-Provider wechselt.

## 8. Aktuelle Fach-Lab-Empfehlung

Noch keine Produktentscheidung.

Stärkste Arbeitshypothese:

> **More is Yours bleibt die Heimat und Daten-Wahrheit. Text-Ilse bleibt das sichere Daten-/Methodentor. GPT-Live wird zunächst als externer Gesprächsraum über eine Start-/Abschlusskarte getestet. Parallel werden zwei echte Ersatz-Stacks benchmarked.**

Damit werden Qualität, Kosten und Anbieterabhängigkeit nicht mit einer einzigen Wette vermischt.

## 9. Quellenstand 15.09.2026

- OpenAI GPT-Live-1 API: https://openai.com/index/introducing-gpt-live-1-in-the-api/
- OpenAI ChatGPT Voice: https://help.openai.com/en/articles/20001274
- OpenAI Release Notes / Voice in Projects: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- Google Gemini Live Tools: https://ai.google.dev/gemini-api/docs/live-api/tools
- Google Gemini Live Pricing: https://ai.google.dev/gemini-api/docs/pricing
- Google Live API Best Practices: https://ai.google.dev/gemini-api/docs/live-api/best-practices
- Deepgram Voice Agent API: https://deepgram.com/product/voice-agent-api
- ElevenLabs Agents Pricing: https://elevenlabs.io/pricing/agents
- Pipecat: https://github.com/pipecat-ai/pipecat
- Moshi: https://github.com/kyutai-labs/moshi

