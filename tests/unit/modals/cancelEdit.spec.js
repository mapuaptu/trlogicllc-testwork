import CancelEdit from '@/views/Modals/CancelEdit/index.vue';
import { mount } from '@vue/test-utils';

describe('Modal createNote component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(CancelEdit);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
