# ZenLot product definition

Status: approved baseline, 2026-08-14.

## Vision

ZenLot gives a growing FunPay seller one understandable control room for store events, stock, communication, analytics, and permitted automations. The product should make the store feel observable and manageable around the clock without hiding risk or pretending that an unverified action succeeded.

## Positioning

- Category: seller-tech SaaS for FunPay sellers.
- Public wording: for new and growing FunPay sellers; the brand is not positioned specifically at minors.
- Brand character: dark, precise, energetic, premium, and approachable.
- Independence: ZenLot is not an official FunPay product.
- Core promise: the seller sees what is happening and delegates only explicitly configured, reliable actions.

## Primary users

1. A new seller with one store who needs simple setup and protection from missed events.
2. An active seller with daily orders who needs stock, messages, and analytics in one place.
3. A multi-store operator who later needs shared access, limits, and consolidated reporting.

## Problems to solve

- Important orders and messages arrive when the seller is away.
- Store status, stock, and performance are fragmented.
- Repetitive actions consume time and are easy to perform inconsistently.
- Existing automation can be opaque: users cannot see why an action ran or failed.

## Product principles

1. Reliability before feature count.
2. Read-only visibility before write automation.
3. Explicit permissions and reversible actions.
4. Every automation has a log, retry policy, limit, and kill switch.
5. No raw FunPay password storage and no bypass of platform safeguards.
6. Claims on the landing page must be supported by production measurements.
7. The approved seller-tech design system is extended, not reinvented.

## MVP boundary

The first commercial MVP supports one owner and one store:

- authentication and onboarding;
- store connection health;
- read-only orders, messages, lots, and event feed;
- Telegram notifications and smart alerts;
- stock monitoring;
- basic profit analytics and export;
- one permitted, auditable automation after the integration gate passes.

The following are not MVP requirements:

- all twenty catalogue modules;
- native mobile applications;
- multiple stores and team roles;
- autonomous AI replies without safeguards;
- public API and third-party marketplace;
- custom enterprise deployments.

## Catalogue policy

The landing catalogue describes the intended platform. A module is considered available only after it passes the checklist in `docs/DEFINITION_OF_DONE.md`. Until then it must be labelled as planned or hidden from purchase entitlements.

## Pricing status

The displayed prices of 189 / 349 / 499 RUB are hypotheses. They are not final commercial commitments until connector, infrastructure, payment, AI, support, and tax costs are measured. AI usage and extra stores may require separate limits.

## Success metrics

North-star metric: orders correctly processed by ZenLot without manual seller intervention.

Guardrail metrics:

- automation success rate;
- duplicate action rate;
- missed event rate;
- median time to first value;
- connection recovery rate;
- support requests per active store;
- seven-day and thirty-day retention;
- gross margin per plan.

## Current truth

The repository currently delivers a marketing prototype. Product UI, backend, live integrations, billing, and production automations have not yet been implemented. Stage 1 must validate the permitted FunPay integration model before product development expands.
