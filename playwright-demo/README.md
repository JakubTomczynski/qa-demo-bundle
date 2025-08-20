# Playwright Demo

E2E demo using Playwright + TypeScript.

## Start

```bash
npm i
npm run test
npm run allure:report && npm run allure:open
```

## Commands

```bash
# smoke only
npx playwright test -g @smoke

# regression only
npx playwright test -g @regression

# single test
npx playwright test login.spec.ts

# headed mode
npm run test:headed
```

## Structure

- `*.spec.ts` — tests
- `*Page.ts` — POM
- `global-setup.ts` + `storageState.json` — auth
- `accessibility.ts` — axe a11y helper
- `playwright.config.ts` — config
