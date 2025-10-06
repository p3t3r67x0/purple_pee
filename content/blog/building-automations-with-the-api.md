---
slug: building-automations-with-the-api
title: "Building Automations with the NetScanner API"
description: Use the API to script lookups, aggregate signals and integrate NetScanner into your monitoring stack.
date: 2025-09-24
updated: 2025-09-24
author: NetScanner Team
tags:
  - api
  - automation
  - scripting
  - integration
canonical: https://netscanner.io/blog/building-automations-with-the-api
ogImage: /logo-300x300.png
published: true
related:
  - getting-started-with-netscanner
  - advanced-pivoting-techniques
---

## Overview

While the UI is great for exploration, resilient monitoring and intelligence programs rely on **repeatable automation**. This guide outlines patterns for building scripts and future integrations against the NetScanner API surface.

---

## Key Automation Use Cases

| Goal                    | Pattern                    | Benefit                    |
| ----------------------- | -------------------------- | -------------------------- |
| Detect asset expansion  | Diff new domains per ASN   | Early visibility           |
| Cert change monitoring  | Track SAN list deltas      | Spot infra shifts          |
| IP / provider migration | Observe prefix / ASN churn | Risk & dependency tracking |
| DNS hygiene             | Flag stale MX / NS records | Reduce attack surface      |

---

## Architectural Pattern

1. Source seed entities (ASNs, domains, IPs) from inventory.
2. Pull enriched data from API endpoints (public docs coming soon).
3. Normalize responses → structured store (SQLite/Postgres/Redis + TTL layering).
4. Run comparison / rule engines (diff, threshold, heuristic scoring).
5. Emit outputs (Slack webhook, email, SIEM ingestion, ticket creation).

> Tip: Separate collection cadence (slow) from alert evaluation cadence (fast) to minimize quota pressure.

### Data Freshness Strategy
| Data Type   | Suggested TTL | Notes                             |
| ----------- | ------------- | --------------------------------- |
| ASN meta    | 7d            | Changes rarely                    |
| DNS A/AAAA  | 5m - 30m      | Volatile for some CDNs            |
| Cert chains | 1d            | Unless monitoring issuance events |
| Reverse PTR | 1d            | Updates infrequently              |

---

## Rate & Backoff Strategy

Batch sequentially; respect server-provided headers (e.g. `Retry-After`). Implement exponential backoff with jitter. Cache stable surfaces (ASN → prefixes) longer than volatile ones (A/AAAA answers).

Pseudo-code (TypeScript outline):

```ts
async function withBackoff<T>(fn: () => Promise<T>, attempt = 0): Promise<T> {
  try {
    return await fn()
  } catch (e: any) {
    if (attempt > 5) throw e
    const delay = Math.min(30_000, (2 ** attempt) * 500) + Math.random() * 300
    await new Promise(r => setTimeout(r, delay))
    return withBackoff(fn, attempt + 1)
  }
}
```

---

## Example Workflow Skeleton (Shell)

```bash
#!/usr/bin/env bash
set -euo pipefail

ASN="AS13335"
API_BASE="https://api.netscanner.example.com"
TOKEN="$NETSCANNER_TOKEN"  # export beforehand

auth() { curl -sS -H "Authorization: Bearer $TOKEN" "$@"; }

echo "[+] Fetching prefixes for $ASN" >&2
auth "$API_BASE/asn/$ASN/prefixes" | jq -r '.prefixes[]' > prefixes.txt

echo "[+] Expanding to candidate IP sample" >&2
head -n 5 prefixes.txt | while read -r block; do
  # naive sample: first IP of block
  ip=$(echo "$block" | cut -d'/' -f1)
  auth "$API_BASE/ip/$ip" > "ip-$ip.json"
  sleep 1
done

echo "[+] Done." >&2
```

---

## Security & Secret Handling

| Concern         | Recommendation                               |
| --------------- | -------------------------------------------- |
| Token exposure  | Use env vars / secret managers, never commit |
| Rotation        | Rotate keys quarterly or on suspicion        |
| Least privilege | Scope tokens to required endpoints (future)  |

---

## Roadmap & Extensibility

- Lightweight **Python** and **Go** SDKs
- Webhook push for event classes (e.g. new SAN, new domain)
- Bulk query endpoints for improved batching efficiency

---

## Related Reading

- [Getting Started with NetScanner](/blog/getting-started-with-netscanner)
- [Advanced Pivoting Techniques](/blog/advanced-pivoting-techniques)

---

## Changelog

| Date       | Change              |
| ---------- | ------------------- |
| 2025-09-24 | Initial publication |
