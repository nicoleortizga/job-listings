<template>
  <Header />
  <div class="mx-auto mx-width-10 container responsive-padding">
    <Filter
      :filterTags="filterTags"
      @remove-filter-tag="removeFilter"
      @clear-filter="clearFilter"
    />
    <div class="card-container">
      <Card
        v-for="post in filteredJobPosts"
        :key="post.id"
        :post="post"
        :tags="[post.role, post.level, ...post.languages, ...post.tools]"
        @add-filter-tag="addFilter"
      />
    </div>
  </div>
</template>

<script>
import Filter from "@/components/Filter.vue";
import Card from "@/components/Card.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Filter,
    Card,
    Header
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
    },
    clearFilter() {
      this.$store.commit("clearFilter");
    }
  }
};
</script>

<style lang="scss" scoped>
.card-container {
  margin-top: 5rem;
}

@media screen and (min-width: 630px) {
  .card-container {
    margin-top: 3rem;
  }
}
</style>
