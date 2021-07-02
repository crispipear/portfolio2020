<style lang="scss" scoped>
.cs-hero {
  margin-bottom: $spacing-xl;
    h2 {
      font-size: $fs-m;
      line-height: 1.6;
    }

    &-info{
      grid-template-columns: repeat(4, 1fr)!important;
      column-gap: $spacing-l;
      div {
        font-size: $fs-xs;

        strong {
          display: block;
          margin-bottom: $spacing-xs;
        }
        margin-top: $spacing-l;
        margin-bottom: $spacing-xs;
      }
    }
    @include tablet {
      h1 {
        line-height: 1.2;
        font-size: $fs-l;
      }
    }
}
</style>
<template>
  <Window class="cs-hero" :topBarText="`summary.docx`" width="100">
    <div class="wrapper">
      <h1 class="styled-title">{{ name }}</h1>
      <h2 class="text-body">{{ context }}</h2>
      <div class="cs-hero-line" />
      <div class="cs-hero-info grid-container">
        <div>
          <strong class="styled-text">key tech/tools</strong>
          <span v-for="t in tools.split(',')" :key="t.name" class="tag">
            {{t}}
          </span>
        </div>
        <div>
          <strong class="styled-text">context</strong>
          <span v-for="t in tags.split(',')" :key="t.name" class="tag">
            {{t}}
          </span>
        </div>
        <div>
          <strong class="styled-text">my role</strong>
          <span>{{role}}</span>
        </div>
        <div>
          <strong class="styled-text">timeframe</strong>
          {{ timeframe }}
        </div>
      </div>
    </div>
  </Window>
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
    tags: String
  },
}
</script>