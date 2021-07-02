<template>
  <section class="about">
    <div class="about-info">
      <Window topBarText="info.docx" alignTop width="50">
        <prismic-rich-text v-if="!funFacts" :field="data.intro_text" class="text-body" />
        <prismic-rich-text v-if="funFacts" :field="data.intro_facts" />
        <Chart :data="data.games" v-if="funFacts"/>
      </Window>
      <div class="about-info__other">
        <Window topBarText="info_controlls.exe">
          <button @click="setFunFacts(false)" :class="!funFacts && 'outline-hover__hovered'">
              what I do
          </button>
          <button @click="setFunFacts(true)" :class="funFacts && 'outline-hover__hovered'">
              fun facts
          </button>
        </Window>
        <WindowCluster colTemplate="1fr 1fr">
          <Window class="about-img" topBarText="me.jpg">
            <img src="/me.jpg" alt="picture" />
          </Window>
           <Window class="about-img" topBarText="me_again.jpg">
            <img src="/hero.png" alt="picture" />
          </Window>
        </WindowCluster>
      </div>
    </div>
    <Header>experience</Header>
    <WindowCluster colTemplate="1fr 1fr 1fr">
      <Window class="exp-item" v-for="(exp, index) in data.experience" :topBarText="`work_exp_${index+1}.docx`"
        :key="exp.org">
        <strong class="styled-text">{{exp.org}}</strong>
        <span>{{exp.role}}</span>
        <span class="exp-item-time styled-text">{{exp.duration}}</span>
        <div class="about-exp-tech">
          <span v-for="t in exp.key_tech.split(', ')" :key="t.name" class="tag">
            {{t}}
          </span>
        </div>
        <prismic-rich-text :field="exp.description" />
      </Window>
    </WindowCluster>
    <Header>what_I_have_worked_with</Header>
    <WindowCluster colTemplate="1fr 1fr">
      <Window topBarText="programming.docx" class="skill-item">
        <div class="skill-text tag" v-for="l in data.languages.split(', ')" :key="l">{{l}}</div>
      </Window>
      <Window topBarText="libraries.docx" class="skill-item">
        <div class="skill-text tag" v-for="l in data.frameworks.split(', ')" :key="l">{{l}}</div>
      </Window>
      <Window topBarText="tools_and_platforms.docx" class="skill-item">
        <div class="skill-text tag" v-for="l in data.tools.split(', ')" :key="l">{{l}}</div>
      </Window>
      <Window topBarText="ux_skills.docx" class="skill-item">
        <div class="skill-text tag" v-for="l in data.ux.split(', ')" :key="l">{{l}}</div>
      </Window>
    </WindowCluster>
  </section>
</template>

<script>
export default {
  transition (to, from) {},
  data() {
    return {
      data: this.$store.state.about,
      funFacts: false
    }
  },
  created() {
    console.log(this.$store.state.about.intro_secondary)
  },
  methods: {
    setFunFacts: function (setting) {
      this.funFacts = setting;
    }
  }
}
</script>
<style lang="scss" scoped>
  .about {
    /deep/ a {
      @extend .link-hover;
    }
    .about-info {
      min-height: 80vh;
      display: flex;
      flex-direction: row;
      > .window:first-of-type {
        margin-right: calc(100vw*0.02);
      }
      &__other{
        width: 50%;
        > .window:first-of-type {
          margin-bottom: calc(100vw*0.02);
        }
      }
    }
    .exp-item /deep/ p, .exp-item-time{
        font-size: $fs-xxs;
    }
    .window button{
      &:first-of-type {
        margin-right: $spacing-s;
      }
    }
    .exp-item{
      width: 100%;
      /deep/ .window__content {
        flex-direction: column;
        display: flex;
      }
      strong {
        &:first-of-type {
          margin-bottom: $spacing-xxs;
          font-size: $fs-xs;
        }
      }
      .exp-item-time{
        margin-bottom: $spacing-xxs;
      }
    }
    .grid-container {
      grid-template-columns: 1fr 1.2fr;
      column-gap: calc(100vw*0.02);
    }
  }
</style>