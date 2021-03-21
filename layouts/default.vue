<template>
  <div id="content__wrapper">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
  export default {
    name: 'default',
    head() {
      return {
        bodyAttrs: {
          class: 'default-layout',
        },
        htmlAttrs: {
          "data-theme": 'dark'
        }
      }
    }
  }
</script>
<style lang="scss">
  body.default-layout{
    background: var(--background-color);
  }
</style>