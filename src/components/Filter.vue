<template>
  <div
    v-if="filterTags.length"
    class="filter responsive-padding shadow round mx-width-10"
  >
    <div class="display-flex display-flex--wrap">
      <div
        class="m-space"
        v-for="(tag, index) in filterTags"
        :key="`filter-${index}`"
      >
        <span class="filter-tag">{{ tag }}</span>
        <button class="btn-remove" @click="$emit('removeFilterTag', tag)">
          x
        </button>
      </div>
    </div>
    <a class="btn-clear" href="javascript:" @click="$emit('clearFilter')"
      >Clear</a
    >
  </div>
</template>

<script>
export default {
  props: {
    filterTags: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  emits: ["removeFilterTag", "clearFilter"]
};
</script>

<style lang="scss" scoped>
.filter {
  background: $color-white;
  min-height: 54px;
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-gap: 1px;
  align-items: center;
}

.filter-tag {
  padding: $unit - 2;
  color: $color-primary;
  background: $color-bg-cyan;
  border-radius: $unit - 4;
  font-size: $font-size - 2;
  font-weight: $strong-font-weight;
  border-radius: $unit - 4 0 0 $unit - 4;
}

.btn-remove {
  height: 30px;
  background: $color-primary;
  color: $color-white;
  border: 0;
  border-radius: 0 $unit - 4 $unit - 4 0;
  cursor: pointer;
  font-size: $font-size;
  font-weight: $strong-font-weight;

  &:hover {
    background: $color-darker-grayish-cyan;
  }
}

.btn-clear {
  color: $color-darker-grayish-cyan;

  &:hover {
    color: $color-primary;
    text-decoration: underline;
  }
}
</style>
