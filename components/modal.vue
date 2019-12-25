<template>
<div class="fixed top-0 right-0 left-0 m-3 flex items-center justify-center">
  <div v-bind:class="errorStatusClass" class="w-full max-w-xl rounded shadow-md bg-white px-3 pt-2 pb-3">
    <svg v-on:click="closeModal" class="bg-text-900 fill-current float-right cursor-pointer -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path class="heroicon-ui" d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" /></svg>
    <h2 class="text-xl font-medium">{{ errorTitle }}</h2>
    <p class="font-thin">{{ errorMessage }}</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      errorTitle: '',
      errorStatusClass: '',
      errorCloseClass: ''
    }
  },
  mounted() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal()
      }
    })

    if (this.errorStatus === 409 || this.errorStatus === 404) {
      this.errorTitle = 'Warning'
      this.errorStatusClass = 'bg-orange-300'
    } else if (this.errorStatus === 500 || this.errorStatus === 400 || this.errorStatus === 401 || this.errorStatus === 405) {
      this.errorTitle = 'Error'
      this.errorStatusClass = 'bg-red-300'
    } else {
      this.errorTitle = 'Hint'
      this.errorStatusClass = 'bg-gray-300'
    }
  },
  computed: {
    errorMessage() {
      let errorMessage = this.$store.state.errorMessage

      if ('message' in errorMessage) {
        errorMessage = errorMessage.message
      }

      return errorMessage
    },
    errorStatus() {
      return this.$store.state.errorStatus
    }
  },
  watch: {
    errorMessage: function() {},
    errorStatus: function() {}
  },
  methods: {
    closeModal() {
      this.$store.commit('updateModalVisible', false)
      this.$store.commit('updateErrorMessage', null)
      this.$store.commit('updateErrorStatus', null)
    }
  }
}
</script>
