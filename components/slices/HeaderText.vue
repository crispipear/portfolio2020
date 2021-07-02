<style lang="scss" scoped>
  .cs__header-text{
    border: $border;
    width: 100%;
    .grid-container{
      width: 70%;
      margin: auto;
      grid-template-columns: 1fr 2.5fr;
    }
    @include tablet{
      .grid-container{
        width: 100%;
      }
    }
  }
</style>
<template>
  <div class="cs__header-text">
    <div class="grid-container">
      <Header>{{header}}</Header>
      <prismic-rich-text :field="text" class="text"/>
    </div>
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