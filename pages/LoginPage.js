// Page Object de la página de login de automationexercise.com
// Regla 1: la clase HACE (acciones); los expect viven en el test.
// Regla 3: sin datos de prueba aquí; usuario y clave entran por parámetro.
export class LoginPage {
  constructor(page) {
    this.page = page;

    // La página /login también tiene el formulario de signup, por eso se usa data-qa.
    this.email = page.locator('[data-qa="login-email"]');
    this.password = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
    this.errorMessage = page.getByText('Your email or password is incorrect!');
  }

  // baseURL (config) + ruta corta
  async goto() {
    await this.page.goto('/login');
  }

  async login(email, password) {
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginButton.click();
  }
}
