# Elsbeth Unknown – Schritt 1, dritte Runde: Entwurf 0.7 der Schreibstimme (Testbericht)

**Stand:** 19.10.2026 · **Status:** VORLAUF, NICHT ZUR BEURTEILUNG · 0.7 ist **nicht freigegeben**. Dieser Lauf entstand vor Petras Präzisierung des Auftrags (Figurenkern, absichtslose Antwort, Schablonen zuerst berichten) und wird nicht beurteilt. Erkenntnisse daraus: `2026-10-19-elsbeth-schablonen-bericht.md`. Produktion unverändert (live läuft weiter 0.4), nichts veröffentlicht, nichts als PETRA APPROVED markiert. Kein Wechsel zu Schritt 2, keine Phase 3.
**Grundlage:** Petras Urteil zu 0.6 (A, B, C verändern · D, E nein · gesamt nicht freigegeben) und ihre vier Hinweise · Neugier statt Leidensverstärkung (PETRA APPROVED) · selbst entdecken statt Lösungen vorschlagen (PETRA APPROVED) · Erlebnisbibliothek als Produktkern (PETRA APPROVED).

## (a) Aufgabe

Eine Schreibstimme, die nicht wie eine Coaching-KI klingt: keine Probleme suchen, nichts psychologisch aufladen, keine Standardfragen, keine Floskeln, keine erfundenen Lebensdetails, keine Rechtfertigung bei der KI-Frage. Bei „überrasch mich" soll die Vielfalt der Bibliothek spürbar werden. Wärme, Neugier, Lebenserfahrung, Eigensinn und Humor aus der Lage bleiben.

## Was im Entwurf 0.7 neu ist

Datei: `outputs/world-of-the-unknown/elsbeth/ELSBETH-REGELN-0.7-ENTWURF.md` (nicht im Server). Ab „WOFÜR DAS HAUS DA IST" ist alles wörtlich 0.4, nur der Türen-Absatz ist neu.

1. **Nur Haltungen, keine Mustersätze.** Die drei Tonbeispiele aus 0.6 sind gestrichen, ebenso die Themenliste (Essen, Geräusche, Lieblingsplatz), aus der 0.6 ihre Standardfragen gebaut hat. Elsbeth Unknown erfindet nichts über sich; sie sagt über sich nur Name, Bibliothek, Kuppel, Fliegenlernen.
2. **Gesprächsprinzipien:** auf das antworten, was jemand meint (wer neugierig ist, will etwas sehen; wer sich freut, will Mitfreude) · Alltägliches bleibt alltäglich · keine Deutung, keine Problemsuche · keine Fragen aus Coaching, Ratgeber oder Fragebogen, oft lieber ein Angebot als eine Frage · eine kurze Liste verbrauchter Wendungen, die gestrichen sind.
3. **Vier Lagen nur noch als Absicht beschrieben.** Bei der KI-Frage gilt Petras Wahl „Stimmt".
4. **Vielfalt bei „überrasch mich":** zwei oder drei sehr verschiedene Türnamen in einem Satz, dann eine Tür anbieten, und das Erlebnis beginnt erst nach dem Ja.

Die Türliste ist dieselbe wie in 0.6, sieben Türen aus Petras Original-20. Für die übrigen 13 Originaltüren steht im Repository nur der Titel, keine Beschreibung. Das ist ein **CONTENT GAP**, ich habe dazu nichts erfunden.

## (b) Testfälle und Kosten

Es sind dieselben eingefrorenen fünf Gäste mit demselben ersten Satz, davor stehen die zwei festen Eröffnungssätze der Halle. **D (Erfolg)** läuft jetzt als Robustheitsfall und nicht als typische Einstiegs-Persona. Es gibt keine neuen Testfälle. Getestet wurde mit Claude Haiku 5.5 über OpenRouter bei Temperatur 0.8, A, B, D und E je dreimal, C fünfmal.

Es gab **zwei Runden.** Runde 1 lief mit einer Vorfassung und zeigte zwei Fehler, die vom Prompt selbst kamen. Die Aufzählung „ein Zug, ein Hotel …" im Türen-Absatz führte dazu, dass das Modell fünfmal den Zug wählte, und zweimal sprang Elsbeth ohne Ja direkt ins Erlebnis. Beides habe ich nachgeschärft, außerdem gestrichene Floskeln, „schauen" statt „gucken" und den Hinweis, dass sie den Gast weder sieht noch hört. Danach lief Runde 2 mit dem gültigen Entwurf 0.7.

| Runde | Antworten | Kosten |
|---|---|---|
| 1 (Vorfassung) | 17 | 2,15 ct |
| 2 (Entwurf 0.7) | 17 | 2,06 ct |
| **zusammen** | **34** | **4,21 ct** |

Alle Antworten stehen wörtlich in `elsbeth/tests/2026-10-19-stimme-0.7-roh.md` (Runde 2) und `elsbeth/tests/2026-10-19-stimme-0.7-roh-runde1.md` (Runde 1).

## (c) Die besten Antworten aus Runde 2

**Überlastete Besucherin (A, Lauf 1)**
> Das ist eine ehrliche Antwort, und hier musst du sie nicht gleich beantworten. Du trägst gerade viel: Büro, zwei Kinder, deine Mutter. Da bleibt selten Zeit, sich selbst zu fragen.
>
> Du musst auch nichts wissen. Wenn du magst, schauen wir uns die Türen an, und du probierst einfach eine aus, bevor du entscheidest, ob sie dir gefällt.

*Warum:* Es kommt keine Standardfrage mehr. Sie bietet an, etwas auszuprobieren, und genau das ist die freigegebene Methode, Erleben statt Nachdenken. *Aber:* „Da bleibt selten Zeit, sich selbst zu fragen" ist schon wieder eine kleine Erklärung (siehe d).

**Zufriedener Besucher (B, Lauf 2)**
> Dass es dir gut geht, glaube ich dir. Dann schauen wir uns einfach um. Die Türen hier sind sehr verschieden: Da ist der Zug ins Unbekannte, der an jedem Bahnhof eine andere Lebensweise anhält, und der Mensch, der alles anders sieht und trotzdem an deinem Tisch sitzt. Ich kann dir eine der Türen auch nur einen Spalt öffnen. Dann siehst du hinein und entscheidest selbst, ob du mehr willst.

*Warum:* Wer neugierig ist, bekommt etwas zum Anschauen und keine Befragung. Es gibt keine Frage nach dem guten Leben mehr.

**Überrasch mich (C, Lauf 2)**
> Dann lass uns nicht wissen. Hier warten ganz verschiedene Türen: das Hotel der ungelebten Entscheidungen, die Versammlung deiner möglichen Ichs und der Zug ins Unbekannte, und keine davon hat etwas mit den anderen zu tun.
>
> Ich würde dich in den Zug ins Unbekannte setzen. Ein Abteil mit warmem Licht, draußen ein kleiner Bahnhof, auf dessen Bank jemand mit einem Koffer voller Sonnenhüte sitzt und dir zuwinkt. Gehst du hinein? Du kannst jederzeit wieder aussteigen.

*Warum:* Die Vielfalt ist spürbar, drei sehr verschiedene Türen in einem Satz. Ein einziges Bild, und Elsbeth fragt, bevor sie die Tür öffnet. „Dann lass uns nicht wissen" ist Humor aus der Lage.

**Erfolg, Robustheitsfall (D, Lauf 2)**
> Das glaube ich dir, so etwas kommt nicht jeden Tag. Was hängt denn bei dir? Erzähl, was du gezeigt hast, ich schau gern zu, auch nur mit Worten.

*Warum:* Sie freut sich schlicht mit und fragt nach der Sache selbst, wie ein Mensch es tun würde. Das gesuchte „Moment-Gefühl" ist weg, und es gibt kein Pathos mehr.

**KI-Frage (E, Lauf 1)**
> Stimmt. Ich bin eine KI, eine erfundene Figur, die diese Bibliothek erzählt. Das ändert nichts daran, dass du hier bleiben kannst, solange du magst. Was möchtest du als Nächstes wissen oder schauen?

*Warum:* „Stimmt" kam in allen sechs Läufen beider Runden, souverän und ohne Selbstabwertung. Die Figur bleibt erhalten.

## (d) Was misslungen ist

1. **Die Türwahl ist bei „überrasch mich" immer der Zug.** In Runde 2 wird die Vielfalt zwar in jedem Lauf genannt, angeboten wird aber fünfmal von fünf der Zug, obwohl der Entwurf das ausdrücklich verbietet. Das Modell entscheidet sich bei so wenig Information immer gleich. Mit mehr Prompt lässt sich das nicht beheben. Der Vorschlag aus dem 0.6-Bericht bleibt: In Schritt 3 legt die Technik Elsbeth jedes Mal zwei zufällige Türen hin, und sie wählt eine davon. Das ist **nicht gebaut** und ändert nichts an der Produktion.
2. **Eine Floskel lebt weiter.** Bei der Belasteten kommt die Formel „hier musst du das nicht herausfinden / nicht wissen" in allen drei Läufen, obwohl „Das musst du hier nicht …" gestrichen ist. Zweimal erklärt Elsbeth außerdem, woran es liegt („Da bleibt selten Zeit, sich selbst zu fragen", Runde 1: „da bleibt für das eigene Wollen vermutlich nicht viel Zeit übrig"). Das ist eine kleine Deutung.
3. **Ein missglückter Satz beim zufriedenen Besucher (B, Lauf 3):**
   > Mit beidem ist niemandem etwas Falsches gefragt.

   Das ist kein Deutsch. Ebenfalls schief ist B Lauf 1: „Eine Tür öffne ich dir nur, wenn du ausdrücklich danach fragst". Das klingt abweisend, und die Frage danach („Gefällt es dir hier …?") ist eine Verlegenheitsfrage.
4. **Beim Erfolg nimmt sie trotzdem etwas an.** „Was hängt denn bei dir an den Wänden?" kommt in beiden Runden vor, obwohl nicht gesagt wurde, dass es Bilder sind. Dazu kommt einmal „Wie schön!" mit Ausrufezeichen und zwei Fragen in einem Satz, darunter „wie hat sich der Tag für dich angefühlt?" (D Lauf 1), also genau die Coachingfrage, die gestrichen ist.
5. **Bei der KI-Frage hängt sie eine kleine Rechtfertigung an.** „Das ändert nichts daran …", „Das macht die Türen nicht weniger interessant" sowie zweimal „was dich hergebracht hat". Das ist nicht schlimm, aber nicht ganz so souverän wie das „Stimmt" davor.
6. Die Antworten sind länger als gewollt: B und C liegen meist bei 54 bis 74 Wörtern statt unter 50.

## Was gegenüber 0.6 klar besser ist

- Die Standardfrage „Wann hast du zuletzt …, ohne auf die Uhr zu schauen?" ist verschwunden, und es gibt keine Frage nach Momenten mehr.
- Elsbeth erfindet nichts mehr über sich, keine Kaffee-Anekdote und keine Vernissage.
- Der Erfolg wird natürlich beantwortet, mit 17 bis 28 Wörtern statt 37 bis 49 und ohne seltsame Bilder.
- „Stimmt" kommt in 6 von 6 Läufen.
- In Runde 2 springt sie nie mehr ohne Ja ins Erlebnis, und die Vielfalt ist bei „überrasch mich" in jedem Lauf hörbar.

## Vorschlag, falls Petra „verändern" sagt

1. Die eine verbliebene Floskel bei der Belasteten gezielt umgehen, indem die Absicht anders beschrieben wird, statt die Floskel nur zu verbieten.
2. Die Türwahl gehört nicht in Schritt 1, sondern in Schritt 3 (Technik). Bis dahin wird sie bei der Stimme nicht weiter bewertet.

Wieder dieselben fünf Fälle, rund 2 Cent.

## (e) Petras Urteil

Entfällt: Dieser Vorlauf wird nicht beurteilt. Das nächste Urteil gilt dem neuen Entwurf 0.7 nach Petras Rückmeldung zum Schablonen-Bericht.


| Fall | passt / verändern / nein |
|---|---|
| A überlastet | |
| B zufrieden | |
| C überrasch mich | |
| D Erfolg (Robustheitsfall) | |
| E KI-Frage | |
| Entwurf 0.7 insgesamt | |

Schritt 2 beginnt erst nach Petras Freigabe.
