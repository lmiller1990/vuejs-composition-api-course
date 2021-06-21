import { mount } from '@vue/test-utils'
import Navbar from '../../src/components/Navbar.vue'
import Signup from '../../src/components/Signup.vue'
import { Store } from '../../src/store'

jest.mock('vue-router', () => ({
  useRouter: () => {
    return {}
  }
}))

describe('Navbar', () => {
  it('shows a signup modal via teleport', async () => {
    const store = new Store({
      posts: {
        all: new Map(),
        ids: [],
        loaded: false
      },
      authors: {
        ids: [],
        all: new Map(),
        loaded: false,
        currentUserId: undefined
      }
    })

    const el = document.createElement('div')
    el.id = 'modal'
    document.body.appendChild(el)

    const wrapper = mount(Navbar, {
      attachTo: document.body,
      global: {
        components: {
          RouterLink: {
            template: `<div></div>`
          }
        },
        plugins: [
          store,
        ]
      }
    })

    await wrapper.get('[data-test="sign-up"]').trigger('click')
    const form = wrapper.getComponent(Signup)

    expect(document.body.outerHTML).toContain('The value must be between 10 and 40')

    await form.get('#Username').setValue('Username')
    await form.get('#Password').setValue('12345678910')

    expect(document.body.outerHTML).not.toContain('The value must be between 10 and 40')

    await form.trigger('submit.prevent')
  })
})
