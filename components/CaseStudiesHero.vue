<style lang="scss" scoped>
  .cs-hero {
    padding-top: $spacing-xxl * 1.2;
    height: 100vh;
    width: 100%;
    position: relative;
  }
  img{
    margin-left: -12.5%;
    width: 52.5%;
    max-height: 80%;
    object-fit: contain;
    object-position: left;
    position: absolute;
    left: 0;
    top: 20%;
  }
  .cs-hero-info div{
    margin-bottom: $spacing-s; 
  }
  .cs-hero-right{
    .styled-title{
      text-align: left;
    }
    strong.styled-title{
      margin-bottom: $spacing-xxs;
    }
    h1{
      margin-bottom: $spacing-s;
    }
    h2{
      margin: 0;
      font-size: $fs-m;
    }
    .cs-hero-line{
      height: 1px;
      background: $border;
      width: 100%;
      margin: $spacing-s 0;
    }
    strong, span{
      font-size: $fs-xs;
      display: block;
    }
  }
</style>
<template>
  <div class="cs-hero">
    <div class="scroll-indicator">
      <div class="scroll">
        <div class="scroll-line"></div>
      </div>
    </div>
    <div class="grid-container">
      <div class="cs-hero-left">
        <img :src="coverUrl" />
      </div>
      <div class="cs-hero-right">
        <h1 class="styled-title">{{ name }}</h1>
        <h2 class="text-body">{{ context }}</h2>
        <div class="cs-hero-line" />
        <div class="cs-hero-info">
          <div>
            <strong class="styled-title">timeframe</strong>
            <span>{{timeframe}}</span>
          </div>
          <div>
            <strong class="styled-title">my role</strong>
            <span>{{role}}</span>
          </div>
          <div>
            <strong class="styled-title">tools</strong>
            <span>{{tools}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    coverUrl: String,
    name: String,
    context: String,
    role: String,
    timeframe: String,
    tools: String,
  },
}
</script>