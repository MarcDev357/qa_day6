#!/usr/bin/env bash
set -euo pipefail
npm ci || npm install
npx playwright install --with-deps
npm run test
echo "Report: $(realpath playwright-report/index.html)"
echo "Artifacts dir: $(realpath test-results)"
