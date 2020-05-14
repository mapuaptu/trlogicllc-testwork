import { mdiPlusOutline, mdiDeleteOutline, mdiPencilOutline } from '@mdi/js';

const icons = {
  'plus-outline': mdiPlusOutline,
  'delete-outline': mdiDeleteOutline,
  'pencil-outline': mdiPencilOutline,
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
