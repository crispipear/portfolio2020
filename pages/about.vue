<template>
<section id="about">
    <img src="/about.jpg"/>
    <div class="about-content-block">
        <div>
            <h1>{{intro_header}}</h1>
            <h2>{{intro_sub_header}}</h2>
        </div>
        <div>
            <prismic-rich-text :field="intro_text"/>
        </div>
    </div>
    <div class="about-content-block">
        <div>
            <h2>{{skills_header}}</h2>
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
            <h2>{{xp_header}}</h2>
        </div>
        <div>
        </div>
    </div>
    <div class="about-content-block">
        <div>
            <h2>{{connect_header}}</h2>
        </div>
        <div>
            <prismic-rich-text :field="connect_text"/>
        </div>
    </div>
</section>
</template>
<script>
export default {
  async asyncData({app}) {
    const aboutDoc = await app.$prismic.api.getSingle('about');
    console.log(aboutDoc.data);
    return {
        ...aboutDoc.data
    }
  }
}
</script>
<style lang="scss">
    #about{
        h1{
            @extend .text-sec-bold;
            @extend .font-size-l;
        }
        h2{
            @extend .text-sec-reg;
            @extend .font-size-m;
        }
        img{
            width: 50%;
            filter: grayscale(100%);
        }
    }
    .about-skills{
        @extend .grid-container;
        grid-template-columns: repeat(3, 1fr);
        margin: 0;
        column-gap: 8px;
        row-gap: 8px;
        span{
            background-color: lighten($secondary, 52.5%);
            text-align: center;
            padding: 12px 0;
        }
    }
    .about-content-block{
        a{
            @extend .link-hover;
        }
        @extend .grid-container;
        margin: 48px 0;
    }
</style>