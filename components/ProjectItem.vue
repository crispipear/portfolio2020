<template>
  <div class="projects-item" v-if="item">
    <img :src="item.cover.url" :alt="'image-' + item.name" :class="projImgClass" />
    <div>
      <a :href="item.link.url" target="_blank" @mouseover="mouseOver" @mouseleave="mouseLeave">
        <h2>{{item.name}}</h2>
      </a>
      <div class="projects-item-tags">
        <span v-for="t in item.tags" :key="t.name">
          {{t.tag}}
        </span>
      </div>
    </div>
    <p>{{item.description}}</p>
  </div>
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

<style lang="scss">
  .projects-item {
    position: relative;
    border-bottom: 1px solid $border;
    padding: $spacing-l 0;
    &:first-child, &:nth-child(2){
      border-top: 1px solid $border;
    }
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
      cursor: pointer;
      @extend .link-hover;
      font-size: $fs-m;
      line-height: 1.2;
      margin: 0;
    }

    p {
      @extend .text-body;
      font-size: $fs-xs;
      margin: $spacing-xs 0 0 0;
    }

    .projects-item-tags {
      margin-top: $spacing-xxs;
      span {
        @extend .tag-item;
        padding: $spacing-xxs*0.8 $spacing-xxs*1.5;
        margin-top: $spacing-xxs;
        margin-right: $spacing-xxs;
      }
    }

    img {
      width: 40%;
      right: 0;
      object-fit: cover;
      position: absolute;
      pointer-events: none;
      z-index: 2;
    }
    
  }
  .project-img-show{
    opacity: 1;
    top: 0;
  }
  .project-img-hidden{
    opacity: 0;
    top: 12px;
  }
</style>