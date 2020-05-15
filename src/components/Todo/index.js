import Icon from '@/components/Icon/index.vue';

export default {
  name: 'Todo',
  components: {
    Icon,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onInput({ target }) {
      return this.$emit('input', target.checked);
    },
  },
};
