<template>
  <div>
    <div class="filter">
      <Tag
        v-for="(tag, index) in filterTags"
        :key="`filter-${index}`"
        :tag="tag"
        @click="removeFilter(tag)"
      />
    </div>
    <Card
      v-for="post in filteredJobPosts"
      :key="post.id"
      :post="post"
      :tags="[post.role, post.level, ...post.languages, ...post.tools]"
      @add-filter-tag="addFilter"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Tag from "@/components/Tag.vue";

export default {
  components: {
    Tag,
    Card
  },
  computed: {
    filteredJobPosts() {
      return this.$store.getters.filteredData;
    },
    filterTags() {
      return this.$store.getters.filterTags;
    }
  },
  methods: {
    addFilter(tagValue) {
      this.$store.commit("addFilterTag", { tag: tagValue });
    },
    removeFilter(tagValue) {
      this.$store.commit("removeFilterTag", { tag: tagValue });
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
  background: orange;
  border-radius: 5px;
  width: 80%;
  height: 54px;
  margin: 1rem;
  display: flex;
}
</style>
