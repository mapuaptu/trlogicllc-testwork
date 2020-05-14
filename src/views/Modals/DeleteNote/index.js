import Button from '@/components/Button/index.vue';

export default {
  name: 'ModalDeleteNote',
  components: {
    Button,
  },
  props: {
    id: {
      type: Number,
      default: null,
    },
    name: {
      type: String,
      default: '',
    },
  },
  methods: {
    onCancel() {
      return this.$emit('close');
    },
    onDelete() {
      this.$store.commit('DELETE_NOTE', { id: this.id });

      return this.$emit('close');
    },
  },
};
