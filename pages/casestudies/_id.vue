<style lang="scss" scoped>
  .cs{
    .wrapper{
      @include tablet{
        overflow-x: hidden;
      }
    }
  }
  .cs__footer{
    padding: $spacing-xxl 0;
    border-top: 1px $border solid;
    text-align: center;
    width: 100%;
    position: relative;
    .text-header, .link-hover {
      font-size: $fs-l;
    }
    .text-header{
      margin-right: $spacing-m;
    }
    .text-body{
      font-size: $fs-s;
    }
    @include tablet{
      padding: $spacing-xl $spacing-l;
      .text-header{
        display: block;
        margin-right: 0;
      }
      .text-body{
        margin-top: $spacing-s;
      }
    }
  }
</style>
<template>
  <section class="case-studies cs" v-if="cs_data">
      <CaseStudiesHero
        :coverUrl="cs_data.cover.url"
        :name="cs_data.name"
        :timeframe="cs_data.timeframe"
        :context="cs_data.context"
        :role="cs_data.role"
        :tools="cs_data.tools"
      />
      <CaseStudiesContent
        :body="cs_data.body"
      />
      <div class="cs__footer">
        <div class="wrapper">
          <span class="text-header">next case study</span>
          <nuxt-link :to="'/casestudies/' + next_data.ref">
            <div class="link-hover">{{next_data.name}} &rarr;</div>
          </nuxt-link>
          <div class="text-body">{{next_data.context}}</div>
        </div>
      </div>
  </section>
</template>
<script>
  export default {
    transition: {name: 'slide-right', mode: 'out-in'},
    data() {
      return {
        cs_data: null,
        next_data: null
      }
    },
    created() {
      const caseStudiesId = this.$route.params.id;
      const matchCaseStudyId = (item) => item.ref === caseStudiesId;
      const currentIndex = this.$store.state.caseStudies.findIndex(matchCaseStudyId);
      if (currentIndex !== -1) {
        this.cs_data = this.$store.state.caseStudies[currentIndex];
        this.next_data = this.$store.state.caseStudies[
          currentIndex === this.$store.state.caseStudies.length - 1
          ? 0
          : currentIndex + 1
        ];
      } else {
        //redirect to 404
      }
    }
  }
</script>