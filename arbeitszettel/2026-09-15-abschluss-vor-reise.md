# MORE IS YOURS – Abschluss vor der Reise

**Stand:** 15.09.2026  
**Zeitraum:** Abschluss heute · Reise 16.–27.09. · Wiedereinstieg am 28.09.2026  
**Status:** Arbeitsplan / kein neuer fachlicher Freigabestatus

## Ziel für heute

Nicht noch zehn neue Baustellen öffnen.

Heute soll More is Yours so hinterlassen werden, dass:
- die öffentliche Landingpage auf den aktuellen Produktstand vorbereitet ist,
- Interessentinnen verstehen können, worum es geht,
- keine falschen alten Produktversprechen öffentlich stehen bleiben,
- Petra unterwegs keinerlei Contentpflicht hat,
- nach der Reise ein glasklarer Wiedereinstiegspunkt existiert.

## HEUTE – MUSS

### 1. Landingpage-Vorschau neu bauen

Grundlage:
`forschung/Landingpage-Neuaufstellung-0.1.md`

- [ ] Claude Code baut nur eine noindex-Vorschau.
- [ ] Helle Farbwelt A+ bleibt.
- [ ] Alte PEMS-/7-Zimmer-/Kompass-Hauptlogik raus.
- [ ] Neues Personal-Economic-System verständlich rein.
- [ ] ausführliches Dossier + Wissenswelt sichtbar machen.
- [ ] „Normaler Dienstag“ + „erfolgreiche Version“ als Differenzierung zeigen.
- [ ] Community nicht als beschlossenen Bestandteil versprechen.
- [ ] Preis noch nicht nennen.

### 2. Datenschutz / Warteliste prüfen

- [ ] Aktuelle Datenschutzseite gegen Ilse 0.1 / Supabase prüfen.
- [ ] Alte Aussagen zu „kein Konto / keine Serverspeicherung / kein Newsletter“ korrigieren, bevor widersprechende Technik live geht.
- [ ] bestehende Brevo-DOI-Technik nur wiederverwenden, wenn Zweck + Datenschutz sauber passen.
- [ ] Wenn nicht heute grün: Vorschau bleibt noindex und Live-Seite bekommt noch keine neue Warteliste.

### 3. Petra schaut nur EINMAL auf die Vorschau

Fragen:
- Verstehe ich in 10 Sekunden, was More is Yours heute ist?
- Sieht man den Gegenwert?
- Fühlt es sich nach mir an?
- Will ich nach dem Lesen wissen, wann ich teilnehmen kann?

Danach entweder live oder bewusst als Vorschau stehen lassen. Keine Endlosschleife heute.

## INSTAGRAM – FEST ENTSCHIEDEN

- [x] Heute kein Post.
- [x] Während der Reise 16.–27.09. keine Contentpflicht.
- [x] Kein vorbereiteter Reise-Content nötig.
- [x] Instagram-Neustart am **28.09.2026** mit dem dann aktuellen More-is-Yours-Stand.

Bis dahin darf der Kanal bewusst ruhig bleiben.

## MINIKURSE – NUR PARKEN, NICHT BAUEN

Marktcheck liegt vor:
`forschung/Minikurse-Marktcheck-0.1.md`

Aktuelle drei Empfehlungen:
1. Der normale Dienstag
2. Wenn es klappt – willst du auch die erfolgreiche Version davon?
3. 10 Einkommenswege – wie Geld wirklich entsteht

Vor der Reise keine Kursproduktion starten.

## MATCHING – KEINE NEUE BAUSTELLE HEUTE

Der heute eingegangene Claude-Bericht zur ersten Vorschlags-/Priorisierungsebene ist ein Zwischenstand.

Wichtig:
- RC-2 wurde technisch korrekt behoben: fehlendes Wissen über die Option → Recherche, nicht Test der Frau.
- Der GitHub-Master ist inzwischen weiter.
- Maßgeblich ist jetzt `entscheidungen/2026-09-15-matching-priorisierung-final.md` (**PETRA APPROVED**).
- Dazu existiert `forschung/Economic-Profile-Matching-Rule-Library-0.2.md` (**PETRA APPROVED / aktuell**).
- Der finale Build Brief liegt unter `build-briefs/2026-09-15-matching-priorisierung-final.md` (**BUILD READY**).

Der ältere Claude-Bericht wird deshalb nicht mehr als offene fachliche Wahrheit behandelt.

Vor der Reise kein neuer Matching-Auftrag, solange die Landingpage-Abschlussarbeit nicht fertig ist.

## SECURITY / VOICE – FÜR PILOTIN 1, ABER KEINE NEUE BAUSTELLE HEUTE

Der Security-Review liegt vollständig unter:
`berichte-fuer-chatgpt/2026-09-15-shared-project-live-poc-security-review-ergebnis.md`

Aktueller Stand nach Abgleich mit GitHub:

- [x] `admin.html` Stored-XSS-Fix ist nach dem Bericht auf `main` gemergt.
- [ ] Zugang vor Pilotin 1 begrenzen: `KOMPASS_ZUGANG` setzen oder Registrierung nur für eingeladene Adressen.
- [ ] eigener `AUTOMAT_KEY` nur für Ilse.
- [ ] Datenschutz-/Einwilligung für ChatGPT-Zimmer und Whisper durch Dr. Falk.
- [ ] methodisch entscheiden: `bestaetigt_von: frau` darf nur durch ausdrückliche Bestätigung/Klick der Frau entstehen; eine KI-Beobachterin darf das nicht selbst autorisieren.
- [ ] verpflichtender menschlicher Shared-Project-/Kündigungstest mit zwei ChatGPT-Konten vor Produktfreigabe.

Wichtig:
- Security-Fundament laut Review grundsätzlich pilotfähig **mit Bedingungen**.
- 0 kritische Risiken im Bericht; drei hohe Risiken wurden benannt.
- Der zentrale XSS-Fund ist bereits behoben.
- Start-/Abschlusskarten-POC ist getestet, aber bewusst noch nicht an das Produkt verdrahtet.
- Voice-Tür / Karten-Brücke erst nach bestandenem Handtest bauen.

Diese Punkte werden nicht heute zwischen Landingpage und Abreise hineingequetscht. Sie bleiben verbindliche Pilot-Voraussetzungen für den Wiedereinstieg.

## WÄHREND DER REISE 16.–27.09.

Petra muss für More is Yours nichts tun.

Kein tägliches Reel.
Keine künstliche Reise-Contentserie.
Kein Community-Versprechen.
Keine neue Produktbaustelle.

Wenn Petra spontan etwas Persönliches posten möchte, ist das privat ihre Entscheidung – aber kein More-is-Yours-To-do.

## WIEDEREINSTIEG AM 28.09.

Reihenfolge:

1. Landingpage / eventuelle Interessen prüfen.
2. Instagram mit dem echten neuen More-is-Yours-Stand wieder aufnehmen.
3. Pilotprodukt auf aktuellen BUILD-READY-Stand bringen.
4. Security-Pilotbedingungen schließen: Zugang, eigener Admin-Schlüssel, Datenschutz/Einwilligung, Bestätigungsregel, Shared-Project-Handtest.
5. finalen Matching-Buildstand prüfen bzw. umsetzen lassen, falls noch offen.
6. nächste Pilotinnen / Pilotpreis entscheiden.
7. erst danach einen der drei Minikurse als kleines Nebenprodukt bauen.

## Definition „guter Abschluss heute“

Heute ist genug getan, wenn:

- die neue Landingpage als Vorschau steht,
- klar ist, ob sie rechtlich/technisch live darf,
- der alte Datenschutz nicht unbemerkt als Wahrheit weiterläuft,
- Instagram bewusst bis 28.09. ruht,
- alle Minikursideen dokumentiert sind,
- der eingegangene alte Matching-Bericht korrekt als Zwischenstand eingeordnet ist,
- der Security-Review als Pilot-Voraussetzung sauber geparkt und der bereits erledigte XSS-Fix erkannt ist,
- es für die Reise keine laufende Contentpflicht gibt,
- der Wiedereinstiegspunkt für den 28.09. feststeht.
