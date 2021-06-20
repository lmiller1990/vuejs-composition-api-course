<template>
  <post-writer 
    :post="post" 
    @save="save"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '../store'
import { Post } from '../mocks';
import PostWriter from './PostWriter.vue'

export default defineComponent({
  components: {
    PostWriter
  },

  async setup(props) {
    const store = useStore()
    const router = useRouter()
    const id = useRoute().params.id as string

    if (!store.getState().posts.loaded) {
      await store.fetchPosts()
    }

    const post = store.getState().posts.all.get(id)

    if (!post) {
      throw Error('Post was not found.')
    }

    if (post.authorId !== store.getState().authors.currentUserId) {
      router.push('/')
    }

    const save = async (post: Post) => {
      await store.updatePost(post)
      router.push('/')
    }

    return {
      post,
      save
    }
  }
});
</script>
