<!--
 * @Author: your name
 * @Date: 2021-11-03 20:35:24
 * @LastEditTime: 2021-11-05 17:51:26
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
@import url("assets/style/index.scss");
@import url("assets/style/reset-element.scss");
html,
body {
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif,'Source Han Sans CN';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
