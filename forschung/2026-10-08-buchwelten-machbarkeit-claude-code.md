# Aus Geschichten werden Bücher: technische Machbarkeit, KDP-Weg, Betrieb

**Datum:** 08.10.2026
**Status:** FACH-LAB-VORSCHLAG. Keine Produktentscheidung, keine Bau-Freigabe.
**Demonstrator:** `prototypen/entwurf-buchwelten/2026-10-08-buchwelten-demonstrator-DRAFT.html` (Status DRAFT)
**Erstellt von:** Claude Code (Mac). Baut auf der eigenen Vorentwicklung vom selben Tag auf:

| Datei | Thema |
|---|---|
| `forschung/2026-10-08-lebensbuch-konzept-ablauf-und-wartung.md` | Ablauf, Bauformen A/B/C, Tätigkeitssimulator |
| `forschung/2026-10-08-lebensbuch-wirtschaftlichkeit.md` | Rechnung pro Buch |
| `forschung/2026-10-08-lebensbuch-wettbewerb-und-druckpartner.md` | Wettbewerb, Druckpartner |
| `forschung/2026-10-08-lebensbuch-datenschutz.md` | Datenschutz, Recht |
| `prototypen/2026-10-08-lebensbuch-demonstrator-DRAFT.html` | erster Demonstrator, nur „Lebensbuch für die Eltern“ |

Diese Datei ersetzt keine der Dateien oben, sie **erweitert** sie um die neue Vision.

**Verbindliche Grundlagen (gelesen):**

| Datei | Status |
|---|---|
| `forschung/2026-10-08-buch-aus-jedem-lebensabschnitt-erweiterter-forschungsbrief.md` | PETRA APPROVED als Suchrichtung |
| `entscheidungen/2026-10-07-petra-taetigkeitsprofil-ko-filter.md` | PETRA APPROVED |
| `entscheidungen/2026-10-08-keine-wartungsintensive-spezialsoftware.md` | PETRA APPROVED |
| `forschung/2026-10-08-lebensbuecher-marktrecherche-chatgpt.md` | FACH-LAB-VORSCHLAG |
| `forschung/2026-10-08-lebensbuch-markt-und-wettbewerbsrecherche-fach-lab.md` | FACH-LAB-VORSCHLAG |

**Kennzeichnung:**

| Kürzel | Bedeutung |
|---|---|
| FAKT | Primärquelle |
| INDIKATOR | Sekundärquelle, Anbieter-Eigenangabe, Suchtreffer |
| ANNAHME | Rechengröße |
| HYPOTHESE | muss getestet werden |
| OFFEN | nicht gefunden |
| CONFLICT / DECISION GAP | Petra entscheidet |

**Methode:**
- Zwei parallele Rechercheläufe am 08.10.2026: Self-Publishing und KDP, Buchtechnik und Druck.
- Dazu die Ergebnisse der Vorentwicklung.
- Nichts bestellt, kein Konto angelegt, kein KDP-Konto benutzt.
- Seiten teils über Zusammenfassungswerkzeuge gelesen. **Preise und Limits vor jeder Entscheidung im Original gegenlesen.**

---

## 0. Das Wichtigste vorweg

1. **Technisch ist alles machbar, und die KI ist billig.**
   - Abschrift: rund 0,3–0,7 US-Cent pro Minute, also unter 1 $ für 2 Stunden Erzählung.
   - Ein Kapitel mit einem Sprachmodell: 0,3–5 US-Cent.
   - Teuer sind Druck, Versand, Support und Kundengewinnung, nicht die KI (FAKT, Anbieterpreise).
2. **Amazon KDP hat keine offizielle Schnittstelle**, über die ein Dienst für eine Autorin veröffentlichen könnte (INDIKATOR; ein Nichtvorhandensein lässt sich nicht beweisen).
   - Die KDP-Bedingungen verbieten Dritten die Nutzung fremder Konten: Ziffer 4.2 (FAKT).
   - Realistisch ist der Weg „Wir bereiten alles vor, du lädst selbst hoch“ (Kapitel 4).
3. **Die neue Vision (jedes Alter, jeder Lebensabschnitt) verändert den Markt, nicht die Technik.**
   - Für Ältere ist der Markt belegt (Storyworth, Remento, Meminto, StoryKeeper, MEMORiA).
   - Für jüngere Menschen und Lebensabschnitte habe ich **keinen** spezialisierten deutschen Anbieter gefunden. Dass sie dafür zahlen, ist aber ebenfalls **nicht belegt** (HYPOTHESE).
   - Gruppenbücher mit Online-Editor: in Deutschland ebenfalls nicht gefunden (INDIKATOR).
4. **Jede Buchwelt kostet eigene Pflege:** eigene Fragen, eigener Ton, eigene Vorlage, eigene Rechtsfragen. 5 Welten bedeuten nicht 5-fachen Markt, aber sicher 5-fache Pflege.
5. **Der Konflikt mit der Ausschlussregel vom 08.10. bleibt** (CONFLICT, Kapitel 8).
   - Ein Dienst, der Stimmen aufnimmt, Texte speichert, Gruppen verwaltet und Druckaufträge auslöst, ist Software mit Betrieb.
   - Mit wenig laufender Arbeit geht nur eine **einfachere Form** (Kapitel 9).

---

## 1. Die fünf Buchwelten (HYPOTHESEN, keine Produkte)

| Buchwelt | Wer erzählt | Wer kauft (vermutlich) | Besonderheit Technik | Besonderheit Recht | Marktbeleg |
|---|---|---|---|---|---|
| **Meine Geschichte** | eine Person, oft 65+ | oft die Kinder als Geschenk | Telefon und Sprache wichtig, wenig Tippen | Gesundheit und Herkunft Dritter (Art. 9 DSGVO) | **belegt** (Storyworth über 1 Mio. Bücher, Meminto, StoryKeeper) |
| **Ein Kapitel meines Lebens** | eine Person, jedes Alter | die Person selbst | kürzeres Buch (40–100 Seiten), schneller fertig | wie oben, oft Partner oder Kinder im Text | **nicht belegt**, kein spezialisierter Anbieter gefunden |
| **Unsere Geschichte** | mehrere (Freundinnen, Familie, Team) | eine Initiatorin oder alle anteilig | Einladungen, Rollen, Kommentare, Freigabe jeder erwähnten Person | Einwilligung **jeder** Person, Streit über Erinnerungen | Hinweise: Abizeitungen, Mixbook-Gruppenbücher. Deutscher Online-Editor für Gruppen-Erinnerungsbücher **nicht gefunden** |
| **Was ich weitergeben möchte** | eine Person, Lebensmitte und älter | die Person oder die Familie | Erkenntnisse statt Chronik, braucht Szenen als Beleg | gering, solange keine Dritten erkennbar sind | Ratgeber und Vermächtnis-Bücher existieren, als Produkt nicht geprüft |
| **Mein Buch für die Welt** | eine Person | die Person selbst | Druck-PDF nach KDP-Vorgaben, EPUB, Cover, Metadaten | **am höchsten:** Persönlichkeitsrecht Dritter (BVerfG „Esra“ 2007), Fotos (§ 22 KUG), Impressum, Pflichtexemplar, Buchpreisbindung | Self-Publishing-Markt groß (KDP, BoD, epubli, tredition). Begleitende Dienste existieren als Lektorat oder Agenturen |

**Schluss:**
- Am besten belegt ist „Meine Geschichte“, und genau dort sind die Wettbewerber.
- Am wenigsten besetzt sind „Ein Kapitel“ und „Unsere Geschichte“, aber dort fehlt auch der Zahlungsbeleg.
- „Mein Buch für die Welt“ ist rechtlich und vom Support her die anspruchsvollste Welt.

---

## 2. Technische Machbarkeit: die 10 Fragen

### 2.1 Per Sprache erzählen

| Weg | Wie | Kosten | Stärken | Schwächen |
|---|---|---|---|---|
| Aufnahme im Browser (MediaRecorder) + Abschrift | Knopf auf einer Webseite, Datei an Spracherkennung | Abschrift: gpt-4o-mini-transcribe ca. 0,003 $/min · Voxtral 0,003 $/min · AssemblyAI EU ca. 0,0035 $/min · gpt-4o-transcribe ca. 0,006 $/min (FAKT, Anbieterpreise) | billig, kein App-Download | Mikrofonrechte, alte Handys, abgebrochene Uploads (häufigster Support-Fall) |
| Sprachnachricht per WhatsApp | wie MEMORiA, Nachklang | Business-API-Kosten (nicht geprüft) | vertraut | setzt Smartphone voraus, Meta als Datenweg |
| Telefonanruf auf eine Nummer | Telefonie-Dienst nimmt auf | einige Cent pro Minute (ANNAHME) | auch ohne Smartphone | § 201 StGB: Aufnahme-Hinweis Pflicht |
| Spracherkennung lokal im Browser (whisper.cpp/WebGPU) | Daten verlassen das Gerät nicht | 0 € laufend | Datenschutz | schwere Downloads, schwache Geräte (INDIKATOR) |
| Echtzeit-Sprachinterview (KI spricht zurück) | OpenAI Realtime, ElevenLabs Agents, Deepgram Voice Agent | ca. 0,02–0,11 $/min, ElevenLabs 0,08 $/min + Sprachmodell (FAKT/INDIKATOR) | wirkt wie ein echtes Gespräch | 10–100-mal teurer als Abschrift, schwerer zu kontrollieren |

**Qualität Deutsch:**
- Fehlerquoten 4–10 % auf Standardsätzen (Herstellerangaben).
- Dialekt deutlich schlechter: Schweizerdeutsch 12–25 % (INDIKATOR).
- Bei Hochbetagten ist mit spürbar mehr Fehlern zu rechnen. Für Portugiesisch sind relativ +41 % belegt, für Deutsch gibt es keine Studie (OFFEN).

**Folgerung:** Die Abschrift muss immer sichtbar und korrigierbar sein. Vor einem Bau sollte ein Test mit 5–10 echten Aufnahmen über 2 Anbieter laufen.

**Empfehlung (SCHLUSS):** Nicht in Echtzeit sprechen lassen, sondern „aufnehmen, abschreiben, dann die nächste Frage stellen“. Das ist billiger, ruhiger und leichter zu prüfen.

### 2.2 KI geht auf Antworten ein und stellt Folgefragen

- **Machbar.** Es gibt Studien zu KI-Interviewern für Lebensgeschichten:
  - GuideLLM: 45 Personen, besser als allgemeine Modelle.
  - StorySage: 28 Personen, mehr Vollständigkeit, besserer Gesprächsfluss (FAKT, Abstracts).
- **Bewährtes Muster:** feste Grundfragen je Buchwelt plus 1–3 erzeugte Nachfragen. Wer erzählt, wählt eine aus oder überspringt (so im Demonstrator).
- **Nachfragen sollten begründet sein**, zum Beispiel „Du hast ‚zu fünft‘ gesagt, aber nur 2 Namen genannt“. Das macht Fragen nachvollziehbar und verhindert, dass die KI deutet.
- **Kosten:** ein Bruchteil eines Cents pro Frage.
- **Der eigentliche Wert liegt in den Fragenkatalogen je Buchwelt.** Das ist Petras Entwicklungsarbeit, keine Technik.

### 2.3 Fakten, Erzählstimme und Ausdrucksweise bewahren

**Befund:**
- Ein Audit von 366 KI-geschriebenen Erinnerungseinträgen zeigt das Risiko: 96,7 % fielen durch, typisch „echte Personen in erfundenen Szenen“ (FAKT, Abstract).
- Selbst mit dem echten Lebensmaterial als Grundlage blieben 83,3 % fehlerhaft.
- **Quellenbindung allein reicht also nicht.**

**Gegenmittel, kombiniert (SCHLUSS):**
1. **Wortwörtlich zuerst:** Die Abschrift bleibt immer sichtbar (Zwei-Spalten-Ansicht im Demonstrator).
2. **Nur kürzen, ordnen, Füllwörter entfernen.** Keine neuen Tatsachen hinzufügen.
3. **Quellen pro Satz:** Die Zitierfunktion von Claude verbindet jeden Satz mit der Stelle in der Abschrift (FAKT, Anthropic-Doku). Sätze ohne Beleg werden markiert.
4. **Faktenliste zum Abhaken:** Namen, Jahre, Orte werden einzeln bestätigt.
5. **Eigene Wendungen markieren und schützen** („wie wenn einer die Tür aufmacht“).
6. **Freigabe pro Kapitel** durch die Person, die erzählt hat.
7. **Option „nur meine Originalworte“** (wie Remento: Abschrift oder Erzählung wählbar).

### 2.4 Bearbeiten, ergänzen, freigeben

| Lösung | Aufwand |
|---|---|
| einfacher Editor mit Freigabe-Knopf pro Kapitel | gering bis mittel |
| Versionsverlauf („zurück zur Originalfassung“) | mittel |
| fertige Editoren: Tiptap (Start 49 $/Monat), Liveblocks (ca. 99 $/Monat) (INDIKATOR) | Kosten statt Eigenbau |

### 2.5 Fotos und Material

- Hochladen, Bildunterschrift, Zuordnung zum Kapitel.
- **Pflicht: Auflösung prüfen.** Für den Druck sind ≥ 300 DPI in Endgröße nötig (KDP-Vorgabe, FAKT). Unscharfe Bilder sind die häufigste Storyworth-Beschwerde (FAKT, Trustpilot).
- Abfotografierte Papierbilder: Zuschneiden, Gerade-Rücken.
- **Recht:** Recht am eigenen Bild (§ 22 KUG) gilt bei Veröffentlichung. Fotorechte Dritter. Minderjährige nur mit Einwilligung der Eltern.

### 2.6 Gemeinsam an einem Buch arbeiten

| Stufe | Wie | Aufwand | Vorbild |
|---|---|---|---|
| A Link zum Mitmachen | jede Person nimmt über einen Link auf, die Initiatorin sortiert | gering | Remento, Meminto (FAKT) |
| B Rollen | Herausgeberin, Mitschreibende, Lesende | mittel | Datenbank mit Rechteprüfung |
| C Kommentare und Freigaben | „War es nicht 1996?“, Freigabe aller erwähnten Personen | mittel bis hoch | Demonstrator zeigt es |
| D Gleichzeitig schreiben | Echtzeit-Mitbearbeitung | hoch | Reedsy Studio bietet das gratis (FAKT) |

**Was zusätzlich organisiert werden muss** (ANNAHME aus Ablauf):
- Einladungen und Erinnerungen, die nicht nerven (Remento-Beschwerde: zu viele Mails).
- Wer hat das letzte Wort?
- Was passiert, wenn eine Person ihre Zustimmung zurückzieht?
- Wer zahlt, und wer bekommt wie viele Exemplare?
- Getrennte Einwilligungen jeder Person.
- Abbrecher („Elif hat nie geöffnet“).
- Konflikte über Erinnerungen. Der Demonstrator zeigt dafür „mehrere Sichten“ als Lösung.

### 2.7 Automatisch ein hochwertiges Buchlayout

**Machbar mit Vorlagen.** Petra oder eine Gestalterin entwirft 2–3 Buchgestaltungen einmal. Der Satz füllt sie automatisch.

| Werkzeug | Druck-PDF | Kosten | Einordnung |
|---|---|---|---|
| **WeasyPrint** (HTML/CSS) | PDF/X-1a/X-3/X-4, CMYK, Anschnitt und Schnittmarken per CSS (FAKT, Doku) | Open Source | **stärkster Kandidat** |
| Vivliostyle | PDF/X-1a über „press-ready“ (Docker) | Open Source | Alternative |
| Paged.js | Anschnitt und Marken ja, CMYK nur per Nachbearbeitung | Open Source | Alternative |
| Typst | PDF/A, laut Doku **kein PDF/X** | Open Source | für Druck nur mit Umweg |
| Prince / DocRaptor | PDF/X | 495 $ Desktop bzw. ab 15 $/Monat als Dienst (INDIKATOR) | bezahlte Qualität |

**Typische Satzprobleme (SCHLUSS):** sehr lange oder sehr kurze Kapitel, Hoch- neben Querformat, einzelne Zeilen am Seitenende, Sonderzeichen. KDP lehnt z. B. mehr als 4 aufeinanderfolgende Leerseiten ab (FAKT).

**Folgerung:** Eine Vorschau mit Freigabe vor dem Druck ist Pflicht.

### 2.8 Exportformate

| Format | Wofür | Wie |
|---|---|---|
| PDF (Bildschirm) | Privatbuch zum Lesen und Teilen | WeasyPrint u. a. |
| Druckfertiges PDF | Druckerei, KDP Taschenbuch/Hardcover | Anschnitt 3,2 mm (0,125″), Schriften eingebettet, Bilder ≥ 300 DPI, Cover als eigenes PDF mit Rückenbreite nach Seitenzahl (FAKT, KDP-Hilfe) |
| EPUB 3 | E-Book für KDP, Tolino, Apple | Pandoc, geprüft mit EPUBCheck (FAKT/INDIKATOR) |
| DOCX | Weiterbearbeitung bei Lektorat | Pandoc |
| Audio-Archiv | Originalstimme als Erinnerung | **nur mit klarer Speicherdauer.** QR-Codes im Buch verpflichten zum Betrieb über Jahre |

### 2.9 Druck auf Bestellung

| Anbieter | Schnittstelle | Einzelstück | Druckort | Einordnung |
|---|---|---|---|---|
| **epubli** | **ja, Partner-API** (Preis berechnen, Auftrag mit PDF-Link, Status, Rückmeldung; Rechnung an den Partner) (FAKT, epubli-Doku) | ja | Deutschland (INDIKATOR) | **stärkster deutscher Kandidat**, PDF-Vorgaben nur auf Anfrage |
| **Lulu Print API** | ja, REST, Sandbox, keine Servicegebühr (FAKT) | ja | u. a. Frankreich, UK; **nicht Deutschland** | technisch ausgereift, Preise nur im Konto |
| Cloudprinter | ja | ja | Netz aus Druckereien, auch DE | Preise nur nach Registrierung |
| Prodigi (früher Peecho) | ja | ja, Fotobuch 24–300 S. | UK/EU | Fotobuch-Fokus |
| FLYERALARM PRO | ja, nur Reseller | ja | DE | 2.500 € Mindestumsatz netto/Monat (FAKT, Vorentwicklung) |
| Bookvault | ja | ja | **nur UK** (Zoll) | ungeeignet für DACH |
| BoD, tredition, WIRmachenDRUCK | **keine** belegte Schnittstelle | ja | DE | nur von Hand bestellbar |
| Amazon KDP | **keine** | nur Autorenexemplare eines veröffentlichten Buchs | nicht belegt | **kein Druckdienst für Privatbücher** |

**Preisanker (FAKT, KDP-Druckkostentabelle Amazon.de, gerechnet für 150 Seiten):**

| Ausstattung | Druckkosten |
|---|---|
| Taschenbuch schwarzweiß | ca. 2,55 € |
| Taschenbuch Standardfarbe | ca. 4,35 € |
| Hardcover schwarzweiß | ca. 6,45 € |
| Hardcover Premium-Farbe | ca. 13,20 € |

Das sind Amazons eigene Abzüge, keine Preise eines Druckauftrags. Für epubli, Lulu und Cloudprinter ließ sich ohne Konto **kein** Preis für dieselbe Ausstattung belegen (OFFEN).

### 2.10 Veröffentlichung über KDP und andere: siehe Kapitel 3 und 4

---

## 3. Amazon KDP: was tatsächlich möglich ist

| Frage | Befund | Status |
|---|---|---|
| Offizielle API zum Veröffentlichen für Dritte? | **Keine gefunden.** Es gibt nur Drittanbieter-Erweiterungen und Browser-Skripte. Kindle Create und Kindle Previewer sind Werkzeuge für die Autorin, keine Schnittstellen. | INDIKATOR |
| Darf ein Dienst im Konto der Autorin arbeiten? | **Nein.** „You may not permit any third party to use the Program through your account“ (Ziffer 4.2). Ein Konto pro Person. | FAKT (KDP-Bedingungen) |
| Was muss die Autorin persönlich tun? | Konto anlegen, Identitätsprüfung (EU), Steuerprofil, Bankverbindung, Titel anlegen, Dateien hochladen, KI-Angabe, Preis, „Veröffentlichen“ | FAKT |
| KI-Angabe | **KI-generiert** (Text von KI erstellt, auch wenn stark überarbeitet) muss angegeben werden. **KI-unterstützt** (eigener Text, von KI geglättet oder korrigiert) nicht. Grenzfall starkes Umformulieren: nicht definiert. | FAKT / OFFEN |
| Limits | 3 neue Titel pro Tag (2023). Laut aktueller Hilfeseite max. 2 neue Titel pro Format und Woche. Für eine Einzelautorin unerheblich. | FAKT/INDIKATOR |
| Dateien | eBook: EPUB, KPF, DOCX. Print: PDF mit Anschnitt, Schriften eingebettet, ≥ 300 DPI, ≥ 24 Seiten. Cover mit Rückenbreite. | FAKT |
| Hardcover | auf Amazon.de verfügbar, 75–550 Seiten, ohne Schutzumschlag, eigene ISBN pro Ausgabe | FAKT |
| Prüfdauer | laut deutscher KDP-Hilfe meist 3–10 Werktage, eBook-Aufbereitung bis 72 Std. | FAKT (Suchausschnitt) |
| Tantiemen | eBook 35 % oder 70 %. Print auf Amazon.de 50 % bis 9,98 €, 60 % ab 9,99 €, jeweils abzüglich Druckkosten | FAKT |
| ISBN | KDP-ISBN gratis (nur bei KDP gültig, Impressum „Independently published“). Eigene ISBN bei MVB: Stand 2022 einzeln 70 €, 10er 225 € zzgl. MwSt.; Preis 2026 OFFEN | FAKT/OFFEN |
| Deutsche Pflichten | Pflichtablieferung an die DNB (auch eBooks und Selbstverlag), Buchpreisbindung (auch eBooks), Impressum im Buch nach Landespressegesetz (Name und **Anschrift** der Verfasserin im Selbstverlag) | FAKT (Gesetze/DNB) |

---

## 4. Wie eine KDP-Anbindung funktionieren könnte (auf Petras Wunsch ergänzt)

Vorbemerkung: Eine „Anbindung“ im Sinne von „Knopf drücken, Buch erscheint bei Amazon“ gibt es offiziell nicht. Es gibt aber mehrere Stufen, wie nah ein Dienst an KDP heranrücken kann. **Nur die Stufen 1–3 sind ohne Konflikt mit den KDP-Bedingungen denkbar.**

### Stufe 1: „KDP-fertiges Paket“ (offiziell unbedenklich, empfohlen)

Der Dienst erzeugt alles, was KDP verlangt. Die Autorin lädt es selbst hoch.
- **Dateien:**
  - Innenteil-PDF im gewählten KDP-Format (z. B. 6×9″ / 15,24 × 22,86 cm) mit Anschnitt
  - Cover-PDF mit Rückenbreite nach KDP-Formel (Papierart × Seitenzahl)
  - EPUB 3, geprüft mit EPUBCheck
- **Automatische Prüfung vor dem Herunterladen:** Seitenzahl ≥ 24, keine 5 Leerseiten am Stück, nichts über den Rand, Bilder ≥ 300 DPI, Schriften eingebettet, Metadaten = Titelseite. Das vermeidet die häufigsten KDP-Ablehnungen (FAKT, KDP-Fehlerliste).
- **„Ausfüllhilfe“:** Titel, Untertitel, Beschreibung, 7 Stichwörter, 2–3 Kategorie-Vorschläge, Preisrechner (Druckkosten + Tantieme + Buchpreisbindung). Jeweils mit Kopierknopf in der Reihenfolge der KDP-Felder.
- **KI-Protokoll:** Welche Sätze hat die KI formuliert, welche nur geglättet? Daraus folgt eine Empfehlung für die KDP-Frage „KI-generiert ja/nein“. Die Antwort gibt die Autorin selbst.
- **Rechte-Checkliste:** erkennbare Dritte, Intimes, Krankheit, Kinder, Fotos mit Personen. Mit Einwilligungsvorlagen, die Dr. Falk formuliert.
- **Schritt-für-Schritt-Begleiter**, als Seite oder Video: Konto, Steuer, Upload, Vorschau, Probeexemplar, Veröffentlichen, danach DNB-Ablieferung innerhalb einer Woche.
- **Aufwand für den Dienst:** einmal bauen, gering pflegen. KDP ändert Vorgaben selten, aber es kommt vor.
- **Support:** „Wie mache ich das Steuerformular?“ ist der wahrscheinlichste Fall. Antwort: Verweis auf KDP-Hilfe, keine Steuerberatung.

### Stufe 2: „Geführter Upload, Autorin am Steuer“ (offiziell unbedenklich, technisch begrenzt)

- Der Dienst öffnet die passenden KDP-Seiten in einem neuen Fenster (normale Verlinkung).
- Daneben zeigt er, was in welches Feld gehört.
- Die Autorin kopiert und klickt selbst.
- **Keine Zugangsdaten, kein Fernsteuern, kein Browser-Skript.**
- Aufwand gering. Gefahr: KDP ändert die Oberfläche, dann muss die Anleitung angepasst werden.

### Stufe 3: Über einen offiziellen Vertriebspartner statt direkt bei KDP (offiziell, aber andere Rolle)

- **Draft2Digital** vertreibt eBooks unter anderem an Amazon, Tolino, Apple und Kobo (10 % Provision; INDIKATOR). Ein öffentliches API ist **nicht belegt**, also wieder Upload durch die Autorin.
- **PublishDrive** bewirbt ein **Publisher-API** für Massen-Upload und Verkaufsdaten, Vertrieb an über 400 Händler (INDIKATOR, Anbieterseite).
- **Folge:** Dann wäre der Dienst **Verlag bzw. Publisher** gegenüber der Plattform. Er hält das Konto, rechnet Tantiemen mit den Autorinnen ab, braucht Verlagsverträge, Steuer- und Rechteverwaltung, Buchpreisbindung und DNB-Ablieferung **für jedes Buch**.
- Ob Amazon-Print auf diesem Weg mitläuft, ist OFFEN.
- **Einordnung:** technisch eine echte Anbindung, wirtschaftlich ein **Kleinverlag mit Betriebsarbeit**. Das berührt die Ausschlussregel und den K.-o.-Filter (Administration, Abrechnung, Rechteverwaltung).

### Stufe 4: Eigenes Verlagskonto bei KDP (offiziell möglich, aber Betreiberrolle)

- Ein Verlag darf über **sein eigenes** KDP-Konto Bücher seiner Autorinnen veröffentlichen. Das machen Kleinverlage (INDIKATOR, allgemeine Praxis; Vertragsdetails nicht geprüft).
- Dann braucht es: Verlagsvertrag je Buch, Tantiemen-Weitergabe, Impressum mit Verlagsanschrift, ISBN-Block, Haftung für Inhalte (Persönlichkeitsrecht Dritter trifft den Verlag mit).
- **Einordnung:** möglich, aber das genaue Gegenteil von „wenig laufender Arbeit“.

### Stufe 5: Automatisches Hochladen in das KDP-Konto der Autorin (**nicht empfohlen, nicht sicher**)

- Technisch denkbar über Browser-Automatisierung oder Chrome-Erweiterungen, die es von Dritten gibt.
- **Verstößt gegen Ziffer 4.2** der KDP-Bedingungen (keine Nutzung durch Dritte). Bricht bei jeder Oberflächenänderung. Braucht die Zugangsdaten der Autorin, was ein Sicherheits- und Haftungsrisiko ist. Kann zur **Sperrung ihres Kontos** führen.
- **Wird hier ausdrücklich nicht als Lösung dargestellt.**

### Stufe 6: Offizielle Partnerschaft mit Amazon anfragen (offen)

- Ob Amazon ausgewählten Diensten eine Schnittstelle oder ein Partnerprogramm öffnet, ist **nicht öffentlich** (OFFEN).
- Klären ließe sich das nur durch eine direkte Anfrage. Das wäre ein Schritt nach außen, den Petra selbst entscheidet. Realistisch erst mit nennenswertem Volumen.

**Empfehlung (SCHLUSS):** Stufe 1 + 2. Damit wirkt der Weg zu KDP für die Autorin wie eine Anbindung, ohne dass der Dienst Konten, Tantiemen oder Rechte verwaltet. Stufe 3/4 nur, wenn Petra bewusst einen Kleinverlag führen will. Das wäre eine eigene Grundsatzentscheidung (DECISION GAP).

**Andere Wege, gleiches Prinzip (Autorin lädt selbst hoch):**

| Anbieter | Konditionen | ISBN |
|---|---|---|
| Tolino media | eBook bis 87 % Honorar, Print einmalig 18,90 € inkl. ISBN | im Print-Paket enthalten |
| epubli | Veröffentlichung kostenlos | ISBN gestellt |
| BoD | „Publish“ 39 € | ISBN enthalten, Druck in Deutschland |
| tredition | kostenlos | – |

Alle FAKT laut Anbieterseiten. Eine Upload-Schnittstelle für Dritte ist bei keinem belegt. Die einzige deutsche Schnittstelle, epubli, ist eine **Druck**-API, kein Veröffentlichungsweg.

---

## 5. Der Demonstrator (DRAFT)

**Datei:** `prototypen/entwurf-buchwelten/2026-10-08-buchwelten-demonstrator-DRAFT.html`. Eine einzige HTML-Datei, läuft lokal per Doppelklick. Keine Netzwerkanfragen, kein Mikrofon, keine KI, keine Speicherung.

| Schritt | Was man erlebt |
|---|---|
| 1 Buchwelt | 5 Welten mit erfundener Beispielperson (Gisela 78, Lena 34, 5 Freundinnen, Karim 61, Mira 45) |
| 2 Anlass | Anlass wählen, Kapitelthema, Hinweis bei Gruppen- und öffentlichen Büchern |
| 3 Erzählen | großer Knopf, simulierte Aufnahme, Abschrift erscheint. **Oder eigene Geschichte eintippen** (bleibt im Fenster) |
| 4 Nachfragen | 3 begründete Folgefragen (vorbereitet bzw. bei eigenem Text regelbasiert, als Simulation gekennzeichnet) |
| 5 Kapitel | wortwörtlich ↔ lesbar nebeneinander, eigene Wendungen markiert, Faktenliste zum Abhaken |
| 6 Bearbeiten | Text frei ändern, „nur meine Originalworte“, Freigabe. Bei „Unsere Geschichte“: Mitschreibende mit Status, Kommentar, Zustimmung |
| 7 Fotos | gezeichnete Beispielbilder, Warnung bei zu geringer Auflösung |
| 8 Vorschau | Doppelseite in 3 Gestaltungen (Klassisch, Modern, Album) |
| 9 Wohin? | Privatbuch · Geschenk · Veröffentlichung, mit dem realistischen KDP-Ablauf (Autorin lädt selbst hoch) |

Daneben steht bei jedem Schritt „Hinter den Kulissen“, getrennt nach drei Kategorien: technisch machbar, in der Demo simuliert, Aufwand/Risiko.

**Bewusst nicht im Demonstrator:** echte KI, echte Aufnahme, Speichern, Konten, Zahlung, Druck, KDP.

---

## 6. Wirtschaftlichkeit und Betrieb

### 6.1 Vorhandene Dienste statt Eigenbau

| Funktion | Fertig nutzbar? |
|---|---|
| Zahlung, Gutscheine | ja (Stripe, Digistore24, Copecart) |
| Abschrift, Sprachmodell | ja (API, Cent-Beträge) |
| Druck + Versand | ja (epubli-API, Lulu-API, Cloudprinter) |
| Buch setzen und exportieren, gemeinsam schreiben | **ja, für Selbermacherinnen:** Reedsy Studio gratis (EPUB, Druck-PDF, Echtzeit-Zusammenarbeit), Kindle Create gratis, Atticus 147 $ einmalig, Vellum ab 199,99 $ (nur Mac) (FAKT) |
| Mail-Erinnerungen | ja (Newsletter-Dienst) |
| **Das Zusammenspiel** (Aufnahme → Fragen → Kapitel → Freigabe → Satz → Druck) mit Konten und Gruppen | **nein, muss gebaut werden** |

### 6.2 Was tatsächlich entwickelt werden müsste (Variante „eigener Dienst“)
1. Konten, Projekte, Rollen (Gruppen), Einladungen, Einwilligungen
2. Aufnahme + Upload + Abschrift-Ablauf
3. Interview-Logik (Fragenkataloge je Buchwelt + Nachfragen)
4. Kapitel-Erzeugung mit Quellenbindung und Faktenliste
5. Editor mit Versionen und Freigaben
6. Foto-Upload mit Qualitätsprüfung
7. Satz-Vorlagen → Druck-PDF, Cover, EPUB, Prüfroutinen
8. Druckauftrag über API mit Status und Reklamation
9. Löschkonzept, Datenexport, Speicherdauer

**Einordnung:** Das ist eine vollwertige Webanwendung. Für ein marktfähiges Produkt mindestens mehrere Monate Entwicklung durch Fachleute (ANNAHME). Danach laufende Pflege.

### 6.3 Laufende technische Kosten (ANNAHME, Monat, ohne Druck)

| Posten | bei ca. 50 Büchern/Monat |
|---|---|
| Hosting, Datenbank, Speicher (EU) | 50–200 € |
| KI (Abschrift ca. 2 Std. + Kapitel), pro Buch ca. 1–3 € | 50–150 € |
| Mail-Dienst | 20–50 € |
| Editor-/Kollaborations-Dienst (falls gekauft) | 0–100 € |
| Technische Wartung und Störungsbehebung (Entwicklerin auf Abruf) | **500–2.000 €** |
| Support-Assistenz (Mails, Reklamationen) | 400–1.200 € |
| Rechtliche Grundausstattung (DSFA, AVV, AGB): einmalig 3.000–8.000 €, auf 24 Monate verteilt | 125–330 € |
| **Summe** | **ca. 1.150–4.000 €/Monat** |

**Pro Buch zusätzlich:**
- Druck Hardcover Farbe 150 S. ab ca. 13 € (KDP-Anker) bis 25–45 € (Spanne aus Vorentwicklung)
- Versand 3–7 €
- Zahlung 2–9 €

### 6.4 Wahrscheinliche Fehler- und Supportfälle

| Fall | Häufigkeit (SCHLUSS aus Wettbewerber-Bewertungen) |
|---|---|
| Aufnahme klappt nicht (Mikrofon, Browser, altes Handy) | hoch |
| „Mama antwortet nicht“, Buch bleibt halb fertig | hoch (Hauptproblem aller Anbieter laut Fach-Lab-Recherche) |
| Fotos zu dunkel/unscharf im Druck | mittel bis hoch |
| Lieferverzug, beschädigtes Paket, Nachdruck | mittel |
| „Die KI hat das falsch verstanden“, Ton passt nicht | mittel |
| Gruppen: jemand zieht Zustimmung zurück, Streit über Inhalte | mittel |
| Veröffentlichung: Fragen zu KDP-Steuer, Ablehnung durch KDP, Rechte Dritter | mittel |
| Löschanfragen, Datenauskunft | gering, aber mit Frist |

### 6.5 Vier Wochen Urlaub

| Variante | Was passiert | Urteil |
|---|---|---|
| **Eigener Dienst (A)** | Störungen, Druckreklamationen und Fristen (Datenschutz 1 Monat) laufen weiter. Braucht Vertretung für Technik **und** Support. In der Saison (Nov./Dez., April/Mai) kaum möglich. | **nur mit Team** |
| **Handarbeit mit Lektorat (B)** | Bücher in Arbeit stehen still oder Lektorinnen arbeiten weiter | **nur mit Vertretung** |
| **Methode + fertige Werkzeuge (C, Kapitel 9)** | Material verkauft sich weiter. Inhaltliche Fragen beantwortet eine FAQ, Antworten nach dem Urlaub | **möglich** |

### 6.6 Geht das mit wenig laufender persönlicher Arbeit?

- **Als eigener Dienst: nein.** Selbst mit fertigen Bausteinen bleiben Betrieb, Support, Druckreklamationen und Datenschutz. Das berührt die Ausschlussregel (CONFLICT).
- Möglich wäre es nur, wenn ein **Technik- und Betriebspartner** dauerhaft verantwortet, und Petra Inhalte, Fragen und Qualität führt. Das ist eine Partnerentscheidung (DECISION GAP).

---

## 7. Gibt es ein deutlich einfacheres Produkt? (Prüfung)

| Variante | Was es ist | Technik | Laufende Arbeit | Gratis-Check | Einschätzung |
|---|---|---|---|---|---|
| **C1 „Buchwelten-Werkstatt“** (Methode + Vorlagen) | Fragenkataloge und Erzählanstöße je Buchwelt, Anleitung „mit deinem Handy aufnehmen, abschreiben lassen, in Reedsy/Vorlage setzen, bei epubli oder KDP drucken“, fertige Buchvorlagen | keine eigene | gering | hart: Fragebücher kosten 20–30 €, Fragenlisten sind gratis. Der Wert muss in **Qualität der Fragen** und im **geführten Weg bis zum fertigen Buch** liegen | **wirtschaftlich klein, aber betriebsarm** |
| **C2 „Interviewer-Prompts“** | sorgfältig gebaute Anleitungen für ChatGPT/Claude im Sprachmodus, die genau so nachfragen wie im Demonstrator, plus Vorlage | keine eigene | gering | Prompts lassen sich kopieren und sind schwer zu schützen | als Zugabe, nicht als Kern |
| **C3 Lizenz an einen bestehenden Anbieter** | Petras Fragenkataloge (z. B. „Ein Kapitel meines Lebens“) an Meminto o. ä. lizenzieren | keine | sehr gering | – | **risikoärmster Test, ob die Fragen etwas wert sind** |
| **C4 Gruppenbuch-Anleitung** | „So macht ihr als Freundinnen ein Buch“: Rollen, Ablauf, Einwilligungs-Vorlage, Reedsy für gemeinsames Schreiben (gratis), Druck bei epubli | keine | gering | Anleitungen existieren verstreut | prüfenswert, weil Gruppenbücher kaum besetzt sind |

**SCHLUSS:**
- Ein einfacheres Produkt ist **betrieblich deutlich sinnvoller** und passt zur Ausschlussregel.
- **Wirtschaftlich** erreicht es allein aber eher Hunderte bis wenige Tausend Euro im Monat als 10.000 €+. Das ist eine Hochrechnung aus Preisankern, nicht belegt.
- Das teure, begehrte Teil, das fertige gedruckte Buch, bleibt dann bei den Kundinnen bzw. den Druckereien.

---

## 8. Konflikte und offene Entscheidungen (nicht von Claude aufzulösen)

| # | Thema | Art |
|---|---|---|
| K1 | Ein eigener Buchdienst ist Software mit Betrieb. Widerspricht `2026-10-08-keine-wartungsintensive-spezialsoftware.md` | **CONFLICT** |
| K2 | HELGA-Pilot Etappe 1 bis 29.10.: „keine App bauen, kein neues Projekt“. Der Demonstrator ist nichtproduktiv. Ein Bau vor dem 29.10. würde die Leitplanke berühren. | **CONFLICT** |
| E1 | Welche Buchwelt zuerst, oder nur eine? | DECISION GAP |
| E2 | Betreiberrolle: Partner, der Technik und Support trägt, oder nur die einfache Form (Kapitel 7)? | DECISION GAP |
| E3 | KDP-Weg: Stufe 1+2 (Autorin lädt hoch) oder bewusst Kleinverlag (Stufe 3/4)? | DECISION GAP |
| E4 | Stimme speichern (QR-Code, Langzeitpflicht) oder nur Text? | DECISION GAP |
| E5 | Tätigkeitssimulator: Welche Arbeitswoche will Petra ausprobieren? (Vorentwicklung, Abschnitt 5) | DECISION GAP |

---

## 9. Größte Risiken

1. **Betriebslast statt Freiheit:** Ein Dienst mit Stimme, Gruppen, Druck und Veröffentlichung erzeugt Support an vielen Stellen gleichzeitig (Kapitel 6.4).
2. **Erfundene Details:** Ohne strenge Quellenbindung und Freigabe entstehen falsche Erinnerungen in einem Buch, das bleibt (Audit: 83,3 % Fehler selbst mit Quellen).
3. **Rechte Dritter beim öffentlichen Buch:** Erkennbare Personen, Intimes, Krankheit („Esra“-Maßstab). Bei Stufe 3/4 haftet der Dienst als Verlag mit.
4. **Markt in der Kernwelt besetzt:** Meminto (99–397 €), StoryKeeper, MEMORiA, Remento, Storyworth. Die neuen Welten sind unbesetzt, aber auch unbelegt.
5. **Pflege mal 5:** Jede Buchwelt braucht eigene Fragen, Vorlagen und Regeln.
6. **Kundengewinnung unter 0 € Werbung:** Geschenkmärkte laufen über Saisonwerbung. Ohne bezahlte Werbung fehlt ein belegter Kanal.
7. **KDP-Abhängigkeit:** Amazon ändert Vorgaben (KI-Angabe, Limits, Formate), ohne dass ein Dienst Einfluss hat.

---

## 10. Vorschlag für den nächsten kleinsten Schritt (keine Freigabe)

1. **Petra klickt den Demonstrator durch** (alle 5 Welten, einmal mit eigener Geschichte) und sagt, welche Welt sie berührt und welche nicht.
2. **Tätigkeitssimulator beantworten** (E5): Welche Woche möchte sie ausprobieren?
3. **Ohne Technik testen**, falls gewünscht und nach dem 29.10. oder als Pilot-Schritt (E7 der Vorentwicklung):
   - 3 Menschen unter 60 erzählen je ein Kapitel ihres Lebens per Sprachnachricht.
   - Petra stellt die Nachfragen.
   - Das Kapitel entsteht mit KI-Hilfe und wird von Hand gesetzt.
   - Gemessen wird: Erzählen sie gern? Wie lange dauert es? Was würden sie für ein gedrucktes Buch zahlen? Würden sie es veröffentlichen wollen?
   - Vorher: Einwilligungstext von Dr. Falk.
4. **Drei Druckangebote** für dieselbe Ausstattung (epubli, Lulu, Cloudprinter), wenn Petra die Konten selbst anlegt.

---

## Quellen (Auswahl)

**KDP:** https://kdp.amazon.com/en_US/help/topic/G200672390 (KI) · https://kdp-eu.amazon.com/agreement (Bedingungen) · https://kdp.amazon.com/help/topic/GAVW3FZZAKA2KY3B (Hardcover) · https://kdp.amazon.com/en_US/help/topic/G201857950 (Druckdateien) · https://kdp.amazon.com/en_US/help/topic/G201834260 (Fehler) · https://kdp.amazon.com/de_DE/help/topic/G201834340 (Druckkosten) · https://kdp.amazon.com/de_DE/help/topic/GHT976ZKSKUXBB6H (Hardcover-Druckkosten) · https://kdp.amazon.com/en_US/help/topic/G201834170 (ISBN) · https://kdp.amazon.com/help/topic/G200641090 (Steuer)

**Self-Publishing:** https://www.tolino-media.de/ · https://www.bod.de/ · https://www.epubli.com/ · https://www.epubli.de/documentation/api/overview · https://tredition.com/ · https://www.draft2digital.com/steps · https://www.lulu.com/de/sell/sell-on-your-site/print-api · https://publishdrive.com/publishdrive-vs-ingramspark-2026-pricing-royalties-distribution-and-features-compared.html

**Formalien und Recht:** https://www.german-isbn.de/isbn/preise-und-pakete · https://www.dnb.de/DE/Professionell/Sammeln/sammeln_node.html · https://lxgesetze.de/buchprg/5 · https://lorenz.userweb.mwn.de/urteile/1bvr1783_05.htm (Esra)

**Technik:** https://developers.openai.com/api/docs/pricing · https://www.assemblyai.com/pricing.md · https://deepgram.com/pricing · https://docs.mistral.ai/inference/pricing · https://elevenlabs.io/pricing/api · https://platform.claude.com/docs/en/build-with-claude/citations · https://doc.courtbouillon.org/weasyprint/stable/api_reference.html · https://pandoc.org/ · https://www.w3.org/publishing/epubcheck · https://arxiv.org/abs/2608.23640 · https://arxiv.org/abs/2506.14159 · https://arxiv.org/abs/2502.06494

**Werkzeuge und Wettbewerb:** https://reedsy.com/studio · https://atticus.io/ · https://vellum.pub/ · https://meminto.com/de · https://www.remento.co/ · https://help.storyworth.com/en_US/printing-books/what-costs-are-involved-with-printing-books
