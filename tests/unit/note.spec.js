import Note from '@/components/Note/index.vue';
import { mount } from '@vue/test-utils';

describe('Note component', () => {
  it('1. Rendered success', async () => {
    const wrapper = await mount(Note);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('2. Render title success', async () => {
    const testTitle = 'testTitle';

    const wrapper = await mount(Note, {
      propsData: {
        title: testTitle,
      },
    });

    const title = wrapper.find('[data-test="note-title"]');

    expect(title.text()).toEqual(testTitle);
  });
});
