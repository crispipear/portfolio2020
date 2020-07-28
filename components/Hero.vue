<template>
    <div class="hero" v-if="introData">
        <div class="scroll-indicator">
            <div class="scroll">
                <div class="scroll-line"></div>
            </div>
        </div>
        <div>
            <span>design x</span>
            <span>technology</span>
        </div>
        <div>
            <prismic-rich-text :field="introData.intro_header"/>
            <prismic-rich-text :field="introData.content_primary"/>
            <prismic-rich-text :field="introData.content_secondary"/>
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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 82vh;
        position: relative;
        padding-bottom: 8%;
        p{
            @extend .fs-m;
            @extend .text-on-dark;
            margin: 0 0 1rem;
        }
        span{
            @extend .text-stroked;
        }
    }
</style>