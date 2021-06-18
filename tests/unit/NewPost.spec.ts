import { mount } from '@vue/test-utils'
import NewPost from '../../src/components/NewPost.vue'

describe('NewPost', () => {
  it('creates a post and redirects to /', async () => {
    mount(NewPost)
  })
})