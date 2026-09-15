# Bericht: Landingpage-Vorschau More is Yours auf Fassung 0.3 umgebaut

Datum: 15.09.2026 · Von: Claude Code · Auftrag: Petra (über Co-Work)
Status: Vorschau gebaut und deployt. Live-Seite unverändert. Nicht für den Livegang freigegeben.

## 1. Link zur noindex-Vorschau

https://petras-reels.vercel.app/moreisyours-vorschau-2026-09-15.html

Absicherung: `<meta name="robots" content="noindex, nofollow">` in der Seite plus X-Robots-Tag `noindex, nofollow` als Server-Kopfzeile (die Zentrale gibt ihn für alles außer den vier freigegebenen Seiten mit). Gelbes Vorschau-Band oben, damit niemand die Seite mit der Live-Seite verwechselt.

Textquelle: `forschung/Landingpage-Copy-0.3-CoWork.md` (Commit 13b4827 in diesem Repo). Kopfzeile dort: „Status: Von Petra am 15.09.2026 als Grundlage für die noindex-Vorschau freigegeben. Noch NICHT für die Live-Seite freigegeben."

Prüfung: jede Zeile der Copy wurde maschinell gegen den sichtbaren Seitentext abgeglichen. Alle Sätze sind wortgleich enthalten. Null Gedankenstriche in Copy und Seite.

## 2. Stellen, an denen die Umsetzung vom Text abweicht (mit Grund)

Kein Satz wurde umformuliert, ergänzt oder gekürzt. Folgende Punkte sind Gestaltung, keine Textänderung:

| Stelle | Was ich gemacht habe | Grund |
| --- | --- | --- |
| Abschnittslabels („WIEDERERKENNUNG", „DAS PROBLEM", „DER GEGENWERT" usw.) | stehen als kleine Kicker-Zeile in Normalschrift über der jeweiligen Überschrift, ohne Nummer | Die Labels sind im Text Überschriften zweiter Ordnung. Als Kicker bleiben sie sichtbar, ohne mit der eigentlichen Überschrift zu konkurrieren. Nummern („3 ·") sind Arbeitsstruktur, nicht Seitentext. |
| Abschnitt 12 hat im Text nur das Label „FRAGEN" und keine eigene Überschrift | „Fragen" als Kicker, darunter direkt die sieben Fragen als aufklappbare Karten | Es gibt keinen Überschriftensatz, den ich hätte setzen können, und erfinden darf ich keinen. |
| Navigation | „Worum es geht" springt zu Abschnitt 2 · „Was du bekommst" zu Abschnitt 7 · „Über Petra" zu 10 · „Pilotphase" zu 11 (hervorgehoben) · „More is Yours" ist die Wortmarke und springt nach oben | Die Copy nennt die Ziele nicht. Das sind meine Zuordnungen. Am Handy zeigt die Navigation nur „Pilotphase", der Rest ist eingeklappt, damit die Kopfzeile nicht umbricht. |
| Textlink „Worum es geht ↓" im Einstieg | springt zu Abschnitt 2 | gleiche Zuordnung wie in der Navigation |
| Knopf „Mehr über die Pilotphase erfahren" | springt zur Pilotphase-Sektion | wie beauftragt |
| Knopf „Ja, ich möchte mehr über die Pilotphase erfahren" (Abschnitt 11) | öffnet eine E-Mail an info@moreisyours.de mit Betreff „Pilotphase More is Yours" | Der Auftrag verbietet Formular und Datenerfassung. Ein Knopf ohne Ziel wäre tot. Eine E-Mail sammelt nichts auf der Seite und passt zum Kleingedruckten („Du erfährst alles Wichtige, bevor du dich entscheidest"). Wenn das nicht gewünscht ist: eine Zeile, und der Knopf springt stattdessen nach oben oder bekommt ein anderes Ziel. |
| „NEU, direkt darunter:" | weggelassen, der Satz „Am Ende hast du es schwarz auf weiß …" steht als hervorgehobener Kasten (weiß, Mint-Rahmen) unter dem Einstiegstext | wie erlaubt |
| Zeilen „Kicker:", „Bild:", „Knopf:", „Textlink:", „Kleingedruckt:" | als Gestaltung umgesetzt, nicht als Text | wie erlaubt |
| Bildzeile „Petra von Lüpke · Gründerin von More is Yours" | als Bildunterschrift auf dem Einstiegsfoto | wie im Text vorgesehen |
| Fotos | Einstieg: IMG_2671-2 (Sessel) · Abschnitt 10: IMG_2636 | die beiden Porträts der Live-Seite, wie erlaubt |
| Die sechs Zitate in Abschnitt 2 | als Karten mit farbigem Seitenband, in der Reihenfolge des Textes | „Zitate als hervorgehobene Blöcke" |
| Die Liste der Wege in Abschnitt 9 | die fett gesetzte Zeile ist in einzelne Chips zerlegt („Anstellung und Teilzeit", „Freelancing", … „und weitere"), Reihenfolge unverändert | am Handy lesbarer als eine lange fette Zeile; die Wörter sind dieselben |
| Vier Antworten (Abschnitt 5, Schritt 3) und Plan-Liste (Abschnitt 7) | Aufzählungen mit farbigem Punkt bzw. Häkchen | Struktur des Textes |
| Zitat „Nicht mehr Möglichkeiten. Sondern deine." und „Lass dein Morgen nicht zum Gestern werden." | groß, zentriert, orange Oberkante | im Text als Zitat-Überschrift markiert |
| Footer | „Pilotphase" springt zu Abschnitt 11, „Impressum" und „Datenschutz" verlinken auf die bestehenden Seiten der Zentrale | Ziele nennt die Copy nicht |
| Gelbes Vorschau-Band ganz oben („Vorschau · nicht öffentlich · Fassung 0.3 · Stand 15.09.2026 · die Live-Seite ist unverändert") | zusätzlich zur Copy | nur für Petra, fliegt beim Livegang raus |

Gestaltung insgesamt: helle Farbwelt A+ (Papier #fff8ec, weiße Karten, Nachtblau-Schrift, Orange als Leitfarbe, Akzente Pink · Flieder · Mint · Gelb · Grün nur als Band, Rahmen, Punkt oder Chip). Playfair für Überschriften wie auf der Live-Seite. Abschnitte wechseln zwischen Papier und der zweiten Ebene (#fff3e0), damit die Seite am Handy Rhythmus hat.

Gesperrte Themen: Preis (außer in den Sätzen der Copy selbst), Community, PEMS, Kompass, sieben Zimmer kommen auf der Seite nicht vor. Kein Formular, kein Skript, keine Datenerfassung.

## 3. Offene Punkte vor dem Livegang

1. **Datenschutzerklärung.** Die verlinkte `datenschutz.html` ist die bestehende der Zentrale. Sie muss geprüft werden, ob sie für die Landingpage in dieser Fassung reicht (E-Mail-Kontakt, Hosting bei Vercel, Schriften liegen lokal). Zuständig: Dr. Falk.
2. **Interessentinnenliste.** Es gibt keine. Der Pilot-Knopf öffnet eine E-Mail. Sobald eine Liste kommen soll, braucht sie vorher: Rechtsgrundlage, Einwilligungstext, Speicherort (EU), Löschfrist, Double-Opt-in. Bis dahin bleibt es bei der E-Mail oder der Knopf bekommt ein anderes Ziel (Entscheidung Petra).
3. **Entfernung von Community, PEMS und Kompass von der Live-Seite.** Die Live-Seite `moreisyours.html` und die Unterseite `/pems` (`moreisyours-pems.html`) sind unverändert und stehen noch mit diesen Inhalten online. Beim Livegang der Fassung 0.3 müssen beide bewusst ersetzt oder abgeschaltet werden, inklusive `sitemap.xml` und der Vercel-Regel, die `/pems` ausliefert. Das ist ein eigener Bauschritt mit Petras Go.
4. **Ziel des zweiten Knopfs** (siehe Tabelle): E-Mail ist meine Annahme, nicht Petras Entscheidung.
5. **Heddas Drei-Brillen-Tor** ist für die Fassung 0.3 noch nicht protokolliert. Der Text ist von Petra freigegeben, das Tor läuft trotzdem vor dem Livegang.
6. **Zahlen auf der Seite** („9 Teams in 120 Städten", „mehr als 100.000", „670 €") stammen aus der freigegebenen Copy. Vor dem Livegang einmal gegen die echten Zahlen halten (Grundregel: nur echte Zahlen).

## 4. Was NICHT gemacht wurde

- Live-Seite moreisyours.de nicht angefasst, nichts dorthin deployt.
- Keine andere Datei fachlich verändert.
- Keine Startseiten-Kachel in der Zentrale (braucht Petras Go).

## Übergabe

→ PETRA: Vorschau am Handy ansehen, Ziel des zweiten Knopfs entscheiden.
