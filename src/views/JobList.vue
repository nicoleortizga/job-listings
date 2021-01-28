<template>
  <div>
    <Card :filteredData="filteredData" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  components: {
    Card
  },
  data() {
    return {
      selectedFilter: {}
    };
  },
  computed: {
    jobData() {
      return this.$store.state.jobData;
    },
    filteredData() {
      const x = this.selectedFilter.type,
        filter = this.selectedFilter.filterText;

      return this.jobData.filter((el) => {
        if (el[x] !== undefined) {
          return el[x].match(filter);
        } else return true;
      });
    }
  }
};
</script>
