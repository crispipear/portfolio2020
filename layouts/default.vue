<template>
  <div>
    <LoadingScreen :removeLoadScreen="removeLoadScreen"/>
    <Nav v-if="!isLoading"/>
    <Nuxt v-if="!isLoading"/>
  </div>
</template>
<script>
  export default {
    name: 'default',
    data() {
      return {
        isLoading: true,
        removeLoadScreen: false,
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
        this.checkIsLoading();
      })
    },
    methods: {
      checkIsLoading: function() {
        if (this.$store.state.isDoneFetching){
          setTimeout(() => {
            this.isLoading = false;
            document.documentElement.style.overflow = 'auto';
          }, 100);
          setTimeout(() => {
            this.removeLoadScreen = true;
          }, 1000)
        } else {
          setTimeout(() => {
            this.checkIsLoading();
          }, 200)
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