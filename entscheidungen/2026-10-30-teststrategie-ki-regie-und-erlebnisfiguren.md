# Entscheidung: Teststrategie für KI-Regie und Erlebnisfiguren

**Datum:** 30.10.2026
**Status:** **PETRA APPROVED 30.10.2026** – nur die **Teststrategie**. Petra hat sie ausdrücklich freigegeben (Anschlussauftrag an Claude Code, erarbeitet mit ChatGPT), eingetragen von Claude Code.
**Nicht freigegeben:** die technische Umsetzung, eine Programmierung, eine Änderung an laufenden Elsbeth-Versionen (live 0.4, Fassungen 0.12 und 0.13), neue Kosten, ein Phasenwechsel.
**Phase:** Phase 2 – Elsbeth spricht, unverändert. Erlebnisse werden laut `PROZESS.md` erst in Phase 3 gebaut; dort kommt diese Teststrategie zum Einsatz.
**Gehört zu:** `strategie/2026-10-30-systemische-ausbildung-ki-erlebnisagenten.md` (Entwicklungsrichtung, PETRA REVIEW). Dieses Dokument legt fest, **wie** die dort beschriebenen Agenten zuerst erprobt werden.

---

## Die freigegebene Teststrategie (Petras Inhalt)

### 1. Eine KI übernimmt zunächst zwei Aufgaben
- Sie spielt die verschiedenen Figuren eines Erlebnisses mit ihren eigenen Persönlichkeiten.
- Gleichzeitig führt sie im Hintergrund die Regie und behält Anliegen, Auftrag, Gesprächsverlauf und Dramaturgie im Blick.

Die Figuren reagieren eigenständig und flexibel auf den Gast. Das Erlebnis entwickelt sich durch seine Antworten und Entscheidungen weiter.

### 2. Der Auftrag bleibt der rote Faden
- Die KI berücksichtigt den ursprünglichen Auftrag, erkennt mögliche Veränderungen und klärt bei deutlichen Richtungswechseln gemeinsam mit dem Gast, wie es weitergeht.
- Auch Neugier ist ein gültiges Anliegen und kann einen konkreten Auftrag begründen.
- Keine ständigen Kontrollfragen und keine schematische Gesprächsführung.

### 3. Flexibilität innerhalb des Erlebnisses
- Funktioniert eine Szene nicht, werden **zuerst die Figuren und der Verlauf innerhalb desselben Erlebnisses** angepasst.
- Es wird **nicht automatisch** ein anderes Erlebnis angeboten.
- Die Figuren dürfen spontan reagieren, widersprechen, überraschen und ihre Haltung ändern, ohne ihre Persönlichkeit zu verlieren.
- Der Gast kann jederzeit aussteigen oder ausdrücklich ein anderes Erlebnis wählen.

### 4. Unabhängige Qualitätsprüfung
Die Gespräche werden zunächst **nachträglich** geprüft, vor allem auf diese Fragen:

1. Hat die KI den Auftrag im Blick behalten?
2. Hat sie Veränderungen angemessen erkannt?
3. Haben die Figuren glaubwürdig und individuell reagiert?
4. War das Erlebnis lebendig und unterhaltsam?
5. Wurde der Gast respektiert und nicht ungefragt interpretiert?
6. Hat die KI eine unpassende Szene flexibel angepasst?

Eine zweite KI kann die Prüfung unterstützen. **Petra behält das abschließende fachliche und kreative Urteil.**

### 5. Vorerst keine eigene Regie-KI
Eine zusätzliche Regie-KI wird erst erwogen, wenn praktische Tests zeigen, dass eine einzelne KI beide Aufgaben nicht zuverlässig genug erfüllt **und** eine Trennung einen messbaren Qualitätsgewinn bringt.

---

## Einordnung von Claude Code (keine Entscheidung)

**Was dazu passt:**
- `entscheidungen/2026-10-20-elsbeth-arbeitsteilung-gastgeberin-erlebnis.md` (PETRA APPROVED): Jedes Erlebnis ist ein eigener Übungsraum mit eigener Anweisung. Die Regie-und-Figuren-KI ist genau diese Erlebnis-Anweisung; Elsbeth bleibt Gastgeberin davor und danach.
- `entscheidungen/2026-10-27-tisch-erlebnis-persoenlichkeitsanteile.md`: „Fünf von dir an einem Tisch“ ist schon ein Erlebnis mit mehreren Figuren. Der Tisch-Prototyp bleibt geparkt (STATUS.md); diese Entscheidung holt ihn nicht zurück.
- Prüffragen 1, 2 und 5 decken sich mit Stufe 3 im Ausbildungsdokument. Neu sind 3, 4 und 6 (Figuren, Unterhaltung, Anpassung der Szene).
- `PROZESS.md`, Regel 7: Auch misslungene Gespräche werden dokumentiert, keine erdachten Ergebnisse.

**Was diese Entscheidung genauer fasst:**
- Im Ausbildungsdokument (Grundregel C, Film-Beispiel) steht als mögliche Alternative auch „ein anderes Erlebnis“. Ab jetzt gilt die Reihenfolge aus Punkt 3: zuerst innerhalb desselben Erlebnisses anpassen; ein anderes Erlebnis nur, wenn der Gast es ausdrücklich wählt oder aussteigt. Im Ausbildungsdokument steht dazu ein Hinweis, Petras Wortlaut dort bleibt unverändert.

**Was offen bleibt (DECISION GAP / CONTENT GAP):**
- ~~**Coaching-Grenze**~~ **aufgelöst am 30.10.:** Mit der Leistungsgrenze Variante B (PETRA APPROVED, `entscheidungen/2026-10-30-leistungsgrenze-variante-b-systemische-kompetenz.md`) dürfen die Figuren Anliegen und Aufträge klären und innerhalb eines Erlebnisses flexibel reagieren. Die Regie dieser Teststrategie steht damit im Einklang mit `PROZESS.md`.
- **Kosten:** Die zweite Prüf-KI und die Testgespräche kosten Geld, sobald sie über eine Schnittstelle laufen. Dafür braucht es vor dem ersten Lauf Petras Kostenfreigabe (`PROZESS.md`, Regel 5). Die Freigabe vom 30.10. („sechs Modelle, ohne Obergrenze“) gilt für die Elsbeth-Gesprächsprobe, nicht automatisch hierfür.
- **Messbarer Qualitätsgewinn (Punkt 5):** Woran er gemessen wird, ist noch nicht festgelegt.
- **Wer die Figuren spielt:** Ob Elsbeth selbst im Erlebnis mitspielt oder nur Gastgeberin davor und danach bleibt, ist nicht entschieden.
- **Welches Erlebnis zuerst:** wird in Phase 3 gewählt („genau EIN Erlebnis“).
