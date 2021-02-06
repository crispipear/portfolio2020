<style lang="scss" scoped>
  .projects{
    .styled-title{
      width: 100%;
      text-align: right;
      margin-bottom: $spacing-l;
    }
  }
  .projects-container {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: $spacing-xl;
    margin: $spacing-l 0;
  }
</style>
<template>
  <div class="projects wrapper" v-if="data">
      <span class="styled-title">more projects.</span>
      <div class="projects-container grid-container">
         <ProjectItem v-for="(item, index) in data" :item="item" :key="'item'+index" />
      </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>