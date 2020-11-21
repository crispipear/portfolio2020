<template>
  <section id="home">
    <Hero :introData="introData" />
    <CaseStudies :data="$store.state.caseStudies"/>
    <Projects :data="$store.state.projects"/>
    <div id="home-end">
      <h4 class="styled-title">Thanks for visiting!</h4>
    </div>
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
<style lang="scss">
#home{
  padding: 0;
}
#home-end{
  .styled-title{
    font-size: $fs-l;
    margin: 0;
  }
}
</style>