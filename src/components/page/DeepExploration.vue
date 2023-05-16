<template>
  <div>
    <div class="block">
      <el-card class="block-card">
        <div slot="header" class="header">
          <span style="font-weight: bold">O2优化实际效果</span>
        </div>
        <div class="charts">
          <Question7Chart></Question7Chart>
        </div>
      </el-card>
    </div>
    <div class="block">
      <el-card class="block-card">
        <div slot="header" class="header">
          <span style="font-weight: bold">算法标签关联分析</span>
        </div>
        <div class="charts">
          <Question8Chart></Question8Chart>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Question7Chart from "@/components/charts/Question7Chart.vue";
import Question8Chart from "@/components/charts/Question8Chart.vue"
export default {
  name: 'DeepExploration',
  components: {
    Question7Chart,
    Question8Chart
  }
}
</script>

<style scoped>
.block {
  position: relative;
  width: 80%;
  text-align: left;
  left: 10%;
  background: white;
  margin: 35px 0;
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
