# MORE IS YOURS – TECH CHECK: Low-Cost-Voice über eigenen ChatGPT-Account

**Stand:** 15.09.2026
**Status:** TECH FINDING / noch keine PETRA-APPROVED Architekturentscheidung
**Bereich:** Ilse / Voice / Kosten / Supabase-Verknüpfung

## 1. Ausgangsidee

Die bisher besprochene Low-Cost-Idee lautet:

1. Die Frau meldet sich auf der More-is-Yours-Seite an.
2. Sie erhält einen Zuordnungscode und einen eigenen Bereich in Supabase.
3. Sie wechselt in ihren eigenen ChatGPT-Account und spricht dort mit einer More-is-Yours-Ilse.
4. Die Sprachkosten laufen über ihren eigenen ChatGPT-Tarif statt über eine von More is Yours bezahlte Voice-API.
5. Zu Beginn soll Ilse den relevanten Stand aus Supabase laden.
6. Die Frau beendet die Sitzung mit einem definierten Abschluss wie „Ende“.
7. Die relevanten Ergebnisse sollen danach strukturiert zurück in Supabase geschrieben werden.

Ziel: hochwertige Live-Sprachqualität ohne hohe laufende Voice-API-Kosten für More is Yours.

## 2. Aktueller technischer Befund am 15.09.2026

Nach Prüfung der aktuellen OpenAI-Dokumentation gilt:

- ChatGPT Live ist aktuell nicht mit Plugins oder verbundenen Apps nutzbar.
- Custom GPTs können in Voice genutzt werden, aber nicht mit GPT-Live; Voice mit GPTs läuft separat.
- Custom GPT Actions sind in Voice-Gesprächen nicht verfügbar.
- Damit kann ein Voice-Gespräch in einem Custom GPT derzeit nicht automatisch per Action den More-is-Yours-/Supabase-Backend-Stand laden oder am Ende zurückschreiben.
- Custom GPTs sollen 2026 zugunsten von Plugins auslaufen; die Migration beginnt nach aktuellem Plan ab September 2026. Dadurch ist eine neue dauerhafte Architektur auf Custom GPT Actions zusätzlich riskant.

## 3. Konsequenz

Die fachliche Idee „eigener ChatGPT-Account trägt die Voice-Kosten“ bleibt interessant.

Die vollständig automatische Kette

> More-is-Yours-Login → Code → ChatGPT Live → Supabase lesen → Gespräch → „Ende“ → Supabase schreiben

ist heute aber **nicht als belegte funktionsfähige Architektur freigegeben**.

Der Engpass ist nicht Supabase, sondern die fehlende Möglichkeit von ChatGPT Live / Voice, während des Gesprächs die nötige externe Integration zuverlässig zu nutzen.

## 4. Was NICHT daraus folgt

- Die Voice-Idee ist nicht verworfen.
- Die eigene Text-Ilse mit Opus in der More-is-Yours-App bleibt davon unberührt.
- Es wird nicht automatisch entschieden, eine teure Voice-API zu bauen.
- Es wird keine neue Voice-Technik gebaut, bevor der kostengünstige Weg technisch sauber geklärt ist.

## 5. Offene technische Wege

Noch nicht entschieden:

1. Warten/prüfen, ob Live künftig Plugins/Apps sicher unterstützt.
2. Prüfen, ob ein zukünftiges Plugin die More-is-Yours-Ilse samt Supabase-Verknüpfung im eigenen ChatGPT-Account abbilden kann.
3. Prüfen, ob ein anderer ChatGPT-Voice-Modus als Live die benötigte Integration unterstützt, ohne die gewünschte Gesprächsqualität zu verlieren.
4. Übergangsweise manueller oder halbautomatischer Übergabeschritt zwischen Voice und More-is-Yours-App.
5. Eigene Voice-API nur dann neu bewerten, wenn Preis und Produktökonomie sie später tragen.

## 6. Qualitäts- und Architekturregel

Keine dieser Varianten darf als beschlossen oder BUILD READY behandelt werden, bevor ein echter technischer Proof of Concept zeigt:

- Identität der Frau wird sicher zugeordnet,
- vorhandener Kontext kann geladen werden,
- Gesprächsqualität bleibt ausreichend,
- relevantes Ergebnis kann zuverlässig gespeichert werden,
- Datenschutz und Authentifizierung sind sauber,
- laufende Kosten bleiben im Produktmodell tragfähig.

## 7. Empfohlener nächster Schritt

Kein großer Build.

Ein kleiner isolierter Techniktest soll nur die Frage beantworten:

> Kann eine Frau in ihrem eigenen ChatGPT-Account mit einer More-is-Yours-Ilse sprechen und dabei zuverlässig mit ihrem Supabase-Kontext verbunden bleiben, ohne dass More is Yours die Voice-Minuten per API bezahlen muss?

Bis dieser Test bestanden ist, bleibt die Low-Cost-Voice-Architektur **offen**.
