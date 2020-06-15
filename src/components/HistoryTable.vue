<template>
  <table>
    <thead>
    <tr>
      <th>#</th>
      <th>Amount</th>
      <th>Date</th>
      <th>Category</th>
      <th>Type</th>
      <th>Open</th>
    </tr>
    </thead>

    <tbody>
    <tr v-for="(record, i) of records" :key="record.id">
      <td>{{i + 1}}</td>
      <td>{{record.amount | currency}}</td>
      <td>{{record.date | date('datetime')}}</td>
      <td>{{record.categoryName}}</td>
      <td>
        <span class="white-text badge" :class="[record.typeClass]">{{record.typeText}}</span>
      </td>
      <td>
        <button class="btn-small btn" v-tooltip="'Open'" @click="open(record.id)">
          <i class="material-icons">open_in_new</i>
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ['records'],
  methods: {
    open(id) {
      this.$router.push('/record/' + id)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
