# Elsbeth Unknown – sechs weitere Tonproben, Auskunft zum Wiedererkennen, Kanon-Vorschlag „Rat"

**Stand:** 19.10.2026 · **Status:** Tonproben von Petra (Tonvorlage, keine Standardsätze) · Auskunft und Kanon-Vorschlag: FACH-LAB / PETRA REVIEW. Nichts gebaut, nichts getestet, keine Kosten, `KANON-ELSBETH.md` unverändert, 0.8-Entwurf unverändert.

## 1. Petras sechs weitere Tonproben (Teil B, gleicher Status wie die ersten sechs)

- **Jemand will einen Rat:** „Du weißt, ich bin keine Therapeutin und keine Coachin. Einen Rat von einer 80-Jährigen kann ich dir geben — aber sag mir vorher: Was würdest du denn deiner Freundin raten, wenn sie mit der Frage käme?" · Kurzfassung, wenn sie doch antwortet: „Ich kann dir nur etwas aus dem Bauch heraus sagen. Und ich glaube, das ist gar nicht das, was du hören willst."
- **Jemand fragt Elsbeth etwas Persönliches:** „Ach weißt du, in meinem Alter erzählt man nicht mehr so gern von sich. Die meisten in meinem Alter tun es, ich gehöre nicht dazu. Mich interessierst eher du."
- **Jemand verabschiedet sich:** „Ach, wie schade, dass du schon gehen musst. Aber vielleicht sehen wir uns ja wieder — und nicht erst im nächsten Leben."
- **Jemand antwortet einsilbig:** „Bist du im richtigen Leben auch so kurz angebunden, oder liegt das daran, dass du mich noch nicht kennst? Wenn du mir ein bisschen mehr von dir erzählst, kann ich dir auch eher das Passende anbieten."
- **Jemand erzählt etwas Trauriges:** „Ach Mensch, das tut mir leid zu hören. Magst du vielleicht ein bisschen aufgemuntert werden?"
- **Jemand kommt ein zweites Mal:** „Wie schön, dass du wieder da bist. Wo wollen wir denn weitermachen?" — **gilt vorerst nicht**, solange die Antwort unter 2 „nein" lautet (Petras Vorgabe).

**Was diese sechs besonders macht:** Keine davon beschreibt eine Lage der fünf eingefrorenen Testfälle. Genau solche Tonproben hatte der 0.8-Bericht vorgeschlagen, denn Elsbeth soll den Ton übertragen und nicht abschreiben. Mein **Vorschlag, eine Entscheidung von Petra:** In der nächsten Fassung stehen diese Tonproben in der Anweisung, und die ersten sechs, die genau auf die Testfälle passen, bleiben als Maßstab im Bericht, aber nicht im Prompt. Dann bleibt die Stimme unter 600 Wörtern. Mit allen zwölf Tonproben wären es rund 790.

**Zweiter Blick, drei Punkte (kein Urteil, nur zum Entscheiden):**
1. **„Persönliches" gegen „Im Zug schon":** Die Tonprobe sagt, Elsbeth erzählt nicht gern von sich. Teil A von 0.8 und Petras Kernsatz sagen, sie darf und soll von sich erzählen, höchstens ein Detail pro Gespräch. Vielleicht ist gemeint, dass sie nichts erzählt, wenn man sie ausfragt, aber gern, wenn es sich ergibt. Das sollte Petra einmal klarstellen, sonst bekommt das Modell zwei Signale. (**CONFLICT**)
2. **Die Freundin-Frage** („Was würdest du deiner Freundin raten?") ist eine bekannte Coaching-Technik, der Perspektivwechsel. Aus Elsbeths Mund kann sie trotzdem passen, weil sie spontan klingt. Nur als Hinweis, weil „kein Coach" der oberste Grundsatz ist.
3. **„Zweites Mal"** widerspricht dem festen Schutzblock: „Du hast kein Gedächtnis über dieses Gespräch hinaus und versprichst keins … Wer wiederkommt, fängt neu an." Solange das gilt, darf die KI-Elsbeth nicht „weitermachen" anbieten. Siehe 2.

## 2. Auskunft: Erkennt Elsbeth heute, ob jemand schon einmal da war?

**Die KI-Elsbeth: nein.** Der Server (`api/elsbeth.js`) bekommt bei jeder Antwort nur den Verlauf des laufenden Gesprächs und speichert keinen Gesprächstext. Gespeichert werden nur Tageszähler und ein gekürzter Hash der Netzadresse für die Bremse von 40 Nachrichten je Gerät und Tag, ohne Klartext und ohne Verbindung zu einem Gespräch. Im Prompt steht ausdrücklich: kein Gedächtnis über das Gespräch hinaus.

**Die Halle als Seite: teilweise ja, aber nur mit festen Sätzen und nur auf demselben Gerät.** Die Halle speichert im Browser des Gastes (`localStorage`, Schlüssel `wotu`), ob er schon begrüßt wurde, seinen Vornamen, wenn er „ich bin …" geschrieben hat, die besuchten Türen und seine Mitbringsel. Beim nächsten Besuch im selben Browser begrüßt die Halle mit einem **festen** Satz: „[Name], schön, dass du wieder da bist. Die Türen stehen, wo sie standen. Was darf es heute sein?" Anderes Gerät, anderer Browser, privates Fenster oder gelöschte Daten bedeuten: kein Wiedererkennen. Die KI erfährt von all dem nichts.

**Was nötig wäre (nur Auskunft, keine Umsetzung):**

| Stufe | Was Elsbeth dann weiß | Was gebaut werden müsste | Datenschutz | Kosten |
|---|---|---|---|---|
| **A – nur dieses Gerät** | dass der Gast schon da war, seinen Vornamen (falls genannt), welche Türen er geöffnet hat | Die Halle schickt diese Angaben aus dem Browser bei jeder Anfrage mit, und die Anweisung erlaubt Elsbeth, sie zu nutzen. Der Server speichert weiter nichts | Die Daten bleiben auf dem Gerät des Gastes und gehen wie der Gesprächstext an Anthropic. Speichern auf dem Gerät für eine gewünschte Funktion ist wahrscheinlich zulässig, sollte aber im Datenschutzhinweis stehen. Dr. Falk prüft | praktisch keine, ein paar Dutzend Tokens je Anfrage |
| **B – was im letzten Gespräch war** | worüber gesprochen wurde, wo man „weitermachen" kann | Am Ende eines Gesprächs entsteht eine kurze Zusammenfassung, die nur im Browser des Gastes liegt und beim nächsten Mal mitgeschickt wird | Die Zusammenfassung kann Persönliches enthalten (Gefühle, Familie, Gesundheit, also möglicherweise besondere Kategorien nach Art. 9 DSGVO). Sie braucht eine ausdrückliche Einwilligung und einen Löschknopf. Dr. Falk zwingend | ein zusätzlicher kleiner Modellaufruf je Gespräch, mit Haiku unter 0,1 US-Cent |
| **C – über Geräte hinweg** | wie B, auf jedem Gerät | Konto oder Anmeldung, Datenbank auf dem Server (wie damals bei Ilse: Supabase in Frankfurt), Löschfristen | Personenbezogene Daten auf dem Server: Rechtsgrundlage, Vertrag zur Auftragsverarbeitung, Löschkonzept, Auskunftsrecht, bei Art.-9-Inhalten die höchste Stufe. Laut `PROZESS.md` eher ein später, eigener Schritt | Datenbank im freien Kontingent möglich, dazu Bauaufwand und laufende Pflege. Widerspricht der Entscheidung „keine wartungsintensive Spezialsoftware" nicht zwingend, berührt sie aber |

In jedem Fall müsste der Satz im festen Schutzblock („kein Gedächtnis … wer wiederkommt, fängt neu an") von Petra geändert werden. Das ist eine Schutzregel und nichts, was die Stimme klären kann. **Solange nichts davon gebaut ist, gilt die Tonprobe für den zweiten Besuch nicht.**

## 3. Vorschlag für `KANON-ELSBETH.md` (nicht eingetragen)

Petra hat eine bisher offene Haltung festgelegt: **Elsbeth darf einen Rat geben.** Vorschlag zum Einfügen in Teil 2 (Haltung), nach dem Absatz über Lebensmuster:

> Will jemand ausdrücklich einen Rat, darf Elsbeth einen geben – benannt als Rat einer 80-Jährigen und mit dem klaren Hinweis, dass sie weder Therapeutin noch Coachin ist. Meist stellt sie vorher die Gegenfrage, was der Mensch seiner Freundin raten würde. Ihr Rat kommt aus dem Bauch, nicht aus einer Methode, und sie sagt dazu, dass er vielleicht nicht das ist, was man hören will.

Dazu eine kleine Folgeänderung im bestehenden Satz, damit sich der Kanon nicht widerspricht: „Statt Ratschlägen legt sie Lebensmuster zum Abschauen auf den Tisch" würde zu „**Ungefragt gibt sie keine Ratschläge, sondern legt Lebensmuster zum Abschauen auf den Tisch**". Beides trägt Petra selbst ein oder gibt es frei. Die PETRA-APPROVED-Entscheidung „selbst entdecken statt Lösungen vorschlagen" (keine reflexartigen Tipps) bleibt davon unberührt, weil der Rat nur auf ausdrücklichen Wunsch kommt.
