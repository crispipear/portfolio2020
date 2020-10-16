<template>
    <div class="cs-hero">
        <div class="cs-hero-intro">
            <img :src="coverUrl"/>
            <h1>{{ name }}</h1>
            <h2>{{ context }}</h2>
        </div>
        <div class="cs-hero-info">
            <div>
                <strong>timeframe</strong>
                <span>{{time}}</span>
            </div>
            <div>
                <strong>my role</strong>
                <span>{{role}}</span>
            </div>
            <div>
                <strong>primary tools</strong>
                <span>{{tools}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        coverUrl: String,
        name: String,
        time: String,
        context: String,
        role: String,
        tools: String
    },
}
</script>
<style lang="scss">
    .cs-hero{
        color: $med;
        background: $dark;
        height: 100vh;
        width: 100%;
        padding: 8% 12.5%;
        @extend .grid-container;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        img{
            width: 90%;
        }
        strong{
            color: $light;
        }
        .cs-hero-info{
            div{
                margin-bottom: 2rem;
            }
            span, strong{
                display: block;
            }
            strong{
                margin-bottom: 0.4rem;
            }
        }
        h1{
            margin: 4% 0 0;
            color: $light;
            font-size: $fs-xl;
        }
    }
</style>