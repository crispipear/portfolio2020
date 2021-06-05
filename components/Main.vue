<template>
  <div class="main" v-if="introData">
    <div id="hero_img_b" :class="hidden ? 'hero-img' :'hero-img hero-img-show-b'">
      <img src="/hero.png" id="hero_img_bLeft" />
      <img src="/hero.png" id="hero_img_bRight" />
    </div>
    <div id="hero_img_t" :class="hidden ? 'hero-img' :'hero-img hero-img-show-t'">
      <img src="/hero.png" id="hero_img_tLeft" />
      <img src="/hero.png" id="hero_img_tRight" />
    </div>
    <Window topBarText="intro.txt" :width="55">
      <prismic-rich-text class="hero-intro__header styled-text" :field="introData.intro_header" />
    </Window>
    <Window topBarText="hello.exe" :width="30">
      <button @click="toggle" class="hero-button">
        <span>✨(ㆆ◡ㆆ)✌️</span>
        <span class="styled-title">{{ this.hidden ? "ni hao!" : "bye bye!" }}</span>
      </button>
      <prismic-rich-text class="hero-intro__content" :field="introData.content_primary" />
    </Window>
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
<style lang="scss" scoped>
  .main {
    margin-left: calc(100% - #{$width-main});
    padding: $spacing-l;
    width: $width-main;
    /deep/ a {
      @extend .link-hover;
    }
  }
  .hero-intro__header {
    /deep/ h2{
      font-size: $fs-l;
    }
  }
  .hero-intro__content {
    /deep/ h2{
      font-size: $fs-m;
    }
  }
  .hero-button{
    margin-bottom: $spacing-xxs;
    span {
      font-size: $fs-s;
      cursor: var(--cursor-pointer);
      font-weight: $fw-m;
    }
    span:first-child {
      font-weight: $fw-b;
    }
  }
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
</style>