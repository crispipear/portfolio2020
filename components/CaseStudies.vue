<template>
    <div class="case-studies wrapper" v-if="data">
        <span class="text-stroked">case studies</span>
        <div class="case-study-item" v-for="item in data">
            <img :src="item.cover.url" :alt="item.name + ' image'"/>
            <div class="case-study-info">
                <nuxt-link :to="'/casestudies/' + item.ref">
                    <h3>{{item.name}}</h3>
                </nuxt-link>
                <h4>{{item.context}}</h4>
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
    .case-study-item{
        margin: 12% 0;
        @extend .grid-container;
        grid-template-columns: 1.25fr 1fr;
        align-items: center;
        column-gap: 0;
        .case-study-info{
            z-index: 2;
        }
        h3{
            cursor: pointer;
            @extend .link-hover-light;
            @extend .fs-xl;
            line-height: 1;
            margin-bottom: 2%;
        }
        h4{
            color: $light;
            @extend .fs-s;
        }
        img{
            z-index: 1;
            width: 100%;
            height: 32vh;
            object-fit: cover;
            filter: grayscale(100%) brightness(50%) contrast(120%);
            transition: all 0.2s ease-in-out;
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
        }
        &:nth-child(even){
            .case-study-info{
                margin: 0% 0% 0% -12%;
            }
        }
        &:nth-child(odd){
            direction: rtl;
            .case-study-info{
                margin: 0% -12% 0% 0%;
            }
        }
        &:hover{
            img{
                clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);
            }
        }
    }
</style>