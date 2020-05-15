import Icon from '@/components/Icon/index.vue';

export default {
  name: 'Footer',
  components: {
    Icon,
  },
  props: {
    githubLink: {
      type: String,
      default: '',
    },
  },
};
