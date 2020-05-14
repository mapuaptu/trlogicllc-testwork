import Icon from '@/components/Icon/index.vue';
import { mount } from '@vue/test-utils';

describe('Icon component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(Icon);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('2. Render svg inside success', async () => {
    const wrapper = await mount(Icon, {
      propsData: {
        icon: 'delete-outline',
      },
    });

    const svg = wrapper.find('svg');

    expect(svg.exists()).toBe(true);
  });
});
