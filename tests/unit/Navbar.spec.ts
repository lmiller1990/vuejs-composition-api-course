import { mount } from '@vue/test-utils'
import Navbar from '../../src/components/Navbar.vue'
import { Store } from '../../src/store'

describe('Navbar', () => {
  it('shows a signup modal via teleport', async () => {
    const store = new Store({
      posts: {
        all: new Map(),
        ids: [],
        loaded: false
      }
    })

    const wrapper = mount(Navbar, {
      global: {
        plugins: [store]
      }
    })
  })
})
