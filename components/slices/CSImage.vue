<style lang="scss" scoped>
  .cs__image{
    img {
      width: 100%;
    }
    span{
      font-size: $fs-xxs;
    }
  }
</style>
<template>
  <div class="cs__image">
    <prismic-image :field="image"/>
    <span>
      {{caption}}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    image: Object,
    caption: String,
  }
}
</script>