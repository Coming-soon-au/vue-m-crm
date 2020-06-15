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
        <small class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required">Email</small>
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
        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required">Password</small>
        <small class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.minLength">Minimum length</small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          class="validate"
          :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
          v-model="name"
        >
        <label for="name">Fullname</label>
        <small class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required">Name enter</small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>I agree with the rules</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
        >
          Sign Up
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Already have an account?
        <router-link to="/login">Login!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {email, minLength, required} from 'vuelidate/lib/validators'
export default {
  validations: {
    email: {required, email},
    name: {required},
    agree: {checked: val => val},
    password: {required, minLength: minLength(6)}
  },
  data: () => ({
    email: '',
    password: '',
    name: '',
    agree: false
  }),
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      try {
        await this.$store.dispatch('register', {
          email: this.email,
          password: this.password,
          name: this.name
        })
        this.$router.push('/')
      } catch (e) {

      }
    }
  }
}
</script>
