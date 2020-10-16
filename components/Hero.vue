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
    em {
      cursor: pointer;
      @extend .link-hover-light;
    }
    h1{
      font-size: $fs-l;
      line-height: 1.6;
      @extend .text-on-dark;
      margin: 0 0 1rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 82vh;
    position: relative;
    .hero-intro{
      margin-top: -12%;
    }
    span{
      @extend .text-stroked;
      text-align: left;
      margin-bottom: 4%;
    }
  }
</style>