import Button from '@/components/Button/index.vue';

export default {
  name: 'ModalCreateTodo',
  components: {
    Button,
  },
  props: {
    onTodoSave: {
      type: Function,
      default: () => ({}),
    },
  },
  data() {
    return {
      todoName: '',
      message: '',
    };
  },
  methods: {
    onCancel() {
      return this.$emit('close');
    },
    onCreate() {
      if (!this.todoName) {
        return (this.message = 'Todo name requred');
      }

      const { error } = this.onTodoSave(this.todoName);

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
