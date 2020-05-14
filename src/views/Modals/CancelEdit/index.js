import Button from '@/components/Button/index.vue';

export default {
  name: 'ModalCancelEdit',
  components: {
    Button,
  },
  methods: {
    onNo() {
      return this.$emit('close');
    },
    onYes() {
      this.$emit('close');

      return this.$router.push({ name: 'home' });
    },
  },
};
