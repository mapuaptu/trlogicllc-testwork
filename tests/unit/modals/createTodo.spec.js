import CreateTodo from '@/views/Modals/CreateTodo/index.vue';
import { mount } from '@vue/test-utils';

describe('Modal createNote component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(CreateTodo);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
