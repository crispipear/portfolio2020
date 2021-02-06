<template>
  <div id="content__wrapper">
    <Nav />
    <Nuxt />
    <footer>
      <div/>
      <span>Su Li &copy; 2021</span>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'default',
    head() {
        return {
            bodyAttrs: {
                class: 'default-layout'
            }
        }
    }
  }
</script>
<style lang="scss">
  body.default-layout{
    background: $backgroundColor;
  }
  footer{
    @extend .grid-container;
    grid-template-columns: 85% 15%;
    align-items: center;
    div {
      height: 1px;
      background: $border;
      width: 100%;  
    }
    padding: $spacing-l 0;
    span{
      text-align: right;
    }
  }
</style>