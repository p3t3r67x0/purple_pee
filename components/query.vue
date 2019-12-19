<template>
<div class="container mx-auto mb-3">
  <h1 class="text-xl font-thin">Results for <strong class="font-bold">{{ query }}</strong></h1>
</div>
</template>

<script>
export default {
  props: {
    query: String
  }
}
</script>
