<template>
    <div class="hero" v-if="introData">
      <img src="/hero.png" id="hero_img" :class="heroImgClass" />
      <div class="scroll-indicator">
        <div class="scroll">
          <div class="scroll-line"></div>
        </div>
      </div>
      <div class="hero-intro">
        <prismic-rich-text :field="introData.intro_header"/>
        <div class="grid-container">
          <div>
            <span class="styled-title" @mouseover="mouseOver" @mouseleave="mouseLeave">syl.</span>
          </div>
          <prismic-rich-text :field="introData.content_primary"/>
        </div>
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
    h1{
      font-size: $fs-xl;
      font-weight: $fw-m;
      margin-bottom: $spacing-s;
      width: 60%;
      line-height: 1.6;
    }
    h2{
      @extend .text-body;
      font-size: $fs-m;
    }
    a{
      @extend .link-hover;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: relative;
    .styled-title{
      font-size: $fs-xxl * 3;
      cursor: pointer;
      opacity: 1;
      transition: all 0.16s;
      &:hover{
        opacity: 0.6;
      }
    }
    .grid-container{
      border-top: 1px $border solid;
      margin-top: $spacing-l;
      padding-top: $spacing-l;
      grid-template-columns: 60% 40%;
    }
  }
</style>