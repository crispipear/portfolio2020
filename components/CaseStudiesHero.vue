<template>
    <div class="cs-hero">
        <div class="cs-hero-intro">
            <img :src="coverUrl"/>
        </div>
        <div class="cs-hero-info">
            <span>timeframe</span>
            <span>{{time}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        coverUrl: String,
        name: String,
        time: String,
        context: String
    },
}
</script>
<style lang="scss">
    .cs-hero{
        background: $dark;
        height: 100vh;
        width: 100%;
        padding: 8% 12.5%;
        @extend .grid-container;
        grid-template-columns: 2fr 1fr;
        img{
            width: 90%;
        }
    }
</style>