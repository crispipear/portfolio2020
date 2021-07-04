<template>
  <div>
    <LoadingScreen :isLoading="isLoading"/>
    <Nav />
    <Nuxt />
  </div>
</template>
<script>
  export default {
    name: 'default',
    data() {
      return {
        isLoading: true
      }
    },
    head() {
      return {
        bodyAttrs: {
          class: 'default-layout',
        }
      }
    },
    mounted() {
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;
          document.documentElement.style.overflow = 'auto';
        }, 1000)
      })
    }
  }
</script>
<style lang="scss">
  body.default-layout{
    background: var(--background-color);
  }
</style>