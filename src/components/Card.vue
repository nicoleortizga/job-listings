<template>
  <div v-for="post in filteredData" :key="post.id">
    <div>
      <img
        :src="require(`../assets/images/${post.logo}`)"
        alt="post.company logo"
      />
    </div>
    <div>
      <div>
        <span>{{ post.company }}</span>
        <span v-if="post.new">NEW</span>
        <span v-if="post.featured">FEATURED</span>
      </div>
      <div>
        <span>{{ post.position }}</span>
      </div>
      <div>
        <ul>
          <li>{{ post.postedAt }}</li>
          <li>{{ post.contract }}</li>
          <li>{{ post.location }}</li>
        </ul>
      </div>
    </div>

    <div>
      <span>Frontend</span>
      <span>Senior</span>
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filteredData: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped></style>
