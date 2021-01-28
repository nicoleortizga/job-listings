<template id="app">
  <h1>Job Listing</h1>
  <router-view :key="$route.fullPath" />
</template>

<style lang="scss">
$primary: hsl(180, 29%, 50%);
$bg-cyan: hsl(180, 52%, 96%);
$light-grayish-cyan: hsl(180, 31%, 95%);
$dark-grayish-cyan: hsl(180, 8%, 52%);
$darker-grayish-cyan: hsl(180, 14%, 20%);

$strong-font-weight: 700;

body {
  margin: 0;
  font-size: 15px;
  font-family: "Open Sans", sans-serif;
  background: $bg-cyan;
}

#app {
  box-sizing: border-box;
  padding: 0 20px 20px;
  margin: 0 auto;
}

ul {
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Spartan", sans-serif;
}
</style>
