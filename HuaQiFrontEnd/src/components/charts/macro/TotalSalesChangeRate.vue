<template>
  <div class="main">
    <div id="5" class="main_container"></div>
  </div>
</template>

<script src="echarts.js"></script>
<script src="theme/vintage.js"></script>
<script>
require('echarts/theme/vintage')
export default {
  name: 'TotalSalesChangeRate',
  data () {
    return {}
  },
  mounted () {
    this.initCharts()
  },
  methods: {
    initCharts () {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("5"), 'vintage')
      // 绘制图表
      myChart.setOption({
        title: {
          text: '社会销售品零售总额变动率'
        },
        grid: {
          left: '4%',   //图表距边框的距离
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2019/2/1', '2019/3/1', '2019/4/1','2019/5/1','2019/6/1']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [0, 8.7, 7.2, 8.6, 9.8, 7.6],
            type: 'line'
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.main_container {
  width: 100%;
  height: 400px;
  overflow: hidden;
  margin-bottom: 80px;
}
.main {
  margin: 30px;
}
</style>
