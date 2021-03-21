<style lang="scss" scoped>
  .case-studies{
    .styled-title{
      width: 100%;
      text-align: right;
      margin: $spacing-xxl 0 $spacing-xl;
      @include tablet{
        padding: 0 $spacing-l;
      }
    }
  }
  .case-study{
    &-container{
      column-count: 2;
      column-gap: $spacing-xxl;
      @include tablet {
        column-count: 1;
        padding: 0 $spacing-l;
      }
    }
    &-item{
      transition: all 0.1s;
      break-inside: avoid;
      margin: 0 0 $spacing-xxl;
      img{
        height: auto;
        width: 100%;
        cursor: var(--cursor-pointer);
        border-bottom: 1px solid var(--border-color);
      }
      h2 {
        font-size: $fs-l;
        margin: 0 0 $spacing-xxs;
        letter-spacing: 0;
        @extend .text-header;
      }
      h3{
        margin: 0;
        line-height: 1.8;
        @extend .text-body;
      }
      @include tablet{
        margin: 0 0 $spacing-xl;
      }
    }
    &-info{
      padding: $spacing-xs $spacing-m $spacing-m;
    }
  }
</style>
<template>
  <div class="case-studies wrapper" v-if="data">
      <span class="styled-title">featured work.</span>
      <div class="case-study-container">
        <div class="case-study-item outline-hover" v-for="item in data" :key="item.name">
            <nuxt-link :to="'/casestudies/' + item.ref" class="case-study-img">
              <img :src="item.cover.url" :alt="item.name + ' image'"/>
            </nuxt-link>
            <div class="case-study-info">
                <nuxt-link :to="'/casestudies/' + item.ref">
                  <h2 class="link-hover styled-text">{{item.name}} &rarr;</h2>
                </nuxt-link>
                <h3>{{item.context}}</h3>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state.caseStudies,
    }
  }
}
</script>