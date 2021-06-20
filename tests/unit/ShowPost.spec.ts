import { mount, flushPromises } from '@vue/test-utils'
import ShowPost from '../../src/components/ShowPost.vue'
import { Store } from '../../src/store'
import { today } from '../../src/mocks'
import { routerWithStore } from '../../src/router'

describe('ShowPost', () => {
  it('does not show edit button when not authenticated', async () => {
    const store = new Store({
      posts: {
        ids: [today.id],
        all: new Map([[today.id, today]]),
        loaded: true
      },
      authors: {
        ids: [],
        all: new Map(),
        loaded: true,
        currentUserId: undefined
      }
    })

    const router = routerWithStore(store)
    router.push(`/posts/${today.id}`)
    await router.isReady()

    const wrapper = mount(ShowPost, {
      global: {
        plugins: [store, router]
      }
    })

    await flushPromises()

    expect(wrapper.find('[data-test="can-edit"]').exists()).toBe(false)
  })

  it('does not show edit button when not authorized', async () => {
    const store = new Store({
      posts: {
        ids: [today.id],
        all: new Map([[today.id, today]]),
        loaded: true
      },
      authors: {
        ids: ['100000'],
        all: new Map([['100000', {
          id: '100000',
          username: 'username',
        }]]),
        loaded: true,
        currentUserId: undefined
      }
    })

    const router = routerWithStore(store)
    router.push(`/posts/${today.id}`)
    await router.isReady()

    const wrapper = mount(ShowPost, {
      global: {
        plugins: [store, router]
      }
    })

    await flushPromises()

    expect(wrapper.find('[data-test="can-edit"]').exists()).toBe(false)
  })

  it('shows edit button when authorized', async () => {
    const store = new Store({
      posts: {
        ids: [today.id],
        all: new Map([[today.id, today]]),
        loaded: true
      },
      authors: {
        ids: ['1'],
        all: new Map([['1', {
          id: '1',
          username: 'username',
        }]]),
        loaded: true,
        currentUserId: '1'
      }
    })

    const router = routerWithStore(store)
    router.push(`/posts/${today.id}`)
    await router.isReady()

    const wrapper = mount(ShowPost, {
      global: {
        plugins: [store, router]
      }
    })

    await flushPromises()

    expect(wrapper.find('[data-test="can-edit"]').exists()).toBe(true)
  })
})