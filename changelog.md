# Changelog

All notable changes to this project are captured here. Entries summarise the Git history in plain language.

## 2025-09-24

### Added
- Introduced an in-app changelog page that pulls updates from GitHub and exposed the link in the global navigation and footer for visibility. ([`093eab0`](https://github.com/p3t3r67x0/purple_pee/commit/093eab0))
- Delivered a dedicated Contact page with a submission form and refreshed the About content to better guide users who need support. ([`cc0899e`](https://github.com/p3t3r67x0/purple_pee/commit/cc0899e))

### Changed
- Realigned the header typography with the footer branding to present a consistent identity across the site. ([`ae7cc72`](https://github.com/p3t3r67x0/purple_pee/commit/ae7cc72))
- Reworked the footer layout and link groupings for clearer navigation. ([`6bbce35`](https://github.com/p3t3r67x0/purple_pee/commit/6bbce35))
- Adjusted network graph labels so they remain visible with dense node sets, including new spacing, color updates for IPv6 nodes, and clickable labels that direct visitors to reference pages. ([`4c370ba`](https://github.com/p3t3r67x0/purple_pee/commit/4c370ba), [`05c6fec`](https://github.com/p3t3r67x0/purple_pee/commit/05c6fec), [`b5c3922`](https://github.com/p3t3r67x0/purple_pee/commit/b5c3922))

### Fixed
- Corrected renamed imports and standardised component names to PascalCase to resolve runtime issues introduced by recent refactors. ([`1c5585e`](https://github.com/p3t3r67x0/purple_pee/commit/1c5585e), [`a5f77de`](https://github.com/p3t3r67x0/purple_pee/commit/a5f77de))

## 2025-09-17

### Changed
- Overhauled the interface with a darker visual theme, revamped navigation, and stronger responsive behaviour across devices, including mobile-friendly pagination workflows. ([`53d527e`](https://github.com/p3t3r67x0/purple_pee/commit/53d527e), [`44d9b19`](https://github.com/p3t3r67x0/purple_pee/commit/44d9b19), [`b2e2bcf`](https://github.com/p3t3r67x0/purple_pee/commit/b2e2bcf), [`995a73f`](https://github.com/p3t3r67x0/purple_pee/commit/995a73f))
- Migrated the application to Nuxt 3 and the latest Nuxt runtime, adopting the Composition API, replacing the legacy Axios client with the native Fetch utility, and tidying layout slots after the upgrade. ([`0c8972c`](https://github.com/p3t3r67x0/purple_pee/commit/0c8972c), [`8a6d947`](https://github.com/p3t3r67x0/purple_pee/commit/8a6d947), [`32b343f`](https://github.com/p3t3r67x0/purple_pee/commit/32b343f), [`3fec352`](https://github.com/p3t3r67x0/purple_pee/commit/3fec352))

### Fixed
- Removed stray binary characters from the search view and cleared a series of build and runtime warnings uncovered during the framework migration. ([`bba02ca`](https://github.com/p3t3r67x0/purple_pee/commit/bba02ca), [`c2c1cdf`](https://github.com/p3t3r67x0/purple_pee/commit/c2c1cdf), [`7a28ce9`](https://github.com/p3t3r67x0/purple_pee/commit/7a28ce9), [`45541f3`](https://github.com/p3t3r67x0/purple_pee/commit/45541f3))

## 2020-01 – 2020-02

### Added
- Introduced an interactive network graph experience, tuning layout rendering, z-index stacking, and load indicators so the visualisation only appears when data is ready. ([`cfdee34`](https://github.com/p3t3r67x0/purple_pee/commit/cfdee34), [`c4676fb`](https://github.com/p3t3r67x0/purple_pee/commit/c4676fb), [`de7f823`](https://github.com/p3t3r67x0/purple_pee/commit/de7f823), [`12feec1`](https://github.com/p3t3r67x0/purple_pee/commit/12feec1))
- Expanded the catalogue of insights with dedicated pages for IPv6, NS records, SSH banners, CA/OCSP/CRL data, trending queries, SSL certificates, geographic relationships, and service-oriented link collections. ([`9cf7ac5`](https://github.com/p3t3r67x0/purple_pee/commit/9cf7ac5), [`364180c`](https://github.com/p3t3r67x0/purple_pee/commit/364180c), [`3cbff14`](https://github.com/p3t3r67x0/purple_pee/commit/3cbff14), [`4a9251b`](https://github.com/p3t3r67x0/purple_pee/commit/4a9251b), [`80f8118`](https://github.com/p3t3r67x0/purple_pee/commit/80f8118), [`825b545`](https://github.com/p3t3r67x0/purple_pee/commit/825b545), [`ad9bdc6`](https://github.com/p3t3r67x0/purple_pee/commit/ad9bdc6))
- Brought in richer metadata displays such as geo data prefixes, issuer relationships, and additional titles for trend cards to explain what users are viewing. ([`3bfffb6`](https://github.com/p3t3r67x0/purple_pee/commit/3bfffb6), [`2f07d81`](https://github.com/p3t3r67x0/purple_pee/commit/2f07d81), [`9d02349`](https://github.com/p3t3r67x0/purple_pee/commit/9d02349), [`4cc4d2e`](https://github.com/p3t3r67x0/purple_pee/commit/4cc4d2e), [`e42810a`](https://github.com/p3t3r67x0/purple_pee/commit/e42810a))

### Changed
- Iteratively refined search behaviour with numerous regular-expression updates, highlighting improvements, redirect handling, and better labelling so IPv4, IPv6, ASN, and domain queries behave predictably. ([`0523f05`](https://github.com/p3t3r67x0/purple_pee/commit/0523f05), [`a14b8b5`](https://github.com/p3t3r67x0/purple_pee/commit/a14b8b5), [`b924317`](https://github.com/p3t3r67x0/purple_pee/commit/b924317), [`5d90140`](https://github.com/p3t3r67x0/purple_pee/commit/5d90140), [`4cc0b0b`](https://github.com/p3t3r67x0/purple_pee/commit/4cc0b0b))
- Improved typography and spacing throughout the app, centred loading indicators, and streamlined navigation elements to maintain clarity on both desktop and mobile. ([`260d282`](https://github.com/p3t3r67x0/purple_pee/commit/260d282), [`52861d6`](https://github.com/p3t3r67x0/purple_pee/commit/52861d6), [`7313149`](https://github.com/p3t3r67x0/purple_pee/commit/7313149))

### Fixed
- Hardened the loading workflow so progress indicators persist until all requests complete, removed redundant redirects, and addressed rendering quirks uncovered by the new graph visualisation. ([`68ae2e8`](https://github.com/p3t3r67x0/purple_pee/commit/68ae2e8), [`d86a19e`](https://github.com/p3t3r67x0/purple_pee/commit/d86a19e), [`9e97fff`](https://github.com/p3t3r67x0/purple_pee/commit/9e97fff), [`c4676fb`](https://github.com/p3t3r67x0/purple_pee/commit/c4676fb))

## 2019-11 – 2019-12

### Added
- Launched the initial Nuxt.js frontend with the primary search interface, DNS and ASN exploration pages, and early UI components. ([`c90ae92`](https://github.com/p3t3r67x0/purple_pee/commit/c90ae92), [`519e6f8`](https://github.com/p3t3r67x0/purple_pee/commit/519e6f8), [`07f01bc`](https://github.com/p3t3r67x0/purple_pee/commit/07f01bc), [`5e3615f`](https://github.com/p3t3r67x0/purple_pee/commit/5e3615f))
- Implemented Vuex state management with persistence, modularised DNS and result components, and added modal experiences for enriched record details. ([`95759dc`](https://github.com/p3t3r67x0/purple_pee/commit/95759dc), [`92c0d14`](https://github.com/p3t3r67x0/purple_pee/commit/92c0d14), [`c1d5dcf`](https://github.com/p3t3r67x0/purple_pee/commit/c1d5dcf), [`754549b`](https://github.com/p3t3r67x0/purple_pee/commit/754549b), [`2def2d6`](https://github.com/p3t3r67x0/purple_pee/commit/2def2d6), [`6be8e33`](https://github.com/p3t3r67x0/purple_pee/commit/6be8e33), [`d56ab4f`](https://github.com/p3t3r67x0/purple_pee/commit/d56ab4f))
- Surfaced auxiliary content such as screenshots, documentation, navigation links, and sitemap scaffolding to support discovery and onboarding. ([`04828b2`](https://github.com/p3t3r67x0/purple_pee/commit/04828b2), [`0c89407`](https://github.com/p3t3r67x0/purple_pee/commit/0c89407), [`b6e10b7`](https://github.com/p3t3r67x0/purple_pee/commit/b6e10b7), [`8fa4839`](https://github.com/p3t3r67x0/purple_pee/commit/8fa4839), [`dd25aa8`](https://github.com/p3t3r67x0/purple_pee/commit/dd25aa8), [`021178d`](https://github.com/p3t3r67x0/purple_pee/commit/021178d))

### Changed
- Iterated on layout and typography, introduced sticky navigation, expanded dropdown menus, and aligned font sizing for improved readability across breakpoints. ([`18fa38d`](https://github.com/p3t3r67x0/purple_pee/commit/18fa38d), [`8634142`](https://github.com/p3t3r67x0/purple_pee/commit/8634142), [`88a1636`](https://github.com/p3t3r67x0/purple_pee/commit/88a1636), [`2f149af`](https://github.com/p3t3r67x0/purple_pee/commit/2f149af), [`9dc28ee`](https://github.com/p3t3r67x0/purple_pee/commit/9dc28ee))
- Enhanced search result presentation by factoring records into reusable components, highlighting key data, and enabling direct links to IPv4, WHOIS, CIDR, and other resource pages. ([`516bc5a`](https://github.com/p3t3r67x0/purple_pee/commit/516bc5a), [`dd014fe`](https://github.com/p3t3r67x0/purple_pee/commit/dd014fe), [`9af8852`](https://github.com/p3t3r67x0/purple_pee/commit/9af8852), [`9e7379f`](https://github.com/p3t3r67x0/purple_pee/commit/9e7379f), [`5c9629a`](https://github.com/p3t3r67x0/purple_pee/commit/5c9629a))

### Fixed
- Addressed numerous early-stage bugs including broken links, missing metadata, incorrect regex handling, and visibility issues discovered while stabilising the first release. ([`3e3e255`](https://github.com/p3t3r67x0/purple_pee/commit/3e3e255), [`261c59c`](https://github.com/p3t3r67x0/purple_pee/commit/261c59c), [`9dfdd19`](https://github.com/p3t3r67x0/purple_pee/commit/9dfdd19), [`6f6c6a3`](https://github.com/p3t3r67x0/purple_pee/commit/6f6c6a3), [`1b70e9c`](https://github.com/p3t3r67x0/purple_pee/commit/1b70e9c))
