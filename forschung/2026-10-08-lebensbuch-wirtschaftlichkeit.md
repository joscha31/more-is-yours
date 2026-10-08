# Lebensbuch – vorläufige Wirtschaftlichkeitsrechnung

**Stand:** 8. Oktober 2026
**Status:** FACH-LAB-VORSCHLAG – Rechenmodell mit Annahmen, keine Preisentscheidung, kein Angebot.
**Teil von:** `forschung/2026-10-08-lebensbuch-konzept-ablauf-und-wartung.md`

**Kennzeichnung:** FAKT (Anbieterpreis, Quelle in Schwesterdateien) · ANNAHME (Rechengröße ohne Beleg).
**Wichtigste Einschränkung:** Für den Druck der Zielausstattung (ca. 150 Seiten, Fotos, Hardcover, Auflage 1) ließ sich **kein Preis belegen**. Alle Druckkosten sind Spannen. Vor jeder echten Kalkulation: Preisrechner selbst bedienen und ein Testbuch bestellen.

---

## 1. Kostenbausteine pro Buch

| Baustein | Wert | Grundlage |
|---|---|---|
| **Druck Softcover**, 17×24/A5, ca. 120–150 S., innen SW, einige Farbfotos | **10–18 €** | ANNAHME. Anker: Peecho SC „ab 4,00 €", BoD „ab 2,05 €" (Startpreise); Storyworth verkauft SW-Zusatzbuch für 39 $ inkl. Marge |
| **Druck Hardcover**, vollfarbig, ca. 150 S. | **25–45 €** | ANNAHME. Anker: epubli Bildband 30 S. 33,70 €; Meminto Zusatzexemplar ab 49 €, Remento 69 $, Storyworth Farbe 79 $ (Endpreise inkl. Marge) |
| **Versand DE** | **3–7 €** | epubli 2,95 € (FAKT); Paketdienst ANNAHME bis 7 €. AT/CH deutlich teurer, CH mit Zoll |
| **Zahlung** bei 99 € | Stripe 1,74 € · PayPal 3,35 € · Copecart 5,85 € · Digistore24 8,82 € | FAKT (Gebührenseiten; Digistore24 über Sekundärquelle) |
| **KI** (312 Min. Audio, ca. 40.000 Wörter, 2 Glättungen) | **1–3,50 $** | FAKT-basierte Rechnung: EU-freundlich (AssemblyAI EU + Mistral Small) ca. 1,20 $; Qualitätsstufe ca. 3,20 $ |
| **Telefonie** (falls Erzählen per Anruf) | **3–6 €** | ANNAHME: ca. 312 Min. × 1–2 Cent |
| **Hosting, Speicher, Mail-Dienst, Software** anteilig | **1–3 €** | ANNAHME bei 50–100 Büchern/Monat |
| **Support** | **4–12 €** | ANNAHME: 10–30 Min. pro Buch × 25 €/Std. (ausgelagert) |
| **Reklamationen** (Nachdruck, verlorenes Paket) | **1–3 €** | ANNAHME: 3–7 % Nachdruckquote × Druck + Versand |
| **Kundengewinnung** | **0 € bis 50 €** | ANNAHME. Organisch = 0 € Geld, aber Zeit. Bezahlte Werbung bei Geschenkprodukten: grob 25–50 € pro Kauf. ⚠️ Im Workspace gilt „0 € Werbung" |
| **Umsatzsteuer** | 0 € als Kleinunternehmerin (§ 19) | Ab Überschreiten der Grenze: Bücher 7 %, digitale Leistung 19 % – Aufteilung bei Paketen = Frage für Dr. Falk |

---

## 2. Drei Rechnungen pro verkauftem Paket

### Variante A – Vollautomatischer Dienst, Paket „mit einem Hardcover" für 99 €

| Position | niedrig | mittel | hoch |
|---|---|---|---|
| Verkaufspreis | 99,00 | 99,00 | 99,00 |
| Druck Hardcover | −25,00 | −32,00 | −45,00 |
| Versand | −3,00 | −5,00 | −7,00 |
| Zahlung | −1,74 | −3,35 | −8,82 |
| KI | −1,00 | −2,00 | −3,20 |
| Telefonie | 0,00 | −4,00 | −6,00 |
| Hosting/Software | −1,00 | −2,00 | −3,00 |
| Support | −4,00 | −8,00 | −12,00 |
| Reklamationen | −1,00 | −2,00 | −3,00 |
| **Deckungsbeitrag vor Kundengewinnung** | **62,26** | **40,65** | **10,98** |
| mit bezahlter Werbung (35 €/Kauf) | 27,26 | 5,65 | −24,02 |

**SCHLUSS:** Bei 99 € trägt sich ein Vollautomat **nur mit kostenloser Kundengewinnung oder mit Softcover**. Mit bezahlter Werbung bleibt im mittleren Fall fast nichts. Das erklärt, warum Wettbewerber Zusatzbücher teuer verkaufen (49–99 €) und Familienpakete anbieten. Hinzu kommen **einmalige Baukosten** der Software und **laufende Wartung**, die hier nicht eingerechnet sind.

**Größenordnung für Petras Ziel:** 10.000 € Deckungsbeitrag im Monat bräuchte im mittleren Fall rund **250 Bücher pro Monat** – ohne bezahlte Werbung. Bei starker Saison (Nov./Dez., April/Mai) verteilt sich das sehr ungleich.

### Variante B – Concierge mit Lektorat, Paket für 349 €

| Position | mittel |
|---|---|
| Verkaufspreis | 349,00 |
| Druck Hardcover + Versand | −37,00 |
| Zahlung (Stripe) | −5,49 |
| KI | −2,00 |
| Lektorat + Satz, ANNAHME 4 Std. × 30 € | −120,00 |
| Support + Reklamation | −10,00 |
| **Deckungsbeitrag vor Kundengewinnung** | **174,51** |

**SCHLUSS:** Pro Buch deutlich mehr übrig, aber jede Stunde Lektorat ist Handarbeit. Macht Petra das selbst, ist es ein Stundenmodell (laut Tätigkeitsprofil K.-o.-nah). Preispunkt 349 € ist **nicht** getestet – einziger Vergleichswert: „Lebensbuch" AT ab 399 € (2022).

### Variante C – Methode + Vorlage (digital), 39 €

| Position | mittel |
|---|---|
| Verkaufspreis | 39,00 |
| Zahlung (Stripe) | −0,84 |
| Plattform/Hosting anteilig | −1,00 |
| Support (inhaltlich) | −2,00 |
| **Deckungsbeitrag vor Kundengewinnung** | **35,16** |

**SCHLUSS:** Hohe Marge, keine Druck- und Datenrisiken – aber der Gratis-Check (Grundregel 6) ist streng: Papier-Fragebücher kosten 29,99 € (FAKT), Fragenlisten gibt es kostenlos. Ob 39 € tragen, hängt allein an der Qualität der Methode.

---

## 3. Was in keiner Zeile steht, aber zählt
- **Abbrecherinnen:** Ein Teil der Erzählenden hört nach wenigen Wochen auf (ANNAHME, nicht belegt). Bei Variante A ist das Geld dann oft schon da, der Ärger („Mama macht nicht mit") kommt im Support an.
- **Saison:** Kauf im Dezember, Buch frühestens Monate später. Support und Druck verteilen sich übers Jahr, die Werbung nicht.
- **Haltbarkeit von QR-Codes:** Wer Stimme im Buch verspricht, zahlt Speicher über Jahre – ohne Einnahmen dafür.
- **Personal:** Jede Variante braucht ab etwa 30–50 Büchern im Monat Hilfe (Support, Lektorat). Das senkt den Gewinn.

## 4. Was vor einer echten Kalkulation geprüft werden muss
1. Drei echte Druckpreise (Cloudprinter, epubli, Onlineprinters) für 120 S. SW+Fotos Softcover und 150 S. Farbe Hardcover, Auflage 1.
2. Ein Testbuch.
3. Ein Preistest bei echten Käuferinnen (z. B. 3 Preispunkte, 5 Familien).
4. Steuerliche Einordnung des Pakets (Buch 7 % vs. digitale Leistung 19 %) – Dr. Falk.
