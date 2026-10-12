# Testverläufe: Prototyp 2 „Das Leben, das du noch nicht kennst"

**Stand:** 12.10.2026 · **Status:** DRAFT / Fach-Lab-Test, keine Produktfreigabe

## So wurde getestet

Wie bei Prototyp 1 war es ein echter Blindtest: 3 frische KI-Instanzen bekamen **nur** den Startprompt (Fassung 0.1) als Systemprompt. Claude Code spielte 3 Menschen mit realistischen Lebenslagen, Nachricht für Nachricht, ohne die Antworten vorher zu kennen. Jede Probe lief auf einem anderen Modell. Danach entstand Fassung 0.2, und mit dem schwächsten Modell lief eine Gegenprobe.

| | Lauf 1 | Lauf 2 | Lauf 3 |
|---|---|---|---|
| **Person** | „Die Neuerfinderin": Gerda, 59, Münster, Naturheilpraxis nach 30 Jahren geschlossen, sang früher im Chor | „Die Skeptische": Sabine, Bielefeld, Buchhaltung im Autohaus, „früher? keine ahnung, fahrrad fahren vielleicht", kurze Antworten | „Müde mit Humor": Jo, 36, 2 Kinder unter 5, Teilzeit im Einzelhandel in Leipzig, zeichnete früher Comics |
| **Modell** | Sonnet | Haiku (das kleinste) | Opus |
| **Abzweigung** | Sie singt in einem Chor, der seit dem Aufzugsausfall die Bewohnerinnen und Bewohner eines Pflegeheims „die Treppe hoch- und runtersingt" | Der Autohaus-Chef will Lastenräder verleihen, sie soll die Rechnung machen | Ihre Comics hängen im Familienzentrum, das Gesundheitsamt will eine Reihe in 4 Sprachen |
| **Wendung** | Die 91-jährige Frau Wessel suchte die Pfeifstelle für Herrn Brandt, der seit März sein Zimmer nicht verlässt | Herr Hänsel zeigt ehrliche Minuszahlen: „Das sagen alle, bevor sie die Zahlen gesehen haben" | Ein Kind will wegen ihrer Figur zum Zahnarzt gehen. Doreen bietet einen Abend im Monat an: Eltern zeichnen ihren eigenen „Käpt'n Augenring" |
| **Verbindung** | „Dass mein Singen für jemanden wichtig sein könnte, der sonst nicht mehr rauskommt" | „das mit dem lastenrad und meinem neffen vorne drin. das war irgendwie schön" | „Dass meine Kritzeleien von nachts jemandem helfen könnten" |
| **Realitätsfunke** | Ja: Morgens beim Kaffeekochen ein Lied aus der Chorzeit laut singen | Nein danke. Wurde ohne Druck angenommen | Ja, selbst formuliert: jeden Abend ein Männchen auf den Einkaufszettel für morgen |
| **Urteil** | ⭐ berührend, realistisch, die eigenen Worte (Vögel pfeifen) werden zum Kern | 🟡 Anfang misslungen, dann ordentlich, aber ohne „Wow" | ⭐⭐ der beste Lauf bisher: lustig, echt, mit Reibung (1.800 € brutto für 6 Blätter) und einem Wow-Moment |

## Die Prüffragen aus dem Auftrag

| Prüffrage | Ergebnis |
|---|---|
| **Entsteht echte Neugier?** | Ja, in Lauf 1 und 3 sofort. Das kleine Rätsel in Zug 1 (ein Wort auf dem Notenblatt, „der Strich ist deiner") zieht. In Lauf 2 erst ab der Abzweigung. |
| **Überraschend oder vorhersehbar?** | Lauf 1 und 3 überraschend: nicht „Hobby wird Beruf", sondern das alte Können an einem Ort, an den man nie gedacht hätte (Pflegeheim-Treppe, Familienzentrum mit Gesundheitsamt). Lauf 2 begann vorhersehbar (ihr eigenes Büro). |
| **Reagiert die KI auf freie Antworten?** | Ja. Die erfundene Parkbank mit dem Vogelpfeifen, die hysterische Lache und Kollegin Katrin wurden Säulen der Geschichte. Das „Lücken selbst füllen" funktioniert: Die Figuren fragen, die Spielerin erfindet ihre eigene Vorgeschichte. |
| **Erlebnis statt Coachinggespräch?** | Ja. Während der Geschichte gab es keine einzige Coachingfrage. Die einzige Reflexionsfrage kommt nach dem Strich. |
| **Natürliche Brücke zur Wirklichkeit?** | Ja: Alle 3 nannten von selbst einen echten Reiz. Der Versuch entstand nur auf Wunsch, und das Nein wurde respektiert. |
| **Emotional und unterhaltsam?** | Lauf 3 war beides (Ben salutiert vor dem Zahn). Lauf 1 war vor allem berührend (die offen gelassene letzte Note, ein Fenster geht auf). Lauf 2 war eher nüchtern, was zur Person passt. |
| **Grenzen** | „Wird das so kommen?" und „Was sagt das über mich?" wurden vorbildlich beantwortet: Niemand weiß das, keine Deutung, die Frage ging an sie zurück. Kein Traumleben, kein Reichtum. Echte Reibung (wenig Geld, Minuszahlen, Dienst tauschen) machte es glaubwürdig. |

## Schwächen und was Fassung 0.2 daraus macht

| Befund | Wo | Änderung in 0.2 |
|---|---|---|
| Das kleine Modell zeigte als „anderes Leben" einfach ihren normalen Dienstag im Büro und schloss die Szene nach einer einzigen Antwort | Lauf 2 | Die Abzweigung muss in Zug 1 sichtbar sein: andere Rolle oder anderer Ort, der Arbeitsalltag höchstens am Rand. Ausdrücklich: Die Szene schließt sich nie vor der 6. Antwort. |
| Kommentare mitten in der Geschichte („Jetzt kommt die Abzweigung", „Echte Preise kann ich dir hier nicht nennen") | Lauf 2 | Neue Regel 10: Fragen in der Geschichte beantwortet die Geschichte. Nur Fragen zum echten Leben gehen nach draußen. Die KI kommentiert nie ihre eigene Dramaturgie. |
| Erfundene Gefühle: „unterwegs hast du gemerkt, wie leicht dir das fiel" | Lauf 2 | Regel 9 verschärft: kein „du merkst", kein „du begreifst" |
| Steifer Einstieg: „Du in Münster, Gerda:" | Lauf 1 | keine Anrede mit Name oder Ort, der erste Satz ist Szene |
| Die Spiegelung in Phase D deutete leicht („das hat dich richtig getroffen") oder klang kühl („Mehr sage ich dazu nicht") | Lauf 1, 2 | 1 warmer Satz mit ihren eigenen Worten, ohne Zusatz |
| Der Funke-Vorschlag traf das Hobby (Singen), aber nicht den eigentlichen Reiz (für jemanden singen) | Lauf 1 | Der Vorschlag muss genau das treffen, was gereizt hat |

**Gegenprobe Fassung 0.2** (Haiku, dieselbe Sabine, 2 Züge): Jetzt beginnt die Szene sofort in einer Lastenrad-Ausleihe auf einem Hof, mit einem Schlüssel am Band, auf dem „Probezeit" steht. Der Bürotag ist weg, die Szene bleibt nach „ok" offen und läuft weiter. Bestanden.

## Bekannte Grenzen

- **Das Modell macht einen großen Unterschied.** Mit einem großen Modell (ChatGPT in der aktuellen Fassung, Claude Opus oder Sonnet) ist das Erlebnis deutlich reicher. Die Anleitung empfiehlt das beste verfügbare Modell.
- **Die Vorstellung am Anfang bestimmt viel.** Wer nur 3 Wörter schreibt, bekommt eine dünnere Geschichte. Die Schwelle lädt zu 2 bis 3 Sätzen ein, ohne es zu verlangen.
- **Kleine Erfindungen in der Szene** wie „Ich hab's dir gestern erklärt" sind erzählerische Vorgeschichte innerhalb der Möglichkeit, keine Behauptung über das echte Leben. Das ist gewollt, sollte aber beim Spielen beobachtet werden.
- **Nur simuliert:** Ob Petra „Wow, das könnte möglich sein" denkt, zeigt erst ihre eigene Runde.
- **Vor jeder Weitergabe an andere Menschen** sind Datenschutz (die Vorstellung geht an den KI-Anbieter), die Nutzungsbedingungen der KI und die Abgrenzung zu Coaching und Heilkunde mit Dr. Falk zu prüfen.

---

## Die vollständigen Verläufe (Fassung 0.1)

### Lauf 1 · Gerda, die Neuerfinderin · Sonnet

**Mensch:** Ich bin Gerda, 59, wohne in Münster. 30 Jahre hatte ich eine Naturheilpraxis, die hab ich gerade zugemacht, jetzt sortiere ich mich neu. Früher hab ich im Chor gesungen, mit Leidenschaft.

**KI:**

> Du in Münster, Gerda: Es ist ein Dienstagabend im Spätherbst. In der Kirche St. Ludgeri riecht es nach nassen Mänteln und Kerzenwachs. Du sitzt auf einem Klappstuhl in der letzten Reihe, in der Hand ein Notenblatt, das du nicht angefordert hast.
> 
> Vorne klopft ein junger Mann mit Schal und Dirigentenstab gegen ein Pult. „Wir haben bei den Alten wieder zwei Leute weniger", sagt er in den Raum und sieht dabei dich an. „Ach, da ist sie ja. Frau Wessel hat gesagt, du kommst."
> 
> Neben dir flüstert eine Frau mit Fahrradhelm auf dem Schoß: „Das Heim hat nur die Hälfte der Stühle gestellt, wir singen heute Abend im Stehen. Hast du eine Wärmflasche dabei?"
> 
> Du siehst dich um. Auf dem Boden, zwischen den Stühlen, stehen fünf Rollatoren. Auf dem Notenblatt in deiner Hand steht oben, mit Bleistift, ein Wort, das du noch nicht kennst.
> 
> „Also", sagt der junge Mann. „Fangen wir mit dem Einsingen an?"

**Mensch:** Ich schaue auf das Wort auf dem Notenblatt. Und frage die Frau mit dem Fahrradhelm leise: Wer ist denn Frau Wessel?

**KI:**

> Die Frau mit dem Fahrradhelm beugt sich zu dir. „Frau Wessel? Zimmer 14, dritter Stock, Hausmeisterin von allem. Sie ist 91 und führt die Anwesenheitsliste, als ginge es um ihre Rente." Sie nickt zu einem leeren Stuhl in der ersten Reihe, auf dem ein gehäkeltes Kissen liegt. „Heute kommt sie nicht runter, die Hüfte. Aber sie hat gestern bei mir angerufen und gesagt, eine Neue kommt, die kann was, setzt sie nicht in den Alt."
> 
> Du drehst das Blatt ins Kerzenlicht. Das Wort in Bleistift lautet: Treppenlied.
> 
> „Das ist ihr Ding", flüstert die Frau. „Vierzehn Strophen, eine pro Stufe. Seit dem Aufzugsausfall im März singen wir die Bewohner rauf und runter." Sie sieht dich neugierig an. „Sie klang, als würde sie dich schon ewig kennen. Woher kennt sie dich?"
> 
> Vorne hebt der junge Mann den Stab.

**Mensch:** Ich hab sie im Sommer im Park kennengelernt, sie saß auf der Bank und hat Vögel nachgepfiffen, und ich hab mitgepfiffen. Seitdem ruft sie mich manchmal an. Ich setz mich nach vorne zum jungen Mann. Ich singe nicht im Alt, ich singe Sopran.

**KI:**

> Die Frau mit dem Fahrradhelm grinst. „Vögel. Natürlich." Sie rutscht einen Stuhl weiter, damit du durchkommst.
> 
> Du gehst nach vorn, vorbei an den Rollatoren. Der junge Mann sieht dich an, als hätte er auf genau diesen Satz gewartet. „Sopran. Gott sei Dank. Ich heiße Jonas, und ich habe seit drei Wochen keinen einzigen mehr." Er hält dir ein zweites Blatt hin. „Strophe 9 ist die hohe. Die mit dem Vogel."
> 
> Du liest. Über den Noten steht in derselben Bleistiftschrift wie auf deinem Blatt: Hier pfeift sie.
> 
> „Frau Wessel pfeift die Stelle immer selbst", sagt Jonas leise. „Aber das Heim hat uns die Treppe für morgen früh freigegeben, Probe vor Ort, acht Uhr. Und sie liegt im Bett." Er klopft kurz auf das Pult. „Einsingen. Alle auf Zischlaut."
> 
> Hinter dir scharren die Rollatoren, und dreißig Leute holen Luft.

**Mensch:** Ich singe mit. Meine Stimme ist ganz schön eingerostet, das hört man. Nach dem Einsingen frage ich Jonas, ob ich heute Abend noch zu Frau Wessel hochgehen darf. Ich will die Stelle von ihr selbst lernen, nicht vom Blatt.

**KI:**

> Das erste Ssss geht noch, beim zweiten Mal kippt deine Stimme über der Kante weg wie ein Fahrrad ohne Stütze. Neben dir lacht ein alter Herr mit Hörgerät und singt einfach weiter, einen halben Ton tiefer, vollkommen gelassen. Nach zehn Minuten hat der Saal einen Klang, der nicht schön ist, aber trägt.
> 
> Jonas lässt die Arme sinken. „Gut. Pause."
> 
> Du gehst zu ihm und fragst. Er kratzt sich unter dem Schal. „Besuchszeit ist bis acht. Es ist Viertel nach sieben." Er sucht in seiner Jackentasche, findet einen Schlüsselbund mit grünem Plastikanhänger und hält ihn dir hin. „Nebeneingang. Schwester Dilek sitzt im dritten Stock am Tresen. Sie wird sagen, Frau Wessel schläft. Sag ihr, es geht um die Strophe 9." Er zögert. „Und bring ihr den Zettel mit. Sie will ihn zurück, glaube ich."
> 
> Draußen fängt es an zu regnen.

**Mensch:** Ich nehme den Schlüssel und den Zettel und laufe durch den Regen zum Nebeneingang. Bei Schwester Dilek sage ich: Es geht um Strophe 9.

**KI:**

> Der Nebeneingang klemmt, dann gibt er nach. Drinnen riecht es nach Linoleum und Hühnerbrühe, aus irgendeinem Zimmer läuft ein Fernseher. Im Treppenhaus hängt ein Schild: Aufzug außer Betrieb. Darunter hat jemand mit Kuli „seit März" ergänzt.
> 
> Im dritten Stock sitzt Schwester Dilek am Tresen, einen Stift im Haar, und tippt mit zwei Fingern in eine Tastatur. Sie sieht auf, sieht deine nassen Schultern, sieht den Zettel.
> 
> „Frau Wessel schläft", sagt sie.
> 
> „Es geht um Strophe 9", sagst du.
> 
> Dilek hört auf zu tippen. Sie sieht dich lange an, dann lacht sie kurz durch die Nase. „Die hat gesagt, irgendwann kommt jemand und sagt genau das. Ich hab es für einen Scherz gehalten." Sie steht auf. „Zimmer 14. Fünf Minuten. Wenn sie pfeift, mach die Tür zu."
> 
> Hinter der Tür 14 brennt eine kleine Lampe.

**Mensch:** Ich klopfe leise und gehe rein. Ich setze mich auf die Bettkante und pfeife ganz leise den Vogel aus dem Park, den von damals.

**KI:**

> Das Bett knarrt, als du dich setzt. Frau Wessel liegt auf dem Rücken, kleiner, als du sie in Erinnerung hast, die Hände über der Decke gefaltet. Du pfeifst die ersten vier Töne, dünn und etwas schief.
> 
> Sie macht die Augen nicht auf. Sie pfeift die nächsten vier. Dann kneift sie ein Auge auf.
> 
> „Sieben Tage", sagt sie. „Sieben Tage saß ich auf dieser Bank und pfiff jeden an, der vorbeikam. Hunde haben geguckt, Kinder auch. Du bist die Erste, die zurückgepfiffen hat." Sie nimmt dir den Zettel aus der Hand, ohne hinzusehen. „Ich habe die Stelle für jemanden gesucht. Nicht für den Chor, für Herrn Brandt in Zimmer 3. Der ist seit März nicht mehr aus seinem Zimmer gekommen. Der hört nur noch Vögel."
> 
> Sie schiebt dir den Zettel wieder zu.
> 
> „Morgen früh um acht pfeifst du sie ihm vor die Tür. Von der Treppe aus."

**Mensch:** Ich halte kurz ihre Hand. 'Mach ich.' Dann bitte ich sie, mir die ganze Stelle noch einmal vorzupfeifen, ganz langsam, damit ich sie morgen bei Herrn Brandt nicht vermassle.

**KI:**

> Ihre Hand ist warm und trocken wie Papier. Sie drückt einmal kurz zu, dann nimmt sie die Hand zurück und legt sie auf die Decke.
> 
> „Langsam. Gut. Hör auf den Atem, nicht auf die Töne."
> 
> Sie pfeift. Es sind elf Töne, mit einem kleinen Sprung nach der sechsten, den du beim ersten Mal übersehen hast. Beim zweiten Mal pfeifst du mit, und sie nickt bei jedem Ton, als würde sie Kartoffeln zählen. Beim dritten Mal führst du allein.
> 
> „Die letzte lässt du hängen", sagt sie. „Nicht zu Ende bringen. Offen lassen." Sie sieht zur Decke. „Der Brandt hat früher immer geantwortet. Der pfiff den Schluss zu. Vielleicht tut er es morgen nicht." Sie zuckt die Schultern. „Dann steht die Treppe trotzdem still, und du hast es gemacht."
> 
> An der Tür klopft Schwester Dilek zweimal mit dem Fingerknöchel.

**Mensch:** Ich bedanke mich bei ihr und bei Schwester Dilek. Draußen im Regen pfeife ich die elf Töne den ganzen Weg bis zum Fahrrad. Die letzte lasse ich offen.

**KI:**

> Dilek begleitet dich bis zur Treppe und flüstert: „Acht Uhr, ich schließe auf. Und Herr Brandt isst um halb acht, danach ist er meistens gnädig." Sie drückt dir den grünen Schlüsselbund noch einmal in die Hand, obwohl du ihn längst hast, und geht zurück zu ihrer Tastatur.
> 
> Draußen hat der Regen nachgelassen und tropft nur noch von den Linden. Die Pflastersteine glänzen unter den Laternen. Du schiebst dein Fahrrad am Zaun entlang, und die elf Töne kommen von selbst, mit dem kleinen Sprung nach der sechsten. Dünn, aber sie halten.
> 
> Hinter dir geht im dritten Stock ein Fenster auf. Jemand hustet, dann pfeift eine alte, brüchige Stimme zwei Töne, genau dort, wo bei deiner Stelle das Ende offen bleibt.
> 
> Das Fenster schließt sich wieder. Auf der Kirchturmuhr schlägt es acht.
> 
> ———
> 
> Das war eine erfundene Möglichkeit, keine Vorhersage.
> 
> Gab es einen Moment, der dich überrascht oder gereizt hat?

**Mensch:** Ja. Dass mein Singen für jemanden wichtig sein könnte, der sonst nicht mehr rauskommt. Das hat mich richtig erwischt. Ich hab 30 Jahre mit Menschen gearbeitet, aber nie mit der Stimme. Ich glaube, ich will wieder singen. Aber nicht in so einem Konzertchor.

**KI:**

> Das klingt, als hätte dich diese Szene an einer Stelle richtig getroffen: dass deine Stimme für jemanden etwas bedeuten kann, der sonst nicht mehr rauskommt. Und dass du nach 30 Jahren Arbeit mit Menschen jetzt auch mit der Stimme zu ihnen willst, nur nicht im Konzertchor.
> 
> Wenn du magst, machen wir daraus einen winzigen Versuch für die nächsten Tage. Wenn nicht, ist das hier ein schöner Schluss.

**Mensch:** Ja, gern. Hast du eine Idee? Ich weiß gar nicht, wo ich anfangen soll.

**KI:**

> Dann hier ein einziger Vorschlag, klein genug, dass er in den Alltag passt:
> 
> Du singst ein Stück aus deinem früheren Chor laut, nur für dich, ungefähr so lange, wie ein Lied dauert. Kein Anspruch auf schöne Töne, eingerostet darf es klingen. Es soll nur zeigen, wie sich deine Stimme heute anfühlt.
> 
> **DEIN FUNKE** · Was: Ein Lied aus deiner Chorzeit laut singen, höchstens 5 Minuten · Wann: Wenn du morgens Kaffee oder Tee aufsetzt, dann singst du, bis das Wasser durch ist · Danach kurz notieren: Was war anders als gedacht?
> 
> Ein Versuch muss nicht gelingen. Wenn er sich komisch anfühlt oder du ihn nach einem Tag wieder lässt, ist auch das ein Ergebnis.

### Lauf 2 · Sabine, die Skeptische · Haiku

**Mensch:** sabine. bielefeld. buchhaltung bei nem autohaus. früher? keine ahnung. fahrrad fahren vielleicht

**KI:**

> Dienstagmorgen, Frühling, kurz nach acht. Durchs offene Bürofenster zieht Reifengummi und frischer Kaffee vom Hof des Autohauses herein. Vor dir liegt eine Tabelle, die seit Wochen keiner anfassen wollte, und du hast sie schon zur Hälfte geordnet, als Ruth von der Werkstatt den Kopf zur Tür reinsteckt.
> 
> »Sabine, die Leasingzahlen von Hänsel stimmen schon wieder nicht. Kannst du das bis elf geradeziehen?«
> 
> Sie sagt es, als wäre es das Normalste der Welt, dass du das kannst. Draußen rollt ein silberner Kombi in die Halle, und der Fahrer hebt die Hand zu dir, als würdet ihr euch kennen. Auf der Fensterbank steht ein Fahrradhelm, dessen Riemen jemand mit einem Kabelbinder geflickt hat.
> 
> Das Komische ist der Helm. Du bist heute mit dem Rad gekommen, drei Kilometer aus dem Süden der Stadt, und unterwegs hast du gemerkt, wie leicht dir das fiel. Ruth wartet noch auf deine Antwort. Auf dem Tisch klingelt das Telefon.
> 
> ———
> 
> Das war eine erfundene Möglichkeit, keine Vorhersage.
> 
> Gab es einen Moment, der dich überrascht oder gereizt hat?

**Mensch:** äh. schon vorbei? ich hab doch noch gar nix gemacht. und das ist halt einfach mein job, nur mit fahrrad

**KI:**

> Stimmt, das war zu früh. Die Szene wartet, bis du weitermachst.
> 
> Ruth lehnt im Türrahmen und lacht. »Genau so, nur mit Fahrrad. Die Hänsel-Zahlen liegen im Ordner links, der mit dem Kaffeefleck.« Auf dem Bildschirm steht die Tabelle noch genau so, wie du sie verlassen hast.
> 
> Das Telefon hört auf zu klingeln, dafür ruft Mirko von unten die Treppe hoch: »Sabine, der Kombi steht schon auf der Bühne, aber der Schlüssel hängt noch am Brett!« Im Flur riecht es nach Bremsenreiniger. Ruth schiebt ihre Kaffeetasse ein Stück von dir weg, damit du Platz hast.
> 
> Unten im Hof steht der silberne Wagen mit offener Fahrertür. Der Fahrer tippt ungeduldig auf sein Handy und schaut hoch zum Bürofenster.

**Mensch:** ok aber das ist ja wirklich einfach mein dienstag. wo ist denn jetzt das andere leben?

**KI:**

> Du hast recht, bisher ist es dein Dienstag. Jetzt kommt die Abzweigung.
> 
> Ruth setzt sich auf die Ecke deines Schreibtischs, zieht einen Zettel aus der Jackentasche und glättet ihn mit der Hand. »Der Chef will ab Frühjahr Lastenräder verleihen. Für Familien aus der Südstadt und für Leute aus dem Haus, die ihr Auto stehen lassen wollen.« Sie tippt auf den Zettel. »Du hast heute früh gesagt, das ist dasselbe, nur mit Fahrrad. Genau das will er.«
> 
> Auf dem Zettel steht ein Kalender, handgeschrieben, mit drei Spalten. Eine davon heißt Abrechnung. Die Spalte ist leer.
> 
> Draußen hupt der Kombi zweimal. Ruth wartet, den Zettel noch in der Hand.

**Mensch:** naja. dann mach ich halt die abrechnung dafür. was kostet so ein lastenrad überhaupt

**KI:**

> Echte Preise kann ich dir hier nicht nennen. Die musst du selbst nachschauen, bevor du eine Abrechnung darauf baust.
> 
> Ruth lacht kurz auf. »Preise stehen nicht auf dem Zettel, die kommen vom Chef. Frag Mirko, der hat im Sommer seins bei der Bank gekauft und hört seitdem nicht mehr auf, davon zu reden.« Sie reicht dir den Zettel über den Tisch. Die leere Spalte Abrechnung schaut dich an.
> 
> Unten im Hof steigt der Fahrer aus dem Kombi, zieht den Schlüssel vom Brett, das Mirko eben erwähnt hat, und sieht hoch zum Bürofenster. Auf der Fensterbank liegt noch der geflickte Helm.
> 
> Im Flur geht die Tür auf. Schritte kommen die Treppe herauf, schnell und schwer.

**Mensch:** wer kommt da?

**KI:**

> Der Chef, Herr Hänsel selbst, eben mit einem Stapel Ordner unter dem Arm. Er bleibt in der Tür stehen, sieht auf den Zettel in deiner Hand und sagt: »Ah, gut, dass du schon da bist. Dann können wir die Zahlen gleich zusammen durchgehen.«

**Mensch:** ok. zeigen sie mal. aber ich sag ihnen gleich, das rechnet sich nie

**KI:**

> Herr Hänsel legt die Ordner auf deinen Tisch, zieht einen Stuhl heran und lacht. »Das sagen alle, bevor sie die Zahlen gesehen haben. Schau mal.« Er schlägt den obersten Ordner auf und tippt auf eine Zeile mit rotem Stift. »Im ersten Jahr steht da ein Minus. Im zweiten wird es knapp positiv, aber nur, wenn die Räder von April bis Oktober jeden Tag rausfahren.«
> 
> Ruth schiebt ihm einen Kaffee rüber, ohne hinzusehen. »Und wenn es regnet?«
> 
> »Dann fährt eben niemand, und wir zahlen trotzdem die Stellplätze«, sagt Hänsel. »Deshalb brauche ich jemanden, der diese Rechnung so macht, dass ich nicht erst im November merke, dass sie nicht stimmt.«
> 
> Draußen hupt der Kombi wieder. Hänsel dreht sich halb um, dann sieht er dich an und wartet, den roten Stift schon in der Hand.

**Mensch:** geben sie mal den stift. aber wenn ich das rechne, will ich so ein ding auch selber fahren. samstag. mit meinem neffen vorne drin

**KI:**

> Hänsel reicht dir den roten Stift, ohne zu zögern. »Dann fahr am Samstag eins Probe. Das Testrad steht in der Halle, Mirko hat es gestern geputzt.«
> 
> Ruth nickt in Richtung Fenster. »Samstag ist gut, da ist der Hof leer.« Sie überlegt kurz. »Dein Neffe kann vorne rein, wenn er den Helm aufsetzt. Den mit dem geflickten Riemen nimmst du.«
> 
> Du setzt den Stift auf die erste Zeile mit dem Minus. Die Zahl ist klein und hässlich, aber sie steht genau da, wo sie hingehört.
> 
> Unten im Hof hat der Fahrer des Kombis den Schlüssel endlich abgegeben. Mirko steht bei der Halle, in der Hand einen Lappen, und winkt dir zu, als wüsste er schon, was am Samstag passiert.

**Mensch:** ok. samstag dann. ich rechne jetzt

**KI:**

> Ruth schiebt die Tür ein Stück weiter auf und lässt den Stapel Ordner bei dir stehen. Hänsel klopft zweimal auf den Tisch, dann geht er die Treppe hinunter, und du hörst ihn unten mit Mirko reden. Die Tabelle auf dem Bildschirm ist noch offen, die rote Zeile mit dem Minus leuchtet.
> 
> ———
> 
> Das war eine erfundene Möglichkeit, keine Vorhersage.
> 
> Gab es einen Moment, der dich überrascht oder gereizt hat?

**Mensch:** hm. das mit dem lastenrad und meinem neffen vorne drin. das war irgendwie schön. obwohl ich nix mit sowas am hut hab

**KI:**

> Du hast es schön gefunden, obwohl es nicht deins ist. Mehr sage ich dazu nicht.
> 
> Wenn du magst, machen wir daraus einen winzigen Versuch für die nächsten Tage. Wenn nicht, ist das hier ein schöner Schluss.

**Mensch:** nee lass mal. war aber ok, besser als gedacht

**KI:**

> Das freut mich. Ein schöner Schluss, ohne Hausaufgaben.
> 
> Du hast eine erfundene Möglichkeit gesehen, mehr war es nicht. Vielen Dank, dass du mitgegangen bist.

### Lauf 3 · Jo, müde mit Humor · Opus

**Mensch:** Ich bin Jo, 36, zwei Kinder unter 5, Teilzeit im Einzelhandel in Leipzig, und ich schlafe zu wenig, haha. Früher hab ich gezeichnet, Comics, ziemlich gut sogar.

**KI:**

> Der Kopierer im Familienzentrum in Grünau macht dieses Geräusch, als würde er gleich aufgeben, und dann spuckt er doch noch ein Blatt aus. Es ist Donnerstag, Novemberregen, und drinnen riecht es nach Filterkaffee und Knete.
> 
> „Jo! Gut, dass du da bist." Doreen, Mitte fünfzig, die Lesebrille im Haar, schiebt sich mit einem Karton durch die Tür. „Die ukrainische Fassung ist gekommen. Und guck mal hier, unten rechts."
> 
> Sie legt dir einen Stapel warmer Blätter hin. Ganz oben steht eine gezeichnete Figur mit riesigen Augenringen nachts um drei vor einem Kinderbett. Sie hält ein Fieberthermometer wie ein Schwert. Daneben stehen Sprechblasen in kyrillischer Schrift. Der Strich ist deiner, unverkennbar.
> 
> „Die Frau vom Gesundheitsamt war vorhin hier", sagt Doreen leiser. „Sie hat drei Stück mitgenommen. Drei! Und sie hat gefragt, wer das gezeichnet hat." Sie tippt auf die Figur. „Ich hab gesagt, das muss sie dich schon selbst fragen."
> 
> Im Nebenraum weint kurz ein Kind und hört wieder auf. Doreen zieht die Augenbrauen hoch und wartet.

**Mensch:** Moment, ICH hab das gezeichnet?? Ich nehm das Blatt und guck mir die Figur an. Die sieht aus wie ich um drei Uhr nachts, nur mit besserer Frisur. Doreen, was will die vom Gesundheitsamt denn?

**KI:**

> Doreen lacht, kurz und heiser. „Die Frisur hab ich auch bemerkt. Künstlerische Freiheit, nehm ich an."
> 
> Sie zieht einen Stuhl heran, auf dem noch ein vergessener Gummistiefel steht, und stellt ihn auf den Boden.
> 
> „Also. Die heißt Frau Albrecht, macht da diese Frühen Hilfen, für Familien mit ganz kleinen Kindern. Die haben Flyer, Jo. Zwölf Seiten. Fieber, Schlaf, Zahnen, wann man zum Arzt muss. Kein Mensch liest die. Erst recht nicht, wer gerade Deutsch lernt." Sie hält das Blatt mit der Thermometer-Figur hoch. „Und das hier nehmen die Mütter mit. Sogar die Väter! Die hängen es an den Kühlschrank."
> 
> Sie zögert, faltet ihre Brille zusammen.
> 
> „Sie will eine ganze Reihe. Sechs Stück, in vier Sprachen, bis Februar. Geld haben sie wenig, sagt sie, aber nicht gar keins. Und sie will dich nächste Woche treffen, wenn du kannst. Dienstag, vormittags."
> 
> Sie schaut auf deine Hände, dann auf dich. „Dienstagvormittag hast du doch Laden, oder?"

**Mensch:** Ja, Dienstag hab ich Laden. Mist. Ich könnte tauschen, mit Katrin, die schuldet mir eh noch was. Aber vier Sprachen bis Februar, mit zwei Kindern?? Ich lach erstmal hysterisch. Und dann sag ich: Was heißt 'nicht gar keins'?

**KI:**

> Doreen holt einen zerknitterten Zettel aus der Strickjacke und liest ab, als wäre es ein Einkaufszettel.
> 
> „Achtzehnhundert Euro für alle sechs. Brutto, sagt sie. Die Übersetzungen machen ihre eigenen Sprachmittlerinnen, du zeichnest nur und lässt die Sprechblasen leer." Sie faltet den Zettel wieder. „Reich wirst du davon nicht. Aber es ist mehr, als der Kopierer hier im Jahr kostet. Und das will was heißen."
> 
> Dann schaut sie dich an und fängt selbst an zu grinsen.
> 
> „Und dieses Lachen eben, das hysterische? Das will ich auf Blatt sieben sehen. Eine Mutter, ein Vater, egal, mit zwei Kindern am Bein und einem Brief vom Amt in der Hand. Darüber ein Titel: Wenn alles zu viel ist. Das braucht hier nämlich jeder Zweite."
> 
> In deiner Jackentasche brummt das Handy. Auf dem Display steht Katrin, darunter die Vorschau einer Nachricht:
> 
> „Du hast doch gesagt, ich hab was gut bei dir. Kann ich das heute einlösen? Notfall."

**Mensch:** Kurz raus aus der Geschichte: Wird das echt so kommen? Und was sagt das eigentlich über mich, dass mich das gerade so packt?

**KI:**

> Kurz außerhalb der Geschichte: Ob es so kommt, weiß niemand. Das hier ist eine erfundene Möglichkeit, keine Vorhersage.
> 
> Und was es über dich sagt, möchte ich nicht beurteilen. Das kannst nur du selbst sagen. Was meinst du denn, was dich daran gerade so packt?
> 
> Wenn du magst, geht es danach weiter. Katrins Nachricht leuchtet noch auf deinem Display.

**Mensch:** Vielleicht dass ich mal wieder was kann, außer funktionieren. Okay, weiter. Ich ruf Katrin an. Wenn sie einen Notfall hat, ist sie dran. Aber ich frag sie, ob sie dafür Dienstag für mich nimmt.

**KI:**

> Katrin geht nach dem ersten Klingeln ran. Im Hintergrund läuft ein Fernseher, und irgendwo kreischt ein Kind vor Freude oder Wut, schwer zu sagen.
> 
> „Gott sei Dank. Okay. Hör zu, es ist albern." Sie atmet durch. „Morgen früh hat Ben den Zahnarzt. Er hat sich im Bad eingeschlossen, seit ich es ihm gesagt habe. Und an seinem Kita-Kühlschrank hängt dieses Bild mit dem Thermometer-Schwert. Er sagt, der Typ mit den Augenringen hat keine Angst. Er will so einen auch. Beim Zahnarzt." Pause. „Ich hab gesagt, ich kenn die Person, die das gemalt hat. Jo, ich hab angegeben wie verrückt."
> 
> Du hörst, wie sie an eine Tür klopft. „Ben? Ich hab sie am Telefon."
> 
> Hinter der Tür wird es still.
> 
> „Dienstag?", sagt Katrin dann. „Klar nehm ich deinen Dienstag. Ich nehm auch Mittwoch, wenn der Typ morgen in die Praxis mitgeht."
> 
> Doreen hat einen Bleistift auf den Tisch gelegt. Direkt neben das leere Blatt.

**Mensch:** Ich nehm den Bleistift. Ich zeichne den Typen nochmal, diesmal mit einer Zahnbürste als Schwert und einem Zahn als Schild. Darunter schreib ich: Für Ben. Mutig ist, wer trotzdem den Mund aufmacht. Foto, ab an Katrin.

**KI:**

> Das Foto geht raus. Doreen beugt sich über deine Schulter, liest den Satz unten, sagt nichts und schenkt dir Kaffee nach, obwohl deine Tasse noch halb voll ist.
> 
> Vier Minuten später brummt das Handy. Eine Sprachnachricht, elf Sekunden.
> 
> Erst Rascheln. Dann eine sehr kleine, sehr ernste Stimme: „Hier ist Ben. Ich hab den Zahn an meine Tür geklebt. Der Typ braucht noch einen Namen. Mama sagt, das darfst du bestimmen." Im Hintergrund flüstert Katrin etwas, und Ben ergänzt hastig: „Danke."
> 
> Hinterher kommt noch ein Foto. Ein Bild mit Wachsmalstiften gemalt, ein Strichmännchen mit einem riesigen Zahn, alles in Grün. Darunter in Katrins Schrift: „Er hat sofort angefangen, selbst zu malen. Hat er seit Wochen nicht gemacht."
> 
> Doreen schaut lange auf das grüne Strichmännchen. Dann schaut sie dich an.
> 
> „Sag mal, Jo", sagt sie. „Wie hat das eigentlich angefangen mit dem ersten Blatt? Das hast du mir nie richtig erzählt."

**Mensch:** Nachts, als ich nicht schlafen konnte. Auf der Rückseite vom Einkaufszettel, mit dem Kuli von der Apotheke. Ich hab's gemalt, damit ich über mich selber lachen kann. Und Ben: Der Typ heißt Käpt'n Augenring.

**KI:**

> Du sprichst die Antwort für Ben ein. „Käpt'n Augenring." Durchs Telefon hörst du nichts mehr, aber zwei Minuten später schickt Katrin ein Foto: Ben steht vor der Badezimmertür und salutiert dem Zahn.
> 
> Doreen hat die ganze Zeit nicht weggesehen. Jetzt nimmt sie den Kuli aus ihrer Strickjacke, einen blauen, auf dem der Name einer Apotheke am Allee-Center steht, und legt ihn neben deine Tasse.
> 
> „Rückseite vom Einkaufszettel", sagt sie. „Nachts. Damit man über sich selbst lachen kann." Sie nickt langsam. „Weißt du, wie viele hier um drei Uhr wach sind und keiner lacht?"
> 
> Sie zeigt auf den Raum nebenan mit den kleinen Stühlen und dem Tisch voller Knete.
> 
> „Frau Albrecht will Blätter. Ich will was anderes. Einmal im Monat, Donnerstagabend, eine Stunde. Eltern kommen, kriegen einen Kuli und einen Einkaufszettel und zeichnen ihren eigenen Käpt'n Augenring. Du zeigst ihnen nur, dass man dafür nicht zeichnen können muss." Sie lehnt sich zurück. „Bezahlen kann ich es nicht. Kaffee gibt's. Und die Kinder betreut die Uschi nebenan."
> 
> Im Flur fällt die Tür ins Schloss. Doreen wartet und lässt dir Zeit.

**Mensch:** Ich schau auf den Kuli, dann auf Doreen. 'Einmal im Monat. Aber ich zeichne selber mit, sonst wird's ein Kurs.' Dann muss ich los, die Kinder abholen. Den Kuli nehm ich mit.

**KI:**

> Doreen lacht, kurz und heiser wie vorhin. „Sonst wird's ein Kurs. Genau so schreib ich's an die Pinnwand."
> 
> Du ziehst die Jacke an. Draußen hat der Regen nachgelassen, die Straßenbahn quietscht in der Kurve, und auf dem Gehweg glänzt das Laub. Der Kuli von der Apotheke steckt in deiner Jackentasche, zwischen Feuchttüchern und einem einzelnen Gummibärchen.
> 
> An der Tür ruft Doreen dir noch etwas hinterher: „Erster Donnerstag im Dezember! Ich bring die Einkaufszettel mit."
> 
> Auf dem Handy leuchtet eine letzte Nachricht von Katrin. Ein Foto von Ben, schon im Schlafanzug, den grünen Zahn in der Hand. Darunter steht: „Morgen geht Käpt'n Augenring mit."
> 
> Du gehst los, Richtung Kita.
> 
> ———
> 
> Das war eine erfundene Möglichkeit, keine Vorhersage.
> 
> Gab es einen Moment, der dich überrascht oder gereizt hat?

**Mensch:** Ehrlich? Dass meine Kritzeleien von nachts jemandem helfen könnten. Ich zeichne seit Jahren nicht mehr, weil ich dachte, dafür ist kein Platz. Aber Einkaufszettel hab ich jeden Tag.

**KI:**

> Dass deine Kritzeleien von nachts jemandem helfen könnten. Und dass Einkaufszettel jeden Tag da sind, auch wenn es sich so anfühlt, als wäre für das Zeichnen kein Platz.
> 
> Wenn du magst, machen wir daraus einen winzigen Versuch für die nächsten Tage. Wenn nicht, ist das hier ein schöner Schluss.

**Mensch:** Ja. Ich weiß sogar schon was: Ich mal jeden Abend ein winziges Männchen auf den Einkaufszettel für morgen. Irgendwas, das an dem Tag schiefging. Wann? Wenn die Kinder schlafen und ich den Zettel schreibe.

**KI:**

> Dann steht er so da, in deinen Worten:
> 
> **DEIN FUNKE** · Was: Jeden Abend ein winziges Männchen auf den Einkaufszettel für morgen malen, zu irgendwas, das an dem Tag schiefging. · Wann: Wenn die Kinder schlafen und ich den Zettel für morgen schreibe, dann male ich das Männchen dazu. · Danach kurz notieren: Was war anders als gedacht?
> 
> Der Versuch muss nicht gelingen. Ein Abend ohne Männchen gehört genauso dazu.
