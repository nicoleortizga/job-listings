import { createStore } from "vuex";
import jobData from "./../assets/data/data.json";

export default createStore({
  state: {
    jobData,
    tags: []
  },
  getters: {
    filteredData: state => {
      return state.jobData.filter(post => {
        if (state.tags.length === 0) {
          return true;
        } else {
          const cardTags = [
            post.role,
            post.level,
            ...post.tools,
            ...post.languages
          ];
          return state.tags.every(tag => cardTags.includes(tag));
        }
      });
    },
    filterTags: state => {
      return state.tags;
    }
  },
  mutations: {
    addFilterTag(state, payload) {
      if (state.tags.indexOf(payload.tag) === -1) {
        state.tags.push(payload.tag);
      }
    },
    removeFilterTag(state, payload) {
      const indexOfTagToRemove = state.tags.indexOf(payload.tag);
      const updatedTags = state.tags.filter(
        (_, index) => index !== indexOfTagToRemove
      );
      state.tags = updatedTags;
    },
    clearFilter(state) {
      state.tags = [];
    }
  }
});
