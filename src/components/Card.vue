<template>
  <div>
    <div>
      <img
        :src="require(`../assets/images/${post.logo}`)"
        alt="post.company logo"
      />
    </div>
    <div>
      <div>
        <span>{{ post.company }}</span>
        <span v-if="post.newJob">NEW</span>
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
      <Tag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
        @click="$emit('addFilterTag', tag)"
      />
    </div>
  </div>
</template>

<script>
import Tag from "@/components/Tag.vue";
export default {
  components: {
    Tag
  },
  props: {
    post: {
      type: Object,
      required: true,
      default: () => {}
    },
    tags: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  emits: ["addFilterTag"]
};
</script>

<style lang="scss" scoped></style>
