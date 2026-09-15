# Bericht Baupaket B5 — HD Lens A-light, technisch vorbereitet (Ilse 0.1, 14.09.2026 nachts)

Kontext für dich: Wir arbeiten nach dem **Gesamt-Master 3.0** (§9 HD Lens A-light, §12 Statuslogik aus Build Plan 1.1, §23 B5, §25 „was Claude Code nicht darf“). Claude Code hat den **Motor ohne Inhalt** gebaut. Die Content Library ist leer — das ist Absicht und der CONTENT GAP für dein Human Design Content Lab.

## Was gebaut ist

1. **Migration 0008 (gelaufen):** `kiste.hd_version` · Tabelle `hd_beleg` = Verknüpfung *Hypothese × Zettel der Frau × Richtung (fuer / gegen / neutral)*, `gesetzt_von` frau oder petra. Trigger: beide Zettel aus demselben Fach, der eine eine HD-Hypothese (`bezug hd:<id>`), der andere keine. RLS: die Frau liest, nur der Server schreibt.
2. **`lib/hd-lens.json` — leer,** mit dokumentierter Form je Eintrag: `id`, `merkmal {feld: typ|strategie|autoritaet|profil|profil_linie, wert}`, `thema {id, name}`, `hypothese` (Konjunktiv), `bedeutung` (wirtschaftliche Übersetzung, nie Beruf/Modell/Urteil), `frage`, `freigegeben` (true erst nach deiner/Petras Freigabe), `quelle`, `version`.
3. **`lib/hd-lens.js`:** nur A-light (andere Merkmale werden abgewiesen); Schreibweisen der vier Werte werden normalisiert, **nichts wird abgeleitet oder berechnet** (auch nicht Typ → Strategie); jeder Eintrag läuft durch `pruefeEintrag` (freigegeben + Quelle + kein Prozent + kein Wächter-Treffer); je passender Hypothese entsteht **ein** Kisten-Zettel (`herkunft hypothese`, nur die Frau bestätigt).
4. **Statusregel im Motor (Master §12), nie im Text:** kein Beleg → *offen* · nur Selbstaussage oder 1 Lebensbeleg → *teilweise* · ≥ 2 Lebensbelege dafür → *auffällige Übereinstimmung* · ≥ 1 Gegenbeleg aus dem Leben → *Spannung*. Lebensbeleg = Zettel mit `evidenz erfahrung|gemessen`. U-10 ist damit technisch unmöglich.
5. **Wächter** `lib/hd-waechter.json`: U-01 bis U-11 als Regex (aus dem Prototyp kopiert, Buchführung in der README), U-12 bis U-14 ohne Muster (prüft ein Mensch). Er prüft jeden Bibliothekstext, bevor er wirkt.
6. **API:** `POST human_design` (vier Werte; **Geburtsdaten werden abgewiesen** — Dr. Falk), `GET hd`, `POST hd_beleg` (verknuepfen / sagen / loesen). **Seite:** `hd.html` „Was erzählt dein Chart – und was erzählt dein Leben?“ mit Riegel-Satz an jeder Hypothese.

## Beweis

70/70 Tests im Haus. Live gegen `ilse.moreisyours.de`: **25/25** — u. a. Selbstaussage dafür → teilweise; ein Lebensbeleg dagegen → Spannung; zwei dafür + einer dagegen → bleibt Spannung; Gegenbeleg gelöst → auffällige Übereinstimmung; Hypothese als eigener Beleg vom Trigger abgewiesen; kein Zentrum/Gate/Rohchart/Geburtsdatum verlässt den Server. Kein Modellaufruf, keine Kosten.

## Offene Annahmen — bitte prüfen

1. **Selbstaussage GEGEN die Hypothese ohne Lebensbeleg:** ändert den Status nicht (Master nennt nur den echten Gegenbeleg), wird aber gezeigt und markiert (`selbst_widerspricht`). Soll das *teilweise*, *Spannung* oder so bleiben?
2. **Was zählt als Lebensbeleg?** Gebaut nach Datenwelt 1.0: `evidenz erfahrung|gemessen` mit `erlebt_in` (ein nächster Schritt). Ein gesagtes biografisches Ereignis („30 Jahre Praxis“) ohne Schritt ist damit nur Selbstaussage → für Frau Nr. 1 bleibt fast alles höchstens *teilweise*, bis B6 Erfahrungen liefert. Darf Petra ein solches Ereignis als Beleg werten? (Dann: kleine Migration, `erfahrung` ohne Schritt erlauben.)
3. **Vokabular** (Manifestorin · Generatorin · Manifestierende Generatorin · Projektorin · Reflektorin; Autoritäten Emotional · Sakral · Milz · Ego · Selbst · Mental · Mond; Profil 1/3): nur Schreibweise. Passt das zu deiner Library?
4. **Die Fragen** der Bibliothek gehen nicht an Ilse/Beobachterin (Gesprächsarchitektur unberührt). Wo in Schritt 2 sie fallen, entscheidet ihr, wenn die Library steht.

## CONTENT GAP (kleinstmögliche Entscheidung)

**Ein einziger freigegebener Eintrag** in `lib/hd-lens.json` — am besten für Petras Chart (Manifestorin / Informieren / Milz / 1/4) — reicht, um die ganze Kette mit Frau Nr. 1 zu zeigen. Form siehe oben. Claude Code prüft ihn automatisch (Tests) und legt bei Petras Chart den Zettel an.

## Prüffragen an dich

- Ist die Statusregel so gebaut, wie ihr sie in Master §12 gemeint habt (Gegenbeleg = Beleg aus dem Leben, nicht Selbstaussage)?
- Reicht `hd_beleg` (Verknüpfung mit Richtung, Frau hat das letzte Wort) als Ablage für „Hypothese × Selbstaussage × gelebte Realität“ — oder fehlt eine Ebene?
- Einverstanden, dass in 0.1 keine Geburtsdaten gespeichert werden (A-light braucht sie nicht)?
