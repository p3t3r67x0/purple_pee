---
slug: getting-started-with-netscanner
title: "Getting Started with NetScanner: Your First Lookups"
description: Learn the core concepts of NetScanner and perform your first ASN, DNS, and IP intelligence lookups.
date: 2025-09-24
updated: 2025-09-24
author: NetScanner Team
tags:
  - getting-started
  - asn
  - dns
  - ip
  - tutorial
canonical: https://netscanner.io/blog/getting-started-with-netscanner
ogImage: /logo-300x300.png
published: true
related:
  - building-automations-with-the-api
  - advanced-pivoting-techniques
---

## Overview

Welcome to **NetScanner** — an advanced network intelligence platform that helps you explore ASNs, IP addresses, DNS records, SSL data, live measurements and more. This quickstart gets you from zero to confident exploration in minutes.

### Core Capabilities Snapshot

| Capability  | What You Learn                         | Typical Pivot           |
| ----------- | -------------------------------------- | ----------------------- |
| ASN Lookup  | Ownership, announced prefixes          | Into CIDR ranges → IPs  |
| IP Intel    | Hosted domains, geography, infra reuse | Reverse DNS → domains   |
| DNS Records | Mail flow, authority, service hints    | MX/NS → more zones      |
| SSL Certs   | Multi-tenant footprint, SAN graph      | SAN entries → domains   |
| Graph View  | Relationship clustering                | Visual multi-hop pivots |

---

## Prerequisites

Nothing to install. A modern browser and an initial target (an ASN, domain or IP) is enough. For repeat automation later, see the companion guide: [Building Automations with the API](/blog/building-automations-with-the-api).

---

## Step 1: Explore an ASN

1. Open **ASN Lookup**.
2. Input an ASN like `AS15169` (Google) or `AS13335` (Cloudflare).
3. Review:
  - Announced IPv4/IPv6 prefixes
  - Organisation meta
  - (Roadmap) Upstream / downstream adjacency

> Tip: Deep-link via `/asn/AS13335` to share findings.

### When to Move On
You have a list of interesting prefixes or sub-allocations to expand into individual IP surfaces.

---

## Step 2: Investigate an IP

1. Go to **IP Analysis**.
2. Enter an IP (e.g. `8.8.8.8`).
3. Observe:
  - Reverse DNS
  - Hosted / co-located domains
  - Geolocation + potential hosting / CDN context

### Pivot Ideas
- Reverse host → domain pivot → zone / nameserver reuse.
- IP cluster similarity (adjacent addresses hosting similar assets).

---

## Step 3: Run DNS Lookups

Use the **DNS** page for A, AAAA, MX, NS, CNAME, TXT exploration. Every answer element is clickable to continue a chain.

### Practical Pattern
| Query | Insight                   | Next Pivot                    |
| ----- | ------------------------- | ----------------------------- |
| MX    | Mail provider / self-host | Other domains using same MX   |
| NS    | Authoritative hosters     | Enumerate sibling zones       |
| CNAME | Service / platform hints  | Origin / target consolidation |

---

## Step 4: Visual Graph Navigation

The **Graph** unifies relationships: domains, IPs, ASNs, certificates. Click nodes to open dedicated drill-down pages. Use zoom + drag to isolate clusters; combine color cues (e.g. purple = domains) with structural patterns.

> Strategy: Prioritise multi-signal overlaps (e.g. same cert SAN + identical NS + IP adjacency) before asserting ownership grouping.

---

## Step 5: Form a Hypothesis

At this stage you should be able to answer:
| Question                        | You Should Know               |
| ------------------------------- | ----------------------------- |
| What infra edges exist?         | Domains ↔ IPs ↔ ASNs ↔ Certs  |
| Any shared service providers?   | Common MX / NS / CDN hints    |
| Potential asset expansion path? | Additional zones, SAN entries |

Document early—later automation will refine assumptions.

---

## Common Pitfalls

| Pitfall                   | Avoidance                                 |
| ------------------------- | ----------------------------------------- |
| Over-attributing CDN IPs  | Validate with cert + NS + host patterns   |
| Single-signal conclusions | Require at least 2 independent signals    |
| Ignoring IPv6 space       | Many providers surface unique clues there |

---

## Next Steps

- Read: [Advanced Pivoting Techniques](/blog/advanced-pivoting-techniques)
- Automate: [Building Automations with the API](/blog/building-automations-with-the-api)
- Track roadmap & contribute feedback on GitHub (issues / discussions)

---

## Changelog

| Date       | Change              |
| ---------- | ------------------- |
| 2025-09-24 | Initial publication |

---

Happy mapping and intelligent pivoting!
