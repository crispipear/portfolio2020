<style lang="scss" scoped>
  .cs-hero {
    padding-top: $spacing-xxl;
    height: 100vh;
    width: 100%;
    position: relative;
  }
  img{
    margin-left: -12.5%;
    width: 52.5%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .cs-hero-info div{
    margin-bottom: $spacing-s; 
  }
  .cs-hero-right{
    padding-top: $spacing-l;
    h1, h2{
      margin: 0;
    }
    h2{
      font-size: $fs-m;
    }
    .cs-hero-line{
      height: 1px;
      background: $border;
      width: 100%;
      margin: $spacing-m 0;
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
        <h1>{{ name }}</h1>
        <h2 class="text-body">{{ context }}</h2>
        <div class="cs-hero-line" />
        <div class="cs-hero-info">
          <div>
            <strong>timeframe</strong>
            <span>{{timeframe}}</span>
          </div>
          <div>
            <strong>my role</strong>
            <span>{{role}}</span>
          </div>
          <div>
            <strong>tools</strong>
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