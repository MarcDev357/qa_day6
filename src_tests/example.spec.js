import { test, expect } from '@playwright/test';

test('GitHub Playwright repo opens and has a title', async ({ page }) => {
  await page.goto('https://github.com/microsoft/playwright');
  await expect(page).toHaveTitle(/playwright/i);
});
