import Vue from 'vue'
import App from './App.vue'
import router from './routers'
Vue.config.productionTip = false
// 利用vuex实现组件的状态管理
// vuex（store状态管理）的核心概念如下：
// 1、state——状态，获取的话都是获取state上面的东西内容，理解为组件中的data
// 2、getters——理解为组件里面的computed，放一些复杂的逻辑，改变简单的内容，进一步处理state中的数据
// 3、mutations——理解为组件中的methods，放对应的方法，专门用来修改state中的内容数据，在mutations中的方法是同步的，记住只能是mutations才能修改state中的内容
// 4、actions——操作mutations，专门负责做异步操作
// 小结：
//  state和getters都是用来获取数据，mutations是往里加入相关的方法的，类似于methods
// 使用方法：
// 1、安装vuex，
// 2、创建一个仓库store，
// vuex的使用，引入vuex
// import Vuex from 'vuex';
// // 创建数据池store(仓库)
// Vue.use(Vuex);
// const store=new Vuex.Store({
//   state:{
//     carlist:[{
//       id:1,
//       title:'小米手机',
//       color:'土豪金',
//       qty:1,
//       price:'1899',
//       kuncun:35
//       },{
//         id:2,
//       title:'华为mate9',
//       color:'骚粉',
//       qty:1,
//       price:'2399',
//       kuncun:67
//       }],
//   },
//   getters:{
//     // 下面的state，就表示上面的state数据，对象的结构，结构对象在一般的vuex开发中比较常见
//     // 这里设置改变后的值
//     salelist(state){
//       return state.carlist.map((item)=>{
//         // 将价格改变了一般
//         return {...item,price:item.price*0.5};
//       })
//     }
//   },
//   mutations:{
//     // mutations是放同步的
//     //会传两个值给下面的函数，state，payload
//     // 1、state——指的是上面的数据，
//     // 2、payload：调用changeQty时传入的参数（可以是任意类型，建议使用对象的方式，这样的话，就能做到一一对应的关系了，不至于走弯路）,payload最好采用对象的方式，这样便于识别
//     changeQty(state,payload){
//       console.log(payload);
//       state.carlist.forEach((item)=>{
//         if(item.id==payload.id){
//           item.qty=payload.qty;
//         }
//       })
//     },
//     // 修改库存的相关的函数，这个得请求数据库，是一个异步的内容
//     changeKuncun(state,payload){
//       state.carlist.forEach((item)=>{
//         if(item.id==payload.id){
//           item.kuncun=payload.kuncun;
//         }
//       });
//     }
//   },
//   actions:{
//     // 负责操作mutations，专门用来操作异步的内容，如果mutations中有异步的内容，那么需要放在actions中
//     // 记住mutations中是不能放异步操作的，所有的异步都必须放在actions中执行
//     changeKc(context,payload){
//       setTimeout(()=>{
//         let kuncun=parseInt(Math.random()*100);
//         // context用来触动上面的mutations触发，
//         context.commit('changeKuncun',{...payload,kuncun});
//       },500);
//     }
//   }
// });
import store from './stores'
new Vue({
  el:"#app",
  router,
  // 数据池挂载在这里，便于后面能调用的到
  store,
  render: h => h(App),
})
