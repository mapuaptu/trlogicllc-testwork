import NoteView from '@/views/NoteView/index.vue';
import { mount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { routes } from '@/router';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

const store = new Vuex.Store({
  state: {
    notes: [],
  },
});

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

describe('Note view', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(NoteView, { router, store, localVue });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
