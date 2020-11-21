<style lang="scss" scoped>
  .cs__text-image{
    img{
      width: 100%;
    }
    column-gap: $spacing-xxl;
    align-items: center;
  }
  .cs__text-image.reverse{
    div:first-of-type{
      order: 2;
    } 
    div:last-of-type{
      order: 1;
    }
  }
</style>
<template>
  <div :class="reverse ? 'cs__text-image grid-container reverse' : 'cs__text-image grid-container'">
    <div>
      <prismic-rich-text :field="header" class="header"/>
      <prismic-rich-text :field="text" class="text"/>
    </div>
    <div>
      <prismic-image :field="image" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reverse: Boolean,
    header: Array,
    text: Array,
    image: Object,
  }
}
</script>