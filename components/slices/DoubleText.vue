<style lang="scss" scoped>
  .cs__double-text{
    column-gap: $spacing-xxl;
  }
</style>
<template>
  <div class="cs__double-text grid-container">
    <div>
      <prismic-rich-text :field="header_left" class="header" />
      <prismic-rich-text :field="text_left" class="text" />
    </div>
    <div>
      <prismic-rich-text :field="header_right" class="header" />
      <prismic-rich-text :field="text_right" class="text" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    header_left: Array,
    text_left: Array,
    header_right: Array,
    text_right: Array,
  }
}
</script>