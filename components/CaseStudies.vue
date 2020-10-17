<template>
  <div class="case-studies wrapper" v-if="data">
      <span class="text-stroked">case studies</span>
      <div class="case-study-item" v-for="item in data">
          <img :src="item.cover.url" :alt="item.name + ' image'"/>
          <div class="case-study-info">
            <div>
              <h2>{{item.name}}</h2>
              <h3>{{item.context}}</h3>
            </div>
            <div>
              <nuxt-link :to="'/casestudies/' + item.ref" class="link-hover-light">
                see case study &rarr;
              </nuxt-link>
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

<style lang="scss">
  .case-study{
    &-item{
      margin: $spacing-xxl 0;
      color: $light;
      h2 {
        font-size: $fs-l;
        font-weight: $fw-m;
        line-height: 1.2;
      }

      h3, a {
        font-size: $fs-s;
      }

      img {
        width: 100%;
        height: 40vh;
        object-position: 50% 50%;
        object-fit: cover;
      }
    }
    &-info{
      margin-top: $spacing-xs;
      @extend .grid-container;
      div:last-child{
        text-align: right;
      }
    }
  }
</style>