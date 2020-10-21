<template>
  <div class="case-studies wrapper" v-if="data">
      <span class="styled-title">case studies</span>
      <div class="case-study-item" v-for="item in data">
          <nuxt-link :to="'/casestudies/' + item.ref">
            <img :src="item.cover.url" :alt="item.name + ' image'"/>
          </nuxt-link>
          <div class="case-study-info">
            <div>
              <h2>{{item.name}}</h2>
              <h3>{{item.context}}</h3>
            </div>
            <div>
              <nuxt-link :to="'/casestudies/' + item.ref" class="link-hover">
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
  .case-studies{
    .styled-title{
      width: 100%;
      text-align: right;
      margin-bottom: $spacing-xl;
    }
  }
  .case-study{
    &-item{
      &:nth-child(odd){
        margin-left: 20%;
      }
      margin-bottom: $spacing-xxl;
      width: 80%;
      h2 {
        @extend .text-header;
      }
      h3{
        @extend .text-body;
      }
      h2,h3{
        margin: 0;
      }
      h3, a {
        font-size: $fs-s;
      }

      img {
        width: 100%;
        height: 40vh;
        object-position: 50% 50%;
        object-fit: cover;
        filter: grayscale(100%) brightness(110%);
        transition: filter 0.2s;
      }
      &:hover{
        img{
          filter: none;
        }
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