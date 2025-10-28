#!/usr/bin/env bash
set -euo pipefail
STAMP=$(date +%Y%m%d_%H%M%S)
OUT="archives/day6_run_${STAMP}.tgz"
mkdir -p archives
tar -czf "$OUT" playwright-report test-results || true
echo "Archived to: $OUT"
