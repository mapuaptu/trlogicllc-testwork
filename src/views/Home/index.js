import Button from '@/components/Button/index.vue';
import Note from '@/components/Note/index.vue';
import Todo from '@/components/Todo/index.vue';
import ModalCreateNote from '@/views/Modals/CreateNote/index.vue';
import { mapState } from 'vuex';
import deleteNote from '@/mixins/deleteNote';

export default {
  name: 'HomeView',
  mixins: [deleteNote],
  components: {
    Button,
    Note,
    Todo,
  },
  computed: {
    ...mapState({ notes: 'notes' }),
  },
  methods: {
    addNote() {
      return this.$modal.show(
        ModalCreateNote,
        { onNoteSave: this.onNoteSave },
        { height: 'auto' },
      );
    },
    onNoteSave(name) {
      if (this.$store.state.notes.find((item) => item.name === name)) {
        return { error: { message: 'Note with this name already exist' } };
      }

      this.$store.commit('CREATE_NOTE', { name });

      return {
        error: null,
      };
    },
    deleteAllNotes() {
      return this.$store.commit('DELETE_ALL_NOTES');
    },
    editNote({ id }) {
      return this.$router.push({ name: 'note', params: { id } });
    },
  },
};
