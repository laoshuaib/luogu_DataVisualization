<template>
  <div class="wrapper">
    <my-header class="header"></my-header>
    <div class="home-body">
      <my-menu class="menu"></my-menu>
      <div class="content">
              <transition name="move" mode="out-in">
                <keep-alive :include="list">
                  <router-view></router-view>
                </keep-alive>
              </transition>
      </div>
    </div>
  </div>
</template>

<script>
import myHeader from './Header.vue';
import myMenu from './Menu.vue';
import bus from "@/components/common/bus";

export default {
  data() {
    return {
      list: [],
      collapse: false
    }
  },
  created() {
    bus.$on('collapse-content', msg => {
      this.collapse = msg;
    })
  },
  components: {
    myHeader,
    myMenu
  }
}
</script>

<style scoped>

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background: #F5F5F5;
  overflow: hidden;
}


.content {
  height: 100%;
  flex: 1;
  overflow: auto;
}
.home-body{
  height: calc(100vh - 65px);
  display: flex;
  width: 100%;
}
</style>