<style lang="scss" scoped>
  .cs__footer{
    padding: $spacing-xl 0 $spacing-l 0;
    border-top: 1px $border solid;
    text-align: center;
    width: 100%;
    position: relative;
    img{
      position: absolute;
      top: $spacing-m;
      lefT: 0;
      height: 100%;
      object-fit: contain;
      transition: opacity 0.32s;
      opacity: 0;
    }
    .link-hover{
      font-size: $fs-l;
      font-family: $secFont;
      letter-spacing: 0;
    }
    &:hover img{
      opacity: 1;
    }
  }
</style>
<template>
    <div class="case-studies cs" v-if="cs_data">
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
          <prismic-image :field="next_data.cover" />
          <div class="text-header">next case study</div>
            <nuxt-link :to="'/casestudies/' + next_data.ref">
              <div class="link-hover">{{next_data.name}} &rarr;</div>
            </nuxt-link>
        </div>
    </div>
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