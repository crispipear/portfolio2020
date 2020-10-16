<template>
<section id="about" class="about">
    <span class="text-stroked">{{intro_header}}</span>
    <div class="about-content-block">
        <h1>{{intro_sub_header}}</h1>
        <prismic-rich-text :field="intro_text" class="text-on-dark"/>
    </div>
    <div class="about-img"><img src="/about.jpg"/></div>
    <div class="about-content-block">
        <div>
            <h1>{{connect_header}}</h1>
        </div>
        <div>
            <prismic-rich-text :field="connect_text" class="text-on-dark"/>
        </div>
        <div class="about-connect-links">
            <a 
                v-for="item in links"
                :href="item.link"
                target="_blank"
            >  
                {{ item.link_name }}
            </a>
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
    &-img{
      text-align: right;
      img{
        width: 60%;
        filter: grayscale(100%) contrast(120%) brightness(60%);
      }
    }
    &-connect-links{
      a{
        margin-right: 0.5rem;
      }
    }
    &-content-block{
      width: 80%;
      a{
        @extend .link-hover-light;
      }
      font-size: $fs-m;
      margin: 8% 0;
    }
  }
  #about{
    .text-stroked{
        margin-bottom: 4%;
    }
    h1{
      color: $light;
      margin-bottom: 1.2rem;
      font-size: $fs-l;
    }
  }
</style>