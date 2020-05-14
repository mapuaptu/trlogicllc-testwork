import Button from '@/components/Button/index.vue';
import Note from '@/components/Note/index.vue';
import ModalCreateNote from '@/views/Modals/CreateNote/index.vue';
import { mapState } from 'vuex';
import deleteNote from '@/mixins/deleteNote';

export default {
  name: 'HomeView',
  mixins: [deleteNote],
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
    editNote({ id }) {
      return this.$router.push({ name: 'note', params: { id } });
    },
  },
};
