# Annes Nachtstart – Begleit-App zum K85

**Stand:** 29.10.2026 · **Status:** PROTOTYP / PETRA REVIEW · liegt auf dem Branch `begleitung-anne-ultra`, nicht in `main`

Petra begleitet ihre Freundin Anne (56, Bozen, Physiotherapeutin, Triathlon und Trail seit rund 20 Jahren) als Mentalcoach beim
**K85 Heart of the Alps Ultra**, Innsbruck Alpine Trailrun Festival.

## Rennen (laut Veranstalter und Streckenliste 2027)
- Start: Samstag, 8. Mai 2027, 0:00 Uhr, Landestheater Innsbruck (Nachtstart, gemeinsam mit dem K110)
- 86,8 km, 3.880 Hm hoch und runter
- Verpflegung: Kranebitten 14,1 · Birgitz 22,3 · Mutterer Alm 31,1 (1.608 m) · Telfes 39,8 · Wasserstelle ÖAMTC 50,7 · Bergisel 55,3 (Drop-Zone) · Herzsee 61,1 · Hall 68,4 · Thaur 74,6
- Cut-off laut Veranstalter-Liste 2026 (von Petra am 29.10.2026 als Screenshot geprüft, für 2027 bestätigen): Kranebitten 03:30 · Birgitz 05:00 · Bergisel 12:30 · Herzsee 13:30 · Hall 15:00 · Thaur 16:15. Kein Cut-off an Mutterer Alm, Telfes, ÖAMTC und im Ziel
- Richtzeiten der Veranstalter für die hinteren Läuferinnen: Kranebitten 03:19 · Birgitz 05:00 · Mutterer Alm 07:26 · Telfes 09:00 · ÖAMTC 11:15 · Bergisel 12:22 · Herzsee 13:30 · Hall 14:55 · Thaur 16:17 · Ziel 18:44
- Höhenmeter nach km 55,3: Herzsee +304/−104 · Hall +181/−442 · Thaur +216/−43 · Ziel +444/−605 (Liste: 86,7 km, 3.901 Hm)
- Annes Sohn läuft die K110, gleicher Start

## Stand Anne (von Petra, 29.10.2026)
- Angemeldet, Ziel laut Anne (28.10.2026): ankommen und gut durchkommen
- Präparate laut Petra alle auf der Kölner Liste geprüft
- Längster Lauf bisher: etwa 35 km
- Kommt aus dem Winter, kein Vorbereitungsrennen vorher
- Wochenumfang derzeit mindestens 45 km in 3 Läufen, dazu Kraft und Rad

## App
**Live:** https://annes-nachtstart.vercel.app (Vercel-Projekt `annes-nachtstart`, Team petra67, seit 29.10.2026). Nicht mit Git verknüpft: Änderungen erscheinen erst nach einem neuen Deployment von diesem Branch.

`app.html` ist die Vorschau-Fassung für Claude-Artifacts (ohne eigenen Dokumentrahmen).
`index.html` ist dieselbe Seite als eigenständige Datei, z. B. für Vercel.

Bereiche: Heute (Check-in, 7-Tage-Verlauf) · Kopf (Warum, Atem, Streckenkino, Krisenkarten) ·
Training mit Laufen, Kraft, Verpflegungs-Labor und Supplements (Plan und tägliches Abhaken, nur auf Annes Handy) · Rennen (Rennmodus mit Etappen, Mantras, Kontrollschluss-Puffer, Pflichtausrüstung) · Bericht (Wochenbericht zum Kopieren an Petra, Sicherung).

Daten bleiben nur im Browser des Handys. Keine Kosten, kein Server.
Mantras und Visualisierungstexte sind ENTWÜRFE von Claude; Anne und Petra machen sie zu ihren eigenen.

## Bewusst noch nicht
- Gemeinsame Datenbank, damit Petra live mitliest
- Audioaufnahmen mit Petras Stimme
- Trainingsplan für Kraft (macht die Trainerin in Bozen)
