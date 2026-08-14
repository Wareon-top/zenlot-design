# Architecture decision log

Decisions are append-only. A replaced decision remains in this file and points to its successor.

## ADR-001 — Seller-tech visual system

- Date: 2026-08-14
- Status: accepted
- Decision: the dark seller-tech system with yellow and violet accents, live store metrics, compact controls, and adult language is the permanent ZenLot design foundation.
- Baseline: commit `b48bf68`; local tag `zenlot-style-v1`; remote checkpoint branch `archive/zenlot-style-v1`.
- Consequence: future product screens extend this system and do not restart visual exploration without a new explicit decision.

## ADR-002 — Marketing and product are separate surfaces

- Date: 2026-08-14
- Status: accepted
- Decision: keep the current landing independent from the authenticated product application.
- Consequence: marketing deployments cannot break store operations, and the product can evolve without bloating the landing.

## ADR-003 — Integration feasibility is the first delivery gate

- Date: 2026-08-14
- Status: accepted
- Decision: no production FunPay write automation is built before the permitted integration method and its failure behaviour are verified.
- Consequence: Stage 1 precedes the product backend and prevents investment in an unsafe connector assumption.

## ADR-004 — Modular monolith with isolated workers

- Date: 2026-08-14
- Status: accepted
- Decision: start with one versioned API and domain modules, plus isolated connector and automation workers.
- Consequence: the system stays operable for the first 100 stores while preserving clear extraction boundaries.

## ADR-005 — Observable and reversible automation

- Date: 2026-08-14
- Status: accepted
- Decision: every module requires idempotency, limits, logs, failure handling, feature flags, and a kill switch.
- Consequence: a feature is not complete when only its happy path works.

## ADR-006 — Three environment promotion path

- Date: 2026-08-14
- Status: accepted
- Decision: active integration happens on `development`, acceptance on `staging`, and production source on `main`.
- Consequence: direct production changes are reserved for documented emergency fixes.

## ADR-007 — Twenty modules are a roadmap, not the MVP

- Date: 2026-08-14
- Status: accepted
- Decision: the MVP contains read-only visibility and a small set of verified modules; catalogue presence does not equal availability.
- Consequence: pricing entitlements and marketing copy must distinguish released and planned modules.

## ADR-008 — Private source, public deployment artefacts

- Date: 2026-08-14
- Status: accepted
- Decision: the ZenLot source repository is private. Only reviewed build artefacts intended for customers may be publicly deployed.
- Consequence: repository visibility never authorizes committing secrets or customer data. Credentials, FunPay session material, databases, exports, uploads, logs with personal data, and backups use dedicated secret or data storage outside Git.
