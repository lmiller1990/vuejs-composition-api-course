<template>
  <div class="navbar">
    <div class="navbar-end">
      <div 
        class="buttons"
        v-if="auth"
      >
        <router-link 
          class="button"
          to="/posts/new"
        >
          New Post
        </router-link>

        <button
          class="button"
          @click="signOut"
        >
          Sign Out
        </button>
      </div>

      <div 
        class="buttons"
        v-else
      >
        <button
          class="button"
          @click="signUp"
        >
          Sign Up
        </button>

        <button
          class="button"
          @click="signIn"
        >
          Sign In
        </button>
      </div>

    </div>
  </div>

  <teleport to="#modal">
    <component :is="component" />
  </teleport>
</template>

<script lang="ts">
import { computed, defineComponent, h, markRaw } from 'vue';
import Signup from './Signup.vue'
import { useModal } from '../useModal'
import { useStore } from '../store'

export default defineComponent({
  components: {
    Signup
  },

  setup() {
    const modal = useModal()
    const store = useStore()

    const auth = computed(() => {
      return !!store.getState().authors.currentUserId
    })

    console.log(Signup)

    const signIn = () => {
      const Demo = defineComponent({
        setup () {
          return () => h('div', 'Demo')
        }
      })

      modal.component.value = markRaw(Demo)
      modal.showModal()
    }

    const signUp = () => {
      modal.component.value = markRaw(Signup)
      modal.showModal()
    }

    const signOut = () => {}

    return {
      component: modal.component,
      signIn,
      signUp,
      signOut,
      auth,
    }
  }
});
</script>