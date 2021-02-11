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
      <div class="hero-intro wrapper grid-container">
        <div>
          <prismic-rich-text class="styled-title" :field="introData.intro_header"/>
        </div>
        <div>
          <div class="emoticon link-hover">
            <div @mouseover="mouseOver" @mouseleave="mouseLeave">
              <span>✨(ㆆ◡ㆆ)✌️</span>
              <span class="styled-title">ni hao!</span>
            </div>
          </div>
          <prismic-rich-text class="hero-intro__content" :field="introData.content_primary"/>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return{
      introData: this.$store.state.intro,
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
    border-bottom: 1px solid $border;
    position: relative;
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
    .grid-container{
      grid-template-columns: 1.2fr 1fr;
      align-items: center;
    }
    &-intro{
      > div {
        padding: $spacing-xl 0;
      }
      > div:first-child{
        padding-right: $spacing-l;
        border-right: 1px solid $border;
      }
      > div:last-child{
        padding-left: $spacing-l;
      }
      .styled-title h2{
        line-height: 1.4;
        font-size: $fs-xl;
      }
      &__content{
        h2{
          @extend .text-body;
          font-size: $fs-s;
        }
      }
    }
    .emoticon{
      margin-bottom: $spacing-xxs;
      div {
        display: inline-block;
      }
      span {
        font-size: $fs-m;
        cursor: $cursor-pointer;
        font-weight: $fw-m;
      }
      span:first-child {
        font-weight: $fw-b;
      }
    }
    .link-hover{
      *{
        transition: all 0.1s;
      }
      &:hover * {
        color: white
      }
    }
  }
</style>