import Vue from 'vue'
import App from './App.vue'

//全局组件注册：导入需要组件，使用Vue.componet()函数
import count from "@/components/count.vue"
//参数1：字符串格式---组件注册名称(最好大写)
//参数2：需要全局的组件
Vue.component('MyCount', count)


Vue.config.productionTip = false

new Vue({
  //把render函数指定的组件，渲染到HTML页面中
  render: h => h(App),
}).$mount('#app')
