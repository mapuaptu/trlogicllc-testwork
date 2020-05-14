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
      this.$emit('close');

      // Redirect to home page after delete note

      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' });
      }
    },
  },
};
