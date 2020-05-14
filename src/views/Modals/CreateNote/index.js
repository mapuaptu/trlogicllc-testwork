import Button from '@/components/Button/index.vue';

export default {
  name: 'ModalCreateNote',
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

      if (this.$store.state.notes.find((item) => item.name === this.noteName)) {
        return (this.message = 'Note with this name already exist');
      }

      this.$store.commit('CREATE_NOTE', { name: this.noteName });

      return this.$emit('close');
    },
  },
  mounted() {
    return this.$refs.input.focus();
  },
};
