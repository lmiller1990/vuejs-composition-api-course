<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a 
        v-for="period in periods" 
        :key="period"
        :class="{ 'is-active': period === currentPeriod }"
        @click="setPeriod(period)"
      >
        {{ period }}
      </a>
    </span>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

type Period = 'Today' | 'This Week' | 'This Month'

export default defineComponent({
  name: 'Timeline',

  setup() {
    const periods = ['Today', 'This Week', 'This Month']
    const currentPeriod = ref<Period>('Today')

    const setPeriod = (period: Period) => {
      currentPeriod.value = period
    }

    return {
      periods,
      setPeriod,
      currentPeriod
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
