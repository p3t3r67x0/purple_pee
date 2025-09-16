export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$slugParam = function <T extends { $route?: any }>(this: T, value?: string | string[]) {
    const param = value ?? this?.$route?.params?.slug

    if (Array.isArray(param)) {
      return param.join('/')
    }

    return param ?? ''
  }
})
