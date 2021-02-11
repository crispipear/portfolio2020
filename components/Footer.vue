<template>
    <footer class="footer">
      <div class="grid-container wrapper">
        <div>
          <span>&copy; Su Li 2021 | built with nuxt.js</span>
        </div>
        <div class="footer__links">
          <a 
            class="link-hover"
            v-for="item in links"
            :key="item.link_name"
            :href="item.link"
            target="_blank"
          >
            {{ item.link_name }}
          </a>
        </div>
      </div>
    </footer>
</template>
<script>
  export default {
    data() {
      return {
        links: Array
      }
    },
    transition: {name: 'slide-right', mode: 'out-in'},
    created() {
      this.links = this.$store.state.about.links;
    }
  }
</script>
<style lang="scss" scoped>
  .footer{
    border: 1px solid $border;
    .grid-container{
      align-items: center;
      div{
        padding: $spacing-s 0;
      }
      div:last-child{
        justify-self: flex-end;
      }
    }
    &__links{
      a{
        margin-left: $spacing-xs;
        font-size: $fs-xs;
      }
    }
    span{
      font-family: $secFont;
      color: $dark;
    }
  }
</style>