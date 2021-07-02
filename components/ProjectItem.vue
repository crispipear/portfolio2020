<template>
  <Window topBarText="project.docx" class="projects-item" v-if="item">
    <img :src="item.cover.url" :alt="'image-' + item.name" :class="projImgClass" />
    <div>
      <prismic-link :field="item.link" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <h2 class="link-hover text-header styled-text">{{item.name}} &#8599;</h2>
      </prismic-link>
      <div class="projects-item-tags">
        <span v-for="t in item.tags" :key="t.name" class="tag">
          {{t.tag}}
        </span>
      </div>
    </div>
    <p>{{item.description}}</p>
  </Window>
</template>

<script>
export default {
  props: {
    item: Object
  },
  data() {
    return{
      projImgClass: 'project-img-hidden'
    }
  },
  methods: {
    mouseOver: function(){
      this.projImgClass = 'project-img-show';  
    },
    mouseLeave: function(){
      this.projImgClass = 'project-img-hidden';
    }
  }
}
</script>
<style lang="scss" scoped>
  .projects-item {
    position: relative;
    h2,
    p,
    .projects-item-tags {
      position: relative;
      z-index: 1;
    }

    p,
    img {
      transition: all 0.2s;
    }

    h2 {
      cursor: var(--cursor-pointer);
      margin: 0;
      font-size: $fs-m;
      letter-spacing: 0;
    }

    p {
      @extend .text-body;
      font-size: $fs-xs;
      margin: $spacing-xs 0 0 0;
    }

    .projects-item.tags {
      margin-top: $spacing-xxs;
    }

    img {
      width: 100%;
      right: 0;
      object-fit: cover;
      position: absolute;
      pointer-events: none;
      z-index: 2;
    }
    
  }
  .project-img-show{
    opacity: 1;
    bottom: 0;
  }
  .project-img-hidden{
    opacity: 0;
    bottom: -12px;
  }
</style>