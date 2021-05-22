<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a>Today</a>
      <a>This Week</a>
      <a>This Month</a>
    </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Timeline',
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
