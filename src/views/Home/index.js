import Button from '@/components/Button/index.vue';
import Note from '@/components/Note/index.vue';
import ModalCreateNote from '@/views/Modals/CreateNote/index.vue';
import ModalDeleteNote from '@/views/Modals/DeleteNote/index.vue';
import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Button,
    Note,
  },
  computed: {
    ...mapState({ notes: 'notes' }),
  },
  methods: {
    addNote() {
      return this.$modal.show(ModalCreateNote, {}, { height: 'auto' });
    },
    deleteAllNotes() {
      return this.$store.commit('DELETE_ALL_NOTES');
    },
    deleteNote({ id, name }) {
      return this.$modal.show(
        ModalDeleteNote,
        { id, name },
        { height: 'auto' },
      );
    },
  },
};
