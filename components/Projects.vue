<template>
  <div class="projects" v-if="data">
    <WindowCluster>
      <ProjectItem
        v-for="(item, index) in data"
        :item="item"
        :key="'item'+index"
       />
    </WindowCluster>
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