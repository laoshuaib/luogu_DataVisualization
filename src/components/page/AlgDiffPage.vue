<template>
  <div>
    <div class="block">
      <el-card class="block-card">
        <div slot="header" class="header">
          <span style="font-weight: bold">算法分布及各算法难度/正确率分布</span>
        </div>
        <div class="charts">
          <Question2Chart></Question2Chart>
        </div>
      </el-card>
    </div>
    <div class="block">
      <el-card class="block-card">
        <div slot="header" class="header">
          <span style="font-weight: bold">难度分布及各难度算法分布</span>
        </div>
        <div class="charts">
          <Question4Chart></Question4Chart>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Question2Chart from "@/components/charts/Question2Chart.vue";
import Question4Chart from "@/components/charts/Question4Chart.vue";
export default {
  name: 'AlgDiffPage',
  components: {
    Question2Chart,
    Question4Chart
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
