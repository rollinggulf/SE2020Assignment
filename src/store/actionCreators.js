// 创建动作，并发送动作，引入动作的类型
import type from './type'
import store from './index'//引入store，为了使用store中的dispatch方法来发送动作

console.log(store)
const actionCreators={
    delete( key ){//此处的val来自于组件调用该方法时，传递过来的参数
        let action={//定义动作
            type:type.DELETE,
            payload:key
        }
        store.dispatch(action)//发送动作
    },
    initialize ( data ){//
        let action={//定义动作
            type:type.INITIALIZE,
            payload:data
        }
        store.dispatch(action)//发送动作
    },
    modify(data){
        let action={
            type:type.MODIFY,
            payload:data
        }
        store.dispatch(action)//发送动作
    }
}

export default actionCreators
