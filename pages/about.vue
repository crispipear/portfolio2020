<template>
  <section id="about" class="about">
    <div class="about-content-block">
      <div class="wrapper grid-container">
        <div class="about-contact-block grid-first border">
          <img src="/about.jpg" />
          <prismic-rich-text :field="data.connect_text" class="connect-text" />
        </div>
        <prismic-rich-text :field="data.intro_text" class="text-body grid-sec" />
      </div>
    </div>
    <div class="about-content-block experience">
      <div class="wrapper">
        <h2 class="styled-text">experience</h2>
        <div class="exp-wrapper">
          <div v-for="exp in data.experience" :key="exp.org" class="exp-item grid-container">
            <strong class="styled-text">{{exp.org}}</strong>
            <span>{{exp.role}}</span>
            <span class="styled-text">{{exp.duration}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="about-content-block skills">
      <div class="wrapper">
        <h2 class="styled-text">what I've worked with</h2>
        <div class="skills-wrapper grid-container">
          <div class="skill-item">
            <strong class="styled-text">languages</strong>
            <div class="skill-text tag" v-for="l in data.languages.split(', ')" :key="l">{{l}}</div>
          </div>
          <div class="skill-item">
            <strong class="styled-text">frameworks/libraries</strong>
            <div class="skill-text tag" v-for="l in data.frameworks.split(', ')" :key="l">{{l}}</div>
          </div>
          <div class="skill-item">
            <strong class="styled-text">tools</strong>
            <div class="skill-text tag" v-for="l in data.tools.split(', ')" :key="l">{{l}}</div>
          </div>
          <div class="skill-item">
            <strong class="styled-text">design</strong>
            <div class="skill-text tag" v-for="l in data.ux.split(', ')" :key="l">{{l}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  transition: {name: 'slide-right', mode: 'out-in'},
  data() {
    return {
      data: this.$store.state.about
    }
  },
}
</script>
<style lang="scss" scoped>
  .about {
    /deep/ a {
      @extend .link-hover;
    }
    .styled-title {
      margin-bottom: $spacing-l;
      font-size: $fs-xl;
    }

    img {
      width: 100%;
      margin-bottom: $spacing-m;
    }

    &-content-block {
      border-top: 1px solid var(--border-color);
      .grid-container {
        .grid-first,
        .grid-sec {
          padding-top: $spacing-xl;
          padding-bottom: $spacing-xl;
        }
      }

      h1 {
        margin-top: 0;
      }
      h2{
        margin-bottom: $spacing-m;
      }
    }

    &-contact-block {
      h3 {
        margin: 0 0 $spacing-xs;
      }
    }

    .experience,
    .skills {
      padding: $spacing-xl 0;

      @include tablet {
        padding: $spacing-xl $spacing-l;
      }
    }

    .skills-wrapper {
      row-gap: $spacing-m;
      column-gap: $spacing-m;
    }

    .exp-item{
      grid-template-columns: 1.5fr 1.5fr 1fr;
      border-bottom: 1px solid var(--border-color);
      align-items: center;
      margin-bottom: $spacing-s;
      span:last-child {
        justify-self: end;
      }
    }

    .skills-wrapper {
      row-gap: $spacing-m;
      column-gap: $spacing-m;
      grid-template-columns: repeat(4, 1fr);
    }

    .skill-item {
      span{
        font-size: $fs-xxs;
      }
      display: inline-block;
      padding: $spacing-m;
      border: 1px solid var(--border-color);
      .styled-text{
        display: block;
        margin-bottom: $spacing-xxs;
      }
    }
  }
</style>