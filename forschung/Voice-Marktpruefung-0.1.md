# MORE IS YOURS – Voice-Marktprüfung 0.1

**Stand:** 15.09.2026, abends  
**Status:** RESEARCH / PETRA REVIEW – keine Entscheidung  
**Bereich:** Ilse Voice · Kosten · Provider-Unabhängigkeit · Supabase als Daten-Wahrheit  
**Erstellt von:** Claude Code (Recherche- und Architekturunterstützung) auf Auftrag von Petra/ChatGPT  
**Vorlauf:** `forschung/Voice-Architektur-Optionen-0.1.md` (Fach-Lab-Vorschlag) · `berichte-fuer-chatgpt/2026-09-15-liveone-lowcost-architektur-tech-check.md` (Tech Finding)

> Diese Datei trifft keine Architekturentscheidung, baut keine Produktivtechnik und formuliert keine neue Fachregel für Ilse. Sie prüft den Markt mit datierten Quellen und sagt, was heute geht, was nicht geht und was als Nächstes wirklich getestet werden sollte.

---

# TEIL 1 – DIE EINE SEITE FÜR PETRA

## Was heute möglich ist

1. **Die Frau spricht in ihrem eigenen ChatGPT-Konto mit GPT-Live-1, und More is Yours zahlt dafür nichts.** ChatGPT Plus enthält 3 Stunden Live je 24 Stunden, Pro (200 $) unbegrenzt, Free nur die kleine Variante (GPT-Live-1 mini). Live läuft im normalen Chat, kann Text und Bilder im selben Chat verarbeiten, nutzt Memory und Web-Suche und funktioniert in Projekten mit Projektanweisungen. *(OpenAI Help Center, aktualisiert 12.09.2026)*
2. **GPT-Live-1 gibt es seit 10.09.2026 auch als API: 0,05 USD je Minute, sekundengenau, nur für die Sprach-Schicht.** Das Denken und die Tools (also Ilses Beobachterin, Opus, Supabase) laufen in einem getrennten Backend, das More is Yours selbst betreibt („Client Delegation"). EU-Datenresidenz ist für GPT-Live offiziell möglich (mit 10 % Aufschlag und Vertragszusatz). *(OpenAI Docs, 10.–15.09.2026)*
3. **Es gibt echte Alternativen mit Deutsch und EU-Verarbeitung:** Deepgram Voice Agent (EU-Endpunkt, deutsches STT und TTS, eigenes LLM erlaubt, ab 0,059 USD/min), Gemini Live (Deutsch, günstigste Token-Preise, aber Vorschau-Modelle mit kurzer Lebensdauer), Azure Voice Live (OpenAI-Sprachmodelle in EU-Rechenzentren, Preis noch nicht belegt).
4. **Pipecat und LiveKit sind von OpenAI selbst als GPT-Live-Partner gelistet** und haben zugleich Bausteine für Gemini, Deepgram, ElevenLabs, Cartesia und Azure. Beide erkennen Sprecherwechsel auf Deutsch. Damit ist eine austauschbare Voice-Hülle kein Wunschtraum, sondern dokumentierte Praxis.

## Was heute nicht möglich ist

1. **ChatGPT Live kann während des Gesprächs nicht mit Supabase reden.** Verbundene Apps, Plugins und Custom-GPT-Actions sind in Live nicht verfügbar, und Live findet keine Dateien aus der ChatGPT-Bibliothek. Der Weg hinein und hinaus bleibt eine Übergabe von Text (die Start-/Abschlusskarte). *(OpenAI Help Center, 12.09.2026)*
2. **Eine Frau kann ihr ChatGPT-Abo nicht an die More-is-Yours-App „ausleihen".** „Sign in with ChatGPT" ist eine Vorschau für Entwickler-Werkzeuge mit kleinen API-Guthaben, keine Sprach-Minuten-Übertragung.
3. **Ein deutsches Open-Source-Full-Duplex-Modell gibt es nicht.** Moshi spricht nur Englisch, Kyutais Deutsch-Fassung ist angekündigt, nicht erschienen. Was Deutsch kann (Qwen3-Omni, Ultravox), ist nicht echtes gleichzeitiges Hören und Sprechen und braucht eigene GPU-Server.
4. **Die Gesprächsqualität der Alternativen für eine deutsche Ilse ist unbewiesen.** Niemand hat sie gegen Petras Golden Cases gehört. Sprachlisten sind kein Qualitätsbeweis.
5. **Ob GPT-Live-1 in der API bereits deutsche Stimmen anbietet, ist nicht belegt.** Die Stimmenliste nennt Englisch und Portugiesisch, OpenAI schreibt „Sprachverfügbarkeit wird in den nächsten Monaten erweitert". Im ChatGPT-Konto spricht Live Deutsch (Petras Pilot). Das muss die API im Test zeigen.

## Die drei vielversprechendsten Wege

| Weg | Kurz gesagt | Voice-Kosten für MIY bei 1.800 min/Monat | Was dafür spricht | Was dagegen spricht |
|---|---|---|---|---|
| **1 · Eigenes ChatGPT-Konto + Start-/Abschlusskarte** | Die Frau spricht in ihrem Plus-Konto, MIY hält die Wahrheit in Supabase und prüft vor dem Speichern | **0 USD** (die Frau zahlt ca. 23 €/Monat Plus) | beste bisher gehörte Ilse, sofort testbar, kein Bau | zwei Kopier-Schritte je Gespräch, Daten laufen durch OpenAI USA, Ilse-Persona liegt im Konto der Frau, ChatGPT-Memory wird zur zweiten Wahrheit |
| **2 · GPT-Live-1 API in der eigenen App, Denken bleibt bei uns** | MIY baut den Sprachkanal selbst, Beobachterin + Opus + Supabase steuern das Gespräch als Backend | **90 USD** (99 USD mit EU-Residenz) + Backend-Modell | volle Supabase-Anbindung, dieselbe Ilse-Qualität, Transkript kommt mit, EU-Residenz möglich | teuer bei Dauergebrauch, OpenAI-Abhängigkeit, Modellwechsel alle 3–6 Monate |
| **3 · Austauschbare Hülle (Pipecat oder LiveKit) mit Deepgram oder Gemini als erstem Fremd-Anbieter** | Dieselbe Ilse (Opus + Beobachterin + Supabase) spricht durch eine Sprach-Schicht, die man wechseln kann | **Deepgram: 106 USD + LLM · Gemini: 20–60 USD (Untergrenze, unbewiesen) · Hülle: 0–18 USD** | Unabhängigkeit, EU-Endpunkt (Deepgram), deutsches STT/TTS belegt, Anbieterwechsel ohne Neubau | mehr Bauarbeit, Natürlichkeit und Unterbrechungen müssen bewiesen werden, Gemini-Kosten steigen mit Gesprächslänge |

**Lesehilfe:** Bei kleinem Volumen (bis 240 Minuten im Monat) kostet sogar Weg 2 nur 12 USD. Die Kostenfrage wird erst ab etwa 900 Minuten im Monat scharf. Das ist Frau Nr. 1 bis Frau Nr. 10 egal, ab 20 aktiven Frauen nicht mehr.

## Was wir als Nächstes wirklich testen sollten

1. **Den winzigen POC „Voice Bridge ohne Voice-API"** aus `Voice-Architektur-Optionen-0.1.md`, jetzt mit drei belegten Antworten im Gepäck: Live nutzt Projektanweisungen (belegt), Live liest keine Bibliotheks-Dateien (belegt), also gehört die Startkarte als Text in den Chat, nicht als Datei ins Projekt. Testen: Plus-Konto UND Free-Konto (mini) getrennt.
2. **Benchmark 1: Deepgram Voice Agent mit Ilses eigenem Gehirn** (BYO-LLM = unser Opus-Persona-Kern, EU-Endpunkt, Aura-2 Deutsch) gegen dieselben Golden Cases. Frage: Wie viel Natürlichkeit verliert Ilse, wenn nur die Sprach-Schicht fremd ist?
3. **Benchmark 2: Gemini Live 2.5 native audio** über 10, 30 und 60 Minuten mit Ablesen der echten Kosten im Dashboard. Frage: Hält die Untergrenze von 1 Cent je Minute einem 30-Minuten-Gespräch stand, oder frisst die Kontext-Neuberechnung den Vorteil auf?
4. **Eine Sprach-Probe GPT-Live-1 API auf Deutsch** (10 Minuten, Stimme „marin"): Spricht sie Deutsch so wie im ChatGPT-Konto? Das entscheidet, ob Weg 2 überhaupt eine Option ist.

Alle vier Tests sind Stunden, keine Wochen. Keiner davon ist Produktivtechnik.

---

# TEIL 2 – DIE VERGLEICHSMATRIX

**Legende:** ✅ belegt · 🟡 belegt mit Einschränkung · ❓ nicht belegt / nicht gefunden · ⛔ belegt nicht möglich · **(A)** Anbieterangabe, kein unabhängiger Qualitätsbeweis

## 2.1 Gesprächsfähigkeit

| Kriterium | ChatGPT Live (eigenes Konto) | GPT-Live-1 API | Gemini Live | Deepgram Voice Agent | ElevenLabs Agents | LiveKit (Hülle) | Pipecat (Hülle) | Moshi / OSS |
|---|---|---|---|---|---|---|---|---|
| Full Duplex (gleichzeitig hören + sprechen) | ✅ | ✅ | 🟡 Barge-in ja, echtes Überlappen ❓ | ⛔ Kette STT→LLM→TTS mit Turn-Modell „Flux" | ⛔ Kette mit Turn-Modell | abhängig vom Modell | abhängig vom Modell | ✅ Moshi (nur Englisch) |
| Unterbrechen + wieder einsetzen | ✅ (Petras Pilot) | ✅ (A) „smooth interruption handling" | ✅ konfigurierbare VAD | ✅ Flux, ~30 % weniger Fehl-Unterbrechungen (A) | ✅ „Turn Eagerness" einstellbar | ✅ eigenes Turn-Modell | ✅ Smart Turn v2 | ✅ |
| Denkpausen (Modell wartet, statt reinzureden) | ✅ (A) Speak: 80 % weniger Unterbrechungen | ✅ (A) dito | 🟡 VAD-Silence einstellbar | 🟡 Endpointing einstellbar | 🟡 einstellbar | ✅ semantisches Turn-Modell | ✅ semantisches Turn-Modell | ❓ |
| Deutsch | ✅ (Pilot) | ❓ Stimmen-Liste nur EN/PT, „weitere Sprachen folgen" | ✅ 97 Sprachen, de gelistet | ✅ Nova-3 de + Aura-2 de (10+ Stimmen) | ✅ v3: 70+ Sprachen inkl. de | ✅ Turn-Modell de | ✅ Smart Turn de | ⛔ Moshi nur EN |
| Emotionales Timing / Wärme | ✅ (Pilot) | 🟡 (A) Ton/Tempo per Prompt | 🟡 „Affective Dialog" nur 2.5, in 3.1 gestrichen | ❓ | 🟡 (A) v3 expressiv | abhängig | abhängig | ❓ |
| Persona-Treue / Custom Instructions | 🟡 Projektanweisung ja, Persönlichkeits-Presets gelten nicht in Live | ✅ bis 16.384 Tokens + Verlauf 8.192 Tokens | ✅ System Instruction | ✅ Settings-Prompt | ✅ System-Prompt | ✅ | ✅ | ✅ |

## 2.2 Anbindung, Daten, Recht

| Kriterium | ChatGPT Live (eigenes Konto) | GPT-Live-1 API | Gemini Live | Deepgram | ElevenLabs | LiveKit | Pipecat | Moshi / OSS |
|---|---|---|---|---|---|---|---|---|
| Function Calling / Tools | ⛔ keine Apps, Plugins, Actions in Live | ✅ Delegation an Backend (Responses oder eigener Client) | ✅ (2.5 auch asynchron, 3.1 nur sequenziell) | ✅ client- oder serverseitig | ✅ Server/Client Tools, Webhooks | ✅ über LLM-Plugin | ✅ über LLM-Plugin | ✅ über eigenes LLM |
| Supabase-Anbindung | 🟡 nur per Start-/Abschlusskarte (Text) | ✅ direkt aus unserem Backend | ✅ per Tool | ✅ per Tool | ✅ per Webhook/Tool | ✅ eigener Code | ✅ eigener Code | ✅ eigener Code |
| Transkript / Speicherung | 🟡 Transkript im Chat der Frau, Audio 30 Tage bei OpenAI; MIY bekommt nur, was sie kopiert | ✅ ASR-Transkript + Antworttext nativ; `store` standardmäßig aus | ✅ Transkription ein-/ausschaltbar | ✅ Transkript-Events | ✅ Post-Call-Webhook | ✅ | ✅ | ✅ |
| EU-Hosting / Datenresidenz | ⛔ Consumer-Produkt, USA | 🟡 EU (eu.api.openai.com) mit MAM/ZDR-Zusatz + 10 % Aufschlag; ZDR möglich | ❓ Vertex EU-Regionen vorhanden, Live API dort ❓ | ✅ api.eu.deepgram.com inkl. Voice Agent; Dedicated/Self-hosted | 🟡 nur Enterprise-Tarif | 🟡 self-hostbar (Apache 2.0), Cloud-EU ❓ | 🟡 self-hostbar (BSD-2), Cloud-EU ❓ | ✅ eigener Server (z. B. Scaleway Paris) |
| Kein Training mit Daten | 🟡 nur mit Opt-out der Frau | ✅ API-Standard | ✅ bei bezahlter Nutzung | ❓ DPA prüfen | ✅ DPA vorhanden | – | – | ✅ |
| Bring-your-own-Account der Frau | ✅ der einzige echte Weg | ⛔ | ⛔ | ⛔ | ⛔ | ⛔ | ⛔ | ⛔ |

## 2.3 Aufwand, Abhängigkeit, Risiko

| Kriterium | ChatGPT Live (eigenes Konto) | GPT-Live-1 API | Gemini Live | Deepgram | ElevenLabs | LiveKit | Pipecat | Moshi / OSS |
|---|---|---|---|---|---|---|---|---|
| Entwicklungsaufwand | **klein**: Kartengenerator + Rückimport-Prüfung in Text-Ilse | **mittel**: WebRTC-Client + Delegation-Backend | mittel | mittel | **klein** (gehostet, Widget) | mittel bis groß | mittel bis groß | **groß** + GPU-Betrieb |
| Provider-Abhängigkeit | sehr hoch (OpenAI + Tarifpolitik) | hoch | hoch | mittel (BYO-LLM, BYO-TTS) | hoch | **niedrig** | **niedrig** | keine |
| Wegfall-Risiko des Voice-Modells | mittel: Live ist neu, Limits „können sich ändern" | **hoch**: OpenAI kündigt Realtime-Modelle mit 3–6 Monaten Frist ab (belegt: 4 Zyklen seit 06/2025) | **hoch**: Live-Vorschauen nach 6–14 Monaten abgeschaltet (belegt) | mittel: junge Produktlinie, keine Abkündigungen bekannt | mittel: Umbenennung 2025, Modelle wechseln | niedrig (Framework bleibt, Plugins wechseln) | niedrig | niedrig |
| Reife | GA | GA seit 10.09.2026 | Vorschau (Developer API), GA auf Vertex | GA, EU-Endpunkt GA 2026 | GA | v1.x, große Community | aktiv, Daily als Maintainer | Forschung |

## 2.4 Kosten je Monat, nur die Sprach-Schicht

⚠️ **Nicht vergleichbare Preisbestandteile sind markiert.** Annahme überall: 50 % Sprechanteil je Seite. Preise in USD, Stand 15.09.2026, ohne USt.

| Anbieter | Preislogik | 120 min | 240 min | 900 min | 1.800 min | Was NICHT enthalten ist |
|---|---|---|---|---|---|---|
| **ChatGPT Live im Konto der Frau** | Frau zahlt Plus (ca. 23 €/Monat, 3 h Live je 24 h) oder nutzt Free (mini, „limitiert") | **0** | **0** | **0** | **0** | ⚠️ Kosten liegen bei der Frau; Free-Qualität = mini; keine Supabase-Live-Anbindung |
| **GPT-Live-1 API** | 0,05 $/min, sekundengenau | 6 | 12 | 45 | 90 | ⚠️ Backend-Modell (Opus/GPT) extra: gemessen PEMS 0.1 ca. 3 ¢ je Zug; EU-Residenz +10 % (6,60 / 13,20 / 49,50 / 99) |
| gpt-realtime (alte Realtime-API, zum Vergleich) | Token: 32 $/64 $ je 1M Audio | ~18 | ~36 | ~135 | ~270 | ⚠️ Näherung Dritter, kein OpenAI-Minutenpreis; Modell wird 20.01.2027 abgeschaltet |
| gpt-realtime-mini | Token: 10 $/20 $ je 1M Audio | ~5,60 | ~11,30 | ~42 | ~84 | ⚠️ wie oben |
| **Gemini Live 2.5 native audio** | Token: 3 $/12 $ je 1M Audio, ~25 Tokens/s | **~1,35** | **~2,70** | **~10** | **~20** | ⚠️ **UNTERGRENZE**: Google berechnet bei jedem Zug den ganzen bisherigen Verlauf neu; bei 30-Minuten-Gesprächen realistisch ein Mehrfaches. Nur per Testlauf belastbar. |
| **Deepgram Voice Agent, Full Stack** | 0,075 $/min (Aktionspreis) | 9 | 18 | 67,50 | 135 | ⚠️ „Limited-time promotional rates" |
| Deepgram BYO-LLM (Ilses Opus) | 0,059 $/min | 7,08 | 14,16 | 53,10 | 106,20 | ⚠️ LLM-Tokens bei Anthropic extra |
| **ElevenLabs Agents** | Tarif mit Minuten-Kontingent, 0,08 $/min darüber | 22 (Creator) | 22 (Creator, 275 min) | 99 (Pro, 1.238 min) | ~144 (Pro + 562 Extra-Min.) | ⚠️ **Fixkosten**, LLM extra, EU-Residenz nur Enterprise |
| **LiveKit Cloud** (nur Hülle) | 1.000 Agent-Minuten frei, dann 0,01 $/min bzw. Ship 50 $/Monat | 0 | 0 | 0 | 50 (Ship) oder 8 (Überschuss) | ⚠️ **nur Transport + Agent-Hosting**, alle Modelle extra |
| **Pipecat Cloud** (nur Hülle) | 0,01 $/aktive min (agent-1x) | 1,20 | 2,40 | 9 | 18 | ⚠️ **nur Hosting**, alle Modelle extra; Self-Hosting 0 |
| **Azure Voice Live** | Tarife Pro/Basic/Lite | ❓ | ❓ | ❓ | ❓ | Preis in dieser Prüfung nicht belegt; EU-Region belegt |
| Moshi selbst gehostet | GPU-Stunde (Scaleway L4 ca. 0,79 €/h) | – | – | – | – | ⚠️ nur Englisch, daher nicht bewertet |

**Rechenbeispiel für den Kopf:** Eine Frau, die 30 Minuten am Tag spricht, kostet über die GPT-Live-1 API 45 USD im Monat für die Stimme, plus Backend. Über ihr eigenes Plus-Konto kostet sie MIY 0 USD, und sie hätte 6-mal so viel Sprechzeit frei.

---

# TEIL 3 – DIE FÜNF SONDERFRAGEN

## A. Kann ChatGPT Live den More-is-Yours-Kontext reibungsarm erhalten?

**Belegt (OpenAI Help Center „ChatGPT Voice", aktualisiert 12.09.2026; „Projects in ChatGPT", aktualisiert 17.08.2026):**

| Mechanismus | Geht in Live? | Folge für die Brücke |
|---|---|---|
| Projektanweisungen | ✅ Projekte listen „Voice mode" als verfügbares Werkzeug; Projektanweisungen überschreiben die globalen Custom Instructions | Ein Projekt „Ilse" je Frau kann die Gesprächsregeln tragen |
| Text im selben Chat | ✅ Live „works within a chat", Text tippen und lesen möglich | **Die Startkarte gehört als Text in den Chat, direkt bevor Live gestartet wird** |
| Projekt-Dateien | ❓ Live „cannot currently find or add files from your ChatGPT Library"; ob hochgeladene Projekt-Quellen im Live-Gespräch gelesen werden, ist nicht belegt | Im POC prüfen, nicht darauf bauen |
| Memory | ✅ Live nutzt Memory | ⚠️ ChatGPT baut eine **zweite Wahrheit** über die Frau auf, die Supabase nicht kennt |
| Web-Suche | ✅ | unkritisch |
| Persönlichkeits-Presets | ⛔ gelten nicht in Live | Ton muss in der Projektanweisung stehen |
| Apps, Plugins, Connectors, Custom-GPT-Actions | ⛔ | keine Live-Verbindung zu Supabase |
| Geteilte Projekte | ✅ für alle Tarife | ⚠️ Mitglieder sehen die Chats des Projekts, also **kein** geteiltes Projekt für mehrere Frauen |
| Audio-Aufbewahrung | Audio 30 Tage bei OpenAI, Transkript im Chatverlauf | Punkt für Dr. Falk: Gesundheits- und Lebensdaten liegen im Konto der Frau bei OpenAI USA |

**Reibungsärmster Weg, der heute belegt ist:** Die Frau legt einmalig ein Projekt „Ilse" an und fügt eine von MIY gelieferte Projektanweisung ein (kurz, ohne Methoden-Interna). Je Gespräch fügt sie die Startkarte als Text ein und tippt dann auf das Voice-Symbol. Alles andere (Dateien, Apps) ist heute entweder nicht belegt oder nicht möglich.

**Querverweis (parallel entstanden, 15.09.2026):** `forschung/Voice-Zugangsschutz-Shared-Project-0.1.md` schlägt vor, dass More is Yours das Projekt besitzt und die Frau nur Mitglied ist (ein Projekt je Frau, dünne Ilse-Schale, Zugriff bei Kündigung entziehbar). Das passt zu den Befunden hier. Ein Punkt weicht ab: Dort steht, Voice könne Projektquellen nutzen. In der OpenAI-Hilfe vom 12.09.2026 ist für Live nur belegt, dass Bibliotheks-Dateien **nicht** gefunden werden; für Projektquellen gibt es keine Aussage. Beides ist kein Widerspruch, sondern der erste Prüfpunkt im POC: Startkarte einmal als Text im Chat, einmal als Projektquelle, und hören, was Live davon kennt.

**Zwei offene Punkte für Petra und ChatGPT, keine Entscheidung hier:**
- Die Projektanweisung liegt im Konto der Frau. Sie kann sie lesen und weitergeben. Der Persona-Kern (Ilses „Gesetz") gehört also nicht komplett hinein, nur die Gesprächsform.
- Ob Free-Konten mit GPT-Live-1 mini die gleiche Ilse liefern, ist ungeprüft. Der Fach-Lab-Vorschlag verlangt den getrennten Test zu Recht.

## B. Wie sähe eine Start-/Abschlusskarten-Brücke nutzerfreundlich aus?

Nur Skizze, keine UI-Entscheidung. Maßstab: Petras Gelesen-Tor und das UI-Gesetz vom 15.09. (lebendig, nicht Formular).

**Hinein (3 Tipps):**
1. In MIY: Knopf **„Ilse zum Sprechen mitnehmen"**. Er kopiert die Startkarte in die Zwischenablage und zeigt den nächsten Schritt als Bild, nicht als Anleitung.
2. Knopf **„ChatGPT öffnen"** (Link auf die App). Ein offizieller Deep-Link, der ChatGPT direkt mit Text UND Voice öffnet, ist nicht belegt; `chatgpt.com/?q=` ist inoffiziell und trägt nicht.
3. In ChatGPT: einfügen, senden, Voice-Symbol tippen. Live startet im selben Chat, die Karte ist Kontext.

**Heraus (3 Tipps):**
4. Die Frau sagt: „Ilse, mach die Abschlusskarte." Live schreibt sie als Text in den Chat (belegt: Text im selben Chat).
5. Sie tippt auf „Kopieren" unter der Nachricht.
6. In MIY: Feld **„Abschlusskarte einfügen"**. Die Text-Ilse zeigt dann in drei Spalten, was neu gesagt, was abgeleitet und was Hypothese ist, und schreibt erst nach dem Ja der Frau in Supabase.

**Was die Karte technisch braucht:** eine Kopfzeile mit Kennung (`MIY-KARTE 1 · Code XY7Q · Ilse 2026-09-15.1`), damit die Text-Ilse sie erkennt und der Frau zuordnet; pseudonym, kein Klarname; unter 1.500 Zeichen, damit sie am Handy ohne Scrollen passt; die Herkunftsregel als ein Satz („Gesagt, abgeleitet, vermutet getrennt halten").

**Größter UX-Stolperstein:** Schritt 5. Wenn Live die Abschlusskarte nur spricht statt schreibt, fehlt der Kopier-Knopf. Das ist im POC als Erstes zu prüfen.

## C. Eigene Voice-Subscription der Frau, Supabase bleibt Wahrheit?

| Weg | Heute möglich? | Befund |
|---|---|---|
| ChatGPT-Konto + Karte | ✅ | einziger belegter Weg; Supabase bleibt Wahrheit, weil MIY nur nach Prüfung schreibt |
| „Sign in with ChatGPT" in der MIY-App | ⛔ für Voice | Vorschau (Codex CLI), Free/Plus/Pro, gibt kleine API-Guthaben (5 $ Plus, 50 $ Pro), keine Live-Minuten; Team/Business ausgeschlossen |
| Gemini-Abo der Frau in MIY nutzen | ⛔ | kein solches Programm gefunden |
| ElevenLabs-, Deepgram-Konto der Frau | ⛔ | Entwickler-Produkte, keine Endkunden-Abos mit Übertragung |
| Eigener API-Schlüssel der Frau | 🟡 technisch ja | für Petras Zielgruppe (Frauen 45+, keine Technikerinnen) kein tragbarer Weg |

**Ergebnis:** Bring-your-own-account gibt es nur in der Form „die Frau spricht bei OpenAI, MIY prüft und speichert". Alles andere wäre Bau gegen den Markt.

## D. Pipecat oder LiveKit als austauschbare Voice-Hülle?

**Belegt:** OpenAI listet LiveKit und Daily/Pipecat als offizielle GPT-Live-Partner *(developers.openai.com, 10.09.2026)*. Beide Frameworks haben Plugins für OpenAI (Realtime und Live), Gemini Live, Deepgram, ElevenLabs, Cartesia und Azure. Beide bringen ein eigenes Sprecherwechsel-Modell mit Deutsch (LiveKit: Qwen-basiert, eigene Modell-Lizenz; Pipecat: Smart Turn, BSD-2). Beide sind selbst hostbar.

**Die wichtige Einschränkung, wörtlich von OpenAI:** „A Realtime integration is not automatically compatible with GPT-Live." GPT-Live arbeitet mit **Delegation** (das Sprachmodell reicht Aufgaben an ein Backend weiter), die anderen mit klassischem Function Calling. Die Hülle macht also den **Transport und die Audio-Kette** austauschbar, nicht automatisch die Logik dahinter.

**Was daraus folgt, ohne es zu entscheiden:** Austauschbar wird Ilse erst, wenn ihr Gehirn bei MIY liegt: Beobachterin, Persona, Supabase-Tools als eigener Dienst, den jede Sprach-Schicht nur aufruft. Genau das erlaubt GPT-Live mit „Client Delegation" (MIY führt Tools selbst aus), Deepgram mit „client_side: true" und Gemini per Function Calling. Dieses Muster passt zur bestehenden Ilse-0.1-Architektur (Beobachterin getrennt, Methode in Code und Daten). Die Hülle ist dann eine echte Hülle.

**Unterschied der beiden:** LiveKit ist größer und stärker auf Telefonie und Skalierung ausgelegt, mit kostenlosem Kontingent von 1.000 Agent-Minuten; Pipecat ist schlanker, Python, günstiges Hosting je aktive Minute, sehr breite Anbieterliste. Für einen ersten Benchmark reicht eines von beiden. Beide EU-Cloud-Regionen sind nicht belegt; Self-Hosting in Frankfurt wäre der sichere Weg.

## E. Welche zwei Alternativen gegen GPT-Live-1 benchmarken?

**Empfehlung für den Test, keine Produktentscheidung:**

1. **Deepgram Voice Agent, BYO-LLM, EU-Endpunkt.** Grund: Es ist der einzige Kandidat, bei dem Ilses Gehirn unverändert bleibt (Opus-Persona, Beobachterin) und nur die Stimme fremd ist. Deutsch ist für STT und TTS belegt, EU-Verarbeitung ist belegt. Der Test misst genau die eine Frage: Wie viel Natürlichkeit kostet die Kette gegenüber Full Duplex?
2. **Gemini Live 2.5 native audio.** Grund: die einzige Full-Duplex-Alternative mit belegtem Deutsch und potenziell 5-mal niedrigeren Kosten. Der Test misst zwei Fragen: Ilse-Qualität mit fremdem Sprachmodell und die echte Kostenkurve über 30 Minuten.

**Reserve, falls ein Test ausfällt:** Azure Voice Live (OpenAI-Sprachmodelle in EU-Rechenzentren, Preis noch zu belegen). ElevenLabs nur, wenn die Stimmqualität allein bewertet werden soll; als Standard-Weg zu teuer und EU nur im Enterprise-Tarif.

**Ausdrücklich nicht in den Benchmark:** Moshi (kein Deutsch), Qwen3-Omni und Ultravox (eigener GPU-Betrieb, kein echtes Full Duplex), Vapi und Retell (Plattform-Aufschlag ohne eigenen Qualitätsbeitrag).

---

# TEIL 4 – WEITERE KANDIDATEN, KURZ GEPRÜFT

| Kandidat | Deutsch | Full Duplex | EU | Preis | Urteil für Ilse |
|---|---|---|---|---|---|
| Azure Voice Live API | ✅ | ✅ (A) | ✅ Sweden Central u. a. | ❓ | ernsthaft, wegen EU + OpenAI-Modell; Preis nachholen |
| Amazon Nova 2 Sonic | ✅ seit 07/2025 | ✅ | ⛔ nur US/Tokio, Frankfurt nur Cross-Region | 3 $/12 $ je 1M Token | wegen EU nicht weiter |
| Hume EVI 3 / EV4-mini | ✅ | ✅ | ❓ | 0,04–0,07 $/min | Emotions-USP ist Anbieterangabe; nicht vorrangig |
| Mistral Voxtral (Realtime STT + TTS) | ✅ TTS de belegt | ⛔ Kette | 🟡 EU-Anbieter, Region nicht belegt | ❓ | strategisch interessant als EU-Baustein in einer Hülle |
| Speechmatics Flow | ✅ | ✅ (A) | ❓ UK | 0,054 $/min | zweite Reihe |
| Cartesia Line | ❓ | ✅ (A) | ❓ | ~0,05 $/min | zweite Reihe |
| xAI Grok Voice Agent | ❓ | ✅ | ❓ | ab 0,05 $/min | zu neu |
| Vapi / Retell | abhängig | Orchestrierung | abhängig | 0,07–0,31 $/min gesamt | Plattform-Aufschlag ohne Mehrwert für uns |
| Anthropic | – | – | – | – | keine Voice-API für Entwickler belegt |
| Kyutai Unmute / Pocket-TTS | ⛔ EN/FR, de angekündigt | ✅ | ✅ FR | Open Source | beobachten |
| Qwen3-Omni, Ultravox | ✅ | ⛔ | selbst hosten | GPU-Stunde | nicht jetzt |
| MiniCPM-o, GLM-4-Voice, Step-Audio | ❓ | teils | selbst hosten | GPU | nicht jetzt |

---

# TEIL 5 – RISIKEN, DIE PETRA KENNEN SOLLTE

1. **Modell-Wegfall ist bei OpenAI und Google Normalität.** OpenAI hat seit Juni 2025 vier Realtime-Generationen mit 3–6 Monaten Frist abgekündigt, die nächste Abschaltung ist der 20.01.2027. Google schaltet Live-Vorschauen nach 6–14 Monaten ab. Für Ilse heißt das: Modellname immer konfigurierbar, nie fest verdrahtet, und ein Quality-Lab-Lauf je Modellwechsel (das Lab existiert bereits).
2. **Zwei Gedächtnisse.** Im Konto-Weg merkt sich ChatGPT die Frau selbst (Memory). Supabase weiß davon nichts. Das kann Ilse widersprüchlich machen, solange die Frau nicht Memory im Projekt einschränkt.
3. **Datenschutz im Konto-Weg liegt bei der Frau, nicht bei MIY.** Audio 30 Tage bei OpenAI, Verarbeitung USA, Trainings-Opt-out Sache der Frau. Das nimmt MIY keine Verantwortung für die Karte ab, die MIY erzeugt (Punkt für Dr. Falk: welche Daten dürfen in die Startkarte?).
4. **Aktionspreise.** Deepgram nennt seine Preise „limited-time promotional". Gemini-Kosten sind ohne Testlauf nur eine Untergrenze. Beides vor jeder Kalkulation frisch abrufen (Lehre 26.08.).
5. **Free-Konten bekommen eine andere Ilse.** GPT-Live-1 mini ist ungetestet. Wer Weg 1 als Standard denkt, plant mit Plus-Konten, also mit ca. 23 € im Monat auf Seiten der Frau.

---

# TEIL 6 – QUELLEN (Stand 15.09.2026)

**OpenAI (selbst im Browser gelesen):**
- GPT-Live-1 in der API, Ankündigung 10.09.2026, „$0.05 per minute for the front-end voice layer": https://openai.com/index/introducing-gpt-live-1-in-the-api/
- Modellkarte gpt-live-1 (0,05 $/min, sekundengenau, Backend separat, Function Calling, Rate Limits je Tier): https://developers.openai.com/api/docs/models/gpt-live-1
- Delegation und Tools (Responses- vs. Client-Delegation): https://developers.openai.com/api/docs/guides/live-delegation
- Sessions verwalten (Instructions bis 16.384 Tokens, Verlauf 128 Nachrichten / 8.192 Tokens, Stimmen, `store`): https://developers.openai.com/api/docs/guides/live-conversations
- Partner-Integrationen (LiveKit, Twilio, Telnyx, Daily/Pipecat; „A Realtime integration is not automatically compatible with GPT-Live"): https://developers.openai.com/api/docs/guides/live-partner-integrations
- Datenkontrollen (GPT-Live: Datenresidenz US + Europa, ZDR-fähig, 10 % Aufschlag, MAM/ZDR-Pflicht für EU): https://developers.openai.com/api/docs/guides/your-data
- Preise API (Realtime-Token-Preise, GPT-Live-Sessions): https://developers.openai.com/api/docs/pricing
- Abkündigungen (Realtime-Zyklen 06/2025, 09/2025, 07/2026): https://developers.openai.com/api/docs/deprecations
- ChatGPT Voice, Help Center, aktualisiert 12.09.2026 (Live/Advanced/Standard, Tarif-Limits, keine Apps/Plugins, keine Bibliotheks-Dateien, Text im selben Chat, Audio 30 Tage): https://help.openai.com/en/articles/20001274
- Projects in ChatGPT, Help Center, aktualisiert 17.08.2026 (Projektanweisungen, Dateien, Memory, Voice mode, geteilte Projekte): https://help.openai.com/en/articles/10169521-using-projects-in-chatgpt
- ChatGPT Business Preise: https://openai.com/business/pricing/
- „Sign in with ChatGPT" (Vorschau, Codex): Community-Threads, keine Live-Aussage gefunden

**Google:**
- Preise Gemini API (2.5 Flash native audio: 3 $/12 $ Audio je 1M Tokens): https://ai.google.dev/gemini-api/docs/pricing
- Live API Fähigkeiten (97 Sprachen inkl. de, VAD, Affective Dialog nur 2.5, Function Calling): https://ai.google.dev/gemini-api/docs/live-api/capabilities
- Session-Management (15 min audio-only ohne Kompression, Resumption 2 h): https://ai.google.dev/gemini-api/docs/live-api/session-management
- Best Practices, Kontext-Neuberechnung je Zug: https://ai.google.dev/gemini-api/docs/live-api/best-practices
- Abkündigungen (gemini-live-2.5-flash-preview 17.06.→09.12.2025; 2.0-flash-live 09.04.2025→01.06.2026): https://ai.google.dev/gemini-api/docs/deprecations
- Nutzungsbedingungen (bezahlt = kein Training): https://ai.google.dev/gemini-api/terms

**Deepgram:**
- Preise (Voice Agent 0,075 $/min Standard, 0,059 $/min BYO-LLM, Aktionspreise): https://deepgram.com/pricing
- LLM-Modelle im Voice Agent (OpenAI, Anthropic, Google, NVIDIA, Custom): https://developers.deepgram.com/docs/voice-agent-llm-models
- Function Calling client-/serverseitig: https://developers.deepgram.com/docs/voice-agents-function-calling
- EU-Endpunkt inkl. Voice Agent: https://deepgram.com/learn/deepgram-eu-endpoint-now-generally-available
- Aura-2 Deutsch, Nova-3 Deutsch, Flux: deepgram.com/learn (Artikel 2026)

**ElevenLabs:**
- Agents-Preise (Tarife, 0,08 $/min Überschuss, LLM separat): https://elevenlabs.io/pricing/agents
- LLM-Auswahl: https://elevenlabs.io/docs/eleven-agents/customization/llm
- Datenresidenz EU nur Enterprise: https://elevenlabs.io/docs/overview/administration/data-residency
- Modelle und Sprachen: https://elevenlabs.io/docs/overview/models

**LiveKit / Pipecat:**
- LiveKit Agents (Apache 2.0): https://github.com/livekit/agents · Turn-Detector (Deutsch): https://docs.livekit.io/agents/build/turns/turn-detector/ · Preise: https://livekit.com/pricing
- Pipecat (BSD-2): https://github.com/pipecat-ai/pipecat · Smart Turn (23 Sprachen inkl. de): https://github.com/pipecat-ai/smart-turn · Pipecat Cloud Preise: https://daily.co/pricing/pipecat-cloud

**Open Source und weitere:**
- Moshi (nur Englisch, FAQ): https://github.com/kyutai-labs/moshi · https://github.com/kyutai-labs/moshi/blob/main/FAQ.md
- Kyutai Unmute (EN/FR): https://kyutai.org/unmute/ · Pocket-TTS Deutsch offen: https://github.com/kyutai-labs/pocket-tts/issues/118
- Sesame CSM (EN): https://github.com/SesameAILabs/csm · Ultravox (de in Trainingsdaten): https://huggingface.co/fixie-ai/ultravox-v0_4_1-mistral-nemo · Qwen3-Omni: https://github.com/QwenLM/Qwen3-Omni
- Azure Voice Live: https://learn.microsoft.com/en-us/azure/ai-services/speech-service/voice-live · Amazon Nova 2 Sonic: https://aws.amazon.com/blogs/aws/introducing-amazon-nova-2-sonic-next-generation-speech-to-speech-model-for-conversational-ai/ · Hume EVI 3: https://www.hume.ai/blog/announcing-evi-3-api · Mistral Voxtral TTS: https://mistral.ai/news/voxtral-tts/ · Speechmatics: https://www.speechmatics.com/pricing · xAI: https://x.ai/news/grok-voice-agent-api

**Methodik-Hinweis:** Vier Recherche-Läufe mit Websuche, die OpenAI-Kernseiten zusätzlich direkt im Browser gelesen (help.openai.com blockiert automatische Abrufe). Wo eine Zahl nur aus Drittquellen stammt, steht es dabei. Minutenumrechnungen bei Token-Preisen sind eigene Rechnungen mit genannten Annahmen.
