<template>
  <div class="left-container">
    <h1>left</h1>
    <hr />

    <MyCount></MyCount>
  </div>
</template>

<script>

export default {

};
</script>

<style lang='less' scoped>
.left-container {
  padding: 0 20px 20px;
  min-width: 250px;
  background-color: rgb(112, 216, 112);
  flex: 1;
}
/deep/ h3 {
  color: blue;
}
</style>

