<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">

    <router-link
      to="/"
      tag="li"
      active-class="active"
      exact
    >
      <a href="#" class="waves-effect waves-orange pointer">Balance</a>
    </router-link>
    <router-link
      to="/history"
      tag="li"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">History</a>
    </router-link>
    <router-link
      to="/planning"
      tag="li"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">Planning</a>
    </router-link>
    <router-link
      to="/record"
      tag="li"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">New entry</a>
    </router-link>
    <router-link
      to="/categories"
      tag="li"
      active-class="active"
    >
      <a href="#" class="waves-effect waves-orange pointer">Category</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style lang="scss" scoped>

</style>
