<style lang="scss" scoped>
  .cs-hero {
    &-left {
      align-items: center;
      img {
        width: 100%;
        max-height: 60vh;
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
        margin-bottom: $spacing-xxs;
      }
      div{
        font-size: $fs-xs;
        strong{
          display: block;
          margin-bottom: 0;
        }
        margin-bottom: $spacing-xs;
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
            <strong class="styled-text">timeframe</strong>
            <span>{{timeframe}}</span>
          </div>
          <div>
            <strong class="styled-text">what I did</strong>
            <span>{{role}}</span>
          </div>
          <div>
            <strong class="styled-text">tech/tools</strong>
              <span v-for="t in tools.split(',')" :key="t.name" class="tag">
                {{t}}
              </span>
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