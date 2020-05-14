import Button from '@/components/Button/index.vue';
import deleteNote from '@/mixins/deleteNote';
import ModalCancelEdit from '@/views/Modals/CancelEdit/index.vue';

export default {
  name: 'NoteView',
  mixins: [deleteNote],
  components: {
    Button,
  },
  data() {
    return {
      note: {
        name: '',
      },
    };
  },
  methods: {
    onCancel() {
      return this.$modal.show(ModalCancelEdit, {}, { height: 'auto' });
    },
    onSave() {
      // Save all data to store here

      return this.$router.push({ name: 'home' });
    },
  },
  created() {
    return (this.note = this.$store.state.notes.find(
      (item) => item.id === Number(this.$route.params.id),
    ));
  },
};
