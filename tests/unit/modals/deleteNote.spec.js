import DeleteNote from '@/views/Modals/DeleteNote/index.vue';
import { mount } from '@vue/test-utils';

describe('Modal createNote component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(DeleteNote);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
