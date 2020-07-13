<template>
    <div class="hero" v-if="introData">
        <div>
            <h1>{{introData.intro_header}}</h1>
        </div>
        <div>
            <h2>{{introData.content_primary}}</h2>
            <h2>{{introData.content_secondary}}</h2>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        introData: Object
    },
}
</script>
<style lang="scss">
    .hero{
        padding: 8%;
        display: flex;
        flex-direction: row;
        div:first-of-type{
            flex: 1;
        }
        div:last-of-type{
            flex: 2;
        }
        h1{
           @extend .text-sec-bold;
           @extend .color-primary;
           @extend .font-size-xl;
        }
        h2{
           @extend .text-sec-reg;
           @extend .color-secondary;
           @extend .font-size-m;
        }
    }
</style>