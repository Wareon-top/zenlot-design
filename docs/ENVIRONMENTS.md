# Environments and release flow

## Development

- Branch: `development`.
- Configuration: `config/environments/development.json`.
- Purpose: active integration, synthetic fixtures, and local UI work.
- Data: synthetic or explicitly created test data only.
- Local URL: `http://localhost:8080`.

Run:

```bash
npm run validate
npm run serve
```

## Staging

- Branch: `staging`.
- Configuration: `config/environments/staging.json`.
- Purpose: release candidates, end-to-end tests, connector sandboxing, and acceptance.
- Data: dedicated test users and stores; never a production database copy.
- Public URL: intentionally pending until the authenticated application is provisioned.

## Production

- Branch: `main`.
- Configuration: `config/environments/production.json`.
- Current surface: marketing-only GitHub Pages site.
- Public URL: `https://wareon-top.github.io/zenlot-design/`.
- Data: no customer data exists in the current static site.

## Promotion

1. Create a focused branch from `development`.
2. Run `npm run validate` and review the diff.
3. Merge into `development` for integration.
4. Promote a known commit to `staging` for acceptance.
5. Record test evidence and known limitations.
6. Promote the same tested commit to `main`.
7. Tag or checkpoint accepted product milestones.

Hotfixes start from `main`, pass validation, then are merged back into `staging` and `development`.

## Configuration and secrets

- JSON files in `config/environments/` are public, non-secret declarations.
- `.env.example` documents variable names only.
- Real credentials belong in the deployment platform's secret store.
- Production secrets must never be reused in staging or development.
- Logs must redact tokens, cookies, authorization headers, and personal data.

## Current limitation

Only the production marketing URL is deployed today. Staging receives a public URL when Stage 3 provisions the product application; inventing a placeholder service during Stage 0 would create a false operational dependency.
