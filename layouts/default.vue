<template>
  <div id="content__wrapper">
    <Nav />
    <Nuxt />
  </div>
</template>
<script>
    export default {
      name: 'default',
      head() {
          return {
              bodyAttrs: {
                  class: 'default-layout'
              }
          }
      }
    }
</script>
<style lang="scss">
  body.default-layout{
    background: $dark;
  }
</style>