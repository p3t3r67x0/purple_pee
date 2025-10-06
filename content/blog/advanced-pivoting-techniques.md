---
slug: advanced-pivoting-techniques
title: "Advanced Pivoting Techniques for Infrastructure Mapping"
description: Chain together DNS, ASN, IP, and SSL pivots to uncover hidden relationships and infrastructure clusters.
date: 2025-09-24
updated: 2025-09-24
author: NetScanner Team
tags:
  - pivoting
  - analysis
  - ssl
  - dns
  - methodology
canonical: https://netscanner.io/blog/advanced-pivoting-techniques
ogImage: /logo-300x300.png
published: true
related:
  - getting-started-with-netscanner
  - building-automations-with-the-api
---

## Overview

Infrastructure analysis shines when you combine multiple data surfaces. This tutorial provides **repeatable pivot sequences** to expand small seeds into meaningful infrastructure clusters while reducing false positives.

---

## Core Pivot Matrix

| Source | Pivot  | Reveal                     | Follow-Up                       |
| ------ | ------ | -------------------------- | ------------------------------- |
| Domain | A/AAAA | Hosting IP                 | Reverse PTR / co-hosted domains |
| Domain | MX     | Mail provider footprint    | Other zones using provider      |
| Domain | NS     | DNS authority scope        | Enumerate sibling zones         |
| IP     | PTR    | Candidate canonical domain | Cert / forward DNS              |
| IP     | Cert   | Multi-tenant SAN set       | Pivot each SAN → domain intel   |
| ASN    | Prefix | Surface expansion          | Sample IPs → reverse / certs    |

---

## Converging Evidence Strategy

| Signal Pair                           | Confidence Gain | Example                          |
| ------------------------------------- | --------------- | -------------------------------- |
| Shared NS + Shared Cert SAN           | Medium-High     | Multi-site same hosting cluster  |
| Shared NS + Shared IP block           | Medium          | Typical managed hosting platform |
| Shared Cert SAN + Reverse PTR pattern | High            | Coordinated service naming       |

> Heuristic: Avoid strong attribution decisions on a **single** weak signal (e.g. one reused cert SAN on a CDN edge IP).

---

## Structured Workflow

1. Seed: choose one domain or ASN.
2. Collect baseline: A/AAAA, MX, NS, SOA, cert fingerprint.
3. Expand IPs → reverse lookups + co-host enumeration.
4. Merge SAN graph (dedupe & classify wildcard vs exact SANs).
5. Cluster by: (NS set, cert fingerprint, ASN, IP block /24 or /48).
6. Score clusters (e.g. +2 shared NS, +3 same cert, +1 same ASN, threshold >=4 for deeper audit).

Cluster scoring pseudo-snippet:
```ts
function scoreCluster(c: { sharedNS: boolean; sharedCert: boolean; sharedASN: boolean }) {
  return (c.sharedNS ? 2 : 0) + (c.sharedCert ? 3 : 0) + (c.sharedASN ? 1 : 0)
}
```

---

## Graph View Techniques

- Isolate a dense area via lasso (planned) or zoom to reduce cognitive overload.
- Look for nodes with high degree (hubs) → potential infra pivots.
- Color & shape cues: leverage differing entity visual encodings.

### Visual Heuristics
| Pattern                                         | Interpretation             |
| ----------------------------------------------- | -------------------------- |
| Many domains → one IP → shared cert             | Likely shared hosting tier |
| Divergent SAN entries crossing unrelated themes | CDN / edge / SaaS platform |
| Repeated ASN + NS pairing                       | Managed provider segment   |

---

## Anti-Patterns & Noise Control

| Anti-Pattern                | Issue                    | Mitigation               |
| --------------------------- | ------------------------ | ------------------------ |
| Treating CDN edges as owned | False ownership          | Filter known CDN ASNs    |
| Blind trust in WHOIS org    | Generic registrant reuse | Use multiple signals     |
| Over-valuing wildcard SANs  | Wildcards broad & noisy  | Weight exact SANs higher |

---

## Next Pivots

- Feed clusters into automation pipeline → continuous drift detection.
- Overlay port scan enrichment (future live scan) for service fingerprinting.
- Track cert issuance deltas over time for expansion signals.

---

## Related Reading

- [Getting Started with NetScanner](/blog/getting-started-with-netscanner)
- [Building Automations with the API](/blog/building-automations-with-the-api)

---

## Changelog

| Date       | Change              |
| ---------- | ------------------- |
| 2025-09-24 | Initial publication |
