import {createStore} from 'redux'
import reducer from './reducer'

// store 在整个应用中是唯一的
// 只有 store 能更新自己的内容（reducer只是返回更改后的内容）
const store = createStore(reducer); 

export default store;