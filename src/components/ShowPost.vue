<template>
  Show Post
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import { useStore } from '../store'

export default defineComponent({
  setup(props) {
    const store = useStore()
    const id = useRoute().params.id as string
    const post = store.getState().posts.all.get(id)
    console.log(post)
  }
});
</script>
