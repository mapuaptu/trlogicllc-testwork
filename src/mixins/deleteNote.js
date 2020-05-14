import ModalDeleteNote from '@/views/Modals/DeleteNote/index.vue';

export default {
  methods: {
    deleteNote({ id, name }) {
      return this.$modal.show(
        ModalDeleteNote,
        { id, name },
        { height: 'auto' },
      );
    },
  },
};
