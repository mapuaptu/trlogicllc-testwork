import Button from '@/components/Button/index.vue';
import ModalCreateNode from '@/views/Modals/CreateNote/index.vue';
import { mapState } from 'vuex';

export default {
  name: 'HomeView',
  components: {
    Button,
  },
  computed: {
    ...mapState({ notes: 'notes' }),
  },
  methods: {
    addNote() {
      return this.$modal.show(
        ModalCreateNode,
        { title: 'Create note' },
        { height: 'auto' },
      );
    },
  },
};
