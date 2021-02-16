<template>
  <section id="about" class="about">
    <div class="about-intro-block">
      <div class="wrapper">
        <span class="styled-title">{{data.intro_header}}</span>
        <h1>{{data.intro_sub_header}}</h1>
      </div>
    </div>
    <div class="about-content-block">
      <div class="wrapper grid-container">
        <prismic-rich-text :field="data.intro_text" class="text-body grid-first border" />
        <div class="about-contact-block grid-sec">
          <img src="/about.jpg" />
          <h3>{{data.connect_header}}</h3>
          <prismic-rich-text :field="data.connect_text" class="connect-text"/>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  transition: {name: 'slide-right', mode: 'out-in'},
  data() {
    return {
      data: this.$store.state.about
    }
  },
}
</script>
<style lang="scss" scoped>
  .about{
    .styled-title{
      margin-bottom: $spacing-l;
      font-size: $fs-xl;
    }
    img{
      width: 100%;
      margin-bottom: $spacing-m;
    }
    &-intro-block{
      border-bottom: 1px solid $border;
      padding: $spacing-xl 0;
      h1{
        width: 60%;
      }
      @include tablet{
        padding: $spacing-xl $spacing-l;
        h1{
          width: 100%;
        }
      }
    }
    &-content-block{
      .grid-container{
        .grid-first, .grid-sec{
          padding-top: $spacing-xl;
          padding-bottom: $spacing-xl;
        }
      }
      h1{
        margin-top: 0;
      }
    }
    &-contact-block{
      h3{
        margin: 0 0 $spacing-xs;
      }
      /deep/ .connect-text a{
        @extend .link-hover;
      }
    }
  }
</style>