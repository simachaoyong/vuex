<template>
    <div class="cart">
        <ul>
            <!-- 利用v-for循环 -->
            <li v-for="goods in cart" :key="goods.id">
                <h1>{{goods.title}}</h1>
                <p>{{goods.color}}</p>
                <p>{{goods.price}}&times;{{goods.qty}}</p>
                <p>库存情况：{{goods.kuncun}}</p>
                <!-- input要比change反应快速 -->
                <input type="number" :value="goods.qty" @input="change($event,goods.id)">
                <button @click="changeKc($event,goods.id)">更新库存</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 唯一发生改变的就是这个地方，其余的地方都没有什么大的改变，
            cart:this.$store.state.cart.carlist,
        }
    },
    mounted() {
        //获取到getters的值
        // 这里赋值的时候，我把这里写死了，这样的话就无法实现绑定的效果了
        // this.cart=this.$store.getters.salelist;
        // 这里能获取到getters中的内容
        // console.log(this.$store.getters.salelist);
        console.log(this.$store.state.cart.carlist);
    },
    methods: {
        // 把值和对应的商品id传过去
        change(e,id){
            if(e.target.value>=1){
                // 这里是在组件中操作mutaitons中的函数
                this.$store.commit('changeQty',{
                    id,
                    qty:e.target.value,
                });
                // 这里是在组件中调用actions，之后actions去调用对应的mutations下面的函数
                // this.$store.dispatch('getKuncun',参数)
            } 
        },
        changeKc(e,id){
            e.preventDefault();
            this.$store.dispatch('changeKc',{
                id,
            })
        }
    },
}
</script>