# Konsolidierung: Qualität in den Mittelpunkt

Stand: 30.10.2026 · Status: **KONSOLIDIERUNG (von Petra beauftragt) / Einzelvorschläge PETRA REVIEW**. Geschrieben von Claude Code.
Dabei ist nichts gelöscht, nichts programmiert, keine Anweisung geändert, kein Bild erzeugt oder ersetzt worden. Es gab keine Kosten und keine Veröffentlichung. Die Phase bleibt **Phase 2 – Elsbeth spricht**. `PROZESS.md` ist unverändert.

**Gelesen:** `STATUS.md` (alte Fassung jetzt in `archiv/2026-10-30-STATUS-vor-konsolidierung.md`), `PROZESS.md`, `KANON-ELSBETH.md`, die Elsbeth-Berichte 0.6 bis 0.11, den Modellvergleich (19.10.), den Qualitätsvergleich Stufe 1 (29.10.), die Prüfung „OpenAI als Gehirn“ (29.10.), die Ursachenprüfung (29.10.), die Flur-Probe in ChatGPT mit Durchlauf 1 (30.10.), die Web-App (29.10.), die technischen Berichte vom 30.10. und das Stil-Gesetz „Mystic“ (15.10., im privaten Arbeitsrepo).

---

## 1. Die zwei Qualitätsziele (Petras Auftrag 30.10.)

- **A – Die Erlebniswelt:** außergewöhnlich schön und lebendig, geheimnisvoll, hochwertig, faszinierend. Bilder, Räume, Licht, Atmosphäre, Animationen, später Geräusche.
- **B – Elsbeth Unknown:** hervorragende Gesprächsführung. Interessant, warm, humorvoll, überraschend, unverwechselbar, keine gewöhnliche freundliche KI. Gastgeberin, keine Coachin.

Beide sind gleichberechtigt und kommen später in derselben Web-App zusammen. Gearbeitet wird fachlich an beiden parallel, technisch aber an **nur einer Hauptaufgabe gleichzeitig**.

---

## 2. Was es technisch gibt, und was damit geschieht

| Was | Funktioniert nachweislich | Weiterverwenden | Unfertig | Jetzt |
|---|---|---|---|---|
| **moreisyours.de** | live, Startseite seit 23.10., verkauft nichts | als Außenauftritt | – | bleibt unverändert |
| **Halle** (geheime Seite) mit Elsbeth-Server | Halle mit Bildern und Clips; Server mit Schutzfiltern, Krisensätzen, Tagesdeckel, Losungswort, gehashten Zählern; Elsbeth 0.4 mit Haiku | **der Server ist das Herzstück**: Schutz, Kostenbremse, Anschluss an verschiedene Modelle | Elsbeths Gesprächsqualität | bleibt unverändert |
| **Elsbeth-Prüfstände** (Testkatalog v2, Blindvergleich, Fragenpool, Gesprächsskript) | 30 Gespräche mit drei Modellen, Zählskripte, blinde Vergleichsseite | **ja, für die Gesprächsqualität** | fester Testgast hört nicht zu (verzerrt Ergebnisse) | Werkzeug für Ziel B |
| **Tisch-Prototyp** („Fünf von dir an einem Tisch“) | Flur, Rahmen, Abendessen laufen; Zeichen steuern die Seite | Erkenntnisse (Ursachenprüfung), Rahmen- und Flur-Technik | Ablauf drängt, Petra fand Fassung 2 zu schematisch | **geparkt**, nicht weiterbauen |
| **Lokale Web-App** (29.10.) | Halle → Elsbeth → Tür → Raum → Rückkehr, am iPhone zum Home-Bildschirm | **ja: die gemeinsame Grundlage** | nur Platzhalter, keine KI angeschlossen, nur im eigenen WLAN | gemeinsamer Weg (Vorschlag) |
| **Bühnen-Nachweis** (KI steuert Szene) | simulierte Antwort steuert Licht, Figur, Tür; falsche Befehle werden abgewiesen | das Prinzip „die KI wählt aus einer Liste, die Bühne zeigt“ | nicht an echte KI angeschlossen | **geparkt**, kommt in die Web-App, wenn Ziel A und B so weit sind |
| **ChatGPT/MCP: Flur-Probe** (in der Zentrale, online) | Durchlauf 1 vollständig: Flur erscheint in ChatGPT, Modell meldet den Vorschlag, Aufhängen per Knopf, Elsbeth weiß Bescheid | Erkenntnis: ChatGPT kann eine Ansicht zeigen | 9 Durchläufe fehlen; ohne Anmeldung erreichbar | **geparkt**; läuft weiter, bis Petra sie abschalten lässt |
| **ChatGPT/MCP: Rahmen-Probe** (nur lokal) | lokal getestet, geschützt | – | nie mit ChatGPT verbunden | **geparkt** |
| Podcast mit Mabel | eigenes Studio, Folge 1 im Schnitt | – | Veröffentlichung wartet auf Dr. Falk und Petra | außerhalb von Phase 2, unberührt |

### Die eigenständige Web-App als gemeinsamer Weg: fachliche Beurteilung

**Ergebnis: Es spricht kein technischer Grund dagegen.** Sie ist die richtige Grundlage, weil nur dort Welt und Gespräch ganz in unserer Hand liegen: Modell, Anweisung, Ablauf, Schutz und Gestaltung. In ChatGPT gehören Modell und Gespräch dem Gast und OpenAI.

Drei ehrliche Punkte, die vorher bekannt sein sollten:
1. **Die Zentrale ist voll.** Alle 12 Server-Funktionen bei Vercel sind belegt (die Flur-Probe hat die letzte genommen). Die Web-App braucht später ein **eigenes Vercel-Projekt** mit eigener Adresse. Das ist kostenlos, aber eine Veröffentlichung und braucht Petras Ja, wenn es so weit ist.
2. **Der Elsbeth-Server kann mitgenommen werden**, statt neu gebaut zu werden.
3. **iPhone:** Als Home-Bildschirm-App funktioniert es. Ton und Musik starten auf dem iPhone erst nach der ersten Berührung. Das ist eine Gestaltungsfrage, kein Hindernis. Ohne Internet läuft das Gespräch nicht.

---

## 3. Elsbeth: was gesichert ist und was nicht

### Warum sie teilweise wie eine gewöhnliche KI klingt

**Aus der Anweisung (gesichert):**
- **Beispiele werden zu Pflichten.** Was in Klammern oder Listen steht, übernehmen alle Modelle fast wörtlich: Gesten („Sie lacht.“), Gegenstände, Flurbeschreibung, Rat-Formel („keine Therapeutin“ 6 von 6), Tonproben, Satzenden wie „Was hat dich hierher gebracht?“ (0.11: 4 von 5).
- **Das Deutungsverbot ist so gefasst, dass es Spiegeln erzeugt.** „Du gibst wieder, was die Person gesagt hat“ führt dazu, dass 62 von 246 Antworten mit den Worten des Gasts beginnen, und zu Coaching-Formeln wie „das darf stehen bleiben“ (21-mal).
- **Regeln behindern einander.** „Lass ihn erzählen“ gegen „nimm ihn mit in den Flur“, „warm“ gegen „Appetit, nicht Fürsorge“, „höchstens eine Frage“ gegen „dann eine Frage nach etwas Konkretem“.
- **Es fehlt ein Maßstab für Gespür.** Nirgends steht, dass Humor aus der Lage kommt und nicht über eine Kränkung lacht, oder dass eine Frage dem Verstehen dient.
- **Bei Problemen rutscht sie in Coach-Haltung.** 0.11: 5 von 5 fragen nach freier Zeit. Auch das bessere Modell löst das allein nicht (19.10.).

**Aus dem technischen Ablauf (gesichert):**
- Im Tisch-Prototyp sieht sie vom ersten Satz an einen Zähler „0 von 5“ und eine Figur-Anleitung. Sie führt deshalb auf Rahmen hin statt auf Verständnis (24 von 30 gehen nach dem 3. oder 4. Gastsatz in den Flur).
- Eine Sperre gegen schon gestellte Fragen drückt bei langen Gesprächen zu abwegigen Fragen („Was lag am häufigsten auf dem Schneidebrett?“).
- Verfahrenssätze kommen aus ihrem Mund: Geschlechterfrage (26 von 30), Hinweis zu Namen Dritter.
- **Die Tests selbst verzerren:** Der feste Testgast hört nicht zu, jeder Vorschlag wurde sofort angenommen, einzelne Gastsätze messen kein Gespräch. Gut lief es dagegen, wenn Petra selbst antwortete (Flur-Test 27.10.).

**Aus dem Sprachmodell (teilweise gesichert):**
- Live läuft **Haiku 5.5**. Es macht Grammatikfehler und schiefe Sätze; Sonnet 5.5 machte mit demselben Text keine (19.10.).
- Die großen Modelle (Opus, Astra, Sol) zeigten dieselben Anweisungsprobleme. In Fall A überzeugte Petra **keines**. Das Modell ist also nicht die Hauptursache, aber Haiku ist für Sprache die schwächste Wahl.
- Petra fand Luna „fast besser“, aber dem Gast wurden keine Fragen gestellt („ein Nogo“).

**Ein Hinweis aus ChatGPT (Durchlauf 1, 30.10., ein einziges Gespräch, kein Beleg):** Ohne Zähler und Regie je Antwort blieb Elsbeth lange im Gespräch, lachte nicht über das Beleidigtsein und bat nicht darum, den Namen wegzulassen. Sie fasste aber noch zusammen. Das passt zur Ursachenprüfung: Ein Teil der Künstlichkeit kommt aus dem Ablauf.

### Was noch ungeklärt ist
1. Ob Wärme und Humor mit weniger und klareren Regeln verlässlich zusammenpassen, oder ob es dafür ein stärkeres Modell braucht.
2. Ob Elsbeth über ein langes Gespräch (15 bis 25 Wechsel) Persönlichkeit hält, ohne in Schablonen zu fallen. Getestet wurden meist einzelne Antworten oder feste Abläufe.
3. Welches Modell Petra wirklich bevorzugt. Der Blindvergleich ist offen.
4. Ob der Figurenkanon (Jahrgang, Hildegard, Haltung) in Elsbeths Anweisung gehört. Live steht er heute nicht drin.
5. Wie man fair testet: Ein antwortender Testgast und Petras eigene Gespräche sind aussagekräftiger als feste Sätze.

### Woran gutes Gespräch zu erkennen ist (Petras Maßstab, zum Prüfen)
Natürliches Gespräch statt Abfragen · echtes Zuhören · natürliche Reaktion auf Unerwartetes · Humor aus der Lage · eigene Persönlichkeit · nachvollziehbare Führung · keine vorschnellen Deutungen · kein automatisches Spiegeln · keine versteckten Fragebögen · persönliches Thema und reine Neugier sind beide willkommen.

---

## 4. Der Bildbestand

**Freigegeben ist der Stil, nicht die einzelnen Bilder.** Das Stil-Gesetz „Mystic“ (PETRA APPROVED 15.10.) legt fest: Nachtblau und Gold, warmes Licht, Glas, Messing, Bücher, Cinzel und Cormorant Garamond, und Bilder nur als Ableitung aus dem **Elsbeth-Masterbild**. Eine einzelne Freigabe der Hallenbilder habe ich im GitHub-Haus nicht gefunden.

| Bestand | Status | Technisch |
|---|---|---|
| **Elsbeth-Masterbild** (Bibliothek mit Elsbeth, aus der Reel-Premiere) | Grundlage des Stil-Gesetzes | gut als Bezugsbild |
| **Hallenbilder** (Halle, Empfang, Tresen, Türen, Tür, Nachtzug, Elsbeth-Ausschnitt) | in Verwendung in Halle und Web-App, KI-Ableitungen; **Petra: überzeugen nicht** | Größe und Format passen, Qualität nicht |
| **Ableitungen** (Türwand, Tresen, Nachtzug-Varianten, leere Halle) | Experimente | – |
| **Clips** (Elsbeth erwacht, Halle lebt, Tür öffnet sich) | in Verwendung in der Halle, Tür-Clip in der Web-App | funktionieren technisch, 23 MB |
| Verschleierte Porträts, gemalter Flur, Rahmen (gezeichnet) | technische Platzhalter | – |
| Podcast-Folgenbild | eigener Bereich, nicht Teil der Welt | – |

**Was gut funktioniert:** die Farbwelt Nachtblau und Gold, das warme Licht, die beiden Schriften, Goldstaub, und das Prinzip „der Raum bleibt sichtbar, Blätter schieben sich davor“ statt Menüs.

**Was neu entwickelt werden muss:** die Bilder selbst, als eigene visuelle Identität statt beliebiger KI-Ästhetik. Ob das Masterbild Bezugspunkt bleibt, gehört zu dieser kreativen Arbeit (Petra, ChatGPT, gegebenenfalls Higgsfield). Claude Code entwirft keine Bildwelt.

**Wie gute Bilder später lebendig werden:** Jedes Bild wird in Ebenen geliefert (Hintergrund, Licht, Figur, Gegenstände) und in zwei, drei vorbereiteten Zuständen (zum Beispiel Licht an und gedimmt, Tür zu und offen). Dazu kommen kurze Clips für Übergänge. Die Web-App blendet dann je nach Gespräch zwischen den Zuständen. So reagiert die Welt sofort, ohne dass während des Gesprächs Bilder erzeugt werden. Das ist die Technik aus dem Bühnen-Nachweis. Für die kreative Arbeit heißt das nur: Bilder von Anfang an so bestellen, dass es Ebenen und Zustände gibt.

---

## 5. Empfehlung: der eine nächste Schritt

**Elsbeth-Gesprächsprobe mit gezielten Streichungen statt neuer Persönlichkeit.**

Begründung: Das Tor von Phase 2 ist Elsbeth. Die Ursachen sind gut belegt, und die meisten lassen sich durch **Weglassen und Klarstellen** beheben, nicht durch mehr Text. Die Bildentwicklung läuft parallel bei Petra und ChatGPT und braucht Claude Code noch nicht.

Umfang (nach Petras Ja):
- Eine **Prüffassung** der bestehenden Gastgeber-Anweisung, keine neue Elsbeth: Beispiele, die zu Pflichten werden, raus; „gib wieder, was die Person gesagt hat“ so fassen, dass das Deutungsverbot bleibt, aber Spiegeln entfällt; ein Satz zum Gespür für Humor; Rat-Hinweis nur, wenn jemand echte Hilfe sucht. Der Schutzblock bleibt unverändert (Namens-Hinweis nur nach Dr. Falk).
- **Kein Erlebnis, kein Flur, kein Zähler**: nur das Gastgebergespräch vom Empfang bis zur Tür.
- **Test mit echten Gesprächen:** Petra führt selbst einige Gespräche, dazu ein antwortender Testgast. Blind gegen 0.11, ausgewertet nach Petras Maßstab oben.
- Modell und Kostengrenze bestimmt Petra.

Die Live-Elsbeth 0.4 bleibt dabei unverändert.

---

## 6. Prüfprotokoll
- **Deutsch-Tor:** laut gelesen; ganze Sätze; „du“ klein; Zahlen bis 10 als Ziffer.
- **T1–T3:** keine Aussage über Petra; Petras Kritik an den Bildern ist als Qualitätsrückmeldung zur Sache aufgenommen.
- **M1–M3:** Der erste Abschnitt nennt die zwei Ziele; eine Handlung: Petra entscheidet über den einen nächsten Schritt.
- **V1–V3:** Alle Zahlen stammen aus den genannten Berichten; Vermutungen und ein einzelner Durchlauf sind als solche gekennzeichnet.
