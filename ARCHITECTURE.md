# ZenLot target architecture

Status: Stage 0 reference architecture. It becomes implementation architecture only after the Stage 1 integration gate.

## Current system

The current repository is a static marketing site hosted from `main`. It has no application backend, persistent data, user accounts, billing, or FunPay connector.

## Target boundaries

```text
Marketing web -> Product web -> API -> PostgreSQL
                                 |-> Redis / job queue
                                 |-> Notification worker
                                 |-> Automation worker
FunPay <-> Connector service ----|-> Canonical event stream
Admin web -----------------------> API / audit log
```

The product should begin as a modular monolith plus isolated workers. Independent microservices are introduced only when load, security isolation, or deployment ownership provides a measured reason.

## Surfaces

- `zenlot.ru` or the current Pages URL: marketing.
- `app.zenlot.ru`: authenticated seller product.
- `api.zenlot.ru`: versioned backend API.
- connector worker: isolated platform communication.
- automation worker: executes permitted rules from canonical events.
- admin surface: support, billing, diagnostics, and kill switches.

## Canonical event flow

1. Connector observes a platform change.
2. The payload is normalized into a ZenLot event.
3. Event identity is checked for duplication.
4. The event is stored before downstream processing.
5. Subscribed modules receive queued work.
6. Each action records intent, attempt, result, and external reference.
7. Failed work follows bounded retry and dead-letter policies.
8. The dashboard reads stored state; it does not scrape FunPay directly.

## Initial data model

- users, sessions, workspaces, memberships;
- stores, connections, connection_health;
- lots, inventory_items, stock_movements;
- orders, order_items, messages;
- events, jobs, job_attempts, dead_letters;
- modules, module_installations, automation_rules;
- action_intents, action_results, audit_logs;
- plans, subscriptions, entitlements, usage_counters;
- notifications, support_cases, incidents.

Every store-owned row carries a workspace identifier. Authorization is enforced in the API and database access layer, not only in the interface.

## Reliability rules

- At-least-once event delivery with idempotent consumers.
- Persist before acknowledgement.
- Exponential backoff with maximum attempts.
- Per-store and global rate limits.
- Circuit breaker for authentication, CAPTCHA, and platform errors.
- Per-module feature flag and global kill switch.
- Reconciliation jobs detect stale or missing state.
- UTC in storage; explicit user timezone in presentation.

## Security rules

- Never store raw FunPay passwords.
- Treat session material as a credential: encrypt, scope, rotate, and never log it.
- Separate secrets from repository configuration.
- TLS for all external traffic and encryption for sensitive stored values.
- Least-privilege roles for users, support, and administrators.
- Immutable security and automation audit trail.
- Data minimization and explicit retention periods.
- No CAPTCHA, anti-bot, or platform-control bypass.

## Environment model

Environment definitions live in `config/environments/` and contain no secrets.

- development: local work and synthetic data.
- staging: release candidate, test integrations, non-production billing.
- production: public service and real customer data.

Production data must never be copied into development. Promotion follows `development -> staging -> main`; database migrations are forward-tested in staging before production.

## Initial deployment target

The first 100-store release does not require a large monolithic server. Prefer separate failure domains for the web/API and connector workers, with PostgreSQL backups stored outside the application host. Final sizing happens after the connector spike provides request and memory measurements.

## Observability

- structured logs with correlation, workspace, store, event, and job identifiers;
- metrics for connector lag, queue depth, action success, retries, authentication loss, and missed reconciliation;
- alerting for elevated failures and stale stores;
- dashboards split by environment;
- incident timeline connected to audit records.
