<template>
  <section id="home">
    <Hero :introData="introData"/>
    <CaseStudies :data="$store.state.caseStudies"/>
    <Projects :data="$store.state.projects"/>
  </section>
</template>

<script>
export default {
  transition: {name: 'slide-left', mode: 'out-in'},
  async asyncData({app}) {
    const introDoc = await app.$prismic.api.getSingle('intro');
    return {
      introData: introDoc.data,
    }
  }
}
</script>
