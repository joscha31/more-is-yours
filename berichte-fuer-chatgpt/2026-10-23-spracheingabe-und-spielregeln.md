# Spracheingabe und Spielregeln – Prüfung und Umsetzung
Stand: 23.10.2026 · Claude Code · Auftrag von Petra (über ChatGPT vorbereitet)

## Kurz
- **Spracheingabe:** gebaut, kostenlos, im Browser getestet. Sie ist **nur mit Test-Schalter sichtbar** (`?sprache=1` an der Halle-Adresse). Für alle anderen Besucher ist die Halle unverändert.
- **Grund für den Schalter:** Dr. Falk sagt, der Knopf darf erst für alle sichtbar werden, wenn der Datenschutz-Absatz dazu live ist und von der Halle aus verlinkt ist.
- **Spielregeln:** nur geprüft, wie man sie zeigen kann. Kein Wortlaut, keine neue Begrüßung, keine Produktionsänderung. PETRA REVIEW.
- Keine Kosten, nichts veröffentlicht, Elsbeth 0.4 unverändert.

## 1. Spracheingabe

### Welche Lösung passt
| Weg | Kosten | Datenschutz | Ergebnis |
|---|---|---|---|
| **Spracherkennung des Browsers** (Web Speech API) | 0 € | Die Stimme geht an den Browser-Hersteller (Chrome → Google, Safari → Apple, Edge → Microsoft), teils USA. Wir bekommen nie Audio. Einwilligung vorher nötig (Dr. Falk). | **gewählt** |
| Mikrofon der Handy-Tastatur | 0 € | keine Verarbeitung durch uns, Wahl des Gastes (Dr. Falk: grün) | funktioniert heute schon ohne jede Änderung |
| Whisper oder eine andere bezahlte API | laufende Kosten | neuer Auftragsverarbeiter | ausgeschlossen (keine Freigabe) |
| Erkennung komplett im Browser (Whisper als Download) | 0 € | bleibt auf dem Gerät | zu schwer fürs Handy (großer Download, langsam) |

### So funktioniert es jetzt (nur mit `?sprache=1`)
1. Neben dem Eingabefeld steht ein Mikrofonknopf, aber nur, wenn der Browser Spracherkennung kann (Chrome, Edge, Safari auf iPhone und Mac). In Firefox und in manchen App-Browsern erscheint er nicht.
2. Beim ersten Antippen erscheint ein kurzer Hinweis (Text von Dr. Falk): wer die Stimme verarbeitet, „Mehr dazu“ führt zur Datenschutzerklärung. Knöpfe: „Mikrofon einschalten“ oder „Lieber tippen“. Die Zustimmung wird nur auf dem Gerät gemerkt.
3. Danach fragt der Browser selbst nach der Mikrofon-Erlaubnis.
4. Der Gast spricht, der Text erscheint **live im Eingabefeld**. Schon Getipptes bleibt stehen, das Gesprochene wird angehängt. Nach einer Sprechpause hört die Erkennung von selbst auf; noch einmal antippen beendet sie sofort.
5. Der Gast korrigiert oder löscht. **Erst „Senden“ schickt den Text** an Elsbeth. Es gibt keine automatische Versendung. Beim Senden wird eine noch laufende Erkennung abgebrochen, damit nichts nachträglich ins Feld rutscht.
6. Wenn Chrome die Erkennung auf dem Gerät anbietet, bittet die Seite darum (versprochen wird es nicht).
7. Die bestehende Textfunktion ist unverändert (Tippen, Enter, Senden, Losungswort, Schutzregeln).

### Fehlerfälle (jeweils ein ruhiger Satz unter dem Feld, Tippen geht immer)
Mikrofon gesperrt · Spracherkennung am Gerät ausgeschaltet (iPhone: Diktierfunktion) · nichts gehört · kein Mikrofon · kein Netz · Deutsch nicht verfügbar · sonstiger Fehler. Beim Verlassen der Seite stoppt die Erkennung.

### Geprüft (echte Ergebnisse, 23.10.)
- Im eingebauten Browser mit Handy-Größe (375 px): Knopf und Hinweis passen, keine waagrechte Verschiebung, das Eingabefeld bleibt sichtbar. Beim ersten Versuch hat der Hinweis das Feld nach unten geschoben; korrigiert (kleiner, Antwort-Knöpfe solange ausgeblendet).
- Mit einer Test-Attrappe der Spracherkennung: Vorhandener Text „Hallo.“ plus gesprochener Text ergibt „Hallo. Ich bin heute müde, aber neugierig“ im Feld. **Vor dem Klick auf Senden ging nichts an Elsbeth**, erst danach.
- Fehlerfall „Mikrofon gesperrt“: der richtige Satz erscheint.
- Ohne `?sprache=1`: Knopf unsichtbar, Halle wie vorher.
- **Nicht geprüft:** echtes Sprechen auf Petras iPhone und in Chrome auf Android. Das kann nur Petra mit dem Test-Schalter ausprobieren.

### Rückfall
- Unveränderte Fassung liegt als `halle-7k3q/index-rueckfall-2026-10-23.html` daneben, zusätzlich in git (letzter Stand vor der Änderung: Commit `a9d59d87`).
- Der Knopf ist ohnehin aus, solange der Schalter nicht gesetzt ist.

### Datenschutz (Dr. Falk, 23.10.)
- Verantwortung: 🟡 wir lösen die Übertragung aus, deshalb Einwilligung vor dem ersten Einschalten plus Absatz in der Datenschutzerklärung.
- Muster mit Hinweis und Einwilligung: 🟢 (mit seinen Korrekturen eingebaut: Hersteller neutral, Edge → Microsoft, USA, Link).
- Tastatur-Diktat-Hinweis: 🟢.
- Sein Absatz „Sprechen statt tippen“ und eine Zeile in der Speicher-Tabelle stehen jetzt im **Datenschutz-Entwurf** (noindex-Vorschau, nicht live).
- **Seine Empfehlung:** Knopf für alle erst im selben Schritt, in dem die Datenschutzerklärung mit diesem Absatz live ist.

### Offene Entscheidung (Petra)
Den Knopf für alle Besucher einschalten? Voraussetzung: Die Datenschutzerklärung mit dem neuen Absatz geht live. Bis dahin bleibt er Test.

## 2. Spielregeln vor dem ersten Erlebnis (PETRA REVIEW, kein Wortlaut)

Ziel: Neue Gäste erfahren einmal kurz, wie sie mit der Welt umgehen können, ohne dass Elsbeth jedes Mal einen Vortrag hält. Inhalt laut fachlichem Entwurf: frei sprechen und handeln, kein Richtig oder Falsch, widersprechen, schweigen, Hilfe verlangen, ausprobieren, jederzeit pausieren oder mit „Stopp“ aussteigen, Erkenntnisse freiwillig, nicht jedes Erlebnis enthält eine Übung. Wortlaut entwickeln ChatGPT und Petra.

### Drei Wege, sie zu zeigen
| | Wie | Stärke | Schwäche |
|---|---|---|---|
| **A · Eintrittskarte vor der ersten Tür** | Eine kleine Karte im Look der Bibliothek erscheint einmal, kurz bevor das erste Erlebnis beginnt. Ein Knopf „Verstanden, los“. Danach liegt sie als kleines Zeichen in der Kopfzeile („Spielregeln“) und ist jederzeit wieder aufrufbar. | Elsbeth muss nichts sagen. Kommt genau dann, wenn es gebraucht wird. Kein Eingriff in die Begrüßung. | Ein zusätzlicher Klick vor dem ersten Erlebnis. |
| B · Elsbeth sagt es selbst | Elsbeth nennt die Regeln beim ersten Besuch in ihrer Art. | Sehr persönlich. | Ändert die Begrüßungsanweisung (jetzt nicht erlaubt), Risiko Vortrag, Wortgrenze. |
| C · Schild an der Tür | Die Regeln stehen auf dem Türschild beziehungsweise in der Hausordnung der Halle. | Ganz in der Welt, still. | Wird leicht übersehen. |

**Empfehlung:** A, gestaltet wie C (Eintrittskarte oder Hausordnung im Mystic-Stil). Einmal pro Gerät gemerkt, immer wieder aufrufbar, Elsbeth bleibt still. Höchstens später ein einziger Satz von Elsbeth wie „Die Hausordnung liegt da“, aber erst, wenn Petra das will.

### Was dabei auffiel (Sache, nicht Wortlaut)
- **„Stopp“ ist heute nur in der Demo technisch verankert.** In der Demo-Elsbeth beendet „Stopp“ das Erlebnis per fester Regel. Bei der echten Elsbeth (KI) hängt es an ihrer Anweisung. Wenn die Spielregeln „Stopp“ versprechen, sollte es in Phase 3 eine feste technische Regel werden, die immer greift.
- **„Hilfe verlangen“ braucht eine festgelegte Antwort.** Was dann passiert, ist noch nicht beschrieben (CONTENT GAP).
- **Die Spracheingabe passt dazu:** „frei sprechen“ wird damit wörtlich möglich.
- Die freigegebenen Sicherheitsregeln (Krise, Grenzverletzung, Abbruch) bleiben unberührt; die Spielregeln ersetzen sie nicht.

### Offene Entscheidungen (Petra)
1. Welcher Weg (A, B oder C)?
2. Erscheint die Karte vor der ersten Tür oder schon am Empfang?
3. Wortlaut (ChatGPT und Petra).

## Geänderte Dateien (Workspace, Zentrale)
- `outputs/reel-generator-tool/halle-7k3q/index.html` – Mikrofonknopf, Hinweis, Fehlermeldungen, nur mit `?sprache=1`.
- `outputs/reel-generator-tool/halle-7k3q/index-rueckfall-2026-10-23.html` – unveränderte Fassung.
- `outputs/reel-generator-tool/datenschutz-unknown-vorschau.html` – Absatz „Sprechen statt tippen“ und Tabellenzeile (Entwurf, nicht live).

## Nachtrag 23.10. – Begrüßung im Gespräch erneuert (auf Petras Auftrag)
Petra hat bemerkt, dass Elsbeth im Gespräch noch mit dem alten Satz „Das kann doch noch nicht alles gewesen sein“ einstieg. Diese zwei festen Sätze standen in der Halle und nicht in der Anweisung für Elsbeth.
- **Ersetzt durch die freigegebene Begrüßung** aus `entscheidungen/2026-10-19-elsbeth-0.8-neuaufbau-freigabe.md`, Punkt 2: „Da bist du ja. Ich bin Elsbeth Unknown. Und wie darf ich dich nennen?“ In der Demo-Elsbeth folgt nach dem Namen: „[Name] also. Dann erzähl mal, was dich hergebracht hat.“ Bei der echten Elsbeth (KI) antwortet die Anweisung 0.4 auf den Namen.
- Die alten Antwort-Knöpfe unter der Begrüßung („Ich will erst mal nur schauen“ usw.) entfallen, weil Elsbeth jetzt nach dem Namen fragt.
- **Wiederkehrer mit bekanntem Namen:** Hier erscheint „Da bist du ja. Dann erzähl mal, was dich hergebracht hat.“ Der Satz ist aus den beiden freigegebenen Sätzen zusammengesetzt und nicht eigens freigegeben, deshalb PETRA REVIEW.
- Geprüft im Browser: Begrüßung erscheint, „Ich heiße Petra“ ergibt „Petra also. Dann erzähl mal, was dich hergebracht hat.“
- **Noch alt, nicht angefasst:** Der Empfang am Tresen sagt weiterhin „Ah. Da bist du ja. Ich bin Elsbeth Unknown, 80 … Hinter den Türen liegt kein Märchen, sondern dein eigenes Leben, nur anders abgebogen …“. Dadurch stellt sich Elsbeth zweimal vor (am Tresen und im Gespräch). Für den Tresen gibt es keinen freigegebenen neuen Wortlaut (DECISION GAP).
- Rückfall: `halle-7k3q/index-rueckfall-2026-10-23.html` enthält noch die alte Begrüßung.

## Nachtrag 23.10. – Petras Vorgabe zu „Hilfe“ (Spielregeln)
Petra (Chat, 23.10.): **„Bei Hilfe soll Elsbeth wieder erscheinen, die weiterhilft.“**
Damit ist die Lücke „Hilfe verlangen“ fachlich beantwortet: Wer im Erlebnis um Hilfe bittet, bekommt Elsbeth zurück, und sie hilft weiter. Das passt zur Arbeitsteilung vom 20.10. (Elsbeth empfängt, das Erlebnis ist ein eigener Raum). Noch offen für Phase 3: woran „Hilfe“ erkannt wird (Wort, Knopf oder beides) und was Elsbeth dann konkret sagt (Wortlaut ChatGPT und Petra). Nichts gebaut.
