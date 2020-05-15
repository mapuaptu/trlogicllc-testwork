import Footer from '@/views/Footer/index.vue';
import { mount } from '@vue/test-utils';

describe('Footer component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(Footer);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
