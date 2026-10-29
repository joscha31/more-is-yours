# Web-App-Appetizer – begrenzte technische Erprobung (29.10.2026)

Status: **INTERNE TESTVERSION / PETRA REVIEW** · Auftrag von Petra (29.10.2026), umgesetzt von Claude Code.
Keine Selbstfreigabe. **Phase 2 bleibt die offizielle Hauptphase**, der nächste Schritt in STATUS.md ist unverändert. Diese App ist eine begrenzte technische Erprobung daneben.

## Was gebaut wurde
Eine kleine Web-App (PWA) im Stil der Halle, nur auf Petras Mac, Ordner `outputs/more-is-yours-app/` im privaten Arbeitsrepo (nicht in diesem öffentlichen Repo, nicht bei Vercel).

Ablauf: Ankommen in der Halle → Elsbeth empfängt (frei schreiben möglich) → eine Tür „Fünf von dir an einem Tisch“ → vorhandener Tür-Clip → Abendessen mit fünf verschleierten Plätzen (frei schreiben; eine oder zwei Figuren antworten, manchmal spricht eine Figur eine andere an; der sprechende Platz leuchtet) → „Vom Tisch aufstehen“ → Elsbeth nimmt den Gast wieder in Empfang → zurück in die Halle.

Geprüft im Browser in Handygröße (375 × 812): ganzer Rundgang, keine Fehler in der Konsole, Symbol und Offline-Hülle laden, Aufruf über die WLAN-Adresse des Macs antwortet. **Auf Petras echtem iPhone ist sie noch nicht getestet.**

## Wie die kreativen Inhalte abgegrenzt sind
- Alle kreativen Texte stehen in einer einzigen Datei (`inhalte.js`). Ein Text wird dort nur mit `freigegeben: true` und Quelle eingetragen. Alles andere erscheint in der App mit gestricheltem Goldrahmen und dem Wort **PLATZHALTER**.
- Platzhalter sind: Elsbeths Empfang, ihre Antworten, das Öffnen der Tür, die Rückkehr, die Eröffnung des Abendessens, alle fünf Figuren (keine Namen, keine Typen, keine Bilder), ihre Antworten, ihre Tischgespräche, der Ausklang, der Übergangs-Clip (geliehen: Nachtzug-Tür).
- Die Platzhalter-Figuren zeigen nur die Mechanik (wer spricht, wer wen anspricht), keine Persönlichkeit. Es wurde kein Abendessen erfunden, und Fassung 2 sowie der Tisch-Prototyp in der Halle wurden nicht übernommen.
- Verwendet sind nur Vorhandenes: der Name der Tür, die Bilder `halle.jpg`, `tueren.jpg`, `elsbeth.jpg` und der Clip „Tür öffnet sich“ aus der Halle, Farben und Schriften der Halle (Kopien, Originale unverändert).
- **Vorschlag für Petra:** das App-Symbol (Elsbeths Gesicht aus dem Masterbild, rund, mit Goldrand).

## Schritt 1 – Bestand
| Vorhanden und genutzt | Vorhanden, bewusst nicht angeschlossen | Fehlt |
|---|---|---|
| Halle-Gestaltung, Bilder, Clip, Schriften · PWA-Muster aus Petras eigener App „Petra schafft's“ (Manifest, Offline-Hülle, Symbole) | Elsbeth-Server `api/elsbeth.js` (Haiku, Tagesdeckel, Schutzfilter, Losungswort, Tisch-Modus) | Freigegebene Texte für Elsbeth und das Abendessen · ein Bild fürs Speisezimmer und Porträts der Figuren · ein eigener Übergangs-Clip · eine geschützte Online-Adresse |

## Schutz der bestehenden Plattform
- moreisyours.de, die Halle, die Zentrale, `api/elsbeth.js`, Elsbeth 0.4 und alle Entwürfe sind unverändert. Die App liegt außerhalb des Vercel-Ordners und geht nie automatisch online.
- Kein KI-Aufruf, keine neuen Kosten, kein Konto, keine Speicherung, kein Versand. Mabel und der Podcast sind nicht berührt.

## Zugang heute: nur lokal
Erreichbar am Mac und, solange das Startfenster offen ist, für Geräte im selben WLAN. Es gibt keine Internet-Adresse. Wer im selben WLAN ist, könnte sie in dieser Zeit öffnen. Das ist kein Passwortschutz.

**Fund nebenbei (nichts geändert):** Die bestehende Halle (`/halle-7k3q/`) ist öffentlich erreichbar und nur durch die unbekannte Adresse verborgen. Die echte Elsbeth dort schützt das Losungswort, die Seite selbst nicht.

## Was für die volle Funktion fehlt (jeweils nur mit Petras Ja)
1. **Kreativ:** die freigegebenen Texte und Figuren (Petra mit ChatGPT). Claude Code trägt sie nur in `inhalte.js` ein.
2. **Elsbeth und die Figuren sprechen lassen:** Anschluss an den vorhandenen Elsbeth-Server. Dafür muss die App unter derselben Adresse wie der Server liegen, also in der Zentrale – das wäre eine Veröffentlichung und braucht Petras Ja und einen echten Zugangsschutz.
3. **Echter Zugangsschutz online:** noch nicht eingerichtet. Möglichkeiten: Losungswort-Seite vor der App (kostenlos, prüft der vorhandene Server, aber die Bilder blieben erreichbar) oder eine Anmeldung beim Hoster (Kosten und Umfang vorher prüfen). Eine unbekannte Adresse allein reicht nicht.

## Kosten
- Heute: **0 €.**
- Mit der vorhandenen Haiku-Elsbeth am Tisch: gemessen **1,4 bis 1,7 Cent je Erlebnis** (Bericht OpenAI-Prüfung 29.10., der Zähler rechnet rund 16 % zu wenig). Der Tagesdeckel von 0,70 $ greift weiter. Kein neuer Dienst.
- Ein stärkeres Modell (siehe Qualitätsvergleich 29.10.) wäre teurer und ist eine eigene Entscheidung.

## Die eine kreative Entscheidung als Nächstes (Petra mit ChatGPT)
Wie das Abendessen beginnt: Wer sitzt da, wenn der Gast hereinkommt, und was ist der erste Satz am Tisch? Daraus ergeben sich die Eröffnung und die erste Figur, und genau diese Stelle ist heute in der App leer.
