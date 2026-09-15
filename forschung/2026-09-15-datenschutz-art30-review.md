# MORE IS YOURS – Datenschutz-Review Art. 30 / VVT

**Stand:** 15.09.2026  
**Status:** FACH-LAB / LEGAL REVIEW – NICHT PETRA APPROVED  
**Basis:** Dr.-Falk-Bericht 15.09.2026, zweite Runde; Verzeichnis von Verarbeitungstätigkeiten (Art. 30 DSGVO)

## 1. Gesamtbefund

Die Art.-30-Vorlage ist grundsätzlich brauchbar, aber **nicht unverändert freigabefähig**.

Vor der ersten fremden Testerin müssen mindestens folgende Punkte geklärt oder korrigiert werden:

1. DSB-/DSFA-Frage
2. Anthropic-Verarbeitungsorte
3. Vercel-DPA und tatsächlicher Vercel-Plan
4. OpenAI-ZDR nicht als gegeben darstellen
5. Aufbewahrungsfrist für Buchungsbelege korrigieren

---

## 2. DSB / Datenschutz-Folgenabschätzung

Die Formulierung

> „Datenschutzbeauftragte: keine Pflicht (unter 20 Personen, keine Kerntätigkeit Überwachung)“

ist derzeit **zu sicher formuliert**.

Nach § 38 Abs. 1 BDSG muss unabhängig von der Beschäftigtenzahl ein Datenschutzbeauftragter benannt werden, wenn Verarbeitungen vorgenommen werden, die einer Datenschutz-Folgenabschätzung nach Art. 35 DSGVO unterliegen.

Die DSK-Muss-Liste nennt ausdrücklich als DSFA-Fall:

> Einsatz von künstlicher Intelligenz zur Verarbeitung personenbezogener Daten zur Steuerung der Interaktion mit Betroffenen oder zur Bewertung persönlicher Aspekte.

Das passt in wesentlichen Teilen auf Ilse.

### Konsequenz

Bis zur formalen Prüfung darf im VVT nicht „keine Pflicht“ stehen.

Empfohlene Formulierung vorläufig:

> **Datenschutzbeauftragte/r: Pflicht derzeit in Prüfung. Wegen KI-gestützter Verarbeitung personenbezogener und teilweise besonderer Kategorien personenbezogener Daten wird die DSFA-Pflicht vor Start mit externen Nutzerinnen formal geprüft. Ergibt sich eine DSFA-Pflicht, ist § 38 Abs. 1 BDSG zu beachten.**

### Status

**LEGAL GAP / BLOCKER vor erster fremder Frau**

---

## 3. Art.-30-Verzeichnis

Dass ein Verzeichnis geführt werden sollte, ist richtig.

Die Kleinbetriebs-Ausnahme aus Art. 30 Abs. 5 DSGVO greift nicht, wenn besondere Kategorien personenbezogener Daten verarbeitet werden. Ilse kann Gesundheitsdaten, religiöse/weltanschauliche Angaben und andere Art.-9-Daten verarbeiten.

### Status

Art.-30-Verzeichnis: **erforderlich / weiterführen**.

---

## 4. Anthropic

Die Aussage

> „Anthropic, USA. Es gibt auf der API keine EU-Verarbeitung.“

ist nach aktuellem Anthropic-Stand nicht korrekt.

Anthropic erklärt aktuell:

- Verarbeitung kann in mehreren Regionen stattfinden, darunter USA, Europa, Asien und Australien.
- Standardspeicherung erfolgt weiterhin in den USA, sofern nichts anderes vereinbart ist.
- API-Eingaben/-Ausgaben werden standardmäßig innerhalb von 30 Tagen gelöscht, sofern keine andere Vereinbarung oder Ausnahme greift.
- Kommerzielle API-Daten werden standardmäßig nicht zum Modelltraining verwendet, außer bei ausdrücklichem Opt-in / Feedback-Sonderfällen.
- Das DPA mit SCCs ist automatisch in die Commercial Terms eingebunden.

### Empfohlene VVT-Formulierung

**Empfänger:** Anthropic (kommerzieller API-Dienst / Auftragsverarbeiter gemäß Vertragslage)

**Drittland / Verarbeitung:**
> Verarbeitung kann in mehreren Regionen einschließlich USA und Europa stattfinden; Standardspeicherung nach aktuellem Anthropic-Stand in den USA. Internationale Übermittlungen auf Basis des Anthropic-DPA einschließlich SCCs.

Nicht behaupten:
> „Keine EU-Verarbeitung“.

---

## 5. OpenAI / Diktat

OpenAI hat ein aktuelles DPA mit Wirkung ab 01.01.2026. Für EWR-Kunden wird es mit OpenAI Ireland Ltd. geschlossen; Weiterübermittlungen außerhalb EWR/Schweiz werden laut DPA über SCCs oder Angemessenheitsbeschlüsse abgesichert.

Für API-Inhalte gilt grundsätzlich eine mögliche Aufbewahrung von bis zu 30 Tagen, abhängig vom Endpunkt und der Konfiguration.

Zero Data Retention (ZDR) ist **nicht automatisch aktiv**. ZDR erfordert eine entsprechende Freischaltung/Qualifikation.

Audio-Transkriptions-Endpunkte sind laut OpenAI grundsätzlich ZDR-fähig, aber nur, wenn ZDR für die Organisation/das Projekt tatsächlich aktiviert wurde.

### Konsequenz

Im VVT darf nicht stehen oder impliziert werden, dass ZDR gilt, solange dies nicht im OpenAI-Account bestätigt ist.

Vorläufig:

> **OpenAI-ZDR: DATA GAP – im Account prüfen.**

Wenn nicht aktiv:

> mögliche API-Aufbewahrung nach aktuellem OpenAI-Stand bis zu 30 Tage.

---

## 6. Vercel

Die aktuelle Vercel-DPA gilt laut Vercel für **Pro- und Enterprise-Pläne**.

Daher muss vor Freigabe des VVT geklärt werden, welcher Vercel-Plan für Ilse tatsächlich genutzt wird.

### DATA GAP

- Vercel-Plan: Hobby / Pro / Enterprise?
- tatsächliche Runtime-Region?
- Log-Aufbewahrung abhängig vom Plan?

Aktuelle dokumentierte Runtime-Log-Fristen:

- Hobby: 1 Stunde
- Pro: 1 Tag
- Pro + Observability Plus: 30 Tage
- Enterprise: 3 Tage
- Enterprise + Observability Plus: 30 Tage

### Konsequenz

Die VVT-Zeile

> „Vercel: Server in EU-Region, Unternehmen USA — SCC im DPA“

nur stehen lassen, wenn Region und DPA-Anwendbarkeit für den verwendeten Plan tatsächlich belegt sind.

---

## 7. Supabase

Supabase bietet Frankfurt / `eu-central-1` als konkrete Region an. Die gewählte Region bestimmt die primäre Datenhaltung.

Das Supabase-DPA enthält SCC-Regelungen für internationale Übermittlungen.

### Wichtig

Im VVT darf „Frankfurt“ nur als Fakt stehen, wenn das konkrete Ilse-Projekt tatsächlich auf Frankfurt / `eu-central-1` läuft.

Wenn dies von Dr. Falk technisch bereits geprüft wurde, kann die Angabe bleiben.

---

## 8. Löschfrist Ilse-Konto / Gespräche

Der Vorschlag

> „90 Tage nach Ende des Zugangs“

ist eine **Produkt-/Datenschutzentscheidung**, keine gesetzlich feststehende Frist.

Er ist als Datenminimierungsansatz grundsätzlich plausibel, muss aber von Petra bewusst freigegeben werden und zu Nutzungsmodell, Support- und Nachweisbedarf passen.

### Status

**DECISION GAP – Petra-Freigabe nötig**

Vorläufig nicht als beschlossen eintragen.

---

## 9. Geschäfts-E-Mail / Aufbewahrung

Der Satz

> „Rechnungsbelege 10 Jahre (§ 147 AO)“

ist für 2026 so nicht mehr allgemein richtig.

Nach § 147 Abs. 3 AO und § 257 HGB gelten für Buchungsbelege grundsätzlich **8 Jahre**. Bestimmte andere Unterlagen bleiben 10 bzw. 6 Jahre aufbewahrungspflichtig.

### Korrektur

Im VVT besser:

> **Geschäftliche Korrespondenz nach festgelegtem Löschkonzept; steuer- und handelsrechtlich aufbewahrungspflichtige Unterlagen nach den jeweils geltenden gesetzlichen Fristen (Buchungsbelege grundsätzlich 8 Jahre).**

Die vorgeschlagenen 12 Monate für normale erledigte Anfragen sind wiederum eine interne Löschregel und brauchen Petras Freigabe.

---

## 10. Was bereits gut ist

- Krisenvermerk nur am einzelnen Zug, nicht als dauerhaftes Konto-Etikett.
- keine separate Liste „Frauen mit Krise“.
- Human-Design-Geburtsdaten werden für A-light nicht gespeichert.
- Audio wird bei More is Yours nicht selbst gespeichert.
- Frau kann ihr Konto selbst löschen; Kaskadenlöschung ist fachlich passend.
- Petra-Einträge müssen als „von Petra“ sichtbar bleiben.

---

## 11. Vorläufige Ampel vor externer Pilotin

### GRÜN

- Art.-30-Verzeichnis führen
- Art.-9-Einwilligung ausdrücklich vor Verarbeitung
- Krisenvermerk nur am Zug
- keine HD-Geburtsdaten in A-light

### GELB

- Löschfrist 90 Tage
- E-Mail-Löschfrist 12 Monate
- OpenAI-ZDR
- Vercel-Plan / Logfrist / Region
- Vertrags-/DPA-Nachweise und tatsächliche Annahmedaten

### ROT / MUSS VOR EXTERNER NUTZUNG GEKLÄRT WERDEN

- **DSFA-Pflicht / daraus mögliche DSB-Pflicht**
- **Vercel als Auftragsverarbeiter nur dann sauber dokumentieren, wenn verwendeter Plan vom DPA erfasst ist**

---

## 12. Petra muss nicht alles selbst suchen

Die verbleibenden accountbezogenen Fakten, die nicht aus öffentlichen Unterlagen ableitbar sind:

- konkreter Vercel-Plan
- konkrete Supabase-Projektregion, falls noch nicht technisch bestätigt
- OpenAI-ZDR aktiv: ja/nein
- tatsächliche Vertrags-/Account-Annahmedaten, soweit intern dokumentiert werden sollen

Alles andere wurde in diesem Review bereits fachlich korrigiert bzw. eingeordnet.

---

## 13. Quelle / Stand

Geprüft gegen aktuelle Primärquellen am 15.09.2026:

- DSGVO Art. 9, 30, 35, 37
- § 38 BDSG
- DSK-Muss-Liste DSFA
- § 147 AO
- § 257 HGB
- aktuelle OpenAI-DPA und API-Datenaufbewahrung
- Anthropic Privacy Center / DPA / Retention / Regionen
- Supabase DPA / Regionen
- Vercel DPA / Runtime-Log-Retention

**Hinweis:** Dieses Dokument ist eine fachliche Datenschutzprüfung im Projekt und ersetzt keine individuelle anwaltliche oder behördliche Rechtsberatung.
