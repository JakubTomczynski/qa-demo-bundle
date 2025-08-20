# CI — GitHub Actions

This repo contains 2 workflows:

## Playwright (`ci.yml`)
- Matrix: Chromium, Firefox, WebKit
- Artifacts: traces, videos, screenshots
- Generates Allure report

Tip: clean `allure-results/` before run:
```yaml
- name: Clean allure
  run: |
    rm -rf allure-results allure-report || true
    mkdir -p allure-results
```

## Newman (`newman.yml`)
- Installs `newman` + `htmlextra`
- Runs API collection
- Artifact: `newman-report.html`
