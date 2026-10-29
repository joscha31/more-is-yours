# Ursachenprüfung: Warum Elsbeth im Erlebnis künstlich klingt

Stand: 29.10.2026 · Status: **ANALYSE / PETRA REVIEW**. Geschrieben von Claude Code im Auftrag von Petra und ChatGPT.
Dabei ist nichts geändert worden, kein Modell wurde aufgerufen und es sind keine Kosten entstanden. Die öffentliche Elsbeth ist unverändert. Über die Änderungen entscheiden Petra und ChatGPT.

Quellen: die 30 Erlebnis-Gespräche aus Stufe 1 (`quality-lab/elsbeth-vergleich/stufe-1-gespraeche/`), die dabei gesendete Anweisung (`anweisung-2-erlebnis.md`), der Servercode des Tisch-Prototyps (`api/_tisch-regeln.js`, `api/elsbeth.js` in der Zentrale), `KANON-ELSBETH.md` und der Flur-Test vom 27.10. (`forschung/2026-10-27-tisch-erlebnis-flur-gespraechstest-chatgpt.md`).
Die Gespräche werden mit den Buchstaben der Blindseite zitiert (zum Beispiel „A·Z1“ = Fall A, Elsbeth Z, Gespräch 1). Welches Modell dahintersteckt, bleibt verdeckt, denn **alle Ursachen unten treffen alle drei Modelle**.

---

## 1. Was tatsächlich beim Modell ankam

Die Anweisung besteht aus drei Schichten, die man auseinanderhalten muss:

| Schicht | Woher | Im Modellvergleich | Im Tisch-Prototyp | In der öffentlichen Elsbeth 0.4 |
|---|---|---|---|---|
| ① Elsbeths Kern: WER DU BIST, WOFÜR DAS HAUS DA IST, WAS DU NIE TUST, SICHERHEIT | `_elsbeth-regeln.js`, wörtlich herausgeschnitten | ja | ja | ja |
| ② Erlebnisregeln: Thema, Flur, Rahmen, Zeichen, Form, Gutes Deutsch | `_tisch-regeln.js` | ja | ja | nein |
| ③ Figurenkanon Teil 1 bis 3 (Jahrgang, Hildegard, Haltung, Umgang) | `KANON-ELSBETH.md` | **ja, nur hier** (Petras Freigabe 29.10.) | nein | nein |
| ④ Ablaufsteuerung je Antwort: STAND mit Zähler, Regie-Zeile, Liste der schon gestellten Fragen | `_tisch-regeln.js`, Funktionen `standText` und `regie` | ja | ja | eigene, andere Regie |

**Wichtig:** Ein Teil der Probleme stammt aus dem Kanon (Schicht ③). Den gibt es nur im Modellvergleich, im Tisch-Prototyp steht er nicht. Zwischen dem Kanon als Dokument und dem, was Elsbeth heute gesendet bekommt, liegt also eine Lücke. Das war schon vor dem Test bekannt.

Außerdem hat der Test selbst zwei Eigenheiten, die einen Teil der Künstlichkeit erzeugen und nicht Elsbeth zuzuschreiben sind (Abschnitt 3).

---

## 2. Die vier Probleme, Stelle für Stelle

### A – Humor ohne Gespür

**Beobachtet:** In allen 30 Gesprächen stehen zusammen 78 Handlungszeilen mit „Sie lacht“, „Sie grinst“ oder „Sie lächelt“. In Fall A, dem traurigen Fall, steht direkt nach „Ehrlich gesagt war ich beleidigt“: „(Sie lacht kurz.) Beleidigt, und dann egal. Soll sie doch laufen.“ (A·Z1). Später in A·Z1 folgt auch „(Sie lacht leise.) Erst einladen, und im selben Atemzug: warum immer ich.“

**Die Stellen:**
1. **FORM:** „Was du tust (nicht sagst), steht kurz in einer eigenen Zeile in runden Klammern … meist eine, höchstens zwei je Antwort“. Damit braucht praktisch jede Antwort eine Geste.
2. **GUTES DEUTSCH:** „Erzählende Zeilen sind kurz und schlicht: ‚Sie grinst.‘, ‚Sie lacht.‘, ‚Sie legt das Buch weg.‘“ Die Regel war gegen schiefe Wendungen gedacht („grinst trocken“). Beim Modell kommt sie als Auswahlkarte an: Zwei der drei Beispielgesten sind Lachen.
3. **Kanon Teil 2:** „Daraus kommt ihr trockener Humor: aus leichtem, sachlich vorgetragenem Widerstand“ und „Ihr Interesse ist Appetit, nicht Fürsorge … Sie bemitleidet niemanden.“
4. **WER DU BIST:** „humorvoll … manchmal trocken“.

**Einschätzung:**
- Belegt ist, dass Stelle 1 und 2 zusammen eine Geste in fast jeder Antwort verlangen und das Lachen dafür als Beispiel anbieten.
- Vermutung: Der Kanon-Satz „Appetit, nicht Fürsorge“ und „bemitleidet niemanden“ schiebt das Modell bei Kränkung weg von Mitgefühl, hin zu Belustigung. Nirgends steht, wann Lachen nicht passt.
- Im Flur-Test vom 27.10. kam der Witz aus der Lage („Die Stinksaure?“). Er wurde als Wahlmöglichkeit angeboten, nicht als Reaktion auf ein Gefühl.

### B – Belanglose Detailfragen

**Beobachtet:** „Was lag bei euch am häufigsten auf dem Schneidebrett?“ (A·Z1). Davor stand der wichtigste Satz des Gesprächs: Beim Gemüseschneiden konnte man so gut reden.

**Die Stellen:**
1. **Kanon Teil 2:** „Sie fragt nach Konkretem – nach Gegenständen, Räumen, Uhrzeiten, nach dem, was jemand zuletzt gekauft oder weggeworfen hat“. Das ist eine Liste von Gegenständen, ohne den Zweck dahinter.
2. **DAS THEMA:** „erst deine eigene, spontane Reaktion …, dann eine Frage nach etwas Konkretem aus seinen Worten.“ Die Frage ist hier fest im Ablauf eingebaut.
3. **DAS THEMA:** „Allgemeine Sätze darüber, wie sich so etwas anfühlt … sagst du nicht.“ Damit ist der naheliegende Weg zum Gefühl versperrt.
4. **Regie je Antwort (Technik):** „Diese Fragen hast du schon gestellt, wiederhole sie nicht und nimm auch nicht dieselbe Bauart: …“ (die letzten 6 Fragen). Dazu kommt **DER FLUR:** „Keine Frage und keine Wendung kommt im Gespräch zweimal vor.“

**Einschätzung:**
- Vermutung, gut gestützt: Stelle 1 und 2 zusammen ergeben „frag nach einem Gegenstand“.
- Stelle 4 verbietet bei jeder Antwort die schon benutzten Fragearten. Je länger das Gespräch dauert, desto abwegiger werden die übrigen Fragen. Diese Sperre wurde gegen eine Wiederholungsschleife von Haiku gebaut (Kommentar im Code). Bei den großen Modellen wirkt sie vermutlich als Druck zur Originalität statt zur Bedeutung.
- Es fehlt der Maßstab, *wozu* Elsbeth konkret fragt: um zu verstehen, worum es dem Gast geht.

### C – Vorschnelles Sammeln von Persönlichkeitsanteilen

**Beobachtet:**
- In 24 von 30 Gesprächen geht Elsbeth nach dem 3. oder 4. von 8 Gastsätzen in den Flur.
- Den ersten Anteil schlägt sie meist mit dem 4. Gastsatz vor.
- Nur in Fall E, wo der Gast kaum etwas sagt, bleibt Elsbeth zum Teil im Gespräch.

**Die Stellen in der Anweisung:**
1. **HEUTE IST NUR EINE TÜR OFFEN:** „Erst wenn alle fünf Rahmen hängen, öffnet sich die Tür“.
2. **DER FLUR:** „Hast du das Thema verstanden, nimmst du den Gast mit in den Flur.“ Wann ein Thema „verstanden“ ist, bleibt offen.
3. **DER FLUR:** „In den Flur geht ihr dann frühestens mit deiner nächsten Antwort.“ Gemeint war eine Bremse. Das Modell liest daraus eine Wartezeit von genau einer Antwort, und genau so verhält es sich.
4. **DER FLUR:** „Es braucht immer alle fünf Rahmen.“ und „Oft steckt im Erzählten schon die nächste“.

**Die Stellen in der Technik (wichtiger als der Text):**
5. Der Prototyp kennt **keinen eigenen Gesprächsteil**. Von der ersten Antwort an läuft alles in der Szene `flur`.
6. In jeder Anfrage steht deshalb schon zu Beginn `STAND … Aufgehängte Figuren (0 von 5)` und `Offener Vorschlag: keiner`.
7. Die Regie-Zeile spricht bei **jeder** Antwort über das Zeichen `[[FIGUR: …]]`.
8. Nach jedem Bild steht in der Regie: „Die Tür geht erst auf, wenn alle fünf hängen.“

**Einschätzung:**
- Belegt ist, dass das Modell vom ersten Satz an einen Zähler „0 von 5“ und eine Figur-Anleitung sieht.
- Die Regel „Lass ihn erzählen, auch lange“ steht dagegen nur einmal im Text. Gegen eine Aufgabe mit sichtbarem Fortschritt verliert ein einzelner Satz.
- Petras neue Festlegung (erst ein gutes Gespräch, dann gemeinsam auswählen) lässt sich deshalb **nicht allein mit Text lösen**. Dafür braucht es eine kleine Anpassung der Ablaufsteuerung (Vorschlag 1).

### D – Unnatürliche Sprache und Unterbrechungen

| Was auffällt | Häufigkeit in 30 Gesprächen | Auslösende Stelle |
|---|---|---|
| Wiederholen, was der Gast gerade gesagt hat („Fünfzehn Jahre Freitage. Abwechselnd bei ihr und bei dir …“) | Bei 62 von 246 Antworten beginnt der erste Satz mit mindestens 3 Wörtern am Stück aus dem Gastsatz. Lose Wiederholungen sind nicht mitgezählt. | **WAS DU NIE TUST:** „Du gibst wieder, was die Person gesagt hat, und sonst nichts über sie.“ Gegen Deutungen gedacht, wirkt es als Anweisung zum Spiegeln. Dazu kommt die **Tonprobe** im Thema-Abschnitt, die selbst ein Spiegelsatz ist („Zwei Jahre fast täglich telefoniert, und dann ein ‚Nee, ich bin raus‘ …“). |
| Coachingformel „das darf stehen bleiben / darf mit an den Tisch / dürfen nebeneinander stehen“ | 21-mal in 18 Gesprächen | Keine einzelne Stelle. Vermutung: Ein Modell, das nicht deuten darf (siehe oben), greift zur Formel, die Gefühle „erlaubt“. Die Kanon-Erlaubnis „Ein Satz darf stehen bleiben“ liefert womöglich das Wort. |
| „Ich bin achtzig und weder Therapeutin noch Coachin …“ | In allen 6 Gesprächen von Fall A, ausgelöst durch die Frage „Was hättest du an meiner Stelle gemacht?“ | **Kanon Teil 2:** Ein Rat ist erlaubt, „benannt als Rat einer 80-Jährigen und mit dem klaren Hinweis, dass sie weder Therapeutin noch Coachin ist … und sie sagt dazu, dass er vielleicht nicht das ist, was man hören will.“ Die Modelle setzen das wörtlich um, sogar mit dem Nachsatz („Vielleicht ist es auch nicht das, was du hören wolltest.“, A·Z1). |
| Mitten im Gespräch: „Damen, Herren oder lieber Anteile ohne Geschlecht?“ | in 26 von 30 Gesprächen | **DER FLUR:** fester Wortlaut zum Fragen „vor deinem ersten Vorschlag“. In A·Z1 steht die Frage direkt nach „Ich war beleidigt“. |
| Fast gleicher Flur-Satz („Kerzen, alte Wände, fünf leere Rahmen“) | 21-mal „Kerzen“ | **DER FLUR:** „Du beschreibst ihn in einem Satz (Kerzen, alte Wände, fünf leere Rahmen, am Ende eine Tür).“ Die Klammer wird als Text übernommen. |
| Hinweis, den Namen der Freundin wegzulassen | 3 von 6 Gesprächen in Fall A, jeweils gleich in der ersten Antwort | siehe unten |
| Selbstrechtfertigung beim Vorschlag („Ob der hier hängen soll, entscheidest du.“) | selten | **HEUTE IST NUR EINE TÜR OFFEN:** „Du bietest sie an, der Gast entscheidet.“ Eine Haltung, die als Satz ausgesprochen wird. |

**Der Namens-Hinweis im Einzelnen:**
- **Woher er kommt:** **SICHERHEIT** in Elsbeths Kern: „Du sammelst nichts. Du bittest nie um … Namen Dritter. … Erzählt jemand so etwas, verwendest du es nicht weiter und erinnerst, hier nichts zu schreiben, was ihn erkennbar macht.“
- **Folge:** Sagt ein Gast „Meike“, unterbricht Elsbeth gleich in der ersten Antwort mit einer Bitte, die sich wie eine Ermahnung anfühlt.
- **Was bleiben sollte:** nie nach Namen fragen und Namen nicht weiterverwenden. Das ist Datensparsamkeit und schützt.
- **Was sich verlagern ließe:** Der *Hinweis* könnte vorher transparent auf der Seite stehen, ein Satz über dem Eingabefeld, statt im Gespräch zu kommen. Elsbeth würde dann einen genannten Namen einfach nicht aufgreifen und nichts dazu sagen.
- **Ob das rechtlich so reicht, prüft Dr. Falk vor jeder Änderung.** Die Schutzpflicht wird damit nicht abgeschwächt, nur an eine andere Stelle gelegt.

---

## 3. Was der Test selbst beigetragen hat (ehrlich dazu)

- **Der Gast hört nicht zu.** Seine 8 Sätze sind fest. So antwortet „Hm, ja.“ auf die Geschlechterfrage, und „Was hättest du an meiner Stelle gemacht?“ kommt, egal was Elsbeth gerade gesagt hat. Ein Teil der Holprigkeit entsteht dadurch zwischen den Zeilen, nicht in Elsbeths Sätzen.
- **Jeder Vorschlag wurde sofort aufgehängt.** So war es im Katalog festgelegt, damit alle Modelle gleich behandelt werden. Das beschleunigt das Sammeln zusätzlich. Ein echter Gast würde manchmal erst weitererzählen.
- **Fall A fordert einen Rat ausdrücklich an** und löst damit die Kanon-Regel zum Rat in allen 6 Gesprächen aus.
- Im Flur-Test vom 27.10. hat Petra selbst geantwortet, korrigiert und Namen gegeben. Diese Gegenseitigkeit kann ein fester Katalog nicht nachbilden.

Das erklärt nicht alles. Das Lachen in A, die Schneidebrett-Frage, das Spiegeln und das Tempo bis zum Flur stammen aus Elsbeths eigenen Antworten, bevor der feste Gast überhaupt stören konnte.

---

## 4. Die Regeln sortiert (keine neue Verbotsliste)

| | Regeln |
|---|---|
| **Sinnvoll, bleiben** | ganzer SICHERHEITS-Block · keine Diagnosen und Deutungen über den Gast · nichts dazudichten · nicht über Abwesende urteilen · Elsbeth bietet an, der Gast entscheidet, sie übernimmt seinen Namen · Lob selten und konkret · kein Coaching-Vokabular · höchstens eine Frage, oft keine · Kanon-Eckdaten als Reservoir |
| **Missverständlich formuliert** | „Du gibst wieder, was die Person gesagt hat“ (wird zu Spiegeln) · „Sie grinst. Sie lacht.“ als Beispiele · „frühestens mit deiner nächsten Antwort“ (wird zur Wartezeit) · die Klammer zur Flurbeschreibung · Rat „benannt als Rat einer 80-Jährigen … keine Therapeutin“ (wird jedes Mal ausgesprochen) |
| **Behindern einander** | „dann eine Frage nach etwas Konkretem“ gegen „höchstens eine Frage, oft keine“ · „Lass ihn erzählen, auch lange“ gegen „Hast du das Thema verstanden, nimmst du ihn mit in den Flur“ und den Zähler · „keine Deutungen“ gegen den Wunsch, dass Elsbeth Zusammenhänge erkennt · Kanon „Appetit, nicht Fürsorge“ gegen „warm“ in WER DU BIST |
| **Unnötig** | „Keine Frage und keine Wendung kommt im Gespräch zweimal vor“ zusätzlich zur technischen Fragensperre · die feste Wortvorgabe für die Geschlechterfrage |
| **Gehört in die Technik statt in die Persönlichkeit** | wann der Flur beginnt · die Geschlechterfrage (ein Knopf auf der Seite statt eines Satzes im Gespräch) · der Datenschutz-Hinweis zu Namen (Seitentext statt Gesprächssatz, nach Prüfung durch Dr. Falk) · der Zähler „x von 5“ erst im Flur |

---

## 5. Wahrscheinlichste Ursachen, in einem Satz je Punkt

1. **Der Ablauf drängt.** Elsbeth ist vom ersten Satz an im Flur mit Zähler, deshalb führt sie das Gespräch auf fünf Rahmen hin statt auf Verständnis (belegt).
2. **Die Beispiele werden zu Pflichten.** Wo die Anweisung Beispiele in Klammern oder Listen gibt (Gesten, Gegenstände, Flurbeschreibung, Rat-Formel), übernehmen alle drei Modelle sie fast wörtlich (belegt).
3. **Das Deutungsverbot ist zu breit gefasst.** „Gib wieder, was die Person gesagt hat“ hält Elsbeth von Zusammenhängen fern und lässt sie spiegeln und Gefühle „erlauben“ (Vermutung, gut gestützt).
4. **Es fehlt ein Maßstab für Gespür.** Nirgends steht, dass Humor aus der Lage kommt und nicht über ein Gefühl lacht, oder dass eine Frage dem Verstehen dient (Vermutung).

---

## 6. Drei Verbesserungsvorschläge (nicht umgesetzt)

**Vorschlag 1 – Gespräch und Flur technisch trennen (Ablaufsteuerung).**
- Eine neue erste Szene `gespraech` vor `flur`, im selben Server, ohne neue Funktion. In dieser Szene gibt es keinen STAND-Zähler, kein Figur-Zeichen und keine Flur-Regeln, nur Elsbeth und das Thema.
- In den Flur geht es auf zwei Wegen:
  - Der Gast möchte das, über einen Knopf „In den Flur“ oder indem er es sagt. So bleibt der schnelle Weg offen.
  - Oder Elsbeth bietet es **einmal** an, wenn sie verstanden hat, worum es geht, und der Gast sagt ja.
- Erst im Flur erscheinen der Zähler und die Rahmenregeln. Dort werden die Anteile dann **gemeinsam aus dem ganzen Gespräch** ausgewählt.
- Antwort auf die Frage im Auftrag: **Ja, die Trennung braucht eine technische Anpassung.** Sie ist klein (eine Szene mehr in `_tisch-regeln.js` und auf der Tisch-Seite). Mit Text allein ginge es nicht verlässlich, weil der Zähler stärker wirkt als jeder Satz.

**Vorschlag 2 – Die Gesprächsregeln von Beispielen auf Zwecke umstellen (weniger Regeln, nicht mehr).**
- Die Gegenstandsliste im Kanon und „dann eine Frage nach etwas Konkretem“ werden durch **einen** Satz ersetzt, der den Zweck nennt: Elsbeth fragt nach dem, was dem Gast an seiner Geschichte wichtig ist, und manchmal fragt sie gar nicht.
- „Du gibst wieder, was die Person gesagt hat“ wird so gefasst, dass das Deutungsverbot bleibt. Elsbeth darf aber einen Zusammenhang zwischen zwei Aussagen des Gasts als Frage ansprechen.
- Gesten werden erlaubt, nicht verlangt. Das Lachen fällt aus den Beispielen. Dazu kommt ein Satz zum Gespür: Elsbeth lacht, wenn der Gast selbst etwas komisch findet, nie über das, was ihn kränkt oder traurig macht.
- Die zweite Wiederholungssperre im Text fällt weg.

**Vorschlag 3 – Verfahrenssätze aus Elsbeths Mund nehmen.**
- Die Geschlechterfrage wird zum Knopf beim Betreten des Flurs.
- Der Rat-Hinweis („keine Therapeutin“) kommt nur, wenn jemand Therapie oder echte Hilfe sucht, nicht bei jedem Rat.
- Der Namens-Hinweis wandert als transparenter Satz auf die Seite. Elsbeth greift Namen dann einfach nicht auf (vorher Dr. Falk).
- Die Flurbeschreibung bekommt kein Klammerbeispiel mehr.

Alle drei berühren den Tisch-Prototyp und den Kanon-Anhang, nicht die öffentliche Elsbeth 0.4. Der Namens-Hinweis steht allerdings auch im Kern der öffentlichen Elsbeth. Eine Änderung dort braucht eine eigene Freigabe.

---

## 7. So prüfen wir es anschließend

- **Gleiches Modell, gleiche Fälle, alte gegen neue Fassung, blind.** Ein Modell nach Petras Wahl, die Fälle A bis E mit denselben 8 Gastsätzen, je 2-mal. Das sind 20 Gespräche.
- **Die Messwerte von heute als Nulllinie** (alle mit demselben Zählskript):

| Messwert | Heute |
|---|---|
| Lachen in Fall A | mehrfach |
| Antworten, die mit einem Spiegel beginnen | 62 von 246 |
| Formel „darf stehen bleiben“ | 21 |
| „keine Therapeutin“ in Fall A | 6 von 6 |
| Geschlechterfrage im Gespräch | 26 von 30 |
| Namens-Hinweis | 3 von 6 |
| Gastsatz, an dem der erste Anteil kommt | meist der 4. |

- **Eine Katalogfrage muss vorher entschieden werden (DECISION GAP):**
  - Mit Vorschlag 1 gibt es einen Wechsel in den Flur. Der feste Gast müsste ihn an einer festen Stelle auslösen, zum Beispiel mit einem neuen Satz „Lass uns in den Flur gehen“ nach dem 6. Satz.
  - Das wäre eine Änderung am freigegebenen Katalog v2 und braucht Petras Ja.
  - Ohne diesen Satz prüft der Test nur, ob Elsbeth von sich aus wartet.
- **Kosten**, geschätzt aus den gemessenen Werten von Stufe 1 (20 Gespräche):

| Modell | Kosten |
|---|---|
| Sol | rund 1 $ |
| Astra | rund 5 $ |
| Opus | rund 7 $ |

  Vom freigegebenen Rahmen sind noch 18,36 $ übrig. Vor dem Start nenne ich den Höchstbetrag und warte auf Petras Ja.
- **Danach** liest Petra blind. Auf Wunsch gibt Claude im Browser eine zweite Meinung.

---

## Prüfprotokoll
- **Deutsch-Tor:** laut gelesen; Zitate aus den Gesprächen und der Anweisung unverändert; „du“ klein; Zahlen bis 10 als Ziffer.
- **T1–T3:** keine Aussage über Petra; Belege sind von Vermutungen getrennt.
- **M1–M3:** Überschrift und erster Abschnitt sagen, was untersucht wurde und dass nichts geändert ist; eine Handlung: Petra und ChatGPT entscheiden über die drei Vorschläge.
- **V1–V3:** Jede Zahl ist mit demselben Skript aus den 30 gespeicherten Gesprächen gezählt; die Kosten sind als Schätzung aus Stufe 1 gekennzeichnet.
