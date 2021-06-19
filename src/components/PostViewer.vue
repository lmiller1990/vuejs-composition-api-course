<template>
  <router-link
    :to="`/posts/${post.id}/edit`"
    class="button is-link is-rounded"
  >
    Edit
  </router-link>
  <h1>{{ post.title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from '../store'

export default defineComponent({
  async setup(props) {
    const store = useStore()
    const id = useRoute().params.id as string

    if (!store.getState().posts.loaded) {
      await store.fetchPosts()
    }

    const post = store.getState().posts.all.get(id)

    if (!post) {
      throw Error('Post was not found.')
    }

    return {
      post
    }
  }
});
</script>
