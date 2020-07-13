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
  font-weight: $priReg;
  letter-spacing: 0.015rem;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
body{
  background: $background;
}
::selection {
  background: $primary;
  color: white;
}
::-moz-selection {
  background: $primary;
  color: white;
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
  margin: 12% 0;
}
a:visited {
  color: inherit;
}
.wrapper{
  margin: 8% 0;
}
p{
  margin: 0 0 16px;
  color: $secondary;
  line-height: 1.8;
}
b, strong{
  color: $primary;
}
</style>
