<template>
  <div v-if="introData">
    <Window topBarText="hello.exe">
      <button @click="toggleImages()" class="hero-button">
        <span>✨(ㆆ◡ㆆ)✌️</span>
        <span class="styled-title">{{ hidden ? "ni hao!" : "bye bye!" }}</span>
      </button>
      <prismic-rich-text class="hero-intro__content" :field="introData.content_primary" />
    </Window>
  </div>
</template>
<script>
export default {
  data() {
    return{
      introData: this.$store.state.intro,
    }
  },
  props: {
    toggleImages: Function,
    hidden: Boolean
  }
}
</script>
<style lang="scss" scoped>
  .hero-intro__content {
    /deep/ a {
      @extend .link-hover;
    }
    /deep/ h2{
      font-size: $fs-m;
      @extend .text-body;
      @include mobile {
        font-size: $fs-s;;
      }
    }
  }
  .hero-button{
    margin-bottom: $spacing-s;
    span {
      font-size: $fs-s;
      cursor: var(--cursor-pointer);
      font-weight: $fw-m;
    }
    span:first-child {
      font-weight: $fw-b;
    }
  }
</style>