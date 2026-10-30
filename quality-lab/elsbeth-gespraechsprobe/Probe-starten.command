#!/bin/zsh
# Startet die Elsbeth-Gesprächsprobe im TROCKENLAUF (nichts wird gesendet, keine Kosten).
# Den echten Lauf mit Modell und Obergrenze startet Claude Code nach Petras Ja.
cd "$(dirname "$0")"
(sleep 1; open "http://127.0.0.1:8794/") &
node server.mjs
