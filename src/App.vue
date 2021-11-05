<!--
 * @Author: your name
 * @Date: 2021-11-03 20:35:24
 * @LastEditTime: 2021-11-05 14:54:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\App.vue
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('normalize.css');
@import "@/assets/style/index.scss";
html,
body {
  width: 100%;
  // height: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
