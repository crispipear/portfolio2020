<style lang="scss" scoped>
  .cs-hero {
    &-left {
      align-items: center;
      img {
        width: 100%;
        max-height: 50vh;
        object-fit: contain;
        @include tablet{
          width: 100%;
        }
      }
    }
    &-right{
      h2{
        font-size: $fs-m;
        line-height: 1.6;
        margin-bottom: $spacing-m;
      }
      div{
        font-size: $fs-xs;
        strong{
          display: block;
          font-family: $secFont;
          margin-bottom: 0;
        }
        margin-bottom: $spacing-xxs;
      }
      @include tablet{
        h1{
          line-height: 1.2;
        }
      }
    }
    &-left, &-right{
      height: 100%;
      padding: $spacing-xl;
      display: flex;
      flex-direction: column;
      justify-content: center;
      @include tablet{
        padding: $spacing-l;
      }
    }
    border-bottom: 1px solid $border;
  }
</style>
<template>
  <div class="cs-hero">
    <div class="grid-container">
      <div class="cs-hero-left grid-first">
        <img :src="coverUrl" :alt="name + ' cover'" />
      </div>
      <div class="cs-hero-right grid-sec border">
        <h1 class="styled-title">{{ name }}</h1>
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