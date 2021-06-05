<template>
  <div class="window" :style="style">
    <div class="window__top-bar">
      {{ topBarText }}
    </div>
    <div class="window__content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return{
      introData: this.$store.state.intro,
    }
  },
  computed: {
    style () {
      return {
        'width': this.width + '%'
      }
    }
  },
  props: {
    topBarText: String,
    width: Number
  },
}
</script>
<style lang="scss" scoped>
  .window {
    border: var(--border-color) 1px solid;
    display: inline-block;
    margin: 2%;
  }
  .window__content{
    padding: $spacing-m;
  }
  .window__top-bar {
    padding: $spacing-xxs $spacing-m;
    font-family: $secFont;
    font-size: $fs-xxs;
    color: var(--background-color);
    background-color: var(--text-strong-color);
  }
</style>