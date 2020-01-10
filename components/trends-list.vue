<template>
<div id="xhr" v-if="!loadingIndicator" class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">Explore current <strong class="font-bold">trends</strong></h1>

  <ul class="flex content-start flex-wrap bg-gray-200 mb-6 mx-2 md:mx-0 p-1">
    <li v-for="result in results" class="w-full sm:w-1/2 md:w-1/3 p-1">
      <div class="bg-white rounded shadow-md leading-normal p-3">
        <span><img v-if="isCountry(result.trend)" v-bind:src="generatePath(generateName(result.trend))" class="inline w-9 h-4 mr-1"></span>
        <nuxt-link v-bind:to="generateLink(result.trend)" class="font-mono font-light text-base text-blue-500 hover:text-blue-700">{{ generateName(result.trend) }}</nuxt-link>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: {
    results: Array
  },
  computed: {
    loadingIndicator() {
      return this.$store.state.loading
    }
  },
  methods: {
    isCountry(path) {
      const r = path.split(':').filter(Boolean)

      if (r.length >= 2) {
        const match = r.splice(-2)[0]

        if (match.length >= 2) {
          const prefix = match.split('/')[2]

          if (prefix === 'country') {
            return true
          }
        }
      }
    },
    generatePath(image) {
      return require('~/assets/svg/' + image.toLowerCase() + '.svg')
    },
    generateName(path) {
      const r = path.split(':').filter(Boolean)
      return r.splice(-1)[0]
    },
    generateLink(path) {
      const r = path.split(':').filter(Boolean)

      if (r.length >= 2) {
        const query = r.splice(-1)[0]
        const match = r.splice(-2)[0]

        if (match.length >= 2) {
          const prefix = match.split('/')[2]
          return '/' + prefix + '/' + query
        }
      }
    }
  }
}
</script>
