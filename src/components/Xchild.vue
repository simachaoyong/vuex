<template>
    <div>
        这个内容我好像知道怎么做
        {{childbanner}}
        <p @click="up()" ref="abc">点我试试罗</p>
    </div>
</template>
<script>
// 利用props可以实现父子之间的通信
export default {
    props:{
        childbanner:{
            type:String,
        }
    },
    methods: {
        up(){//触发，利用的是观察订阅者模式，点击的话会触发相应的父组件上的值的改变
            this.$emit("upup",'header');
        }
    },
    mounted() {
        // mounted是可以拿到节点的
        console.log(this.$refs.abc);
    },
}
</script>