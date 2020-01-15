<template>
<div class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">{{ resultsTitle }}<strong class="font-bold">{{ queryTitle }}</strong></h1>
</div>
</template>

<script>
export default {
  props: {
    results: Number,
    query: Array
  },
  computed: {
    queryTitle() {
      return this.query[0] + ' ' + this.query[1]
    },
    resultsTitle() {
      const results = this.results

      if (results === 0) {
        return 'No results found for '
      } else if (results === 1) {
        return '1 result found for '
      } else {
        return results + ' results found for '
      }
    }
  }
}
</script>
