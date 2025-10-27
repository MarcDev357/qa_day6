/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  reporter: [['html', { open: 'never' }], ['list']],
  retries: 1,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  outputDir: 'test-results',
};
export default config;
