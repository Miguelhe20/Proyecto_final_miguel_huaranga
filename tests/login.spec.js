// tests/login.spec.js — Sesión 12 · login con assertions, esperas y traza
// Sitio: https://automationexercise.com/login
//
// TABLA DE ASSERTIONS
// | Test                 | Qué compruebo                    | Assertion   |
// |----------------------|----------------------------------|-------------|
// | login exitoso        | llegué a la página principal     | toHaveURL   |
// |                      | se ve «Logged in as»             | toBeVisible |
// |                      | aparece el enlace «Logout»       | toBeVisible |
// | email inválido       | aviso de credenciales erróneas   | toBeVisible |
// |                      | sigo en la página de login       | toHaveURL   |
// | contraseña inválida  | aviso de credenciales erróneas   | toBeVisible |
// |                      | sigo en la página de login       | toHaveURL   |
//
// ESPERAS
//  - Implícita: fill() y click() esperan solos.
//  - Explícita: cada await expect(...) reintenta hasta cumplirse.

import { test, expect } from '@playwright/test';

const URL_LOGIN = 'https://automationexercise.com/login';
const EMAIL = 'mahestrella@hotmail.com';
const PASSWORD = '12345';
const MENSAJE_ERROR = 'Your email or password is incorrect!';

async function iniciarSesion(page, email, password) {
  await page.goto(URL_LOGIN);
  await page.locator('[data-qa="login-email"]').fill(email);
  await page.locator('[data-qa="login-password"]').fill(password);
  await page.locator('[data-qa="login-button"]').click();
}

test.beforeEach(async ({ page }) => {
  await page.route(/googlesyndication|doubleclick|googleads/, (route) => route.abort());
});

test('login exitoso', async ({ page }) => {
  await iniciarSesion(page, EMAIL, PASSWORD);

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
