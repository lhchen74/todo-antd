import {GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';
// import axios from 'axios';

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})


export const getAddItemAction = () => ({
    type: ADD_TODO_ITEM
})


export const getDeleteItemAction = (index) => ({
    type: DELETE_TODO_ITEM,
    index
})

export const initListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
})

/**
 * 1. redux-thunk 使 store.dipatch 除了可以接收对象外还可以接收函数
 * 如果 store.dipatch(func), func 会执行并接收 store.dispatch 作为参数
 * 2. 将异步请求从生命周期函数中提取出来, 可以防止在生命周期函数中书写复杂的业务逻辑
 * 并且方便测试
 */
// export const getTodoList = () => {
//     return (dispatch) => {
//         axios.get('./list.json').then((res) => {
//             const data = res.data;
//             const action = initListAction(data);
//             dispatch(action);
//         })
//     }
// }


export const getInitList = () => ({
    type: GET_INIT_LIST
});