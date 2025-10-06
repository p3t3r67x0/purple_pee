---
slug: collaborative-investigation-workflows
title: "Collaborative Investigation Workflows in NetScanner"
description: Align security, networking, and platform teams with shared pivots, annotation habits, and runbooks to accelerate infrastructure investigations.
date: 2025-10-01
updated: 2025-10-01
author: NetScanner Team
tags:
  - collaboration
  - investigation
  - workflows
  - operations
canonical: https://netscanner.io/blog/collaborative-investigation-workflows
ogImage: /logo-300x300.png
published: true
related:
  - detecting-infrastructure-drift
  - advanced-pivoting-techniques
  - getting-started-with-netscanner
---

## Overview

Infrastructure intelligence scales when teams move in lockstep. NetScanner already connects domains, IPs, ASNs, and certificates—this guide layers on **people coordination patterns** so investigations stay fast, auditable, and repeatable.

---

## Team Roles at a Glance

| Role               | Expertise                          | Primary NetScanner Views       |
| ------------------ | ---------------------------------- | ------------------------------ |
| Security analyst   | Threat context, attribution        | Graph, certificates            |
| Network engineer   | Routing, peering, provider history | ASN, IP intel                  |
| Platform engineer  | Deploy cadence, service metadata   | DNS, domain inventory          |
| Incident commander | Coordination, comms                | Saved investigations (roadmap) |

> Clarity on who owns which pivot shortens time-to-insight during high-pressure events.

---

## Runbook Anatomy

1. Trigger definition (alert type, severity bands).
2. Primary pivot chain (e.g. cert → SAN → domains → IP blocks).
3. Expected artifacts (screenshots, JSON exports, NetScanner deep links).
4. Decision matrix (contain, monitor, escalate).
5. Feedback loop: log findings, update heuristics, request product features.

### Example Runbook Snippet

```yaml
playbook: certificate-anomaly
severity: high
steps:
  - name: validate-alert
    action: "Confirm alert context matches detection rule"
  - name: pivot-san
    action: "Open NetScanner cert view, enumerate SAN additions"
  - name: ownership-check
    action: "Ping service owner in #infra-ops with drift summary"
  - name: ticket-link
    action: "Attach Jira ticket to NetScanner annotation"
```

---

## Shared Context Habits

- **Annotate** pivot notes directly in the UI (roadmap: team annotations) to avoid scattered docs.
- **Tag** entities with ownership metadata (service name, system ID) for future automation.
- **Bookmark** live investigations; reuse them as warm-start context for similar events.

| Habit                                        | Benefit                  |
| -------------------------------------------- | ------------------------ |
| Consistent naming (`team/service/component`) | Smooth hand-offs         |
| Linking decisions to artifacts               | Reduces re-litigation    |
| Centralized channel for updates              | Avoids fragmented status |

---

## Async Collaboration Patterns

| Scenario                | Recommended Pattern                                  | Tooling               |
| ----------------------- | ---------------------------------------------------- | --------------------- |
| Follow-the-sun response | Assign shift lead, handoff doc with NetScanner links | Wiki + Slack          |
| Advisory vs incident    | Advisory gets low-priority queue; incidents escalate | Ticketing integration |
| Vendor outreach         | Share NetScanner exports with vendor SOC             | Secure file share     |

### Meeting Alternative

- Use screen-share recordings + annotated screenshots instead of ad-hoc meetings.
- Ship digest emails summarizing pivots, signals, and outstanding questions.

---

## Measuring Collaboration Health

| Metric                 | Indicator                                    | Data Source                    |
| ---------------------- | -------------------------------------------- | ------------------------------ |
| Time-to-first-response | Slow? need clearer on-call rotation          | Ticket timestamps              |
| Investigation touches  | Too many? runbook ambiguous                  | NetScanner audit log (planned) |
| Reopened tickets       | Frequent? knowledge isn't retention-friendly | Post-incident reviews          |

---

## Future Enhancements to Watch

- Shared investigation timelines with inline screenshots.
- Comment threads anchored to specific graph nodes or records.
- API endpoints for exporting annotation history into knowledge bases.

---

## Related Reading

- [Detecting Infrastructure Drift](/blog/detecting-infrastructure-drift)
- [Advanced Pivoting Techniques](/blog/advanced-pivoting-techniques)
- [Getting Started with NetScanner](/blog/getting-started-with-netscanner)

---

## Changelog

| Date       | Change              |
| ---------- | ------------------- |
| 2025-10-01 | Initial publication |
