# Accessibility — axe a11y smoke

Minimal accessibility smoke test using `@axe-core/playwright`.

---

## What it checks
- Color contrast  
- ARIA, landmarks, labels  
- Common WCAG 2.2 issues  

---

## Where
- `a11y.spec.ts` — test suite  
- `accessibility.ts` — AxeBuilder config  

---

## Run
```bash
npx playwright test a11y.spec.ts
```

---

## Customization
```ts
withTags(['wcag2a', 'wcag2aa'])
exclude() or disableRules() // ignore noisy rules
```

