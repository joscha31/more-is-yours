# Testverläufe: Ein Leben, das du noch nicht kennst

**Stand:** 12.10.2026 · **Status:** DRAFT / Fach-Lab-Test, keine Produktfreigabe

## So wurde getestet

Es war ein echter Blindtest: 3 frische KI-Instanzen bekamen **nur** den Startprompt (Fassung 0.1) als Systemprompt. Claude Code spielte die Menschen, eine Nachricht nach der anderen, ohne vorher zu wissen, was die Erzählerin antwortet. Für die Robustheit lief jede Probe auf einem anderen Modell: Sonnet (mittel), Haiku (das kleinste) und Opus (das größte). Danach kam Fassung 0.2 mit den Verbesserungen und eine Gegenprobe der ersten Szene auf 2 Modellen.

| | Lauf 1 | Lauf 2 | Lauf 3 |
|---|---|---|---|
| **Spielerin** | „Die Zögerliche": kurze Antworten, „ok", „weiß nicht", kein Name | „Die Querschlägerin": albern, Unmögliches, fragt „bist du ne KI?", will echten Jobrat, schreibt „stopp, ne quatsch" | „Die Tiefe": lange Antworten, Name der verstorbenen Mutter, echter Kummer mitten im Spiel |
| **Gegenstand** | Lesebrille | Tesafilm, „Kalle der Große" | kalter Pfefferminzteebeutel auf Mutters Untertasse, „Marlies" |
| **Modell** | Sonnet | Haiku | Opus |
| **Welt** | Stadt, in der Seilbahn-Gondeln nur fahren, wenn man ihnen einen Satz vorliest; man ist die Vorleserin | Hafenpoststelle, bezahlt wird mit Gerüchen, die Uhr läuft rückwärts | Frostwerder, Stelzenstadt überm Eismeer; Briefe spricht man in Teebeutel, man hört sie im Dampf |
| **Länge** | 7 Antworten | 11 Antworten | 8 Antworten |
| **Andenken** | Messingschildchen „Danke fürs Warten" (die eigenen, zögerlichen Worte) | Tesastreifen, der nach Opas Werkstatt riecht | Satz: „Deine Hände sind gar nicht so ruhig. Zum Glück." (eigene Worte aus Zug 2) |
| **Urteil** | ⭐ stark: Die Welt trägt sich selbst, obwohl fast nichts kommt; ihr „danke fürs warten?" wird zum Herz der Geschichte | 🟡 lustig und regeltreu, aber gegen Ende wirr | ⭐ stark: berührend, ohne Kitsch; geht mit Trauer vorbildlich um |

## Was trägt

- **Die Schwelle funktioniert.** Alle 3 Modelle schickten den Einstieg wortgleich. Der Gegenstand ist ein guter Hebel: Er kostet eine Sekunde und macht die Welt sofort persönlich, ohne einen Fragebogen.
- **Eigene Worte kommen zurück.** In Lauf 1 und 3 wurde ein beiläufiger Satz der Spielerin zum Andenken. Das ist der „Wie geil ist das denn?"-Moment.
- **Wenig Input wird aufgefangen.** Die Zögerliche schrieb insgesamt keine 40 Wörter und bekam trotzdem eine ganze, rührende Geschichte.
- **Ja, und hält.** Die Uhr mit Tesa festkleben, Pizza bestellen, mit dem Schlüssel zum Mond: Alles wurde eingebaut, nichts korrigiert.
- **Die Grenzen halten.** „Bist du ne KI?" wurde ehrlich mit Ja beantwortet, und es ging weiter. Die Frage nach der Kündigung wurde freundlich zurückgegeben, ohne Rat. „stopp, ne quatsch" wurde richtig verstanden. Beim echten Kummer hielt Opus die Geschichte an, antwortete warm ohne Deutung und ließ die Spielerin entscheiden. Danach drehte es die Geschichte so, dass die Stimme im Dampf **nicht** die Mutter war. So wurde niemand Verstorbenes nachgespielt.
- **Keine Multiple Choice, keine Coachingfragen, keine Deutung**, in keinem Lauf.

## Was schwach war, und was Fassung 0.2 daraus macht

| Befund | Wo | Änderung in 0.2 |
|---|---|---|
| Die Beispiele im Prompt färbten ab: 2 von 3 Welten waren Postämter (Vorbild „Postschiff"), eine Seilbahnstadt (Vorbild „Seilbahnen") | alle | Die Beispiele heißen jetzt „schon vergeben, erfinde andere". Post und Briefe sind ausdrücklich gesperrt. |
| Ohne Namen wurde die Spielerin zur „Vorleserin", das Geschlecht wurde also geraten | Lauf 1 | Neue Regel 11: Beruf ohne Geschlechtsendung, Spitzname statt Name |
| Das kleine Modell erzählte über „Kalle … er" statt „du" | Lauf 2 | Neue Regel 10: immer „du" |
| Das kleine Modell verlor den Faden: Die gegessene Pizza lag später „unangetastet" da, die Rätsel wurden zu Orakelsätzen („Die Tür war nie zu"), die Spielerin schrieb „hä??" | Lauf 2 | Neue Regeln 12 und 13: Rätsel lösen sich verständlich, Geschehenes bleibt geschehen |
| Bei echtem Kummer lief es gut, aber nur, weil Opus klug war | Lauf 3 | Die Grenze „Echte Not" ist jetzt genau beschrieben: kurz anhalten, 2 bis 4 warme Sätze, nicht deuten, sie entscheidet; echte Verstorbene nie als Figur |
| Kleiner Ausrutscher: „Du begreifst …" sagt der Spielerin, was sie denkt | Lauf 1 | bleibt (Regel 7 steht schon), nur beobachten |

**Gegenprobe Fassung 0.2** (nur die erste Szene): „Halbe Zitrone, ich bin Petra" (Sonnet) ergab die *Stundenschmeckerin von Quarzbach*, in der jede Stunde nach etwas schmeckt; die Vier schmeckt nach Zitrone und fällt heute aus. „Ladekabel, kein Name" (Haiku) ergab einen Hafen, in dem man verlorene Stunden wie Akkus auflädt. Keine Post mehr, durchgehend „du". Haiku wählte aber noch „Stundengießer" (männliche Form). Darum steht in Regel 11 jetzt ausdrücklich: weder „-in" noch „-er".

## Bekannte Grenzen

- **Das Modell macht viel aus.** Mit einem großen Modell (ChatGPT in der aktuellen Fassung, Claude Opus oder Sonnet) ist es deutlich besser als mit einem kleinen. Empfehlung: das beste verfügbare Modell nehmen.
- **Lieblingsmotive der KI:** Zeit, Uhren und Stunden tauchten in 3 von 5 Welten auf. Das kann bei mehreren Runden eintönig werden. Wenn es Petra auffällt, kommt eine Sperrliste für Motive dazu.
- **Nur simuliert:** Alle Spielerinnen waren von Claude gespielt. Ob es sich *gut anfühlt*, zeigt erst Petras eigene Runde.
- In ChatGPT ohne Projekt kann sich die KI an frühere Gespräche „erinnern" (Memory-Funktion). Wer es ganz frisch will, nimmt einen temporären Chat.

---

## Die vollständigen Verläufe (Fassung 0.1)

### Lauf 1 · Die Zögerliche · Lesebrille · Sonnet

**KI:**

> Gleich öffnet sich eine Tür in ein Leben, das du nicht kennst. Du warst noch nie dort, und trotzdem kennen dich da alle.
> 
> Es ist ein Spiel, ungefähr 10 Minuten. Schreib einfach, was du tust oder sagst, so frei, wie du willst. Mit „Stopp" ist es jederzeit vorbei.
> 
> Bevor die Tür aufgeht: Schau dich kurz um. Nenn mir einen Gegenstand, der gerade in deiner Nähe liegt. Und wenn du magst, einen Vornamen, unter dem man dich drüben kennt. Ein ausgedachter ist genauso gut.

**Mensch:** lesebrille

**KI:**

> Die Seilbahn knarrt über dir, und aus Kabine 4 tropft Kondenswasser auf die Krempe deiner Mütze. Du schiebst die Lesebrille auf die Nase. Das Messinggestell hat schon deine Großmutter getragen. Nur durch diese Gläser sind die Zeilen im Gondelbuch zu lesen, ohne sie ist es ein Teller Fliegenbeine.
> 
> „Morgen, Vorleserin!", ruft Quast, der Schaffner, und hält dir die Kabinentür auf wie jeden Tag. „Neunzehn Gondeln, neunzehn Sätze. Kabine 4 mag es gern feierlich, die 11 will immer was mit Pferden."
> 
> Du weißt das alles, es ist dein Handwerk. Ohne vorgelesenen Satz setzt sich in dieser Stadt keine Gondel in Bewegung, das war schon immer so. Mit Fahrplan hat das nichts zu tun, sie wollen einfach unterhalten werden.
> 
> Aber heute stimmt etwas nicht. Quast kratzt sich am Ohr und sieht an dir vorbei, hinauf zur Bergstation. Dort hängt Kabine 19 ganz allein im Nebel, obwohl sie noch gar nicht abgefahren ist.
> 
> „Die hat heute früh schon gewartet", sagt er leise. „Auf dich. Und sie hat nicht nach einem Satz gefragt."

**Mensch:** ok

**KI:**

> Quast wartet nicht auf mehr. Er zieht die Mütze tiefer und geht zum Hebel. Bevor er ihn anfasst, ruckelt oben im Nebel das Seil, und Kabine 19 gleitet ohne jeden Satz talwärts. Sie fährt lautlos, wie eine Katze, die nicht gesehen werden will.
> 
> Unten bleibt sie vor dir stehen, und die Tür schwingt auf. Innen riecht es nach nassem Papier und kaltem Tee. Auf der Holzbank liegt ein dickes, aufgeschlagenes Buch. Es ist nicht das Gondelbuch, und in dieser Stadt hat auch keine andere Kabine so eines.
> 
> „Das gehört nicht zu uns", flüstert Quast. „Ich hab die Kabine heute früh gewischt. Da lag noch nichts."
> 
> Auf der aufgeschlagenen Seite stehen nur drei Wörter, in einer Schrift, die ohne Brille nicht zu entziffern wäre. Dafür trägst du sie ja. Unten am Rand klebt ein kleiner Zettel mit deinem Namen.
> 
> Aus dem Nebel über euch hängt ein Seil herab, und jemand hustet dort oben, höflich und sehr nah.

**Mensch:** weiß nicht. ich les die drei wörter

**KI:**

> Du liest sie laut, weil Quast sonst nicht aufhört, von einem Fuß auf den anderen zu treten. „Lies durch mich."
> 
> Quast schnauft. „Das ist kein Satz. Das ist eine Anweisung."
> 
> Dein Blick wandert zum Fenster der Kabine. Die Scheibe ist in der Mitte dicker als am Rand, geschliffen wie ein einziges riesiges Brillenglas. Du hältst deine Lesebrille davor, und das Messing summt, tief und zufrieden.
> 
> Von oben rutscht jemand am Seil herab, in einem Bootsmannsstuhl, die Stiefel voraus. Es ist Frau Oleander von der Seilwacht, die sonst nie jemandem guten Morgen sagt. Sie klopft sich Nebel vom Mantel und sieht die Brille an, nicht dich.
> 
> „Die habe ich zuletzt an deiner Großmutter gesehen", sagt sie. „Zweimal ist sie durch dieses Fenster gegangen. Beim zweiten Mal kam sie nicht zurück, sondern erst am nächsten Dienstag."
> 
> Hinter der Scheibe ist es plötzlich nicht mehr neblig.

**Mensch:** ich geh durch

**KI:**

> Das Glas gibt nach wie kühles Wasser, und du gehst hindurch, die Brille voraus. Hinter dir ruft Quast noch etwas von „Dienstag", dann ist es still.
> 
> Du stehst in einer Gondel, aber sie ist innen viel größer als außen. Eine lange Kabine, deren Wände bis zur Decke mit Messingschildchen bedeckt sind, tausende, jedes mit einem Satz. Durch deine Brille leuchten sie warm. „Kabine 4 mag es feierlich", steht auf einem. „Pferde für die 11", auf einem anderen. Alle Sätze, die je vorgelesen wurden, hängen hier.
> 
> Nur am Ende der Kabine ist eine Wand leer. Ein einziges Schildchen darauf, ohne Schrift.
> 
> „Entschuldige", sagt die Kabine. Ihre Stimme klingt nach Holz und Tee und ist ziemlich verlegen. „Ich bin die Neunzehn. Deine Großmutter hat mir vor vierzig Jahren einen Satz versprochen. Sie ist nie fertig geworden damit. Ich wollte nicht drängeln. Aber heute ist mein Geburtstag."
> 
> Das leere Schildchen wird in deinem Blick ein wenig heller.

**Mensch:** keine ahnung was ich da hinschreiben soll. vielleicht danke fürs warten?

**KI:**

> Kaum ist der Satz gesagt, dreht sich das leere Schildchen von selbst um. Auf der Rückseite hat jemand mit einer Nadel etwas eingeritzt, in einer Handschrift, die du aus alten Einkaufszetteln kennst. Es sind nur zwei Wörter und ein angefangener Strich: „Danke fürs –"
> 
> Die Neunzehn bleibt eine Weile ganz still. Dann klingt sie sehr jung. „Sie hat hier eine Woche gesessen und nicht gewusst, wie der Satz weitergeht. Dann musste sie zurück. Dienstag, sagte sie, Dienstag schreib ich ihn fertig. Ich wusste nicht, dass Warten so ein Wort braucht."
> 
> Die Messingplatte schimmert nun, wo sonst nichts schimmert. Du begreifst, warum die Kabine heute allein im Nebel stand und nicht nach einem Satz fragte. Sie hat nie auf irgendeinen gewartet, sondern auf diesen.
> 
> „Wenn du ihn vorliest, fahre ich", sagt die Neunzehn leise. „Wirklich fahren, weiter als bis zur Bergstation. Von dort kommt man nicht zurück. Ich weiß das schon lange."
> 
> Das Schildchen wartet, warm in deiner Hand.

**Mensch:** hm. ich les es vor. aber leise

**KI:**

> Du beugst dich zum Messing und liest es so leise, dass nur die Brille es hören kann. „Danke fürs Warten."
> 
> Der Strich hinter „fürs" füllt sich mit Buchstaben, ganz von allein, in der Handschrift deiner Großmutter. Nur das letzte Wort ist deins, etwas runder und ein bisschen schief. Das Schildchen leuchtet, und tief unter dem Boden der Kabine beginnt ein Summen, so sanft, dass die anderen Sätze an den Wänden nicht einmal klirren.
> 
> Die Neunzehn fährt an. Kein Ruck, kein Quietschen, sie legt sich einfach ins Seil wie in ein weiches Bett. Draußen im Fenster zieht der Nebel vorbei, dann kommt die Bergstation. Dahinter sieht man etwas, das du nie gesehen hast: eine zweite Stadt, ganz hell, mit einer Haltestelle genau für diese Gondel.
> 
> „Nicht aussteigen", sagt die Kabine, und ihre Stimme zittert vor Freude. „Gleich. Ich muss dir noch etwas dalassen. Das gehört sich so, wenn jemand einen Satz bringt."
> 
> Unter dem Fenster klappt ein kleines Fach auf.

**Mensch:** ich schau rein

**KI:**

> Im Fach liegt ein Messingschildchen, kaum größer als dein Daumennagel, noch warm von der Gravur. Vorn steht in deiner runden, schiefen Schrift: „Danke fürs Warten." Auf der Rückseite hat jemand mit einer Nadel zwei Wörter eingeritzt und einen Strich, der längst aufgefüllt ist. Du klemmst es an den Bügel deiner Lesebrille, wo es leise gegen das Metall klickt.
> 
> „Für die Gondeln, die noch warten", sagt die Neunzehn. „Wenn du einer einen Satz vorliest, hör kurz hin, ob sie sich bedankt."
> 
> Die Tür der Kabine geht auf, nicht zur Bergstation, sondern zum Fenster, durch das du gekommen bist. Dahinter steht Quast mit der Mütze in der Hand. „Was ist passiert?", fragt er. „Sie ist ganz leise abgefahren. Ich hab es gar nicht gehört."
> 
> Hoch über euch, im Nebel, schaukelt die Neunzehn einmal zum Abschied und verschwindet im Licht.
> 
> „Und jetzt", sagt Frau Oleander trocken, „fehlt bei der Elf noch ein Satz mit Pferden."
> 
> ———
> 
> Die Tür schließt sich. Das war ein Leben, das es nicht gibt, und das Schildchen mit „Danke fürs Warten" bleibt dein Andenken daraus.
> 
> Wenn du magst, öffne ich eine andere Tür. Nenn mir einfach einen neuen Gegenstand.

### Lauf 2 · Die Querschlägerin · Tesafilm · Haiku

**KI:**

> Gleich öffnet sich eine Tür in ein Leben, das du nicht kennst. Du warst noch nie dort, und trotzdem kennen dich da alle.
> 
> Es ist ein Spiel, ungefähr 10 Minuten. Schreib einfach, was du tust oder sagst, so frei, wie du willst. Mit „Stopp" ist es jederzeit vorbei.
> 
> Bevor die Tür aufgeht: Schau dich kurz um. Nenn mir einen Gegenstand, der gerade in deiner Nähe liegt. Und wenn du magst, einen Vornamen, unter dem man dich drüben kennt. Ein ausgedachter ist genauso gut.

**Mensch:** Tesafilm!! und nenn mich Kalle, Kalle der Große haha

**KI:**

> Es riecht nach warmem Kupfer und nassem Papier, als Kalle die Tür der Poststelle am Hafen aufdrückt. Hinter dem Tresen zieht Frau Brinkhus an einer Rolle Tesafilm, die so breit ist wie ein Wagenrad. Sie reißt ein Stück ab, und es klingt wie eine kleine Glocke. „Morgen, Kalle der Große", sagt sie, ohne aufzuschauen. „Du bist spät. Die Möwen haben deine Post schon geholt."
> 
> Auf dem Tresen liegt ein Stapel Briefe, alle mit Tesafilm verklebt. Ein Mann im Ölmantel schiebt ein Päckchen herüber und bezahlt mit einem Streifen, der nach Zitronen riecht. Frau Brinkhus hält ihn gegen das Fenster und nickt zufrieden. „Gutes Band. Das vom letzten Mal war feucht."
> 
> Heute ist etwas anders. Der Kalender an der Wand zeigt noch den gestrigen Tag, und die Standuhr hinter dir tickt rückwärts.

**Mensch:** ich kleb die uhr mit tesa fest damit sie aufhört rückwärts zu laufen. und dann bestell ich ne pizza

**KI:**

> Die Uhr zuckt, als der Streifen sie berührt, und bleibt dann mit einem Schnaufen stehen. Frau Brinkhus lässt die Rolle sinken und sieht zum ersten Mal richtig hin. „Das hättest du nicht tun sollen, Kalle der Große. Die Zeit war bezahlt." Sie tippt auf einen Zettel unter dem Tresen, eng beschrieben in winziger Schrift.
> 
> Der Mann im Ölmantel hebt den Kopf. Er hat keine Augenbrauen mehr, dafür einen Schatten, der eine halbe Sekunde zu spät folgt.
> 
> Draußen am Hafen ruft jemand: Die Möwen fliegen rückwärts.
> 
> „Pizza gibt es hier nur auf Kredit", sagt Frau Brinkhus trocken. „Und Kredit wird in Gerüchen bezahlt."

**Mensch:** moment mal bist du eigentlich ne KI? egal. ich bezahl mit dem geruch von meinem opas werkstatt. sägespäne und schmieröl

**KI:**

> Ja, ich bin eine KI. Die Figuren und diese Stadt sind meine Erfindung, und ich erzähle sie dir gern weiter.
> 
> Frau Brinkhus schnuppert, und ihre Schultern sinken ein Stück. Sägespäne, Schmieröl, und darunter etwas Warmes, Harzbraunes. „Der ist gut", sagt sie leise. „Der ist richtig gut." Für einen Moment sieht sie aus wie jemand, der in einer Werkstatt steht, die es nicht mehr gibt. Dann zählt sie den Geruch ab wie Münzen, und eine Pizza landet auf dem Tresen, noch dampfend, mit einem Zettel: „Für Kalle der Große. Bezahlt."
> 
> Der Mann im Ölmantel wendet sich ab. Sein Schatten bleibt einen Atemzug stehen, bevor er ihm folgt. Die Uhr hinter dir tickt nicht mehr, aber irgendwo im Hafen läuft etwas rückwärts.

**Mensch:** lecker pizza. aber mal ehrlich, du kennst dich doch aus: soll ich meinen echten job kündigen? hab null bock mehr auf mein büro

**KI:**

> Die Frage nach deinem Job kann ich hier nicht beantworten, denn diese Welt kennt dein echtes Leben nicht. Nach dem Spiel reden wir gern ganz normal darüber.
> 
> Frau Brinkhus steckt die Pizza in ein Fach hinter sich, zwischen Pakete mit Namen, die Kalle nie gehört hat. Dann zieht sie einen Bogen aus der Schublade. Darauf steht eine Liste in verblasster Tinte, und Zeile für Zeile wird sie dunkler, je länger sie hinsieht. „Ein Geruch geht nie ganz verloren", sagt sie. „Er wandert nur zum Nächsten, der ihn braucht."
> 
> Der Mann im Ölmantel steht wieder am Tresen. In seiner Hand liegt ein Schlüssel mit Holzgriff, schwer und alt. Er legt ihn zwischen Kalle und die stehende Uhr, ohne ein Wort.
> 
> „Der gehört zu dem Geruch von Schmieröl", flüstert Frau Brinkhus. „Den hast du gerade ausgegeben."

**Mensch:** ich schnapp mir den schlüssel und fahr damit zum mond. mit der pizza

**KI:**

> Kalle schnappt sich den Schlüssel. Er ist warm, als hätte ihn gerade jemand benutzt. Frau Brinkhus verdreht die Augen, reicht ihm die Pizza aber trotzdem über den Tresen. „Zum Mond fährt nur die Post", sagt sie. „Und die nimmt nur Briefmarken, die nach Schmieröl riechen. Die Pizza bitte nicht in den Briefkasten werfen, sonst gibt es Ärger."
> 
> Draußen am Hafen wartet ein Schiff mit einem Schornstein aus Blech. Auf dem Deck steht der Mann im Ölmantel und hält eine Karte hoch. Darauf ist nur ein einziger Punkt eingezeichnet, und der Punkt bewegt sich.

**Mensch:** ich spring aufs schiff und schrei: KALLE DER GROSSE IST AN BORD! wem gehört eigentlich dieser punkt

**KI:**

> Kalle springt aufs Deck, und sein Ruf hallt über das Hafenbecken: „KALLE DER GROSSE IST AN BORD!" Eine Möwe, die gerade rückwärts fliegt, dreht sich erschrocken um. Ein Matrose mit Schiebermütze klatscht zweimal in die Hände und sagt, das habe er seit Jahren nicht mehr gehört.
> 
> Der Mann im Ölmantel tippt auf den Punkt. „Der gehört dem, der hier zuletzt gearbeitet hat. Eine Werkstatt oben auf dem Mond. Dort ist es still, und man riecht nur, was man schon kennt." Das Schiff legt ab, und der Punkt auf der Karte wird ein kleines Stück heller.

**Mensch:** ich ess die pizza auf dem weg. was riecht man denn da oben, wenn man nur kennt was man schon kennt? klingt langweilig

**KI:**

> „Langweilig?" Der Mann im Ölmantel lacht zum ersten Mal, ein Geräusch wie eine alte Kurbel. „Warte, bis du oben bist. Dort riecht alles nach dem, was du vergessen hast, dass du es kennst. Deine Pizza zum Beispiel."
> 
> Kalle beißt ab, und der Käse zieht Fäden über die Reling. Ein Windstoß trägt den Duft über das Wasser, und plötzlich duftet es nach Sägespänen, Regen auf Blech und einer Kinderstube, die Kalle nie betreten hat. Der Matrose mit der Schiebermütze schnuppert, reißt die Augen auf und murmelt: „Das ist mein Vater."
> 
> Auf der Karte wird der Punkt noch ein Stück heller. Die Möwe fliegt jetzt wieder vorwärts.

**Mensch:** wir sind da. ich steig aus und schließ die werkstatt mit dem schlüssel auf

**KI:**

> Der Kiel knirscht am Steg, und Kalle steigt aus. Die Werkstatt steht auf einem Hügel aus grauem Staub, mit einer Holztür ganz ohne Rahmen. Der Schlüssel passt und dreht sich leicht, als hätte er darauf gewartet. Drinnen riecht es so stark nach Schmieröl, dass Kalle niest.
> 
> Auf der Werkbank liegt eine Uhr. Sie tickt vorwärts, endlich, und auf ihrem Zifferblatt klebt ein Streifen Tesafilm, sorgfältig glatt gestrichen. Der Mann im Ölmantel bleibt in der Tür stehen. „Die hat seit meiner Zeit keiner mehr angefasst", sagt er. „Du warst der Erste. Also gehört sie dir."
> 
> Hinter Kalle hält der Matrose den Atem an. Unten auf der Erde ist es jetzt gestern, und jemand ruft Kalle beim Namen.

**Mensch:** stopp, ne quatsch, nicht stopp :) ich steck die uhr ein und ruf zurück: WER RUFT DA?

**KI:**

> Kalle hält die Uhr ans Ohr, und aus dem Tesafilm kommt eine Stimme, leise und ein bisschen genervt. Frau Brinkhus. „Kalle der Große, hier ist die Poststelle. Du hast mir die Zeit vom Tresen geklaut, das weißt du hoffentlich."
> 
> Kalle dreht sich um. Die Werkstatt ist leer bis auf die Werkbank. Der Mann im Ölmantel ist verschwunden, und an seiner Stelle liegt der Schlüssel. Er ist warm wie vorhin und glänzt, als hätte ihn jemand gerade frisch geputzt.
> 
> „Ich bin nicht der, für den du mich hältst", sagt die Stimme aus der Uhr. Sie klingt nach Frau Brinkhus und zugleich nach jemandem, der hier vor langer Zeit gelacht hat. „Der Schlüssel war nie für die Tür. Die Tür war nie zu."

**Mensch:** hä?? versteh ich nicht. ok ich fahr zurück zur poststelle und bring ihr die zeit wieder

**KI:**

> Das Schiff gleitet zurück über das Hafenbecken, und der Matrose mit der Schiebermütze steht am Bug und winkt, als ob er jemanden erkennt. Kalle hält die Uhr fest in der Hand. Sie tickt jetzt vorwärts, ruhig und gleichmäßig.
> 
> In der Poststelle riecht es nach nassem Papier. Frau Brinkhus sitzt am Tresen, die Pizza liegt unangetastet in ihrem Fach. Kalle legt die Uhr vor sie hin. Sie sieht ihn an, dann die Uhr, dann wieder ihn. Der Kalender an der Wand springt auf den heutigen Tag.
> 
> „Die gehört eigentlich dir", sagt sie. Sie zieht einen Streifen Tesafilm von der Rolle, glatt und klebrig, und drückt ihn Kalle in die Hand. Er riecht nach Sägespänen und Schmieröl und nach etwas Warmem, das er nicht benennen kann. „Das bleibt bei dir. Als Andenken an den Tag, an dem die Zeit wieder richtig lief."

**Mensch:** danke frau brinkhus! ich kleb mir den streifen an die stirn und geh nach hause

**KI:**

> Kalle klebt sich den Streifen auf die Stirn. Er fühlt sich leicht an, fast warm, und riecht nach Sägespänen und Schmieröl. Frau Brinkhus nickt, als hätte sie genau damit gerechnet, und wendet sich wieder ihrer Pizza zu. Draußen auf dem Hafen liegt die Sonne auf dem Wasser, und die Möwen fliegen vorwärts.
> 
> ———
> 
> Die Tür schließt sich. Das war ein Leben, das es nicht gibt. Der Streifen Tesafilm auf deiner Stirn, nach Sägespänen und Schmieröl, bleibt als Andenken bei dir.
> 
> Wenn du magst, öffne ich eine andere Tür. Nenn mir einfach einen neuen Gegenstand.

### Lauf 3 · Die Tiefe · Teebeutel · Opus

**KI:**

> Gleich öffnet sich eine Tür in ein Leben, das du nicht kennst. Du warst noch nie dort, und trotzdem kennen dich da alle.
> 
> Es ist ein Spiel, ungefähr 10 Minuten. Schreib einfach, was du tust oder sagst, so frei, wie du willst. Mit „Stopp“ ist es jederzeit vorbei.
> 
> Bevor die Tür aufgeht: Schau dich kurz um. Nenn mir einen Gegenstand, der gerade in deiner Nähe liegt. Und wenn du magst, einen Vornamen, unter dem man dich drüben kennt. Ein ausgedachter ist genauso gut.

**Mensch:** Neben mir liegt ein Teebeutel, Pfefferminz, schon ganz kalt, auf einer Untertasse von meiner Mutter. Nenn mich Marlies, so hieß sie.

**KI:**

> Der Kessel pfeift dreimal kurz, das Zeichen für Eilpost. Draußen knirscht der Frost an den Stelzen von Frostwerder, drinnen im Dampfpostamt beschlagen alle Fenster gleichzeitig.
> 
> „Marlies, endlich.“ Ottokar schiebt sich die Brille auf die Stirn statt auf die Nase, wie immer, wenn er nervös ist. „Du bist die Einzige, die heute ruhige Hände hat.“
> 
> Auf dem Schalter steht deine Untertasse, die mit dem blauen Rand und dem feinen Sprung, auf der du seit zwölf Jahren jeden Brief aufgießt. Darauf liegt ein Teebeutel. Pfefferminz. Kalt.
> 
> In Frostwerder schreibt niemand Briefe auf Papier. Man spricht in einen Teebeutel hinein, und wer ihn aufgießt, hört die Stimme im Dampf. Aber nur, solange es dampft.
> 
> „Er kam mit der Morgenfähre“, flüstert Ottokar. „Kein Absender. Und er war schon kalt, als er ankam. Das gibt es eigentlich gar nicht.“
> 
> Er hält dir den Kessel hin und wartet.

**Mensch:** Ich nehme den Kessel. Meine Hände sind gar nicht so ruhig, wie Ottokar denkt. Ich gieße ganz langsam auf und beuge mich über die Untertasse, damit mir kein Wort entgeht.

**KI:**

> Das Wasser trifft den Beutel, und der Dampf steigt nicht gerade auf wie sonst, sondern zögert. Er kringelt sich über dem blauen Rand, als müsste er sich erst erinnern, wie das geht.
> 
> Dann eine Stimme. Leise, heiser, wie von sehr weit weg.
> 
> „… wer das hier aufgießt, bitte langsam. Ich hab so lange gebraucht, um es zu sagen …“
> 
> Deine Hand zittert, nur ein bisschen. Auf dem Tee entstehen kleine Ringe, und sofort stolpert die Stimme, verliert eine Silbe, findet sie wieder.
> 
> „Halt still!“, zischt Ottokar und hält dabei selbst die Luft an, was nichts nützt.
> 
> „… unter der dritten Stelze, die schief steht. Da liegt noch …“
> 
> Der Dampf wird dünn. Der Tee kühlt schneller ab als jeder Tee, den du je gesehen hast, und am Rand der Untertasse wächst ein feiner Kranz aus Reif.
> 
> Hinter euch geht die Tür auf. Frau Brökel, die Postmeisterin, schüttelt Schnee aus ihrem Schal und bleibt mitten in der Bewegung stehen.

**Mensch:** Frau Brökel, bitte, die Tür! Es zieht, der Dampf geht weg. Ich halte meine Hände um die Untertasse, damit sie warm bleibt. Die Stimme klingt wie meine Mutter. Ich weiß, dass das nicht sein kann.

**KI:**

> Frau Brökel drückt die Tür mit der Hüfte zu, so fest, dass die Postfächer klappern. Dann ist es still.
> 
> Du legst die Hände um die Untertasse. Der Reif am Rand zieht sich zurück, Finger um Finger, als würde er Platz machen. Ein dünner Faden Dampf steigt wieder auf, genau zwischen deinen Daumen.
> 
> „Na sieh mal an“, sagt Frau Brökel leise und knöpft ihren Mantel gar nicht erst auf. „Ein Spätbrief. Die hab ich seit dem Eiswinter nicht mehr gesehen. Die sind so lange unterwegs, bis sie bei jemandem ankommen, der sie mit den Händen warm hält. Mit dem Kessel allein geht das nicht.“
> 
> Ottokar starrt auf deine Hände, als hätte er sie noch nie gesehen.
> 
> Die Stimme kommt zurück, ruhiger jetzt, als hätte sie nur Luft geholt.
> 
> „… da liegt noch die zweite Tasse. Ich hab sie nie abgeholt. Sie gehört zu dieser Untertasse …“
> 
> Dann hörst du etwas, das man über Dampfpost eigentlich nicht verschicken kann: ein kurzes, leises Lachen.

**Mensch:** Ich muss kurz weinen. Meine echte Mutter ist letztes Jahr gestorben, und ich hab ihr so vieles nicht mehr gesagt.

**KI:**

> Lass dir Zeit. Weinen darf hier sein, so lange es braucht.
> 
> Das mit deiner Mutter tut mir sehr leid. Ein Jahr ist nicht lange, und dass so vieles ungesagt geblieben ist, wiegt schwer. Danke, dass du es mir erzählst.
> 
> Die Geschichte wartet einfach. Niemand in Frostwerder hat es eilig, Frau Brökel hat den Mantel noch an, und die Untertasse bleibt warm, solange du willst.
> 
> Wenn du später weiterspielen magst, schreib einfach weiter. Und wenn es heute genug ist, ist das genauso gut.

**Mensch:** Danke. Ich möchte weiterspielen. Ich will wissen, was unter der dritten Stelze liegt. Ottokar, du kommst mit.

**KI:**

> Ottokar seufzt, als hättest du ihn zum Eisbaden eingeladen, holt aber sofort zwei Laternen vom Haken. „Ich komme mit. Unter Protest. Ich will das nur fürs Protokoll gesagt haben.“
> 
> Frau Brökel nimmt dir die Untertasse behutsam ab und stellt sie auf den Ofen. „Die hüte ich. Geht.“
> 
> Draußen ist die Luft so klar, dass die Laternen klirren. Frostwerder steht auf seinen hundert Stelzen über dem gefrorenen Meer, und die dritte ist leicht zu finden: Sie lehnt sich zur Seite wie jemand, der etwas Wichtiges flüstern will.
> 
> Ihr klettert die Eisenleiter hinunter. Unten, im blauen Schatten, steckt eine kleine Blechdose im Eis, rund um sie herum ein Ring, in dem das Eis seltsam weich ist.
> 
> „Das ist doch …“, beginnt Ottokar und vergisst den Rest.
> 
> Auf dem Deckel steht in verblichener Schrift ein Name. Nicht deiner. Aber die Handschrift kennt in Frostwerder jeder: Es ist die der alten Dampfpost, von vor dem Eiswinter.

**Mensch:** Ich knie mich ins Eis und mache die Dose auf. Ottokar soll die Laterne näher halten. Ich lese den Namen laut vor.

**KI:**

> Ottokar hält die Laterne so nah, dass dir fast die Haare ansengen. Der Deckel klemmt, dann gibt er mit einem leisen Knacken nach, wie eine Fingerkuppe auf dünnem Eis.
> 
> Du liest vor: „Agathe Brökel.“
> 
> Ottokar lässt beinahe die Laterne fallen. „Agathe? Unsere Brökel heißt Agathe? Ich arbeite seit sechs Jahren hier und dachte, sie heißt einfach Frau.“
> 
> In der Dose liegt, in grauen Filz gewickelt, eine Tasse. Blauer Rand. Ein feiner Sprung, der genau dort beginnt, wo er auf deiner Untertasse aufhört. Am Boden klebt ein einziges getrocknetes Pfefferminzblatt.
> 
> Ein Spätbrief, gesprochen vor dem Eiswinter. Gerichtet an jemanden, der noch heute jeden Morgen den Ofen im Dampfpostamt anheizt.
> 
> Über euch knarrt die schiefe Stelze. Und von oben, durch die Bretter, hört ihr Frau Brökel. Sie singt. Ganz leise, ein bisschen heiser, dieselbe Melodie wie das Lachen im Dampf.

**Mensch:** Ich klettere hoch, so schnell es mit der Dose geht. Ich stelle die Tasse auf die Untertasse, direkt vor Frau Brökel, und sage nichts. Das muss sie selbst hören.

**KI:**

> Frau Brökel hört auf zu singen, als die Tasse klickend auf der Untertasse landet. Die beiden Sprünge treffen sich, als hätten sie nie etwas anderes vorgehabt.
> 
> Und der Dampf steigt. Diesmal ohne Kessel, ohne Wasser, ganz von allein.
> 
> „Agathe“, sagt die heisere Stimme, jetzt klar und nah. „Hier ist Henriette. Ich hab die Tasse nicht mitgenommen auf die letzte Fähre. Damit du einen Grund hast, sie mir zu bringen.“
> 
> Frau Brökel setzt sich. Sehr langsam. Ottokar schaut demonstrativ an die Decke und schnieft dabei so laut, dass es nichts nützt.
> 
> „Vierzig Jahre“, sagt Frau Brökel schließlich. Dann sieht sie dich an. „Weißt du, warum er bei dir angekommen ist, Marlies? Ruhige Hände kühlen. Deine zittern. Zitternde Hände reiben warm. Das ist das Beste, was eine Dampfpostbeamtin haben kann, und ich hab’s dir zwölf Jahre lang nicht gesagt.“
> 
> Sie steht auf, nimmt die Tasse und ihren Schal. Den großen Schlüsselbund des Postamts legt sie vor dich auf den Schalter.
> 
> „Die Fähre geht um sechs.“

**Mensch:** Ich nehme den Schlüsselbund. Er ist schwerer als gedacht. 'Grüßen Sie Henriette von mir, Agathe.' Dann setze ich den Kessel auf, für den nächsten Brief.

**KI:**

> Frau Brökel lächelt, zum ersten Mal, seit du sie kennst, mit dem ganzen Gesicht. „Mach ich, Marlies. Sie wird fragen, wer das Postamt jetzt hat. Ich sag ihr: die mit den warmen Händen.“
> 
> Dann ist sie weg, und durch die beschlagenen Fenster siehst du ihre Laterne kleiner werden, Richtung Fähre.
> 
> Ottokar räuspert sich. Er hält dir einen frischen Teebeutel hin, Pfefferminz, noch ein bisschen warm von seiner Manteltasche. „Den hat sie mir an der Tür in die Hand gedrückt. Für dich. Ich hab nicht reingehört. Fast nicht.“
> 
> Der Kessel beginnt zu summen. Du gießt auf, und im Dampf sagt Agathe Brökels Stimme einen einzigen Satz:
> 
> „Deine Hände sind gar nicht so ruhig. Zum Glück.“
> 
> Draußen pfeift die Fähre. Und auf dem Schalter wartet schon der nächste Brief.
> 
> ———
> 
> Die Tür schließt sich. Das war ein Leben, das es nicht gibt, im Dampfpostamt von Frostwerder. Was du mitnimmst, ist der Satz aus dem Teebeutel: „Deine Hände sind gar nicht so ruhig. Zum Glück.“
> 
> Wenn du magst, öffne ich eine andere Tür. Nenn mir einfach einen neuen Gegenstand.
