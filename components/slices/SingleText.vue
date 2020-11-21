<style lang="scss" scoped>
  .cs__single-text{
    width: 60%;
  }
</style>
<template>
  <div class="cs__single-text">
    <prismic-rich-text :field="header" class="header"/>
    <prismic-rich-text :field="text" class="text"/>
  </div>
</template>
<script>
export default {
  props: {
    header: Array,
    text: Array,
  }
}
</script>