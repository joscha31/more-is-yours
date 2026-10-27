# Fundstücke, Konten, E-Mail-Liste und Besucherzählung — Machbarkeitsprüfung (27.10.2026)

Stand: 27.10.2026 · Status: **AUSKUNFT / PETRA REVIEW** · nichts gebaut, nichts eingeschaltet, keine Datenbank angefasst, keine Kosten
Auftrag: Petra und ChatGPT, 27.10.2026. Geprüft von Claude Code am Code, an den Live-Seiten und an den Preisseiten der Anbieter (abgerufen 27.10.2026).
Die rechtliche Einordnung ist eine Vorprüfung, keine Rechtsberatung. Vor jedem Bau prüft Dr. Falk.

Gehört zu: `entscheidungen/2026-10-27-elsbeth-rueckkehr-neugierig-nachfragen.md` (A) · `forschung/2026-10-27-erlebnisabschluss-rueckkehr-fundstueck-testfassungen.md` (B) · `erlebnisbibliothek/plattform/2026-10-13-plattform-vorschlag-ENTWURF.md` (Spind und Spindschlüssel, schon damals vorgeschlagen).

---

## Die Trennung, um die der Auftrag bittet

| | Was | Wo |
|---|---|---|
| **A. Bestätigt** | Elsbeth darf nach dem Erlebnis neugierig nachfragen (nur der Grundsatz, kein Wortlaut) | `entscheidungen/2026-10-27-elsbeth-rueckkehr-neugierig-nachfragen.md` |
| **B. Kreative Testfassungen** | Rückkehrdialog, Ausklang am Abendessen, Fundstück-Karte | `forschung/2026-10-27-erlebnisabschluss-rueckkehr-fundstueck-testfassungen.md` |
| **C. Technisch geprüft** | Supabase, Konten, E-Mail, Sammlung, Zählung | dieser Bericht, Abschnitte 1 bis 5 |
| **D. Offene Geschäftsentscheidungen** | Konto kostenlos oder später bezahlt, Zeitpunkt der Registrierung, Erlösmodell | dieser Bericht, Abschnitt 6 |

---

## 1. Was die vorhandene Technik schon kann

| Baustein | Was es gibt | Was das für uns heißt |
|---|---|---|
| **Supabase-Projekt** | Ja. Gebaut im September für Ilse, Region Frankfurt (laut Bauprotokoll „Pooler Frankfurt“). | Grundsätzlich wiederverwendbar. |
| **Zustand heute** | Die Adresse des Projekts ist am 27.10. nicht erreichbar. Wahrscheinlichste Ursache: Es ist ein kostenloses Projekt, und die pausieren nach einer Woche ohne Betrieb (Supabase-Preisseite). Ilse ruht seit dem 02.10. | Vor jeder Nutzung müsste Petra es im Supabase-Dashboard wieder aufwecken. Nicht gemacht, nicht nötig für diese Auskunft. |
| **Anmeldung** | Ja, schon gebaut: Anmeldung **ohne Passwort**. Man gibt die E-Mail-Adresse ein und bekommt eine Mail mit Knopf und Code (`ilse.moreisyours.de`, Funktion `signInWithOtp`). Petra hat das im September am Handy bewiesen. | Genau die „unkomplizierte Registrierung“, die Petra sucht, gibt es schon. |
| **Schutz vor fremdem Zugriff** | Ja. Jede Person sieht nur ihr eigenes Fach (Zeilenschutz in der Datenbank, im September mit einem Schreibversuch geprüft: abgewiesen). | Das Muster ist erprobt. |
| **Herunterladen, Löschen** | Ja, bei Ilse: ganzes Fach als Text exportieren, Konto mit allem löschen. | Übertragbar. |
| **Einwilligung** | Ja, bei Ilse ein eigener Haken nach der Anmeldung, mit Zeitstempel, der nie überschrieben wird. | Übertragbar. |
| **Elsbeths Server** | Läuft in der Zentrale. Speichert **keine** Gesprächstexte. Gezählt werden nur Kosten je Tag und Nachrichten je Anschluss (verschlüsselter Fingerabdruck, gelöscht nach 7 Tagen). | Das Fundstück lässt sich ohne Gesprächsprotokoll bauen. |
| **Besucherzählung** | Auf moreisyours.de heute **keine**. Es gibt aber einen eigenen cookielosen Zähler (`api/track`), der schon das Menopause-Quiz, meinkleinerladen.eu und die Zentrale zählt. | Ausbaubar ohne neue Funktion. |
| **Datenschutzerklärung moreisyours.de** | Sagt heute: „Wir legen keine Gesprächstexte auf unserem Server ab und führen kein Konto über dich.“ | Jede Sammlung mit Konto erfordert eine neue Fassung. |

Zwei technische Grenzen gehören dazu:
- **Die Zentrale hat 11 von 12 Funktionen belegt** (seit Elsbeth). Konten und Sammlung gehören deshalb nicht in die Zentrale, sondern in ein eigenes Haus. Ilses Haus hat schon eine eigene Konto-Funktion.
- **Ilses Datenbank enthält sehr persönliche Pilotdaten.** Fundstücke dürften dort nur in eigenen, sauber getrennten Tabellen liegen. Sauberer wäre das zweite kostenlose Projekt, das Supabase erlaubt. Das ist eine spätere Bauentscheidung.

---

## 2. Fundstücke und Konten: drei Wege im Vergleich

| | **Weg 1: Karte zum Mitnehmen** | **Weg 2: Spindschlüssel** (Vorschlag vom 13.10.) | **Weg 3: Sammlung mit E-Mail** |
|---|---|---|---|
| Wie | Die Karte entsteht im Browser und wird als Bild oder PDF gespeichert. Auf demselben Gerät merkt sie sich der Browser. | Drei Wörter und eine Zahl öffnen den Spind auf jedem Gerät. | Anmeldung mit E-Mail-Adresse und Mail-Knopf, wie bei Ilse. |
| Konto | keins | keins, keine E-Mail | ja |
| Gerätewechsel | Karte als Datei mitnehmen, sonst weg | Schlüssel eingeben | einfach anmelden |
| Verloren | Datei weg = Karte weg | Schlüssel weg = Spind weg | Mail-Adresse reicht |
| Kontakt für Neuigkeiten | nein | nein | möglich (getrennte Zustimmung, siehe 3) |
| Kosten | 0 € | Datenbank wie Weg 3, ohne Mailversand | siehe 5 |
| Datenschutz-Aufwand | sehr klein | mittel | am größten |

**Empfehlung von Claude Code:**
1. **Jetzt beginnen mit Weg 1.** Er kostet nichts, braucht kein Konto, keine Datenbank und keine neue Datenschutzlage. Er zeigt außerdem, ob Gäste die Karte überhaupt mitnehmen wollen. Das ist die Frage, die vor jedem Konto beantwortet sein sollte.
2. **Weg 3 erst, wenn Gäste danach fragen**, also wenn sich zeigt, dass Karten gespeichert und später wieder geöffnet werden sollen. Weg 3 passt zu Petras Wunsch, mit Gästen in Kontakt zu bleiben. Weg 2 ist charmanter, bringt aber keinen Kontakt.

**Speichern ohne Gesprächsprotokoll: ja, das geht.** Gespeichert würden nur die Felder der Karte: Erlebnis, Datum, die bestätigten Namen der Figuren, ein Satz, den der Gast selbst ausgewählt oder geschrieben hat, und eine optionale Notiz. Das Gespräch selbst bleibt wie heute nur auf dem Gerät. Der Server bekommt die Karte erst, wenn der Gast „Aufbewahren“ drückt.

**Ein Punkt, den Dr. Falk prüfen sollte:** Ein Satz oder eine Notiz kann Gesundheit, Gefühle oder andere sehr persönliche Dinge enthalten (die Datenschutz-Grundverordnung nennt das „besondere Kategorien“). Für Weg 3 heißt das vermutlich: ausdrückliche Einwilligung, die Speicherung in der EU, ein Auftragsverarbeitungsvertrag mit Supabase (offen seit September) und eine klare Löschmöglichkeit. Bei Weg 1 bleibt alles beim Gast.

**Bearbeiten, Herunterladen, Löschen (Weg 3):** jede Karte einzeln bearbeiten und löschen; alles als Datei herunterladen; Konto mit allem löschen. Das Muster liegt bei Ilse schon vor.

---

## 3. Eine E-Mail-Liste rechtlich sauber aufbauen

**Grundregel:** Konto und Neuigkeiten sind zwei getrennte Dinge.

| Schritt | Was passiert |
|---|---|
| Konto anlegen | E-Mail-Adresse, Mail-Knopf, fertig. Das Konto funktioniert **ohne** Neuigkeiten. |
| Neuigkeiten | Ein eigener Haken, **nicht vorangekreuzt**, mit klarem Satz, worüber informiert wird (zum Beispiel neue Erlebnisse). Kein Konto hängt davon ab (das Gesetz verbietet die Kopplung). |
| Bestätigung | Eine zweite Mail: „Möchtest du wirklich Neuigkeiten bekommen?“ Erst nach dem Klick steht die Adresse auf der Liste (Double-Opt-in). |
| Nachweis | Gespeichert werden: wann zugestimmt, wann bestätigt, welcher Wortlaut galt. |
| Abmelden | In jeder Mail ein Abmeldelink, ein Klick. Ebenso im Konto ein Schalter. |
| Sicherheit | Adressen nur auf dem Server, nie in öffentlich lesbaren Dateien, nie in der Webadresse. |

Rechtsgrundlage nach Vorprüfung: Werbe-Mails brauchen eine ausdrückliche Einwilligung (§ 7 UWG). Die Ausnahme für Bestandskunden greift nicht, weil nichts verkauft wird.

**Warteliste ohne Konto?** Sinnvoll, und zwar als **erster** Kontaktweg, noch vor jedem Konto: eine Adresse, ein Haken, eine Bestätigungsmail. Das ist der kleinste Weg, Kontakt aufzubauen, und PROZESS.md sieht für Phase 5 genau das vor („E-Mail-Warteliste mit Double-Opt-in“). Der Haken dabei: Jede Liste braucht einen Dienst, der die Bestätigungs- und Informationsmails verschickt. Den gibt es heute nicht (siehe 5). Deshalb passt die Warteliste zeitlich in Phase 5, nicht jetzt.

---

## 4. Was sich über die Nutzung messen lässt

**Die Zahlen sind verschieden:**
| Wort | Bedeutet |
|---|---|
| Seitenaufruf | jedes Öffnen einer Seite, auch dreimal von derselben Person |
| Besuch | ein zusammenhängender Aufenthalt |
| Einzelne Besucher | verschiedene Menschen, nur ungefähr zählbar ohne Wiedererkennung |
| Erlebnisstart | jemand öffnet eine Tür und das Erlebnis beginnt |

**Heute auf moreisyours.de:** nichts gezählt. Elsbeths Server kennt nur die Tageskosten und die Zahl der Gespräche je Tag.

**Möglich mit vorhandener Technik, cookielos, ohne Einwilligungsbanner:**
| Frage | Wie |
|---|---|
| Wie viele besuchen die Website? | Seitenaufrufe je Tag über den bestehenden Zähler |
| Wie viele betreten die Bibliothek? | Aufrufe der Halle |
| Wie viele beginnen ein Erlebnis, welche? | ein Zählimpuls „Tür geöffnet: Name der Tür“, ohne Text |
| Wie viele schließen ab? | ein Zählimpuls „Rückkehr zu Elsbeth“ |
| Wie viele legen ein Konto an / melden sich für Neuigkeiten an? | später direkt in der Datenbank, als Summe |

Das Muster ist dasselbe wie beim Menopause-Quiz: nur Tag, Seite oder Tür und grobe Herkunft, keine IP-Adresse, kein Cookie, keine Antworten. Dafür braucht es keine neue Funktion, nur Code im bestehenden Zähler und einen Satz in der Datenschutzerklärung.

**Schwierig: „Wie viele kommen wieder?“** Dafür müsste das Gerät wiedererkannt werden. Wer dafür etwas im Browser ablegt oder ausliest, braucht nach § 25 TDDDG in der Regel eine Einwilligung, also einen Banner. Empfehlung: darauf verzichten und Wiederkehr erst über Konten zählen (Anmeldungen je Monat), wenn es sie gibt.

**Vercel Web Analytics** (der eingebaute Dienst des Hosters) wäre im kostenlosen Tarif enthalten: 50.000 Ereignisse im Monat, für alle Projekte zusammen, eigene Zählimpulse wie „Erlebnis gestartet“ gibt es aber erst im bezahlten Tarif, und die Zahlen bleiben nur einen Monat sichtbar (Vercel-Preisseite, abgerufen 27.10.). Für unsere Fragen reicht der eigene Zähler besser.

---

## 5. Kosten und Sicherheitsrisiken

**Kosten (Preisseiten abgerufen 27.10.2026):**
| Teil | Kosten |
|---|---|
| Karte zum Mitnehmen (Weg 1) | 0 € |
| Zählung mit dem eigenen Zähler | 0 € |
| Supabase kostenlos | 0 €, aber pausiert nach einer Woche Stille. Für echte Gäste ungeeignet, weil die erste Person nach einer Pause einen Fehler sieht. |
| Supabase Pro | ab 25 $ im Monat, sobald echte Gäste ein Konto haben |
| Anmelde-Mails | Supabase verschickt von sich aus nur an Mitglieder des eigenen Teams und höchstens 2 Mails pro Stunde (Supabase-Dokumentation). Für echte Gäste braucht es einen eigenen Mailversand-Dienst. Das ist ein **neuer Dienst** mit eigenem Vertrag, kleine Mengen sind bei vielen Anbietern kostenlos. Die heutige Geschäftsadresse bei Zoho ist dafür nicht gedacht. |
| Neuigkeiten-Mails | ebenfalls ein Versanddienst, neuer Dienst, Kosten je nach Anbieter und Menge |

**Sicherheitsrisiken und was dagegen hilft:**
| Risiko | Gegenmittel |
|---|---|
| Jemand liest fremde Karten | Zeilenschutz in der Datenbank (bei Ilse geprüft), geheimer Schlüssel nur auf dem Server |
| Karten landen in öffentlichen Dateien | Fundstücke nie in den öffentlichen Blob-Speicher der Zentrale legen (dort liegen heute die Zähl-Dateien öffentlich lesbar) |
| Gefälschte Anmelde-Mails | eigene Absenderadresse mit SPF, DKIM und DMARC, wie bei info@moreisyours.de schon eingerichtet |
| Zu viele Daten | nur Kartenfelder speichern, kein Gesprächsprotokoll, Löschfrist für verwaiste Konten |
| Pilotdaten von Ilse und Gästedaten vermischen sich | getrennte Tabellen oder getrenntes Projekt |

---

## 6. Was später entschieden werden sollte (D)

| Entscheidung | Wann sie reif ist |
|---|---|
| Konto kostenlos oder später gegen Geld | wenn Gäste Karten wirklich aufbewahren wollen |
| Zeitpunkt der Registrierung (vor dem Erlebnis, danach, nur zum Aufbewahren) | Empfehlung vorab: nur zum Aufbewahren, nach dem Erlebnis, nie davor |
| Warteliste für Neuigkeiten | Phase 5 laut PROZESS.md |
| Versanddienst für Mails | zusammen mit Konto oder Warteliste, mit Dr. Falk |
| Supabase Pro | an dem Tag, an dem der erste echte Gast ein Konto bekommt |
| Spätere bezahlte Funktionen, weitere Erlebnisse, Mitgliedschaft | wenn Phase 4 bestanden ist; technisch würde die Konto-Grundlage dafür reichen, Zahlung wäre ein eigener Baustein |
| Zählung einschalten | kann jederzeit vorgezogen werden, ist klein und kostenlos, braucht aber Code und eine Zeile in der Datenschutzerklärung |

**Zur wirtschaftlichen Entwicklung (nur Technik, kein Geschäftsmodell):** Die drei Stufen bauen technisch sauber aufeinander auf. Kostenlose Erlebnisse ohne Anmeldung gibt es schon. Ein freiwilliges Konto zum Aufbewahren lässt sich aus Ilses Bauteilen ableiten. Bezahlfunktionen wären danach ein weiterer Baustein, der auf dem Konto aufsetzt. Nichts davon muss heute entschieden werden, und nichts verbaut den Weg.

---

## Was in diesem Auftrag nicht gemacht wurde
Kein Code, keine Änderung an Live-Systemen, kein Aufwecken des Supabase-Projekts, keine Datenbankänderung, kein Mail-Dienst, keine Zahlungsfunktion, keine Preise, keine Veröffentlichung, keine neue Phase. Die Live-Anweisung von Elsbeth ist unverändert.

## Prüfprotokoll (Deutsch-Tor und Drei-Brillen-Tor, am fertigen Stand)
- **Deutsch-Tor:** laut gelesen; Fachwörter beim ersten Auftreten erklärt (Double-Opt-in, Zeilenschutz); ganze Sätze; Zahlen bis 10 als Ziffer, „du“ klein.
- **T1–T3:** keine Wertung über Petra, Empfehlungen als Empfehlungen gekennzeichnet.
- **M1–M3:** Jeder Abschnitt beantwortet eine der sechs Fragen aus dem Auftrag.
- **V1–V3:** Jede Zahl ist mit Quelle und Abrufdatum belegt; Unsicheres (Pause des Projekts) ist als wahrscheinlich gekennzeichnet; „noch nicht“ ist überall als Weg genannt.
