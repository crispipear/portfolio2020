<style lang="scss" scoped>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  nav > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: $content-width;
    padding: $spacing-m 0;
    margin: auto;
  }
  
  nav a {
    text-decoration: none;
    transition: transform 0.3s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
    position: relative;
    display: inline-block;
    font-weight: $fw-m;
    color: $textStrongColor;
    &:before {
      position: absolute;
      content: attr(data-text);
      transform: rotateX(-90deg);
      transform-origin: 50% 0;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: $fs-s;
    }

    &:hover {
      transform: rotateX(90deg);
    }
  }

  .nav-links a {
    margin-left: $spacing-s;
  }
</style>
<template>
  <nav>
    <div>
      <nuxt-link data-text="syl." class="nav-head" to="/">syl.</nuxt-link>
      <div class="nav-links">
        <nuxt-link v-if="currentRoute !== 'about'" data-text="about" to="/about">about</nuxt-link>
        <nuxt-link v-if="currentRoute !== 'index'" data-text="work" to="/">work</nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        currentRoute: ''
      }
    },
    watch: {
      '$route'(to, from) {
        this.updateRouteName();
      }
    },
    mounted() {
      this.updateRouteName();
    },
    methods: {
      updateRouteName: function () {
        this.currentRoute = this.$route.name
      }
    }
  }
</script>