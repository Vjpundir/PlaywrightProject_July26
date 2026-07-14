// @ts-check
import { defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  retries: 0,
  timeout: 50 * 1000,

  expect: {
    timeout: 60 * 1000
  },


  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  

reporter: [
  ['html', { open: 'never' }],
  ['list']
],

  
use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',

      use:
      {
        browserName: 'chromium',
        headless: !!process.env.CI
      }

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
 } 
]
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

