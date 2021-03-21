<template>
  <nav>
    <div class="wrapper">
      <div class="nav-title">
        <nuxt-link data-text="syl." class="nav-head" to="/">syl.</nuxt-link>
        <div class="icon" @click="toggleTheme">
          {{
            currentTheme === 'light' ? "&#x1F31A;" : "&#x1F31E;"
          }}
        </div>
      </div>
      <div class="nav-links">
        <nuxt-link data-text="work" to="/">work</nuxt-link>
        <nuxt-link data-text="about" to="/about">about</nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        currentTheme: 'light',
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
      this.getStoredTheme();
    },
    methods: {
      updateRouteName: function () {
        this.currentRoute = this.$route.name
      },
      getStoredTheme: function (){
          try {
            const storedTheme = localStorage.getItem('theme');
          if (storedTheme) {
            this.changeTheme(storedTheme);
          }
        }catch{
          // use default light theme
        }
      },
      changeTheme: function (theme){
        this.currentTheme = theme;
        document.documentElement.setAttribute("data-theme", theme);
        
        try {
          localStorage.setItem('theme', theme);
        } catch {
          // do not store
        }
      },
      toggleTheme: function (){
        if (this.currentTheme === 'light'){
          this.changeTheme('dark');
        }else{
          this.changeTheme('light');
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--background-color);
  }
  nav > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-xxs 0;
    @include tablet {
      padding: $spacing-xxs $spacing-l;
    }
  }
  
  nav a {
    text-decoration: none;
    transition: transform 0.3s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
    position: relative;
    display: inline-block;
    font-weight: $fw-m;
    color: var(--text-strong-color);
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
  .nav-title{
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .icon{
    font-size: $fs-m;
    width: $fs-xl;
    text-align: center;
    cursor: var(--cursor-pointer);
    margin: 2px 0 0 $spacing-xxs;
    border: 1px solid transparent;
    transition: border 0.1s;
    &:hover{
      border-color: var(--border-color);
    }
  }
</style>