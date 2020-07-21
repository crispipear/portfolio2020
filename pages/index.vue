<template>
  <section id="home">
    <Hero :introData="introData"/>
    <CaseStudies :data="caseStudies"/>
    <Projects :data="projects"/>
  </section>
</template>

<script>
export default {
  async asyncData({app}) {
    const introDoc = await app.$prismic.api.getSingle('intro');
    const projectsDoc = await app.$prismic.api.query(
      app.$prismic.predicates.at('document.type', 'project'),
      {orderings: '[my.project.order_id]'}
    );
    const csDoc = await app.$prismic.api.query(
      app.$prismic.predicates.at('document.type', 'case_study'),
      {orderings: '[my.case_study.order]'}
    );
    return {
      introData: introDoc.data,
      caseStudies: csDoc.results.map(item => ({...item.data, ref: item.uid})),
      projects: projectsDoc.results.map(item => item.data)
    }
  }
}
</script>

<style lang="scss">
  body{
    background: $dark;
  }
</style>
