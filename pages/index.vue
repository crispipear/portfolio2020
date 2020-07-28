<template>
  <section id="home">
    <Hero :introData="introData"/>
    <CaseStudies :data="$store.state.caseStudies"/>
    <Projects :data="$store.state.projects"/>
  </section>
</template>

<script>
export default {
  async asyncData({app}) {
    const introDoc = await app.$prismic.api.getSingle('intro');
    return {
      introData: introDoc.data,
    }
  }
}
</script>
