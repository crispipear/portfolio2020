<template>
  <div class="case-studies wrapper" v-if="data">
      <span class="text-stroked">case studies</span>
      <div class="case-study-item" v-for="item in data">
          <img :src="item.cover.url" :alt="item.name + ' image'"/>
          <div class="case-study-info">
              <nuxt-link :to="'/casestudies/' + item.ref">
                  <h2>{{item.name}}</h2>
              </nuxt-link>
              <h3>{{item.context}}</h3>
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
  .case-study-item {
    margin: 12% 0;
    @extend .grid-container;
    grid-template-columns: 1.25fr 1fr;
    align-items: center;
    column-gap: 0;

    .case-study-info {
      z-index: 2;
    }

    h2 {
      cursor: pointer;
      @extend .link-hover-light;
      font-size: $fs-xl;
      line-height: 1;
      margin-bottom: 2%;
    }

    h3 {
      color: $light;
      font-size: $fs-s;
    }

    img {
      z-index: 1;
      width: 100%;
      height: 32vh;
      object-fit: cover;
      transition: all 0.16s ease-in-out;
      opacity: 0.4;
    }

    &:nth-child(even) {
      .case-study-info {
        margin: 0% 0% 0% -12%;
      }
    }

    &:nth-child(odd) {
      direction: rtl;

      .case-study-info {
        margin: 0% -12% 0% 0%;
      }
    }

    &:hover {
      img {
        opacity: 1;
      }
    }
  }
</style>