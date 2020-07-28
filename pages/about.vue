<template>
<section id="about">
    <span class="text-stroked">{{intro_header}}</span>
    <div class="about-img"><img src="/about.jpg"/></div>
    <div class="about-content-block">
        <div>
            <h1>{{intro_sub_header}}</h1>
        </div>
        <div>
            <prismic-rich-text :field="intro_text" class="text-on-dark"/>
        </div>
    </div>
    <div class="about-content-block">
        <div>
            <h1>{{skills_header}}</h1>
        </div>
        <div class="about-skills">
            <span v-for="item in skills"
            >
                {{item.skill}}
            </span>
        </div>
    </div>
    <div class="about-content-block">
        <div>
            <h1>{{connect_header}}</h1>
        </div>
        <div>
            <prismic-rich-text :field="connect_text" class="text-on-dark"/>
        </div>
    </div>
</section>
</template>
<script>
export default {
  async asyncData({app}) {
    const aboutDoc = await app.$prismic.api.getSingle('about');
    return {
        ...aboutDoc.data
    }
  }
}
</script>
<style lang="scss">
    #about{
        .text-stroked{
            margin-bottom: 4%;
        }
        h1{
            color: $light;
            @extend .fs-l;
            margin-bottom: 1.6rem;
        }
        .about-img{
            text-align: right;
            img{
                width: 60%;
                filter: grayscale(100%) contrast(120%) brightness(60%);
            }
        }
    }
    .about-skills{
        @extend .grid-container;
        grid-template-columns: repeat(4, 1fr);
        margin: 0;
        column-gap: 12px;
        row-gap: 12px;
        span{
            @extend .tag-item;
            padding: 12px 0;
            font-size: 1rem;
        }
    }
    .about-content-block{
        width: 80%;
        a{
            @extend .link-hover-light;
        }
        @extend .fs-m;
        margin: 12% 0;
    }
</style>