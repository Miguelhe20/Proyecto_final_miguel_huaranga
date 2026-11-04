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
        - group "Categories" [ref=e103]:
          - generic [ref=e105]:
            - generic [ref=e106]:
              - checkbox "Hand Tools" [ref=e107]
              - text: Hand Tools
            - list [ref=e108]:
              - group "Categories" [ref=e109]:
                - generic [ref=e112]:
                  - checkbox "Hammer" [ref=e113]
                  - text: Hammer
                - generic [ref=e115]:
                  - checkbox "Hand Saw" [ref=e116]
                  - text: Hand Saw
                - generic [ref=e118]:
                  - checkbox "Wrench" [ref=e119]
                  - text: Wrench
                - generic [ref=e121]:
                  - checkbox "Screwdriver" [ref=e122]
                  - text: Screwdriver
                - generic [ref=e124]:
                  - checkbox "Pliers" [ref=e125]
                  - text: Pliers
                - generic [ref=e127]:
                  - checkbox "Chisels" [ref=e128]
                  - text: Chisels
                - generic [ref=e130]:
                  - checkbox "Measures" [ref=e131]
                  - text: Measures
          - generic [ref=e132]:
            - generic [ref=e133]:
              - checkbox "Power Tools" [ref=e134]
              - text: Power Tools
            - list [ref=e135]:
              - group "Categories" [ref=e136]:
                - generic [ref=e139]:
                  - checkbox "Grinder" [ref=e140]
                  - text: Grinder
                - generic [ref=e142]:
                  - checkbox "Sander" [ref=e143]
                  - text: Sander
                - generic [ref=e145]:
                  - checkbox "Saw" [ref=e146]
                  - text: Saw
                - generic [ref=e148]:
                  - checkbox "Drill" [ref=e149]
                  - text: Drill
          - generic [ref=e150]:
            - generic [ref=e151]:
              - checkbox "Other" [ref=e152]
              - text: Other
            - list [ref=e153]:
              - group "Categories" [ref=e154]:
                - generic [ref=e157]:
                  - checkbox "Tool Belts" [ref=e158]
                  - text: Tool Belts
                - generic [ref=e160]:
                  - checkbox "Storage Solutions" [ref=e161]
                  - text: Storage Solutions
                - generic [ref=e163]:
                  - checkbox "Workbench" [ref=e164]
                  - text: Workbench
                - generic [ref=e166]:
                  - checkbox "Safety Gear" [ref=e167]
                  - text: Safety Gear
                - generic [ref=e169]:
                  - checkbox "Fasteners" [ref=e170]
                  - text: Fasteners
        - heading "By brand:" [level=4] [ref=e172]
        - group "Brands" [ref=e173]:
          - generic [ref=e176]:
            - checkbox "ForgeFlex Tools" [ref=e177]
            - text: ForgeFlex Tools
          - generic [ref=e179]:
            - checkbox "MightyCraft Hardware" [ref=e180]
            - text: MightyCraft Hardware
        - heading "Sustainability:" [level=4] [ref=e182]
        - group "Eco-Friendly Products" [ref=e183]:
          - generic [ref=e186]:
            - checkbox "Show only eco-friendly products" [ref=e187]
            - text: Show only eco-friendly products
      - generic [ref=e188]:
        - 'heading "Searched for: sadsad" [level=3] [ref=e189]'
        - paragraph [ref=e190]: 45 products found for 'sadsad'
        - generic [ref=e191]:
          - 'link "Combination Pliers Compare Combination Pliers CO₂: A B C D E $14.15" [ref=e192] [cursor=pointer]':
            - /url: /product/01M6JBE0ZXCK56V9GKMRNN8K4T
            - generic [ref=e193]:
              - img "Combination Pliers" [ref=e194]
              - button "Compare" [ref=e195]
            - generic [ref=e199]:
              - heading "Combination Pliers" [level=5] [ref=e200]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e201]:
                - text: "CO₂:"
                - generic [ref=e202]: A
                - generic [ref=e203]: B
                - generic [ref=e204]: C
                - generic [ref=e205]: D
                - generic [ref=e206]: E
            - generic [ref=e207]: $14.15
          - 'link "Pliers Compare Pliers CO₂: A B C D E $12.01" [ref=e209] [cursor=pointer]':
            - /url: /product/01M6JBE10A8CFKMCH1M4Z3EFF9
            - generic [ref=e210]:
              - img "Pliers" [ref=e211]
              - button "Compare" [ref=e212]
            - generic [ref=e216]:
              - heading "Pliers" [level=5] [ref=e217]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e218]:
                - text: "CO₂:"
                - generic [ref=e219]: A
                - generic [ref=e220]: B
                - generic [ref=e221]: C
                - generic [ref=e222]: D
                - generic [ref=e223]: E
            - generic [ref=e224]: $12.01
          - 'link "Bolt Cutters Compare Bolt Cutters CO₂: A B C D E $48.41" [ref=e226] [cursor=pointer]':
            - /url: /product/01M6JBE10FY17SHC0BV45R77NC
            - generic [ref=e227]:
              - img "Bolt Cutters" [ref=e228]
              - button "Compare" [ref=e229]
            - generic [ref=e233]:
              - heading "Bolt Cutters" [level=5] [ref=e234]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e235]:
                - text: "CO₂:"
                - generic [ref=e236]: A
                - generic [ref=e237]: B
                - generic [ref=e238]: C
                - generic [ref=e239]: D
                - generic [ref=e240]: E
            - generic [ref=e241]: $48.41
          - 'link "Long Nose Pliers Compare Long Nose Pliers CO₂: A B C D E Out of stock $14.24" [ref=e243] [cursor=pointer]':
            - /url: /product/01M6JBE10JJBSZ9VVH7ZS63JX0
            - generic [ref=e244]:
              - img "Long Nose Pliers" [ref=e245]
              - button "Compare" [ref=e246]
            - generic [ref=e250]:
              - heading "Long Nose Pliers" [level=5] [ref=e251]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e252]:
                - text: "CO₂:"
                - generic [ref=e253]: A
                - generic [ref=e254]: B
                - generic [ref=e255]: C
                - generic [ref=e256]: D
                - generic [ref=e257]: E
            - generic [ref=e258]:
              - generic [ref=e259]: Out of stock
              - generic [ref=e260]: $14.24
          - 'link "Slip Joint Pliers Compare Slip Joint Pliers CO₂: A B C D E $9.17" [ref=e261] [cursor=pointer]':
            - /url: /product/01M6JBE10NN5HHH21T2B43DZAS
            - generic [ref=e262]:
              - img "Slip Joint Pliers" [ref=e263]
              - button "Compare" [ref=e264]
            - generic [ref=e268]:
              - heading "Slip Joint Pliers" [level=5] [ref=e269]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e270]:
                - text: "CO₂:"
                - generic [ref=e271]: A
                - generic [ref=e272]: B
                - generic [ref=e273]: C
                - generic [ref=e274]: D
                - generic [ref=e275]: E
            - generic [ref=e276]: $9.17
          - 'link "Claw Hammer with Shock Reduction Grip Compare Claw Hammer with Shock Reduction Grip CO₂: A B C D E $13.41" [ref=e278] [cursor=pointer]':
            - /url: /product/01M6JBE10RH4TAGF5MPDA8W9HB
            - generic [ref=e279]:
              - img "Claw Hammer with Shock Reduction Grip" [ref=e280]
              - button "Compare" [ref=e281]
            - generic [ref=e285]:
              - heading "Claw Hammer with Shock Reduction Grip" [level=5] [ref=e286]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e287]:
                - text: "CO₂:"
                - generic [ref=e288]: A
                - generic [ref=e289]: B
                - generic [ref=e290]: C
                - generic [ref=e291]: D
                - generic [ref=e292]: E
            - generic [ref=e293]: $13.41
          - 'link "Hammer Compare Hammer CO₂: A B C D E $12.58" [ref=e295] [cursor=pointer]':
            - /url: /product/01M6JBE10TBZ6HBS7KXXZJ3VH4
            - generic [ref=e296]:
              - img "Hammer" [ref=e297]
              - button "Compare" [ref=e298]
            - generic [ref=e302]:
              - heading "Hammer" [level=5] [ref=e303]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e304]:
                - text: "CO₂:"
                - generic [ref=e305]: A
                - generic [ref=e306]: B
                - generic [ref=e307]: C
                - generic [ref=e308]: D
                - generic [ref=e309]: E
            - generic [ref=e310]: $12.58
          - 'link "Claw Hammer Compare Claw Hammer CO₂: A B C D E $11.48" [ref=e312] [cursor=pointer]':
            - /url: /product/01M6JBE10YM2AH231FS496FHQN
            - generic [ref=e313]:
              - img "Claw Hammer" [ref=e314]
              - button "Compare" [ref=e315]
            - generic [ref=e319]:
              - heading "Claw Hammer" [level=5] [ref=e320]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e321]:
                - text: "CO₂:"
                - generic [ref=e322]: A
                - generic [ref=e323]: B
                - generic [ref=e324]: C
                - generic [ref=e325]: D
                - generic [ref=e326]: E
            - generic [ref=e327]: $11.48
          - 'link "Thor Hammer Compare Thor Hammer CO₂: A B C D E $11.14" [ref=e329] [cursor=pointer]':
            - /url: /product/01M6JBE11AMFK3S5FEQ68C2YN1
            - generic [ref=e330]:
              - img "Thor Hammer" [ref=e331]
              - button "Compare" [ref=e332]
            - generic [ref=e336]:
              - heading "Thor Hammer" [level=5] [ref=e337]
              - generic "A = most environmentally friendly, E = higher environmental impact" [ref=e338]:
                - text: "CO₂:"
                - generic [ref=e339]: A
                - generic [ref=e340]: B
                - generic [ref=e341]: C
                - generic [ref=e342]: D
                - generic [ref=e343]: E
            - generic [ref=e344]: $11.14
        - navigation [ref=e348]:
          - list [ref=e349]:
            - listitem [ref=e350]:
              - button "Previous": «
            - listitem [ref=e351]:
              - button "Page-1" [ref=e352] [cursor=pointer]: "1"
            - listitem [ref=e353]:
              - button "Page-2" [ref=e354] [cursor=pointer]: "2"
            - listitem [ref=e355]:
              - button "Page-3" [ref=e356] [cursor=pointer]: "3"
            - listitem [ref=e357]:
              - button "Page-4" [ref=e358] [cursor=pointer]: "4"
            - listitem [ref=e359]:
              - button "Page-5" [ref=e360] [cursor=pointer]: "5"
            - listitem [ref=e361]:
              - button "Next" [ref=e362] [cursor=pointer]: »
  - contentinfo [ref=e364]:
    - generic [ref=e366]:
      - generic [ref=e367]: Learn & Explore
      - generic [ref=e368]:
        - link "Learn Test Automation Hands-on courses for Playwright, Robot Framework, APIs and more" [ref=e370] [cursor=pointer]:
          - /url: https://onlinecourses.testsmith.io
          - generic [ref=e373]:
            - generic [ref=e374]: Learn Test Automation
            - text: Hands-on courses for Playwright, Robot Framework, APIs and more
        - link "API Spector Open-source API testing, mocking and contract testing" [ref=e376] [cursor=pointer]:
          - /url: https://api-spector.dev
          - generic [ref=e379]:
            - generic [ref=e380]: API Spector
            - text: Open-source API testing, mocking and contract testing
        - link "GitHub Source code, issues and contributions" [ref=e382] [cursor=pointer]:
          - /url: https://github.com/testsmith-io/practice-software-testing
          - generic [ref=e385]:
            - generic [ref=e386]: GitHub
            - text: Source code, issues and contributions
    - generic [ref=e387]:
      - generic [ref=e388]:
        - text: This is a DEMO application, used for software testing training purpose. |
        - link "Privacy Policy" [ref=e389] [cursor=pointer]:
          - /url: /privacy
        - text: "| Banner photo by"
        - link "Barn Images" [ref=e390] [cursor=pointer]:
          - /url: https://unsplash.com/@barnimages
        - text: "on"
        - link "Unsplash" [ref=e391] [cursor=pointer]:
          - /url: https://unsplash.com/photos/t5YUoHW6zRo
        - text: .
      - generic [ref=e392]: v2.5 | Built 2026-10-11 | Angular 20.0.5
  - button "Open chat" [ref=e394] [cursor=pointer]
  - button "Show live shop activity" [ref=e398] [cursor=pointer]
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