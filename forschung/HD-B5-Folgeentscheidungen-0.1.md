# MORE IS YOURS – HD B5 Folgeentscheidungen 0.1

**Stand:** 15.09.2026  
**Status:** **FACH-LAB-VORSCHLAG / PETRA REVIEW**  
**Bereich:** Human Design Content Lab / B5 HD Lens A-light

## Ausgangspunkt

Claude Code hat Manifestor 0.2 technisch eingebaut. Der Motor, die sieben freigegebenen Manifestor-Hypothesen und die sieben offenen Kernfragen sind aktiv. Vertiefungen und Gegenproben sind technisch noch nicht abgebildet. Außerdem wurden drei Folgefragen an das Human Design Content Lab übergeben: Bibliotheksform für Vertiefungen/Gegenproben, Erweiterung des technischen Schutznetzes und Nutzerfassung der Hypothesen.

## Vorschlag 1 – Bibliotheksform erweitern

Die HD-Bibliothek soll je Eintrag neben der offenen Kernfrage zusätzliche, klar getrennte Dialogbausteine abbilden dürfen.

Empfohlene Felder:

- `frage` – offene Kernfrage
- `vertiefungen[]` – optionale Nachfragen mit Bedingung
- `gegenprobe` – ausdrücklich zulässiges Gegenbeispiel / Gegenfrage
- `wirtschaftlich_danach` – nur falls relevant und erst nach Selbstaussage/Beleg

Für Vertiefungen soll zusätzlich eine Bedingung mitgeführt werden, z. B.:

- nur wenn die Frau kein Beispiel findet
- nur wenn die Frau den offenen Einstieg nicht greifen kann
- nur wenn sie die Hypothese selbst bestätigt

**Begründung:** Die systemische MIY-Logik ist nicht nur eine einzelne Frage. Offene Frage, Vertiefung und Gegenprobe sind fachlich unterschiedliche Bausteine. Werden sie in einem einzigen Textfeld vermischt, geht die Reihenfolge verloren oder Claude müsste später improvisieren. Beides ist unerwünscht.

**Noch nicht vorgeschlagen:** automatische Gesprächssteuerung durch Ilse. Zunächst nur fachlich vollständige Bibliotheksform.

## Vorschlag 2 – HD-Schutznetz ergänzen

Die in der Manifestor-Library ausdrücklich verbotenen Formulierungen sollen zusätzlich technisch prüfbar gemacht werden.

Dabei gilt:

> Der Wächter ist ein Schutznetz, keine fachliche Freigabeinstanz.

Er soll insbesondere offensichtliche verbotene Muster erkennen, z. B.:

- Typ → Beruf
- Typ → Geschäftsmodell
- HD → Ausschluss einer Option
- Aura → Tatsachenbehauptung
- Konditionierungsargument gegen die Selbstaussage
- Match-Prozente aus HD

Der Quality Guard und menschliche Review bleiben notwendig. Ein grüner Regex-Test beweist keine gute HD-Begleitung.

## Vorschlag 3 – Nutzerfassung der Hypothesen, aber Frage zuerst

Die interne fachliche Hypothese darf weiterhin in dritter Person gespeichert werden. Für die Frau kann zusätzlich eine vorsichtige Du-Fassung existieren.

**Wichtig:** Die Du-Fassung darf die offene Frage nicht vorwegnehmen oder die Antwort primen.

Deshalb gilt für die Nutzeroberfläche:

> **Frage zuerst. Hypothese erst danach oder optional aufklappbar als „Was wir hier prüfen“.**

Gerade bei H-MAN-07 würde eine vorangestellte Hypothese mit „Respekt, Distanz oder Vorsicht“ die eigentlich offene Frage bereits färben.

Beispiel intern:

> „Es könnte relevant sein zu prüfen, ob die Frau in Arbeitssituationen gern selbst etwas anstößt.“

Mögliche Nutzerfassung nach/bei Bedarf:

> „Es könnte interessant sein zu prüfen, ob du bei der Arbeit gern selbst etwas anstößt.“

Sprachregeln:

- Konjunktiv / Hypothesenmarker bleibt erhalten
- keine Feststellung „Du bist ...“
- keine Verstärkung durch Typjargon
- keine wirtschaftliche Schlussfolgerung
- Inhalt darf gegenüber der freigegebenen Hypothese nicht verändert werden
- die offene Frage steht vor jeder suggestiveren Erklärung

Empfohlene technische Trennung:

- `hypothese_intern`
- `hypothese_nutzer` – optional, nicht vor der offenen Frage anzeigen

## Vorschlag 4 – Gesprächseinbindung noch nicht bauen

Die größere Architekturfrage, wann und wie die HD-Fragen im echten Ilse-Gespräch auftauchen, bleibt zunächst offen.

Empfehlung:

1. Bibliotheksform vollständig machen.
2. Petra testet als Frau Nr. 1 die aktuelle HD-Seite und die Hypothesen.
3. Beobachten, welche Fragen natürlich hilfreich wären und welche überflüssig sind, weil Economic Profile/Biografie bereits Informationen enthält.
4. Erst danach Gesprächsrouting spezifizieren.

So vermeiden wir einen neuen Fragebogen im Chat und halten die Regel ein: bekannte Informationen werden aktiv genutzt, nicht erneut abgefragt.

## Status

Alle vier Punkte sind **FACH-LAB-VORSCHLAG** und noch nicht PETRA APPROVED.

Erst nach Petras ausdrücklicher Bestätigung dürfen daraus Build-Aufträge an Claude Code entstehen.
