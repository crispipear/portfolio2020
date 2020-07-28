<template>
    <div class="case-studies" v-if="cs_data">
        <CaseStudiesHero
            :coverUrl="cs_data.cover.url"
            :name="cs_data.name"
            :time="cs_data.time"
            :context="cs_data.context"
        />
    </div>
</template>
<script>
    export default {
        layout: 'caseStudies',
        data() {
            return {
                cs_data: null
            }
        },
        created(){
            const caseStudiesId = this.$route.params.id;
            const caseStudy = this.$store.state.caseStudies.find(item => item.ref === caseStudiesId);
            if ( caseStudy ){
                this.cs_data = caseStudy;
                console.log(caseStudy)
            }else{
                //redirect to 404
            } 
        }
    }
</script>