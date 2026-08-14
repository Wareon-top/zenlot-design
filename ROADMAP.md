# ZenLot delivery roadmap

The roadmap is ordered by dependency. A later stage cannot start as a production commitment until the previous gate is accepted.

## Stage 0 — foundation and governance

- [x] Approve the seller-tech visual direction.
- [x] Preserve the approved landing baseline.
- [x] Define the product and MVP boundary.
- [x] Define the target architecture.
- [x] Create the ordered roadmap.
- [x] Create an architecture decision log.
- [x] Define development, staging, and production.
- [x] Add automated repository validation.
- [x] Define project and module completion criteria.

Exit gate: documentation, environment configuration, validation, production baseline, and recoverable style checkpoint are present in Git.

## Stage 1 — FunPay feasibility gate

- Obtain written clarification on supported integration methods and permitted actions.
- Confirm whether an official or partner API exists.
- Define credential and session handling without raw password storage.
- Build a one-store, read-only connector spike.
- Test deduplication, rate limiting, reconnect, CAPTCHA stop, and kill switch.
- Run the connector continuously for at least 72 hours.
- Record a Go, Restricted Go, Pivot, or No-Go decision.

Exit gate: a documented, stable, and acceptable integration path exists.

## Stage 2 — discovery and MVP specification

- Interview 10–15 active sellers across three operating segments.
- Rank problems by frequency, cost, and willingness to pay.
- Validate pricing and unit economics.
- Finalize user journeys and acceptance criteria.
- Select the first permitted automation.

Exit gate: signed-off MVP scope and measurable success criteria.

## Stage 3 — platform foundation

- Create the product web application, API, connector worker, job worker, and admin surface.
- Provision PostgreSQL, Redis, queues, secret storage, monitoring, and backups.
- Add migrations, CI, staging deployment, feature flags, and audit logging.
- Establish security boundaries and tenant isolation.

Exit gate: a deployable empty product works in staging with observability and restore-tested storage.

## Stage 4 — accounts and onboarding

- Registration, verification, login, recovery, and session management.
- Workspace and first-store onboarding.
- Connection status, settings, support entry point, and audit history.
- Responsive product navigation based on the approved design system.

Exit gate: a test user can create an account and reach a connected-store shell safely.

## Stage 5 — read-only product

- Orders, messages, lots, stock, event feed, and connection health.
- Telegram Control, Smart Alerts, Profit Analytics, and Sales Export.
- Reconciliation, stale-data warnings, and connector diagnostics.

Exit gate: 5–10 sellers can use ZenLot without any automatic FunPay write action.

## Stage 6 — first automation

- Implement one permitted vertical slice end to end.
- Add dry run, confirmation mode, idempotency, retries, limits, audit, and kill switch.
- Roll out to 1, then 5, then 20 stores through a feature flag.

Exit gate: measured reliability meets the module definition of done.

## Stage 7 — billing and commercial controls

- Validate plans and entitlements.
- Implement subscription lifecycle, payment webhooks, grace periods, cancellation, refunds, receipts, and usage limits.
- Add support and billing tools to the admin panel.

Exit gate: a full paid subscription lifecycle passes staging tests.

## Stage 8 — security and legal readiness

- Publish terms, privacy, retention, deletion, and consent policies.
- Confirm personal-data, minor-user, tax, payment, and receipt obligations with specialists.
- Complete security review, secret scan, restore drill, and incident runbook.

Exit gate: legal and security launch approval is recorded.

## Stage 9 — closed beta

- Expand 1 -> 5 -> 20 -> 50 -> 100 active stores.
- Load-test connector bursts and worker queues.
- Measure missed events, duplicate actions, recovery time, retention, support load, and margin.

Exit gate: target reliability and support capacity are demonstrated.

## Stage 10 — public launch

- Reconcile landing claims with measured product behaviour.
- Publish documentation, status page, onboarding, and support expectations.
- Release only completed modules; mark the remainder as planned.

## Stage 11 — module expansion

1. Stock Sync and the approved delivery workflow.
2. Quick Replies and Notify Engine.
3. Auto Raise and permitted lot management.
4. GPT Consultant and AI Reviews with human-control modes.
5. Buyer Segments, Smart Discounts, and Anti-Spam.
6. Multi Accounts, team roles, API Connector, and specialized game modules.
