<template>
  New Post
  <post-writer :post="newPost" />
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
      title: 'New post',
      created: moment()
    }

    return {
      newPost
    }
  }
});
</script>

<style>
</style>
