<template>
<div class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">{{ results.length }} results for <strong class="font-bold">{{ query }}</strong></h1>
</div>
</template>

<script>
export default {
  props: {
    results: Array,
    query: String
  }
}
</script>
