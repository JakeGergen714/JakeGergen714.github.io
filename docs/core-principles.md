# Core Principles (Internal)

This document defines how we operate as a build‑and‑run engineering partner. It’s written for internal alignment and enforcement. On the public site, we reference these ideas in simpler words (outcomes, not process).

## 1) Reliability by Design

We build reliable, secure, well‑documented, well‑tested, observable systems that “just work.” Reliability is the product.

- Definition: Design for correctness, safety, and resilience from day one. Security, testability, operability, and documentation are first‑class—not afterthoughts.
- Why it matters: Stable software compounds trust and value. It lowers support cost, unlocks growth, and protects brand and data.

### Non‑negotiables

- Security by default (least privilege, secret hygiene, patching)
- Testability at every layer (unit → integration → E2E where it pays off)
- Observability (logs, metrics, traces) wired in before go‑live
- Documentation that enables operations and change (README, ADRs, runbooks)
- Resilience patterns (timeouts, retries, backoff, idempotency, circuit breakers)

### Practices & Standards

- Architecture
  - Failure modes enumerated with timeouts and sane defaults
  - Idempotent handlers for external events and payments
  - Backpressure and bulkheads on external calls
- Security
  - OWASP ASVS L2 baseline; no secrets in code; MFA on all access
  - Static analysis and secret scanning on every PR (CodeQL / Trivy / Gitleaks)
  - Dependency scanning and SBOMs (Snyk / Dependabot / Trivy)
- Testing
  - Testing pyramid: fast unit tests, integration tests for boundaries, lean E2E for the happy path
  - Minimum coverage: 80% statements/branches on core packages (exceptions documented)
- Observability
  - Structured JSON logs with correlation IDs
  - Metrics for throughput, errors, latency (p50/p95/p99)
  - Distributed tracing with OpenTelemetry
  - Dashboards pre‑built for golden signals; alerts with sensible thresholds
- Documentation
  - ADRs for significant decisions
  - Service README includes setup, run, deploy, rollback
  - Runbook with common issues, SLOs, and escalation path

### Measures / SLOs

- Availability target: ≥ 99.9% for externally facing services (unless otherwise agreed)
- Latency: p95 under agreed thresholds per endpoint (documented in runbook)
- MTTR: median < 4 hours for Sev‑2 incidents (care plan scope)
- Security: critical vulns remediated within 72 hours; high within 14 days

---

## 2) Run What We Build

We deploy on our managed stack and integrate into our observability/security ecosystem (e.g., Splunk/Grafana/Sentry). We continuously scan and patch. We keep dependencies on supported LTS versions so systems continue to work.

- Definition: One accountable team builds and operates the software end‑to‑end.
- Why it matters: Fewer handoffs, faster fixes, predictable reliability, and a clear ownership model.

### Platform & Tooling (illustrative)

- CI/CD: GitHub Actions with required checks, protected branches
- IaC: Terraform/Terragrunt; env config via secrets manager
- Containers: Docker with pinned base images; Trivy scan in CI
- Observability: OpenTelemetry → Grafana/Tempo/Prometheus or Splunk/Sentry
- Security scanning: CodeQL, Snyk/Dependabot, secret scanning
- Dependency policy: stay on current or active LTS within 30 days of release; no EOL

### Operational Practices

- Deploy: rolling or blue/green; zero‑downtime where feasible
- Backups: encrypted, tested restores; DR with documented RTO/RPO
- Access: least privilege, short‑lived creds, audit trails
- Config: 12‑factor; no mutable state in containers
- Incident: on‑call rotation, runbook, blameless postmortems with action items

### Measures / Guardrails

- Vulnerability backlog: 0 criticals; highs < 14 days
- Dependency max age: no unsupported/EOL libraries
- Patch window: monthly routine; out‑of‑band for criticals
- Observability coverage: 100% services with logs, metrics, traces and dashboards

---

## 3) Outcome Over Orchestration

Clients give us a goal and constraints; we deliver results. We shield them from technical orchestration and vendor wrangling.

- Definition: We are measured by outcomes—not ticket counts. We simplify the experience for the client.
- Why it matters: Clear accountability, faster progress, less cognitive load for the business.

### Ways of Working

- Single accountable owner per engagement
- Shape small, high‑ROI slices; estimate first; client approves scope before build
- Weekly demos/updates; one communication channel; no jargon
- Acceptance criteria tied to business impact (revenue, time saved, error reduction)
- Change management: transparently re‑estimate and re‑prioritize as we learn

### Measures

- Cadence: usable release at least every 1–2 weeks during active build
- Forecast accuracy: ±20% variance on approved estimates at the epic level
- Lead time and cycle time trending down across the engagement
- Rework rate within acceptable bounds (tracked via PR tags/post‑release fixes)
- Client satisfaction: CSAT/NPS measured at key milestones

---

## Checklists

### Readiness to Ship (Go‑Live)

- [ ] Security checks passed (static, dependency, secret scanning)
- [ ] Runbook, dashboards, alerts in place; on‑call briefed
- [ ] Backups configured; restore tested; DR documented
- [ ] SLOs defined and monitored for key endpoints
- [ ] Tests passing; coverage threshold met or exception recorded
- [ ] ADRs merged; README complete; health endpoint present

### Monthly Care Review

- [ ] Dependency updates applied; no EOL runtimes
- [ ] Vulnerability backlog triaged; criticals=0, highs < 14 days
- [ ] Performance and error budgets reviewed; issues prioritized
- [ ] Top support tickets analyzed; improvements queued
- [ ] Roadmap and client updates delivered

---

## Anti‑Goals

- Shipping without observability, tests, or runbooks
- Accumulating a vulnerability or dependency backlog
- Surprising the client with scope, cost, or timelines
- Exposing clients to internal vendor/tool complexity

---

## Glossary

- ADR: Architecture Decision Record
- SLO/SLA: Service Level Objective/Agreement
- MTTR: Mean Time To Recovery
- RTO/RPO: Recovery Time Objective/Recovery Point Objective
