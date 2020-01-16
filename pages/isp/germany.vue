<template>
<div class="min-h-screen flex flex-col">
  <div class="flex-grow">
    <navheader></navheader>
    <div class="container mx-auto">
      <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">List of <strong class="font-bold">German ISPs</strong></h1>
    </div>
    <div id="xhr" class="container mx-auto">
      <ul class="flex content-start flex-wrap bg-gray-200 mb-6 mx-2 md:mx-0 p-1">
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 24961</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MYLOC-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MYLOC-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 680</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DFN Verein zur Foerderung eines Deutschen Forschungsnetzes e.V., DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DFN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 553</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BELWUE BelWue-Koordination, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BELWUE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN  199578</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/UNIKL, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">UNIKL</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 15817</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MITTWALD-AS Mittwald CM Service GmbH und Co. KG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MITTWALD-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 61157</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PLUSSERVER-ASN1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PLUSSERVER-ASN1</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 3209</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/VODANET International IP-Backbone of Vodafone, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">VODANET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 42730</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/EVANZOAS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">EVANZOAS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 198913</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BABIEL-NET, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BABIEL-NET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 12816</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MWN-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MWN-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 48951</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ASN-TSI-IAS Internet and VPN Service Provider, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ASN-TSI-IAS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 51733</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BWI-GMBH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BWI-GMBH</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 9022</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TWL-KOM-AS Donnersbergweg 4, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TWL-KOM-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 33811</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PIXELPARK-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PIXELPARK-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 41289</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DWD-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DWD-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 49234</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BSI-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BSI-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 35704</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ZIVIT-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ZIVIT-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 6733</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DIMDI Waisenhausgasse 36-38a, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DIMDI</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 2857</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RLP-NET, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RLP-NET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 31529</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DENIC-ANYCAST-AS DNS anycast AS object for .DE DNS service, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DENIC-ANYCAST-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 5520</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/UNI-KOELN, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">UNI-KOELN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 8972</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GD-EMEA-DC-SXB1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GD-EMEA-DC-SXB1</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 24940</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HETZNER-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HETZNER-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 8560</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ONEANDONE-AS Brauerstrasse 48, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ONEANDONE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 42886</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ASKDRS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ASKDRS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 3320</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DTAG Internet service provider operations, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DTAG</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 24989</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IXEUROPE-DE-FRANKFURT-ASN Equinix Germany (Previously IX Europe Germany AS), DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IXEUROPE-DE-FRANKFURT-ASN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 6724</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/STRATO STRATO AG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">STRATO</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 34788</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NMM-AS D - 02742 Friedersdorf Hauptstrasse 68, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NMM-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 24679</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SSERV-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SSERV-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 34011</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GD-EMEA-DC-CGN1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GD-EMEA-DC-CGN1</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 35515</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/EVH-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">EVH-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SCAN-PLUS-AS scanplus GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SCAN-PLUS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NORIS-NETWORK IT Service Provider located in Nuernberg, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NORIS-NETWORK</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DE-FIRSTCOLO www.first-colo.net, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DE-FIRSTCOLO</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KIVBF-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KIVBF-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SUB-LIR-SN-AS Sub-LIR SN, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SUB-LIR-SN-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CLOUDPIT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CLOUDPIT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GD-EMEA-DC-CGN3, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GD-EMEA-DC-CGN3</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KRZN-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KRZN-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WORK-AS N@work Internet Informationssysteme GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WORK-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IIRU-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IIRU-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WEBERCLOUD, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WEBERCLOUD</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KEYWEB-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KEYWEB-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GROHNWALDT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GROHNWALDT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BRITELINE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BRITELINE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/UBERSPACE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">UBERSPACE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TAL-DE Robertstrasse 6, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TAL-DE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/QSC-AG-IPX, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">QSC-AG-IPX</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/REGIOITAACHEN, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">REGIOITAACHEN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/EWETEL Cloppenburger Strasse 310, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">EWETEL</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SEDO-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SEDO-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TNIB Trusted Network GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TNIB</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RATIOKONTAKT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RATIOKONTAKT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RKOM R-KOM Regensburger Telekommunikations GmbH & Co. KG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RKOM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WOBCOM, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WOBCOM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TNG-AS TNG Stadtnetz GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TNG-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/FREINET Freiburg, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">FREINET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MS-DEUTSCHLAND, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MS-DEUTSCHLAND</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ACTIVE-SERVERS active-servers.com, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ACTIVE-SERVERS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TELEMAXX, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TELEMAXX</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SUEDWESTFALENIT-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SUEDWESTFALENIT-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KNIPP-AS Martin-Schmeisser-Weg 9, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KNIPP-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SCALEUP, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SCALEUP</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ACCELERATED-IT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ACCELERATED-IT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DSINET-ASN, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DSINET-ASN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CRONON-AS Obermuensterstr. 9, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CRONON-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETCUP-AS netcup GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETCUP-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ARCHE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ARCHE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MK-NETZDIENSTE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MK-NETZDIENSTE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IDKOM IDKOM Networks GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IDKOM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NET-LAB Frankfurter Str. 99, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NET-LAB</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETCOM-KASSEL Netcom Kassel, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETCOM-KASSEL</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ARTFILES-AS Zirkusweg 1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ARTFILES-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GODADDY, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GODADDY</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/VERSATEL, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">VERSATEL</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TKRZ-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TKRZ-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ASGHOSTNET, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ASGHOSTNET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KDVZ-FRECHEN, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KDVZ-FRECHEN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/COMTRANCE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">COMTRANCE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PIXELX-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PIXELX-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETWAYS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETWAYS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IMOS-AS Alfons-Feifel-Str. 9, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IMOS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SUEC-DACOR-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SUEC-DACOR-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KOMPLEX-AS Ruhrorter Str. 100, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KOMPLEX-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ECOTEL, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ECOTEL</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/one4vision, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">one4vision</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NOCYO-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NOCYO-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TTM, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TTM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TEAMINTERNET-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TEAMINTERNET-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TK-LINDAU, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TK-LINDAU</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MEER-AS meerfarbig GmbH & Co. KG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MEER-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PLANET-, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PLANET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KDO-AS Elsaesser Strasse 66, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KDO-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INTERNETX-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INTERNETX-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BKVG-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BKVG-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PFALZKOM-NET Koschatplatz 1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PFALZKOM-NET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/EPCAN epcan breitband loesungen, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">EPCAN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CONTABO, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CONTABO</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SALINK-AS Saarland, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SALINK-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IPB IPB Internet Provider in Berlin GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IPB</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MNET-AS Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MNET-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INTERDOTNET-LIG-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INTERDOTNET-LIG-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HLKOMM 04107 Leipzig, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HLKOMM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PROVIDERBOX IPv4 & IPv6 DUS1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PROVIDERBOX</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PROBENETWORKS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PROBENETWORKS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RZHAS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RZHAS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INTERNET_AG Frankfurt-Munich-Stuttgart-Amsterdam-London, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INTERNET_AG</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KTK KEVAG Telekom GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KTK</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ICA-NET-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ICA-NET-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PHH-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PHH-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GLOBALWAYS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GLOBALWAYS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETBUILD-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETBUILD-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HOFMEIR-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HOFMEIR-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HAMCOM-DE Hamm, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HAMCOM-DE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LUENECOM-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LUENECOM-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NACURA-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NACURA-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HOSTNET-DE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HOSTNET-DE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WIZARD-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WIZARD-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ROUTING Franzstr. 51, 52064 Aachen, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ROUTING</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/OMG-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">OMG-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ENVIA-TEL-AS D-09114 Chemnitz, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ENVIA-TEL-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MANDA, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MANDA</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RHTEC-AS rh-tec IP Backbone, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RHTEC-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ASN-ACDC Munich, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ASN-ACDC</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KAMP-, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KAMP</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CONNECTINGBYTES-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CONNECTINGBYTES-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MDLINK MDlink online service center GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MDLINK</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BCC Hinter dem Turme 12, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BCC</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GLOBALNOC-AS equada network GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GLOBALNOC-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HFONETZ, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HFONETZ</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETCOLOGNE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETCOLOGNE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/OMC-AS Hamburg, Wendenstrasse 408, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">OMC-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/EDISCOM Am Kanal 4a, 14467 Potsdam, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">EDISCOM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TMT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TMT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SASG Cecinastr. 70, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SASG</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LEASEWEB-DE-FRA-10, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LEASEWEB-DE-FRA-10</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MBBG-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MBBG-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ROPA ropa digital systems, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ROPA</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/QUALITYHOSTING-AS D-63571 Gelnhausen, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">QUALITYHOSTING-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ENCOLINE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ENCOLINE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LFNET-AS01, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LFNET-AS01</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INFOSERVE-AS D-66119 Saarbruecken, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INFOSERVE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MANDALA-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MANDALA-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INTERSAAR-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INTERSAAR-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/UDMEDIA-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">UDMEDIA-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IPTOX-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IPTOX-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TPP, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TPP</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BISPING ISP & Citycarrier, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BISPING</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RELAIX RelAix Networks GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RELAIX</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ITEMAX-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ITEMAX-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/VEGASYSTEMS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">VEGASYSTEMS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TOPSNET, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TOPSNET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INGATE-DE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INGATE-DE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SPEEDBONE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SPEEDBONE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LEWTELNET Oskar-von-Miller-Str. 1b, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LEWTELNET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RIZ-IT-MOTION, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RIZ-IT-MOTION</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/POTSDAM-AS Ziolkowskistrasse 8, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">POTSDAM-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HEAGMEDIANET Darmstadt, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HEAGMEDIANET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PUNKT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PUNKT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/OPTITRUST, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">OPTITRUST</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/VISTEC-AS Wiesbaden, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">VISTEC-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DE-WEBGO www.webgo.de, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DE-WEBGO</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PLUTEX Hermann-Ritter-Str. 108, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PLUTEX</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KOMRO-AS Komro Telekommunikations GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KOMRO-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MANITU, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MANITU</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/UUU-TELECOM-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">UUU-TELECOM-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CSL, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CSL</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RFT-BRANDENBURG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RFT-BRANDENBURG</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SAARGATE-AS Nell-Breunig-Allee 6, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SAARGATE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SPACENET SpaceNET AG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SPACENET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/VITROCONNECT-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">VITROCONNECT-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RECAST-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RECAST-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LYNET-AS Hamburg, Luebeck, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LYNET-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CCNST-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CCNST-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PROFITBRICKS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PROFITBRICKS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ADITSYSTEMS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ADITSYSTEMS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DEGNET Internet Service Provider, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DEGNET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WEBHOSTER, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WEBHOSTER</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SWMR-AS Citynet Marburg, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SWMR-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WEBMATIC, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WEBMATIC</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MANET-AS Koschatplatz 1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MANET-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HPLS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HPLS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/AS12348 Hermann-Glockner-Str. 7, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">AS12348</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RWTH-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RWTH-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IVL-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IVL-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LEUCOM-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LEUCOM-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HTP-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HTP-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/AS48823, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">AS48823</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ADDIX-AS AS-ADDIX Autonomous System, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ADDIX-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TREML-STURM-AS Treml+Sturm Datentechnik GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TREML-STURM-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GDS-1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GDS-1</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TWK-KL-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TWK-KL-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ARCOS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ARCOS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETHINKS-AS NETHINKS GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETHINKS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TELEDATA-AS TeleData GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TELEDATA-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/AVENCY Kiebitzpohl 77, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">AVENCY</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GOPAS-AS Schellerdamm 16, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GOPAS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ASHSW, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ASHSW</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DELUNET, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DELUNET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TMR, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TMR</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MTS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MTS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DE-VSM-ASN Peering, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DE-VSM-ASN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TELTA-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TELTA-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PLANETARYNETWORKS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PLANETARYNETWORKS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ISPONE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ISPONE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DE-IORG-AS-1 Pennefeldsweg 12, D-53177 Bonn, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DE-IORG-AS-1</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ASNETBASE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ASNETBASE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/RIPE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">RIPE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GELSEN-NET Am Bugapark 1c, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GELSEN-NET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/COSIMO-, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">COSIMO</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETLOGIX, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETLOGIX</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ESH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ESH</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DVV-GMBH-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DVV-GMBH-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TLN-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TLN-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BAYCIX Schillerstr. 2, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BAYCIX</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/UNBELIEVABLE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">UNBELIEVABLE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DE-EXEDRA, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DE-EXEDRA</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NMMN-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NMMN-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INIT-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INIT-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INGENIT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INGENIT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SCZN-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SCZN-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SOPRADO-ANY, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SOPRADO-ANY</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DPAG-AS Deutsche Post AG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DPAG-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PLUSNET *****************, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PLUSNET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GLOBAL-VILLAGE Mehrumer Str. 16, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GLOBAL-VILLAGE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/VERIVOX-AS no connection to AS43186, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">VERIVOX-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/FILOO-ASN Rhedaer Straße 25, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">FILOO-ASN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/UDAG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">UDAG</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DUF-AS Winsbergring 38, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DUF-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KABELDEUTSCHLAND-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KABELDEUTSCHLAND-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TDDE-ASN1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TDDE-ASN1</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TELECOLUMBUS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TELECOLUMBUS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WTNET-AS wilhelm.tel GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WTNET-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/XANDMAIL-ASN, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">XANDMAIL-ASN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WEBPHONE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WEBPHONE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DE-DGW Deutsche Glasfaser Wholesale Internet, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DE-DGW</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/COMBAHTON combahton GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">COMBAHTON</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/TELEAG, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">TELEAG</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CREOLINE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CREOLINE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ATOS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ATOS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KRICK-TECHNOLOGIC-AS Mainparkring 4, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KRICK-TECHNOLOGIC-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/OPENIT, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">OPENIT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/FREENETDE freenet Datenkommunikations GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">FREENETDE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INETWIRE-AS Wilhelm-Wagenfeld-Str. 16, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INETWIRE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SPEEDPARTNER, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SPEEDPARTNER</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HGCOMP-ASN, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HGCOMP-ASN</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DNSNET German Internet Service Providers, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DNSNET</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NCORE-AS Hochstadenstr. 5, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NCORE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GODADDY-AMS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GODADDY-AMS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/GAMEFORGE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">GAMEFORGE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/T-SYSTEMS-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">T-SYSTEMS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BITPOINT-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BITPOINT-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DENIC-AS Kaiserstr. 75-77, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DENIC-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/XIRRA, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">XIRRA</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ROUTING-ANYCAST, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ROUTING-ANYCAST</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/AITICON, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">AITICON</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NETUSE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NETUSE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ONEAPI, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ONEAPI</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/AS12470 Housing-Center, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">AS12470</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LIEBHERR, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LIEBHERR</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/HAENDLEKORTE-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">HAENDLEKORTE-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KEY-SYSTEMS-AS Im Oberen Werk 1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KEY-SYSTEMS-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/SIEBNICH-COM, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">SIEBNICH-COM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PROIO, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PROIO</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KMS-DE_AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KMS-DE_AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ASTRALUS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ASTRALUS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/BUCHHOLZ-DIGITAL Buchholz Digital GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">BUCHHOLZ-DIGITAL</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/DRESO_DE-FFM_RZ1, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">DRESO_DE-FFM_RZ1</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IN-ULM, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IN-ULM</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/VELIANET-AS velia.net Internetdienste GmbH, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">VELIANET-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/AS6878, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">AS6878</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/AMB-GENERALI, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">AMB-GENERALI</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/PROINITY PROINITY, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">PROINITY</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/LUMASERV LUMASERV Systems, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">LUMASERV</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 200615</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MYVIRTUALSERVER myVirtualserver, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MYVIRTUALSERVER</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 29494</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/MESSE-DUESSELDORF-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">MESSE-DUESSELDORF-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/CREW-AS Hamburg, Germany, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">CREW-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INTERNETT-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INTERNETT-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/WAG Bredenhop 20, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">WAG</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN 34878</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/KIT Karlsruhe Institute of Technology, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">KIT</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/NEXINTO-, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">NEXINTO</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/OBIS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">OBIS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/INTERSOLUTE, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">INTERSOLUTE</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/ISPPRO-AS ISPPRO-AS covers the networks of ISPpro, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">ISPPRO-AS</nuxt-link>
          </div>
        </li>
        <li class="w-full sm:w-1/2 md:w-1/3 p-1">
          <div class="bg-white rounded shadow-md leading-normal p-3 overflow-hidden">
            <p class="font-bold font-mono">ASN</p>
            <img v-bind:src="generatePath('DE')" class="inline w-9 h-4 mr-1">
            <nuxt-link to="/org/IBH-AS, DE" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">IBH-AS</nuxt-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <navfooter></navfooter>
</div>
</template>

<script>
import Footer from '@/components/navfooter.vue'
import Navbar from '@/components/navheader.vue'

export default {
  components: {
    navheader: Navbar,
    navfooter: Footer
  },
  head() {
    return {
      title: 'Open source ASN lookup',
      meta: [{
        hid: 'description',
        name: 'description',
        content: 'Purplepee is a simple tool allowing individuals to view all sort of analytics data about the current state and structure of the internet.'
      }]
    }
  },
  methods: {
    generatePath(image) {
      return require('~/assets/svg/' + image.toLowerCase() + '.svg')
    }
  }
}
</script>
