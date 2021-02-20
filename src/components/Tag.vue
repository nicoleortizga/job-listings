<template>
  <span class="tag m-space">{{ tag }}</span>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: () => ""
    },
    showFilter: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
.tag {
  padding: $unit - 2;
  cursor: pointer;
  color: $color-primary;
  background: $color-bg-cyan;
  border-radius: $unit - 4;
  font-size: $font-size - 2;
  font-weight: $strong-font-weight;
  max-height: 1rem;

  &:hover {
    color: $color-white;
    background: $color-primary;
  }
}
</style>
