import React, { Component } from 'react';
import store from './store';
// import axios from 'axios';
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction, /*initListAction, getTodoList*/}  from './store/actionCreators';
import TodoListUI from './TodoListUI'


class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    render() {
        return (
            <TodoListUI 
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleButtonClick={this.handleButtonClick}
                handleItemDelete={this.handleItemDelete}
            />
        )
    }

    componentDidMount() {
        // axios.get('./list.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     store.dispatch(action);
        // })


        // const action = getTodoList();
        // store.dispatch(action);


        const action = getInitList();
        store.dispatch(action);

    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // }
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action)
    }
    
    handleStoreChange(e){
        this.setState(store.getState());
    }

    handleButtonClick(e){
        // const action = {
        //     type: ADD_TODO_ITEM
        // }
        const action = getAddItemAction();
        store.dispatch(action);
    }

    handleItemDelete(index) {
        // const action = {
        //     type: DELETE_TODO_ITEM,
        //     index
        // }
        const action = getDeleteItemAction();
        store.dispatch(action);
    }

}

export default TodoList;