import CreateNote from '@/views/Modals/CreateNote/index.vue';
import { mount } from '@vue/test-utils';

describe('Modal createNote component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(CreateNote);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
