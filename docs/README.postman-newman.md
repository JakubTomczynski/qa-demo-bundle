# Postman / Newman — How to Run & CI

## Local (Postman app)
1. Import `collection.json` + `environment.json`
2. `{{baseUrl}}` = https://fakestoreapi.com
3. Run collection → tests validate status, schema, SLA

## Local (Newman CLI)
```bash
npm i -g newman newman-reporter-htmlextra
newman run collection.json -e environment.json \
  --reporters cli,htmlextra \
  --reporter-htmlextra-export newman-report.html
```

Artifact: `newman-report.html`

## CI
- workflow: `newman.yml`
- generates HTML report as artifact