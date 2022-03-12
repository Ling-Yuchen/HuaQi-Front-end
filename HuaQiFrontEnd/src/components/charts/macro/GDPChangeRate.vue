<template>
  <div class="main">
    <div id="3" class="main_container"></div>
  </div>
</template>

<script src="echarts.js"></script>
<script src="theme/vintage.js"></script>
<script>
require('echarts/theme/vintage')
export default {
  name: 'GDPChangeRate',
  data () {
    return {}
  },
  mounted () {
    this.initCharts()
  },
  methods: {
    initCharts () {
      // 初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("3"), 'vintage')
      // 绘制图表
      myChart.setOption({
        title: {
          text: 'GDP变动率'
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
            data: [-5.7, -5.7, 3.6, 3.6, 3.6, 1.3],
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
