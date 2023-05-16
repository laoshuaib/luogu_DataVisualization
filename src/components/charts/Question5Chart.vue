<template>
  <div class="charts">
    <div id="chartColumn" style="height: 600px; width: 1200px"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'Question5Chart',
  data() {
    return {
      chartColumn: null,
      optionMain: {
        tooltip: {
          trigger: 'item'
        },
        xAxis: {
          name: '日期',
          data: ['2023-03-31', '2023-04-01', '2023-04-02', '2023-04-03',
            '2023-04-04', '2023-04-05', '2023-04-06'],
          axisLabel: {
            interval: 0,
            rotate: 0  //倾斜的程度
          },
        },
        yAxis: {
          name: '总提交量'
        },
        dataGroupId: '',
        animationDurationUpdate: 500,
        series: {
          type: 'bar',
          id: 'sales',
          data: [
            {
              value: 15640,
              groupId: '2023-03-31'
            },
            {
              value: 19430,
              groupId: '2023-04-01'
            },
            {
              value: 19633,
              groupId: '2023-04-02'
            },
            {
              value: 15639,
              groupId: '2023-04-03'
            },
            {
              value: 21317,
              groupId: '2023-04-04'
            },
            {
              value: 31460,
              groupId: '2023-04-05'
            },
            {
              value: 39237,
              groupId: '2023-04-06'
            },
          ],
          universalTransition: {
            enabled: true,
            divideShape: 'clone'
          }
        }
      }
    }
  },
  created() {

  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      let drilldownData = [
        {
          dataGroupId: '2023-03-31',
          data: [['【模板】后缀自动机 (SAM)', '106'], ['【模板】后缀排序', '103'], ['【模板】行列式求值', '76'], ['斐波那契数列', '71'], ['有线电视网', '68'], ['[蓝桥杯 2020 国 C] 填空问题', '66'], ['[HAOI2015] 树上染色', '63'], ['机器分配', '61'], ['[WC/CTS2023] 比赛', '60'], ['我永远喜欢珂朵莉~', '60']]
        },
        {
          dataGroupId: '2023-04-01',
          data: [['[Ynoi2011] 初始化', '160'], ['【XR-2】缘分', '127'], ['[PA2021] Oranżada', '115'], ['【模板】点双连通分量', '94'], ['A % B Problem', '90'], ['任务安排', '88'], ['[APIO2010] 特别行动队', '84'], ['[BOI2009]Radio Transmission 无线传输', '83'], ['[NOIP2018 普及组] 对称二叉树', '83'], ['[NOIP2016 提高组] 换教室', '79']]
        },
        {
          dataGroupId: '2023-04-02',
          data: [['[ZJOI2004]嗅探器', '106'], ['松鼠吃果子', '102'], ['[春季测试 2023] 幂次', '95'], ['小凯的数字', '94'], ['[蓝桥杯 2015 国 C] 机器人繁殖', '89'], ['数列分段 Section I', '87'], ['[POI2008] STA-Station', '80'], ['[NOIP2010 普及组] 三国游戏', '78'], ['东南西北', '75'], ['【深基17.例5】木材仓库', '73']]
        },
        {
          dataGroupId: '2023-04-03',
          data: [['【模板】扩展 BSGS/exBSGS', '121'], ['[Code+#1]找爸爸', '82'], ['成绩', '77'], ['[USACO07OPEN]Catch That Cow S', '74'], ['[USACO07JAN] Tallest Cow S', '72'], ['[蓝桥杯 2022 省 A] 推导部分和', '72'], ['保龄球', '68'], ['[NOIP2000 提高组] 进制转换', '66'], ['青蛙的约会', '64'], ['[NOIP2000 普及组] 计算器的改良', '62']]
        },
        {
          dataGroupId: '2023-04-04',
          data: [['旅行商的背包', '131'], ['[NOIP2012 提高组] 疫情控制', '128'], ['[蓝桥杯 2018 国 A] 自描述序列', '127'], ['[AHOI2018初中组]根式化简', '109'], ['[SDOI2006]线性方程组', '103'], ['[NOIP2011 提高组] 计算系数', '101'], ['[蓝桥杯 2020 省 AB3] 限高杆', '88'], ['杂务', '80'], ['[USACO06JAN]The Cow Prom S', '78'], ['无线通讯网', '76']]
        },
        {
          dataGroupId: '2023-04-05',
          data: [['[AHOI2008]计算器', '162'], ['高低位交换', '137'], ['[ZJOI2007] 捉迷藏', '134'], ['[NOIP2004 提高组] 合并果子 加强版', '122'], ['刺杀大使', '119'], ['台阶问题', '117'], ['灾后重建', '115'], ['[NOIP2016 提高组] 愤怒的小鸟', '109'], ['[蓝桥杯 2016 国 C] 赢球票', '109'], ['[USACO07DEC]Charm Bracelet S', '103']]
        },
        {
          dataGroupId: '2023-04-06',
          data: [['路径计数2', '169'], ['【深基4.例11】数列求和', '162'], ['[USACO1.5]特殊的质数肋骨 Superprime Rib', '153'], ['【深基18.例3】查找文献', '148'], ['[NOIP1998 普及组] 幂次方', '139'], ['[NOIP2003 普及组] 栈', '132'], ['通天之分组背包', '132'], ['[AHOI2001]彩票摇奖', '130'], ['图的遍历', '127'], ['[NOIP1996 提高组] 挖地雷', '125']]
        }
      ]
      this.chartColumn = echarts.init(document.getElementById('chartColumn'))
      this.chartColumn.setOption(this.optionMain)
      this.chartColumn.on('click', (event) => {
        if (event.data) {
          let subData = drilldownData.find(function (data) {
            return data.dataGroupId === event.data.groupId;
          });
          if (!subData) {
            return;
          }

          this.chartColumn.setOption({
            tooltip: {
              trigger: 'item'
            },
            xAxis: {
              name: '题目名',
              data: subData.data.map(function (item) {
                return item[0];
              }),
              axisLabel: {
                interval: 0,
                rotate: -10  //倾斜的程度
              },
            },
            series: {
              type: 'bar',
              id: 'sales',
              dataGroupId: subData.dataGroupId,
              data: subData.data.map(function (item) {
                return item[1];
              }),
              universalTransition: {
                enabled: true,
                divideShape: 'clone'
              }
            },
            graphic: [
              {
                type: 'text',
                left: 5,
                top: 20,
                style: {
                  text: '返回',
                  fontSize: 18
                },
                onclick: () => {
                  this.chartColumn.setOption(this.optionMain);
                }
              }
            ]
          });
        }
      })

    },

  }
}
</script>

<style scoped>

</style>
