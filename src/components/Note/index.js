import Icon from '@/components/Icon/index.vue';

export default {
  name: 'Note',
  components: {
    Icon,
  },
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
