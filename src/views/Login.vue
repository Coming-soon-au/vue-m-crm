<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Home accounting</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          class="validate"
          v-model="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Your Email</small>
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.email">Email must be email</small>
      </div>
      <div class="input-field">
        <input
            id="password"
            type="password"
            class="validate"
            v-model="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}"
        >
        <label for="password">Password</label>
        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">Your Password</small>
        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.minLength">Minimum length</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Login
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        No account?
        <router-link to="/register">Sign up</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, minLength, required} from 'vuelidate/lib/validators'
import messages from '../messages'

export default {
  validations: {
    email: {required, email},
    password: {required, minLength: minLength(6)}
  },
  data: () => ({
    email: '',
    password: ''
  }),
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      await this.$store.dispatch('login', {
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">

</style>
