<template>
    <div class="case-studies cs" v-if="cs_data">
        <CaseStudiesHero
            :coverUrl="cs_data.cover.url"
            :name="cs_data.name"
            :time="cs_data.year"
            :context="cs_data.context"
            :role="cs_data.role"
            :tools="cs_data.tools"
        />
        <CaseStudiesContent
            :body="cs_data.body"
        />
    </div>
</template>
<script>
    export default {
      transition: {name: 'slide-right', mode: 'out-in'},
      data() {
        return {
          cs_data: null
        }
      },
      created() {
        const caseStudiesId = this.$route.params.id;
        const caseStudy = this.$store.state.caseStudies.find(item => item.ref === caseStudiesId);
        if (caseStudy) {
          this.cs_data = caseStudy;
          console.log(caseStudy)
        } else {
          //redirect to 404
        }
      }
    }
</script>