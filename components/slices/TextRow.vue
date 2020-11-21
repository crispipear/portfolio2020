<style lang="scss" scoped>
  .cs__row-text{
    width: 60%;
    margin: auto;
    .text{
      font-size: $fs-l;
      font-family: $secFont;
    }
  }
</style>
<template>
  <div class="cs__row-text">
    <prismic-rich-text :field="text" class="text"/>
  </div>
</template>
<script>
export default {
  props: {
    text: Array,
  }
}
</script>