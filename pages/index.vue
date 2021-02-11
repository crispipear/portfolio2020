<template>
  <section>
    <Hero />
    <CaseStudies />
    <Projects />
  </section>
</template>

<script>
export default {
  transition: {name: 'slide-left', mode: 'out-in'}
}
</script>