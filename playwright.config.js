import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  reporter: 'list',

  use: {
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure'
  }
});