<template>
  <div>
    <el-button type="my-btn" @click="change" style="float: right">切换图表</el-button>
    <div id="Chart" style="height: 688px; width: 1024px; margin: auto"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Question7Chart",
  data() {
    return {
      Chart:null,
      listdata:null,
      builderJson:null,
      charts:null,
      components:null,
      max:0,
      flag:0,
    }
  },
  created() {

  },
  mounted() {
    this.max=100
    this.title="正确率(%)"
    this.charts ={
      "C++98": 27.8,
      "C++14 (GCC 9)": 35.8,
      "C": 25.0,
      "C++11": 31.8,
      "C++14": 33.6,
      "C++17": 34.4,
      "C++20": 33.3,
    }
    this.components = {
      "C++98": 35.4,
      "C++14 (GCC 9)": 38.9,
      "C": 34.1,
      "C++11": 37.1,
      "C++14": 41.7,
      "C++17": 41.5,
      "C++20": 39.1,
    }
    this.drawline()
  },
  methods: {
    change(){
      if(this.flag==0){
        this.max = 6000
        this.title = "运行时间(ms)"
        this.charts ={
          "C++98": 3779.5,
          "C++14 (GCC 9)": 3467.0,
          "C": 1280.6,
          "C++11": 3939.3,
          "C++14": 5065.9,
          "C++17": 4531.0,
          "C++20": 4489.2,
        }
        this.components = {
          "C++98": 2255.8,
          "C++14 (GCC 9)": 2093.9,
          "C": 1143.7,
          "C++11": 2541.6,
          "C++14": 3355.9,
          "C++17": 2854.3,
          "C++20": 3221.4,
        }
        this.drawline()
        this.flag=1
      }
      else{
        this.max=100
        this.title="正确率(%)"
        this.charts ={
          "C++98": 27.8,
          "C++14 (GCC 9)": 35.8,
          "C": 25.0,
          "C++11": 31.8,
          "C++14": 33.6,
          "C++17": 34.4,
          "C++20": 33.3,
        }
        this.components = {
          "C++98": 35.4,
          "C++14 (GCC 9)": 38.9,
          "C": 34.1,
          "C++11": 37.1,
          "C++14": 41.7,
          "C++17": 41.5,
          "C++20": 39.1,
        }
        this.drawline()
        this.flag=0
      }

    },
    drawline(){
      this.Chart = echarts.init(document.getElementById('Chart'))
      this.Chart.setOption({
        tooltip: {},
        title: [
          {
            text: this.title,
            left: '75%',
            textAlign: 'center'
          },
          {
            text: '不开启O2',
            subtext:'提交次数',
            left: '25%',
            textAlign: 'center'
          },
          {
            text: '开启O2',
            subtext:'提交次数',
            left: '25%',
            top: '50%',
            textAlign: 'center'
          }
        ],
        grid: [
          {
            top: 50,
            width: '50%',
            bottom: '45%',
            left: 450,
            containLabel: true
          },
          {
            top: '55%',
            width: '50%',
            bottom: 0,
            left: 450,
            containLabel: true
          }
        ],
        xAxis: [
          {
            type: 'value',
            max: this.max,
            splitLine: {
              show: false
            }
          },
          {
            type: 'value',
            max: this.max,
            gridIndex: 1,
            splitLine: {
              show: false
            }
          }
        ],
        yAxis: [
          {
            type: 'category',
            data: Object.keys(this.charts),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          },
          {
            gridIndex: 1,
            type: 'category',
            data: Object.keys(this.components),
            axisLabel: {
              interval: 0,
              rotate: 30
            },
            splitLine: {
              show: false
            }
          }
        ],
        series: [
          {
            type: 'bar',
            stack: 'chart',
            z: 3,
            label: {
              position: 'right',
              show: true,
              textStyle: { //数值样式
                color: 'black',
                fontSize: 16
              }
            },
            data: Object.keys(this.charts).map(function (key) {
              return this.charts[key];
            }.bind(this))
          },
          {
            type: 'bar',
            stack: 'chart',
            silent: true,
            itemStyle: {
              color: '#eee'
            },
            data: Object.keys(this.charts).map(function (key) {
              return this.max - this.charts[key];
            }.bind(this))
          },
          {
            type: 'bar',
            stack: 'component',
            xAxisIndex: 1,
            yAxisIndex: 1,
            z: 3,
            label: {
              position: 'right',
              show: true,
              textStyle: { //数值样式
                color: 'black',
                fontSize: 16
              }

            },
            data: Object.keys(this.components).map(function (key) {
              return this.components[key];
            }.bind(this))
          },
          {
            type: 'bar',
            stack: 'component',
            silent: true,
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: '#eee'
            },
            data: Object.keys(this.components).map(function (key) {
              return this.max - this.components[key];
            }.bind(this))
          },
          {
            type: 'pie',
            radius: [0, '30%'],
            center: ['25%', '25%'],
            data: [{
              name:"C++98",
              value:97825,
            },
              {
                name:"C++14 (GCC 9)",
                value:527597,
              },
              {
                name:"C",
                value:12420,
              },
              {
                name:"C++11",
                value:94964,
              },
              {
                name:"C++14",
                value:55393,
              },
              {
                name:"C++17",
                value:42582,
              },
              {
                name:"C++20",
                value:59627,
              },]
          },
          {
            type: 'pie',
            radius: [0, '30%'],
            center: ['25%', '75%'],
            data: [{
              name:"C++98",
              value:19620,
            },
              {
                name:"C++14 (GCC 9)",
                value:139827,
              },
              {
                name:"C",
                value:2517,
              },
              {
                name:"C++11",
                value:29061,
              },
              {
                name:"C++14",
                value:26037,
              },
              {
                name:"C++17",
                value:24738,
              },
              {
                name:"C++20",
                value:41929,
              }]


          }
        ]
      },true)
    }
  }

}
</script>

<style scoped>
</style>
