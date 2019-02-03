import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes';

const defaultState = {
    inputValue: '',
    list: ["learn react", "learn vue"]
}

/**
 * reducer 可以接受 state, 但不可以更改 state
 * reducer 必须是纯函数，给定固定的输入，就一定会有固定的输出（不涉及时间等相关函数），而且不会有任何副作用（不会对参数进行修改）
 */
export default (state = defaultState, action) => {
    // console.log(state, action);
    if (action.type === CHANGE_INPUT_VALUE) {
        // deep copy
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }

    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }

    return state;
}