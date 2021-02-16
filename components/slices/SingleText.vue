<style lang="scss" scoped>
  .cs__single-text{
    div{
      width: 80%;
    }
    img{
      width: 100%;
      margin-top: $spacing-s;
    }
    @include tablet{
      div{
        width: 100%;
      }
      padding: $spacing-l!important;
    }
  }
</style>
<template>
  <div class="cs__single-text">
    <div>
      <h4 class="header">{{header}}</h4>
      <prismic-rich-text :field="text" class="text"/>
    </div>
    <prismic-image 
      v-for="(item, key) in items"
      :key="'img'+key"
      :field="item.image"
    />
  </div>
</template>
<script>
export default {
  props: {
    header: String,
    text: Array,
    items: Array
  }
}
</script>