# Changelog

All notable changes to this project are captured here. Entries summarise the Git history in plain language.

## 2025-09-24

### Added
- Introduced an in-app changelog page that pulls updates from GitHub and exposed the link in the global navigation and footer for visibility.
- Delivered a dedicated Contact page with a submission form and refreshed the About content to better guide users who need support.

### Changed
- Realigned the header typography with the footer branding to present a consistent identity across the site.
- Reworked the footer layout and link groupings for clearer navigation.
- Adjusted network graph labels so they remain visible with dense node sets, including new spacing, color updates for IPv6 nodes, and clickable labels that direct visitors to reference pages.

### Fixed
- Corrected renamed imports and standardised component names to PascalCase to resolve runtime issues introduced by recent refactors.

## 2025-09-17

### Changed
- Overhauled the interface with a darker visual theme, revamped navigation, and stronger responsive behaviour across devices, including mobile-friendly pagination workflows.
- Migrated the application to Nuxt 3 and the latest Nuxt runtime, adopting the Composition API, replacing the legacy Axios client with the native Fetch utility, and tidying layout slots after the upgrade.

### Fixed
- Removed stray binary characters from the search view and cleared a series of build and runtime warnings uncovered during the framework migration.

## 2020-01 – 2020-02

### Added
- Introduced an interactive network graph experience, tuning layout rendering, z-index stacking, and load indicators so the visualisation only appears when data is ready.
- Expanded the catalogue of insights with dedicated pages for IPv6, NS records, SSH banners, CA/OCSP/CRL data, trending queries, SSL certificates, geographic relationships, and service-oriented link collections.
- Brought in richer metadata displays such as geo data prefixes, issuer relationships, and additional titles for trend cards to explain what users are viewing.

### Changed
- Iteratively refined search behaviour with numerous regular-expression updates, highlighting improvements, redirect handling, and better labelling so IPv4, IPv6, ASN, and domain queries behave predictably.
- Improved typography and spacing throughout the app, centred loading indicators, and streamlined navigation elements to maintain clarity on both desktop and mobile.

### Fixed
- Hardened the loading workflow so progress indicators persist until all requests complete, removed redundant redirects, and addressed rendering quirks uncovered by the new graph visualisation.

## 2019-11 – 2019-12

### Added
- Launched the initial Nuxt.js frontend with the primary search interface, DNS and ASN exploration pages, and early UI components.
- Implemented Vuex state management with persistence, modularised DNS and result components, and added modal experiences for enriched record details.
- Surfaced auxiliary content such as screenshots, documentation, navigation links, and sitemap scaffolding to support discovery and onboarding.

### Changed
- Iterated on layout and typography, introduced sticky navigation, expanded dropdown menus, and aligned font sizing for improved readability across breakpoints.
- Enhanced search result presentation by factoring records into reusable components, highlighting key data, and enabling direct links to IPv4, WHOIS, CIDR, and other resource pages.

### Fixed
- Addressed numerous early-stage bugs including broken links, missing metadata, incorrect regex handling, and visibility issues discovered while stabilising the first release.
