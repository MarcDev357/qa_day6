/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }], ['list']],
  retries: process.env.CI ? 1 : 0,
  forbidOnly: !!process.env.CI,          // prevent accidental .only from passing CI
  timeout: 30_000,                       // per-test timeout
  expect: { timeout: 5_000 },            // assertion timeout
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  outputDir: 'test-results',
  // workers: process.env.CI ? 2 : undefined, // throttle parallelism if runners are small
};
export default config;
