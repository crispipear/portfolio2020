<style lang="scss" scoped>
  .cs__header-text{
    padding: $spacing-xxl 10%;
    width: 100%;
    margin: auto;
    @extend .grid-container;
    grid-template-columns: 1fr 2.5fr;
  }
</style>
<template>
  <div class="cs__header-text">
    <h4 class="header">{{header}}</h4>
    <prismic-rich-text :field="text" class="text"/>
  </div>
</template>
<script>
export default {
  props: {
    header: String,
    text: Array,
  }
}
</script>