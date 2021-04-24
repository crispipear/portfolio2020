<style lang="scss" scoped>
  .projects{
    border-top: 1px solid var(--border-color);
    margin: $spacing-xxl 0;
    .styled-title{
      width: 100%;
      text-align: right;
      margin: $spacing-xxl 0 $spacing-xl;
      @include tablet{
        padding: 0 $spacing-l;
      }
    }
  }
  .projects-items-container {
    margin: 0 auto;
    column-gap: $spacing-l;
    row-gap: $spacing-l;
    grid-template-columns: repeat(3, 1fr);
    @include tablet{
      padding: 0 $spacing-l;
    }
  }
</style>
<template>
  <div class="projects" v-if="data">
      <div class="wrapper">
        <span class="styled-title">more projects.</span>
      </div>
      <div class="projects-container">
        <div class="wrapper grid-container projects-items-container">
          <ProjectItem v-for="(item, index) in data" :item="item" :key="'item'+index" />
         </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.state.projects,
    }
  }
}
</script>