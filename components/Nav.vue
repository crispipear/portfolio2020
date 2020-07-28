<template>
    <nav>
        <nuxt-link data-text="syl." class="nav-head" to="/">syl.</nuxt-link>
        <nuxt-link v-if="currentRoute === 'index'" data-text="about" to="/about">about</nuxt-link>
        <nuxt-link v-if="currentRoute === 'about'" data-text="work" to="/">work</nuxt-link>
    </nav>
</template>
<script>
    export default {
        data() {
            return {
                currentRoute: ''
            }
        },
        watch:{
            '$route' (to, from){
               this.updateRouteName();
            }
        },
        mounted(){
            this.updateRouteName();
        },
        methods: {
            updateRouteName: function() {
                this.currentRoute = this.$route.name
            }
        }
    }
</script>
<style lang="scss">
    nav{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 2.5% 12.5%;
        color: $light;
        z-index: 100;
    }
    nav a{
        text-decoration: none;
        transition: transform 0.3s;
        transform-origin: 50% 0;
        transform-style: preserve-3d;
        position: relative;
        display: inline-block;
        
        &:before {
            position: absolute;
            content: attr(data-text);
            transform: rotateX(-90deg);
            transform-origin: 50% 0;
            top: 100%;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        &:hover{
            transform: rotateX(90deg);
        }
    }
    .nav-head{
        @extend .fs-m;
        @extend .fw-m;
    }
</style>