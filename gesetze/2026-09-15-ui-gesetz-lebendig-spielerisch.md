# UI-Gesetz für More is Yours: lebendig und spielerisch, nicht Text und Formular (15.09.2026)

**Petras Ansage (15.09.2026, morgens), wörtlich:**

> „Bitte die spielerische, bildhafte UI wieder konsequent mitdenken. Das gab es in früheren Stationen bereits und soll nicht verloren gehen. Gemeint ist nicht nur bildhafte Sprache, sondern echte visuelle Interaktion. Wichtig: erwachsen, hochwertig, spielerisch, nicht kindisch, nicht überladen. Grundsatz: More is Yours soll nicht nur verständlich sein, sondern sich lebendig und spielerisch anfühlen."

Das ist die dritte Ansage dazu (02.09. „nicht zu trocken … wie bei dieser Feuergeschichte", 07.09. „das macht es zu etwas Besonderem, sonst ist es ein Durchquälen", 15.09. diese). Ab jetzt ein Gesetz für jede Seite, die eine Frau sieht — auch im Ilse-Haus.

## 1. Die Regel

**Jeder Wert, den die Frau setzt, verändert ein Bild. Jeder Zustand ist sichtbar, nicht nur beschrieben.** Ein Schieberegler ohne Bild, ein Formular mit Textfeldern, eine Liste mit Chips — das ist der Rohbau, nicht die Seite.

Die Grenze dafür steht seit dem Grundriss (02.09.) und bleibt: **Kein Spielzug bewertet, keiner drängt zum Weitermachen, keiner fordert Vollständigkeit.** Das Lagerfeuer funktionierte, weil es nur nach oben ging und nie sagte, es sei zu klein. Kein Zähler an Textlänge (Erzählmenge ist nicht Informationsqualität), kein Fortschrittsbalken als Druck.

**Der Trick ist die Beschriftung, nicht das Bild:** der Regler zeigt keine Zahl, sondern einen Satz in ihrer Sprache. Die Zahl läuft darunter mit, weil das System sie braucht.

## 2. Der Bilderkatalog (Petras Liste, 15.09.)

| Wert | Bild | Was sich sichtbar verändert | Wo im Ilse-Haus |
|---|---|---|---|
| Energie | 🔥 Feuer | wird größer, heller, flackert ab 85 (Muster Station 3) | `profil.html` Raum „So arbeitest du gern" (Bereich `energie`) |
| Sichtbarkeit | 💡 Spotlight | Lichtkegel wird stärker oder schwächer, die Bühne heller | `dienstag.html` Baustein Sichtbarkeit · Profil Stufe zu f16 |
| Sicherheit | ⚓ Halt | mehr oder weniger Boden unter der Figur: Steg, Brücke, festes Ufer | Profil „Das braucht dein Leben" (Bereich `bedingungen`), Grenzen-Stufe |
| Menschenkontakt | 👤 → 👥 | eine Figur allein bis viele Figuren um sie herum | `dienstag.html` Kundenkontakt · Profil Arbeitsalltag |
| Struktur | Punkte → Raster | frei verstreute Punkte ordnen sich zu einem klaren Raster | Profil Arbeitsalltag (feste Termine oder frei) |
| Risiko | kleiner Schritt → Sprung | die Figur macht einen Schritt oder einen Sprung über eine Lücke | Realitätscheck: wie groß ist der Test (`probieren.html`) |
| Grenze (Stufe 1–5) | 🪨 Grenzstein | Kiesel bis Felsblock (Muster Grundriss „Grenzsteine") | Profil: die Fünfer-Skala an jedem Zettel |
| Fortschritt, Zustände | Landschaft mit Punkten | ein Punkt leuchtet auf, ein Zimmer öffnet sich sichtbar; nie ein Balken mit Prozent | Fach-Startseite `index.html`, Passung, HD-Status |

Weitere Bilder aus den früheren Stationen, die wieder mitkommen: der Rucksack, in den jede Sache sichtbar fällt (Zimmer 3) · die Spanne als Band zwischen Untergrenze und Wunsch (Zimmer 6) · das Fenster, in dem das Licht angeht (Zimmer 2) · die Kompassnadel mit Farbring (Zimmer 7) · das Vermutungs-Duell links/rechts (Zimmer 4) — das ist genau „vorher → jetzt" im Realitätscheck.

## 3. Wo die Muster liegen (nicht neu erfinden, umziehen)

| Muster | Datei | Was übernommen wird |
|---|---|---|
| Lagerfeuer-Regler, nur nach oben | `outputs/reel-generator-tool/stillgelegt/2026-09-12-grossputz/ideenfinder-station2.html` (`waermeChanged`, `.fire-scale`, `@keyframes flicker`) | Skalierung + Leuchten am Regler, Satz statt Zahl (`wLabel`), Flackern ab 85 |
| Sieben Regler mit Spannen-Satz und „weiß ich nicht" | `…/zimmer6.html` (`reglerZeigen`, `spanne`, `WN`) | jeder Regler hat einen Satz und einen ehrlichen Aus-Schalter; gekoppelte Regler ziehen mit |
| Grenzsteine und Leuchtfeuer | Grundriss `2026-09-02-pems-stationen-grundriss.md` Abschnitt „Die Bauform" | Stein wächst, Feuer wächst, Beschriftungstabelle 1–3 / 4–6 / 7–10 |
| Fenster mit Licht, Wegstrecke mit leuchtendem Punkt | `…/zimmer2.html`, `…/kompass-start.html` | Zustand hängt am Stand, nie an Textlänge |
| Farbwelt A+ und Ilses Rudel | `2026-09-08-farbwelt-stationen.md` | Farbe als Band, Rahmen, Knopf; ein Tier je Station als Begleiter |

Die Bilder bleiben in der hellen Farbwelt A+: Farbe als Band und Rahmen, nie als Fläche unter Text; Emoji und SVG auf Papier, kein dunkler Grund.

## 3b. Die Ideenfinderin-Stationen — Petras Hinweis „bei der Ideenfinderin" (15.09.)

Alle liegen in `outputs/reel-generator-tool/stillgelegt/2026-09-12-grossputz/ideenfinder-station*.html` (Kopf noch mit „Mein kleiner Laden", die Mechanik ist die der Ideenfinderin). Was dort schon gebaut war und wieder mitkommt:

| Station | Bild-Mechanik | Passt heute zu |
|---|---|---|
| 1 „Lass Dampf ab" | Aufwärm-Karten, die pulsieren und aufklappen — kein Formular zum Start | Fach-Startseite, Eröffnung |
| 2 „Deine Stärken sammeln" | Stärke-Karten fallen in einen Korb (`bump`), freiwillige Tiefer-Runde | Profil „Das bringst du mit" |
| 3 „Dein Feuer" | **Lagerfeuer-Regler**, ein Scheit nach dem anderen, nur nach oben, flackert ab 85, Satz statt Zahl | Energie, jede Stufe |
| 4 „Deine Lebens-Landkarte" | die Vita als erzählter Weg, am Ende eine Landkarte — „erzählt, nie Formular" | Verlauf / vorher → jetzt |
| 5 „Dein Traum-Platz" | A/B-Zukunftsbilder eins nach dem anderen, die Verdopplungs-Frage als Spiel | Wachstumsrealität „Und wenn es funktioniert?" |
| 6 „Die Verdichtung" | die Kisten-Schau: alles Gesammelte liegt sichtbar da, ehrlich auch wenn fast leer | Profil-Übersicht, Kiste |
| 7 „Wirklichkeits-Check" | eine Karte reist mit, wird geprüft | Realitätscheck |
| 8 „Dein Satz" | der Satz bekommt ein Siegel (`@keyframes siegel`) | bestätigen („Stimmt für mich") |
| 14 „Jetzt führst du deinen Laden" | die Schatzkiste öffnet sich als Abschluss-Zeremonie | Ankunft, Zimmer-Wechsel |

Dazu die Gemeinsamkeiten aller Stationen: Karten statt Felder, ein Schritt je Bildschirm, `bump`/`fade`/`pulse` als leise Bewegung (nichts blinkt, nichts drängt), und die Tiefer-Runde ist immer freiwillig.

## 4. Was im Ilse-Haus heute trocken ist — und was es bekommt

Die vier neuen Seiten (B4–B7) und das Profil (B1) sind funktional gebaut, als Formular und Liste. Sie bekommen je einen Spielzug, in dieser Reihenfolge (⭐ Empfehlung, Petra entscheidet):

| Rang | Seite | Spielzug | Warum zuerst |
|---|---|---|---|
| ⭐ 1 | `profil.html` — die Grenzen-Stufe | **Grenzstein statt Auswahlliste:** Kiesel → Felsblock, Satz in ihrer Sprache statt „harte Grenze" | die Fünfer-Skala ist die wichtigste Eingabe der Frau (Matcher-Regel „nie wegkompensiert") und heute ein Dropdown |
| 2 | `dienstag.html` | **Bausteine als Bilder:** Spotlight, Figuren, Raster, Ort — jeder belegte Baustein zeigt sein Bild in der Stärke des Werts; offen = das Bild ausgegraut mit Frage | der Dienstag ist die Seite, die „Willst du diesen Alltag?" fühlbar machen soll |
| 3 | `probieren.html` | **Schritt oder Sprung** beim Anlegen (wie groß ist der Test) · **Vermutungs-Duell** als vorher/jetzt | das Bild aus Zimmer 4 passt eins zu eins |
| 4 | `hd.html` | Status als **Waage** Chart ↔ Leben: Spannung neigt sie, Übereinstimmung lässt sie stehen | erst, wenn die Bibliothek einen Eintrag hat |
| 5 | `index.html` (Fach) | **Landschaft** statt Knopfleiste: die vier Bereiche als Orte, Zustände als Licht | Rahmen um alles |

Jeder Spielzug hält die Grenze aus Abschnitt 1 und läuft durch Heddas Tor (die Sätze am Regler).

## 5. Was fest bleibt

Die Daten und die API ändern sich nicht. Ein Grenzstein speichert dieselbe `art` wie das Dropdown; ein Feuer speichert dieselbe Stufe. Die Bilder sind eine Schicht auf dem Rohbau, nie eine zweite Wahrheit.
