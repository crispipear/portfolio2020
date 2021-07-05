
<template>
   <div class="case-studies" v-if="data">
    <div class="case-studies__container">
        <Window
          v-for="item in data"
          :key="item.name"
          topBarText="project.docx"
        >
          <prismic-image :field="item.cover"/>
          <div class="case-study__info">
              <h2 class="styled-text">{{item.name}}</h2>
              <h3>{{item.context}}</h3>
              <nuxt-link class="button" :to="'/casestudies/' + item.ref">
                read more
              </nuxt-link>
          </div>
        </Window>
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
<style lang="scss" scoped>
  .case-studies{
    img {
      width: 100%;
    }
    .case-studies__container{
      column-count: 2;
      column-gap: $spacing-xl;
      .window {
        height: auto;
        margin-bottom: $spacing-xl;
        /deep/ h2 {
          margin: $spacing-xxs 0;
        }
        /deep/ h3 {
          font-size: $fs-xs;
          font-weight: $fw-r;
          margin-bottom: $spacing-xs;
        }
      }
      @include mobile {
        column-count: 1;
      }
    }
  }
</style>