import Button from '@/components/Button/index.vue';

export default {
  name: 'ModalEditTodo',
  components: {
    Button,
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: null,
    },
    onTodoEdit: {
      type: Function,
      default: () => ({}),
    },
  },
  data() {
    return {
      todoName: this.name,
      message: '',
    };
  },
  methods: {
    onCancel() {
      return this.$emit('close');
    },
    onSave() {
      if (!this.todoName) {
        return (this.message = 'Todo name requred');
      }

      const { error } = this.onTodoEdit({ name: this.todoName, id: this.id });

      if (error) {
        return (this.message = error.message);
      }

      return this.$emit('close');
    },
  },
  mounted() {
    return this.$refs.input.focus();
  },
};
