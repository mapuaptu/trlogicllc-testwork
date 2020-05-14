import Button from '@/components/Button/index.vue';
import Note from '@/components/Note/index.vue';
import ModalCreateNode from '@/views/Modals/CreateNote/index.vue';
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
      return this.$modal.show(ModalCreateNode, {}, { height: 'auto' });
    },
    deleteAllNotes() {
      return this.$store.commit('DELETE_ALL_NOTES');
    },
    deleteNote(id) {
      return this.$store.commit('DELETE_NOTE', { id });
    },
  },
};
