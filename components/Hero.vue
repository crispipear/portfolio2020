<template>
    <div class="hero" v-if="introData">
      <img src="/hero.png" id="hero_img" :class="heroImgClass">
      <div class="scroll-indicator">
        <div class="scroll">
          <div class="scroll-line"></div>
        </div>
      </div>
      <div class="hero-intro">
        <span>createExperiences();</span>
        <prismic-rich-text :field="introData.intro_header" @mouseover="mouseOver" @mouseleave="mouseLeave"/>
        <prismic-rich-text :field="introData.content_primary" />
        <prismic-rich-text :field="introData.content_secondary" />
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
      heroImgClass: 'hero-img-hidden'
    }
  },
  methods: {
    mouseOver: function(){
      this.heroImgClass = 'hero-img-show';  
    },
    mouseLeave: function(){
      this.heroImgClass = 'hero-img-hidden';
    }
  }
}
</script>
<style lang="scss">
  .hero{
    #hero_img{
      position: fixed;
      left: 0;
      width: 100px;
      z-index: 10;
      pointer-events: none;
      transition: 0.16s all ease-in-out;
    }
    .hero-img-show{
      opacity: 1;
      bottom: 0px;
    }
    .hero-img-hidden{
      opacity: 0;
      bottom: -12px;
    }
    strong:first-child {
      cursor: pointer;
      @extend .link-hover-light;
    }
    h1, h2{
      line-height: 1.6;
      @extend .text-on-dark;
    }
    h1{
      font-size: $fs-l;
      margin-bottom: $spacing-s;
    }
    h2{
      font-size: $fs-m;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: relative;
    span{
      @extend .text-stroked;
      text-align: left;
      margin-bottom: $spacing-m;
    }
  }
</style>