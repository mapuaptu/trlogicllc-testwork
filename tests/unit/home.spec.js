import Home from '@/views/Home/index.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
  },
});

describe('Home component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(Home, { store, localVue });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
