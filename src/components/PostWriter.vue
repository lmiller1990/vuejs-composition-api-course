<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">New Post</div>
        <input 
          type="text" 
          class="input"
          v-model="title"
        >
        <div contenteditable ref="contentEditable" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '../mocks';
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true
    }
  },

  setup(props) {
    const title = ref(props.post.title)
    const content = ref('')
    const contentEditable = ref(null)

    console.log(contentEditable.value)

    onMounted(() => {
      console.log(contentEditable.value)
    })

    return {
      title,
      content,
      contentEditable
    }
  }
});
</script>

<style>
</style>
