<template>
  <div id="cs__wrapper">
    <Nav mode="on_light"/>
    <Nuxt />
  </div>
</template>
<script>
    export default {
        name: 'caseStudies',
        head() {
            return {
                bodyAttrs: {
                    class: 'case-studies-layout'
                }
            }
        }
    }
</script>
<style lang="scss">
  body.case-studies-layout{
    background: $light;
  }
</style>