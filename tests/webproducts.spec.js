// @ts-check
import { test, expect } from '@playwright/test';

test('validar la carga de la pagina web', async ({ page }) => {
  await page.goto('https://automationexercise.com/products');
});