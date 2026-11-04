# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: esperas-toolshop.spec.js >> 1. lectura unica (no espera)
- Location: tests\esperas-toolshop.spec.js:18:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - text: View the
    - link "Documentation" [ref=e4] [cursor=pointer]:
      - /url: https://testsmith-io.github.io/practice-software-testing/#/
    - text: for this application.
  - generic [ref=e5]:
    - generic [ref=e7]:
      - generic [ref=e8]: Practice Black Box Testing & Bug Hunting
      - button "Testing Guide" [ref=e9] [cursor=pointer]
      - button "🐛 Bug Hunting" [ref=e10] [cursor=pointer]
    - navigation [ref=e11]:
      - generic [ref=e12]:
        - link "Practice Software Testing - Toolshop" [ref=e13] [cursor=pointer]:
          - /url: /
        - generic [ref=e32]:
          - menubar "Main menu" [ref=e33]:
            - menuitem [ref=e34]:
              - link "Home" [ref=e35] [cursor=pointer]:
                - /url: /
            - menuitem [ref=e36]:
              - button "Categories" [ref=e37] [cursor=pointer]
            - menuitem [ref=e38]:
              - link "Contact" [ref=e39] [cursor=pointer]:
                - /url: /contact
            - menuitem [ref=e40]:
              - link "Sign in" [ref=e41] [cursor=pointer]:
                - /url: /auth/login
          - button "Select language" [ref=e43] [cursor=pointer]: EN
  - generic [ref=e48]:
    - generic [ref=e49]:
      - heading "Practice Software Testing - Toolshop" [level=1] [ref=e50]
      - paragraph [ref=e51]:
        - img "Banner" [ref=e52]
      - separator [ref=e53]
      - generic [ref=e54]:
        - text: Enjoyed testing this app? Level up with hands-on software testing courses.
        - link "Explore courses" [ref=e57] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io/?utm_source=pst&utm_medium=homepage&utm_campaign=app_promo
    - generic [ref=e58]:
      - generic [ref=e59]:
        - heading [level=4] [ref=e60]
        - separator [ref=e64]
        - combobox "sort" [ref=e67]:
          - option [selected]
          - option "Name (A - Z)"
          - option "Name (Z - A)"
          - option "Price (High - Low)"
          - option "Price (Low - High)"
          - option "CO₂ Rating (A - E)"
          - option "CO₂ Rating (E - A)"
        - heading [level=4] [ref=e68]
        - separator [ref=e72]
        - generic "ngx-slider" [ref=e74]:
          - slider "ngx-slider" [ref=e79] [cursor=pointer]
          - slider "ngx-slider-max" [ref=e80] [cursor=pointer]
          - generic [ref=e81]: "0"
          - generic [ref=e82]: "200"
          - generic [ref=e83]: "1"
          - generic [ref=e84]: "100"
        - heading [level=4] [ref=e86]
        - separator [ref=e90]
        - generic [ref=e92]:
          - generic [ref=e93]: Search
          - textbox "Search" [ref=e94]
          - button "X" [ref=e95] [cursor=pointer]
          - button "Search" [active] [ref=e96] [cursor=pointer]
        - heading [level=4] [ref=e97]
        - separator [ref=e101]
        - heading "By category:" [level=4] [ref=e102]
        - group "Categories"
        - heading "By brand:" [level=4] [ref=e105]
        - group "Brands"
        - heading "Sustainability:" [level=4] [ref=e108]
        - group "Eco-Friendly Products" [ref=e109]:
          - generic [ref=e112]:
            - checkbox "Show only eco-friendly products" [ref=e113]
            - text: Show only eco-friendly products
      - generic [ref=e114]:
        - 'heading "Searched for: sadsad" [level=3] [ref=e115]'
        - generic [ref=e116]:
          - heading [level=5] [ref=e120]
          - heading [level=5] [ref=e126]
          - heading [level=5] [ref=e132]
          - heading [level=5] [ref=e138]
          - heading [level=5] [ref=e144]
          - heading [level=5] [ref=e150]
          - heading [level=5] [ref=e156]
          - heading [level=5] [ref=e162]
  - contentinfo [ref=e166]:
    - generic [ref=e168]:
      - generic [ref=e169]: Learn & Explore
      - generic [ref=e170]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e172] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e175]:
            - generic [ref=e176]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e178] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e181]:
            - generic [ref=e182]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e184] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e187]:
            - generic [ref=e188]: GitHub
            - text: Source code, issues and contributions
    - generic [ref=e189]:
      - generic [ref=e190]:
        - text: This is a DEMO application, used for software testing training purpose. |
        - link "Privacy Policy" [ref=e191] [cursor=pointer]:
          - /url: /privacy
        - text: "| Banner photo by"
        - link "Barn Images" [ref=e192] [cursor=pointer]:
          - /url: https://unsplash.com/@barnimages
        - text: "on"
        - link "Unsplash" [ref=e193] [cursor=pointer]:
          - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
      - generic [ref=e194]: v2.5 | Built 2026-10-11 | Angular 20.0.5
  - button "Open chat" [ref=e196] [cursor=pointer]
  - button "Show live shop activity" [ref=e200] [cursor=pointer]
```

# Test source

```ts
  1  | ﻿import { test, expect } from '@playwright/test';
  2  | 
  3  | test.use({ testIdAttribute: 'data-test' });
  4  | 
  5  | const MENSAJE = /There are no products found|No se encontraron productos/;
  6  | 
  7  | async function buscarSinResultados(page) {
  8  |   await page.goto('https://practicesoftwaretesting.com');
  9  | 
  10 |   const campoBusqueda = page.getByPlaceholder(/Search|Buscar/);
  11 |   const botonBuscar = page.getByRole('button', { name: /^(Search|Buscar)$/ });
  12 | 
  13 |   // ESPERA IMPLÍCITA: fill y click esperan solos
  14 |   await campoBusqueda.fill('sadsad');
  15 |   await botonBuscar.click();
  16 | }
  17 | 
  18 | test('1. lectura unica (no espera)', async ({ page }) => {
  19 |   await buscarSinResultados(page);
> 20 |   expect(await page.getByText(MENSAJE).isVisible()).toBe(true);
     |                                                     ^ Error: expect(received).toBe(expected) // Object.is equality
  21 | });
  22 | 
  23 | test('2. espera fija antes de la lectura', async ({ page }) => {
  24 |   await buscarSinResultados(page);
  25 |   // ESPERA FIJA
  26 |   await page.waitForTimeout(3000);
  27 |   expect(await page.getByText(MENSAJE).isVisible()).toBe(true);
  28 | });
  29 | 
  30 | test('3. espera explicita', async ({ page }) => {
  31 |   await buscarSinResultados(page);
  32 |   // ESPERA EXPLÍCITA
  33 |   await expect(page.getByText(MENSAJE)).toBeVisible();
  34 |   await expect(page.getByTestId('product-name')).toHaveCount(0);
  35 | });
  36 | 
```