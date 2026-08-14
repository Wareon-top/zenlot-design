# Definition of done

## Project change

- [ ] Scope and acceptance criteria are written.
- [ ] The change is implemented in the correct environment branch.
- [ ] `npm run validate` passes.
- [ ] No secrets or production personal data are committed.
- [ ] The secret scan in `npm run validate` passes.
- [ ] Desktop and mobile behaviour are checked when UI changes.
- [ ] Accessibility names and keyboard behaviour are checked.
- [ ] Logs and errors are understandable without exposing secrets.
- [ ] Documentation and decision records are updated when behaviour changes.
- [ ] Staging evidence exists before production promotion.
- [ ] Rollback or disable procedure is known.

## Automation module

- [ ] User problem and expected outcome are documented.
- [ ] Platform compatibility and permission are verified.
- [ ] Input events and output actions are versioned.
- [ ] Configuration UI and safe defaults exist.
- [ ] Dry-run or confirmation mode exists where appropriate.
- [ ] Processing is idempotent.
- [ ] Retries are bounded and observable.
- [ ] Per-store limits and a circuit breaker exist.
- [ ] Module and global kill switches are tested.
- [ ] Intent, attempts, and results are present in the audit log.
- [ ] Unit, integration, replay, and failure-path tests pass.
- [ ] Metrics, alerts, support instructions, and user documentation exist.
- [ ] Plan entitlement and usage limits are enforced server-side.
- [ ] Rollout succeeds for 1, then 5, then 20 stores before general release.

## Stage gate

- [ ] Every checklist item for the stage is complete or explicitly deferred.
- [ ] Deferred work has an owner, reason, and target stage.
- [ ] Risks and measurements are recorded.
- [ ] The next stage has clear inputs and a named exit gate.
- [ ] The accepted commit is recoverable through a tag or checkpoint branch.
