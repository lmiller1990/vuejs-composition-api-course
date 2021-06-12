<template>
  <post-writer 
    :post="newPost" 
    @save="save"
  />
</template>

<script lang="ts">
import { Post } from '../mocks';
import { defineComponent } from 'vue';
import PostWriter from './PostWriter.vue'
import moment from 'moment';

export default defineComponent({
  components: {
    PostWriter
  },

  setup() {
    const newPost: Post = {
      id: '-1',
      title: 'Enter your title...',
      created: moment()
    }

    const save = (post: Post) => {
      console.log('post', post)
    }

    return {
      newPost,
      save
    }
  }
});
</script>

<style>
</style>
