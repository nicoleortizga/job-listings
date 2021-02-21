<template>
  <div :class="classObject" class="card display-grid shadow round">
    <div>
      <img
        :src="require(`../assets/images/${post.logo}`)"
        alt="post.company logo"
      />
    </div>
    <div class="card-content">
      <p class="post">
        <span class="post--company mr-space">{{ post.company }}</span>
        <span v-if="isNewJobPost" class="round-tag round-tag--new-bg mr-space"
          >NEW</span
        >
        <span v-if="isFeaturedJobPost" class="round-tag round-tag--featured-bg"
          >FEATURED</span
        >
      </p>
      <a href="#" class="post--position">{{ post.position }}</a>
      <p class="post--date">
        {{ post.postedAt }} • {{ post.contract }} • {{ post.location }}
      </p>
    </div>

    <div
      class="tag-wrapper display-flex display-flex--wrap display-flex--center"
    >
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
  data() {
    return {
      isNewJobPost: this.post.newJob,
      isFeaturedJobPost: this.post.featured
    };
  },
  computed: {
    classObject() {
      return {
        "border-left": this.isNewJobPost || this.isFeaturedJobPost
      };
    }
  },
  emits: ["addFilterTag"]
};
</script>

<style lang="scss" scoped>
p {
  margin: 0;
  padding: 0;
}

.card {
  padding: $unit * 2;
  margin: $unit * 3 0;
  background: $color-white;
  border-radius: $unit - 4;
  position: relative;
  align-items: center;
}

.post {
  &--company {
    color: $color-primary;
    font-size: $font-size - 2;
  }

  &--position {
    display: inline-block;
    padding: 0.5rem 0;
    font-weight: $strong-font-weight;
    color: $color-darker-grayish-cyan;

    &:hover {
      color: $color-primary;
    }
  }
  &--date {
    color: $color-dark-grayish-cyan;
    font-size: $font-size - 2;
    font-weight: $light-font-weight;
  }
}

.mr-space {
  margin-right: 1rem;
}

@media screen and (max-width: 629px) {
  .card {
    margin-bottom: $unit * 8;

    img {
      position: absolute;
      top: -45px;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .card-content {
    border-bottom: 1px solid #7b8e8e;
    padding: 2rem 0 1rem 0;
  }
}
@media screen and (min-width: 630px) {
  .card {
    grid-template-columns: 100px 250px 1fr;
  }

  .tag-wrapper {
    justify-self: end;
  }
}
</style>
