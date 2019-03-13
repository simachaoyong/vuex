<template>
    <div class="header">
        这是一个头部组件
        <!-- <slot></slot> 这个插槽可以用来承接传过来的数据内容-->
        {{goodlist}}
        <!-- 拿到的数据直接渲染到这里就行了 -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        goodlist:{
            type:[String,Number],//类型
        }
    },
    // 父子通讯一般用props就行了，父组件将数据传给子组件，子组件通过props就能拿到父组件传过来的值了
}
</script>
<style scoped>
    .header{
        height:40px;
        display:inline-block;
        padding:0 10px;
        line-height:40px;
        font-size:16px;
        background-color:#e4393c;
        color:#fff;
        text-align:center;
        cursor: pointer;
    }
</style>
