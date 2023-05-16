<template>
  <div>
    <div class="charts" id="chart" style="height: 650px; width: 850px;margin: auto"></div>

    <div class="charts">
      <el-card style="height: 400px; width: 300px;margin: 125px auto">
        <template #header>
          <div class="card-header">
            <span style="font-size: 19px; font-weight: bold">说明</span>
          </div>
        </template>
        <p class="text">
          该图为旭日图，分为内外两层
        </p>
        <br/>
        <p class="text">
          内层为若干最常见的算法
        </p>
        <p class="text">
          外层为与内层算法关联最紧密的几个算法
        </p>
        <p class="text">
          内外层有较大概率在同一题目中共现
        </p>
      </el-card>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import jsonData from '@/assets/data/sunData.json'
export default {
  name: 'Question8Chart',
  data() {
    return {
      chartColumn: null,
      sunData:jsonData
    }
  },
  created() {

  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      this.chartColumn = echarts.init(document.getElementById('chart'))
      this.chartColumn.setOption({
        series: [{
          data: this.sunData,
          type: 'sunburst',
          radius: [80, '90%'],
            itemStyle: {
              borderRadius: 3,
              borderWidth: 1
            },
          label: {
              show: true
          }
        }]
      })

    }
  }
}
</script>

<style scoped>
.charts {
  float: left;
}

.text {
  font-size: 18px;
}
</style>
