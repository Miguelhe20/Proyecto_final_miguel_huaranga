//DESARROLLO DE LABORATORIO 2

// Laboratorio 2 — Modo estricto en https://automationexercise.com/products
// La página tiene un enlace «View Product» por cada producto, así que
// getByRole('link', { name: 'View Product' }) encuentra N elementos.
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Los anuncios del sitio a veces tapan botones y vuelven inestable el test.
  await page.route(/googlesyndication|doubleclick|googleads/, (route) => route.abort());
  await page.goto('https://automationexercise.com/products');
});

// 1. Provócalo
test('error de modo estricto', async ({ page }) => {
  const verProducto = page.getByRole('link', { name: 'View Product' });

  // Versión para leer el error a mano (descomenta, ejecuta y comenta de nuevo):
  // await verProducto.click();

  // Versión que pasa: comprueba que Playwright se detiene con «strict mode violation ... resolved to N elements»
  await expect(verProducto.click({ timeout: 5000 })).rejects.toThrow(/strict mode violation/);
});

// 2. Resuélvelo por posición
test('modo estricto resuelto por posición: .first()', async ({ page }) => {
  const verProducto = page.getByRole('link', { name: 'View Product' }).first();

  await verProducto.click();
  await expect(page).toHaveURL(/product_details/);
});

// 3. Resuélvelo por texto (y dentro de una zona: la tarjeta del producto)
test('modo estricto resuelto por texto: filter({ hasText })', async ({ page }) => {
  const tarjeta = page.locator('.product-image-wrapper').filter({ hasText: 'Blue Top' });
  const verProducto = tarjeta.getByRole('link', { name: 'View Product' });

  await expect(tarjeta).toHaveCount(1); // el filtro dejó un solo elemento: ya no hay ambigüedad
  await verProducto.click();
  await expect(page).toHaveURL(/product_details/);
});
