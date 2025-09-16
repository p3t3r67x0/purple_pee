import { useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const env = config.public

  nuxtApp.provide('env', env)
})
