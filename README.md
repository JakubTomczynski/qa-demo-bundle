# QA Demo Bundle — Playwright + Postman/Newman

Public QA Demo Bundle — ready-made skeletons to showcase.  
---

## Playwright
- Page Object Model (POM)
- Fixtures (classFixtures)
- Allure reporter (trace, video, screenshot, JSON → HTML report)
- axe-core a11y smoke
- CI matrix (Chrome/Firefox)
- Visual regression

### Start
```bash
cd playwright-demo
npm i
npm run test
npm run allure:report && npm run allure:open
```

### Useful commands
```bash
# smoke only
npx playwright test -g @smoke

# regression only
npx playwright test -g @regression

# accessibility only
npx playwright test -g @a11y

# single test
npx playwright test login.spec.ts

# headed mode
npm run test:headed

# open trace
npm run trace:open
```

---

## Postman / Newman
- Collection + environment (`collection.json` + `environment.json`)
- Workflow GitHub Actions (`newman.yml`)

### Local run (Postman)
1. Import `collection.json` and `environment.json`.
2. Default `{{baseUrl}}`: https://fakestoreapi.com
3. Run the full collection – tests check status, schema, SLA.

### Local run (Newman CLI)
```bash
npm i -g newman newman-reporter-htmlextra
newman run collection.json -e environment.json   --reporters cli,htmlextra   --reporter-htmlextra-export newman-report.html
```

Artifact: `newman-report.html`

---

## CI/CD

### Playwright (`ci.yml`)
- runs on Chromium / Firefox 
- artifacts: traces, videos, screenshots
- Allure report generated in CI

### Newman (`newman.yml`)
- runs API collection
- generates HTML report as artifact

---

## Documentation
Full docs are in `/docs`:
- Playwright: how to run & structure
- Accessibility (axe): a11y smoke
- Postman/Newman: API tests & CI
- CI Workflows
- POM map
- Project structure

---

## Example target
Demo repo uses:  
👉 https://www.saucedemo.com
👉 https://jsonplaceholder.typicode.com
👉 https://www.qa-practice.com/

---

## Tags
- `@smoke` — quick sanity
- `@regression` — broader coverage
- `@a11y` — accessibility coverage
- `@visual` - visual testing



## Live Reports
- Allure: https://JakubTomczynski.github.io/qa-demo-bundle/allure/
- Newman: https://JakubTomczynski.github.io/qa-demo-bundle/newman/
