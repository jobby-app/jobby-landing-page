#!/usr/bin/env bash
# Wyślij zaproszenia beta do wszystkich niezaproszonych z waitlisty.
#
# Użycie:
#   export API_URL="https://getjobby.pl"
#   export ADMIN_SECRET="twoj-sekret"
#   ./scripts/send-beta-invites.sh
#
# Dry run:
#   ./scripts/send-beta-invites.sh --dry-run

set -euo pipefail

DRY_RUN=""
if [[ "${1:-}" == "--dry-run" ]]; then
  DRY_RUN="?dry_run=true"
fi

API_URL="${API_URL:-http://localhost:3000}"
API_URL="${API_URL%/}"

: "${ADMIN_SECRET:?Ustaw ADMIN_SECRET}"

curl -sS -X POST \
  "${API_URL}/api/waitlist/send-beta-invites${DRY_RUN}" \
  -H "Authorization: Bearer ${ADMIN_SECRET}" \
  -H "Content-Type: application/json"
