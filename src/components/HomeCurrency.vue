<template>
  <div class="card orange darken-3 bill-card">
    <div class="card-content white-text">
      <div class="card-header">
        <span class="card-title">Exchange Rates</span>
      </div>
      <table>
        <thead>
        <tr>
          <th>Currency</th>
          <th>Course</th>
          <th>Date</th>
        </tr>
        </thead>

        <tbody>
        <tr v-for="cur in currencies" :key="cur">
          <td>{{cur}}</td>
          <td>{{+(rates[cur]).toFixed(5)}}</td>
          <td>{{date | date('date')}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rates', 'date'],
  data: () => ({
    currencies: ['UZS', 'USD', 'EUR', 'TRY']
  })
}
</script>

<style lang="scss" scoped>

</style>
