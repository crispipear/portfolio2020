<template>
    <div class="projects wrapper" v-if="data">
        <span class="text-stroked">more projects</span>
        <div class="projects-container">
            <div class="projects-item" v-for="(item, index) in data">
                <img :src="item.cover.url" :alt="'image-' + item.name"/>
                <a :href="item.link.url" target="_blank"><h2>{{item.name}}</h2></a>
                <div class="projects-item-tags">
                    <span v-for="t in data[index].tags">
                        {{t.tag}}
                    </span>
                </div>
                <h3>{{item.description}}</h3>
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
  .projects-container {
    @extend .grid-container;
    margin: 8% 0;
    column-gap: 52px;
    row-gap: 48px;
  }

  .projects-item {
    position: relative;

    h2,
    h3,
    .projects-item-tags {
      position: relative;
      z-index: 1;
    }

    h3,
    img {
      transition: all 0.2s;
    }

    h2 {
      cursor: pointer;
      @extend .link-hover-light;
      font-size: $fs-m;
      line-height: 1;
    }

    h3 {
      @extend .text-on-dark;
      font-size: $fs-xs;

    }

    .projects-item-tags {
      margin: 4% 0;

      span {
        @extend .tag-item;
        padding: 8px 12px;
        margin-right: 8px;
      }
    }

    img {
      width: 240px;
      height: 150px;
      object-fit: cover;
      filter: grayscale(100%) brightness(70%);
      position: absolute;
      top: -12%;
      right: 0%;
      opacity: 0;
      z-index: 2;
    }

    &:hover {
      img {
        opacity: 0.9;
        filter: none;
      }

      h3 {
        color: $light;
      }
    }
  }
</style>