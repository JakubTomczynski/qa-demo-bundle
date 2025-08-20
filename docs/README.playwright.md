# Playwright — How to Run & Structure

## Requirements
- Node 20+
- Playwright browsers: `npx playwright install --with-deps`

## Run
```bash
npm i
npm run test              # all tests headless
npm run test:headed       # tests with visible browser
npm run trace:open        # open last trace
```

## Reporting (Allure)
```bash
npm run allure:report
npm run allure:open
```
JSON: `allure-results/` → HTML: `allure-report/`

## Flags
```bash
npx playwright test -g @smoke
npx playwright test -g @regression
npx playwright test login.spec.ts
```

## Structure
- `playwright.config.ts` — config
- `global-setup.ts` + `storageState.json` — login/auth
- `*.spec.ts` — tests (login, cart, a11y, seed)
- `*Page.ts` — POM
- `accessibility.ts` — axe-core helper
