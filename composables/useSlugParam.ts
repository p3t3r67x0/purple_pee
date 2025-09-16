import { computed } from 'vue'
import { useRoute } from '#app'

export const useSlugParam = () => {
  const route = useRoute()

  return computed(() => {
    const param = route.params.slug

    if (Array.isArray(param)) {
      return param.join('/')
    }

    return typeof param === 'string' ? param : ''
  })
}

export const resolveSlugParam = (value?: string | string[]) => {
  if (Array.isArray(value)) {
    return value.join('/')
  }

  return value ?? ''
}
