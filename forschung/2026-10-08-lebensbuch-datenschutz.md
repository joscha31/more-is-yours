# Lebensbuch – Datenschutz und Recht: Risikolandkarte

**Stand:** 8. Oktober 2026
**Status:** FACH-LAB-VORSCHLAG – **kein Rechtsrat.** Vor jedem echten Datensatz prüft Dr. Falk (Stopp-Recht).
**Teil von:** `forschung/2026-10-08-lebensbuch-konzept-ablauf-und-wartung.md`

**Belegqualität:** **[Q]** auf Quellenseite gesehen · **[Sek]** nur über Sekundärseite · **[W]** Rechtswissen, in dieser Recherche nicht neu belegt – vor Verwendung prüfen · **[?]** ungeklärt.

---

## Das Wichtigste in fünf Sätzen

1. Petra wäre als Anbieterin **Verantwortliche** im Sinne der DSGVO. Die Haushaltsausnahme schützt die Familie, nicht den Dienst, der die Mittel bereitstellt (Art. 2 Abs. 2 lit. c, ErwG 18) [W].
2. Lebensgeschichten enthalten regelmäßig **besondere Kategorien** (Gesundheit, Religion, Herkunft, politische Haltung – Kriegs- und Fluchtgeschichten). Dafür braucht es die **ausdrückliche Einwilligung der Erzählerin selbst**, nicht der schenkenden Tochter [W].
3. **Hauptrisiko:** besondere Kategorien von **Dritten** („meine Schwester hatte Krebs"). Für sie gibt es außer Einwilligung keinen sauberen Erlaubnistatbestand [?].
4. Die Stimme ist personenbezogen, aber **nicht automatisch biometrisch** – nur wenn sie zur eindeutigen Identifizierung verarbeitet wird. Deshalb: keine Sprechererkennung, keine Stimmprofile, keine Emotions- oder Gesundheitsauswertung [W, EDPB 02/2021].
5. Eine **Datenschutz-Folgenabschätzung** ist wahrscheinlich Pflicht oder dringend empfohlen (sensible Daten + schutzbedürftige ältere Menschen + KI) [Q/Sek, Zwei-Kriterien-Faustregel WP248].

---

## A1. Sprachaufnahmen
- Stimme = personenbezogenes Datum (Art. 4 Nr. 1). Biometrisch (Art. 4 Nr. 14, Art. 9) nur bei Verarbeitung zur eindeutigen Identifizierung. Reine Abschrift fällt in aller Regel nicht darunter [W]. EDPB-Leitlinien 02/2021 zu Sprachassistenten: https://www.edpb.europa.eu/system/files/2021-07/edpb_guidelines_202102_on_vva_v2.0_adopted_en.pdf (nur Suchtreffer, Volltext nicht gelesen).
- **Praxis:** Diarization/Sprecher-Identifizierung bei Transkriptionsdiensten abschalten. Keine Auswertung von Sprachauffälligkeiten (Demenz-Hinweise wären Gesundheitsdaten). Emotionserkennung: AI Act Art. 5/50 [W].
- **Telefon-Variante:** zusätzlich § 201 StGB (nichtöffentlich gesprochenes Wort) → hörbare Ansage, dokumentiertes Ja vor Aufnahmebeginn [W].

## A2. Wer muss einwilligen?
| Person | Rolle | Rechtsgrundlage (Einschätzung) |
|---|---|---|
| Erzählerin | betroffene Person, Urheberin | Art. 9 Abs. 2 lit. a: **ausdrücklich, getrennt vom Kauf, widerrufbar**. Käuferin kann **nicht** stellvertretend einwilligen (außer Betreuung/Vollmacht mit passendem Umfang) [W] |
| Käuferin | Vertragspartnerin | Art. 6 Abs. 1 lit. b für Name, Adresse, Zahlung [W] |
| Dritte im Text (lebend) | betroffene Personen ohne Einwilligung | gewöhnliche Daten evtl. Art. 6 Abs. 1 lit. f; **besondere Kategorien: ungeklärt [?]** |
| Verstorbene | nicht von der DSGVO geschützt (ErwG 27) | postmortales Persönlichkeitsrecht; Angaben können Daten **Lebender** sein (Erbkrankheiten) [W] |

- Ein Geschenkkauf darf nicht zu Datenverarbeitung führen, **bevor** die Erzählerin selbst zugestimmt hat. (Im Demonstrator deshalb als eigener Schritt 2.)
- **Einwilligungsfähigkeit:** keine Altersgrenze, natürliche Einsichtsfähigkeit. Bei Demenz Vollmacht/Betreuung; ob Betreuer für besondere Kategorien einwilligen dürfen, ist ungeklärt [?].
- Entschärfung bei Dritten (Vorschläge): Hinweise im Fragenfluss („Möchtest du über andere schreiben, frag sie vorher"), Löschbarkeit, kurze Speicherdauer, Art. 14 Abs. 5 lit. b [W].
- Schweiz: revDSG seit 01.09.2023 („besonders schützenswerte Personendaten"); Österreich: DSGVO + DSG [W].

## A3. Auftragsverarbeiter und Drittland
| Baustein | Stand |
|---|---|
| AssemblyAI (Abschrift) | EU-Endpunkt, gleicher Preis, DPF-zertifiziert, DPA möglich [Q] |
| Deepgram | EU-Endpunkt [Q]; DPF und Zero-Retention nicht bestätigt [?] |
| Speechmatics | Region EU wählbar [Q]; UK (Angemessenheitsbeschluss) [Sek] |
| Gladia | EU-Hosting nicht belegt [?] |
| OpenAI | „Data residency Europe" + Zero Data Retention für eligible Endpunkte [Q]; ob Audio-Abschrift erfasst ist, nicht belegt [?]; +10 % für Regional-Endpunkte [Q] |
| Anthropic | direkte API ohne EU-only; EU über AWS Bedrock/Vertex [Sek] |
| Mistral (FR) | EU-Anbieter; Voxtral Transcribe; Deutsch-Unterstützung nicht bestätigt [?] |
| **Druckerei** | sieht ganzen Buchinhalt + Adresse → **AVV nach Art. 28** nötig [W] |
| Zahlung | Stripe/PayPal meist eigene Verantwortliche; Digistore24/Copecart treten als Verkäufer auf → Datenflüsse einzeln klären [?] |

**USA:** EuG bestätigte am 03.09.2025 den Angemessenheitsbeschluss zum Data Privacy Framework (T-553/23, Latombe) [Q]; Rechtsmittel C-703/25 P anhängig [Q]. → Für besondere Kategorien **EU-Verarbeitung vorziehen**, hilfsweise Standardvertragsklauseln [W]. Register: https://www.dataprivacyframework.gov/list

## A4. Löschung, Speicherdauer, Sicherheit
- Widerruf (Art. 7 Abs. 3) und Löschung (Art. 17): Audio und Texte löschbar – **das gedruckte Buch nicht**. Das gehört vorab in die Einwilligung [W].
- Vorschlag: Audio + Rohabschrift kurz nach Freigabe löschen; Buchinhalt nur mit Zustimmung für Nachdrucke (z. B. 12 Monate) [W]. Rechnungen 8 Jahre (§ 147 AO), ohne Buchinhalt.
- TOMs (Art. 32): Verschlüsselung, ablaufende persönliche Links, 2-Faktor, Protokolle, EU-Hosting, keine Texte im Klartext per Mail [W].
- **Wichtig für die Wartungsfrage:** Ein **QR-Code mit Stimme** im Buch widerspricht kurzer Speicherdauer. Entweder Langzeit-Speicherung mit eigener Einwilligung – oder kein QR-Code.

## A5. KI-Verordnung (AI Act)
- Art. 50 (Transparenz) gilt seit **02.08.2026** [Q]; das Digital-Omnibus-Paket verschob nur Hochrisiko-Pflichten (02.12.2027) [Q].
- Lebensbuch (Einschätzung [W]): Spricht die Erzählerin mit einer KI (Interview-Fragen, KI-Stimme), muss sie das erfahren (Abs. 1). Kennzeichnung KI-generierter Texte (Abs. 2) trifft primär die Modellanbieter; ob Glättung eine ausgenommene „Assistenzfunktion" ist, ist Auslegungsfrage [?]. Abs. 4 (Texte zur Information der Öffentlichkeit) trifft ein privates Familienbuch nach Einschätzung nicht.

## A6. Weitere Rechtsthemen
- **Urheberrecht:** Erzählerin ist Urheberin (§ 2 UrhG), Glättung ist Bearbeitung (§ 3). Nutzungsrechte für Druck von der **Erzählerin** einholen. Fotos: Rechte der Fotografin, Recht am eigenen Bild (§§ 22, 23 KUG) [W].
- **Persönlichkeitsrecht Dritter:** Äußerungen über Lebende/Verstorbene können Ansprüche auslösen; Anbieter kann als Verbreiter mithaften → Freigabeschritt, Hinweis, AGB-Freistellung [W].
- **Widerrufsrecht:** § 312g Abs. 2 Nr. 1 BGB (Kundenspezifikation) ist eng auszulegen; beim Lebensbuch entsteht der Inhalt **nach** dem Kauf und von einer anderen Person → Ausschluss unsicher [?] (https://www.haendlerbund.de/de/ratgeber/recht/3883-ausschluss-widerrufsrecht-kundenspezifikation). Hinweis auf eine elektronische Widerrufsfunktion seit 19.06.2026 [Sek – verifizieren].
- **Gewährleistung:** Druckfehler = Sachmangel. Der Freigabeschritt vor Druck ist die wichtigste Absicherung [W].

---

## Top 7 – Pflichten, bevor echte Daten verarbeitet werden dürften
1. **Ausdrückliche, getrennte Einwilligung der Erzählerin** (Art. 9 Abs. 2 lit. a) mit Widerrufshinweis und „gedrucktes Buch ist nicht rückholbar".
2. **AVV mit jedem Dienst, der Inhalte sieht** – inkl. Druckerei und ggf. Telefonie; EU-Verarbeitung bevorzugen.
3. **Verarbeitungsverzeichnis, Datenschutzerklärung, Rollenklärung** (Petra = Verantwortliche).
4. **DSFA** (oder dokumentierte DSFA-light) mit Dritten, Verstorbenen, besonderen Kategorien, Demenz, KI.
5. **Keine biometrische Nutzung der Stimme;** Telefon nur mit dokumentierter Aufzeichnungs-Einwilligung.
6. **Löschkonzept + TOMs;** Rechnungsdaten getrennt vom Buchinhalt.
7. **Transparenz und Verträge:** KI-Hinweis, Nutzungsrechte der Erzählerin, Freigabe vor Druck, AGB, Widerrufsbelehrung prüfen lassen.

**Variante C (Methode + Vorlage) entgeht fast allem davon,** weil Petra dort keine Erzähldaten verarbeitet. Das ist ein starkes Argument für die wartungs- und haftungsarme Bauform.

## Quellen
- https://www.edpb.europa.eu/system/files/2021-07/edpb_guidelines_202102_on_vva_v2.0_adopted_en.pdf
- https://support.assemblyai.com/articles/3394503889-has-assemblyai-certified-to-the-eu-u-s-data-privacy-framework
- https://openai.com/index/introducing-data-residency-in-europe/
- https://platform.claude.com/docs/en/build-with-claude/api-and-data-retention
- https://mistral.ai/news/voxtral-transcribe-2
- https://www.goodwinlaw.com/en/insights/publications/2026/08/alerts-technology-dpc-eu-ai-act-transparency-obligations-now-in-force
- https://digitalpolicyalert.org/event/35459
- https://www.haendlerbund.de/de/ratgeber/recht/3883-ausschluss-widerrufsrecht-kundenspezifikation
- https://datenschutzzentrum.de/uploads/datenschutzfolgenabschaetzung/20180525_LfD-SH_DSFA_Muss-Liste_V1.0.pdf
- https://www.dataprivacyframework.gov/list
