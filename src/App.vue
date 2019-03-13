<template>
  <div id="app">
    <!-- 路由相关的内容 -->
    <ul>
      <!-- <li><router-link :to='{name:"Home"}'>Home</router-link></li>
      <li><router-link :to='{name:"Cart"}'>Cart</router-link></li>
      <li><router-link :to='{name:"Mine"}'>Mine</router-link></li> -->
      <li><router-link :to='{path:"/home"}'>Home</router-link></li>
      <li><router-link :to='{path:"/cart"}'>Cart</router-link></li>
      <li><router-link :to='{path:"/mine/abc"}'>Mine</router-link></li>
    </ul>
    <Xheader :goodlist="'你是猪吗'"></Xheader>
    <!-- 记住引号里面传输的是变量或则是数字，如果需要传字符串的话，需要用到''或则`` -->
    <!-- 将父组件的函数传递给子组件，在子组件中执行 -->
    <Xchild :childbanner="childBanner" @upup="change"></Xchild>
    <div @click="change('年后')">{{msg}}</div>
    <!-- 利用$emit和监听，可以让子组件改变父组件中的数据 -->
    <!-- 另一个就是利用观察订阅者模式，可以实现组件通信，emit触发，on定义相关的方法 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Xheader from './components/Xheader.vue';
import Xchild from './components/Xchild.vue';
export default {
  data() {
    return {
      num:"你是猪吗",
      childBanner:"你真的好好哦",
      msg:'年后'
    }
  },
  components: {
    // 这里用来承接渲染的组件的内容
    Xheader,
    Xchild
  },
  methods:{
    change(m){
      this.msg=m;
    }
  }
}
</script>

<style>
</style>
