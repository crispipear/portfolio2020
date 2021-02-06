<template>
  <section id="about" class="about">
    <div class="about-intro-block">
      <span class="styled-title">{{intro_header}}</span>
      <h1>{{intro_sub_header}}</h1>
    </div>
    <div class="about-content-block">
      <prismic-rich-text :field="intro_text" class="text-body" />
      <div class="about-contact-block">
        <img src="/about.jpg" />
        <h2>{{connect_header}}</h2>
        <prismic-rich-text :field="connect_text"/>
        <div class="about-connect-links">
          <a v-for="item in links" :key="item.link_name" :href="item.link" target="_blank">
            {{ item.link_name }}
          </a>
        </div>
      </div>
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
      margin-bottom: $spacing-l;
      font-size: $fs-xl;
    }
    img{
      width: 100%;
      margin-bottom: $spacing-m;
    }
    &-intro-block{
      padding-top: $spacing-xl;
    }
    &-content-block{
      @extend .grid-container;
      grid-template-columns: 1.2fr 1fr;
      margin-top: $spacing-xl;
      column-gap: $spacing-xxl;
      h1{
        margin-top: 0;
      }
    }
    &-contact-block{
      p{
        margin-bottom: $spacing-xs;
      }
      a{
        @extend .link-hover;
      }
      font-size: $fs-s;
    }
    &-connect-links{
      a{
        margin-right: $spacing-xxs;
      }
    }
  }
</style>