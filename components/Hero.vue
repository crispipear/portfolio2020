<template>
    <div class="hero" v-if="introData">
      <img src="/hero.png" id="hero_img_bLeft" :class="heroImgClass" />
      <img src="/hero.png" id="hero_img_bRight" :class="heroImgClass" />
      <img src="/hero.png" id="hero_img_tLeft" :class="heroImgClass" />
      <img src="/hero.png" id="hero_img_tRight" :class="heroImgClass" />
      <div class="scroll-indicator">
        <div class="scroll">
          <div class="scroll-line"></div>
        </div>
      </div>
      <div class="emoticon">
        <span @mouseover="mouseOver" @mouseleave="mouseLeave">(ㆆ◡ㆆ)</span>
        <span>hi</span>
      </div>
      <div class="hero-intro">
        <prismic-rich-text :field="introData.intro_header"/>
        <prismic-rich-text :field="introData.content_primary"/>
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
      heroImgClass: 'hero-img hero-img-hidden'
    }
  },
  methods: {
    mouseOver: function(){
      this.heroImgClass = 'hero-img hero-img-show';  
    },
    mouseLeave: function(){
      this.heroImgClass = 'hero-img hero-img-hidden';
    }
  }
}
</script>
<style lang="scss">
  .hero{
    .hero-img{
      position: fixed;
      width: 100px;
      z-index: 100;
      pointer-events: none;
      transition: 0.16s all ease-in-out;
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
    .hero-img-show{
      opacity: 1;
    }
    .hero-img-hidden{
      opacity: 0;
    }
    h1{
      font-size: $fs-l;
      margin-bottom: $spacing-s;
      line-height: 1.6;
      font-family: $secFont;
    }
    h2{
      @extend .text-body;
      font-size: $fs-s;
    }
    a{
      @extend .link-hover;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: $spacing-xxl*1.4 0;
    height: 100vh;
    position: relative;
    .emoticon{
      text-align: right;
      opacity: 1;
      transition: all 0.16s;
      cursor: pointer;
      &:hover{
        opacity: 0.8;
      }
      span {
        font-size: $fs-xs;
        font-weight: $fw-m;
      }
      span:first-child {
        font-size: $fs-xxl;
        font-weight: $fw-b;
      }
    }
    .grid-container{
      grid-template-columns: 60% 40%;
    }
  }
</style>