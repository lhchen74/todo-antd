import {createStore , applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import todoSaga from './saga';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
// store 在整个应用中是唯一的
// 只有 store 能更新自己的内容（reducer只是返回更改后的内容）
// const store = createStore(reducer , applyMiddleware(thunk)); 
const store = createStore(reducer , applyMiddleware(sagaMiddleware)); 

sagaMiddleware.run(todoSaga);

export default store;