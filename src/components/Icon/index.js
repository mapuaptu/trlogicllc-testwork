import {
  mdiPlusOutline,
  mdiDeleteOutline,
  mdiPencilOutline,
  mdiGithub,
} from '@mdi/js';

const icons = {
  'plus-outline': mdiPlusOutline,
  'delete-outline': mdiDeleteOutline,
  'pencil-outline': mdiPencilOutline,
  github: mdiGithub,
};

export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    fill: {
      type: String,
      default: '#fff',
    },
    width: {
      type: Number,
      default: 24,
    },
    height: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    iconPath() {
      return icons[this.icon];
    },
  },
};
