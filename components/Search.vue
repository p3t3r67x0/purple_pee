<template>
  <SearchBar 
    :autofocus="true"
    input-id="global-search"
    :use-store="true"
    @search="emit('search')"
  />
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue'

const emit = defineEmits<{
  search: []
}>()
</script>
