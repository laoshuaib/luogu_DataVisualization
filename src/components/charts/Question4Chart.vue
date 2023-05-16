<template>
  <div class="charts">
    <div class="chart" id="circlechart" style="height: 600px; width: 600px"></div>
    <div class="chart" id="barchart" style="height: 600px; width: 600px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
import json_data from '../../assets/data/test1.json';
import val_data from '../../assets/data/test2.json';
import diff_freq_data from '../../assets/data/diff_freq.json'

export default {
  name: "Question4Chart",

  data() {
    return {
      BarChart: null,
      labeldata: null,
      current_data: null,
      valdata: null,
      flag: '入门',
      circleChart: null,
      diff_freq_data: null
    }
  },
  created() {

  },
  mounted() {
    this.labeldata = JSON.parse(json_data)
    this.valdata = JSON.parse(val_data)
    this.diff_freq_data = JSON.parse(diff_freq_data)
    this.drawCircleChart()
    this.drawLine('入门')
  },
  methods: {
    drawLine(val) {
      this.BarChart = echarts.init(document.getElementById('barchart'))
      this.BarChart.setOption({
        title: {
          text: '[' + val + ']难度下常见算法出现比例',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 5,
          top: 10,
          bottom: 10,
          data: this.labeldata[val][0]
        },
        series: [
          {
            name: '算法类型',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: this.valdata[val],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    drawCircleChart() {
      let sort_order = ['入门', '普及-', '普及/提高-', '普及+/提高', '提高+/省选-', '省选/NOI-', 'NOI/NOI+/CTSC']
      let sorted = this.diff_freq_data.sort((a, b) => {
        return sort_order.indexOf(a.name) - sort_order.indexOf(b.name);
      })
      this.circleChart = echarts.init(document.getElementById('circlechart'))
      this.circleChart.setOption({
        title: {
          text: '洛谷题目难度分类',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          left: 'left',
          orient: 'vertical',
        },
        series: [
          {
            name: '难度分布',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 30,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: sorted
          }
        ]
      })
      this.circleChart.on('click', (params) => {
        this.flag = params.name
        this.drawLine(this.flag)
      })
    }
  }
}


</script>

<style scoped>
.chart {
  float: left;
}
</style>
