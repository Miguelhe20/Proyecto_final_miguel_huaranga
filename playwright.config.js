import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Lee el archivo .env y lo deja en process.env
dotenv.config();

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: process.env.BASE_URL, // dominio SIN ruta; cada goto lleva solo la ruta
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});
