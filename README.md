# qa-playwright

Suite de automatización web (Playwright, JavaScript) sobre https://automationexercise.com con Page Object Model.

## Estructura
```
qa-playwright/
├── pages/
│   └── LoginPage.js          ← cómo es la página
├── tests/
│   └── auth/
│       └── login.spec.js     ← qué se verifica
├── .github/pull_request_template.md
├── .env                      ← NO se sube a Git
├── .env.example              ← SÍ se sube
├── .gitignore
├── package.json
└── playwright.config.js
```

## Puesta en marcha
```bash
npm install
npx playwright install chromium
cp .env.example .env     # Windows PowerShell: Copy-Item .env.example .env
# edita .env con tus valores reales
npm test
```

## Reglas del Page Object
1. La clase hace; el test verifica (los `expect` viven en el test).
2. Una clase por página, con el mismo nombre que su archivo.
3. Sin datos de prueba dentro de la clase.
4. Locators como sustantivos, métodos como verbos.
