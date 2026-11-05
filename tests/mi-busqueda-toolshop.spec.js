// Laboratorio 3 — Búsqueda sin resultados en Toolshop (https://practicesoftwaretesting.com)
// Es el sitio de tu captura: aquí SÍ aparece el mensaje «No se encontraron productos.»
// Los localizadores no dependen del idioma de la página (inglés o español).
import { test, expect } from '@playwright/test';

// Toolshop marca sus elementos con data-test (solo se usa en este archivo)
test.use({ testIdAttribute: 'data-test' });

test('búsqueda sin resultados en Toolshop', async ({ page }) => {
  // Pasos a mano
  await page.goto('https://practicesoftwaretesting.com');

  const campoBusqueda = page.getByPlaceholder(/Search|Buscar/);
  const botonBuscar = page.getByRole('button', { name: /^(Search|Buscar)$/ });
  await campoBusqueda.fill('sadsad');
  await botonBuscar.click();

  // Comprobaciones
  const mensajeSinProductos = page.getByText(/There are no products found|No se encontraron productos/);
  const productos = page.getByTestId('product-name');

  await expect(mensajeSinProductos).toBeVisible();
  await expect(productos).toHaveCount(0);
  // Para romperlo: cambia toHaveCount(0) por toHaveCount(1) y debe fallar con un mensaje claro.
});
