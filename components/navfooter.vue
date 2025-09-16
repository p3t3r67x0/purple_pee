<template>
<div class="bg-purple-700 w-full">
  <div class="container mx-auto">
    <div class="table w-full px-3 md:px-0 pt-6">
      <div class="block sm:w-1/6 sm:table-cell">
        <p class="uppercase font-bold font-mono text-white text-md sm:mb-6">Links</p>
        <ul class="list-reset text-base mb-6">
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="faqUrl" class="text-white hover:text-gray-200">FAQ</nuxt-link>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="helpUrl" class="text-white hover:text-gray-200">Help</nuxt-link>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="supportUrl" class="text-white hover:text-gray-200">Support</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="block sm:w-1/6 sm:table-cell">
        <p class="uppercase font-bold font-mono text-white text-md sm:mb-6">Service</p>
        <ul class="list-reset text-base mb-6">
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <a v-bind:href="apiUrl" target="_blank" class="text-white hover:text-gray-200">API</a>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="docsUrl" class="text-white hover:text-gray-200">Docs</nuxt-link>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <a v-bind:href="issuesUrl" target="_blank" class="text-white hover:text-gray-200">Issues</a>
          </li>
        </ul>
      </div>
      <div class="block sm:w-1/6 sm:table-cell">
        <p class="uppercase font-bold font-mono text-white text-md sm:mb-6">Social</p>
        <ul class="list-reset text-base mb-6">
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <a v-bind:href="twitterUrl" target="_blank" class="text-white hover:text-gray-200">Twitter</a>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <a v-bind:href="facebookUrl" target="_blank" class="text-white hover:text-gray-200">Facebook</a>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <a v-bind:href="linkedinUrl" target="_blank" class="text-white hover:text-gray-200">Linkedin</a>
          </li>
        </ul>
      </div>
      <div class="block sm:w-1/6 sm:table-cell">
        <p class="uppercase font-bold font-mono text-white text-md sm:mb-6">Project</p>
        <ul class="list-reset text-base mb-6">
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="aboutUrl" class="text-white hover:text-gray-200">About</nuxt-link>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="contactUrl" class="text-white hover:text-gray-200">Contact</nuxt-link>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="blogUrl" class="text-white hover:text-gray-200">Blog</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="block sm:w-1/6 sm:table-cell">
        <p class="uppercase font-bold font-mono text-white text-md sm:mb-6">Legal</p>
        <ul class="list-reset text-base mb-6">
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="termsUrl" class="text-white hover:text-gray-200">Terms</nuxt-link>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="privacyUrl" class="text-white hover:text-gray-200">Privacy</nuxt-link>
          </li>
          <li class="mt-2 inline-block mr-2 sm:block sm:mr-0">
            <nuxt-link v-bind:to="imprintUrl" class="text-white hover:text-gray-200">Imprint</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      faqUrl: '',
      helpUrl: '',
      supportUrl: '',
      apiUrl: '',
      docsUrl: '',
      issuesUrl: '',
      twitterUrl: '',
      facebookUrl: '',
      linkedinUrl: '',
      aboutUrl: '',
      contactUrl: '',
      blogUrl: '',
      termsUrl: '',
      privacyUrl: '',
      imprintUrl: ''
    }
  },
  created() {
    const env = this.$env || {}
    this.faqUrl = env.FAQ_URL || '#'
    this.helpUrl = env.HELP_URL || '#'
    this.supportUrl = env.SUPPORT_URL || '#'
    this.apiUrl = env.API_URL || '#'
    this.docsUrl = env.DOCS_URL || '#'
    this.issuesUrl = env.ISSUES_URL || '#'
    this.twitterUrl = env.TWITTER_URL || '#'
    this.facebookUrl = env.FACEBOOK_URL || '#'
    this.linkedinUrl = env.LINKEDIN_URL || '#'
    this.aboutUrl = env.ABOUT_URL || '#'
    this.contactUrl = env.CONTACT_URL || '#'
    this.blogUrl = env.BLOG_URL || '#'
    this.termsUrl = env.TERMS_URL || '#'
    this.privacyUrl = env.PRIVACY_URL || '#'
    this.imprintUrl = env.IMPRINT_URL || '#'
  }
}
</script>
