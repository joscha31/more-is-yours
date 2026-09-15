# MORE IS YOURS – Shared-Project Live POC + Security Review

**Stand:** 15.09.2026  
**Status:** TECH POC / SECURITY REVIEW – NICHT PETRA APPROVED, NICHT PRODUKTIV  
**Owner:** Claude Code / technische Prüfung  

## Ziel

Einen kleinen isolierten Proof of Concept für die aktuelle Voice-Arbeitshypothese prüfen:

> More is Yours bleibt Daten-Wahrheit in Supabase. Die Frau nutzt GPT-Live-1 in einem von More is Yours kontrollierten, pro Nutzerin getrennten ChatGPT Shared Project. Der Zugriff soll bei Kündigung entziehbar sein. Die proprietäre Fachlogik bleibt außerhalb von ChatGPT.

Gleichzeitig muss eine defensive Sicherheitsprüfung klären, wie angreifbar diese Architektur ist.

## Maßgebliche Projektdateien

- `master/2026-09-14-more-is-yours-gesamt-master-3.0.md` – MASTER / aktuell
- `forschung/Voice-Architektur-Optionen-0.1.md` – FACH-LAB-/TECH-RESEARCH-VORSCHLAG
- `forschung/Voice-Marktpruefung-0.1.md` – RESEARCH / PETRA REVIEW
- `forschung/Voice-Zugangsschutz-Shared-Project-0.1.md` – TECH-RESEARCH / PETRA REVIEW
- `berichte-fuer-chatgpt/2026-09-15-liveone-lowcost-architektur-tech-check.md` – TECH FINDING / offen
- `entscheidungen/2026-09-15-ilse-systemische-coachingregeln.md` – PETRA APPROVED
- `entscheidungen/2026-09-15-architecture-decisions-b4-b7.md` – PETRA APPROVED
- `gesetze/2026-09-15-projektregel-github-arbeitsweise.md` – PETRA APPROVED

## Scope des POC

Nur Testumgebung / Testkonto / nicht-sensitive Testdaten.

Geprüft werden soll:

1. Shared Project pro Nutzerin, More is Yours bleibt Owner.
2. Nutzerin nur mit Chat-Zugriff.
3. Dünne Ilse-Schale im Shared Project; keine vollständige proprietäre Methodik.
4. Startkarte aus More is Yours/Supabase.
5. GPT-Live-Gespräch im Shared Project.
6. Abschlusskarte zurück zu More is Yours.
7. Text-Ilse prüft Gesagtes / Ableitung / Hypothese.
8. Nutzerin bestätigt Änderungen vor Supabase-Schreiben.
9. Nutzerin wird testweise aus dem Shared Project entfernt.
10. Danach wird geprüft, was sie noch sehen, kopieren oder weiterverwenden kann.

## Security Review – mindestens prüfen

### Zugriff / Auth
- Kann eine Nutzerin auf ein fremdes Supabase-Profil oder eine fremde Session-ID zugreifen?
- IDOR / Broken Access Control
- Session-Fixation / Session-Hijacking
- Einladung oder Projektlink weitergeben
- abgelaufene / widerrufene Zugänge
- Rechte nach Kündigung
- Rollen und Owner-/Chat-Rechte

### Supabase
- RLS auf allen personenbezogenen Tabellen
- keine Service-Role-Keys im Client
- keine Secrets in HTML/JS/Startkarten
- Auth-Zuordnung User-ID ↔ Profil ↔ Session
- Schreibrechte minimal halten
- Historie und Audit-Trail erhalten

### Start-/Abschlusskarte
- Manipulation der Session-ID
- Replay alter Abschlusskarten
- fremde Abschlusskarte in eigenes Profil einspielen
- Prompt Injection über Karteninhalt
- HTML/Script-Injection / XSS
- übergroße oder absichtlich kaputte Eingaben
- Signatur / Nonce / Ablaufzeit prüfen, falls sinnvoll

### Prompt-/Methodenschutz
- Was kann eine Nutzerin aus Projektanweisungen oder Quellen auslesen?
- Prompt-Leakage / direkte Nachfrage nach Systemanweisung
- Exfiltration proprietärer Regeln
- Thin-Shell wirklich dünn genug?
- Was muss zwingend serverseitig bei MIY bleiben?

### Datenabfluss
- Welche Daten gehen an OpenAI?
- Welche Daten bleiben bei MIY?
- Werden Namen oder unnötige personenbezogene Daten in Startkarten vermieden?
- Kann eine Frau Inhalte anderer Nutzerinnen sehen?
- Logs / Fehlerausgaben / Browser-Konsole auf sensible Daten prüfen

### Web-Sicherheit MIY
Defensiv prüfen, soweit für den POC relevant:
- XSS
- CSRF
- CORS
- Security Headers
- Rate Limiting
- unsichere Direct Object References
- offene Redirects
- Injection in API-Endpunkte
- überbreite Fehlermeldungen / Stacktraces
- Dependency-/Secret-Scanning

### LLM-spezifisch
- Prompt Injection
- indirekte Prompt Injection aus importierter Abschlusskarte
- Systemprompt-Ausgabe
- Cross-User-Datenleak
- Halluzinierte Befehle / unautorisierte Datenspeicherung
- Hypothese darf niemals als Fakt gespeichert werden

## Sicherheitsgrenze

Nur defensive, nicht-destruktive Tests auf Systemen, die Petra/More is Yours gehören oder ausdrücklich als Testumgebung vorgesehen sind.

Keine Angriffe auf OpenAI, ChatGPT oder fremde Accounts. Keine Umgehung von Plattformschutz. Keine belastenden Lasttests ohne Freigabe. Keine echten sensiblen Nutzerinnendaten.

## Erwartete Rückmeldung

Claude soll am Ende liefern:

1. Was heute technisch funktioniert.
2. Was manuell im ChatGPT-UI bleiben muss.
3. Welche Sicherheitsrisiken gefunden wurden.
4. Einstufung je Risiko: kritisch / hoch / mittel / niedrig.
5. Wie leicht ein realer Missbrauch wäre.
6. Konkrete Gegenmaßnahme je Risiko.
7. Was vor einem externen Pilot zwingend behoben sein muss.
8. Was erst vor Skalierung nötig ist.
9. Was nach Kündigung tatsächlich noch zugänglich bleibt.
10. Ob das Shared-Project-Modell aus Security-Sicht als Pilot tragbar ist.
11. Welche Dateien geändert wurden.
12. Tests und Ergebnisse.
13. Commit-SHA.

Keine neue Produkt- oder Methodenentscheidung treffen. Offene Punkte als TECH GAP / SECURITY GAP melden.
