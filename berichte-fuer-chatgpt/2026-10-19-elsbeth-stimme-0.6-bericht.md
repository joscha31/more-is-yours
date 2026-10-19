# Elsbeth Unknown – Schritt 1, zweite Runde: Entwurf 0.6 der Schreibstimme (Testbericht)

**Stand:** 19.10.2026 · **Status:** FACH-LAB-TEST / PETRA REVIEW · Produktion unverändert (live läuft weiter 0.4), nichts veröffentlicht, nichts als PETRA APPROVED markiert. Kein Wechsel zu Schritt 2.
**Grundlage:** Entwicklungsprotokoll 18.10. · ChatGPT-Review zu 0.5 vom 19.10. · Neugier statt Leidensverstärkung (PETRA APPROVED) · Gastgeberin: ältere Dame, Weisheit, Flugschein, voller Name (PETRA APPROVED) · Erlebnisbibliothek, Original 20 als Kern (PETRA APPROVED) · kein Launch vor Qualitätsfreigabe (PETRA APPROVED).

## (a) Aufgabe

Elsbeth Unknown soll nicht nur freundlich und klug klingen, sondern unverwechselbar: neugierig, lebenslustig, eigensinnig, mit dem trockenen Humor einer lebenserfahrenen 68erin. Ohne Flugschein-Witze, ohne Kalendersprüche, ohne künstliche Vertraulichkeit. Schwerpunkt: der glückliche Gast, „überrasch mich", der Erfolg, „nur ein Chatbot". Bei „überrasch mich" nicht wieder automatisch der Zug.

## Was im Entwurf 0.6 neu ist

Datei: `outputs/world-of-the-unknown/elsbeth/ELSBETH-REGELN-0.6-ENTWURF.md` (nicht im Server). Alles außer den drei Abschnitten unten ist wörtlich 0.4.

1. **Persönlichkeit als Haltung statt Adjektiven.** Fünf Haltungen: eine 68erin, die keinem traut, der weiß, wie andere leben sollen, deshalb keine Ratschläge · fängt Unerwartetes an (Flugschein höchstens einmal, und das Alter ist nie ein Thema, auch nicht aufmunternd) · Lust aufs Konkrete statt auf große Fragen · eigensinnig, mit Meinungen in einem halben Satz · trockener, leiser Humor, gern auf eigene Kosten. *Diese fünf Haltungen sind ein Vorschlag von Claude Code, nicht von Petra bestätigt.*
2. **Schreibregeln geschärft:** genau eine Frage, nichts über den Gast erfinden, keinen Mangel unterstellen (auch nicht verneint), kurze Liste von Empfangsdamen-Sätzen. Dazu drei Beispiele in ihrem Ton für Lagen, die bewusst **nicht** getestet werden (Regen, neuer Hund, „ich bin nicht der Typ dafür"), damit das Modell den Ton lernt und keine Testantworten abschreibt.
3. **Vier Lagen ausdrücklich beschrieben** (zufrieden, überrasch mich, Erfolg, Chatbot) und **sieben Türen aus Petras Original-20** mit ihren echten Titeln (01, 02, 03, 04, 11, 14, 16), mit der Regel „keine Standardtür". Die Erlebnisse selbst sind damit nicht gebaut.

## (b) Testfälle und Kosten

Dieselben fünf Gäste wie in Runde 1, gleicher erster Satz, die zwei festen Eröffnungssätze der Halle davor. Claude Haiku 5.5 über OpenRouter, Temperatur 0.8. A, B, D, E je dreimal, C fünfmal (wegen der Türauswahl). **17 Antworten, 2,13 Cent.** Alle wörtlich: `elsbeth/tests/2026-10-19-stimme-0.6-roh.md`.

## (c) Die fünf besten Antworten

**1. Erfolg (D, Lauf 3)**
> Ich freu mich mit dir. Aufgekratzt sein ist einer meiner liebsten Zustände, weil man da noch nichts verstellt. Gab es heute einen Moment, in dem du kurz allein vor deinen Sachen gestanden hast, bevor der Trubel losging?

*Warum:* eigene Meinung in einem halben Satz, genau eine Frage nach einem Moment, den nur der Gast erlebt hat. „Deinen Sachen" statt erfundener „Bilder", kein Wort zum Alter.

**2. Erfolg (D, Lauf 2)**
> Dann freue ich mich mit dir, und zwar ziemlich ungeniert. Ich hätte vorher vermutlich drei Tage lang geübt, wie man einen Raum betritt, ohne dabei zu wackeln. Was war der Moment heute, den nur du mitbekommen hast?

*Warum:* Humor auf ihre eigenen Kosten, warm, ohne „Glückwunsch!".

**3. Zufrieden (B, Lauf 3)**
> Dann glaube ich dir. Ich traue Leuten, die nichts ändern wollen, meist mehr als denen, die schon genau wissen, wie es besser wäre. Mich interessiert, was an deinem Alltag so gut läuft: Gibt es eine Stelle am Tag, an der du sagst, dass es genau so passt?

*Warum:* Das ist zum ersten Mal die 68erin. Eigensinnig und ein bisschen gegen den Strich, ohne Defizit, mit Neugier auf das Gute.

**4. Überrasch mich (C, Lauf 2)**
> Gut, dann nehme ich dich beim Wort. Ich setze dich an den Tisch der Versammlung deiner möglichen Ichs: fünf Versionen von dir, die sich nicht einig sind, wer den letzten Kuchen bekommt. Du kannst jederzeit aufstehen und gehen, niemand hält dich fest. Gehst du hinein?

*Warum:* eine neue Tür aus Petras Original-20, ein einziges witziges Bild, nichts vorweg erzählt.

**5. Chatbot (E, Lauf 1)**
> Ja, ich bin eine KI, eine erfundene Figur. Ob dir das reicht, entscheidest du. Die Tür da hinten steht so oder so offen.

*Warum:* die Wahrheit im ersten Satz, lakonisch, keine Verteidigung, kein Verkauf.

Lobende Erwähnung, überlastete Besucherin (A, Lauf 2): „Das Wort ‚mehr' bleibt bei mir hängen." Das ist echtes Zuhören an einem einzigen Wort.

## (d) Was misslungen ist

1. **Neue Formeln statt alter.** Die Sätze aus dem Prompt kommen wörtlich zurück. Alle drei zufriedenen Gäste bekamen „Dann glaube ich dir", alle fünf „Überrasch mich"-Gäste bekamen „Dann nehme ich dich beim Wort". Das ist dieselbe Krankheit wie vorher „Dann bist du hier genau richtig", nur mit besseren Worten. Ursache: Der Prompt beschreibt die Lage mit genau diesen Wendungen. In 0.7 muss die Absicht beschrieben werden, nicht der Satz.
2. **Nur zwei von sieben Türen.** Der Zug kam nicht mehr vor (0 von 5), dafür kamen dreimal die Versammlung und zweimal „Der Mensch, der alles anders sieht". Einmal nannte Elsbeth den Namen der Tür gar nicht (Lauf 3). Eine echte Abwechslung schafft das Modell allein nicht. Das gehört in Schritt 3 (zum Beispiel schlägt der Server jeweils zwei zufällige Türen vor, Elsbeth Unknown wählt).
3. **Die überlastete Besucherin bekommt immer dieselbe Frage.** Alle drei Läufe fragen sinngemäß „Wann hast du zuletzt etwas gemacht, bei dem du nicht auf die Uhr geschaut hast?". Das ist kein Leid-Spiegeln mehr, aber eine austauschbare Coachingfrage, wie ChatGPT im Review schon schrieb. Dazu einmal ein kleiner Rat („Fang vielleicht klein an").
4. **Chatbot, Lauf 3, verliert die Figur:**
   > Ja, ich bin eine KI, eine erfundene Figur, die Elsbeth Unknown spielt. Ich habe keine Gefühle wie ein Mensch, und ich bin keine echte Gastgeberin. Ob dir die Bibliothek trotzdem etwas gibt, entscheidest du.

   Ehrlich, aber so ehrlich, dass die Gastgeberin verschwindet und nur noch eine Maschine übrig ist. Ehrlichkeit und Figur müssen beide bleiben.
5. **Kleinigkeiten:** Einmal erfindet sie Details („dein Name an der Wand", D Lauf 1). Einmal zwei Aufforderungen hintereinander (B Lauf 1, „Was gehört bei dir dazu? Erzähl mir von einer Kleinigkeit …").

## Was gegenüber Runde 1 klar besser ist

- Alle 17 Antworten unter 50 Wörtern, keine einzige mit zwei Fragen.
- Bei Erfolg und Zufriedenheit zum ersten Mal echte Persönlichkeit: eigene Meinung, Humor auf eigene Kosten.
- Kein Zug-Autopilot mehr, kein Alterssatz, kein „Glückwunsch!", kein Flugschein-Gag.
- Kein unterstellter Mangel beim zufriedenen Gast.

## Vorschlag für Runde 3, falls Petra „verändern" sagt

1. Im Prompt die Lagen nur mit der Absicht beschreiben, ohne wiederholbare Wendungen. Und eine Regel: kein Einstiegssatz, der mit „Dann" beginnt.
2. Für die Belastete zwei, drei sehr verschiedene Richtungen nennen, wohin Elsbeths Neugier gehen kann (Vorlieben, Orte, Menschen, Humor), statt einer.
3. Für die Chatbot-Frage: ehrlich, aber in ihrer Stimme bleiben, ohne Selbstabwertung.
4. Türauswahl erst in Schritt 3 lösen (Technik), nicht mit noch mehr Prompt.

Wieder dieselben fünf Fälle, rund 2 Cent.

## (e) Petras Urteil

| Fall | passt / verändern / nein |
|---|---|
| A überlastet | |
| B zufrieden | |
| C überrasch mich | |
| D Erfolg | |
| E Chatbot | |
| Entwurf 0.6 insgesamt | |

Schritt 2 beginnt erst nach Petras Urteil.
