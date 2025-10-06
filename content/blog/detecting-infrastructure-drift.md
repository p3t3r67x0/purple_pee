---
slug: detecting-infrastructure-drift
title: "Detecting Infrastructure Drift with Scheduled NetScanner Snapshots"
description: Build a cadence of automated snapshots, scoring rules, and routing playbooks to catch asset drift before it becomes an incident.
date: 2025-10-01
updated: 2025-10-01
author: NetScanner Team
tags:
  - monitoring
  - drift-detection
  - automation
  - operations
canonical: https://netscanner.io/blog/detecting-infrastructure-drift
ogImage: /logo-300x300.png
published: true
related:
  - building-automations-with-the-api
  - advanced-pivoting-techniques
  - collaborative-investigation-workflows
---

## Overview

Infrastructure rarely stays still. Providers rotate IPs, certs renew, SaaS vendors expand footprints and adversaries probe for coverage gaps. NetScanner snapshots paired with lightweight automation create a **closed-loop drift detection program** that keeps you informed without drowning teams in noise.

---

## Why Drift Detection Matters

| Trigger                               | Risk if Missed                         | NetScanner Angle                        |
| ------------------------------------- | -------------------------------------- | --------------------------------------- |
| Expired cert replaced with wildcard   | Users silently migrate to shared edge  | Track SAN deltas + certificate metadata |
| DNS MX change                         | Mail routed through untrusted relays   | Snapshot MX/TXT results and diff        |
| ASN / prefix churn                    | Assets move into new provider policies | Monitor ASN → prefix map recycling      |
| Newly observed domain on shared infra | Potential brand or shadow IT           | Compare co-hosted domains per snapshot  |

> Drift is not always malicious—but lack of awareness magnifies impact during incident investigations.

---

## Baseline Snapshot Workflow

1. Define scope: ASNs, domains, IP ranges, certificate fingerprints.
2. Schedule API-driven snapshots (cron, CI runner, or managed automation).
3. Persist responses in a diff-friendly store (Git, object storage, SQLite).
4. Normalize before diffing (sorted lists, canonical JSON whitespace removal).
5. Score changes → route anomalies to the right owners.

### Data Retention Primer
| Surface          | Recommended Retention | Why                         |
| ---------------- | --------------------- | --------------------------- |
| Certificates     | 90 days               | Track re-issue cadence      |
| DNS answers      | 30 days               | Highlight recurring changes |
| IP → Domain maps | 14 days               | Spot short-lived co-hosting |

---

## Scheduling Strategy

| Scope                    | Cadence    | Notes                             |
| ------------------------ | ---------- | --------------------------------- |
| VIP production domains   | 15 minutes | Tight SLAs, use staggered offsets |
| Core ASNs                | Hourly     | Rotate subsets to avoid spikes    |
| Certificate fingerprints | Daily      | Align with CT monitoring          |
| Long-tail assets         | Weekly     | Bundle into low-priority queue    |

```bash
# Example: trigger snapshot jobs via cron calling a queue worker
*/15 * * * * /usr/local/bin/netscanner-snapshot --targets vips.yaml --priority high
0 * * * * /usr/local/bin/netscanner-snapshot --targets asn-rotation.yaml --priority medium
```

---

## Signal Thresholds & Alert Routing

- Combine multi-signal evidence before escalating (e.g. DNS + cert + ASN shift).
- Set per-surface thresholds: `>=5` new SAN entries or `>=2` MX changes within 24h.
- Route by ownership metadata stored alongside seeds.

```ts
function shouldAlert(delta: DriftDelta) {
  const score = (delta.certChange ? 3 : 0) + (delta.mxChange ? 2 : 0) + delta.newDomains
  return score >= delta.threshold
}
```

| Delta Type          | Default Threshold | Owner               |
| ------------------- | ----------------- | ------------------- |
| MX record change    | 1 per day         | Messaging team      |
| New cert SAN        | 3 per day         | Web platform        |
| ASN migration       | any               | Network engineering |
| Newly hosted domain | 5 per day         | Security operations |

---

## Triage Playbook Snapshot

1. Validate snapshot freshness (ensure data < 10 minutes old for hot scopes).
2. Confirm intentional changes via change calendar / deploy notes.
3. Pivot into NetScanner UI for impacted entities.
4. Annotate drift results (e.g. Jira ticket ID) for audit trail.
5. Close loop by updating ownership metadata if asset moved permanently.

### Collaboration Quick Wins

| Action                           | Outcome                       |
| -------------------------------- | ----------------------------- |
| Auto-open Slack thread per alert | Keeps domain experts visible  |
| Attach NetScanner deep links     | Accelerates context gathering |
| Capture false positive reasons   | Improves scoring policy       |

---

## Hardening & Next Steps

- Layer real-time Certificate Transparency (CT) webhooks to cut detection latency.
- Mirror snapshots into object storage + versioning for forensics.
- Feed drift metrics into executive dashboards (uptime vs. change volume).

---

## Related Reading

- [Building Automations with the API](/blog/building-automations-with-the-api)
- [Advanced Pivoting Techniques](/blog/advanced-pivoting-techniques)
- [Collaborative Investigation Workflows](/blog/collaborative-investigation-workflows)

---

## Changelog

| Date       | Change              |
| ---------- | ------------------- |
| 2025-10-01 | Initial publication |
