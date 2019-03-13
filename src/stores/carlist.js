export default {
    state: {
        carlist: [{
            id: 1,
            title: '小米手机',
            color: '土豪金',
            qty: 1,
            price: '1899',
            kuncun: 35
        }, {
            id: 2,
            title: '华为mate9',
            color: '骚粉',
            qty: 1,
            price: '2399',
            kuncun: 67
        }],
    },
    getters: {
        // 下面的state，就表示上面的state数据，对象的结构，结构对象在一般的vuex开发中比较常见
        // 这里设置改变后的值
        salelist(state) {
            return state.carlist.map((item) => {
                // 将价格改变了一般
                return { ...item, price: item.price * 0.5 };
            })
        }
    },
    mutations: {
        // mutations是放同步的
        //会传两个值给下面的函数，state，payload
        // 1、state——指的是上面的数据，
        // 2、payload：调用changeQty时传入的参数（可以是任意类型，建议使用对象的方式，这样的话，就能做到一一对应的关系了，不至于走弯路）,payload最好采用对象的方式，这样便于识别
        changeQty(state, payload) {
            console.log(payload);
            state.carlist.forEach((item) => {
                if (item.id == payload.id) {
                    item.qty = payload.qty;
                }
            })
        },
        // 修改库存的相关的函数，这个得请求数据库，是一个异步的内容
        changeKuncun(state, payload) {
            state.carlist.forEach((item) => {
                if (item.id == payload.id) {
                    item.kuncun = payload.kuncun;
                }
            });
        }
    },
    actions: {
        // 负责操作mutations，专门用来操作异步的内容，如果mutations中有异步的内容，那么需要放在actions中
        // 记住mutations中是不能放异步操作的，所有的异步都必须放在actions中执行
        changeKc(context, payload) {
            setTimeout(() => {
                let kuncun = parseInt(Math.random() * 100);
                // context用来触动上面的mutations触发，
                context.commit('changeKuncun', { ...payload, kuncun });
            }, 500);
        }
    }
}