# MORE IS YOURS – BUILD BRIEF: Datenschutz-Gate technische Prüfung

**Stand:** 15.09.2026  
**Status:** BUILD READY – PRÜFUNG / KLEINE KORREKTUREN, KEINE FACHLOGIK ERFINDEN

## Verbindliche Quelle

- `forschung/2026-09-15-datenschutz-art30-review.md`
- Dr.-Falk-Bericht vom 15.09.2026, zweite Runde

## Ziel

Vor der ersten fremden Nutzerin die technisch belegbaren Datenschutzpunkte prüfen und die zwei bereits benannten UI-/Einwilligungsstellen korrigieren.

## 1. Einwilligung

Prüfe, ob der ausdrückliche Einwilligungs-Haken für besondere Kategorien personenbezogener Daten nach Art. 9 tatsächlich **vor** der ersten inhaltlichen Verarbeitung wirksam gesetzt und mit Zeitstempel gespeichert wird.

Wenn die im Dr.-Falk-Bericht genannte Stelle noch fehlt: entsprechend dem bereits freigegebenen Datenschutzkonzept ergänzen.

Keine juristischen Texte neu erfinden. Wortlaut nur aus freigegebener Quelle übernehmen.

## 2. `hd.html` – Herkunft sichtbar

Prüfe, ob bei `hd_beleg` für die Frau sichtbar ist, wenn ein Beleg von Petra gesetzt wurde.

Mindestanforderung:

- `gesetzt_von: petra` / `quelle: petra_von_hand` darf nicht unsichtbar bleiben.
- Für die Frau verständliche Kennzeichnung, z. B. „von Petra ergänzt“, nur wenn ein freigegebener Wortlaut bereits existiert.
- Wenn kein Wortlaut freigegeben ist: CONTENT GAP melden, nicht selbst texten.

## 3. Vercel

Soweit aus Projekt-/Deployment-Metadaten technisch feststellbar, bitte berichten:

- verwendeter Plan: Hobby / Pro / Enterprise / nicht feststellbar
- konfigurierte Runtime-Region
- Observability Plus: ja / nein / nicht feststellbar
- daraus technisch ableitbare Log-Retention

Wichtig: keine Annahmen. Wenn Billing-/Accountdaten nicht aus der Umgebung sichtbar sind, ausdrücklich `DATA GAP` melden.

## 4. Supabase

Prüfe, ob aus der Projektkonfiguration eindeutig hervorgeht, dass das produktive Ilse-Projekt in Frankfurt / `eu-central-1` läuft.

Wenn nicht technisch belegbar: `DATA GAP`.

## 5. OpenAI / Diktat

Prüfe nur, was im Code feststellbar ist:

- welcher Audio-/Transkriptions-Endpunkt genutzt wird
- ob eine besondere ZDR-Konfiguration im Code/Projekt sichtbar ist

Wichtig:

- Nicht behaupten, dass ZDR aktiv ist, wenn dies nur eine Account-Einstellung sein kann.
- Falls nicht belegbar: `DATA GAP – OpenAI Account prüfen`.

## 6. Keine Änderungen

Nicht anfassen:

- DSFA-Bewertung
- DSB-Pflicht
- Löschfristen
- Rechtsgrundlagen
- DPA-Bewertung
- Datenschutzerklärungstexte ohne freigegebenen Wortlaut

Diese Punkte sind fachlich/rechtlich, nicht Code.

## Erwartete Rückmeldung

Bitte ausschließlich zurückmelden:

1. Einwilligungs-Haken korrekt vor Verarbeitung: ja/nein + Datei
2. Petra-Herkunft in `hd.html` sichtbar: ja/nein
3. Vercel-Plan: Wert oder DATA GAP
4. Vercel-Region: Wert oder DATA GAP
5. Vercel-Logfrist: Wert oder DATA GAP
6. Supabase-Region Frankfurt technisch belegt: ja/nein/DATA GAP
7. OpenAI-Audio-Endpunkt
8. ZDR technisch belegbar: ja/nein/DATA GAP
9. geänderte Dateien
10. Tests

Keine weiteren Umbauten.
