<template>
  <div class="grey darken-1 empty-layout">
    <router-view />
  </div>
</template>

<script>
import messages from '../messages'
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      console.log(fbError.code)
      this.$error(messages[fbError.code] || 'Something went wrong')
    }
  }
}
</script>

<style lang="scss">

</style>
