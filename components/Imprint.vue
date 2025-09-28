<template>
<div class="container mx-auto px-4 py-8">
  <div class="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl mx-3 md:mx-0 mb-6 px-6 py-8">
    <h1 class="text-3xl font-bold text-white mb-2">Legal Disclosure</h1>
    <small class="block text-sm text-white/70 mb-6">Information in accordance with Section 5 TMG</small>
    <address class="block mb-6 text-white/90 font-medium">
      {{ config.public.IMPRINT_NAME }}<br>
      {{ config.public.IMPRINT_STREET }}<br>
      {{ config.public.IMPRINT_LOCATION }}
    </address>

    <h2 class="text-2xl font-semibold text-white mb-4">Contact Information</h2>
    <address class="block mb-6 text-white/90">
      E-Mail: {{ config.public.IMPRINT_EMAIL }}
    </address>

    <h2 class="text-2xl font-semibold text-white mb-4">Disclaimer</h2>
    <h3 class="text-lg font-medium text-white/95 mb-3">Accountability for content</h3>
    <p class="mb-6 text-white/80 leading-relaxed">The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents'
      accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for
      our own content on these web pages. In this matter, please note that we are not obliged to monitor
      the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.
      Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per
      §§ 8 to 10 of the Telemedia Act (TMG).</p>

    <h3 class="text-lg font-medium text-white/95 mb-3">Accountability for links</h3>
    <p class="mb-6 text-white/80 leading-relaxed">Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were
      evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective
      link immediately.</p>

    <h3 class="text-lg font-medium text-white/95 mb-3">Copyright</h3>
    <p class="text-white/80 leading-relaxed">
      Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law, every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of
      the respective owner of the rights. Individual reproductions of a work are only allowed for private use. The materials from these pages are copyrighted and any unauthorized use may violate copyright laws.</p>
  </div>
</div>
</template>

<script setup>
const config = useRuntimeConfig()
</script>
