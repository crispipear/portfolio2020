<style lang="scss" scoped>
  .cs__video{
    width: 70%;
    margin: auto;
    &-video{
      margin-top: $spacing-xl;
      padding-bottom: 56.25%;
      width: 100%;
      height: 0;
      position: relative;
      iframe{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    @include tablet{
      width: 100%;
      padding: $spacing-l!important;
      &-video{
        margin-top: $spacing-l;
      }
    }
  }
</style>
<template>
  <div class="cs__video">
    <prismic-rich-text :field="text" class="header"/>
    <div class="cs__video-video">
      <iframe :src="video_link" frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: Array,
    video_link: String
  }
}
</script>