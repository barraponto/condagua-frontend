import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
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
    userInfo(state, user) {
      state.user = { ...state.user, ...user };
    },
  },
  getters: {
    authenticated: ({ user }) => axios.create({
      headers: { Authorization: `Bearer ${user.auth}` },
    }),
  },
  actions: {
    facebookLogin({ commit }, { userId, accessToken }) {
      return axios.post('/api/auth/facebook', { userId, accessToken })
        .then(({ data }) => commit('login', { auth: data.authToken }))
        .catch(err => console.error(err)); /* eslint-disable-line no-console */
    },
    getUserInfo({ commit, getters: { authenticated } }) {
      return authenticated.get('/api/user/')
        .then(({ data }) => commit('userInfo', data));
    },
  },
  plugins: [createPersistedState()],
  strict: debug,
});
