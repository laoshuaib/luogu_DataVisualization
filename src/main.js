import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from "@/router/index";
import 'element-ui/lib/theme-chalk/index.css';
import App from "@/App";
import "@/assets/css/MyCompoentsStyle.css"

Vue.use(ElementUI, {
  size: 'medium'
})

new Vue({
  router: VueRouter,
  el: '#app',
  render: h => h(App)
});



