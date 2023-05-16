<template>
  <div>
    <div class="block">
      <el-card class="block-card">
        <div slot="header" class="header">
          <span style="font-weight: bold">运行数据与难度的联系</span>
        </div>
        <div class="charts">
          <Question3Chart></Question3Chart>
        </div>
      </el-card>
    </div>
    <div class="block">
      <el-card class="block-card">
        <div slot="header" class="header">
          <span style="font-weight: bold">运行数据与语言的联系</span>
        </div>
        <div class="charts">
          <Question6Chart></Question6Chart>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Question3Chart from "@/components/charts/Question3Chart.vue"
import Question6Chart from "@/components/charts/Question6Chart.vue";
export default {
  name: 'RunDataPage',
  components: {
    Question3Chart,
    Question6Chart
  }
}
</script>

<style scoped>
.block {
  position: relative;
  width: 70%;
  text-align: left;
  left: 15%;
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

</style>
