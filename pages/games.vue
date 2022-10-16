<template>
  <section class="games main">
    <Window topBarText="games_recommendation.txt" alignTop>
      <prismic-rich-text :field="games_intro" class="text"/>
    </Window>
    <div class="divider" />
    <Window :topBarText="`~/games/${selected}`" width="100">
      <div class="games-container">
        <div
          class="game-item"
          v-for="game in games"
          :key="game.name"
          @click="setSelectedGame(game.name)"
        >
          <prismic-image 
            :field="game.icon"
          />
        </div>
      </div>
    </Window>
  </section>
</template>
<script>
export default {
  transition (to, from) {},
  data() {
    return {
      selected: '',
      games: this.$store.state.about.games,
      games_intro: this.$store.state.about.games_intro
    }
  },
  methods: {
    setSelectedGame: function (game) {
      this.selected = game;
    }
  }
}
</script>
<style lang="scss" scoped>
  .games-container {
    display: grid;
    grid-template-columns: repeat(8, 1fr)!important;
    column-gap: $spacing-xl;
    row-gap: $spacing-l;
    @include tablet {
      grid-template-columns: repeat(6, 1fr)!important;
      row-gap: $spacing-m;
      column-gap: $spacing-l;
    }
    @include mobile {
      grid-template-columns: repeat(3, 1fr)!important;
      column-gap: $spacing-m;
    }
  }
  .game-item {
    font-family: $secFont;
    font-size: $fs-xxs;
    display: flex;
    flex-direction: column;
    transition: transform 0.12s;
      &:hover{
        transform: translateY(-4px);
      }
    *{
      cursor: var(--cursor-pointer);
    }
    span {
      line-height: 1.4;
      margin-top: $spacing-s;
      text-align: center;
    }
  }
</style>