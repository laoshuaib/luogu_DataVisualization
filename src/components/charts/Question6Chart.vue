<template>
  <div class="charts">
    <div id="RadarChart2" style="height: 600px; width: 900px; margin: auto"></div>
  </div>
</template>

<script>

import * as echarts from "echarts";


export default {
  name: "Question6Chart",

  data() {
    return {
      RadarChart: null,
      listdata: null,

    }
  },
  created() {

  },
  mounted() {
    this.listdata = [
      {
        value: [49.9, 2510.2, 24180.9, 1651.3, 29.1],
        name: 'C++98'
      },
      {
        value: [50.8, 1955.1, 49729.5, 1621.0, 26.9],
        name: 'Java 8'
      },
      {
        value: [47.9, 1166.8, 7460.9, 1059.0, 26.6],
        name: 'C'
      },
      {
        value: [41.2, 2305.5, 14674.4, 715.6, 23.9],
        name: 'Python 3'
      },
      {
        value: [54.9, 2869.0, 30612.2, 1840.2, 33.0],
        name: 'C++11'
      },
      {
        value: [57.5, 2381.6, 23753.1, 1452.1, 36.5],
        name: 'C++14 (GCC 9)'
      }
    ]
    this.drawLine()
  },
  methods: {
    drawLine() {
      this.RadarChart = echarts.init(document.getElementById('RadarChart2'))
      this.RadarChart.setOption({
        tooltip: {
          trigger: 'item',
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          left: 5,
          top: 10,
          bottom: 10,
          data: ['C', 'C++98','C++11', 'C++14 (GCC 9)', 'Java 8', 'Python 3']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            {name: '平均分数', max: 65},
            {name: '平均运行时间/ms', max: 3000},
            {name: '平均内存使用/kB', max: 50000},
            {name: '平均代码长度/B', max: 2000},
            {name: '平均正确率', max: 45},
          ]
        },
        series: [
          {
            name: '不同难度下的数据',
            type: 'radar',
            data: this.listdata
          }
        ]
      })
    },
  }

}


</script>

<style scoped>

</style>
