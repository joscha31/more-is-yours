# BUILD BRIEF – Landingpage More is Yours: Vorschau-Neuaufstellung

**Stand:** 15.09.2026  
**Status:** BUILD READY – NUR VORSCHAU, NICHT LIVE  
**Owner Fachinhalt:** Product Architecture / ChatGPT  
**Freigabe Livegang:** Petra

## Verbindliche Quellen

1. `master/2026-09-14-more-is-yours-gesamt-master-3.0.md` – MASTER
2. `entscheidungen/2026-09-15-ergebnisprodukt-mehr-ist-mehr.md` – PETRA APPROVED
3. `gesetze/2026-09-15-ui-gesetz-lebendig-spielerisch.md` – PETRA APPROVED
4. `forschung/Landingpage-Neuaufstellung-0.1.md` – FACH-LAB-VORSCHLAG; für die Vorschau exakt verwenden, nicht eigenmächtig erweitern

Aktuelle Live-Quelle im Arbeitsrepo:
`joscha31/meine-projekte/outputs/reel-generator-tool/moreisyours.html`

## Ziel

Eine separate `noindex`-Vorschau erstellen, die More is Yours auf dem Stand vom 15.09. zeigt.

## Darf

- bestehende helle Farbwelt A+ und vorhandene Petra-Fotos wiederverwenden
- vorhandene responsive Komponenten wiederverwenden
- Text und Struktur aus `Landingpage-Neuaufstellung-0.1.md` in eine hochwertige Seite übersetzen
- vorhandene Impressum-/Datenschutzlinks in der Vorschau sichtbar lassen
- technischen Befund zu Warteliste / Datenschutz separat melden

## Darf NICHT

- die aktuelle Live-Datei `moreisyours.html` verändern
- deployen / live schalten
- Preise erfinden oder eintragen
- Community als beschlossenen Bestandteil darstellen
- alte sieben Zimmer / PEMS / Kompass als heutige Produktarchitektur übernehmen
- fachliche Aussagen ergänzen, die nicht in den Quellen stehen
- Datenschutztext eigenmächtig juristisch umschreiben
- Brevo oder eine andere Warteliste aktivieren, solange der Datenschutz dafür nicht geprüft ist

## Technische Umsetzung

Neue Datei im Arbeitsrepo, z. B.:
`outputs/reel-generator-tool/moreisyours-vorschau-2026-09-15.html`

Pflicht:
- `noindex, nofollow`
- kein canonical auf die Live-Seite
- deutliches kleines Vorschau-Band nur für Petra
- mobil sauber auf 375 px
- bestehende A+-Farben
- keine dunkle Hero-Variante; die wurde am 14.09. verworfen
- keine toten Buttons

CTA in der Vorschau:
- wenn noch kein rechtlich sauberer Wartelistenweg vorhanden ist: Button/Box sichtbar als Design, aber nicht als funktionierendes Formular; klar „Pilotliste wird gerade angeschlossen“ oder technisch deaktiviert
- wenn ein vorhandener Brevo-DOI-Weg gefunden wird: nur dokumentieren, nicht aktivieren

## Parallelprüfung

Bitte die aktuelle `outputs/reel-generator-tool/datenschutz.html` gegen den aktuellen technischen Stand von Ilse 0.1 prüfen und nur BERICHTEN:

Mindestens prüfen:
- Supabase-Nutzerkonto
- Serverspeicherung / Kiste / Verlauf
- aktuelle KI-Anbieter / Datenwege
- Warteliste/Newsletter-Brevo, falls wiederverwendet
- Aussagen aus der alten 7-Stationen-Fassung

Ergebnis als GAP-Liste. Kein juristischer Text durch Claude Code erfinden.

## Akzeptanzkriterien

1. Petra kann die Vorschau am Handy öffnen.
2. In 10 Sekunden ist erkennbar: MIY bringt Frau + Leben + wirtschaftliche Möglichkeiten zusammen.
3. Dossier und Wissenswelt sind sichtbar.
4. Normaler Dienstag und erfolgreiche Version sind sichtbar.
5. Keine 7-Zimmer-/alte PEMS-Logik als aktuelles Produkt.
6. Keine Preis- oder Community-Zusage.
7. Live-Seite unverändert.
8. Datenschutz-/Wartelisten-Gaps werden separat berichtet.

## Rückmeldung

Bitte nach Fertigstellung nur:
- Vorschau-Link
- geänderte/neu angelegte Dateien
- Live-Seite unverändert: ja/nein
- mobile Prüfung: ja/nein
- Datenschutz-Gaps
- vorhandene Wartelisten-Technik gefunden: ja/nein + wo
- keine weiteren Änderungen
