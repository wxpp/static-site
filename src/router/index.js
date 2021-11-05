/*
 * @Author: your name
 * @Date: 2021-11-02 15:45:52
 * @LastEditTime: 2021-11-05 11:42:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from 'cpom/public/Layout';
Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    desc: "奇梦者官网首页",
    path: '/home',
    name: 'home',
    component: Layout,
  }
];
const router = new Router({
  mode: 'history',
  routes
});
export default router
