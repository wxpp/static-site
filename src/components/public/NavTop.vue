<!--
 * @Author: your name
 * @Date: 2021-11-05 14:35:13
 * @LastEditTime: 2021-11-05 17:55:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \qdreamer-official-website\src\components\public\NavTop.vue
-->
<template>
  <div class="header">
    <div class="content">
      <span></span>
      <div class="content-nav">
        <div>核心技术</div>
        <div>行业方案</div>
        <div>关于我们</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.5);
  .content {
    width: $content-width;
    margin: 0 auto;
    height: 70px;
    .content-nav {
      height: 70px;
      line-height: 70px;
      display: flex;
      float: right;
      justify-content: space-around;

      color: #fff;
      width: calc(100% - 100px);
      div {
        font-size: 17px;

        white-space: nowrap;
      }
    }
  }
}
</style>