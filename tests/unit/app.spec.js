import App from '@/views/App/index.vue';
import { shallowMount } from '@vue/test-utils';

describe('App component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await shallowMount(App, {
      stubs: ['router-view', 'modals-container', 'router-link'],
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
