<template>
  <div>
    <div class="chartBox">
      <exchange-settlement-change-rate/>
    </div>
    <div class="chartBox">
      <foreign-exchange-rate-fluctuation/>
    </div>
    <div class="chartBox">
      <g-d-p-change-rate/>
    </div>
    <div class="chartBox">
      <import-and-export-change-rate/>
    </div>
    <div class="chartBox">
      <total-sales-change-rate/>
    </div>
  </div>
</template>

<script>
import GDPChangeRate from '../components/charts/macro/GDPChangeRate.vue'
import ExchangeSettlementChangeRate from '../components/charts/macro/ExchangeSettlementChangeRate.vue'
import ForeignExchangeRateFluctuation from '../components/charts/macro/ForeignExchangeRateFluctuation.vue'
import ImportAndExportChangeRate from '../components/charts/macro/ImportAndExportChangeRate.vue'
import TotalSalesChangeRate from '../components/charts/macro/TotalSalesChangeRate.vue'
export default {
  name: 'MacroData',
  components: {
    GDPChangeRate,
    ExchangeSettlementChangeRate,
    ForeignExchangeRateFluctuation,
    ImportAndExportChangeRate,
    TotalSalesChangeRate
  }
}
</script>

<style scoped>
.chartBox {
  width: 50%;
  float: left;
}
</style>
