# Machbarkeit: More is Yours direkt in ChatGPT

Stand: 30.10.2026 · Status: **PRÜFBERICHT / PETRA REVIEW**. Geschrieben von Claude Code im Auftrag von Petra und ChatGPT.
Dabei wurde nichts programmiert, kein System verändert, nichts veröffentlicht und kein Dienst gebucht. Es sind keine Kosten entstanden. Über den Weg entscheidet Petra.

**Quellen** (am 30.10.2026 gelesen, die Hilfeseiten sind laut Seitenkopf vom 28.10.):
- OpenAI-Entwicklerdoku „Plugins“: `developers.openai.com/plugins/…`, besonders die Seiten *Add UI to your MCP server*, *Build an MCP server*, *Build skills*, *Connect and test*, *Plugin guidelines*, *Security & Privacy* und *Reference*
- OpenAI-Hilfeseiten: *Plugins in ChatGPT*, *Connecting custom MCP servers in ChatGPT*, *Hosting a plugin with ChatGPT Sites*, *Konnektoren in ChatGPT*

Wichtig vorab: Was 2025 „ChatGPT Apps“ und „Apps SDK“ hieß, heißt bei OpenAI jetzt **Plugins**. Ein Plugin besteht aus Skills (Anweisungen), einem MCP-Server (Werkzeuge) und optional einer Oberfläche. Ältere Anleitungen im Netz sind deshalb teilweise überholt. Unten sind **dokumentierte** Aussagen (📄, mit Fundstelle) von **Annahmen** (❓) getrennt.

---

## 1. Ist die Idee technisch möglich?

**Ja, im Grundsatz.** Die Gesprächsführung lässt sich aber nicht so fest kontrollieren wie auf der eigenen Seite, und die Veröffentlichung hat zwei harte Hürden: das Alter und das Geld.

| Frage | Antwort |
|---|---|
| Kann ChatGPTs eigenes Modell Elsbeth sprechen? | 📄 Ja, über einen **Skill**: eine Datei mit Anweisungen, die ChatGPT lädt, wenn der Gast das Plugin aufruft („Build skills“, „Skills“). Dafür ist **kein zweites, bezahltes Modell** im Hintergrund nötig. |
| Kann ChatGPT dabei eine Oberfläche steuern? | 📄 Ja. Werkzeuge des MCP-Servers liefern eine Oberfläche, die in ChatGPT in einem abgeschotteten Fenster läuft: als Karte im Gespräch, **bildschirmfüllend** (das Eingabefeld bleibt sichtbar) oder als **Bild-im-Bild**, das sichtbar bleibt, während das Gespräch weiterläuft („Add UI“, Abschnitt *Choose a presentation*). |
| Kann die Oberfläche zurücksprechen? | 📄 Ja. Ein Knopf in der Oberfläche kann selbst ein Werkzeug aufrufen (`tools/call`), dem Modell sagen, was gerade zu sehen ist (`ui/update-model-context`), und eine Nachricht ins Gespräch schicken (`ui/message`, „Reference“). |

---

## 2. Die wichtigste Frage: Wer führt das Gespräch?

**Antwort: das Modell, mit dem der Gast in ChatGPT ohnehin spricht.** Unsere Anwendung muss kein eigenes Modell aufrufen. Das ist der wirtschaftliche Kern dieses Wegs.

Wie gut Elsbeth dort bleibt, hängt aber nicht mehr allein an uns:

- **Wie bekommt das Modell Elsbeths Persönlichkeit?**
  - 📄 Über den Skill-Text.
  - 📄 Die Server-Anweisungen dürfen dafür **nicht** dienen: „Do not … try to change the model's personality“ („Build an MCP server“, Abschnitt *instructions*).
  - ❓ Ob ein Skill eine ganze Figur tragen darf, sagt die Doku nicht ausdrücklich. Die Beispiele sind Arbeitsabläufe. Die Prüfung bei OpenAI könnte das anders sehen.
- **Wer hat Vorrang?**
  - 📄 Die Doku verlangt, dass ausdrückliche Anweisungen des Nutzers **Vorrang vor dem Skill** haben („Build skills“: *priority of explicit user instructions over skill guidelines*).
  - Sagt ein Gast „sei mal frecher“ oder „hör auf zu fragen“, gewinnt der Gast. Unsere Schutzregeln liegen dann nicht mehr fest in einer Systemanweisung, sondern nur im Skill. Die Sicherheitsregeln von ChatGPT selbst gelten zusätzlich.
- **Bleiben die Regeln über einen langen Besuch erhalten?**
  - ❓ Nicht belegt. Der Skill wird geladen, wenn der Gast ihn aufruft, und steht dann im Verlauf.
  - Auf unserer Seite hängt der Server dagegen **bei jeder Antwort** die Regie-Zeile und den STAND an. In ChatGPT gibt es diesen Eingriff je Antwort nicht.
  - Ein Ersatz ist möglich: Jedes Werkzeug, das die Oberfläche aufruft, kann in seinem Ergebnis den aktuellen Stand und eine kurze Erinnerung mitliefern (❓ Wirksamkeit ungetestet).
- **Wie gelingt die Übergabe an die Erlebnisanweisung?**
  - ❓ Zwei Wege sind denkbar: ein zweiter Skill für das Abendessen oder ein Werkzeug „Tür öffnen“, dessen Ergebnis die Tisch-Anweisung mitbringt.
  - Beides ist technisch üblich. Ob das Modell den Rollenwechsel sauber vollzieht, muss getestet werden.
- **Wie verhindern wir, dass andere Inhalte das Erlebnis verfälschen?**
  - 📄 Erinnerung, Personalisierung und frühere Inhalte der Unterhaltung bleiben in ChatGPT aktiv. Sie sind Einstellungen des Gasts, nicht unsere („Konnektoren in ChatGPT“).
  - Vollständig verhindern lässt es sich nicht. Am besten hilft die Empfehlung, für jeden Besuch einen **neuen Chat** zu beginnen und darin das Plugin mit @ aufzurufen.
- **Welches Modell spricht?**
  - 📄 Welches Modell spricht, bestimmt der Tarif und die Auswahl des Gasts. Die Verfügbarkeit einer App hängt auch „vom Modell“ ab („Konnektoren in ChatGPT“).
  - Elsbeth klingt also bei einem Gast mit kleinem Tarif anders als bei einem mit großem. **Wir können das Modell nicht festlegen.**

**Einordnung:** Petras gelungener Flur-Test vom 27.10. lief genau so, nämlich ChatGPT in der App mit einer Anweisung im Gespräch. Insofern ist die erhoffte Qualität grundsätzlich erreichbar. Der Unterschied liegt bei den Gästen: Jeder bringt sein eigenes ChatGPT mit, also anderes Modell, andere Erinnerung, andere eigene Anweisungen.

---

## 3. Die elf Bausteine des ersten Erlebnisses

| # | Baustein | Machbar? | Wie |
|---|---|---|---|
| 1 | Elsbeths Empfang | 📄 ja | Skill-Text plus eine Begrüßungskarte mit dem Bild aus der Halle |
| 2 | Geheimnisvoller Flur | 📄 ja | Oberfläche bildschirmfüllend oder als Bild-im-Bild, damit sie während des Gesprächs sichtbar bleibt |
| 3 | Fünf leere Rahmen | 📄 ja | gezeichnet wie heute im Tisch-Prototyp (CSS/SVG) |
| 4 | Porträt nach Bestätigung | 📄 ja | **Der Gast drückt in der Oberfläche „aufhängen“**, das ruft unser Werkzeug direkt auf. Das ist verlässlich, weil es nicht vom Modell abhängt. |
| 5 | Umbenennen, Ablehnen | 📄 ja | ebenso über Knöpfe. Danach geht eine kurze Nachricht ins Gespräch, damit Elsbeth davon weiß. |
| 6 | Tür öffnet sich | 📄 ja | Die Oberfläche zeigt die Tür, sobald unser Server 5 von 5 meldet. Das ist eine feste Regel im Server. |
| 7 | Speisezimmer mit fünf Figuren | 📄 ja (Bild) · ❓ Gespräch | Bild und Namensschilder sind Oberfläche. Die fünf Stimmen müsste das Modell des Gasts spielen. |
| 8 | Freies Gespräch mit den Figuren | ❓ | wie Punkt 7. Wie gut ein Modell fünf Figuren auseinanderhält, ist ungetestet. |
| 9 | Figurenaustausch | 📄 ja (Oberfläche) | Knopf am Porträt, Server aktualisiert den Stand |
| 10 | Persönliches Andenken | 📄 Anzeige ja · Aufbewahren nur mit Konto | Anzeigen und herunterladen geht. Dauerhaft aufbewahren braucht laut Doku eigenen Speicher und eine Anmeldung („Manage state“: *Store cross-session state on your server … Authenticate the user*). |
| 11 | Rückkehr zu Elsbeth | ❓ | Rollenwechsel zurück, wie die Übergabe in Abschnitt 2 |

**Zuverlässigkeit der Bilder:**
- 📄 Verlässlich ist alles, was der **Gast per Knopf** auslöst, denn das läuft ohne Modell direkt zu unserem Server.
- ❓ Unsicher ist alles, was das **Modell von sich aus** tun muss, zum Beispiel einen Vorschlag als Werkzeug-Aufruf melden. Die Doku empfiehlt selbst, Werkzeuge so zu bauen, dass das Gespräch auch ohne Oberfläche weitergeht. Darin steckt das Eingeständnis, dass ein Aufruf auch einmal ausbleiben kann.
- **Rückfall, wenn das Modell einen Aufruf vergisst:** Der Gast kann den Namen selbst in den leeren Rahmen schreiben. Ein vergessener Aufruf hält dann nichts auf.

**Smartphone:**
- 📄 Das **private Testen** mit einem eigenen MCP-Server geht **nur im Browser am Computer**, nicht am Handy („Connecting custom MCP servers“, FAQ: *web only*).
- 📄 Veröffentlichte Plugins sind auch in der Handy-App zu finden, und die Richtlinien verlangen, dass sie dort zuverlässig laufen.
- 📄 Bild-im-Bild wird am Handy unter Umständen bildschirmfüllend gezeigt („Reference“).

**Ohne Technikkenntnis starten:**
- 📄 Ein veröffentlichtes Plugin installiert man aus dem Plugin-Verzeichnis und ruft es mit @ auf.
- Das ist einfacher als ein Konto anzulegen, aber nicht so einfach wie ein Link: Der Gast braucht ChatGPT und muss wissen, wie man ein Plugin findet.

---

## 4. Vorhandene Gestaltung weiterverwenden

| Baustein heute (Tisch-Prototyp, Halle) | In ChatGPT |
|---|---|
| Bilder `halle-7k3q/bilder/` (1,7 MB: Elsbeth, Empfang, Halle, Tresen, Tür, Türen) | 📄 weiterverwendbar. Sie müssen als erlaubte Quelle gemeldet werden (`resourceDomains`) oder in die Oberfläche eingebettet sein. |
| Flur mit fünf Rahmen (CSS/SVG in `tisch/index.html`) | weiterverwendbar. Er muss als eigenes Bauteil herausgelöst werden, denn heute steckt er in einer ganzen Seite mit Chat. |
| Chatfenster, Eingabefeld, Mikrofon | **entfällt**, denn das übernimmt ChatGPT |
| Speicherung im Browser (Stand, Andenken) | 📄 ungeeignet als Hauptspeicher („Avoid localStorage for core state“). Der Stand gehört auf unseren Server. |
| Clips (23 MB) und Ton | ❓ technisch möglich, aber groß. Fraglich, ob es in der ChatGPT-Oberfläche flüssig läuft. |
| Ganze Tisch-Seite in einem Rahmen einbetten | 📄 nur von der **eigenen Domain** des Servers. Die Doku sagt ausdrücklich: Getrennte Projekte bei einem gemeinsamen Anbieter wie `vercel.app` zählen als fremde Domains. Mit `moreisyours.de` als Domain des Servers wäre es denkbar, braucht aber eine Begründung bei der Prüfung. |

Es entsteht keine neue Gestaltung. Neu wäre nur die Anordnung als Bauteil neben dem Gespräch.

---

## 5. Kosten und Kontrolle: A gegen B

| | **A: in ChatGPT** | **B: eigene Website (wie heute)** |
|---|---|---|
| Wer bezahlt die KI-Gespräche? | 📄 der Gast über seinen ChatGPT-Tarif. Die Nutzung zählt auf seine Tarif-Grenzen („Konnektoren in ChatGPT“). | wir, über die API. Gemessen: Haiku 1,4 bis 1,7 Cent je Erlebnis; im Test am 29.10. je Gespräch Sol rund 5 Cent, Astra rund 25 Cent, Opus rund 37 Cent. |
| Was zahlen wir trotzdem? | Betrieb des MCP-Servers (eine Funktion mehr, 10 von 12 sind belegt), Bilder, später Speicher und Anmeldung. ❓ Ob Vercel Hobby für ein öffentliches Angebot reicht, ist zu prüfen. | Betrieb wie heute plus API-Kosten je Besuch |
| Nutzungsgrenzen für Gäste | 📄 die Grenzen ihres Tarifs, auf die wir keinen Einfluss haben | unser Tagesdeckel, den wir selbst setzen |
| Bestimmter Tarif nötig? | 📄 Zum Testen eines eigenen Servers: **Business oder Enterprise/Edu**, nur im Browser („Connecting custom MCP servers“). 📄 Plugins mit App über *ChatGPT Sites*: **auf jedem Tarif** erstellbar, aber in privaten Konten nicht teilbar („Hosting a plugin with ChatGPT Sites“). ❓ Mit welchem Tarif Gäste ein veröffentlichtes Plugin nutzen können, hängt laut OpenAI von „Tarif, Region, Workspace und Rolle“ ab und steht nicht genauer da. | keiner, ein Link reicht |
| Später Bezahlung oder Mitgliedschaft? | 📄 **Innerhalb von ChatGPT nicht verkaufbar.** Erlaubt ist nur Handel mit körperlichen Waren. Digitale Produkte, Abos und „freemium upsells“ sind verboten. Wer schon zahlt, darf sich anmelden und nutzen, was in seiner Mitgliedschaft steckt. Das Plugin darf aber keine Tarife zeigen und nicht auf eine Bezahlseite verlinken („Plugin guidelines“, *Commerce and monetization*). | frei gestaltbar |
| Fundstücke sicher aufbewahren | nur mit eigenem Konto und Server-Speicher (Anmeldung über OAuth 2.1), also dieselbe Arbeit wie bei B | wie bereits geprüft (Supabase Frankfurt, Konto ohne Passwort) |
| Unabhängig bei Anbieterwechsel? | 📄 teilweise. Die Oberfläche folgt dem offenen Standard *MCP Apps* und kann laut OpenAI auch in anderen kompatiblen Programmen laufen. ❓ Welche das heute konkret sind, habe ich nicht geprüft. Der Skill-Text ist einfacher Text und mitnehmbar. | voll. Das Modell ist austauschbar, das zeigt der Vergleich vom 29.10. |
| Abhängigkeit von ChatGPT | **hoch:** Modell, Gesprächsqualität, Prüfung, Verzeichnis, Regeln und Handy-Darstellung bestimmt OpenAI. Die Regeln haben sich 2026 schon einmal grundlegend geändert (aus Apps wurden Plugins). | gering: nur der API-Anbieter, der wechselbar ist |

---

## 6. Datenschutz und Veröffentlichung (nichts davon ist gesichert, alles für Dr. Falk)

- **Was More is Yours bekäme:**
  - 📄 nur die Angaben, die das Modell einem Werkzeug übergibt, zum Beispiel einen Figurennamen und das Anliegen
  - 📄 eine anonymisierte Nutzerkennung (`openai/subject`)
  - 📄 Hinweise auf Sprache, Gerät und ungefähren Ort
  - 📄 Die Richtlinien **verbieten**, den ganzen Gesprächsverlauf anzufordern („Plugin guidelines“, *Minimal and purpose-driven inputs*). Unser Server sähe also deutlich **weniger** als heute.
- **Was bei ChatGPT bliebe:**
  - das ganze Gespräch, nach den Einstellungen des Gasts zu Aufbewahrung, Erinnerung und Training
  - 📄 Mit eingeschalteter Erinnerung kann sich ChatGPT laut OpenAI auch Inhalte aus Apps merken („Konnektoren in ChatGPT“).
  - ❓ Für private Konten (nicht Business) sagt die gelesene Seite nichts dazu, ob die Inhalte zum Training verwendet werden. Das muss Dr. Falk mit OpenAIs Datenschutztexten prüfen.
- **Einwilligungen:** ❓ offen. Vermutlich braucht es einen Hinweis vor dem Start, eine eigene Einwilligung für ein Konto und Fundstücke und einen Hinweis, dass Gefühle und Beziehungsthemen besondere Daten sein können.
  - 📄 Sensible Daten sind laut Richtlinien nur erlaubt, wenn sie unbedingt nötig sind, rechtlich wirksam eingewilligt und **vorher deutlich angekündigt**.
- **Andenken speichern:** auf unserem Server mit Anmeldung, Löschfristen und Löschmöglichkeit. Das ist dieselbe offene Arbeit wie bei B.
- **Pflichten für eine Veröffentlichung:**
  - 📄 bestätigte Identität im OpenAI-Konto
  - 📄 vier Pflichtseiten: Website, Hilfe, Datenschutz, Nutzungsbedingungen
  - 📄 öffentliche HTTPS-Adresse des Servers
  - 📄 Funktion auf Computer **und** Handy
  - 📄 „Trial or demo plugins will not be accepted“: Ein halbfertiges Erlebnis wird nicht angenommen.
  - 📄 keine Preise oder Abos in der Beschreibung
- ⚠️ **Die größte Hürde, das Alter:**
  - 📄 Plugins müssen für ein allgemeines Publikum **einschließlich 13- bis 17-Jähriger** geeignet sein. Angebote ab 18 werden erst unterstützt, wenn es eine Altersprüfung gibt („Plugin guidelines“, *Appropriateness*).
  - More is Yours ist ausdrücklich ab 18. Für ein öffentliches Plugin müsste das Erlebnis also auch für Jugendliche taugen, oder wir warten auf OpenAIs Altersprüfung.
- **Für Dr. Falk:**
  - Altersgrenze ab 18 gegen die Anforderung „ab 13“
  - Rollenverteilung: wer verantwortlich ist und ob es einen AVV braucht, wenn OpenAI das Gespräch führt und wir nur Werkzeuge liefern
  - Datenschutzerklärung für das Plugin
  - Gesundheits- und Gefühlsthemen als besondere Daten
  - Verkaufsverbot gegen spätere Mitgliedschaft (Anmeldung ja, Verkauf nein)
  - FernUSG, sobald Geld fließt
  - Haftung, wenn ChatGPTs Modell unsere Schutzregeln nicht einhält

---

## 7. Was wir programmieren müssten (nur Umfang, nichts gebaut)

1. **Einen kleinen MCP-Server**, als eine Funktion in der Zentrale oder später auf eigener Domain. Er hat wenige Werkzeuge, etwa `flur_zeigen`, `figur_vorschlagen`, `figur_aufhaengen`, `figur_ablehnen` und `tuer_oeffnen`, und hält den Stand je Gast.
2. **Ein Oberflächen-Bauteil** im Standard *MCP Apps*, aus dem vorhandenen Flur herausgelöst.
3. **Einen Skill**, der die vorhandene Tisch-Anweisung trägt. Laut Auftrag gibt es **keine neue Elsbeth-Anweisung**. Für die Probe würde die bestehende unverändert eingesetzt, und nur der technische Teil (Zeichen wie `[[FIGUR]]`) würde durch Werkzeug-Aufrufe ersetzt.
4. Später: Anmeldung, Speicher für Andenken, Pflichtseiten, Prüfung bei OpenAI.

---

## 8. Wesentliche Nachteile dieses Wegs

1. **Wir geben die Gesprächsführung ab.** Es gibt keine Regie je Antwort, das Modell ist nicht festgelegt, Gast-Anweisungen haben Vorrang, und Erinnerung und Verlauf mischen sich ein. Genau die Stellschrauben aus der Ursachenprüfung vom 29.10. (Zähler, Regie, Szenenwechsel) lassen sich in ChatGPT nur abgeschwächt nutzen.
2. **Kein Verkauf in ChatGPT.** Geld verdienen geht nur über eine Mitgliedschaft, die außerhalb gekauft wird.
3. **Altersgrenze:** öffentlich nur, wenn das Erlebnis auch ab 13 taugt.
4. **Gäste brauchen ChatGPT.** Wer kein ChatGPT hat oder es nicht mag, bleibt draußen. B bliebe als zweiter Eingang nötig. 📄 Die Richtlinien verlangen zudem, dass die ChatGPT-Fassung nicht schlechter ist als die eigene Website.
5. **Hohe Abhängigkeit** von OpenAIs Regeln, die sich 2026 schon einmal geändert haben.

Der große Vorteil bleibt: **keine Gesprächskosten für uns** und möglicherweise die natürlichere ChatGPT-Stimme, die Petra im Chat erlebt hat.

---

## 9. Die kleinste sinnvolle Probe

**Schritt 0, kostenlos, 5 Minuten, nur Petra:**
- In ChatGPT im Browser am Computer unter **Plugins → Plus-Zeichen** nachsehen, ob „Add custom MCP server“ angeboten wird.
- Dazu den eigenen Tarif nennen.
- Davon hängt ab, welcher Testweg ohne neues Abo geht:
  - eigener Server, was laut Doku Business oder Enterprise/Edu braucht,
  - oder *ChatGPT Sites*, was laut Doku auf jedem Tarif geht, wenn Sites freigeschaltet ist.
- ⚠️ Ein Business-Tarif nur für den Test wäre ein neues Abo und braucht Petras ausdrückliches Ja.
- ✅ **Ergebnis (30.10., nachgesehen von Claude im Browser in Petras Konto):**
  - Petras Konto hat den Tarif **Pro**.
  - Unter Plugins → „Hinzufügen“ wird **„Benutzerdefinierten MCP-Server hinzufügen“** angeboten. Daneben stehen „Plugin erstellen“ und „Plugin-Archiv hochladen“.
  - Der Testweg mit eigenem Server ist damit **ohne neues Abo offen**. Die Hilfeseite nennt nur Business und Enterprise/Edu, Petras Konto zeigt es trotzdem: Die Wirklichkeit ist hier weiter als die Doku.
  - Weiterhin gilt laut Doku: nur im Browser am Computer, nicht am Handy.
  - Eingetragen wurde nichts.

**Schritt 1, die Probe selbst** (erst nach Petras Freigabe zu bauen):
- **Ablauf:** Ein neuer Chat, Petra ruft das Plugin mit @ auf. Elsbeth spricht über ChatGPTs eigenes Modell mit dem Skill aus der heutigen Tisch-Anweisung. Daneben erscheint der Flur mit **einem** leeren Rahmen.
- **Vorschlag und Bild:** Schlägt Elsbeth eine Figur vor, ruft das Modell `figur_vorschlagen` auf, und im Rahmen erscheint das Namensschild mit „aufhängen“ und „anders nennen“. Drückt Petra „aufhängen“, erscheint das Porträt, und eine kurze Nachricht geht ins Gespräch.
- **Was wir messen**, in 10 Durchläufen mit den Sätzen aus Fall A des Katalogs:

| Messfrage | Wie gezählt |
|---|---|
| Ruft das Modell `figur_vorschlagen` jedes Mal auf, wenn es eine Figur nennt? | Treffer von 10 |
| Erscheint das Bild nach „aufhängen“ jedes Mal? | Treffer von 10 |
| Weiß Elsbeth danach, was hängt? | Treffer von 10 |
| Bleibt sie nach 8 Gastsätzen noch Elsbeth? | Petras Lesurteil |

- **Kosten der Probe:** keine API-Kosten. Petras eigener ChatGPT-Tarif trägt die Gespräche, falls der Testweg ohne neues Abo geht.
- **Abbruchregel:** Klappt schon dieser kleine Ablauf nicht in 9 von 10 Fällen, bauen wir das Abendessen nicht in ChatGPT.
- **Am Handy** lässt sich diese Probe nicht machen, denn private Tests gehen laut OpenAI nur im Browser.

---

## Prüfprotokoll
- **Deutsch-Tor:** laut gelesen; ganze Sätze; „du“ klein; Zahlen bis 10 als Ziffer; englische Fachwörter nur als Code oder in Klammern.
- **T1–T3:** keine Aussage über Petra; Nachteile stehen sachlich bei der Sache.
- **M1–M3:** Abschnitt 1 beantwortet die Hauptfrage in einem Satz; eine Handlung: Petra macht Schritt 0 und entscheidet über die Probe.
- **V1–V3:** Jede Aussage über OpenAI ist als 📄 mit Fundstelle oder als ❓ gekennzeichnet; die Cent-Beträge stammen aus den Messungen vom 29.10.
