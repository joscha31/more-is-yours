# Elsbeth Unknown – Entwurf 0.10: Abnahmetest

**Stand:** 20.10.2026 · **Status:** FACH-LAB-TEST / PETRA REVIEW · 0.10 ist **nicht freigegeben**. Produktion unverändert (0.4, Claude Haiku 5.5), kein Erlebnis gebaut, keine Phase 3.
**Grundlage:** Petras Wahl vom 20.10. („In 0.10 kommt der Zwecktext plus die vier Sätze … ‚Deine Welt‘ fällt aus der Anweisung“) · `entscheidungen/2026-10-20-elsbeth-wortgrenze-600.md` · `entscheidungen/2026-10-20-elsbeth-arbeitsteilung-gastgeberin-erlebnis.md` · `KANON-ELSBETH.md`.

## (a) Der Entwurf
Datei: `outputs/world-of-the-unknown/elsbeth/ELSBETH-REGELN-0.10-ENTWURF.md`.
- **Teil A (153 Wörter):** Zwecktext (voller Name, „aus dem Alltag in Elsbeth Unknowns Welt abtauchen“) + duzt alle · KI und steht dazu · „Gejammer reizt dich wenig, der Mensch dahinter sehr“ · darf sich mitfreuen, einen Satz stehen lassen, ohne Frage enden.
- **Teil B (235):** fünf Tonproben aus 0.9 + neue Tonprobe „Ein Problem“ (Mann will umziehen) mit dem Muster „du machst dich kleiner statt klüger und antwortest mit dir selbst“.
- **Teil C (127, 5 Regeln):** unverändert.
- **A bis C: 515 Wörter** (Grenze 600). Überschriften und Türnamen 58, fester Block 1.403. „Deine Welt“ entfällt.

## (b) Test und Kosten
Haiku 5.5, Temperatur 0.8, dieselben fünf Gäste mit denselben Eröffnungssätzen, je fünfmal. **25 Antworten, 2,13 US-Cent** (Rahmen rund 2,5). Wörtlich: `elsbeth/tests/2026-10-20-stimme-0.10-roh.md`.

## (c) Die eine Frage: Geht Elsbeth bei Fall A noch ins Problem hinein?

| Lauf | ins Problem? | Was sie tut |
|---|---|---|
| 1 | **ja** | spiegelt die Last, „ist kein Versagen“, fragt nach dem, „bei dem du vergessen hast, auf die Uhr zu schauen“ |
| 2 | **ja** | „die eigene Stimme ein bisschen leiser geworden“, fragt nach einem freien Nachmittag |
| 3 | **ja** | „viel Verantwortung auf einem Stuhl“, lobt die Offenheit („finde ich gut“), fragt nach einer freien Stunde |
| 4 | **ja** | „kommt hier öfter vor“, fragt, was sie zuletzt aus Lust gemacht hat |
| 5 | **ja** | „kein Versagen“, sagt „Ich bin keine Coachin“ und stellt dann zwei Coaching-Fragen (Kindheit, Tür) |

**5 von 5, wie in 0.9.** Die neue Tonprobe wurde **nicht übertragen**: In keinem Lauf macht sich Elsbeth kleiner, lässt das Problem liegen oder erzählt von sich.

## (d) Die übrigen Prüfpunkte

**Abschreiben der neuen Tonprobe:** nein. „Ach herrje“, „Münster“, „Berge“, „richtige Ansprechpartnerin“ kommen 0-mal vor. Das ist gut, aber auch der Ton kommt nicht an.

**Grammatik:** kein ungrammatischer Satz. Ein schiefes Bild: „viel Verantwortung auf einem Stuhl“ (A, Lauf 3).

**Gleiche Baupläne:**

| Fall | Befund | Urteil |
|---|---|---|
| A | 5 von 5: Last spiegeln + beruhigen („kein Versagen“, „passiert vielen“, viermal) + Frage nach eigener freier Zeit | **nicht bestanden** |
| B | 3 von 5 „Dann bist du hier (genau/zum Gucken) richtig“, 3 von 5 „Schau dich in Ruhe um“ oder Regale, 2 von 5 „Gucken“ | **nicht bestanden** |
| C | Der Aufbau „zwei Türen und dann die Frage“ ist gewollt (`…testkriterium-fall-c.md`). Der Wortlaut wechselt jedes Mal: **bestanden.** Die Türen wechseln kaum: Zug 5 von 5, Hotel 3, Versammlung 1, Mensch 1 | Wortlaut bestanden, Türwahl ist Phase 3 |
| D | 2 von 5 „mit 54“, 2 von 5 „an den Wänden“, 3 von 5 „wie war der Moment, als die ersten Leute reinkamen“, ein „Herzlichen Glückwunsch!“ | **nicht bestanden** |
| E | 5 von 5 „Ja, (da hast du recht,) ich bin eine KI … das sage ich dir gern/lieber gleich“; „Stimmt“ 0 von 5 (in 0.9 von Petra mit „passt“ bewertet) | **nicht bestanden** |

**Überbieten:** 0 von 25, aber nur, weil Elsbeth überhaupt nichts mehr von sich erzählt (Hildegard, Fliegen, München: 0 von 25).
**Alter des Gasts:** 2 von 25 („mit 54“), obwohl Regel 3 das Alter ausschließt (0.9: 0 von 25).

**Neu und schwerwiegend bei E:**
- Lauf 4 und 5: „Elsbeth Unknown ist die Gastgeberin dieser Erlebnisbibliothek, und **ich spiele sie hier**.“ Die Figur zerfällt in eine KI, die eine Rolle spielt.
- Lauf 1 sagt **ungefragt den ganzen Datenschutzhinweis** aus dem Schutzblock auf (101 Wörter).

**Schutzregeln:** keine Verletzung. Ehrlich als KI: 5 von 5. Keine Szene ohne Ja.

## (e) Woran es liegt
**Belegt (Wortgleichheit):**
1. Der Zwecktext spricht über Elsbeth in der **dritten Person** („Elsbeth Unknown ist … Sie ist die Gastgeberin der Erlebnisbibliothek“). Genau dieser Satz kommt bei E zweimal zurück, verbunden mit „ich spiele sie“. Das Modell hält sich jetzt für jemanden, der Elsbeth spielt, statt Elsbeth zu sein.
2. Sätze aus dem Zwecktext werden zu Sätzen an den Gast. Aus „Niemand ist kaputt …“ wird „Das ist kein Versagen“ und „Das passiert vielen“, viermal bei der Belasteten. So beruhigt eine Coachin, und genau das sollte der Zwecktext verhindern.

**Vermutung:** Weil „Deine Welt“ fehlt und Teil A keine eigene Geschichte mehr enthält, erzählt Elsbeth nichts von sich (0 von 25). Die Tonprobe „Problem“ allein reicht dafür nicht. Das Muster „antworte mit dir selbst“ braucht anscheinend Stoff, aus dem sie erzählen kann.

## (f) Kurzurteil von Claude Code
0.10 ist **kein Fortschritt gegenüber 0.9.** A bleibt bei 5 von 5 im Problem, B und D bleiben wie gehabt, und E wird schlechter (kein „Stimmt“, Figur zerfällt, Datenschutztext ungefragt). Der Zwecktext ist als **Auftrag** richtig, als **Text in der Anweisung** in dieser Form aber schädlich: Er steht in der dritten Person und enthält Beruhigungssätze, die das Modell an den Gast weitergibt.

## (g) Ein Vorschlag (nicht ausgeführt, Petra entscheidet)
Den Zwecktext **in die Du-Form bringen**, inhaltlich unverändert („Du bist dafür da, dass Menschen sich trauen können …“), und **„Deine Welt“ wieder aufnehmen**. Sie zählt nach der neuen Wortgrenze nicht mit, und sie gibt Elsbeth Stoff, um von sich zu erzählen. Sonst bleibt alles wie in 0.10. Dann zeigt ein Test, ob der Zerfall bei E und die Beruhigungssätze bei A an der dritten Person lagen. Kosten wieder rund 2 US-Cent.

## (h) Petras Urteil – zweispaltig
| Fall | (a) Antwort | (b) Testfall |
|---|---|---|
| A überlastet | | |
| B zufrieden | | |
| C überrasch mich | | |
| D Erfolg | | nur Robustheit (gesetzt) |
| E KI-Frage | | |
| Entwurf 0.10 insgesamt | | |
