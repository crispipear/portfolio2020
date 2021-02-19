<template>
    <footer class="footer">
      <div class="grid-container wrapper">
        <div>
          <span>&copy; Su Li 2021 </span>
          <span>| built with nuxt.js </span>
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
    border-top: 1px solid $border;
    .grid-container{
      align-items: center;
      div{
        padding: $spacing-l 0;
        @include tablet{
          text-align: center;
          padding: $spacing-xxs 0;
        }
      }
      div:last-child{
        justify-self: flex-end;
        @include tablet{
          justify-self: center;
        }
      }
      @include tablet{
        padding: $spacing-m 0;
        justify-items: center;
      }
    }
    &__links{
      a{
        margin-left: $spacing-xs;
        font-size: $fs-xs;
        @include tablet{
          &:first-of-type{
            margin: 0;
          }
        }
      }
    }
    span:first-of-type{
      font-family: $secFont;
      color: $dark;
    }
  }
</style>