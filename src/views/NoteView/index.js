import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import deleteNote from '@/mixins/deleteNote';
import ModalCancelEdit from '@/views/Modals/CancelEdit/index.vue';
import ModalCreateTodo from '@/views/Modals/CreateTodo/index.vue';
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
      id: '',
      name: '',
      todos: [],
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

      return (this.name = event.target.value);
    },
    onCancel() {
      return this.$modal.show(ModalCancelEdit, {}, { height: 'auto' });
    },
    onSave() {
      this.$store.commit('EDIT_NOTE', {
        name: this.name,
        todos: this.todos,
        id: this.id,
      });

      return this.$router.push({ name: 'home' });
    },
    createTodo() {
      return this.$modal.show(
        ModalCreateTodo,
        {
          // react style becase such modal component
          // issue on github - https://github.com/euvl/vue-js-modal/issues/192#issuecomment-372990690
          onTodoSave: this.onTodoSave,
        },
        { height: 'auto' },
      );
    },
    onTodoSave(name) {
      if (this.todos.find((item) => item.name === name)) {
        return {
          error: { message: 'Todo with same name already exist' },
        };
      }

      // may be use uuid is better

      this.todos.push({ name, complete: false, id: Date.now() });

      return { error: null };
    },
  },
  created() {
    // Create new instance of note for not mutate store directly

    const note = this.$store.state.notes.find(
      (item) => item.id === Number(this.$route.params.id),
    );

    this.name = note.name;
    this.id = note.id;
    this.todos = [...note.todos];
  },
};
