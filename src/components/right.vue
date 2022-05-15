<template>
  <div class="right-container">
    <h1>right组件</h1>
    <hr />
<!--   :initCount = "8" 输出为数字，因为v-bind里写的是js语句 -->
    <MyCount :initCount = "8"></MyCount>
  </div>
</template>

<script>

export default {

};
</script>

<style lang = 'less' scoped>
.right-container {
  padding: 0 20px 20px;
  min-width: 250px;
  background-color: orange;
  flex: 1;
}
h1 {
  color: red
}
/* 使用deep修改子组件中的样式 */
/deep/ h3 {
  color: rgb(226, 10, 143);
}
</style>