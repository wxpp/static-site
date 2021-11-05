<!--
 * @Author: your name
 * @Date: 2021-11-04 15:16:48
 * @LastEditTime: 2021-11-05 17:32:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\Layout.vue
-->
<template>
  <el-container>
    <el-header>
      <nav-top></nav-top>
    </el-header>
    <el-main>
      <transition name="el-fade-in-linear" mode="out-in">
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>
<script>
import Footer from "./Footer.vue";
import NavTop from "./NavTop.vue";
export default {
  components: {
    Footer,
    NavTop,
  },
};
</script>
<style scoped>
</style>