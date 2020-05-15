import Todo from '@/components/Todo/index.vue';
import { mount } from '@vue/test-utils';

describe('Note component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(Todo);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
