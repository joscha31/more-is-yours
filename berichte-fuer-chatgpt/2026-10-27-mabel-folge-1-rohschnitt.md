# Bericht für ChatGPT: Folge 1, erster Rohschnitt (27.10.2026)

Kopier-Fassung. Status: PETRA REVIEW, nur zur internen Prüfung, keine Veröffentlichungsfreigabe.
Quelle: Studio-Aufnahme `2026-10-27-15-06-48` (Fassung B, `gpt-live-1`, Nuri). Das Original wurde nur gelesen und ist unverändert schreibgeschützt.
Claude Code kann den Ton nicht wie ein Mensch anhören. Geschnitten wurde nur anhand von Pegelmessungen der beiden getrennten Spuren. Die Abschrift diente zur Orientierung.

## Die beiden Fassungen (lokal, nicht im Repo)
Ordner `~/Desktop/Mabel-Aufnahmen/Folge-1-Schnitt/`, je als .m4a (zum Anhören) und .wav (24 Bit):
- **A · `Folge-1-Rohschnitt-A-vollstaendig`**: 19:44 Min. Intro v9 plus das ganze Gespräch, ohne Kürzung.
- **B · `Folge-1-Rohschnitt-B-behutsam-geschnitten`**: 19:29 Min. Wie A, nur 26 lange Pausen gekürzt (15 Sekunden kürzer).
Das Skript liegt daneben (`schnitt-skript.py`), damit sich der Schnitt jederzeit nachbauen lässt.

## Was in beiden Fassungen gleich ist
- **Intro:** `outputs/world-of-the-unknown/podcast-intro/Intro-Folge-C3-v9.wav` (Petras Wahl vom 26.10., Musik C3-lang-3). Bitgenau geprüft: unverändert übernommen. Petras erster Satz „Und heute in unserer allerersten Folge …“ setzt 0,4 s nach dem Ausklingen der Intro-Musik ein. Es gibt keine zusätzliche Musik und keinen Effekt.
- **Stimmklang:** dieselbe sanfte Stimmkette wie im Intro v9, damit Intro und Gespräch gleich klingen. Kein zusätzliches Entrauschen.
- **Lautstärke:** Petra und Mabel auf gleiche Lautheit gebracht (Petra +7,0 dB, Mabel +8,6 dB). Das Gespräch ist wie das Intro auf −16 LUFS eingestellt. Ein Begrenzer fängt Spitzen ab, höchster Pegel −1 dBFS.
- **Reparatur:** Petras Spur hatte 19 winzige übersteuerte Stellen (55 einzelne Messpunkte, z. B. beim Lachen). Diese Stellen wurden geglättet.
- **Anfang und Ende:** Das Gespräch beginnt 0,3 s vor Petras erstem Wort und endet 0,8 s nach Mabels „Tschüss“. Danach kam nur noch ein Klick beim Beenden.

## Was in B gekürzt wurde (und nur das)
Gekürzt wurden nur Pausen, in denen beide Spuren mindestens 1,0 s still sind (unter −60 dB). Jede dieser Pausen ist jetzt 0,8 s lang. Wörter, Lachen, Überlappungen und Zwischenrufe wurden nicht angefasst. Die Schnittkanten werden mit 30 ms weich überblendet, und das liegt immer in der Stille.

Die 26 Stellen (Zeit im Original → Zeit in B, vorher → nachher):
00:19 → 01:05 (1,5 s) · 00:49 → 01:34 (1,6 s) · 00:54 → 01:38 (1,1 s) · 01:28 → 02:13 (1,1 s) · 01:31 → 02:15 (1,3 s) · 02:17 → 03:01 (1,6 s) · 03:33 → 04:16 (1,1 s) · 03:36 → 04:18 (1,5 s) · 04:41 → 05:22 (1,9 s) · 05:27 → 06:07 (1,1 s) · 05:36 → 06:16 (1,4 s) · 05:38 → 06:18 (1,1 s) · 08:27 → 09:06 (1,0 s) · 09:20 → 09:59 (1,5 s) · 10:11 → 10:49 (1,3 s) · 10:27 → 11:05 (1,7 s) · 12:25 → 13:02 (1,0 s) · 14:09 → 14:45 (1,0 s) · 14:36 → 15:13 (1,8 s) · 15:31 → 16:06 (1,3 s) · 16:05 → 16:40 (1,7 s) · 17:51 → 18:25 (1,6 s) · 18:20 → 18:54 (1,2 s) · 18:22 → 18:55 (1,4 s) · 18:33 → 19:05 (1,1 s) · 18:55 → 19:27 (1,6 s). Die meisten davon sind Mabels Denkpausen, bevor sie antwortet.

## Was bewusst NICHT geschnitten wurde
- **Füllwörter („äh“, „ähm“):** Alle sind noch drin. Die Zeitangaben der Abschrift sind dafür zu grob (Raster 0,2 s) und verschieben sich gegen den Ton bis zum Ende um rund 17 Sekunden. Ein Wort einzeln herauszunehmen hätte deshalb Silben beschädigen können. Wenn Petra das möchte, wäre der nächste Schritt eine Liste einzelner Stellen, die sie selbst vorhört und freigibt.
- Lachen, Zwischenrufe („Mhm“, „Ja“), gleichzeitiges Sprechen, kleine Versprecher.
- Inhalt: nichts entfernt, nichts umgestellt, nichts neu erzeugt. Erhalten sind Mabels eigene Frage, ihre Einwände, die Diskussion über Scheitern als Teil des Spiels, Petras Erklärungen zu More is Yours, Elsbeth und der Abschluss.

## Stellen zum genauen Hinhören (Zeit in A / in B)
1. **01:06 / 01:06:** Mabel beginnt mit „Mabel. Ähm, ja, hi, ich bin Mabel.“ Den Namen sagt sie doppelt. Bleibt das, oder soll das erste „Mabel. Ähm“ heraus?
2. **06:51 / 06:44:** In Mabels Spur fehlen hier 24 ms Ton mitten im Satz. Vermutlich ist das nicht hörbar, aber bitte darauf achten, ob es stockt.
3. **etwa 14:00 / 13:52:** Mabels persönliche Frage („Wie ist es bei dir, wenn es wirklich persönlich wird?“) und Petras Antwort, dass das für die erste Folge zu tief geht. Inhaltlich in Ordnung, Petra entscheidet, ob es drinbleibt.
4. **19:07 / 18:54:** Kurz vor der Verabschiedung reden beide durcheinander (in der Abschrift „Dann ja, und mehr“ / „Stimmts“). Möglicherweise ein kleiner technischer Stocker. Belassen.
5. **19:20 / 19:06:** Mabels Verabschiedung mit mehreren „äh“, die Pointe fehlt. Belassen.
6. **Allgemein:** Klingt Mabel im Gespräch so wie im Intro? Beide haben dieselbe Klangkette, aber das kann nur Petras Ohr beurteilen.

## Technische Auffälligkeiten
- Keine Übersteuerung in den fertigen Dateien. In Mabels Spur gibt es keine längeren Aussetzer.
- Netz während der Aufnahme: 91 verlorene Pakete von 53.668. Bei 4,5 % der Mabel-Samples wurde Ton verdeckt ergänzt (das macht der Browser bei Netzschwankungen). In der Pegelmessung zeigt sich das nirgends als Lücke.
- Die Zeiten in `…_abschrift.txt` laufen gegen den Ton nach. Für den Schnitt gelten die Zeiten aus diesem Bericht.

## Was vor einer Veröffentlichung noch offen ist (nur Petra)
- Welche Fassung klingt besser, A oder B? Oder sind die Pausen in B noch zu lang?
- Sollen ausgewählte Füllwörter heraus? Wenn ja, wählt Petra sie einzeln aus.
- Die Stellen 1 bis 5 oben.
- Recht vor der Veröffentlichung (Dr. Falk): Nutzungsbedingungen für die Lyria-Musik im Intro, Hinweis „Mabel ist eine KI-Stimme“, Formulierungen im Intro.
- Wo und wie veröffentlicht wird: noch nicht besprochen und nicht freigegeben.

Unverändert: Fassung B als Arbeitsfassung (keine Mabel 0.7), GPT-Live-1, Nuri, Elsbeth, More is Yours. Keine neue Aufnahme, kein kostenpflichtiger Dienst, keine Veröffentlichung.
