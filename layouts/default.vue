<template>
  <div id="app__wrapper">
    <Nav />
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family: $priFont;
  font-size: 1rem;
  line-height: 1.6;
  letter-spacing: 0.02rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
::selection{
  background: $light;
  color: $dark;
  -webkit-text-stroke-color: $dark;
}
::-moz-selection {
  background: $light;
  color: $dark;
  -webkit-text-stroke-color: $dark;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
#app__wrapper{
  margin: auto;
  width: 75%;
  max-width: 1400px;
  position: relative;
}
section {
  padding: 12% 0;
}
a:visited {
  color: inherit;
}
.wrapper{
  margin: 8% 0;
}
a, span, p{
  @extend .fw-r;
}
b, strong{
  @extend .fw-m;
}
h1,h2,h3,h4,h5,h6{
  line-height: 2;
  @extend .fw-m;
}
p{
  margin: 0 0 16px;
  color: $med;
  line-height: 1.8;
}
</style>
