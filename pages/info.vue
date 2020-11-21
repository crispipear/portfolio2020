<template>
  <section id="about" class="about">
    <div class="about-intro-block">
      <span class="styled-title">{{intro_header}}</span>
      <h1>{{intro_sub_header}}</h1>
    </div>
    <div class="about-img"><img src="/about.jpg" /></div>
    <div class="about-content-block">
      <prismic-rich-text :field="intro_text" class="text-body" />
      <div>
        <h1>{{connect_header}}</h1>
        <prismic-rich-text :field="connect_text" class="text-body" />
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
      margin-bottom: $spacing-s;
      font-size: $fs-xl;
    }
    &-img{
      text-align: right;
      margin-right: -12.5%;
      img{
        width: 51.25%;
        transition: filter 0.2s;
        filter: grayscale(100%) contrast(120%) brightness(90%);
        &:hover{
          filter: none;
        }
      }
    }
    &-connect-links{
      a{
        margin-right: $spacing-xxs;
      }
    }
    &-intro-block{
      padding-top: $spacing-xl;
      margin-bottom: -$spacing-xxl;
      h1 {
        width: 50%;
        color: $med;
        line-height: 1.8;
        font-size: $fs-m;
        font-weight: $fw-r;
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
      gap: $spacing-xxl;
      @extend .grid-container;
      grid-template-columns: 1fr 1fr;
      a{
        @extend .link-hover;
      }
      font-size: $fs-s;
    }
  }
</style>