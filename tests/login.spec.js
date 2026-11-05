// tests/login.spec.js — Sesión 12 · Laboratorio: login con assertions, esperas y traza
// Sitio bajo prueba: https://automationexercise.com/login
//
// TABLA DE ASSERTIONS
// | Test                 | Qué compruebo                    | Assertion                |
// |----------------------|----------------------------------|--------------------------|
// | login exitoso        | llegué a la página principal     | toHaveURL                |
// |                      | se ve «Logged in as»             | toBeVisible              |
// |                      | aparece el enlace «Logout»       | toBeVisible              |
// | email inválido       | aviso de credenciales erróneas   | toBeVisible              |
// |                      | sigo en la página de login       | toHaveURL                |
// | contraseña inválida  | aviso de credenciales erróneas   | toBeVisible              |
// |                      | sigo en la página de login       | toHaveURL                |
//
// ESPERAS
//  - Implícita: fill() y click() esperan solos a que el elemento exista, se vea y esté habilitado.
//  - Explícita: cada `await expect(...)` reintenta hasta cumplirse; en el login exitoso se amplía el tiempo a 10 s.
 
import { test, expect } from '@playwright/test';
 
const URL_LOGIN = 'https://automationexercise.com/login';
const EMAIL = 'mahestrella@hotmail.com';
const PASSWORD = '12345';
const MENSAJE_ERROR = 'Your email or password is incorrect!';
 
// Rellena el formulario de LOGIN (la página también tiene el de signup, por eso data-qa).
async function iniciarSesion(page, email, password) {
  await page.goto(URL_LOGIN);
  await page.locator('[data-qa="login-email"]').fill(email);       // espera implícita
  await page.locator('[data-qa="login-password"]').fill(password); // espera implícita
  await page.locator('[data-qa="login-button"]').click();          // espera implícita
}
 
test.beforeEach(async ({ page }) => {
  // Los anuncios del sitio a veces tapan botones y vuelven inestable el test.
  await page.route(/googlesyndication|doubleclick|googleads/, (route) => route.abort());
});
 
test('login exitoso', async ({ page }) => {
  await iniciarSesion(page, EMAIL, PASSWORD);
 
  // Esperas explícitas (3 assertions)
  await expect(page).toHaveURL(/^https:\/\/automationexercise\.com\/?$/, { timeout: 10000 });
  await expect(page.getByText('Logged in as')).toBeVisible();
  await expect(page.getByRole('link', { name: /Logout/ })).toBeVisible();
});
 
test('email inválido', async ({ page }) => {
  await iniciarSesion(page, 'no.existe.qa@ejemplo.com', PASSWORD);
 
  await expect(page.getByText(MENSAJE_ERROR)).toBeVisible();
  await expect(page).toHaveURL(/\/login/);
});
 
test('contraseña inválida', async ({ page }) => {
  await iniciarSesion(page, EMAIL, 'ClaveIncorrecta!999');
 
  await expect(page.getByText(MENSAJE_ERROR)).toBeVisible();
  await expect(page).toHaveURL(/\/login/);
});
 