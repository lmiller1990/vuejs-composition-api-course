import { mount } from '@vue/test-utils'
import NewPost from '../../src/components/NewPost.vue'
import { Store } from '../../src/store'

let routes: string[] = []

jest.mock('vue-router', () => ({
  useRouter: () => {
    return {
      push: (route: string) => {
        routes.push(route)
      }
    }
  }
}))

jest.mock('axios', () => ({
  post: (url: string, payload: any) => {
    return {
      data: payload
    }
  }
}))

describe('NewPost', () => {
  const store = new Store({
    posts: {
      all: new Map(),
      ids: [],
      loaded: false
    },
    authors: {
      ids: ['100'],
      all: new Map([['100', { username: 'username', id: '100' }]]),
      loaded: true,
      currentUserId: '100'
    }
  })

  beforeEach(() => {
    routes = []
  })

  it('creates a post and redirects to /', async () => {
    const wrapper = mount(NewPost, {
      global: {
        plugins: [store]
      }
    })

    expect(store.getState().posts.ids).toHaveLength(0)

    await wrapper.find('[data-test="submit"]').trigger('click')

    expect(store.getState().posts.ids).toHaveLength(1)

    expect(routes).toEqual(['/'])
  })
})