<template>
  <form @submit.prevent="submit">
    <p>Test account is username: "user123", password: "pass42".</p>
    <form-input 
      v-model="username" 
      name="Username"
      type="text"
      :error="usernameStatus.message"
    />

    <form-input 
      v-model="password" 
      name="Password"
      type="password"
      :error="passwordStatus.message"
    />

    <button
      class="button is-primary"
      :disabled="!usernameStatus.valid || !passwordStatus.valid"
    >
      Submit
    </button>
  </form>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import FormInput from './FormInput.vue'
import { required, length, Status, validate } from '../validation'
import { User, useStore } from '../store';
import { useModal } from '../useModal';

export default defineComponent({
  components: {
    FormInput
  },

  setup() {
    const username = ref('')
    const usernameStatus = computed<Status>(() => {
      return validate(username.value, [required()])
    })

    const password = ref('')
    const passwordStatus = computed<Status>(() => {
      return validate(password.value, [required()])
    })

    const store = useStore()
    const modal = useModal()

    const submit = async (evt: Event) => {
      if (!usernameStatus.value.valid ||
        !passwordStatus.value.valid
      ) {
        return
      }

      const user: User = {
        id: '-1',
        username: username.value,
        password: password.value,
      }

      await store.signIn(user)
      modal.hideModal()
    }

    return {
      usernameStatus,
      username,
      submit,
      password,
      passwordStatus
    }
  }
});
</script>

<style scoped>
form {
  padding: 15px;
  background: white;
}
</style>
