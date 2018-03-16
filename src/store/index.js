import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
  },
  actions: {
    facebookLogin({ commit }, { userId, accessToken }) {
      return axios.post('/auth/facebook', { userId, accessToken })
        .then(token => commit('login', { auth: token }))
        .catch(err => console.error(err)); /* eslint-disable-line no-console */
    },
  },
  strict: debug,
});
