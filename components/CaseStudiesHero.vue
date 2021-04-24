<style lang="scss" scoped>
.cs-hero {
    h2 {
      font-size: $fs-m;
      line-height: 1.6;
    }

    &-info{
      grid-template-columns: 2fr 2fr 1fr;
      column-gap: $spacing-l;
      div {
        font-size: $fs-xs;

        strong {
          display: block;
          margin-bottom: 0;
        }
        margin-top: $spacing-l;
        margin-bottom: $spacing-xs;
      }
    }
    padding: $spacing-xl 0;
    border-bottom: 1px solid var(--border-color);
    @include tablet {
      padding: $spacing-l $spacing-m;
      h1 {
        line-height: 1.2;
        font-size: $fs-l;
      }
    }
}
</style>
<template>
  <div class="cs-hero">
    <div class="wrapper">
      <h1 class="styled-title">{{ name }}</h1>
      <h2 class="text-body">{{ context }}</h2>
      <div class="cs-hero-line" />
      <div class="cs-hero-info grid-container">
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
        <div>
          <strong class="styled-text">timeframe</strong>
          <span>{{timeframe}}</span>
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