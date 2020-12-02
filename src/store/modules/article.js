import { fetchArticle, createComment } from "../../api";

const state = defaultState();

function defaultState() {
  return {
    article: undefined,
    comments: undefined
  };
}

const getters = {};

const actions = {
  async fetch({ commit }) {
    const response = await fetchArticle();
    if (response?.article) {
      commit("SET_ARTICLE", response.article);
      commit("SET_COMMENTS", response.article.comments);
    }
  },
  async createComment({ commit }, comment) {
    const response = await createComment(comment);
    if (response?.comment) {
      commit("APPEND_COMMENT", response.comment);
    }
  }
};

const mutations = {
  SET_ARTICLE: (state, article) => {
    state.article = article;
  },
  SET_COMMENTS: (state, comments) => {
    state.comments = comments;
  },
  APPEND_COMMENT: (state, comment) => {
    state.comments.push(comment);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
