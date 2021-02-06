<style lang="scss" scoped>
  .case-studies{
    .styled-title{
      width: 100%;
      text-align: right;
      margin-bottom: $spacing-xl;
    }
  }
  .case-study{
    &-container{
      column-count: 2;
      column-gap: $spacing-xxl;
      position: relative;
    }
    &-item{
      img{
        transition: transform 0.4s;
        height: auto;
        width: 100%;
        cursor: pointer;
      }
      &:hover img{
        transform: scale(1.04);
      }
        break-inside: avoid;
        margin: 0 0 $spacing-xxl;
      h2 {
        font-size: $fs-l;
        margin: 0 0 $spacing-xxs;
        font-family: $secFont;
        letter-spacing: 0;
        @extend .text-header;
      }
      h3{
        margin: 0;
       @extend .text-body;
      }
    }
    &-info{
      margin-top: $spacing-xs;
    }
  }
</style>
<template>
  <div class="case-studies wrapper" v-if="data">
      <span class="styled-title">featured work.</span>
      <div class="case-study-container">
        <div class="case-study-item" v-for="item in data" :key="item.name">
            <nuxt-link :to="'/casestudies/' + item.ref" class="case-study-img">
              <img :src="item.cover.url" :alt="item.name + ' image'"/>
            </nuxt-link>
            <div class="case-study-info">
                <nuxt-link :to="'/casestudies/' + item.ref">
                  <h2 class="link-hover">{{item.name}} &rarr;</h2>
                </nuxt-link>
                <h3>{{item.context}}</h3>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>