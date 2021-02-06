<template>
    <div class="hero" v-if="introData">
      <div id="hero_img_b" :class="heroImgClassBottom">
        <img src="/hero.png" id="hero_img_bLeft" />
        <img src="/hero.png" id="hero_img_bRight" />
      </div>
      <div id="hero_img_t" :class="heroImgClassTop">
        <img src="/hero.png" id="hero_img_tLeft" />
        <img src="/hero.png" id="hero_img_tRight"/>
      </div>
      <div class="emoticon">
        <div @mouseover="mouseOver" @mouseleave="mouseLeave">
          <span>✨(ㆆ◡ㆆ)✌️</span>
          <span class="link-hover styled-title">ni hao</span>
        </div>
      </div>
      <div class="hero-intro">
        <prismic-rich-text class="styled-title" :field="introData.intro_header"/>
        <prismic-rich-text class="hero-intro__content" :field="introData.content_primary"/>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    introData: Object
  },
  data() {
    return{
      heroImgClassTop: 'hero-img hero-img-hidden-t',
      heroImgClassBottom: 'hero-img hero-img-hidden-b',
    }
  },
  methods: {
    mouseOver: function(){
      this.heroImgClassTop = 'hero-img hero-img-show-t';  
      this.heroImgClassBottom = 'hero-img hero-img-show-b';
    },
    mouseLeave: function(){
      this.heroImgClassTop = 'hero-img';  
      this.heroImgClassBottom = 'hero-img';
    }
  }
}
</script>
<style lang="scss">
  .hero{
    .hero-img{
      position: fixed;
      width: 100%;
      left: 0;
      z-index: 100;
      pointer-events: none;
      transition: 0.28s all ease-in-out;
      img{
        position: absolute;
        width: 100px;
      }
    }
    #hero_img_t{
      top: -100px;
    }
    #hero_img_b{
      bottom: -100px;
    }
    .hero-img-show-t{
      top: 0!important;
    }
    .hero-img-show-b{
      bottom: 0!important;
    }
    #hero_img_bLeft,#hero_img_bRight{
      bottom: 0;
    } 
    #hero_img_tLeft,#hero_img_tRight{
      transform: scaleY(-1);
      top: 0;
    } 
    #hero_img_bLeft, #hero_img_tLeft{
      left: 0;
    }
    #hero_img_bRight, #hero_img_tRight{
      transform: scaleX(-1);
      right: 0;
    }
    #hero_img_tRight{
      transform: scaleY(-1) scaleX(-1);
    }
    h2{
      margin: 0;
    }
    &-intro{
      .styled-title h2{
        line-height: 1.4;
        font-size: $fs-xxl*1.2;
      }
      &__content{
        margin-top: $spacing-l;
        width: 60%;
      }
      &__content h2{
        @extend .text-body;
        font-size: $fs-m;
      }
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: $spacing-xxl*1.2 0;
    position: relative;
    min-height: 100vh;
    .emoticon{
      position: absolute;
      bottom: $spacing-l;
      right: 0;
      div {
        display: inline-block;
      }
      text-align: right;
      opacity: 1;
      transition: all 0.16s;
      &:hover span{
        opacity: 0.8;
      }
      span {
        font-size: $fs-m;
        cursor: pointer;
        font-weight: $fw-m;
      }
      span:first-child {
        font-weight: $fw-b;
      }
    }
    .grid-container{
      grid-template-columns: 60% 40%;
    }
  }
</style>