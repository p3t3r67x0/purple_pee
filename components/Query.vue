<template>
<div class="container mx-auto">
  <h1 class="text-xl font-thin mx-3 md:mx-0 mb-3">{{ queryTitle }}</h1>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ results: number; query: Array<string | null | undefined> }>()

const queryTitle = computed(() => {
  const [prefix = '', value = ''] = props.query ?? []
  const decodedValue = typeof value === 'string' ? decodeURIComponent(value) : ''

  return `${prefix} ${decodedValue}`.trim()
})
</script>
