<template>
  <header>
    <picture>
      <source
        srcset="../assets/images/bg-header-desktop.svg"
        media="(min-width: 630px)"
      />
      <img
        src="../assets/images/bg-header-mobile.svg"
        alt="Blue color header"
      />
    </picture>
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 55px;
  height: 156px;
  background: $color-primary;
  position: relative;
}
img {
  height: 100%;
  width: 100%;
}
</style>
