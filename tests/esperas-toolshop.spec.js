import { test, expect } from '@playwright/test';

test.use({ testIdAttribute: 'data-test' });

const MENSAJE = /There are no products found|No se encontraron productos/;

async function buscarSinResultados(page) {
  await page.goto('https://practicesoftwaretesting.com');

  const campoBusqueda = page.getByPlaceholder(/Search|Buscar/);
  const botonBuscar = page.getByRole('button', { name: /^(Search|Buscar)$/ });

  // ESPERA IMPLÍCITA: fill y click esperan solos
  await campoBusqueda.fill('sadsad');
  await botonBuscar.click();
}

test('1. lectura unica (no espera)', async ({ page }) => {
  await buscarSinResultados(page);
  expect(await page.getByText(MENSAJE).isVisible()).toBe(true);
});

test('2. espera fija antes de la lectura', async ({ page }) => {
  await buscarSinResultados(page);
  // ESPERA FIJA
  await page.waitForTimeout(3000);
  expect(await page.getByText(MENSAJE).isVisible()).toBe(true);
});

test('3. espera explicita', async ({ page }) => {
  await buscarSinResultados(page);
  // ESPERA EXPLÍCITA
  await expect(page.getByText(MENSAJE)).toBeVisible();
  await expect(page.getByTestId('product-name')).toHaveCount(0);
});
