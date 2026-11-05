// Laboratorio 4 — Esperas en Toolshop (https://practicesoftwaretesting.com)
// Mismo buscador del laboratorio 3. Una versión de la comprobación por test:
//   1. lectura única   2. espera fija   3. espera explícita
// Ejecutar:  npx playwright test esperas-toolshop --project=chromium --reporter=list --repeat-each=10
// Este es el ÚNICO archivo donde se permite waitForTimeout y la lectura única: es didáctico.
import { test, expect } from '@playwright/test';
 
test.use({ testIdAttribute: 'data-test' });
 
const MENSAJE = /There are no products found|No se encontraron productos/;
 
async function buscarSinResultados(page) {
  await page.goto('https://practicesoftwaretesting.com');
 
  const campoBusqueda = page.getByPlaceholder(/Search|Buscar/);
  const botonBuscar = page.getByRole('button', { name: /^(Search|Buscar)$/ });
 
  // ESPERA IMPLÍCITA: fill y click esperan solos a que el elemento exista, se vea y esté habilitado
  await campoBusqueda.fill('sadsad');
  await botonBuscar.click();
}
 
test('1. lectura única (no espera)', async ({ page }) => {
  await buscarSinResultados(page);
 
  // Lee el estado UNA sola vez, sin reintentar: falla si el resultado aún no cargó
  expect(await page.getByText(MENSAJE).isVisible()).toBe(true);
});
 
test('2. espera fija antes de la lectura', async ({ page }) => {
  await buscarSinResultados(page);
 
  // ESPERA FIJA: duerme 3 s siempre, haya cargado o no
  await page.waitForTimeout(3000);
  expect(await page.getByText(MENSAJE).isVisible()).toBe(true);
});
 
test('3. espera explícita', async ({ page }) => {
  await buscarSinResultados(page);
 
  // ESPERA EXPLÍCITA: pides la condición y Playwright reintenta hasta cumplirla o agotar el tiempo
  await expect(page.getByText(MENSAJE)).toBeVisible();
  await expect(page.getByTestId('product-name')).toHaveCount(0);
});