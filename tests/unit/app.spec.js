import App from '@/App.vue';
import { shallowMount } from '@vue/test-utils';

describe('App component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await shallowMount(App, {
      stubs: ['router-view', 'modals-container'],
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
