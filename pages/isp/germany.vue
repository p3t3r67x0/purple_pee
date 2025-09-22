<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <div id="xhr" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div class="glass-panel rounded-3xl border border-white/10 px-5 py-6 shadow-glass sm:px-8">
        <header class="border-b border-white/10 pb-4">
          <h1 class="text-2xl font-light tracking-wide text-white/90">
            List of <span class="font-semibold text-white">German ISPs</span>
          </h1>
          <p class="mt-2 text-sm text-white/60">Browse notable German providers and their registered autonomous systems.</p>
        </header>
        <ul class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 24961</p>
              <nuxt-link to="/org/MYLOC-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MYLOC-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 680</p>
              <nuxt-link to="/org/DFN Verein zur Foerderung eines Deutschen Forschungsnetzes e.V., DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DFN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 553</p>
              <nuxt-link to="/org/BELWUE BelWue-Koordination, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BELWUE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN  199578</p>
              <nuxt-link to="/org/UNIKL, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">UNIKL</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 15817</p>
              <nuxt-link to="/org/MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MITTWALD-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 61157</p>
              <nuxt-link to="/org/PLUSSERVER-ASN1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PLUSSERVER-ASN1</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 3209</p>
              <nuxt-link to="/org/VODANET International IP-Backbone of Vodafone, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">VODANET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 42730</p>
              <nuxt-link to="/org/EVANZOAS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">EVANZOAS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 198913</p>
              <nuxt-link to="/org/BABIEL-NET, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BABIEL-NET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 12816</p>
              <nuxt-link to="/org/MWN-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MWN-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 48951</p>
              <nuxt-link to="/org/ASN-TSI-IAS Internet and VPN Service Provider, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ASN-TSI-IAS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 51733</p>
              <nuxt-link to="/org/BWI-GMBH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BWI-GMBH</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 9022</p>
              <nuxt-link to="/org/TWL-KOM-AS Donnersbergweg 4, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TWL-KOM-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 33811</p>
              <nuxt-link to="/org/PIXELPARK-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PIXELPARK-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 41289</p>
              <nuxt-link to="/org/DWD-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DWD-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 49234</p>
              <nuxt-link to="/org/BSI-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BSI-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 35704</p>
              <nuxt-link to="/org/ZIVIT-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ZIVIT-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 6733</p>
              <nuxt-link to="/org/DIMDI Waisenhausgasse 36-38a, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DIMDI</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 2857</p>
              <nuxt-link to="/org/RLP-NET, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RLP-NET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 31529</p>
              <nuxt-link to="/org/DENIC-ANYCAST-AS DNS anycast AS object for .DE DNS service, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DENIC-ANYCAST-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 5520</p>
              <nuxt-link to="/org/UNI-KOELN, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">UNI-KOELN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 8972</p>
              <nuxt-link to="/org/GD-EMEA-DC-SXB1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GD-EMEA-DC-SXB1</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 24940</p>
              <nuxt-link to="/org/HETZNER-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HETZNER-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 8560</p>
              <nuxt-link to="/org/ONEANDONE-AS Brauerstrasse 48, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ONEANDONE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 42886</p>
              <nuxt-link to="/org/ASKDRS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ASKDRS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 3320</p>
              <nuxt-link to="/org/DTAG Internet service provider operations, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DTAG</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 24989</p>
              <nuxt-link to="/org/IXEUROPE-DE-FRANKFURT-ASN Equinix Germany (Previously IX Europe Germany AS), DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IXEUROPE-DE-FRANKFURT-ASN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 6724</p>
              <nuxt-link to="/org/STRATO STRATO AG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">STRATO</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 34788</p>
              <nuxt-link to="/org/NMM-AS D - 02742 Friedersdorf Hauptstrasse 68, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NMM-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 24679</p>
              <nuxt-link to="/org/SSERV-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SSERV-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 34011</p>
              <nuxt-link to="/org/GD-EMEA-DC-CGN1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GD-EMEA-DC-CGN1</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 35515</p>
              <nuxt-link to="/org/EVH-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">EVH-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SCAN-PLUS-AS scanplus GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SCAN-PLUS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NORIS-NETWORK IT Service Provider located in Nuernberg, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NORIS-NETWORK</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DE-FIRSTCOLO www.first-colo.net, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DE-FIRSTCOLO</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KIVBF-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KIVBF-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SUB-LIR-SN-AS Sub-LIR SN, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SUB-LIR-SN-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CLOUDPIT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CLOUDPIT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GD-EMEA-DC-CGN3, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GD-EMEA-DC-CGN3</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KRZN-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KRZN-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WORK-AS N@work Internet Informationssysteme GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WORK-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IIRU-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IIRU-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WEBERCLOUD, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WEBERCLOUD</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KEYWEB-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KEYWEB-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GROHNWALDT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GROHNWALDT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/BRITELINE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BRITELINE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/UBERSPACE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">UBERSPACE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TAL-DE Robertstrasse 6, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TAL-DE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/QSC-AG-IPX, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">QSC-AG-IPX</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/REGIOITAACHEN, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">REGIOITAACHEN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/EWETEL Cloppenburger Strasse 310, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">EWETEL</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SEDO-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SEDO-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TNIB Trusted Network GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TNIB</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RATIOKONTAKT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RATIOKONTAKT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RKOM R-KOM Regensburger Telekommunikations GmbH & Co. KG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RKOM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WOBCOM, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WOBCOM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TNG-AS TNG Stadtnetz GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TNG-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/FREINET Freiburg, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">FREINET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MS-DEUTSCHLAND, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MS-DEUTSCHLAND</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ACTIVE-SERVERS active-servers.com, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ACTIVE-SERVERS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TELEMAXX, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TELEMAXX</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SUEDWESTFALENIT-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SUEDWESTFALENIT-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KNIPP-AS Martin-Schmeisser-Weg 9, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KNIPP-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SCALEUP, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SCALEUP</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ACCELERATED-IT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ACCELERATED-IT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DSINET-ASN, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DSINET-ASN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CRONON-AS Obermuensterstr. 9, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CRONON-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETCUP-AS netcup GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETCUP-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ARCHE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ARCHE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MK-NETZDIENSTE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MK-NETZDIENSTE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IDKOM IDKOM Networks GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IDKOM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NET-LAB Frankfurter Str. 99, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NET-LAB</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETCOM-KASSEL Netcom Kassel, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETCOM-KASSEL</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ARTFILES-AS Zirkusweg 1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ARTFILES-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GODADDY, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GODADDY</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/VERSATEL, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">VERSATEL</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TKRZ-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TKRZ-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ASGHOSTNET, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ASGHOSTNET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KDVZ-FRECHEN, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KDVZ-FRECHEN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/COMTRANCE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">COMTRANCE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PIXELX-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PIXELX-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETWAYS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETWAYS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IMOS-AS Alfons-Feifel-Str. 9, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IMOS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SUEC-DACOR-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SUEC-DACOR-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KOMPLEX-AS Ruhrorter Str. 100, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KOMPLEX-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ECOTEL, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ECOTEL</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/one4vision, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">one4vision</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NOCYO-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NOCYO-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TTM, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TTM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TEAMINTERNET-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TEAMINTERNET-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TK-LINDAU, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TK-LINDAU</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MEER-AS meerfarbig GmbH & Co. KG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MEER-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PLANET-, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PLANET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KDO-AS Elsaesser Strasse 66, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KDO-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INTERNETX-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INTERNETX-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/BKVG-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BKVG-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PFALZKOM-NET Koschatplatz 1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PFALZKOM-NET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/EPCAN epcan breitband loesungen, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">EPCAN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CONTABO, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CONTABO</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SALINK-AS Saarland, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SALINK-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IPB IPB Internet Provider in Berlin GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IPB</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MNET-AS Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MNET-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INTERDOTNET-LIG-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INTERDOTNET-LIG-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HLKOMM 04107 Leipzig, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HLKOMM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PROVIDERBOX IPv4 & IPv6 DUS1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PROVIDERBOX</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PROBENETWORKS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PROBENETWORKS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RZHAS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RZHAS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INTERNET_AG Frankfurt-Munich-Stuttgart-Amsterdam-London, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INTERNET_AG</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KTK KEVAG Telekom GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KTK</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ICA-NET-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ICA-NET-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PHH-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PHH-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GLOBALWAYS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GLOBALWAYS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETBUILD-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETBUILD-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HOFMEIR-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HOFMEIR-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HAMCOM-DE Hamm, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HAMCOM-DE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LUENECOM-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LUENECOM-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NACURA-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NACURA-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HOSTNET-DE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HOSTNET-DE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WIZARD-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WIZARD-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ROUTING Franzstr. 51, 52064 Aachen, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ROUTING</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/OMG-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">OMG-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ENVIA-TEL-AS D-09114 Chemnitz, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ENVIA-TEL-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MANDA, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MANDA</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RHTEC-AS rh-tec IP Backbone, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RHTEC-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ASN-ACDC Munich, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ASN-ACDC</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KAMP-, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KAMP</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CONNECTINGBYTES-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CONNECTINGBYTES-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MDLINK MDlink online service center GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MDLINK</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/BCC Hinter dem Turme 12, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BCC</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GLOBALNOC-AS equada network GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GLOBALNOC-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HFONETZ, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HFONETZ</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETCOLOGNE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETCOLOGNE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/OMC-AS Hamburg, Wendenstrasse 408, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">OMC-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/EDISCOM Am Kanal 4a, 14467 Potsdam, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">EDISCOM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TMT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TMT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SASG Cecinastr. 70, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SASG</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LEASEWEB-DE-FRA-10, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LEASEWEB-DE-FRA-10</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MBBG-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MBBG-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ROPA ropa digital systems, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ROPA</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/QUALITYHOSTING-AS D-63571 Gelnhausen, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">QUALITYHOSTING-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ENCOLINE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ENCOLINE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LFNET-AS01, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LFNET-AS01</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INFOSERVE-AS D-66119 Saarbruecken, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INFOSERVE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MANDALA-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MANDALA-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INTERSAAR-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INTERSAAR-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/UDMEDIA-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">UDMEDIA-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IPTOX-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IPTOX-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TPP, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TPP</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/BISPING ISP & Citycarrier, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BISPING</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RELAIX RelAix Networks GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RELAIX</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ITEMAX-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ITEMAX-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/VEGASYSTEMS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">VEGASYSTEMS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TOPSNET, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TOPSNET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INGATE-DE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INGATE-DE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SPEEDBONE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SPEEDBONE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LEWTELNET Oskar-von-Miller-Str. 1b, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LEWTELNET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RIZ-IT-MOTION, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RIZ-IT-MOTION</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/POTSDAM-AS Ziolkowskistrasse 8, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">POTSDAM-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HEAGMEDIANET Darmstadt, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HEAGMEDIANET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PUNKT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PUNKT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/OPTITRUST, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">OPTITRUST</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/VISTEC-AS Wiesbaden, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">VISTEC-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DE-WEBGO www.webgo.de, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DE-WEBGO</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PLUTEX Hermann-Ritter-Str. 108, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PLUTEX</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KOMRO-AS Komro Telekommunikations GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KOMRO-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MANITU, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MANITU</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/UUU-TELECOM-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">UUU-TELECOM-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CSL, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CSL</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RFT-BRANDENBURG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RFT-BRANDENBURG</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SAARGATE-AS Nell-Breunig-Allee 6, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SAARGATE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SPACENET SpaceNET AG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SPACENET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/VITROCONNECT-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">VITROCONNECT-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RECAST-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RECAST-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LYNET-AS Hamburg, Luebeck, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LYNET-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CCNST-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CCNST-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PROFITBRICKS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PROFITBRICKS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ADITSYSTEMS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ADITSYSTEMS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DEGNET Internet Service Provider, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DEGNET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WEBHOSTER, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WEBHOSTER</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SWMR-AS Citynet Marburg, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SWMR-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WEBMATIC, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WEBMATIC</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MANET-AS Koschatplatz 1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MANET-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HPLS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HPLS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/AS12348 Hermann-Glockner-Str. 7, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">AS12348</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RWTH-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RWTH-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IVL-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IVL-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LEUCOM-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LEUCOM-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HTP-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HTP-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/AS48823, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">AS48823</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ADDIX-AS AS-ADDIX Autonomous System, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ADDIX-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TREML-STURM-AS Treml+Sturm Datentechnik GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TREML-STURM-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GDS-1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GDS-1</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TWK-KL-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TWK-KL-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ARCOS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ARCOS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETHINKS-AS NETHINKS GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETHINKS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TELEDATA-AS TeleData GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TELEDATA-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/AVENCY Kiebitzpohl 77, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">AVENCY</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GOPAS-AS Schellerdamm 16, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GOPAS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ASHSW, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ASHSW</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DELUNET, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DELUNET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TMR, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TMR</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/MTS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MTS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DE-VSM-ASN Peering, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DE-VSM-ASN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TELTA-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TELTA-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PLANETARYNETWORKS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PLANETARYNETWORKS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ISPONE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ISPONE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DE-IORG-AS-1 Pennefeldsweg 12, D-53177 Bonn, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DE-IORG-AS-1</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ASNETBASE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ASNETBASE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/RIPE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">RIPE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GELSEN-NET Am Bugapark 1c, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GELSEN-NET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/COSIMO-, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">COSIMO</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETLOGIX, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETLOGIX</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ESH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ESH</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DVV-GMBH-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DVV-GMBH-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TLN-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TLN-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/BAYCIX Schillerstr. 2, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BAYCIX</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/UNBELIEVABLE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">UNBELIEVABLE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DE-EXEDRA, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DE-EXEDRA</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NMMN-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NMMN-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INIT-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INIT-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INGENIT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INGENIT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SCZN-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SCZN-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SOPRADO-ANY, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SOPRADO-ANY</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DPAG-AS Deutsche Post AG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DPAG-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PLUSNET *****************, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PLUSNET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GLOBAL-VILLAGE Mehrumer Str. 16, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GLOBAL-VILLAGE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/VERIVOX-AS no connection to AS43186, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">VERIVOX-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/FILOO-ASN Rhedaer Straße 25, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">FILOO-ASN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/UDAG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">UDAG</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DUF-AS Winsbergring 38, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DUF-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KABELDEUTSCHLAND-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KABELDEUTSCHLAND-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TDDE-ASN1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TDDE-ASN1</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TELECOLUMBUS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TELECOLUMBUS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WTNET-AS wilhelm.tel GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WTNET-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/XANDMAIL-ASN, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">XANDMAIL-ASN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WEBPHONE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WEBPHONE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DE-DGW Deutsche Glasfaser Wholesale Internet, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DE-DGW</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/COMBAHTON combahton GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">COMBAHTON</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/TELEAG, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">TELEAG</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CREOLINE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CREOLINE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ATOS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ATOS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KRICK-TECHNOLOGIC-AS Mainparkring 4, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KRICK-TECHNOLOGIC-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/OPENIT, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">OPENIT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/FREENETDE freenet Datenkommunikations GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">FREENETDE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INETWIRE-AS Wilhelm-Wagenfeld-Str. 16, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INETWIRE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SPEEDPARTNER, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SPEEDPARTNER</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HGCOMP-ASN, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HGCOMP-ASN</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DNSNET German Internet Service Providers, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DNSNET</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NCORE-AS Hochstadenstr. 5, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NCORE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GODADDY-AMS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GODADDY-AMS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/GAMEFORGE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">GAMEFORGE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/T-SYSTEMS-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">T-SYSTEMS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/BITPOINT-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BITPOINT-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DENIC-AS Kaiserstr. 75-77, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DENIC-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/XIRRA, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">XIRRA</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ROUTING-ANYCAST, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ROUTING-ANYCAST</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/AITICON, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">AITICON</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NETUSE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NETUSE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ONEAPI, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ONEAPI</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/AS12470 Housing-Center, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">AS12470</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LIEBHERR, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LIEBHERR</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/HAENDLEKORTE-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">HAENDLEKORTE-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KEY-SYSTEMS-AS Im Oberen Werk 1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KEY-SYSTEMS-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/SIEBNICH-COM, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">SIEBNICH-COM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PROIO, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PROIO</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/KMS-DE_AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KMS-DE_AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ASTRALUS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ASTRALUS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/BUCHHOLZ-DIGITAL Buchholz Digital GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">BUCHHOLZ-DIGITAL</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/DRESO_DE-FFM_RZ1, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">DRESO_DE-FFM_RZ1</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IN-ULM, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IN-ULM</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/VELIANET-AS velia.net Internetdienste GmbH, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">VELIANET-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/AS6878, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">AS6878</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/AMB-GENERALI, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">AMB-GENERALI</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/PROINITY PROINITY, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">PROINITY</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/LUMASERV LUMASERV Systems, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">LUMASERV</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 200615</p>
              <nuxt-link to="/org/MYVIRTUALSERVER myVirtualserver, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MYVIRTUALSERVER</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 29494</p>
              <nuxt-link to="/org/MESSE-DUESSELDORF-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">MESSE-DUESSELDORF-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/CREW-AS Hamburg, Germany, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">CREW-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INTERNETT-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INTERNETT-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/WAG Bredenhop 20, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">WAG</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN 34878</p>
              <nuxt-link to="/org/KIT Karlsruhe Institute of Technology, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">KIT</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/NEXINTO-, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">NEXINTO</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/OBIS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">OBIS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/INTERSOLUTE, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">INTERSOLUTE</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/ISPPRO-AS ISPPRO-AS covers the networks of ISPpro, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">ISPPRO-AS</nuxt-link>
            </div>
          </div>
        </li>
        <li class="flex">
          <div class="flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-glass transition duration-300 hover:-translate-y-0.5 hover:border-cosmic-aurora/60 hover:shadow-glow">
            <img :src="generatePath('DE')" alt="Germany flag" class="h-5 w-9 rounded-md border border-white/20 object-cover">
            <div class="flex flex-col">
              <p class="font-mono text-xs font-semibold uppercase tracking-widest text-white/70">ASN</p>
              <nuxt-link to="/org/IBH-AS, DE" class="font-mono text-base font-semibold text-white transition hover:text-cosmic-aurora">IBH-AS</nuxt-link>
            </div>
          </div>
        </li>
        </ul>
      </div>
    </div>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script setup lang="ts">
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

const generatePath = (image?: string) => `/svg/${(image ?? 'unknown').toLowerCase()}.svg`

useHead(() => ({
  title: 'German ISP Database | Internet Service Providers in Germany | NetScanner',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Comprehensive database of German Internet Service Providers (ISPs) and their autonomous systems. Explore major German ISPs, telecommunications companies, ASN allocations, and network infrastructure in Germany.'
    },
    {
      name: 'keywords',
      content: 'German ISPs, Germany internet providers, German ASN, telecommunications Germany, Deutsche Telekom, internet infrastructure Germany, German networks'
    },
    {
      property: 'og:title',
      content: 'German ISP Database - Internet Service Providers in Germany'
    },
    {
      property: 'og:description',
      content: 'Complete directory of German ISPs and autonomous systems with network infrastructure analysis.'
    }
  ]
}))
</script>
