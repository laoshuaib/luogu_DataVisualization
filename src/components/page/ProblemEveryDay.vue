<template>
  <div>
    <div class="block">
      <el-card class="block-card">
        <div slot="header" class="header">
          <span style="font-weight: bold">每日热题（2023.3.31-2023.4.6）</span>
        </div>
        <div class="charts">
          <Question5Chart></Question5Chart>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Question5Chart from "@/components/charts/Question5Chart.vue"
export default {
  name: 'ProblemEveryDay',
  components: {
    Question5Chart
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
