<template>
    <div class="hero" v-if="introData">
      <div id="hero_img_b" :class="hidden ? 'hero-img' :'hero-img hero-img-show-b'">
        <img src="/hero.png" id="hero_img_bLeft" />
        <img src="/hero.png" id="hero_img_bRight" />
      </div>
      <div id="hero_img_t" :class="hidden ? 'hero-img' :'hero-img hero-img-show-t'">
        <img src="/hero.png" id="hero_img_tLeft" />
        <img src="/hero.png" id="hero_img_tRight"/>
      </div>
      <div class="hero-intro wrapper grid-container">
        <div class="grid-first">
          <div class="emoticon link-hover">
            <div @mouseover="mouseOver" @mouseleave="mouseLeave" @click="toggle">
              <span>✨(ㆆ◡ㆆ)✌️</span>
              <span class="styled-title">ni hao!</span>
            </div>
          </div>
          <prismic-rich-text class="hero-intro__content" :field="introData.content_primary"/>
        </div>
        <div class="grid-sec border">
          <prismic-rich-text class="styled-title" :field="introData.intro_header"/>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return{
      introData: this.$store.state.intro,
      hidden: true,
      heroImgClassTop: 'hero-img hero-img-hidden-t',
      heroImgClassBottom: 'hero-img hero-img-hidden-b',
    }
  },
  methods: {
    toggle: function(){
      this.hidden = !this.hidden;
    },
    mouseOver: function(){
      this.hidden = false;
    },
    mouseLeave: function(){
      this.hidden = true;
    }
  }
}
</script>
<style lang="scss">
  .hero{
    border-bottom: 1px solid var(--border-color);
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
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    &-intro{
      > div {
        padding-top: $spacing-xl;
        padding-bottom: $spacing-xl;
      }
      .styled-title h2{
        line-height: 1.6;
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
        cursor: var(--cursor-pointer);
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
        color: var(--background-color)
      }
    }
  }
</style>