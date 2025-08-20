# Postman / Newman Demo

API testing demo with Postman (manual) + Newman (CLI + CI).

---

## Local run (Postman)

1. Import `collection.json` and `environment.json` into Postman.
2. Base URL is set via variable:  
   ```
   {{baseUrl}} = https://jsonplaceholder.typicode.com
   ```
3. Run the collection to verify endpoints.

---

## Local run (Newman CLI)

```bash
# Install Newman + HTML reporter
npm i -g newman newman-reporter-htmlextra

# Run the collection
newman run collection.json -e environment.json   --reporters cli,htmlextra   --reporter-htmlextra-export newman-report.html
```

Output:  
- Console logs (CLI).  
- Rich HTML report → `newman-report.html`.

---

## CI/CD

- Workflow: `.github/workflows/ci.yml` (combined with Playwright + Allure).  
- Newman step runs API collection and publishes `newman-report.html` as artifact.  

When GitHub Pages is enabled, reports are available live at:

- Allure: `https://<your-user>.github.io/<repo>/allure/`  
- Newman: `https://<your-user>.github.io/<repo>/newman/`  

---

## Example Targets

This demo uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) as fake API:  

- `/todos/1` → GET single todo  
- `/posts` → GET/POST blog posts  
- `/users` → GET user list  

---

## Tags

- **Smoke** — quick status checks  
- **Contract** — validate response schema  
- **Performance** — basic SLA assertions (response time)
