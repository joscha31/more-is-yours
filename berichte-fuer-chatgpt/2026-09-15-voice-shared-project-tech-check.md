# MORE IS YOURS – Tech-Check: Voice-POC im geteilten ChatGPT-Projekt (Shared Project) 0.1

**Stand:** 15.09.2026 · **Von:** Claude Code · **An:** Petra, ChatGPT (Product Architecture & Collaboration Lab)
**Status:** TECH FINDING · NICHT BUILD READY · **keine Architekturentscheidung getroffen, nichts gebaut**
**Grundlage:** `forschung/Voice-Zugangsschutz-Shared-Project-0.1.md` und `forschung/Voice-Architektur-Optionen-0.1.md` (Repo `more-is-yours`), `berichte-fuer-chatgpt/2026-09-15-liveone-lowcost-architektur-tech-check.md`, die Hybrid-Prüfung vom 14.09. (`2026-09-14-ilse-hybrid-chatgpt-supabase-pruefung.md`, Variante 3), der Code-Stand von `outputs/moreisyours-ilse/` (Migrationen 0001–0010, `api/konto.js`, `api/zug.js`, `lib/beobachterin.js`, `lib/persona.js`).
**Auftrag:** Nur prüfen, was in unserem System vorbereitet werden kann und was im ChatGPT-UI manuell bleibt. Keine Voice-API. Keine undokumentierte ChatGPT-Automation. Offenes als GAP.

---

## 0. Befund vorweg: die Brücke „besteht" nur auf Papier

Der Auftrag sagt: „Die bestehende Start-/Abschlusskarten-Brücke bleibt bestehen." Im Code gibt es sie nicht.

| Was | Stand im Ilse-Haus (15.09.) |
|---|---|
| Startkarte erzeugen (`?was=stand` oder ähnlich) | **nicht gebaut** |
| Seite mit „Startkarte kopieren" / „Abschlusskarte einfügen" | **nicht gebaut** (kein `stand.html`, kein `sprechen.html`) |
| Rückweg-Endpunkt (Abschlusskarte → Beobachterin → `zug_speichern`) | **nicht gebaut** |
| Beobachterin, Kiste mit vier Herkünften, `zug_speichern` (atomar), `rueckkehr_notiz`, `aktiv_bis`, `verlauf.modelle` | **gebaut und live** — das ist das Fundament, auf dem die Brücke stehen würde |

Die Brücke ist beschrieben in Voice-Architektur-Optionen 0.1 § 4 (POC „Voice Bridge ohne Voice-API") und in der Hybrid-Prüfung vom 14.09. als Variante 3 („Kopier-Brücke", Empfehlung „noch nicht bauen", Weggabelung offen). Das ändert nichts am Auftrag, nur an der Wortwahl: **Es bleibt nichts bestehen, es wäre der erste Bauschritt.** Er ist klein (siehe § 1). Ob er gebaut wird, entscheidet Petra (DECISION GAP TG-01).

Zweiter Befund: Das Vercel-Projekt `moreisyours-ilse` hat drei Funktionen (`konto`, `zug`, `diktat`). Alles in § 1 passt als weitere `was=`-Abfrage in `api/konto.js`. Keine neue Funktion nötig.

---

## 1. Was lässt sich heute technisch vorbereiten?

Alles hier läuft **in unserem Haus**, berührt ChatGPT nicht und braucht keine Voice-API. Reihenfolge = Vorschlag, keine Entscheidung.

### 1a. Startkarte aus Supabase (`GET /api/konto?was=startkarte`)

Die Daten liegen vollständig vor. Der Endpunkt liest mit dem Token der Frau (RLS greift, wie heute bei `?was=kiste`):

| Inhalt der Startkarte | Quelle heute | Bemerkung |
|---|---|---|
| Vorname | `nutzerin.vorname` | |
| Datum und Uhrzeit der Karte | Server | Pflicht, damit eine alte Karte erkennbar ist |
| Pseudonyme Sitzungs-ID | neu: HMAC aus `nutzerin.id` + Datum + Serverschlüssel | **keine neue Tabelle, keine Migration**; Server kann die ID beim Rücktrag prüfen, ohne dass sie etwas über die Frau verrät |
| Fassung (Startkarten-Version, Thin-Shell-Version) | Konstanten im Code | wie `PERSONA_VERSION` heute |
| Schritt und Name der Zielkarte | `prozess.schritt`, `lib/zielkarten.json` (nur der Name) | **nie die Zielkarte selbst** |
| Rückkehr-Notiz („wo wir aufgehört haben") | `prozess.rueckkehr_notiz` | Spalte existiert, wird heute noch nicht geschrieben (Bauschritt 5) → für den POC schreibt sie der Rückweg (1c) |
| 5–10 Kontextpunkte | `kiste` mit `status = bestaetigt` zuerst, dann `direkt_gesagt` mit `gewicht = hoch`, als Zitate | Deckel im Code, älteste zuerst raus |
| Offene Klärungen | `kiste` mit `herkunft = klaerungsbedarf` | |
| Aktuelles Gesprächsziel | — | **CONTENT GAP TG-05:** kommt nicht aus den Daten, sondern aus dem Lab (was soll das Live-Gespräch in Schritt 1 leisten?) |
| Herkunftsregel + „nichts selbst als bestätigt speichern" | fester Text | **CONTENT GAP TG-05:** Wortlaut (Hedda + ChatGPT) |

**Nur für aktive Frauen:** Der Endpunkt prüft `nutzerin.aktiv_bis >= heute` (drei Zeilen). Heute schreibt niemand in diese Spalte (Digistore-IPN nicht gebaut). Für den POC setzt Petra den Wert über den Automat-Schlüssel — eine `POST {was:'aktiv_bis', frau, datum}`-Zeile analog zu `passung_tor`. Das ist der **Kündigungsschalter auf unserer Seite** und existiert unabhängig vom ChatGPT-Projekt.

**Draußen bleibt (Code-Regel, testbar):** Zielkarte, Zielabgleich, Sättigung, `verweist_auf`, Kisten-IDs, Verbrauch, Matcher-Befunde (`bereich = passung`), Feld 23, Human-Design-Werte, Hypothesen ohne Kennzeichnung, E-Mail. Siehe § 3.

### 1b. Die Seite („Mit Ilse sprechen") mit zwei Knöpfen

Eine HTML-Seite im Ilse-Haus, Farbwelt A+, nach dem UI-Gesetz vom 15.09. (lebendig, kein Formular): „Startkarte kopieren" (Zwischenablage) und ein Feld „Abschlusskarte einfügen" mit Vorschau-Schritt (1d). Die Seite erklärt in Petras Sprache, was danach in ChatGPT passiert (jeder Knopf sagt, was danach passiert — Feedback-Regel 08.09.). **Wortlaut: Hedda.** Das ist der einzige Teil, den Petra auf dem Handy sieht.

### 1c. Der Rückweg (`POST /api/konto?was=abschlusskarte`)

Eingabe: die Abschlusskarte als Text (plus Sitzungs-ID, die drin stehen muss). Der Server:

1. prüft Token → Frau, prüft `aktiv_bis`, prüft die Sitzungs-ID gegen den HMAC (falsche/fremde Karte → Abweisung),
2. lässt **die vorhandene Beobachterin** darüberlesen (`beobachte({karte, stand, kiste, verlauf, nachricht})`, die Karte als `nachricht`, die Zielkarte des aktuellen Schritts, Herkunft wie heute),
3. wendet die Code-Prüfungen aus der Hybrid-Prüfung § 11 an: `direkt_gesagt` nur mit Zitat, das **wörtlich in der Karte vorkommt** (Zeichenkettenprüfung), sonst Abstufung zu `hypothese`; **nichts** wird `bestaetigt`; kein Übergang, keine Sättigung; Zahlen bleiben Zitate ohne `art`,
4. speichert über `zug_speichern` (Migration 0004, eine Transaktion) mit `verlauf.modelle.ilse = {anbieter:'openai', modell:'chatgpt-live (Konto der Frau, Shared Project)'}`, `persona_version = <Thin-Shell-Fassung>`, `beobachterin_version` wie heute,
5. schreibt `prozess.rueckkehr_notiz` (3–5 Sätze aus dem Urteil der Beobachterin) — für die nächste Startkarte.

**Technisch möglich, aber:** Die Beobachterin ist für **eine** Nachricht der Frau je Zug gebaut (Zettel-Vertrag „nur die eine Frage"). Eine Abschlusskarte trägt 5–15 Punkte. Ob ein Urteil über die ganze Karte fachlich trägt oder die Karte punktweise durchlaufen muss, ist **METHOD GAP TG-03** — der Code kann beides, entscheiden darf er es nicht.

### 1d. Vorschau vor dem Schreiben (die Frau bestätigt)

Der Auftrag verlangt: erst zeigen (neu gesagt · Ableitung · Hypothese · Widerspruch · Änderungsvorschlag), dann schreiben. Das geht in zwei Phasen ohne neue Tabelle: Phase 1 ruft die Beobachterin **ohne** `zug_speichern` und gibt die Zettel mit Herkunft zurück; Phase 2 speichert die von der Frau angetippten. Bestätigen läuft danach über den vorhandenen `POST zettel aktion:'bestaetigen'`. Kosten: ein Beobachterin-Aufruf je Vorschau (gemessen 5,5–9 ¢ je Urteil, eine lange Karte vermutlich 10–20 ¢ — **Rechnung, nicht Messung**). „Widerspruch" zu bestehenden Zetteln kann der Code über die Beobachterin liefern, sofern das Schema eine Spannungs-Art kennt — HD-1 vom 15.09. (`spannung_art`) ist die Vorlage. Ob das für Schritt 1 gilt: METHOD GAP TG-03.

### 1e. Thin-Shell-Rahmen mit Riegel-Test

Die Thin Shell kann **nicht** automatisch aus `lib/persona.js` abgeleitet werden. Vorbereitbar ist der Rahmen: `lib/thin-shell.js` mit `THIN_SHELL_VERSION`, leerem Text und einem Test wie `test/persona.test.js`, der bei verbotenen Wörtern und Inhalten fehlschlägt (Zielkarten-Begriffe, Genome-Feldnamen, Matcher-Regeln, K.-o.-Regeln, Golden-Case-Kennungen, Beobachterin-Anweisung). So kann kein späterer Bauschritt die Methode in die Anweisung schieben. **Inhalt: DECISION GAP TG-02 + CONTENT GAP TG-05.**

### 1f. Quality Lab: Voice-Fälle aufnehmen

Der Prüfstand `outputs/ilse-quality-lab/` speichert Fälle als JSON mit Situation, Antwort, Bewertung. Ein Ordner `cases/voice/` für Live-Transkripte (anonymisiert) plus derselbe K.-o.-Katalog ist vorbereitbar. Das erfüllt das POC-Kriterium „mindestens ein echter Quality-Case parallel". Bewertet ein Mensch, wie heute.

### 1g. POC-Prüfliste als Seite für Petra

Die zehn Prüfpunkte aus Zugangsschutz 0.1 § 7 als Klick-Zettel im Backoffice (Karte mit Ja/Nein je Punkt, Ergebnis als Text) — damit die Antworten dort landen, wo sie ausgewertet werden, nicht im Chat.

**Was das alles NICHT ist:** keine Verbindung zu ChatGPT, kein OAuth, kein MCP, keine Voice-Minute bei uns, keine Änderung an Entscheidung ④ (die Beobachterin liest nach, nicht mit — das ist der Preis dieser Architektur, kein Nebeneffekt).

---

## 2. Was muss im ChatGPT-UI manuell gemacht werden?

Alles, was das Shared Project betrifft. OpenAI dokumentiert Erstellen, Teilen und Verwalten von ChatGPT-Projekten nur über die Oberfläche. Die einzigen dokumentierten Admin-APIs betreffen **Workspace-Einladungen in Enterprise/Edu**, nicht Projekte. Die „Projects API" der API-Plattform ist ein anderes Produkt. **Es wird nichts davon nachgebaut oder simuliert.**

| # | Schritt | Wer | Quelle / Sicherheit |
|---|---|---|---|
| M1 | Ein ChatGPT-Konto für More is Yours festlegen (Petras Plus-Konto? eigenes Konto? Business-Workspace?) | Petra | **DECISION GAP TG-04.** Beim Business-Tarif sehen Admins Chats der Mitglieder im Workspace — ⚖️ |
| M2 | Projekt „Ilse – [Vorname]" anlegen | Petra | dokumentiert |
| M3 | Projektanweisung = Thin Shell einfügen; **keine Dateien** hochladen | Petra | dokumentiert; Chat-Mitglieder sehen Anweisungen und Dateien (OpenAI: chat access lets members „see and interact with the project's chats, files, and instructions") |
| M4 | Freigabe: „Only those invited", Rolle **Chat** (nicht Edit), Einladung per E-Mail an die Testfrau | Petra | dokumentiert (zwei Rollen: chat / edit) |
| M5 | Testfrau nimmt mit ihrem eigenen ChatGPT-Konto an | Testfrau | Sharing seit 22.10.2025 auch für Free/Go/Plus/Pro laut Suche — **(unsicher, Hilfeseite gesperrt)** |
| M6 | Testfrau öffnet unsere Seite, kopiert die Startkarte, fügt sie im Projekt als erste Nachricht ein | Testfrau | unser Teil (1a/1b) |
| M7 | Testfrau startet Live **im Projekt** | Testfrau | Voice in Projects nutzt Anweisungen, Quellen und jüngste Projekt-Chats (OpenAI Release Notes, 07.08.) — ob Live die eingefügte Startkarte im selben Chat vollständig sieht, prüft der POC (Frage aus 14.09., unverändert offen) |
| M8 | Am Ende: „Ilse, mach mir bitte die Abschlusskarte" → Live gibt Block aus → Testfrau kopiert ihn | Testfrau | Format der Karte steht in der Thin Shell (§ 4) |
| M9 | Testfrau fügt die Karte auf unserer Seite ein, sieht die Vorschau, bestätigt | Testfrau | unser Teil (1c/1d) |
| M10 | Petra prüft im Projekt den Chat (sie sieht alle Chats des Projekts) | Petra | ⚖️ Petra liest das Gespräch der Frau — Einwilligung |
| M11 | Petra entfernt die Testfrau aus dem Projekt | Petra | Owner kann Mitglieder entfernen (Zugangsschutz 0.1 § 2) — **Folgen für die Chats der Frau: nicht dokumentiert gefunden, prüft der POC** |
| M12 | Petra setzt `aktiv_bis` auf gestern (unser Kündigungsschalter, 1a) und prüft: keine neue Startkarte, kein Rücktrag mehr | Petra | unser Teil |
| M13 | Projekt danach löschen oder behalten? | Petra | DECISION (Löschfrist, Falk) |

**Nicht dokumentiert gefunden (bleibt POC-Frage, kein Bau):** ob ein Chat-Mitglied Chats aus dem geteilten Projekt in den eigenen Bereich verschieben oder kopieren kann · was nach dem Entfernen in ihrem Konto sichtbar bleibt · ob GPT-Live-1 (bezahlt) und GPT-Live-1 mini (Free) im Projekt gleich mit der Anweisung umgehen. Die Hilfeseiten von OpenAI waren wie am 14.09. für den Abruf gesperrt (403); Aussagen dazu stammen aus Suchtreffern und Sekundärquellen.

---

## 3. Welche Daten dürfen keinesfalls in die sichtbare Thin Shell (und nicht in die Startkarte)?

Alles im Projekt ist für die Frau lesbar und kopierbar. Deshalb gilt für **Projektanweisung UND Startkarte** dieselbe Liste. Der Riegel-Test aus 1e prüft sie maschinell, soweit Wörter erkennbar sind.

| Nie sichtbar | Warum | Wo es heute liegt |
|---|---|---|
| Der vollständige Persona-Kern B7 (2.991 Tokens) | Freigegebener Methodenkern, Geschäftsgeheimnis; die Thin Shell ist eine **eigene, kürzere Fassung** | `lib/persona.js` |
| Zielkarten (Pflicht-Erkenntnisse, Stoppregeln, Sättigung, Zug-Logik) | die Prozessregeln = die Methode | `lib/zielkarten.json` |
| Beobachterin-Anweisung und Schema | das Urteilssystem | `lib/beobachterin.js` |
| Option Genome (Schema, Felder, Werte, Mechaniken, Feld 23) | Produktkern, Feld 23 Falk-Sperre | `lib/option-genome.schema.json`, `optionen.json`, `mechaniken.json` |
| Matcher-Regeln R1–R5, Befunde (`bereich = passung`) | Matching darf nicht im Gespräch sein (Zielkarte 1/2), Regeln sind der Wert | `lib/matcher.js`, Kiste |
| Realitätscheck-Logik, Dienstag-Bausteine | Reality Learning | `lib/realitaetscheck.js`, `dienstag.js` |
| K.-o.-Katalog, Golden Cases N01–N100, P01–P04, Guard-Ergebnisse | Prüfstand | `outputs/ilse-quality-lab/` |
| HD-Lens-Inhalte, Wächter U-01–U-14, HD-Werte der Frau | Content Lab + ⚖️ Art. 9-Nähe | `lib/hd-lens.json`, `hd-waechter.json`, Kiste |
| Kisten-IDs, `verweist_auf`, Zielabgleich, Sättigungs-Vorschlag, Verbrauch, Fassungen der Beobachterin | interne Struktur, erlaubt Rückschlüsse auf den Motor | Supabase |
| Hypothesen ohne die Kennzeichnung „Vermutung, von dir nicht bestätigt" | § 12: keine versteckten Deutungen | Kiste |
| E-Mail, Auth-ID, echte Sitzungs-Schlüssel, Automat-Schlüssel, Supabase-Adresse | Identität + Angriffsfläche | `nutzerin`, Vercel-Env |
| Krisen-Wortliste (`lib/krise.js`) | kann nicht umgangen werden, wenn sie nicht sichtbar ist; in Live greift sie ohnehin nicht (§ 5) | `lib/krise.js` |
| Daten anderer Frauen | ein Projekt je Frau, nie ein Sammelprojekt | — |

**Was in die Thin Shell darf (Rahmen, Inhalt = GAP TG-02/TG-05):** Ton und Haltung in Kurzform · die Herkunftsregel als drei Sätze · „nichts speichern, nichts als bestätigt behandeln" · das Format der Abschlusskarte · der Satz, dass der Kompass und das Fach bei More is Yours liegen. Petra und ChatGPT entscheiden, **wie viel** Persona sichtbar sein darf (Zugangsschutz 0.1 § 9 nennt das ausdrücklich als offen).

---

## 4. Wie sollten Start- und Abschlusskarte strukturiert sein?

Vorschlag für die **Form** (Inhalte und Wortlaut: Lab + Hedda). Beide Karten haben eine feste Kopfzeile, damit Server und Mensch sie erkennen.

### Startkarte (erzeugt More is Yours, Text, unter 1.500 Wörter)

```text
MORE IS YOURS · STARTKARTE · Fassung 0.1 · Sitzung MIY-…(pseudonym) · 15.09.2026 14:10
Für: [Vorname]
Wo wir stehen: Schritt 1 – [Name der Zielkarte, nur der Name]
Zuletzt: [Rückkehr-Notiz, 3–5 Sätze; beim ersten Mal: „Wir fangen heute an."]

Was du bereits gesagt hast (deine Worte):
– „…" (bestätigt)
– „…"
Offen geblieben:
– …
Heute geht es um: [Gesprächsziel – CONTENT GAP TG-05]

Regel für dieses Gespräch:
[3 Sätze Herkunftsregel + „Du speicherst nichts, du bestätigst nichts. Am Ende erstellst du die Abschlusskarte im vorgegebenen Format." – CONTENT GAP TG-05]
```

Nicht in der Startkarte: siehe § 3. Die Sitzungs-ID ist ein HMAC und muss in der Abschlusskarte wieder auftauchen.

### Abschlusskarte (erzeugt GPT-Live, Text, festes Format aus der Thin Shell)

```text
MORE IS YOURS · ABSCHLUSSKARTE · Sitzung MIY-…
Direkt gesagt (wörtlich, in Anführungszeichen):
– „…"
Mögliche Vermutungen (nicht bestätigt):
– …
Offene Fragen:
– …
Entscheidungen, die sie selbst ausgesprochen hat (wörtlich):
– „…"
Nächster kleiner Schritt (ihr Vorschlag, wörtlich):
– „…"
```

Regeln, die der Server erzwingt, nicht die Karte: Zitate müssen im Text der Karte stehen (kein Beleg → Vermutung) · keine Bewertungen, keine Zahlen als Fakt · nichts wird bestätigt · eine fremde oder alte Sitzungs-ID wird abgewiesen · Größe gedeckelt. Ob „Entscheidungen" in Schritt 1 überhaupt vorkommen dürfen (Master: Entscheidungen erst Schritt 6+): **METHOD GAP TG-03.**

Beide Karten sollten **zusätzlich als JSON-Vertrag** definiert werden (Schema-Datei, wie `option-genome.schema.json`) — nicht für ChatGPT, sondern damit dieselbe Karte später von einer Orchestrierungsschicht erzeugt und gelesen werden kann (§ 6).

---

## 5. Welche Risiken bleiben bei Kündigung und Kopierbarkeit?

Hart und ehrlich, über die Sache:

1. **Die Thin Shell ist kopierbar, Punkt.** Jedes Chat-Mitglied kann die Projektanweisung lesen und abschreiben. Der Schutz ist nicht Technik, sondern dass die Anweisung ohne Startkarte, Fach, Genome, Matching und Realitätscheck **wenig wert** ist. Das trägt nur, wenn die Thin Shell wirklich dünn ist (TG-02). Eine Anweisung mit dem halben Persona-Kern ist kein Thin Shell.
2. **Der Kündigungsschalter, der wirklich greift, liegt bei uns:** `aktiv_bis` sperrt Startkarte und Rücktrag. Das Entfernen aus dem Projekt ist der zweite Riegel — was danach in ihrem Konto bleibt (alte Chats, ein verschobener Chat), ist nicht dokumentiert und muss der POC zeigen. **Annahme „nach dem Entfernen ist alles weg" ist unbelegt.**
3. **Das Gespräch liegt bei OpenAI im Verbraucherkonto der Frau UND im Projekt von More is Yours.** Zwei Kopien, keine AVV, Trainingsnutzung standardmäßig an (abschaltbar durch die Frau). Petra sieht als Owner das Gespräch. ⚖️ Falk: Einwilligung, Rolle von More is Yours, Löschfristen — die Liste aus der Hybrid-Prüfung § 12 gilt unverändert, plus die neue Frage „Petra als Projekt-Owner liest mit".
4. **Kein Kopierschutz für die Startkarte:** Sie enthält die Worte der Frau selbst — das ist gewollt und unkritisch, solange § 3 gilt.
5. **Ein Projekt je Frau skaliert nicht von Hand.** Bei 20 Frauen sind das 20 Projekte, 20 Einladungen, 20 Entfernungen, alle manuell, alle bei Petra. Für den POC richtig, für den Verkauf offen (Zugangsschutz § 6). Business/Enterprise-Admin-APIs verwalten Workspace-Mitglieder, nicht Projekte.
6. **Anbieterrisiko:** Custom GPTs wurden binnen eines Jahres eingestellt. Shared Projects sind ein Verbraucher-Feature ohne Zusage. Alles, was in § 1 gebaut würde, ist deshalb bewusst ChatGPT-neutral (§ 6).
7. **Methode:** Die Beobachterin liest nach statt mit. Live spricht aus einer Anweisung, die wir nicht wie `persona.js` testen können. Das berührt Entscheidung ④ — nicht als Bruch, weil Live nur ein Gesprächsraum neben `ilse.html` ist, aber es muss so benannt werden (14.09. § 16, Punkt 2: „zweiter Weg" oder „Ersatz" — DECISION GAP TG-01).

---

## 6. Welche technische Vorbereitung wäre später für Pipecat/LiveKit sinnvoll — OHNE sie jetzt zu bauen?

Nichts davon wird gebaut. Es sind Regeln für den kleinen Bauschritt aus § 1, damit er später nicht weggeworfen werden muss:

| Jetzt so bauen | Warum es später hilft |
|---|---|
| Start- und Abschlusskarte als **JSON-Schema + Text-Renderer** (nicht nur Text) | Eine Orchestrierungsschicht (Pipecat/LiveKit-Agent) würde dieselbe Startkarte als Kontext laden und dieselbe Abschlusskarte strukturiert zurückgeben — die Brücke wird zur Schnittstelle |
| `verlauf.modelle.ilse.anbieter` bleibt frei belegbar (heute `anthropic`, im POC `openai`) | Provider-Wechsel = ein anderer Wert, keine Migration |
| Sitzungs-ID als HMAC, nicht als OpenAI-Chat-Link | funktioniert mit jedem Gesprächsraum |
| Rückweg-Endpunkt nimmt **Transkript oder Karte** (zwei Eingabeformen, dieselbe Beobachterin) | ein Voice-Agent liefert ein Transkript je Äußerung; `verlauf` (rolle frau/ilse) passt dafür bereits |
| Thin Shell als versionierte Datei im Repo (`lib/thin-shell.js`) | dieselbe Kurzfassung wäre der System-Prompt eines Voice-LLM hinter Pipecat |
| `lib/modell/` bekommt **keine** dritte Tür „höre" — nur eine Notiz im Kopf der Datei, wie sie hieße | die Stelle ist markiert, nichts gebaut |
| Golden Voice Cases im Quality Lab provider-neutral (Situation, Transkript, Bewertung) | dieselben Fälle prüfen später GPT-Live, Gemini Live, Deepgram, einen Pipecat-Stack (Spur 2 aus Voice-Optionen 0.1) |
| Kein OpenAI-spezifisches Feld in Supabase (kein `chatgpt_project_id` als Spalte) | Projekt-Verwaltung bleibt in Petras Prüfliste (1g), nicht im Datenmodell |

Was ausdrücklich **nicht** vorbereitet wird: WebRTC, Realtime-Schlüssel, STT/TTS-Anbindung, ein Agent-Prozess. Das wäre die Voice-API durch die Hintertür.

---

## 7. TECH GAPs (Format nach Protokoll § 7; Zuordnung zu den vier Arten in Klammern)

```text
TECH GAP TG-01 (DECISION)
Datum: 15.09.2026 · Gefunden von: Claude Code · Bereich: Ilse Voice / Architektur
FEHLENDE ENTSCHEIDUNG: Wird die Kopier-Brücke (§ 1a–1d) als Bauschritt gebaut — und ist Live ein
  zweiter Weg neben ilse.html oder ein Ersatz? (offen seit 14.09., § 16 Punkt 2)
BEISPIEL: „Die bestehende Brücke bleibt bestehen" setzt voraus, dass sie existiert. Sie existiert nicht.
WARUM BLOCKIERT DAS: Ohne die Entscheidung gibt es keinen POC, weil Startkarte und Rückweg fehlen.
NICHT IMPROVISIEREN: Nicht „einfach mal bauen, ist ja klein".
ZUSTÄNDIG: Product Architecture Lab · ENTSCHEIDUNG: Petra · PRIORITÄT: BLOCKER
```

```text
TECH GAP TG-02 (DECISION)
Bereich: Thin Shell
FEHLENDE ENTSCHEIDUNG: Wie viel von Persona B7 darf sichtbar in die Projektanweisung? (Zugangsschutz § 9)
BEISPIEL: Reicht „Ton + Haltung + Herkunftsregel + Kartenformat" (~300 Wörter), oder braucht Live mehr,
  um wie Ilse zu klingen? Das ist die Kopierbarkeits-Frage in Zahlen.
WARUM BLOCKIERT DAS: Der Riegel-Test (1e) kann nur prüfen, was verboten ist, nicht was erlaubt ist.
NICHT IMPROVISIEREN: Claude Code kürzt den Persona-Kern nicht selbst.
ZUSTÄNDIG: Ilse & Quality Lab · ENTSCHEIDUNG: Petra + ChatGPT · PRIORITÄT: BLOCKER
```

```text
TECH GAP TG-03 (METHOD)
Bereich: Rückweg / Beobachterin
FEHLENDE METHODE: Zählt eine Abschlusskarte als EIN Zug (ein Urteil über die ganze Karte) oder
  wird sie punktweise beurteilt? Dürfen „Entscheidungen" und „nächster Schritt" in Schritt 1
  überhaupt zurückkommen (Master: Entscheidungen erst ab Schritt 6)? Liefert die Beobachterin
  „Widerspruch" nach dem Muster spannung_art?
WARUM BLOCKIERT DAS: Der Endpunkt 1c/1d kann beides — die Wahl verändert Zettel, Kosten und Zielabgleich.
NICHT IMPROVISIEREN: Keine eigene Zwischenlogik „Karte in Sätze zerlegen und je Satz einen Zug fingieren".
ZUSTÄNDIG: Ilse & Quality Lab · ENTSCHEIDUNG: ChatGPT (fachlich), Petra (Freigabe) · PRIORITÄT: HOCH
```

```text
TECH GAP TG-04 (DECISION + ⚖️)
Bereich: ChatGPT-Konto von More is Yours
FEHLENDE ENTSCHEIDUNG: Welches Konto ist Owner der Projekte — Petras Plus-Konto, ein eigenes
  Verbraucherkonto, ein Business-Workspace? Welcher Mindesttarif für die Frau (Live-1 vs. Live-1 mini)?
WARUM BLOCKIERT DAS: M1–M4 sind ohne Konto nicht ausführbar; Business ändert Sichtbarkeit und AVV-Lage.
NICHT IMPROVISIEREN: Kein Konto anlegen, keine Tarifannahme.
ZUSTÄNDIG: Petra, Dr. Falk (Datenschutz-Sicht) · PRIORITÄT: BLOCKER für den POC
```

```text
TECH GAP TG-05 (CONTENT)
Bereich: Wortlaut
FEHLENDER INHALT: Gesprächsziel für das Live-Gespräch in Schritt 1 · die drei Sätze Herkunftsregel ·
  der Text der Thin Shell · die Texte der Seite „Mit Ilse sprechen" · das Kartenformat in Live-Sprache.
NICHT IMPROVISIEREN: Claude Code schreibt keinen dieser Sätze.
ZUSTÄNDIG: Ilse & Quality Lab (Inhalt), Hedda (Sprache, Drei-Brillen-Tor) · PRIORITÄT: HOCH
```

```text
TECH GAP TG-06 (DATA / ⚖️)
Bereich: Kündigung, Einwilligung
FEHLENDE DATEN: Wer schreibt aktiv_bis (Digistore-IPN nicht gebaut) · Löschfrist N Tage ·
  Einwilligungstext deckt „Gespräch in einem ChatGPT-Projekt, das Petra einsehen kann" ·
  einwilligung_am bleibt beim Handy-Login leer (Fund 14.09., ungelöst).
WARUM BLOCKIERT DAS: Der POC-Schritt „Zugriff entziehen" ist ohne aktiv_bis-Wert nur ein UI-Klick.
ZUSTÄNDIG: Petra, Dr. Falk · PRIORITÄT: HOCH (vor der Testfrau)
```

```text
TECH GAP TG-07 (DATA, POC-Fragen — nicht belegbar ohne Test)
Bereich: ChatGPT Shared Project, Verhalten
UNBELEGT: Sieht Live die im selben Projekt-Chat eingefügte Startkarte vollständig? · Kann ein
  Chat-Mitglied Chats aus dem Projekt verschieben/kopieren? · Was bleibt nach dem Entfernen
  in ihrem Konto? · Verhalten Live-1 mini (Free) gegenüber Live-1 · Kann ein Free-Konto beitreten?
NICHT IMPROVISIEREN: Keine dieser Fragen wird als beantwortet behandelt; sie SIND der POC.
ZUSTÄNDIG: der manuelle End-to-End-Test (§ 8) · PRIORITÄT: gehört zum Test, blockiert nicht den Bau von § 1
```

---

## 8. Der manuelle End-to-End-Test — in der Reihenfolge, die der Auftrag nennt

More is Yours → Startkarte → Shared Project → GPT-Live → Abschlusskarte → Text-Ilse → Supabase → Nutzerin entfernen.

| Schritt | Unser System (§ 1) | ChatGPT-UI (§ 2) | Was gemessen wird |
|---|---|---|---|
| More is Yours | Login, `aktiv_bis` gesetzt | — | Identität eindeutig (Token) |
| Startkarte | `?was=startkarte`, Knopf | — | Größe, Inhalt gegen § 3, Datum |
| Shared Project | — | M1–M5 | Rolle Chat, keine Dateien, nur sie |
| GPT-Live | — | M6–M7 | sieht Live die Karte? (TG-07) Gesprächsqualität gegen 1–2 Golden Cases |
| Abschlusskarte | — | M8 | Format eingehalten? Zitate wörtlich? |
| Text-Ilse | `?was=abschlusskarte`, Vorschau | — | Beobachterin-Urteil, Herkunft, nichts bestätigt, Kosten in ¢ |
| Supabase | `zug_speichern`, `rueckkehr_notiz` | — | richtiges Fach, `verlauf.modelle` = openai, `admin.html` zeigt es |
| Entfernen | `aktiv_bis` = gestern → Startkarte verweigert | M11–M13 | die vier Prüffragen aus Zugangsschutz § 7 Punkt 9 (TG-07) |

Testfrau: eine, die noch nichts hat (nicht Nicole) — wie im Grundgerüst. Gespräch 10–15 Minuten. Ergebnis als Protokoll ins Quality Lab (`cases/voice/`) und ins Repo `more-is-yours/forschung/`.

---

## 9. Übergabe

**→ PETRA:** TG-01 (bauen oder nicht; zweiter Weg oder Ersatz), TG-02 (wie dünn die Thin Shell), TG-04 (welches Konto), TG-06 mit Dr. Falk.
**→ CHATGPT (Ilse & Quality Lab):** TG-03 (Karte = ein Zug?), TG-05 (Inhalte), danach Build Brief nach Protokoll § 9.
**→ CLAUDE CODE:** erst nach TG-01, TG-02, TG-03 — dann § 1a–1e als **ein** Bauschritt (eine Session, Live-Beweis gegen `ilse.moreisyours.de`), § 1f–1g daneben.

Nichts gebaut, keine Datei im Ilse-Haus angefasst, keine Migration, keine Voice-API, keine ChatGPT-Automation.

**Quellen (15.09.2026):** [OpenAI Help: Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) (Abruf 403, Inhalt aus Suchtreffern) · [OpenAI: More ways to work with your team](https://openai.com/index/more-ways-to-work-with-your-team/) (Abruf 403) · [OpenAI Release Notes, Voice in Projects 07.08.](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) · [OpenAI Enterprise/Edu Release Notes, Admin-APIs](https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes) · [OpenAI: Managing projects in the API platform](https://help.openai.com/en/articles/9186755-managing-your-work-in-the-api-platform-with-projects) · [aioperator: ChatGPT Project Sharing](https://www.aioperator.com/blog/chatgpt-project-sharing-a-new-feature-that-improves-team-collaboration/) · [kowalah: Shared Projects](https://kowalah.com/insights/how-to-use-chatgpt-shared-projects-from-shadow-ai-to-shared-intelligence) · Hybrid-Prüfung 14.09. (Quellen dort).
