<template>
<div class="bg-purple-700 mb-6">
  <div class="container mx-auto ">
    <div class="flex items-center py-2">
      <div class="w-11/12 flex items-center">
        <nuxt-link to="/">
          <svg class="h-8 w-8 fill-current text-white" aria-labelledby="purple-pee-icon" role="img" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <title id="purple-pee-icon">Purple Pee icon</title>
            <path
              d="M10,0.4c-5.295,0-9.601,4.307-9.601,9.6S4.705,19.6,10,19.6c5.293,0,9.6-4.307,9.6-9.6S15.293,0.4,10,0.4z   M18.188,10c0,1.873-0.636,3.6-1.696,4.98c-0.3-0.234-0.619-0.867-0.319-1.523c0.303-0.66,0.382-2.188,0.312-2.783  c-0.066-0.594-0.375-2.025-1.214-2.039c-0.838-0.012-1.413-0.289-1.911-1.283c-1.033-2.068,1.939-2.465,0.906-3.609  c-0.289-0.322-1.783,1.322-2.002-0.869C12.25,2.717,12.399,2.482,12.6,2.238C15.844,3.328,18.188,6.395,18.188,10z M8.875,1.893  C8.679,2.275,8.162,2.43,7.848,2.717C7.164,3.336,6.87,3.25,6.502,3.844C6.131,4.438,4.935,5.293,4.935,5.723  s0.604,0.936,0.906,0.838c0.302-0.1,1.099-0.094,1.567,0.07c0.469,0.166,3.914,0.332,2.816,3.244  c-0.348,0.926-1.873,0.77-2.279,2.303c-0.061,0.225-0.272,1.186-0.285,1.5c-0.025,0.486,0.344,2.318-0.125,2.318  c-0.471,0-1.738-1.639-1.738-1.936s-0.328-1.338-0.328-2.23c0-0.891-1.518-0.877-1.518-2.062c0-1.068,0.823-1.6,0.638-2.113  c-0.181-0.51-1.627-0.527-2.23-0.59C3.412,4.334,5.889,2.307,8.875,1.893z M7.424,17.77c0.492-0.26,0.542-0.596,0.988-0.613  c0.51-0.023,0.925-0.199,1.5-0.326c0.51-0.111,1.423-0.629,2.226-0.695c0.678-0.055,2.015,0.035,2.375,0.689  c-1.295,0.861-2.848,1.363-4.514,1.363C9.1,18.188,8.234,18.039,7.424,17.77z" />
          </svg>
        </nuxt-link>
        <div class="ml-2 w-1/2">
          <search></search>
        </div>
        <div class="ml-4 w-1/2">
          <ul class="text-sm flex items-center">
            <li class="mr-3">
              <a href="#" class="no-underline text-gray-200">
                BGP
              </a>
            </li>
            <li class="mr-3">
              <nuxt-link to="/dns" class="no-underline text-gray-200">
                DNS
              </nuxt-link>
            </li>
            <li class="mr-3">
              <nuxt-link to="/asn" class="no-underline text-gray-200">
                ASN
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-1/12 text-right flex items-center justify-end">
        <div class="flex items-center">
          <div>
            <img class="h-8 w-8 inline-block rounded" src="https://pbs.twimg.com/profile_images/1153390146160680960/CqKQTt7C_400x400.jpg">
          </div>
          <div class="">
            <svg class="fill-current text-gray-200 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" /></svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Search from '@/components/search.vue'

export default {
  components: {
    search: Search
  }
}
</script>
