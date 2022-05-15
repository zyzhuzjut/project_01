<template>
  <div class="count-container">
    <h3>count组件</h3>
    <p>count值: {{ count }}</p>
    <button @click="add">点击+1</button>
  </div>
</template>

<script>
export default {
  //props是自定义属性，允许使用者通过自定义属性，为当前组件指定初始值
  //props作用：提高组件复用性
  //注意：props是只读的，不要直接修改props值，会报错
  //   props: ["initCount"],
  props: {
    initCount: {
      //left使用count组件的时候，没有传递props的 initCount属性，则默认值default生效
      default: 0,
      //initCount的值类型定义为Number
      type: Number,        
      //校验
      required: false      //为true: 必须使用props属性传递，不然报错
    },
  },
  data() {
    return {
      count: this.initCount,
    };
  },
  methods: {
    add() {
      this.count += 1;
    },
  },
};
</script>

<style lang = 'less' scoped>
.count-container {
  padding: 20px;
  min-width: 50px;
  background-color: rgb(94, 165, 235);
  flex: 1;
}
</style>