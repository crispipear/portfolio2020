<template>
  <section id="about" class="about">
    <div class="about-intro-block">
      <div class="wrapper">
        <span class="styled-title">{{data.intro_header}}</span>
        <h1 class="styled-text">{{data.intro_sub_header}}</h1>
      </div>
    </div>
    <div class="about-content-block">
      <div class="wrapper grid-container">
        <prismic-rich-text :field="data.intro_text" class="text-body grid-first border" />
        <div class="about-contact-block grid-sec">
          <img src="/about.jpg" />
          <h3>{{data.connect_header}}</h3>
          <prismic-rich-text :field="data.connect_text" class="connect-text" />
        </div>
      </div>
    </div>
    <div class="about-content-block experience">
      <div class="wrapper">
        <h2 class="styled-text">experience</h2>
        <div class="exp-wrapper grid-container">
          <div v-for="exp in data.experience" :key="exp.org" class="exp-item">
            <strong>{{exp.org}}</strong><br/>
            <span>{{exp.role}}</span><br/>
            <span>{{exp.duration}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="about-content-block skills">
      <div class="wrapper">
        <h2 class="styled-text">tech skills</h2>
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
    .styled-title {
      margin-bottom: $spacing-l;
      font-size: $fs-xl;
    }

    img {
      width: 100%;
      margin-bottom: $spacing-m;
    }

    &-intro-block {
      padding: $spacing-xl 0;

      h1 {
        font-size: $fs-xl;
      }

      @include tablet {
        padding: $spacing-xl $spacing-l;
      }

      @include mobile {
        h1 {
          font-size: $fs-l;
        }
      }
    }

    &-content-block {
      border-top: 1px solid $border;

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
    }

    &-contact-block {
      h3 {
        margin: 0 0 $spacing-xs;
      }

      /deep/ .connect-text a {
        @extend .link-hover;
      }
    }

    .experience,
    .skills {
      padding: $spacing-xl 0;

      @include tablet {
        padding: $spacing-xl $spacing-l;
      }
    }

    .exp-wrapper,
    .skills-wrapper {
      row-gap: $spacing-m;
      column-gap: $spacing-m;
    }

    .exp-wrapper {
      grid-template-columns: repeat(4, 1fr);
    }

    .skills-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }

    .exp-item,
    .skill-item {
      font-size: $fs-xs;
      display: inline-block;
      padding: $spacing-m;
      border: 1px solid $border;
      .styled-text{
        display: block;
        margin-bottom: $spacing-xxs;
      }
    }
  }
</style>