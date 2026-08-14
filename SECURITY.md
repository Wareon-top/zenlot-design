# ZenLot security policy

## Repository boundary

The ZenLot source repository is private. Private visibility limits who can read source, but it is not a secret store and not a customer-data system.

Never commit:

- FunPay passwords, cookies, session identifiers, or authorization headers;
- API keys, payment secrets, webhook secrets, SSH keys, or certificates;
- production `.env` files;
- database files, dumps, snapshots, or migrations containing real records;
- buyer messages, orders, personal data, exports, uploads, or screenshots with user data;
- application logs containing tokens or personal information;
- backups or incident evidence containing sensitive payloads.

Use synthetic fixtures for development and staging. Sensitive runtime values belong in the deployment platform's secret manager; customer data belongs in the appropriate encrypted database or object storage with access logging and retention controls.

## Automated checks

`node scripts/validate-project.mjs` checks tracked filenames and common high-risk secret formats. This reduces accidental disclosure but does not replace review or platform secret scanning.

Before every push:

```bash
node scripts/validate-project.mjs
git diff --check
git diff --cached
```

## Credential handling

- Do not request or store a raw FunPay password.
- Treat any permitted session material as a high-value credential.
- Encrypt credentials at rest and in transit.
- Separate keys by environment and service.
- Redact credentials before logging.
- Rotate credentials after suspected exposure or staff-access changes.
- Grant production access by least privilege and record administrative use.

## Security incident

If a secret or personal record is committed:

1. Stop deployment and disable the affected integration.
2. Revoke or rotate the credential immediately; deleting the Git line is not remediation.
3. Preserve a minimal incident record outside public logs.
4. Remove the sensitive material from active Git history using an approved history-rewrite procedure.
5. Audit access and downstream use.
6. Follow the applicable user and regulator notification process.
7. Record the root cause and add a prevention check.

## Reporting

Security findings must be sent through the private project support channel designated before beta. Do not publish vulnerability details in a public issue.
