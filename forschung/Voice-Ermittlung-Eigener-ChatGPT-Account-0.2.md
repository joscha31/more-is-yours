# MORE IS YOURS – Voice-Ermittlung: GPT-Live im eigenen ChatGPT-Konto der Frau 0.2

**Stand:** 15.09.2026, abends
**Status:** `TECH RESEARCH / PETRA REVIEW` · NICHT BUILD READY · nichts gebaut
**Bereich:** Ilse Voice · Kosten · Zugangsschutz nach Kündigung · Supabase als Daten-Wahrheit
**Ermittler:** Claude Code (technischer Architekt), alle Aussagen gegen die offiziellen OpenAI-Seiten geprüft (Stand der Seiten: 09.–14.09.2026)
**Baut auf:** `forschung/Voice-Architektur-Optionen-0.1.md` · `forschung/Voice-Zugangsschutz-Shared-Project-0.1.md` · `berichte-fuer-chatgpt/2026-09-15-liveone-lowcost-architektur-tech-check.md`

---

## TEIL 1 – Für Petra, in einfacher Sprache

### 1. Die beste Lösung, die ich gefunden habe: **„Das Ilse-Zimmer gehört More is Yours – die Frau kommt zu Besuch"**

Stell dir ein Zimmer bei ChatGPT vor (ein „Projekt"). **Das Zimmer gehört More is Yours**, nicht der Frau. Für jede Frau gibt es ein eigenes Zimmer. Die Frau bekommt einen Schlüssel („Einladung"), betritt das Zimmer mit **ihrem eigenen ChatGPT-Konto** und spricht dort mit Ilse über GPT-Live. Ihre Sprach-Minuten laufen über ihr eigenes Abo, nicht über uns.

Im Zimmer liegen nur drei Dinge:
- eine **dünne Ilse** (Ton, Haltung, die wichtigsten Gesprächsregeln – nicht die Methode),
- ihre **Startkarte** (was Supabase über sie weiß, nur das für heute Nötige),
- ihre bisherigen Gespräche in diesem Zimmer.

GPT-Live liest beim Sprechen genau das: die Zimmer-Anweisung, die Quellen und die letzten Gespräche im Zimmer. Das steht so bei OpenAI seit dem 7. August 2026.

**Die Überraschung, die alles einfacher macht:** Weil das Zimmer uns gehört, **sehen wir jedes Gespräch darin selbst.** Die Frau muss am Ende nichts kopieren. Sie sagt: „Ilse, mach mir die Abschlusskarte." Fertig. Wir holen die Karte aus dem Zimmer, die Text-Ilse prüft sie gegen Supabase, die Frau bestätigt in ihrem Haus bei More is Yours, Supabase wird aktualisiert.

**Bei Kündigung** nehmen wir ihr den Schlüssel weg. Das Zimmer ist für sie zu: keine Ilse-Anweisung mehr, keine Startkarten, keine neuen Gespräche. Was sie behält, ist höchstens eine Kopie ihrer alten Gespräche – und die dünne Ilse darin ist nicht das Produkt.

### 2. Funktioniert das heute wirklich?

**TEILWEISE – und der Teil, der fehlt, ist nur Handarbeit, keine fehlende Technik.**

| Baustein | Heute? | Beleg |
| --- | --- | --- |
| Frau spricht mit GPT-Live in einem Projekt, das jemand anders besitzt | **JA** (Projekte teilen gibt es für Free, Go, Plus, Pro; „Anyone with a link" = jede eingeloggte ChatGPT-Nutzerin kann beitreten) | Projects-Hilfeseite |
| Live nutzt Projekt-Anweisung, Quellen, frühere Projekt-Chats | **JA** | Release Note 07.08.2026 |
| Wir sehen ihre Gespräche im Zimmer | **JA** („All members of the project can view chats and files") | Projects-Hilfeseite |
| Wir entziehen den Zugang | **JA** (Owner kann Mitglieder jederzeit entfernen) | Projects-Hilfeseite |
| Startkarte automatisch aus Supabase ins Zimmer legen | **NEIN** – es gibt keine Schnittstelle für ChatGPT-Projekte; jemand legt sie von Hand hinein | keine API dokumentiert; Compliance API nur Enterprise |
| Abschlusskarte automatisch aus dem Zimmer holen | **NEIN** – gleiche Lücke; und OpenAI verbietet, Inhalte automatisch aus ChatGPT auszulesen | Nutzungsbedingungen |

Ergebnis: **Für 1 bis 5 Pilotinnen mit Petra (oder Elli) als Beifahrerin funktioniert der ganze Weg heute.** Für 100 Frauen nicht – dafür bräuchte es eine Schnittstelle, die OpenAI nicht anbietet, oder den eigenen Sprach-Weg (Teil 2, Variante D).

### 3. Was müsste die Frau konkret tun?

1. Ein ChatGPT-Konto haben – für die echte Ilse-Qualität **Plus (20 $/Monat)**, denn Free und Go bekommen nur „GPT-Live-1 mini".
2. Auf ihren Einladungs-Link tippen (kommt von More is Yours per Mail) – das Zimmer erscheint in ihrer Seitenleiste.
3. Das Zimmer öffnen, Sprach-Knopf drücken, sprechen. Ilse ist da und kennt die Startkarte.
4. Am Ende sagen: „Ilse, mach mir bitte die Abschlusskarte."
5. Später bei More is Yours: Ilse zeigt, was neu ist – die Frau bestätigt oder verwirft.

Kein Kopieren. Keine Datei. Kein Einfügen.

### 4. Was passiert bei Kündigung?

- Wir entfernen sie aus dem Zimmer. Ab da: kein Zugriff auf Anweisung, Quellen, Gespräche.
- Sie **kann vorher** ihre eigenen Gespräche aus dem Zimmer kopieren (ChatGPT bietet das beim Verlassen ausdrücklich an). Darum darf im Zimmer nie die Methode liegen, nur die dünne Ilse.
- Was ihr fehlt: aktuelles Economic Profile, Option Genome, Matching, Reality Learning, Verlauf, neue Ilse-Version, neue Karten. Das alles liegt nur in Supabase und in der Text-Ilse bei More is Yours.

### 5. Was kostet es More is Yours?

- **Sprach-Minuten: 0 €.** Die Frau bezahlt ihr eigenes Plus.
- **Ein ChatGPT-Konto für More is Yours als Zimmer-Besitzerin:** Free reicht für 5 Frauen (5 Quellen, 5 Mitglieder je Zimmer), Plus 20 $ für 10, Pro 100 $ für 100. Das Sprach-Modell richtet sich nach dem Konto der **Frau**, nicht nach unserem.
- **Der echte Preis ist Zeit:** je Gespräch legt jemand die Startkarte hinein und holt die Abschlusskarte heraus. Im Pilot ist das Petra als Beifahrerin – genau die Rolle, die der Master für die späteren Schritte ohnehin vorsieht.

### 6. Welche Abhängigkeit zu OpenAI bleibt?

- **Für die Stimme: voll.** Wenn OpenAI das Teilen von Projekten oder Voice in Projekten ändert, fällt dieser Weg.
- **Für das Produkt: keine.** Nichts vom Kern liegt bei OpenAI. Das Zimmer ist ein Besuchszimmer, kein Fundament. Fällt es weg, bleibt alles andere stehen, und die Stimme wandert in den eigenen Sprach-Weg (Variante D) oder zu einem anderen Anbieter.

---

## TEIL 2 – Technische Ermittlung

### A. ChatGPT Shared Projects (der Kern der Empfehlung)

| Frage | Befund | Quelle |
| --- | --- | --- |
| Kann More is Yours Owner bleiben? | Ja. Owner: „create chats, update instructions, add files, invite/remove members, set member permissions, modify the project name, delete the project." | [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt) |
| Nutzerin mit eigenem Konto? | Ja. Seit 22.10.2025 für Free, Plus, Pro, Go. „If set to 'Anyone with a link,' any logged-in ChatGPT user who has the link can join the shared project." Einladung auch namentlich per E-Mail („Only those invited"). Kein Workspace nötig. | ebd. |
| GPT-Live im Projekt? | Ja. „GPT-Live in ChatGPT Voice now supports file uploads and Projects. … use voice in Projects, referencing recent project chats, sources, and project instructions." (07.08.2026) | [Release Notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes) |
| Welches Modell? | Hängt vom Konto der **Frau** ab: Plus 3 h/Tag GPT-Live-1; Pro 100 $ 15 h; Pro 200 $ unbegrenzt (Neuabschluss seit 10.09. pausiert); Go 3 h GPT-Live-1 mini; Free „limited" mini. Personalities gelten nicht für Live. | [ChatGPT Voice](https://help.openai.com/en/articles/20001274) (Stand 12.09.2026) |
| Zugang entziehen? | Ja, jederzeit, auch vor Beitritt. Owner kann alle entfernen und das Projekt löschen („members will lose access to all files and chats"). | Projects |
| Was bleibt ihr? | Beim Verlassen: „option to make a copy of their chats within the project prior to leaving" (landet als Projekt „Copy …"). Bei Entfernen durch Owner: nicht dokumentiert, ob eine Kopie angeboten wird – **Testpunkt**. Ihre eigenen Chats kann sie jederzeit „move outside the project" – dann sieht auch der Owner sie nicht mehr. | Projects |
| Rollen? | Zwei: **Chat** („see and interact with the project's chats, files, and instructions, but not invite others") und **Edit**. Chat-Mitglieder **sehen die Anweisung und die Dateien** → Thin-Shell ist Pflicht, kein Geheimnis ins Projekt. | Projects |
| Mehrere Frauen sehen sich gegenseitig? | Ja, alle Mitglieder sehen alle Chats und die Mitgliederliste mit Name + E-Mail → **ein Projekt je Frau, zwingend.** | Projects |
| Limits | Owner Free: 5 Dateien, 5 Mitglieder · Plus/Go: 25 Dateien, 10 Mitglieder · Pro: 40 Dateien, 100 Mitglieder. Projekte selbst unbegrenzt. | Projects |
| Memory | Geteilte Projekte laufen immer mit „project-only memory": kein Zugriff auf die persönlichen Erinnerungen der Frau, und nichts fließt in ihr normales ChatGPT zurück. Gut für uns: die Ilse-Schale sickert nicht in ihr Konto. | Projects |
| Training | „We will only train on shared project data if every project contributor and owner has their 'Improve the model for everyone' toggle turned on." Ist der Schalter im More-is-Yours-Konto aus, wird nie trainiert. | Projects |
| API / Verwaltung? | **Keine.** Erstellen, Einladen, Entfernen nur in der Oberfläche. Die „Compliance API" gilt nur für Enterprise/Edu. Die „Projects" der API-Plattform sind ein anderes Produkt. Automatisches Auslesen der Oberfläche ist untersagt: „Automatisch oder programmgesteuert Daten oder Output zu extrahieren." | [Nutzungsbedingungen](https://openai.com/policies/row-terms-of-use/) |
| Quellen ins Projekt legen | Owner kann Dateien hochladen **oder Text einfügen** („by pasting text") – die Startkarte braucht keine Datei. Mitglieder können eine Antwort per „Save to project" als Quelle ablegen – damit könnte die Abschlusskarte als Quelle liegen, die der Owner herunterlädt. | Projects |
| Deep Link | Projekt-URLs funktionieren als Einstieg („open project URLs shared with them manually – projects will be pinned"). Ein Knopf bei More is Yours „Zu Ilse" kann direkt das Zimmer öffnen. Ein URL-Parameter, der Voice startet oder einen Prompt vorbefüllt, ist **nicht dokumentiert** (`?q=` ist Community-Beobachtung, am Handy unzuverlässig). | Projects; Community |

### B. ChatGPT Business / Workspace – geprüft und **verworfen**

| Frage | Befund |
| --- | --- |
| Externe einladen? | Technisch ja (externe Domains freischaltbar), aber: „Anyone you invite should be an intended, ongoing member of your team. … Misuse of seat assignments in violation of the Services Agreement may lead to workspace deactivation." |
| Weiterverkauf | Business-Bedingungen: **„Der Kunde darf den Zugang zu seinem Konto oder einem Endbenutzerkonto nicht weiterverkaufen oder vermieten."** Genau das wäre unser Modell. ⚖️ Falk-Thema, aber die Richtung ist klar: nicht bauen. |
| Kosten | 25 $/Sitz/Monat (20 $ jährlich), Mindestabnahme 2 Sitze; Live: 3 h, danach 1,25 Credits/Minute. Wir würden zahlen statt die Frau. |
| Zentrale Verwaltung | Entfernen ja, aber: SCIM (automatisches Provisionieren) nur Enterprise mit SSO; RBAC nur Enterprise; **„Data export is not available from a ChatGPT Business workspace."** |
| Fazit | Teurer, rechtlich falsch herum, nicht automatisierbar. **Nein.** |

Quellen: [Managing members Business](https://help.openai.com/en/articles/8542216-managing-members-seat-types-and-roles-in-chatgpt-business) · [Business Terms Mai 2025](https://openai.com/policies/may-2025-business-terms/) · [Shared links](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq) · [Data retention on removal](https://help.openai.com/en/articles/8266418)

### C. Plugins (Nachfolger der Custom GPTs) – **heute ohne Stimme, morgen vielleicht die Lösung**

| Frage | Befund | Quelle |
| --- | --- | --- |
| Was ist es? | „Plugins help ChatGPT and Codex complete workflows by packaging reusable instructions, connected tools, and other capabilities." Skills (Anweisungen) + verbundene Apps (MCP-Server). | [Plugins in ChatGPT and Codex](https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex) |
| Custom GPTs | Werden abgeschafft: Neuanlage endet **25.09.2026** (geplant), Abschaltung **11.12.2026**; GPT-Actions wandern nicht mit. **Nichts Neues auf Custom GPTs bauen.** | [Custom GPT retirement FAQ](https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq) |
| Externe Daten + Abo-Prüfung? | Ja: MCP-Server mit OAuth (Authorization Code + PKCE, Bearer-Token bei jedem Tool-Aufruf). Ein More-is-Yours-Server könnte bei gekündigtem Abo einfach nichts mehr liefern. | [Plugins Auth](https://developers.openai.com/plugins/build/auth) |
| Privat verteilen? | Öffentlich nur über das Submission-Portal (Review). Workspace-intern nur Business/Enterprise. Für Einzelpersonen: „personal marketplace" (`~/.agents/plugins/marketplace.json`) – für Nicole & Co. unzumutbar. | [Package your plugin](https://developers.openai.com/plugins/build/plugins) |
| **Mit GPT-Live?** | **Nein.** „Live does not initially support video, screen sharing, connected apps, or plugins." Das Wort „initially" ist die einzige Hoffnung; ein Datum gibt es nicht. Community-Anfragen dazu sind ohne OpenAI-Antwort. | ChatGPT Voice |
| Kontext vorher laden, dann Voice? | Ein Plugin kann in derselben Unterhaltung Text-Kontext liefern; ob Live danach diesen Kontext nutzt, ist **nicht dokumentiert** (im Projekt ist es dokumentiert – deshalb A vor C). | – |
| Fazit | **Die richtige Architektur für 2027, sobald Live Plugins kann:** dann liefert der Plugin-Server Startkarte + Ilse-Schale nur bei aktivem Abo und nimmt die Abschlusskarte direkt entgegen – ohne Beifahrerin. Heute: nur Text-Ilse in ChatGPT, nicht Voice. Beobachten, nicht bauen. | – |

### D. Hybrid vorher/nachher – so sieht er im Projekt aus

1. Bei More is Yours: Frau drückt „Mit Ilse sprechen". Die App erzeugt die Startkarte aus Supabase (Ilse-Version, Session-ID, 5–10 bestätigte Punkte, Ziel, offene Fragen, Herkunftsregel) und legt sie in Petras Warteschlange.
2. **More is Yours** (Beifahrerin, im Pilot Petra) fügt die Startkarte als Text-Quelle ins Zimmer der Frau ein (Owner-Recht, „paste text"). Alte Startkarte löschen, damit nur eine gilt.
3. Frau öffnet das Zimmer per Link, startet Live, spricht. Keine Tools nötig – alles liegt im Zimmer.
4. Frau: „Ilse, mach mir die Abschlusskarte." Live schreibt sie in den Chat (Transkript + Karte bleiben im Zimmer sichtbar; Audio wird nach 30 Tagen gelöscht).
5. More is Yours liest die Abschlusskarte im eigenen Zimmer, gibt sie der Text-Ilse (Opus) zur Prüfung: gesagt / Ableitung / Hypothese / Widerspruch.
6. Frau bestätigt in ihrem Haus (`ilse.moreisyours.de`), Supabase wird geschrieben.

Nutzerfreundlicher als Copy & Paste: **Die Frau kopiert null.** Die Handarbeit liegt bei uns (Schritte 2 und 5) und ist im Pilot gewollt.

### E. Transkript / Auslese

- Live speichert das Transkript im Chat: „Audio clips … are stored with the transcript that appears in your chat history." Audio 30 Tage, Transkript bleibt. (ChatGPT Voice)
- Share-Links persönlicher Konten sind Momentaufnahmen, ohne Ablaufdatum, jederzeit löschbar; aus geteilten Projekten sieht ein Fremder den Link erst nach Beitritt. **Nicht nötig**, weil der Owner ohnehin im Zimmer liest.
- Daten-Export: nur ganzes Konto, bis zu 7 Tage Wartezeit, Link 24 h gültig. Unbrauchbar.
- Automatisches Auslesen (Browser-Extension, Scraper): **untersagt** durch die Nutzungsbedingungen. Keine Empfehlung.
- Apple Shortcuts / App Intents der ChatGPT-App: nur Community-Berichte, keine offizielle Doku → **UNVERIFIED**, nicht darauf bauen.
- iOS Share-Sheet in eine eigene Web-App („share_target") funktioniert auf iPhone/Safari nicht (nur Android/Chrome).
- Ein-Klick zurück zu More is Yours: Am einfachsten steht der Link zu ihrem Haus in der Ilse-Anweisung des Zimmers („Wenn die Abschlusskarte steht, sag ihr: Dein nächster Schritt liegt unter https://ilse.moreisyours.de").

### F. Zeitlich begrenzter Ilse-Kontext – was davon heute geht

| Idee | Geht? | Wie |
| --- | --- | --- |
| Geteiltes Projekt mit Entzug | ✅ | Kern der Empfehlung |
| Startkarte je Sitzung, danach ersetzt | ✅ | Owner tauscht die Text-Quelle aus |
| Kurzlebige Datei | ✅ | Datei nach der Sitzung löschen („deleting a file removes it from the project for everyone") |
| Link mit Ablaufdatum | ❌ | Share-Links haben kein Ablaufdatum; Projekt-Einladung ist dauerhaft bis zum Entfernen |
| Token-gesteuerter Abruf während des Gesprächs | ❌ | Live kann keine Apps/Plugins |
| Serverseitige Sitzungskarte automatisch geliefert | ❌ heute · ✅ später via Plugin, sobald Live Plugins kann | – |
| Temporary Chat als Wegwerf-Kontext | ❌ | Temporäre Chats können nicht in Projekte; Kontext bliebe nicht |

### G. Zugangskontrolle – was More is Yours wirklich steuert

| Was | Wer steuert | Wo |
| --- | --- | --- |
| Wer Zugriff hat | More is Yours (Owner) | Mitgliederliste des Zimmers |
| Wie lange | More is Yours | Entfernen = sofort |
| Welcher Kontext | More is Yours | Anweisung + Quellen, nur Owner/Edit ändern sie; Frau ist „Chat" |
| Welche Ilse-Version | More is Yours | Versionsnummer steht in der Anweisung und auf jeder Startkarte |
| Kommt Gekündigte an neue Inhalte? | Nein | Alles Neue entsteht in Supabase und in der Text-Ilse |

Was nach Kündigung fehlt (Zielliste aus dem Auftrag): Economic Profile ✅ · Option Genome ✅ · Matching ✅ · Reality Learning ✅ · Verlaufsdaten ✅ (nur ihre Chat-Kopien, keine Struktur) · aktuelle Ilse-Version ✅ · Gesprächskarten ✅ · neue Inhalte ✅. Alle acht Punkte liegen außerhalb des Zimmers.

### H. Unkonventionelle Wege – geprüft

| Weg | Ergebnis |
| --- | --- |
| **Owner liest mit** (die Frau kopiert nichts) | ✅ Neu, nicht diskutiert, der stärkste Fund dieser Ermittlung |
| **„Save to project"** für die Abschlusskarte | ✅ Die Frau kann die Karte mit einem Tipp als Quelle ablegen; Owner lädt sie herunter. Alternative zum Mitlesen |
| Eigenes More-is-Yours-ChatGPT-Konto als Owner (statt Petras privatem) | ✅ Empfohlen: `info@moreisyours.de`, Free reicht für den Pilot, Datenschutz sauberer getrennt |
| Projekt-URL als Deep Link | ✅ dokumentiert |
| `?q=`-Prefill, `chatgpt://`-Schema | ❌ nicht dokumentiert, am Handy unzuverlässig |
| Browser-Extension / Scraper | ❌ Nutzungsbedingungen |
| Business Workspace mit Kundinnen | ❌ Weiterverkaufsverbot |
| Custom GPT | ❌ wird am 11.12.2026 abgeschaltet |
| Plugin mit OAuth | ⏳ richtig, sobald Live Plugins kann; heute nur Text |
| Apple Shortcuts | ❓ unverifiziert |
| ChatGPT „Sites" für Externe (03.09.2026) | ❌ Work-Feature, keine Voice, kein Bezug |
| Gemini Live / Deepgram / ElevenLabs / Pipecat | wie in 0.1: Benchmark-Kandidaten, kein Kostensieger; unverändert |

### Variante D zum Vergleich: eigener Sprach-Weg mit GPT-Live-1 API

Preis der Voice-Schicht: **0,05 $/Minute, sekundengenau**, Backend-Modell und Tools extra ([GPT-Live-1 Modellseite](https://developers.openai.com/api/docs/models/gpt-live-1)). Rechnung, keine Messung:

| Nutzung je Frau | Voice-Schicht/Monat |
| --- | --- |
| 1 Gespräch à 20 Min./Woche | ~4 $ |
| 1 Gespräch à 45 Min./Woche | ~9 $ |
| 1 Stunde täglich | ~90 $ |

Vorteil: volle Automatik (Supabase live, Tools, kein Beifahrer), Zugangsschutz trivial, Provider austauschbar hinter eigener Hülle. Nachteil: wir zahlen variabel, und die Stimme im API-Weg ist noch nicht gegen die ChatGPT-Live-Qualität getestet. **Empfehlung:** Variante D bleibt der Skalierungs-Pfad ab etwa 20 Frauen oder sobald die Beifahrerin-Zeit teurer ist als 9 $/Frau. Bis dahin: Projekt-Weg.

---

## TEIL 3 – Zweiter Blick (Geld · Recht · Ruf), ungefragt

1. ⚖️ **Datenschutz vor der ersten Pilotin (Dr. Falk):** Die Gespräche der Frau liegen in einem ChatGPT-Konto von More is Yours, in den USA, und wir lesen mit. Das braucht eine ausdrückliche Einwilligung mit Klartext („Petra liest dein Gespräch, um es in dein Profil zu übertragen"), den Trainings-Schalter aus, und die Löschfrage nach Kündigung (Projekt löschen = alles weg innerhalb 30 Tagen). Kein Art.-9-Inhalt ins Zimmer.
2. **Die Frau braucht Plus.** 20 $ im Monat zusätzlich zu unserem Preis – das muss im Kaufweg ehrlich stehen. Mit Free/Go bekommt sie „mini"; ob das Ilse-tauglich ist, muss die Testfrau zeigen.
3. **Die Beifahrerin ist der Engpass, nicht die Technik.** Bei 10 Frauen à 1 Gespräch/Woche sind das 20 Handgriffe pro Woche. Das ist im Pilot richtig und ab 20 Frauen falsch – dann Variante D.

---

## TEIL 4 – Winzigster Proof of Concept (besser als die Start-/Abschlusskarten-Idee aus 0.1)

**Unterschied zu 0.1:** Kein Kopieren durch die Frau. Statt „Startkarte kopieren / Abschlusskarte einfügen" liegt beides im Zimmer, das uns gehört.

**Kosten: 0 €. Dauer: 30 Minuten. Nichts wird gebaut.**

1. Mit `info@moreisyours.de` ein kostenloses ChatGPT-Konto anlegen (Free reicht: 5 Mitglieder, 5 Quellen). Trainings-Schalter aus.
2. Projekt „Ilse · Test Petra" anlegen. Anweisung = die dünne Ilse (Ton, „Hallo, liebe [Vorname]", Herkunftsregel gesagt/Ableitung/Hypothese, Abschlusskarten-Format, Versionsnummer). Quelle = eine Startkarte als eingefügter Text.
3. Petras privates Plus-Konto per E-Mail einladen (Only those invited, Rolle Chat).
4. Am iPhone im Plus-Konto: Zimmer öffnen, Live starten, 10 Minuten zu einem klar begrenzten Thema sprechen. Kontrollfragen: Nennt Ilse Petra beim Namen? Kennt sie die Startkarte? Bleibt sie in der Schale?
5. „Ilse, mach mir die Abschlusskarte." Prüfen: Sichtbar im More-is-Yours-Konto?
6. Im More-is-Yours-Konto Petra aus dem Projekt entfernen. Im Plus-Konto prüfen: Was ist noch sichtbar? Wurde eine Kopie angeboten?
7. Ergebnis in `quality-lab/` oder als Nachtrag hier dokumentieren. Erst dann PETRA REVIEW → BUILD READY für die zwei Knöpfe bei More is Yours („Mit Ilse sprechen" → Startkarte in Petras Warteschlange · „Abschlusskarte prüfen" → Text-Ilse).

**Der EINE Test, der alles entscheidet:** Schritt 4. Wenn Live im geteilten Projekt die Anweisung und die Startkarte tatsächlich benutzt und die Stimme so gut ist wie im Petra-Test vom September, steht der Weg. Wenn nicht, ist er tot, bevor eine Zeile Code entsteht.

---

## Quellen (alle geprüft am 15.09.2026, über den Browser gelesen)

- ChatGPT Voice (aktualisiert 12.09.2026): https://help.openai.com/en/articles/20001274
- Projects in ChatGPT (aktualisiert 17.08.2026): https://help.openai.com/en/articles/10169521-projects-in-chatgpt
- ChatGPT Release Notes (Einträge 07.08., 09.09., 11.09.2026): https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- Plugins in ChatGPT and Codex: https://help.openai.com/en/articles/20001256-plugins-in-chatgpt-and-codex
- Custom GPT retirement FAQ: https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq
- Developer mode and MCP apps: https://help.openai.com/en/articles/12584461
- Plugins Auth / Packaging: https://developers.openai.com/plugins/build/auth · https://developers.openai.com/plugins/build/plugins
- GPT-Live-1 (API, Preis): https://developers.openai.com/api/docs/models/gpt-live-1 · https://openai.com/index/introducing-gpt-live-1-in-the-api/
- Business: Members https://help.openai.com/en/articles/8542216 · Retention https://help.openai.com/en/articles/8266418 · Shared links https://help.openai.com/en/articles/7925741
- Business Terms (Mai 2025): https://openai.com/policies/may-2025-business-terms/
- Nutzungsbedingungen: https://openai.com/policies/row-terms-of-use/
- ChatGPT Plus (20 $/Monat, Pro-200-Pause seit 10.09.2026): https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus

**Nicht verifiziert (nicht darauf bauen):** Apple-Shortcuts-Aktionen der ChatGPT-App · `?q=`-Prefill · ob beim Entfernen durch den Owner (statt beim freiwilligen Verlassen) eine Chat-Kopie angeboten wird · ob GPT-Live-1 mini für Ilse reicht.
