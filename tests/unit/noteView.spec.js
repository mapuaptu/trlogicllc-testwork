import NoteView from '@/views/NoteView/index.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

const store = new Vuex.Store({
  state: {
    notes: [],
  },
});

describe('Note view', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(NoteView, { store, localVue });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
