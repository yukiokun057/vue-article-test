import { signIn, signUp } from "../../api";

const state = defaultState();

function defaultState() {
  return {
    user: undefined
  };
}

const getters = {
  isAuthorised: state => Boolean(state.user)
};

const actions = {
  async signIn({ commit }, { login, password }) {
    const response = await signIn(login, password);
    if (response?.user) {
      commit("SET_USER", response.user);
    }
  },
  async signUp({ commit }, { login, name, password }) {
    const response = await signUp(login, name, password);
    if (response?.user) {
      commit("SET_USER", response.user);
    }
  },
  async logout({ commit }) {
    commit("LOGOUT");
  }
};

const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  LOGOUT: state => {
    const s = defaultState();
    Object.keys(s).forEach(key => {
      state[key] = s[key];
    });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
