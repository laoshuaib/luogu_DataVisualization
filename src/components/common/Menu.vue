<template>
  <div class="menu">
    <el-menu :collapse="collapse" router>
        <template v-for="card in cards">
          <el-menu-item :index="card.key" :key="card.key">
            <i :class="card.icon"></i>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <template #title><label style="font-size: 15px;font-weight: bold">{{ card.text }}</label></template>
          </el-menu-item>
        </template>
    </el-menu>
  </div>

</template>

<script>
import bus from "@/components/common/bus";

export default {
  data() {
    return {
      collapse: false,
      type: '',
      cards: [
        {
          icon: 'el-icon-data-line',
          key: '/algdiff',
          text: '算法与难度'
        },
        {
          icon: 'el-icon-video-play',
          key: '/rundata',
          text: '代码运行数据'
        },
        {
          icon: 'el-icon-s-data',
          key: '/day',
          text: '每日热题'
        },
        {
          icon: 'el-icon-magic-stick',
          key: '/deep',
          text: '深入探索'
        }
      ]
    }
  },
  created() {
    bus.$on('collapse', message => {
      this.collapse = message;
    });
    this.type = JSON.parse(sessionStorage.getItem("user")).type
  }
}
</script>

<style scoped>

.menu {
  height: 100%;
}

.menu:not(.el-menu--collapse) .el-menu {
  width: 201px;
}

.menu .el-menu--collapse.el-menu {
  width: 64px;
}

.menu > ul {
  height: 100%;
}

.el-menu-item {
  text-align: left;
}

.el-menu-item.is-active {
  background-color: #EBEBEB !important;
  color: black;
  font-weight: bold;
}

.el-menu-item i {
  font-size: 25px;
}

</style>
