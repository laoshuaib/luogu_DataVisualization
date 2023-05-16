<template>
  <div class="charts">
    <div id="RadarChart1" style="height: 600px; width: 900px;margin: auto"></div>
  </div>
</template>

<script>

import * as echarts from "echarts";


export default {
  name: "Question3Chart",

  data() {
    return {
      RadarChart: null,
      listdata: null
    }
  },
  created() {

  },
  mounted() {
    this.listdata = [
      {
        value: [299	,42.05	,2452.42053	,322.4382448	,479.056138],
        name: '入门'
      },
      {
        value: [658	,36.93	,5753.02971	,681.6128307	,700.5747838
        ],
        name: '普及-'
      },
      {
        value: [926	,33.44	,11215.8967	,1190.577463	,976.6194016
        ],
        name: '普及/提高-'
      },
      {
        value: [895	,30.19	,18048.87396	,1416.78466	,1210.546192
        ],
        name: '普及+/提高'
      },
      {
        value: [1573	,31.05	,26489.2329	,3010.065391	,1545.825647
        ],
        name: '提高+/省选-'
      },
      {
        value: [2107	,30.38	,41824.93738	,3629.771025	,2456.97068
        ],
        name: '省选/NOI-'
      },
      {
        value: [889	,26.83	,63873.16764	,8149.254193	,4919.074048
        ],
        name: 'NOI/NOI+/CTSC'
      },
    ]
    this.drawLine()
  },
  methods: {
    drawLine() {
      this.RadarChart = echarts.init(document.getElementById('RadarChart1'))
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
          data: ['入门', '普及-','普及/提高-', '普及+/提高',  '提高+/省选-', '省选/NOI-', 'NOI/NOI+/CTSC']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '题目数量', max: 2200 },
            { name: '平均正确率', max: 45 },
            { name: '平均内存使用/kB', max: 68000 },
            { name: '平均运行时间/ms', max: 9500 },
            { name: '平均代码长度/B', max: 5500 },
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
