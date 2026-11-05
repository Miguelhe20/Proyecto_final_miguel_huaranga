import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';

const MENSAJE_ERROR = 'Your email or password is incorrect!';

test.describe('Autenticación', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    // Los anuncios del sitio a veces tapan botones y vuelven inestable el test.
    await page.route(/googlesyndication|doubleclick|googleads/, (route) => route.abort());

    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('login exitoso', async ({ page }) => {
    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASSWORD);

    // Esperas explícitas (3 assertions)
    await expect(page).toHaveURL(/^https:\/\/automationexercise\.com\/?$/, { timeout: 10000 });
    await expect(page.getByText('Logged in as')).toBeVisible();
    await expect(page.getByRole('link', { name: /Logout/ })).toBeVisible();
  });

  test('email inválido', async ({ page }) => {
    await loginPage.login('no.existe.qa@ejemplo.com', process.env.LOGIN_PASSWORD);

    await expect(loginPage.errorMessage).toHaveText(MENSAJE_ERROR);
    await expect(page).toHaveURL(/\/login/);
  });

  test('contraseña inválida', async ({ page }) => {
    await loginPage.login(process.env.LOGIN_EMAIL, 'ClaveIncorrecta!999');

    await expect(loginPage.errorMessage).toHaveText(MENSAJE_ERROR);
    await expect(page).toHaveURL(/\/login/);
  });
});
