import { test, expect } from '@playwright/test';

// Toolshop marca sus elementos con data-test (solo se usa en este archivo)
test.use({ testIdAttribute: 'data-test' });

test('busqueda sin resultados en Toolshop', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');

  const campoBusqueda = page.getByPlaceholder(/Search|Buscar/);
  const botonBuscar = page.getByRole('button', { name: /^(Search|Buscar)$/ });
  await campoBusqueda.fill('sadsad');
  await botonBuscar.click();

  const mensajeSinProductos = page.getByText(/There are no products found|No se encontraron productos/);
  const productos = page.getByTestId('product-name');

  await expect(mensajeSinProductos).toBeVisible();
  await expect(productos).toHaveCount(0);
});
