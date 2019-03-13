// 路由相关的内容
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
// 引入路由组件
import Xcart from '../components/Xcart.vue';
import Xhome from '../components/Xhome.vue';
import Xmine from '../components/Xmine.vue';
const router=new VueRouter({
    routes:[
        {
            // 首页路由重定向
            path:'/',
            redirect:{name:'Home'}
        },
        {
            name:'Home',
            path:'/home',
            component:Xhome,
        },
        {
            name:'Cart',
            path:'/cart',
            component:Xcart,
        },
        {
            name:'Mine',
            path:'/mine/:id',
            component:Xmine,
            // 局部路由守卫相关的内容
            beforeEnter(to,from,next){
                console.log(to.params);
                let id=isNaN(to.params.id);
                if(!id){
                    next()
                }else{
                    console.log(router);
                    router.push({name:'Home'})
                }
            }
        },
    ]
})
export default router;