/*
 * @Author: your name
 * @Date: 2021-11-02 15:45:52
 * @LastEditTime: 2021-11-03 15:49:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from "element-ui"
// 将ES6代码转为ES5代码，我们可以直接用用ES6编写，而不用考虑环境支持的问题

import 'babel-polyfill'

// element-ui引入默认主题
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
