<template>
  <div class="app-container">
    <h1>App组件</h1>
    <hr />

    <!-- 渲染子组件left和right -->
    <div class="box">
      <left></left>
      <right></right>
    </div>
  </div>
</template>

<script>
import left from "@/components/left.vue";
import right from "@/components/right.vue"
export default {
  // 在components里注册的是私有子组件，全局子组件注册见count组件
  components: {
    left, right
  },
};
</script>

<style lang='less'>
.app-container {
  padding: 1px 20px 20px;
  background-color: pink;
}
.box {
  display: flex;
}
</style>
