<template>
  <div>
    <div id="chart1" class="chart" style="height: 700px; width: 560px"></div>
    <div id="chart2" class="chart" style="height: 700px; width: 760px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import jsonData from '@/assets/data/alg_diff_sunburst.json'

export default {
  name: 'Question2Chart',
  data() {
    return {
      chart1: undefined,
      chart2: undefined,
      currentKey: '动态规划,dp',
      currentData: {
        x: undefined,
        y1: undefined,
        y2: undefined
      }
    }
  },
  created() {
    this.switchData()
  },
  mounted() {
    this.drawPie()
    this.drawCol()
  },
  methods: {
    switchData() {
      let alg_data
      let sort_order = ['入门', '普及-', '普及/提高-', '普及+/提高', '提高+/省选-', '省选/NOI-', 'NOI/NOI+/CTSC', '暂无评定'],
          x = [], y1 = [], y2 = []
      for (let i = 0; i < jsonData.length; i++)
        if (jsonData[i].name === this.currentKey) {
          alg_data = jsonData[i]
          break
        }

      let sorted_alg = alg_data.diff_data.sort((a, b) => {
        return sort_order.indexOf(a.name) - sort_order.indexOf(b.name);
      })
      let sorted_rate = alg_data.rate_data.sort((a, b) => {
        return sort_order.indexOf(a.name) - sort_order.indexOf(b.name);
      })

      for (let i = 0; i < sorted_alg.length; i++) {
        x.push(sorted_alg[i].name)
        y1.push(sorted_alg[i].value)
        y2.push((sorted_rate[i].value * 100).toFixed(2))
      }

      this.currentData.title = '[' + this.currentKey + ']算法题目难度及通过率分布'
      this.currentData.x = x
      this.currentData.y1 = y1
      this.currentData.y2 = y2
    },

    drawPie() {
      this.chart1 = echarts.init(document.getElementById('chart1'))
      this.chart1.setOption({
        title: {
          text: '洛谷题目算法分布(Top20)',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '算法类型',
            type: 'pie',
            radius: '50%',
            itemStyle: {
              borderRadius: 8,
              borderWidth: 2
            },
            data: jsonData,
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
      this.chart1.on('click', (params) => {
        this.currentKey = params.name
        this.switchData()
        this.drawCol()
      })
    },

    drawCol() {
      const colors = ['#5470C6', '#EE6666']
      this.chart = echarts.init(document.getElementById('chart2'))
      this.chart.setOption({
        title: {
          text: this.currentData.title,
          left: 'center'
        },
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        legend: {
          data: ['题目数', '通过率'],
          orient: 'vertical',
          left: 'right'
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval: 0
            },
            data: this.currentData.x
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '题目数',
            position: 'right',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[0]
              }
            }
          },
          {
            type: 'value',
            name: '通过率',
            position: 'left',
            alignTicks: true,
            axisLine: {
              show: true,
              lineStyle: {
                color: colors[1]
              }
            },
            axisLabel: {
              formatter: '{value} %'
            }
          }
        ],
        series: [
          {
            name: '题目数',
            type: 'bar',
            yAxisIndex: 0,
            data: this.currentData.y1
          },
          {
            name: '通过率',
            type: 'line',
            yAxisIndex: 1,
            data: this.currentData.y2
          }
        ]
      })
    }
  }
}
</script>

<style scoped>
.block {
  position: relative;
  width: 90%;
  text-align: left;
  left: 5%;
  background: white;
  margin: 15px 0;
}

.input /deep/ .el-input__inner, .select /deep/ .el-input__inner,
.input /deep/ .el-textarea__inner, .date /deep/ .el-input__inner {
  color: black;
}

.header {
  padding: 0 5%;
}

.block-card /deep/ .el-card__header {
  background: #FAFAFA;
}

.charts {
  margin: 0 60px
}

.chart {
  float: left;
}

</style>
