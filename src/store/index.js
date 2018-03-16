import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import axios from 'axios';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    user: null,
    condos: [],
  },
  mutations: {
    login(state, user) {
      state.user = user;
    },
    userInfo(state, user) {
      state.user = { ...state.user, ...user };
    },
    condos(state, condos) {
      state.condos = condos;
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
    getCondos({ commit, getters: { authenticated } }) {
      return authenticated.get('/api/user/condos')
        .then(({ data }) => commit('condos', data));
    },
    addCondo({ dispatch, getters: { authenticated } }, condo) {
      console.log(condo);
      return authenticated.post('/api/user/condos', condo)
        .then(() => dispatch('getCondos'));
    },
  },
  plugins: [createPersistedState()],
  strict: debug,
});
