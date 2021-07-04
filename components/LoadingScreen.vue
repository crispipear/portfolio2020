<template>
  <BackgroundGradient class="loading-screen" :style="style"/>
</template>
<style lang="scss" scoped>
  .loading-screen {
    z-index: 100;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: black;
    position: fixed!important;
    transition: opacity 0.4s;
    pointer-events: none;
  }
</style>
<script>
  export default {
    props: {
      isLoading: Boolean
    },
    computed: {
      style () {
        return {
          opacity: this.isLoading ? 1 : 0
        }
      }
    },
  }
</script>
