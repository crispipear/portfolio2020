<style lang="scss" scoped>
  .cs__images-list{
    img{
      width: 75%;
      margin-bottom: $spacing-l;
      &:nth-child(odd){
        width: 75%;
        margin-left: 25%;
      }
    }
  }
</style>
<template>
  <div class="cs__images-list">
    <prismic-image
      :field="item.image" 
      v-for="(item, index) in items"
      :key="index"
    />
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
  }
}
</script>