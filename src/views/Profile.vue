<template>
  <div>
    <div class="page-title">
      <h3>Profile</h3>
    </div>

    <form @submit.prevent="onSubmit" class="form">
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="name"
          :class="{invalid: $v.name.$dirty && !$v.name.required}"
        >
        <label for="description">Имя</label>
        <span v-if="$v.name.$dirty && !$v.name.required"
              class="helper-text invalid">Enter Fullname</span>
      </div>
      <div class="switch">
        <label>
          Russian
          <input type="checkbox" v-model="isLocale">
          <span class="lever"></span>
          Uzbekcha
        </label>
      </div>
      <button class="btn waves-effect waves-light" type="submit">
        Update
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import {required} from 'vuelidate/lib/validators'

export default {
  validations: {
    name: {required}
  },
  metaInfo(){
    return {
      title: "Profile"
    }
  } ,
  data() {
    return {
      name: this.$store.getters.info.name,
      isLocale: this.$store.getters.info.locale
    }
  },
  mounted() {
    M.updateTextFields()
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      await this.$store.dispatch('updateInfo', {
        name: this.name,
        locale: this.isLocale ? 'uz-UZ' : 'ru-RU'
      })
      this.$message('Updated')
    }
  }
}
</script>

<style lang="scss" scoped>
.switch{
  margin-bottom: 2rem;
}
</style>
