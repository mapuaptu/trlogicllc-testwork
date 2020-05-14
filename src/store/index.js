import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const CREATE_NOTE = 'CREATE_NOTE';

export default new Vuex.Store({
  state: {
    notes: [],
  },
  mutations: {
    [CREATE_NOTE](state, payload) {
      state.notes.push(payload);
    },
  },
  actions: {},
  modules: {},
});
