<template>
  <section id="about" class="about">
    <div class="about-img"><img src="/about.jpg" /></div>
    <div class="about-intro-block">
      <span class="styled-title">{{intro_header}}</span>
      <h1>{{intro_sub_header}}</h1>
    </div>
    <div class="about-content-block">
      <div>
        <h1>{{connect_header}}</h1>
        <prismic-rich-text :field="connect_text" class="text-body" />
        <div class="about-connect-links">
          <a v-for="item in links" :href="item.link" target="_blank">
            {{ item.link_name }}
          </a>
        </div>
      </div>
      <prismic-rich-text :field="intro_text" class="text-body" />
    </div>
  </section>
</template>
<script>
export default {
  transition: {name: 'slide-right', mode: 'out-in'},
  async asyncData({app}) {
    const aboutDoc = await app.$prismic.api.getSingle('about');
    return {
        ...aboutDoc.data
    }
  }
}
</script>
<style lang="scss">
  .about{
    .styled-title{
      margin-bottom: $spacing-m;
    }
    &-img{
      margin-top: $spacing-xl;
      text-align: right;
      img{
        width: 45%;
        transition: filter 0.2s;
        filter: grayscale(100%) contrast(120%) brightness(70%);
        &:hover{
          filter: none;
        }
      }
    }
    &-connect-links{
      a{
        margin-right: $spacing-xs;
      }
    }
    &-intro-block{
      border-bottom: 1px $med solid;
      padding-bottom: $spacing-l;
      h1 {
        width: 55%;
        line-height: 1.8;
        font-size: $fs-l;
      }
    }
    &-content-block, &-intro-block{
      margin: $spacing-m 0;
    }
    &-content-block{
      h1{
        @extend .text-header;
        font-family: $secFont;
      }
      padding-top: $spacing-l;
      @extend .grid-container;
      grid-template-columns: 55% 45%;
      a{
        @extend .link-hover;
      }
      font-size: $fs-s;
    }
  }
</style>