<template>
  <div class="modal" :style="style">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div id="modal">

      </div>
    </div>
    <button 
      @click="hide"
      class="modal-close is-large">
    </button>
  </div>

  <section class="section">
    <div class="container">
      <div class="notification is-info is-size-3">
        <p>
          Learn to build this application with Vue.js 3, the Composition API, TypeScript, Vue Router and Vue Test Utils!
        </p>
        <p>
          <a href="https://gum.co/vuejs-composition-api">Get it on Gumroad.</a> 👈🏼 20% off with <b>VUE_SHARE_THE_LOVE</b> 🎉.
        </p>
      </div>
      <navbar />
      <router-view />
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Navbar from './components/Navbar.vue'
import FormInput from './components/FormInput.vue'
import { useModal } from './useModal'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    FormInput
  },

  setup() {
    const modal = useModal()

    const style = computed(() => {
      return {
        display: modal.show.value ? 'block' : 'none'
      }
    })

    return {
      style,
      hide: () => {
        modal.hideModal()
      }
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
