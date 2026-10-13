# Erlebnisplattform „More is Yours" · Architekturvorschlag

**Stand:** 13.10.2026 · **Status:** FACH-LAB-VORSCHLAG / PETRA REVIEW · nichts gebaut, nichts freigegeben
**Grundlage:** Build-Brief „Magische Erlebnisplattform" (13.10.2026) · `erlebnisbibliothek/` · Entscheidungen vom 08.10. (keine wartungsintensive Spezialsoftware) und 13.10. (Realitätsbrücke, Gastgeberin)

> **Ein Name vorab:** Der Brief nennt die Gastgeberin „Ilse Unknown". Seit heute ist ausdrücklich **Elsbeth Unknown** freigegeben (`erlebnisbibliothek/2026-10-13-elsbeth-unknown-gastgeberin.md`). Dieser Vorschlag verwendet deshalb Elsbeth.

---

## In einem Satz

Die Erlebnisbibliothek bekommt ein eigenes Haus: Man betritt eine Eingangshalle, Elsbeth Unknown begrüßt einen, man wählt eine Tür, erlebt „Das Leben, das du noch nicht kennst" direkt im Haus und legt am Ende selbst in den eigenen Spind, was man mitnehmen möchte. Die Erlebnisse sind schon fertig und getestet. Neu ist nur die Bühne, auf der sie stattfinden.

## Was schon trägt

Das Herz der Plattform existiert bereits. Erlebnis 001 läuft als getesteter Startprompt (Fassung 1.1, dazu die Entwürfe 2.2 und 2.3 mit Realitätsbrücke), es hat ein Zahlenrad, eine Postkarte als Abschluss, ein Mitbringsel und die beiden Modi `▸ UNKNOWN` und `▸ REAL WORLD`. Damit ist die schwierigste Arbeit erledigt: die Dramaturgie. Die Plattform muss diese Dramaturgie nur noch sichtbar machen, statt sie in ein leeres Chatfenster zu kippen.

---

## 1 · Der technische Aufbau

Das Haus hat drei Teile: was man sieht, wer im Hintergrund erzählt, und wo man Dinge aufbewahrt.

| Teil | Was es ist | Wie es gebaut wird |
|---|---|---|
| **Die sichtbare Welt** (Frontend) | Eingangshalle, Elsbeth, die Türen, der Erlebnisraum, die Postkarte, der Spind | Einfache Webseiten (HTML, CSS und etwas JavaScript), so wie die Zentrale gebaut ist. Keine App aus dem App Store, nichts zu installieren. Funktioniert am Handy und am Computer. |
| **Die Erzählerin im Hintergrund** (KI-Anbindung) | GPT spielt das Erlebnis, aber der Mensch sieht nie ChatGPT, sondern nur das Haus | Eine einzige kleine Server-Funktion, die die Nachricht des Menschen zusammen mit dem Startprompt an GPT schickt und die Antwort Wort für Wort zurück ins Haus bringt. Der Startprompt bleibt die Datei, die Petra schon kennt. |
| **Der Spind** (Speicher) | Postkarte, Lieblingssatz, Impuls, nächster Schritt, Notizen | In MVP 1 liegt der Spind **im eigenen Gerät** (im Browser), nicht auf einem Server. Dazu kommt eine schöne Spind-Karte zum Herunterladen. Erst in Stufe 2 wandert der Spind auf einen Server, damit er auf jedem Gerät da ist. |
| **Nutzerkonten** | Wer man ist, damit Elsbeth einen wiedererkennt | In MVP 1 gibt es **kein Konto**, kein Passwort und keine E-Mail-Adresse. Elsbeth erkennt einen auf demselben Gerät wieder. In Stufe 2 bekommt jede Person einen **Spindschlüssel** (dazu unten mehr). |
| **Erweiterbarkeit** | Neue Türen, neue Erlebnisse | Jedes Erlebnis ist ein Ordner mit Startprompt und einem kleinen Steckbrief (Name, Türfarbe, Dauer, Fassung). Eine neue Tür entsteht, indem ein neuer Ordner dazukommt. Am Haus selbst muss dafür niemand etwas umbauen. |

**Wie ein Gespräch technisch abläuft:**

```
Mensch tippt im Erlebnisraum
        │
        ▼
Haus (Webseite) ── schickt Text + Verlauf ──▶ kleine Server-Funktion
                                              │  fügt den Startprompt von Erlebnis 001 hinzu
                                              ▼
                                          GPT (OpenAI)
                                              │  antwortet als Erzählerin
                                              ▼
Haus zeigt die Antwort Wort für Wort ◀────────┘
        │
        ▼
Am Ende: zweite kurze Anfrage „schlag vor, was in den Spind gehört"
        │
        ▼
Der Mensch wählt selbst aus ──▶ Spind (im eigenen Gerät)
```

**Was der Server sich merkt: nichts.** Die Funktion reicht die Nachricht weiter und vergisst sie wieder. Es gibt keine Datenbank mit Gesprächen, die gepflegt, gesichert oder geschützt werden müsste. Das hält das Haus wartungsarm und schützt die Menschen, die dort sehr Persönliches erzählen.

---

## 2 · Der empfohlene Stack für MVP 1

| Baustein | Empfehlung | Warum |
|---|---|---|
| Webseiten | HTML, CSS, JavaScript ohne großes Gerüst | So ist die ganze Zentrale gebaut. Claude Code kann es jederzeit ändern, und es veraltet nicht. |
| Zuhause im Netz | Ein **eigenes Vercel-Projekt** (nicht die Zentrale) | Die Zentrale hat nur noch 2 freie Funktionsplätze. Ein eigenes Haus bekommt eine eigene Adresse, zum Beispiel eine Unterseite von moreisyours.de. |
| Erzählerin | **OpenAI Responses API** mit einem aktuellen GPT-Modell, Antwort im Fluss | Der Brief wünscht GPT. Der Schlüssel liegt nur bei Vercel, nie im Code. |
| Kostenbremse | Tageslimit bei OpenAI + Einladungscode für Testerinnen | Damit kann keine fremde Person die Rechnung in die Höhe treiben. |
| Spind | Speicher im Browser + Download als Bild oder PDF | Kein Server, kein Konto, kein Datenschutz-Berg für den ersten Test. |
| Spind ab Stufe 2 | Supabase in Frankfurt (gibt es schon aus dem Ilse-Bau) | Ein bekannter, ruhender Baustein statt etwas Neuem. |
| Inhalte | Startprompts bleiben Markdown-Dateien im Repo | Petra und ChatGPT schreiben weiter Text. Wer Text ändert, ändert das Erlebnis. Das ist die Herausgeberinnen-Rolle. |

**Was Petra dabei tun muss: Text schreiben, auswählen und freigeben.** Sie muss nichts installieren, keine Server betreuen und keine Fehlermeldungen lesen. Technik und Pflege liegen bei Claude Code.

---

## 3 · Die User Journey (Screenflow)

| Nr. | Szene | Was passiert | Die Magie dabei |
|---|---|---|---|
| 1 | **Ankommen** | Eine dunkle Halle, nachtblau. Ein Licht geht an, dann noch eins. | Die Seite lädt nicht, sie **wacht auf**. Kein Menü, kein Logo-Balken, keine Cookie-Wand, weil nichts gespeichert wird, was eine braucht. |
| 2 | **Elsbeth begrüßt** | Elsbeth erscheint als gezeichnete Figur. Ihre Worte schreiben sich langsam, wie mit der Hand. Sie fragt nur, wie sie einen nennen darf (ein ausgedachter Name geht auch). | Sie erklärt nichts Technisches. Sie sagt so etwas wie: „Hier probiert man Leben an, bevor man sie lebt." |
| 3 | **Tür wählen** | Mehrere Türen, eine leuchtet: „Das Leben, das du noch nicht kennst". Die anderen schimmern und tragen ein Schild „öffnet bald". | Wer eine geschlossene Tür antippt, hört Elsbeth: „Dahinter wird noch gebaut." So entsteht Neugier auf das nächste Erlebnis. |
| 4 | **Die Schwelle** | Vor der Tür ein **Zahlenrad von 1 bis 12**. Man dreht es oder wählt eine Zahl, dann stellt man sich kurz vor, wie im Zug. | Das Zahlenrad aus Erlebnis 001 wird hier zum ersten Mal sichtbar und anfassbar. |
| 5 | **Das Erlebnis** | Der Raum hinter der Tür, darin das Gespräch. Oben ein kleines Schild zeigt den Modus: `▸ UNKNOWN` in Flieder oder `▸ REAL WORLD` in Mint. | Wenn der Modus wechselt, wechselt das Licht im Raum. Man **sieht**, ob man gerade in der Geschichte oder in der Wirklichkeit ist. |
| 6 | **Abschluss** | Die Postkarte aus diesem Leben fliegt herein, als echte Karte mit Briefmarke. Danach folgen der Strich, die eine Frage und der freiwillige Funke. | Die Postkarte enthält einen Satz, den der Mensch selbst gesagt hat. |
| 7 | **Der Spind** | Elsbeth öffnet einen Spind. Die KI schlägt vor, was hinein könnte, und **der Mensch entscheidet selbst**, was mitkommt und was nicht. Er kann alles umschreiben und eine eigene Notiz dazulegen. | Man packt seine Fundstücke ein, wie nach einer Reise. Die Spind-Karte gibt es zum Herunterladen. |
| 8 | **Rückkehr** | Beim nächsten Besuch erinnert sich Elsbeth: „Letztes Mal hast du eine Postkarte von Herrn Brandt mitgenommen. Hast du ein Mitbringsel für mich?" | Das Mitbringsel aus Erlebnis 001 bekommt einen Ort. Wer etwas Echtes erlebt hat, kann es erzählen, und es landet im Spind neben der Postkarte. |

```
 Ankommen ─▶ Elsbeth ─▶ Halle mit Türen ─▶ Zahlenrad ─▶ Erlebnisraum ─▶ Postkarte ─▶ Spind
    ▲                                                     ▲   │                          │
    │                                                     └───┘ UNKNOWN ⇄ REAL WORLD     │
    └──────────────────────── Rückkehr („Hast du ein Mitbringsel?") ◀────────────────────┘
```

---

## 4 · Das Datenmodell des Spinds

Das Modell hat vier Teile. Lieblingssatz, Impuls, nächster Schritt und Notiz sind keine eigenen Tabellen, sondern **Arten von Fundstücken**. Das hält es einfach, und eine neue Art (zum Beispiel ein Foto vom echten Versuch) lässt sich später ohne Umbau ergänzen.

| Teil | Bedeutung | Felder |
|---|---|---|
| **Gast** (Nutzerin) | Die Person, die das Haus besucht | `id` · `anzeigename` (frei gewählt, darf erfunden sein) · `erstellt_am` · ab Stufe 2: `spindschluessel_pruefwert` |
| **Erlebnis** | Eine Tür im Haus | `id` (z. B. `001`) · `titel` · `fassung` (z. B. `1.1`) · `tuerfarbe` · `dauer_minuten` · `status` (`offen` / `bald`) · `startprompt_datei` |
| **Besuch** | Ein einzelnes Durchspielen | `id` · `gast_id` · `erlebnis_id` · `fassung` · `datum` · `zahl` (1 bis 12) · `war_in_real_world` (ja/nein) |
| **Fundstück** | Alles, was in den Spind kommt | `id` · `besuch_id` · `art` · `text` · `von` (`ki-vorschlag` oder `selbst`) · `ehrlichkeit` (nur bei echten Angaben: ● belegt, ◐ teilweise, ○ unsicher) · `quelle_url` (nur bei echten Angaben) · `angeheftet` (ja/nein) · `erstellt_am` |

**Die Arten von Fundstücken:**

| `art` | Was es ist | Beispiel |
|---|---|---|
| `postkarte` | Die Postkarte aus diesem Leben | *Postkarte von Herrn Brandt: „Die Pfeifstelle im dritten Lied gehört jetzt dir."* |
| `lieblingssatz` | Der Satz, den man behalten will | „Vielleicht danke fürs Warten?" |
| `impuls` | Der Funke für den Alltag | „Einmal diese Woche im Chor nur zuhören." |
| `naechster_schritt` | Ein konkreter echter Schritt, gern aus `REAL WORLD` | „Bei der Volkshochschule nach dem Kurs im Frühjahr fragen." |
| `notiz` | Was man selbst dazuschreibt | frei |
| `mitbringsel` | Was man später real erlebt hat und zurückbringt | „Ich war dort. Es roch nach Kreide." |
| `fundstueck` | Alles andere, das einem wichtig war (eine Figur, ein Ort, ein Bild) | „Der Kiosk am Bahnhof von Knatterbrück" |

**So sieht ein Spind-Eintrag in MVP 1 aus** (gespeichert im Browser):

```json
{
  "gast": { "id": "g-7f3a", "anzeigename": "Gerda", "erstellt_am": "2026-10-20" },
  "besuche": [
    {
      "id": "b-01", "erlebnis_id": "001", "fassung": "2.3", "datum": "2026-10-20", "zahl": 7,
      "war_in_real_world": true,
      "fundstuecke": [
        { "art": "postkarte", "text": "Die Pfeifstelle im dritten Lied gehört jetzt dir.", "von": "ki-vorschlag", "angeheftet": true },
        { "art": "lieblingssatz", "text": "Singen ist Atmen mit Absicht.", "von": "selbst" },
        { "art": "naechster_schritt", "text": "Chorprobe im Seniorenzentrum am Donnerstag besuchen", "von": "ki-vorschlag",
          "ehrlichkeit": "◐", "quelle_url": "https://…" }
      ]
    }
  ]
}
```

**Der Spindschlüssel (Stufe 2):** Statt Konto und Passwort bekommt jede Person einen Schlüssel aus drei Wörtern und einer Zahl, zum Beispiel *Lavendel · Kompass · Möwe · 17*. Wer ihn auf einem anderen Gerät eingibt, öffnet denselben Spind. Es gibt keine E-Mail-Adresse und kein Passwort, und es passt zum Haus. Der Server speichert nur einen Prüfwert des Schlüssels, nie den Schlüssel selbst. Wer ihn verliert, verliert den Spind; das sagt Elsbeth vorher freundlich und deutlich.

---

## 5 · Drei Wege für MVP 1 und die Empfehlung

| Weg | Was es ist | Was es erzeugt | Betrieb |
|---|---|---|---|
| **A · Die Kulisse** | Halle, Elsbeth, Türen, Zahlenrad und Spind als schöne Seiten. Das Erlebnis selbst läuft weiter in ChatGPT oder Claude (Kopier-Knopf). Danach fügt man seine Postkarte in den Spind ein. | Reaktionen auf die **Welt**: Wirkt das Haus? Will man wiederkommen? | keiner, keine KI-Kosten |
| **B · Das lebendige Haus** ⭐ | Wie A, aber das Erlebnis läuft **im Haus**. GPT erzählt im Hintergrund, der Spind füllt sich aus dem Gespräch, alles bleibt im eigenen Gerät. Eine Tür, Einladungscode, kleiner Kreis. | Reaktionen auf das **ganze Erlebnis**, so wie es gemeint ist | sehr klein: eine Funktion, ein Tageslimit |
| **C · Das ganze Haus** | Wie B, dazu Spindschlüssel, Spind auf dem Server, mehrere Türen, Rückkehr auf jedem Gerät | Die fertige Plattform | Datenbank, Datenschutz-Paket, mehr Pflege |

**Empfehlung: Weg B als MVP 1.** Erst wenn die KI im Hintergrund erzählt, ist es das Erlebnis, das der Brief beschreibt; bei Weg A springt man für den wichtigsten Teil in ein fremdes Chatfenster. Weg B bleibt trotzdem so klein, dass Petra nichts betreiben muss. Weg C kommt erst, wenn die ersten Gäste zeigen, dass sie wiederkommen wollen.

### Was zuerst gebaut wird (in dieser Reihenfolge)

1. **Die Halle und Elsbeth** als stilles Bild, damit Petra die Welt sieht, bevor irgendetwas spricht. Hier entscheidet sich, ob es sich magisch anfühlt.
2. **Der Erlebnisraum** mit der Erzählerin im Hintergrund, Erlebnis 001 in der von Petra gewählten Fassung, mit dem Modus-Schild.
3. **Postkarte und Spind** im eigenen Gerät, mit Auswahl und Download.
4. **Die Rückkehr** auf demselben Gerät, mit Elsbeths Erinnerung und dem Mitbringsel.
5. **Testlauf** mit den gleichen frischen Spielerinnen wie bei Erlebnis 001, danach 3 bis 5 echte Gäste mit Einladungscode.

### Was bewusst noch nicht gebaut wird

Konten, E-Mail, Passwörter und der Spind auf dem Server bleiben draußen, ebenso mehrere offene Türen, Bezahlung, Elsbeths gesprochene Stimme, Kontaktvermittlung zu echten Menschen, ein Admin-Bereich und eine eigene App. Das ist kein Nein, sondern die Reihenfolge: Jedes dieser Teile kommt, wenn echte Gäste danach fragen.

---

## 6 · Die 5 wichtigsten offenen Punkte

| Nr. | Frage | Warum sie jetzt zählt |
|---|---|---|
| **1** | **Passt der Bau jetzt in Etappe 1, oder kommt er danach?** | Bisher gilt für die Bibliothek „Startprompts, keine App, kein Betrieb", und für den Pilot gilt bis 29.10., dass eine technische Umsetzung erst startet, wenn sie dort als sinnvoller nächster Schritt geklärt ist. Ein kleines Haus (Weg B) kann genau das echte Tun und die Reaktionen erzeugen, die Etappe 1 sucht. Das entscheidet Petra, gern mit HELGA, nicht Claude. *(DECISION GAP)* |
| **2** | **Welche Fassung von Erlebnis 001 zieht ein?** | 1.1 ist geteilt und getestet, 2.2 hat die Realitätsbrücke, 2.3 hat Probe-Moment und Mitbringsel, ist aber ungetestet. Für Spind und Rückkehr passt 2.3 am besten. |
| **3** | **Darf `REAL WORLD` im Haus schon live im Netz suchen?** | Ohne Suche bleibt die Realitätsbrücke ein Gespräch; mit Suche wird sie echt, kostet aber etwas mehr und braucht die Ehrlichkeitszeichen ● ◐ ○ bei jeder Angabe. |
| **4** | **Wie sieht und klingt Elsbeth?** | Gezeichnet oder gemalt, eher alte Bibliothekarin oder eher Zirkusdirektorin, wie lang ihre Sätze sind. Sie ist das Gesicht des Hauses. Ihre Persönlichkeit ist noch offen *(CONTENT GAP)*. |
| **5** | **Wer darf hinein, und wer trägt die KI-Kosten?** | Vorschlag: kostenlos, nur mit Einladungscode, ein festes Tageslimit. Vor dem ersten fremden Gast prüft Dr. Falk gebündelt: Was Gäste erzählen, geht an OpenAI (Vertrag zur Auftragsverarbeitung, Serverstandort, mögliche Gesundheitsangaben), dazu Datenschutzhinweis, Abgrenzung zu Coaching und Heilkunde, und ob „Elsbeth Unknown" als Name frei ist. Die echten Kosten pro Besuch rechnet Theo vor dem Bau mit den aktuellen Preisen aus. |

---

*Drei-Brillen-Protokoll (Grundregel 9), am fertigen Stand:* 👓 T1 keine Streit-Sätze · T2 Nutzen für Gäste vor unserem Wunsch (Spind = selbst wählen) · T3 Petras Rolle so benannt, wie sie sie selbst beschreibt („Herausgeberin") · 📣 M1 Überschrift und erster Satz ohne Vorwissen verständlich; Marken-Bilder (Spind, Mitbringsel) werden beim ersten Auftreten erklärt · M2 der Kernsatz steht oben · M3 eine Handlung: Punkt 1 der offenen Fragen entscheiden · 💶 V1 der Spind gehört dem Gast und lässt sich herunterladen · V2 „Stopp" und „nichts in den Spind legen" sind jederzeit möglich · V3 keine erfundenen Zahlen, Kosten werden vor dem Bau echt gerechnet.
