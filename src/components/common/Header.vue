<template>
  <div class="header">
    <div class="switch-button" @click="changeSwitch">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="title">洛谷数据</div>
  </div>
</template>

<script>
import "@/assets/css/MyCompoentsStyle.css"
import bus from '../common/bus';
import router from "@/router";

export default {
  data() {
    return {
      collapse: true,
      username: ''
    }
  },
  created() {
    this.username = JSON.parse(sessionStorage.getItem('user')).nickName + '\xa0\xa0\xa0\xa0' + JSON.parse(sessionStorage.getItem('user')).email
  },
  methods: {
    changeSwitch() {
      this.collapse = !this.collapse;
      bus.$emit('collapse', this.collapse);
    },
    handleCommand(command) {
      if (command === 'user')
        router.push('/user/user_center')
      if (command === 'logout') {
        router.push('/user/login')
        sessionStorage.setItem("user", "")
      }

    },
  }
}
</script>

<style scoped>
.header {
  position: relative;
  top: 0;
  right: 0;
  width: 100%;
  height: 65px;
  background-color: white;
}

.switch-button {
  float: left;
  padding: 15px 7px;
  cursor: pointer;
  line-height: 35px;
  color: white;
  background-color: #208684;
  width: 50px;
  font-size: 25px;
}

.title {
  float: left;
  font-size: 22px;
  font-weight: bold;
  position: relative;
  color: white;
  background-color: #319795;
  padding: 15px 25px;
  line-height: 35px;
}

.user-button {
  position: relative;
  float: right;
  right: 12.5%;
  padding: 15px 10px;
  line-height: 30px;
}

</style>
