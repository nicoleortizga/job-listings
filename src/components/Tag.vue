<template>
  <div>
    <span>{{ tag }}</span>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: () => ""
    }
  }
};
</script>

<style lang="scss" scoped>
span {
  cursor: pointer;
}
</style>
