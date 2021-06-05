<template>
  <nav>
    <div class="nav-bar">
      <span class="styled-text">syl.</span>
      <div class="nav-toggle" @click="toggleTheme">
        {{
          currentTheme === 'light' ? "&#x1F31E;" : "&#x1F31A;"
        }}
      </div>
    </div>
    <div class="nav-main">
      <div class="nav-routes">
        <div class="nav-route-item">
          <nuxt-link data-text="home" to="/">
            <div class="icon-folder"/>
            home
          </nuxt-link>
        </div>
        <div class="nav-route-item">
          <nuxt-link data-text="about" to="/about">
            <div class="icon-folder"/>
            about
          </nuxt-link>
        </div>
      </div>
      <div class="nav-links">
        <a 
          class="link-hover styled-text"
          v-for="item in links"
          :key="item.link_name"
          :href="item.link"
          target="_blank"
        >
          {{ item.link_name }} &#8599;
        </a>
        <div class="nav-copy">
          <span class="styled-text">&copy; Su Li 2021</span>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        currentTheme: 'light',
        currentRoute: '',
        links: Array
      }
    },
    created() {
      this.links = this.$store.state.about.links;
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
    width: 12%;
    height: 100vh;
    z-index: 100;
    border-right: 1px solid var(--border-color);
    background-color: var(--background-color);
    .styled-text{
      font-size: $fs-xxs;
    }
  }
  .nav-bar{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: $spacing-xs;
    background-color: var(--text-strong-color);
    height: 10%;
    span {
      font-size: $fs-xs;
      color: var(--background-color);
    }
    .nav-toggle {
      font-size: $fs-m;
      cursor: var(--cursor-pointer);
    }
  }
  .nav-main{
    padding: $spacing-s $spacing-xs;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .nav-routes{
    .icon-folder{
      cursor: var(--cursor-pointer);
    }
    a {
      font-family: $secFont;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .nav-route-item{
      margin-bottom: $spacing-s;
    }
  }
  .nav-links{
    a {
      margin-top: $spacing-xs;
    }
    .nav-copy{
      margin-top: $spacing-m;
    }
  }

</style>