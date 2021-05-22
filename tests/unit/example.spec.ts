import { mount } from '@vue/test-utils'
import Timeline from '../../src/components/Timeline.vue'
import { today, thisWeek, thisMonth } from '../../src/mocks'

describe('Timeline', () => {
  it('renders today post default', () => {
    const wrapper = mount(Timeline)

    expect(wrapper.html()).toContain(today.created.format('Do MMM'))
  })

  it('update when the period is click', async () => {
    const wrapper = mount(Timeline)

    await wrapper.get('[data-test="This Week"]').trigger('click') // nextTick

    expect(wrapper.html()).toContain(today.created.format('Do MMM'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM'))
  })

  it('update when the period is click', async () => {
    const wrapper = mount(Timeline)

    await wrapper.get('[data-test="This Month"]').trigger('click') // nextTick

    expect(wrapper.html()).toContain(today.created.format('Do MMM'))
    expect(wrapper.html()).toContain(thisWeek.created.format('Do MMM'))
    expect(wrapper.html()).toContain(thisMonth.created.format('Do MMM'))
  })
})