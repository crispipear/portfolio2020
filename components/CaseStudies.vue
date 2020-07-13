<template>
    <div class="case-studies wrapper" v-if="data">
        <h2>case studies</h2>
        <div class="case-study-item" v-for="item in data">
            <img :src="item.cover.url" :alt="item.name + ' image'"/>
            <div class="case-study-info">
                <h3>{{item.name}}</h3>
                <h4>{{item.context}}</h4>
                <nuxt-link class="link-hover" :to="'/casestudy/' + item.ref">learn more &#10230;</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Array
    }
}
</script>

<style lang="scss">
    .case-studies h2{
        @extend .font-size-m;
        @extend .color-primary;
        @extend .text-sec-reg;
        margin-bottom: 4%;
    }
    .case-study-item{
        @extend .grid-container;
        h3{
            @extend .font-size-m;
            @extend .text-sec-bold;
        }
        h4{
            @extend .font-size-s;
            @extend .color-secondary;
            font-weight: $priReg;
        }
        img{
            width: 100%;
            height: 200px;
            object-fit: cover;
            filter: grayscale(100%);
            transition: all 0.16s;
        }
        .link-hover{
            margin-top: 12px;
        }
        &:hover img{
            filter: none;
        }
    }
</style>