import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const CREATE_NOTE = 'CREATE_NOTE';
const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';
const DELETE_NOTE = 'DELETE_NOTE';

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
    [DELETE_NOTE](state, { id }) {
      state.notes = state.notes.filter((item) => item.id !== id);
    },
  },
  actions: {},
  modules: {},
});
