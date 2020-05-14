import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import deleteNote from '@/mixins/deleteNote';
import ModalCancelEdit from '@/views/Modals/CancelEdit/index.vue';
import ClickOutside from 'vue-click-outside';

export default {
  name: 'NoteView',
  directives: {
    ClickOutside,
  },
  mixins: [deleteNote],
  components: {
    Button,
    Icon,
  },
  data() {
    return {
      note: {
        name: '',
      },
      editMode: false,
    };
  },
  methods: {
    editName() {
      this.editMode = !this.editMode;

      return this.$nextTick(() => {
        this.editMode && this.$refs.input.focus();
      });
    },
    hideEditMode() {
      return (this.editMode = false);
    },
    onNameInput(event) {
      // If name of note is empty - remain first symbol

      if (!event.target.value) {
        return;
      }

      return (this.note.name = event.target.value);
    },
    onCancel() {
      return this.$modal.show(ModalCancelEdit, {}, { height: 'auto' });
    },
    onSave() {
      this.$store.commit('EDIT_NOTE', this.note);

      return this.$router.push({ name: 'home' });
    },
  },
  created() {
    // Create new instance of note for not mutate store directly

    const note = this.$store.state.notes.find(
      (item) => item.id === Number(this.$route.params.id),
    );

    return (this.note = { ...note });
  },
};
