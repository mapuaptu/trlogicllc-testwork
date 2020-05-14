import Button from '@/components/Button/index.vue';
import Icon from '@/components/Icon/index.vue';
import { mount } from '@vue/test-utils';

describe('Button component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(Button);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('2. Render Icon component inside success', async () => {
    const wrapper = await mount(Button, {
      propsData: {
        icon: 'delete-outline',
      },
    });

    const icon = wrapper.find(Icon);

    expect(icon.exists()).toBe(true);
  });
});
