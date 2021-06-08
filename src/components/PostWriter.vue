<template>
  <div class="columns">
    <div class="column">
      <div class="field">
        <div class="label">New Post</div>
        <input type="text" class="input">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from '../mocks';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true
    }
  }
});
</script>

<style>
</style>
