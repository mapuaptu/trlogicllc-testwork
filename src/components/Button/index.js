import Icon from '@/components/Icon/index.vue';

export default {
  name: 'Button',
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: '',
    },
  },
};
