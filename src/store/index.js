import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const CREATE_NOTE = 'CREATE_NOTE';
const DELETE_ALL_NOTES = 'DELETE_ALL_NOTES';
const DELETE_NOTE = 'DELETE_NOTE';
const EDIT_NOTE = 'EDIT_NOTE';

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    noteId: 0,
    notes: [],
  },
  mutations: {
    [CREATE_NOTE](state, payload) {
      state.notes.push({ id: state.noteId, todos: [], ...payload });
      state.noteId += 1;
    },
    [DELETE_ALL_NOTES](state) {
      state.notes = [];
    },
    [DELETE_NOTE](state, { id }) {
      state.notes = state.notes.filter((item) => item.id !== id);
    },
    [EDIT_NOTE](state, payload) {
      const index = state.notes.findIndex((item) => item.id === payload.id);

      state.notes[index] = payload;
    },
  },
  actions: {},
  modules: {},
});
