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
    position: fixed;
    transition: opacity 0.4s;
    pointer-events: none;
  }
</style>
<script>
  export default {
    data: () => ({
      loading: true
    }),
    computed: {
      style () {
        return {
          opacity: this.loading ? 1 : 0
        }
      }
    },
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    },
    mounted() {
      setTimeout(() => {
        this.finish();
      }, 1500)
    }
  }
</script>
