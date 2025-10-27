cat > src_tests/example.spec.js <<'JS'
import { test, expect } from '@playwright/test';

test('Google has title', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await expect(page).toHaveTitle(/Google/i);
});
