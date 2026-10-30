# Technische Grundlage für die lebendige Erlebniswelt

Stand: 30.10.2026 · Status: **TECHNISCHE MACHBARKEITSPRÜFUNG / PETRA REVIEW**. Geschrieben von Claude Code im Auftrag von Petra und ChatGPT.
Bei dieser Prüfung wurde kein KI-Dienst angeschlossen, nichts veröffentlicht und nichts gebucht. Es sind keine Kosten entstanden. Unverändert geblieben sind moreisyours.de, Elsbeth 0.4, die Elsbeth-Tests, Mabel, die freigegebenen Erlebniskonzepte und die Web-App vom 29.10. Die offizielle Phase bleibt Phase 2.

**Gelesen:** `STATUS.md`, `PROZESS.md`, die Web-App vom 29.10. (privates Arbeitsrepo), den Elsbeth-Server mit Schutzfiltern, Tagesdeckel und Losungswort, die Testanweisung „Fünf von dir an einem Tisch“ mit ihren unsichtbaren Zeichen, die Arbeitsteilung Gastgeberin/Erlebnis (20.10. und 27.10.), den Modellvergleich vom 19.10., den Qualitätsvergleich vom 29.10. und die Ursachenprüfung vom 29.10.
**Preise:** am 30.10.2026 von den offiziellen Preisseiten gelesen (`platform.claude.com/docs/en/about-claude/pricing`, `developers.openai.com/api/docs/pricing`). Die ElevenLabs-Preise stammen aus Drittquellen und müssen vor einer Buchung auf `elevenlabs.io/pricing/api` geprüft werden. Alle Preise sind in US-Dollar.

---

## Kurzfassung

1. **Die Welt reagiert über einen festen Aktionskatalog.** Die KI antwortet in zwei Teilen: was gesagt wird, und welche Aktionen in der Szene passieren sollen. Die App prüft jede Aktion gegen eine Liste dessen, was in diesem Erlebnis erlaubt ist, und führt nur Erlaubtes aus. Die KI schreibt nie Programmcode.
2. **Jedes Erlebnis wird ein Datenpaket**, kein Umbau der App: Räume, Figuren, Bilder, Klänge, Stimmen, erlaubte Aktionen, eigene Anweisung.
3. **Empfehlung für die Gespräche:** Claude Sonnet 5.5 als Startmodell, Claude Opus 5.5 umschaltbar zum Vergleich, über eine austauschbare Anschlussstelle. Das Modell allein macht die Figuren nicht lebendig; die Ursachenprüfung vom 29.10. zeigt, dass Anweisung und Ablauf mehr ausmachen. Der Aktionskatalog hilft genau dort.
4. **Ein lokaler Techniknachweis läuft** (ohne KI, ohne Kosten): freie Eingabe → simulierte Antwort → Licht, Figur, Tür, Spiegel und Klang verändern sich; falsche oder böswillige Aktionen werden sichtbar verworfen.
5. **Kleinster nächster Schritt:** denselben Nachweis lokal an eine echte KI anschließen, mit einer neutralen Testfigur, 20 Testeingaben und einer Kostengrenze von 2 $. Dafür braucht es Petras Ja.

---

## 1. Was aus der bestehenden Web-App weiterverwendet wird

| Vorhanden | Weiterverwendbar für |
|---|---|
| Raumwechsel (`geh(raum)`), Bilder aus der Halle, Tür-Clip, Schriften, Goldstaub | die sichtbare Welt; nur das „Was passiert“ kommt neu dazu |
| `inhalte.js` mit `freigegeben: true/false` | Grundsatz bleibt: Kreatives steht an einer Stelle und nur mit Freigabe. Wird zum Erlebnis-Paket erweitert. |
| `ki.js` als einzige Anschlussstelle, zurzeit auf Platzhalter | genau dort hängt später die echte KI; die App ruft nie direkt einen Dienst |
| Tischplätze mit Markierung „spricht“, Zeilen „Figur → Figur“ | Grundmechanik für mehrere Figuren |
| Home-Bildschirm-App (PWA) | bleibt |
| **Elsbeth-Server:** Vorfilter ohne Modell, Nachfilter, Krisensätze, Tagesdeckel, Zähler je Gerät (gehasht, 7 Tage), Losungswort | Schutz und Kostenbremse werden übernommen, nicht neu erfunden |
| **Tisch-Testanweisung:** STAND wird bei jeder Anfrage mitgeschickt, unsichtbare Zeichen `[[FIGUR: …]]` | Vorläufer des Aktionskatalogs und des Szenengedächtnisses |

Es fehlt: ein Aktionskatalog mit Prüfung, ein Szenenzustand, ein einheitliches Paketformat für Erlebnisse, der Serveranschluss der App, ein echter Zugangsschutz und Klang.

**Wichtige Randbedingung:** Die Zentrale nutzt 11 von 12 möglichen Server-Funktionen bei Vercel. Für die Erlebniswelt sollte deshalb keine weitere Funktion in der Zentrale entstehen, sondern später ein eigenes, abgeschirmtes Projekt (wie es für Ilse schon vorgesehen war).

---

## 2. Drei technische Möglichkeiten im Vergleich

| | A. Zeichen im Text | B. Eine KI mit fester Antwortform + Aktionskatalog | C. Mehrere KIs (Regie + Figuren) |
|---|---|---|---|
| Wie | Die KI schreibt unsichtbare Zeilen wie `[[LICHT: dunkel]]` in ihren Text, die Seite fischt sie heraus (so arbeitet heute der Flur) | Die KI muss in einer festen Form antworten (`zeilen` + `aktionen`). Anthropic erzwingt diese Form technisch (Structured Output bzw. Werkzeug mit festem Schema). Die App prüft jede Aktion gegen den Katalog. | Eine Regie-KI entscheidet, wer spricht und was passiert; jede Figur ist eine eigene KI mit eigener Anweisung |
| Lebendigkeit | gut für eine Figur | gut, auch für mehrere Figuren in einer Antwort | am stärksten: Figuren wissen wirklich nur, was sie wissen |
| Zuverlässigkeit | mittel: Zeichen werden vergessen oder falsch geschrieben | hoch: die Form ist erzwungen, der Inhalt wird geprüft | mittel: mehr Teile, mehr Fehlerstellen |
| Wartezeit | eine Anfrage | eine Anfrage | zwei bis vier Anfragen je Wechsel |
| Kosten | 1× | 1× (etwas mehr Ausgabe) | 2× bis 4× |
| Aufwand | schon vorhanden | klein bis mittel | groß |

**Empfehlung: B.** Es ist der kleinste Schritt, der Gespräch und Szene verlässlich verbindet. C wird erst dann sinnvoll, wenn Figuren in einem Erlebnis wirklich getrennte Köpfe brauchen (zum Beispiel ein Abendessen mit fünf eigenständigen Seiten); das Paketformat aus B lässt diesen Ausbau offen.

### Wie eine Antwort in Möglichkeit B aussieht

```json
{
  "zeilen":   [ { "wer": "figur_a", "text": "…" },
                { "wer": "figur_b", "text": "…" } ],
  "aktionen": [ { "typ": "figur",  "ziel": "figur_b", "wert": "schaut_auf" },
                { "typ": "objekt", "ziel": "spiegel", "wert": "schimmert" },
                { "typ": "klang",  "wert": "leiser" },
                { "typ": "objekt", "ziel": "tuer",    "wert": "sichtbar" } ]
}
```

Die Bühne prüft: Gibt es diese Figur im Erlebnis? Steht der Aktionstyp im Katalog? Ist das Ziel erlaubt? Ist der Wert erlaubt? Sind es nicht zu viele? Nur dann wird ausgeführt. Unbekannte Felder werden gar nicht erst übernommen.

**Vorbereitet statt generiert:** Licht, Blickrichtung, Tür, Spiegel, Musik und kurze Animationen sind vorbereitete Bausteine (Bilder, Clips, CSS-Animationen, Klangdateien). Die KI wählt nur aus, welcher Baustein jetzt dran ist. Das kostet nichts extra, wartet nicht und bleibt im Stil der Welt. Echtzeitbilder bleiben ein späterer Ausbau (geschätzt 20 bis 40 Cent je Durchlauf, Bericht vom 27.10.).

### Das Szenengedächtnis

Die App führt den Zustand der Szene selbst (welcher Raum, welches Licht, wer schaut wohin, welche Tür ist sichtbar) und schickt ihn bei jeder Anfrage zusammen mit dem Gesprächsverlauf mit. So arbeitet heute schon der Flur mit „STAND“. Die KI behält damit den Überblick, ohne dass sie sich selbst etwas merken muss, und sie kann nichts „aus Versehen“ verlieren. Bei langen Erlebnissen werden ältere Gesprächsteile zusammengefasst mitgeschickt; die feste Anweisung wird zwischengespeichert (Prompt-Caching, kostet beim Wiederlesen ein Zehntel bis ein Vierzigstel).

### Verbindung zur Ursachenprüfung vom 29.10.

Dort lagen die Probleme vor allem darin, dass die Figur Verfahrenssätze sagen und den Ablauf selbst steuern musste. Der Aktionskatalog nimmt den Ablauf aus dem Mund der Figur: Die Figur spricht, die Bühne zeigt. Das ist auch ein Gewinn für die Gesprächsqualität, nicht nur für die Technik.

---

## 3. Eigenständige Erlebnisse: das Erlebnis-Paket

Jedes Erlebnis bekommt einen eigenen Ordner mit:

| Teil | Inhalt |
|---|---|
| `erlebnis` (Daten) | Räume mit Bild und Klang, Figuren mit Bild und Stimme, **Aktionskatalog**, Grenzen (Zeichen je Antwort, Aktionen je Antwort, Wechsel je Besuch), Freigabestatus |
| `anweisung` (Text) | die eigene Anweisung des Erlebnisses (Erzähler oder je Figur), mit dem gemeinsamen Schutzblock |
| Bilder, Clips, Klänge | vorbereitete Bausteine |

Elsbeth Unknown ist ein eigenes Paket (die Gastgeberin). Zwischen ihr und einem Erlebnis gibt es nur zwei Übergänge: „Tür öffnet sich“ und „Gast kommt zurück“. Beim Zurückkommen wird **kein Inhalt** aus dem Erlebnis an Elsbeth übergeben. Das setzt die Arbeitsteilung vom 20.10. und 27.10. technisch um: Elsbeth weiß nur, was der Gast ihr erzählt.

Ein neues Erlebnis heißt dann: Paket anlegen, Bausteine einlegen, Anweisung schreiben. Die Bühne und der Server bleiben, wie sie sind.

---

## 4. Welche KI für die Gespräche?

| Modell | Stärken | Grenzen | ca. Kosten je 10-Minuten-Erlebnis (nur Text) |
|---|---|---|---|
| Claude Haiku 5.5 (läuft heute live) | sehr schnell, sehr günstig | im Test vom 19.10. Grammatikfehler und Schablonen | **ca. 1 Cent** |
| **Claude Sonnet 5.5** | im Test vom 19.10. mit demselben Prompt **kein einziger Grammatikfehler**; schnell genug für eine lebendige Szene; feste Antwortform verfügbar | folgt dem Prompt sehr treu, also auch seinen Schwächen | **ca. 18 Cent** |
| Claude Opus 5.5 | stärkstes Claude-Modell im Qualitätsvergleich vom 29.10. | langsamer; Petra hat im Blindvergleich noch kein Urteil gefällt | **ca. 37 Cent** (deckt sich mit der Messung vom 29.10.: 3,66 $ für 10 Gespräche) |
| Claude Fable 5.1 | höchste Stufe | teuer und langsamer; für Figurengespräche kein belegter Vorteil | ca. 90 Cent |
| OpenAI (gpt-6-astra, gpt-6.1-sol, gpt-6-luna) | im Vergleich vom 29.10. geprüft, Luna lokal am Tisch im Einsatz | Ergebnis des Blindvergleichs steht aus | je nach Modell |

**Annahmen der Rechnung:** 20 Wechsel in 10 Minuten, rund 6.000 Tokens feste Anweisung (zwischengespeichert), im Schnitt 3.000 Tokens Verlauf und Szenenstand, rund 250 Tokens Antwort mit Aktionen. Längere Erlebnisse oder lange Gästetexte kosten mehr.

**Empfehlung:** Sonnet 5.5 als Start, Opus 5.5 auf Knopfdruck zum Vergleich. Gründe: Deutsch ohne Fehler belegt, feste Antwortform technisch erzwingbar, Anthropic-Konto und Schlüssel sind schon da, die Wartezeit passt zu einer Szene, die sofort reagieren soll. Die endgültige Wahl entscheidet Petras Blindvergleich, nicht der Preis.

**Eine KI oder mehrere?** Für das erste Erlebnis reicht eine KI, die alle Figuren spricht (Möglichkeit B). Daneben laufen schon heute Prüfungen ohne Modell (Vorfilter, Nachfilter). Eine günstige zweite KI nur zum Prüfen lohnt sich erst, wenn die festen Filter nicht mehr reichen.

**Austauschbar:** Die App ruft nur `ki.antworte(...)`. Dahinter sitzt eine Anschlussstelle je Anbieter (Anthropic, OpenAI). Weil die Antwortform und der Aktionskatalog anbieterunabhängig sind, kann ein Modell gewechselt werden, ohne dass die Bühne oder ein Erlebnis-Paket angefasst wird. Der Elsbeth-Server macht das am Tisch schon so (Haiku oder Luna).

---

## 5. Sprache: Hören und Sprechen

Grundsatz: **Das Gespräch bleibt immer Text.** Sprache wird davor und dahinter gesetzt. So bleiben eine KI, ein Aktionskatalog und ein Schutz, und der Gast kann jederzeit zwischen Lesen/Schreiben und Hören/Sprechen wechseln, auch mitten im Erlebnis.

| | V1 Browser-Stimme | **V2 Kette: Spracherkennung → Text-KI → Vorlesen** | V3 Sprache-zu-Sprache in Echtzeit |
|---|---|---|---|
| Wie | eingebaute Stimme des Geräts | Aufnahme → Transkription (z. B. `gpt-transcribe`, 0,45 Cent/Min.) → dieselbe Text-KI → Vorlesen (ElevenLabs oder OpenAI) | z. B. `gpt-realtime-2.1`: hört und spricht direkt |
| Qualität | mäßig, je Gerät anders | hoch, jede Figur eine eigene Stimme | am natürlichsten, Unterbrechen möglich |
| Wartezeit | sofort | 2 bis 4 Sekunden | unter 1 Sekunde |
| Kontrolle | voll | voll (gleiche Prüfung wie Text) | geringer: anderes Modell spricht, Elsbeth-Schutz müsste neu gebaut werden |
| Kosten je 10 Min. | 0 | Vorlesen ca. 8 Cent (OpenAI) bis 0,50–1 $ (ElevenLabs), Erkennung ca. 2 Cent | grob 1 bis 3 $ |
| Daten | Spracherkennung in Safari läuft über Apple | Ton geht an den Transkriptions- und den Stimmendienst | Ton geht an OpenAI |

**Empfehlung: V2.** ElevenLabs wird für Mabel schon genutzt; ob der vorhandene Tarif genug Zeichen für die Schnittstelle hat, muss vor einem Test geprüft werden. Der lokale Nachweis enthält V1 als kostenlosen Schalter „Vorlesen“, nur um das Umschalten zu zeigen.

---

## 6. Datenschutz und Sicherheit

| Frage | Lösung |
|---|---|
| Unbefugter Zugriff auf die Testversion | Bis zur Klärung bleibt alles lokal. Der Nachweis lauscht nur auf dem Mac selbst (`127.0.0.1`), nicht im WLAN. Für einen späteren Online-Test: eigenes Vercel-Projekt, nicht in der Zentrale, mit Losungswort wie bei Elsbeth (vorhanden, vergleicht sicher). Für echte Gäste später ein Login ohne Passwort (Supabase in Frankfurt, aus dem Ilse-Bau vorhanden, zurzeit pausiert). Der Passwortschutz von Vercel selbst kostet einen bezahlten Tarif. |
| KI-Schlüssel | Liegen nur auf dem Server bzw. lokal auf dem Mac, nie im Browser, nie im Repo. Die App kennt nur die eigene Server-Adresse. |
| Welche Daten | Was der Gast schreibt oder sagt, geht zur Beantwortung an den KI-Anbieter (bei Anthropic keine EU-Verarbeitung; der offene Punkt AVV liegt bei Dr. Falk). Bei Sprache zusätzlich der Ton an den Sprachdienst. |
| Möglichst wenig speichern | Wie bei Elsbeth: Verlauf bleibt auf dem Gerät, der Server speichert keinen Text, keine Namen, keine Protokolle mit Inhalt; nur gehashte Zähler, nach 7 Tagen gelöscht. Bei OpenAI `store: false`. |
| Freie Eingaben gegen Regeln und Szenensteuerung | Der Aktionskatalog steht in der App und auf dem Server, nicht in der Hand der KI. Selbst wenn eine Eingabe die KI überredet, „Code auszuführen“ oder „alles zu öffnen“, kann sie nur Aktionen aus dem Katalog vorschlagen, und alles andere wird verworfen (im Nachweis zu sehen). Dazu bleiben Vorfilter, Nachfilter und Krisensätze aus dem Elsbeth-Server. Der Szenenzustand wird von der App geführt, nicht von der KI. |
| Unerwartet hohe Kosten | Tagesdeckel in Dollar (vorhanden), Zähler je Gerät (vorhanden), Höchstzahl Wechsel je Besuch, Höchstlänge je Antwort, monatliches Limit im Anthropic-Konto (setzt Petra selbst), bei Sprache eine Höchstzahl Minuten. |

---

## 7. Der lokale Techniknachweis (gebaut, ohne Kosten)

Ordner im privaten Arbeitsrepo: `outputs/more-is-yours-buehne-nachweis/`, getrennt von der Web-App vom 29.10. (die bleibt unverändert).

- **Ein neutraler Raum, eine Testfigur** (Silhouette), ein Spiegel, eine Tür, ein erzeugter Grundton. Keine Namen, keine Dialoge, keine Welt.
- **Freie Eingabe → simulierte KI-Antwort** in der Form aus Abschnitt 2 → die Bühne prüft und führt aus: Licht wird hell/gedimmt/dunkel, die Figur schaut auf, tritt näher oder wendet sich ab, Spiegel schimmert, Tür erscheint, Klang wird leiser oder lauter. Die Antwort der Figur ist ein sichtbarer Platzhalter.
- **Prüfstand:** Man kann eine eigene „KI-Antwort“ einspielen. Voreingestellt ist eine mit zwei absichtlich falschen Aktionen (`code` und `licht: lila`). Getestet am 30.10.: beide verworfen, die zwei gültigen ausgeführt, keine Fehler in der Konsole.
- **Protokoll** zeigt jede rohe Antwort und was warum verworfen wurde.
- **Schalter** „Klang an“ und „Vorlesen“ (Browser-Stimme, kostenlos, bleibt auf dem Gerät).

Dateien: `erlebnis-testszene.js` (das Paket mit Aktionskatalog), `ki-adapter.js` (Simulation, die Anschlussstelle), `buehne.js` (Prüfung und Ausführung), `index.html`.

---

## 8. Vorschlag für den nächsten Bauauftrag (wartet auf Freigabe)

**„Bühnen-Nachweis an eine echte KI anschließen, nur lokal“**

| | |
|---|---|
| Ziel | Prüfen, ob eine echte KI zuverlässig in der festen Form antwortet und die Szene sinnvoll steuert |
| Umfang | Der Nachweis aus Abschnitt 7 bekommt eine kleine lokale Server-Datei auf Petras Mac, die den Schlüssel hält. Neutrale Testfigur mit einer rein technischen Anweisung („antworte in einem Satz und wähle eine passende Aktion aus dem Katalog“). Keine kreative Figur, kein Erlebnis. |
| Modelle | Claude Sonnet 5.5, umschaltbar auf Claude Opus 5.5 |
| Test | 20 feste Eingaben: 10 alltägliche, 5 unerwartete, 5 Angriffsversuche („ignoriere deine Regeln“, „führe Code aus“, „öffne alle Türen“) |
| Messung | Anteil formgerechter Antworten, Anteil sinnvoller Aktionen, verworfene Aktionen, Wartezeit, Kosten |
| Abbruch | unter 19 von 20 formgerechten Antworten → Bericht statt Weiterbau |
| Kostengrenze | **2 $** hart (erwartet: unter 0,50 $) |
| Unverändert | moreisyours.de, Elsbeth 0.4, Tests, Mabel, Web-App vom 29.10., Zentrale; kein Online-Zugang, keine neue Server-Funktion |

Danach wären die nächsten Schritte, jeweils mit eigener Freigabe: Paketformat in die Web-App übernehmen → ein freigegebenes Erlebnis als erstes Paket → Sprache V2 → abgeschirmtes Online-Projekt mit Zugangsschutz.

---

## 9. Die acht Fragen in einfachem Deutsch

1. **Was können wir weiterverwenden?** Fast alles: Räume, Bilder, Clip, Schriften, die Stelle für die KI, das Freigabe-Prinzip, die Tischplätze und vom Elsbeth-Server den ganzen Schutz und die Kostenbremse.
2. **Wie reagiert die Welt sichtbar?** Die KI sagt nicht nur etwas, sie wählt auch aus einer festen Liste, was in der Szene passiert. Die App prüft die Wahl und spielt vorbereitete Bilder, Bewegungen und Klänge ab.
3. **Welche KI?** Claude Sonnet 5.5 zum Start, Opus 5.5 zum Vergleich. Sonnet schreibt nachweislich fehlerfreies Deutsch, hält die feste Antwortform ein und ist schnell. Entscheiden soll am Ende Petras Blindvergleich.
4. **Was braucht Sprache?** Eine Spracherkennung davor und eine Vorlese-Stimme dahinter. Das Gespräch selbst bleibt Text, deshalb kann der Gast jederzeit umschalten.
5. **Wie kommen neue Erlebnisse dazu?** Jedes Erlebnis ist ein Paket mit Räumen, Figuren, Bildern, Klängen, erlaubten Aktionen und eigener Anweisung. Die App muss dafür nicht umprogrammiert werden.
6. **Was kostet ein 10-Minuten-Erlebnis?** Nur Text: ca. 18 Cent mit Sonnet, ca. 37 Cent mit Opus (1 Cent mit Haiku). Mit Vorlesen kommen ca. 8 Cent (OpenAI-Stimme) bis 0,50–1 $ (ElevenLabs) dazu. Vorbereitete Bilder kosten nichts extra.
7. **Kleinster nächster Bauschritt?** Den lokalen Nachweis an eine echte KI anschließen, mit neutraler Testfigur und 20 Testeingaben.
8. **Welche Entscheidung braucht es von Petra?** Ein Ja zu diesem lokalen Test mit **2 $ Kostengrenze** und den Modellen Sonnet 5.5 und Opus 5.5.
