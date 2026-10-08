# Lebensbuch – Konzept: Ablauf, Wartungslast, Tätigkeitssimulator

**Stand:** 8. Oktober 2026
**Status:** FACH-LAB-VORSCHLAG – keine Produktentscheidung, keine Bau-Freigabe
**Erstellt von:** Claude Code (Vorentwicklung und Machbarkeitsprüfung)
**Grundlage (PETRA APPROVED):**
- `forschung/2026-10-08-vier-digitale-produktspuren-recherchebrief.md`
- `entscheidungen/2026-10-07-petra-taetigkeitsprofil-ko-filter.md`
- `entscheidungen/2026-10-08-keine-wartungsintensive-spezialsoftware.md`

**Zugehörige Dateien dieser Prüfung**
- `forschung/2026-10-08-lebensbuch-wettbewerb-und-druckpartner.md` (Wettbewerb, Druck)
- `forschung/2026-10-08-lebensbuch-wirtschaftlichkeit.md` (Rechnung pro Buch)
- `forschung/2026-10-08-lebensbuch-datenschutz.md` (Recht, Risikolandkarte)
- `prototypen/2026-10-08-lebensbuch-demonstrator-DRAFT.html` (anklickbarer Ablauf, erfundene Daten)

**Kennzeichnung:** FAKT (belegt, Quelle in den Schwesterdateien) · SCHLUSS (Ableitung) · HYPOTHESE (muss getestet werden) · ANNAHME (Rechengröße).

---

## 0. Das Wichtigste vorweg

1. **Ein Lebensbuch-Dienst wie Storyworth ist im Kern Software mit Betrieb.** Aufnahme, Speicherung, Abschrift, Buchsatz, Druckauftrag und Kundenkonto müssen dauerhaft laufen. Das berührt die Ausschlussregel vom 08.10. direkt. → **CONFLICT**, siehe Abschnitt 4. Petra entscheidet, nicht diese Datei.
2. **Es gibt Bauformen mit deutlich weniger Technik** (Abschnitt 3, Variante B und C). Sie verschieben Arbeit von Software zu Handarbeit oder zu fertigen Fremddiensten.
3. **Der Engpass ist nicht die KI.** Sie kostet pro Buch 1–3 US-Dollar (FAKT, Preise der Anbieter). Der Engpass sind Druckpartner mit Schnittstelle, Datenschutz bei Familiengeschichten und Support für ältere Menschen.

---

## 1. Der Ablauf, so einfach wie möglich

| # | Schritt | Wer | Was sie erlebt | Was technisch nötig wäre |
|---|---|---|---|---|
| 1 | **Verschenken** | Tochter/Sohn (35–55) | wählt Paket, Startdatum, schreibt Gruß | Shop + Zahlung + Gutschein |
| 2 | **Einladung** | Erzählerin (70+) | bekommt Mail oder Postkarte, willigt **selbst** ein | Mailversand, Einwilligungsnachweis |
| 3 | **Fragen erhalten** | Erzählerin | jede Woche eine Frage | zeitgesteuerter Versand |
| 4 | **Per Sprache erzählen** | Erzählerin | ein großer Knopf oder eine Telefonnummer | Aufnahme im Browser oder Telefonie, Speicherung |
| 5 | **Text überprüfen** | Erzählerin oder Angehörige | sieht „wortwörtlich" neben „geglättet", ändert | Spracherkennung + KI-Glättung + Editor |
| 6 | **Fotos ergänzen** | meist die Angehörigen | Papierfoto abfotografieren, Unterschrift | Upload, Auflösungsprüfung |
| 7 | **Buchvorschau** | alle | blättert durchs Buch, gibt frei | automatischer Buchsatz (PDF) |
| 8 | **Optional Druck** | Schenkende | wählt Einband, Anzahl | Druck-Schnittstelle, Versand, Sendungsnummer |

**Gestaltungsregeln, die aus den Schwächen der Wettbewerber folgen** (SCHLUSS aus Bewertungen, siehe Wettbewerbsdatei):
- **Erzählen ohne App, ohne Passwort.** Meminto wird als „App-first, für Senioren hürdenreich" kritisiert; Remento wirbt genau mit „ohne Login".
- **Telefon als vollwertiger Eingang**, nicht als Aufpreis. Die deutschen Anbieter Nachklang und MEMORiA setzen auf WhatsApp – das schließt alle ohne Smartphone aus. HYPOTHESE: Festnetz-Erzählen ist die echte Lücke.
- **Original-Ton bleibt erkennbar.** Die belegte Kritik an KI-Umschreibung („klingt nicht mehr nach ihr") macht die Zwei-Spalten-Ansicht (wortwörtlich ↔ geglättet) zum Kern, nicht zur Zugabe.
- **Wenige, freundliche Erinnerungen.** Remento-Beschwerde: zu viele Erinnerungs-Mails.
- **Fotoqualität vor dem Druck prüfen.** Häufigste Storyworth-Beschwerde: dunkle, unscharfe Bilder im Buch.
- **QR-Code mit Stimme nur mit klarem Haltbarkeitsversprechen** – oder gar nicht. Ein QR-Code verpflichtet dazu, Audio über Jahre erreichbar zu halten (dauerhafte Betriebslast, Meminto-Kritik „QR-Links hängen am Firmenserver").

---

## 2. Technische Machbarkeit

**Machbar ist alles davon.** Es gibt für jeden Schritt fertige Bausteine (FAKT für Spracherkennung, Zahlung, Druck-APIs; Einzelheiten in den Schwesterdateien). Die Frage ist nicht „geht das", sondern „wer betreibt es danach".

| Baustein | Fertig kaufbar? | Eigenbau nötig? | Störanfälligkeit (SCHLUSS) |
|---|---|---|---|
| Shop + Zahlung | ja (Stripe, Digistore24, Copecart) | nein | niedrig |
| Fragenversand per Mail | ja (Newsletter-Dienst mit Automationen) | Vorlagen | niedrig–mittel (Spam, falsche Adressen) |
| Aufnahme im Browser | teilweise | ja | **hoch** – alte Handys, Browser-Rechte, abgebrochene Uploads |
| Aufnahme per Telefon | ja (Telefonie-Dienste) | Anbindung | mittel–hoch, plus Recht (§ 201 StGB) |
| Abschrift + Glättung | ja (AssemblyAI EU, Mistral u. a.) | Prompt + Ablauf | niedrig, aber Qualität muss überwacht werden |
| Editor zum Prüfen | nein | ja | mittel |
| Foto-Upload + Prüfung | teilweise | ja | mittel |
| Buchsatz → Druck-PDF | Bausteine ja | Vorlage einmal bauen | mittel (Sonderzeichen, lange Kapitel, Bildformate) |
| Druck + Versand | ja, wenige Anbieter mit API | Anbindung | mittel (Reklamationen landen bei der Verkäuferin) |
| Kundenkonto, Löschung | nein | ja | mittel |

**SCHLUSS:** Ein vollautomatischer Dienst bedeutet mindestens 5 selbst gebaute Teile, die zusammenspielen müssen. Das ist eine Webanwendung mit Datenbank – genau die Kategorie, die Petra ausgeschlossen hat.

---

## 3. Drei Bauformen – von „viel Technik" bis „fast keine"

### Variante A – Vollautomatischer Dienst (Storyworth-Prinzip)
Alles aus Abschnitt 1, ohne menschliche Handgriffe pro Kundin.
- **Wartung:** hoch. Eigene Webanwendung, Datenbank, Speicher für Audio, Druck-Schnittstelle, Kundenkonten, Löschprozesse.
- **Support:** dauerhaft, oft technisch („Knopf geht nicht", „Mikrofon nimmt nicht auf").
- **Passt zur Ausschlussregel?** **Nein** (SCHLUSS). Nur denkbar, wenn jemand anderes den Betrieb verantwortet (siehe Entscheidung E3).

### Variante B – „Fertige Teile, Handarbeit dazwischen" (Concierge)
Keine eigene Software. Stattdessen:
- Kauf über einen fertigen Zahlungsdienst.
- Fragen kommen per **gedruckter Postkarte im Paket** (alle 52 auf einmal) oder per Newsletter-Automation.
- Erzählen per **Anruf auf eine Mailbox-Nummer** oder Sprachnachricht – eingesammelt in einem fertigen Dienst.
- Abschrift + Glättung: halbautomatisch mit KI, von einer Lektorin geprüft.
- Buchsatz: feste Vorlage (z. B. in einem Layoutprogramm oder einer Druckerei-Software), von Hand befüllt.
- Druck: Bestellung von Hand bei einer Druckerei mit Einzelstückdruck.
- **Wartung:** niedrig (nur fertige Dienste). **Arbeit pro Buch:** hoch, ANNAHME 3–6 Stunden Lektorat und Satz.
- **Preis muss dann höher liegen** – zwischen den 69–150-€-Selbermach-Diensten und dem Ghostwriter (Wettbewerbsdatei: nur ein Fund in dieser Lücke, „Lebensbuch" AT ab 399 €, Stand 2022).
- **Passt zur Ausschlussregel?** Ja, technisch. **Aber:** Es entsteht eine Dienstleistung mit Ergebnisverantwortung pro Familie – laut Tätigkeitsprofil (Abschnitt 6) die belastende Kombination aus direkter Bezahlung, individueller Ergebnisverantwortung und hohem Qualitätsanspruch. Übertragbar nur, wenn Lektorinnen die Bücher machen.

### Variante C – Methode + Vorlage, ohne Dienstbetrieb
Petra entwickelt **die Methode** (Fragenkatalog, Erzählanleitung, Gesprächsleitfaden für Angehörige, Buchvorlage) und verkauft sie als digitales Paket oder Kurs. Die Familie nimmt selbst auf (Handy), nutzt selbst eine kostenlose oder günstige Abschrift, setzt das Buch in der Vorlage und bestellt selbst bei einem Fotobuch- oder Buchdruckanbieter.
- **Wartung:** fast null. **Support:** inhaltlich, kaum technisch.
- **Gratis-Check (Grundregel 6) ist hier hart:** Papier-Fragebücher kosten 20–30 € (FAKT, „Das Familienbuch" 29,99 €). Eine Familie kann Fragen allein googeln. HYPOTHESE: Der Wert liegt nur dann in der Methode, wenn sie mehr kann als Fragen – zum Beispiel Erzähl-Anstöße, die Erinnerungen wirklich öffnen, und eine Anleitung, wie Angehörige gut zuhören.
- **Passt zur Ausschlussregel?** Ja.
- **Passt zum Tätigkeitsprofil?** Hoch: entwickeln, testen, Multiplikatorinnen ausbilden (z. B. Biografiearbeit in Pflege, Hospiz, Seniorenarbeit).

### Wartungs- und Supportlast im Vergleich (Punkt 7 des Auftrags)

| | A Vollautomat | B Concierge | C Methode + Vorlage |
|---|---|---|---|
| Eigene Software | ja, mehrere Teile | nein | nein |
| Technische Störungen pro Monat (ANNAHME bei 50 Büchern/Monat) | regelmäßig, 5–15 Fälle | selten, 1–3 | kaum |
| Support-Art | technisch + Lieferung | Lieferung + Inhalt | Inhalt |
| Daten, die Petra verwahrt | Stimme, Texte, Fotos, Adressen über Monate | dieselben, aber kürzer | **keine** Erzähldaten |
| Datenschutz-Aufwand | hoch | hoch | niedrig |
| Arbeit pro Buch | Minuten | Stunden | null |
| Realistisch „wartungsarm"? | **nein** | **ja, aber arbeitsintensiv** | **ja** |

**Ehrliche Antwort auf die Frage „Wie wenig Wartung ist realistisch?":** Ein Dienst, der Stimme aufnimmt und Bücher automatisch druckt, kommt **nicht** auf nahe null. Selbst mit fertigen Bausteinen bleiben: Mails, die nicht ankommen; Aufnahmen, die nicht klappen; Fotos, die unscharf sind; Pakete, die verloren gehen; Löschanfragen. Bei Storyworth-ähnlichen Diensten entsteht laut den Bewertungen der größte Ärger genau dort (FAKT, Trustpilot-Beschwerden). Nahe null kommt nur Variante C, weil dort keine Kundendaten und kein Druckauftrag durch Petras Hände laufen.

---

## 4. Konflikt mit bestehenden Entscheidungen

**CONFLICT 1 – Ausschlussregel 08.10.2026.** Die Regel schließt Geschäfte mit Spezialsoftware aus, „das laufenden technischen Support, Updates, Störungsbehebung oder Kundeneinzelfälle verlangt". Variante A erfüllt diese Beschreibung. Diese Datei löst den Konflikt **nicht** auf. Mögliche Wege nennt Entscheidung E1.

**CONFLICT 2 – HELGA-Pilot, Etappe 1 bis 29.10.2026.** Die Leitplanken des Pilots sagen „kein anderes neues Projekt eröffnen" und „keine App bauen". Diese Prüfung ist Recherche im Rahmen der freigegebenen Suchrichtung vom 08.10., kein Bau. Ein echter Bau vor dem 29.10. würde die Leitplanke berühren. → DECISION GAP, siehe E7.

**Korrektur einer früheren Annahme.** Die Marktrecherche vom 08.10. schrieb: „in DACH ohne klaren digitalen Marktführer gefunden". Die Vertiefung zeigt: **Meminto** (deutsche GmbH, „Die Höhle der Löwen", über 22.000 Autorinnen laut Eigenangabe), **Nachklang** und **MEMORiA Books** (Köln, EXIST-gefördert, Server in Deutschland) bieten genau dieses Produkt auf Deutsch bereits an (FAKT, Wettbewerbsdatei). Einen klaren Marktführer gibt es weiterhin nicht – aber die Grundidee ist besetzt.

---

## 5. Tätigkeitssimulator (Pflicht laut K.-o.-Filter, Abschnitt 9)

*Wenn Petra das Lebensbuch-Geschäft schon hätte – wie sähe eine normale Woche aus?* Jeweils für die zwei Varianten, die die Ausschlussregel nicht verletzen.

### Variante B – Concierge (Jahr 2, ca. 30 Bücher im Monat)

| Tag | Was Petra tatsächlich tut |
|---|---|
| Mo | Postfach: 15–25 Kundenmails („Wann kommt das Buch?", „Mama will Kapitel 3 umschreiben", „Foto vergessen"). Zwei Reklamationen klären. |
| Di | Lektorat: 2 Bücher gegenlesen, Ton prüfen („klingt das noch nach dem Vater?"), Rückfragen an Familien. |
| Mi | Mit den Lektorinnen sprechen, Qualität sichern, schwierige Fälle (Verstorbene, Streit in der Familie, sehr persönliche Inhalte). |
| Do | Druckaufträge freigeben, Lieferstatus prüfen. Werbung für Muttertag/Weihnachten vorbereiten. |
| Fr | Fragenkatalog verbessern, neue Themenbücher entwickeln (z. B. „Liebesgeschichte", „Gedenkbuch"). |

- **Wer verkauft?** Werbung an Kinder 35–55, stark saisonal (Weihnachten, Muttertag). Petra oder bezahlte Kanäle (0-€-Werbung ist im Workspace bindend → Kanal offen).
- **Was wiederholt sich?** Lektorat, Kundenmails, Lieferprobleme.
- **Was kann jemand anderes übernehmen?** Lektorat und Satz – mit Personalkosten.
- **Ehrliche Einordnung:** Viel individuelle Ergebnisverantwortung („unser Buch ist nicht schön geworden" trifft ins Herz einer Familie). Saison-Spitzen statt gleichmäßiger Arbeit.

### Variante C – Methode + Vorlage (Jahr 2)

| Tag | Was Petra tatsächlich tut |
|---|---|
| Mo–Mi | Methode weiterentwickeln: Erzählfragen, die wirklich Erinnerungen öffnen; Anleitung für Angehörige; neue Themen (Großeltern-Enkel, Paare, Gedenken). Recherche: Biografiearbeit, Erinnerungsforschung. |
| Do | Pilotgruppe oder Austausch mit Multiplikatorinnen (z. B. Seniorenbegleiterinnen, Hospizhelferinnen, Biografiearbeiterinnen). |
| Fr | Inhaltliche Fragen beantworten, Material verbessern, ggf. Schulung für Multiplikatorinnen. |

- **Wer verkauft?** Produkt über Shop/Plattform; Multiplikatorinnen tragen es weiter. Gratis-Konkurrenz (Fragenlisten, Papierbücher) drückt den Preis.
- **Was wiederholt sich?** Wenig. Material wird einmal gebaut.
- **Ehrliche Einordnung:** Nah an Petras Kernrolle (entwickeln, testen, befähigen). Wirtschaftlich schwächer, weil das teure, begehrte Teil – das fertige Buch – nicht mitverkauft wird.

**Frage an Petra (nicht von Claude zu beantworten):** Bei welcher der zwei Wochen sagst du „Ja, das möchte ich ausprobieren"? Laut Filterregel bekommt die Spur nur dann weitere Recherchezeit.

---

## 6. Entscheidungen, die Petra vor einem echten Bau treffen müsste

| # | Entscheidung | Warum sie vorher fallen muss |
|---|---|---|
| **E0** | **Tätigkeitssimulator:** Welche Woche (B oder C) möchtest du ausprobieren – oder keine? | K.-o.-Filter vom 07.10.: ohne „Ja" keine weitere Recherche. |
| **E1** | **Betreiberrolle:** Variante A nur mit Partnerin/Partner, der Technik und Support dauerhaft verantwortet – oder nur B/C? | Ausschlussregel vom 08.10. (CONFLICT 1). |
| **E2** | **Positionierung gegen Meminto, Nachklang, MEMORiA:** Was ist anders? Kandidaten (HYPOTHESEN): Festnetz-first für Menschen ohne Smartphone · lektorierter Mittelweg 250–450 € · Methode/Gesprächsanleitung statt Software · Multiplikatorinnen-Weg über Biografiearbeit. | Die Grundidee ist in DACH besetzt. Ohne Unterschied entscheidet nur Werbebudget. |
| **E3** | **Druckpartner und Ausstattung:** Einband, Format, Farbe/SW, Seitenzahl-Obergrenze; manuell oder per API. | Bestimmt Kosten pro Buch um mehr als den Faktor 2 (siehe Wirtschaftlichkeit). |
| **E4** | **Preis und Paketzuschnitt:** Digital-only, mit 1 Buch, Familienpaket. | Ohne Preis keine Wirtschaftlichkeit. |
| **E5** | **Kundengewinnung unter der 0-€-Werbung-Regel:** Wie erreicht das Produkt Kinder 35–55 im November und April? | Wettbewerber verkaufen über TV, Werbung, Rabatte bis 74 %. |
| **E6** | **Datenschutz-Grundsatz:** Keine Stimme speichern (nur Text) oder Stimme + QR-Code mit Langzeit-Pflicht? EU-only-Verarbeitung ja/nein? Dr. Falk vor jedem echten Datensatz. | Größte rechtliche Unsicherheit: Gesundheit/Herkunft von **Dritten** in Lebensgeschichten. |
| **E7** | **Zeitpunkt:** erst nach dem HELGA-Pilot (29.10.) oder als Teil von Etappe 1 („reales Tun, Reaktionen sammeln")? | CONFLICT 2. Ein günstiger Resonanztest (z. B. 5 Familien, Variante B von Hand) wäre „reales Tun" – das ist eine Pilot-Entscheidung, keine Bau-Entscheidung. |

---

## 7. Möglicher nächster Schritt (Vorschlag, keine Freigabe)

Wenn E0 mit Ja beantwortet ist: **ein handgemachter Resonanztest ohne Technik.** 3–5 Familien aus Petras Umfeld (z. B. Rudelsingen-Publikum), Fragen auf Postkarten, Erzählen per Sprachnachricht, Abschrift mit KI, Buch von Hand gesetzt, gedruckt über einen Anbieter mit Einzelstück. Vorher: Einwilligungstext durch Dr. Falk. Gemessen wird: Erzählen die Älteren wirklich? Wie viele Stunden kostet ein Buch? Was würden die Kinder dafür zahlen? Das liefert Belege, nicht Annahmen – passend zur Zielkarte des Pilots.
