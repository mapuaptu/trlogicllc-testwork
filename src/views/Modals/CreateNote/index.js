import Button from '@/components/Button/index.vue';

export default {
  name: 'ModalCreateNote',
  props: {
    onNoteSave: {
      type: Function,
      default: () => {},
    },
  },
  components: {
    Button,
  },
  data() {
    return {
      message: '',
      noteName: '',
    };
  },
  methods: {
    onCancel() {
      return this.$emit('close');
    },
    onSave() {
      if (!this.noteName) {
        return (this.message = 'Note name requred');
      }

      const { error } = this.onNoteSave(this.noteName);

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
