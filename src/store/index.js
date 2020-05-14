import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const CREATE_NOTE = 'CREATE_NOTE';
const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    noteId: 0,
    notes: [],
  },
  mutations: {
    [CREATE_NOTE](state, payload) {
      state.notes.push({ id: state.noteId, ...payload });
      state.noteId += 1;
    },
    [DELETE_ALL_NOTES](state) {
      state.notes = [];
    },
  },
  actions: {},
  modules: {},
});
