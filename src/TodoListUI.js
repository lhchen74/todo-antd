import React from 'react';
import { Input, Button, List} from 'antd';
import 'antd/dist/antd.css';

/**
 * 当一个组件只有 render() 函数时，可以定义为 `无状态组件`
 * UI 组件一般都可以定义为 `无状态组件`
 * @param {*} props 
 */
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: 10, marginLeft: 10}}>
            <div>
                <Input 
                    value={props.inputValue} 
                    placeholder="Todo Info" 
                    style={{width: 300, marginRight: 6}}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
            </div>
            <List
            style={{width: 300, marginTop: 10}}
            bordered
            dataSource={props.list}
            renderItem={(item, index) => (<List.Item onClick={ (index) => props.handleItemDelete(index)}>{item}</List.Item>)}
            />
        </div>
    )
}

// class TodoListUI extends Component {
//    render() {
//        return (
//         <div style={{marginTop: 10, marginLeft: 10}}>
//             <div>
//                 <Input 
//                     value={this.props.inputValue} 
//                     placeholder="Todo Info" 
//                     style={{width: 300, marginRight: 6}}
//                     onChange={this.props.handleInputChange}
//                 />
//                 <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
//             </div>
//             <List
//             style={{width: 300, marginTop: 10}}
//             bordered
//             dataSource={this.props.list}
//             renderItem={(item, index) => (<List.Item onClick={ (index) => this.props.handleItemDelete(index)}>{item}</List.Item>)}
//             />
//         </div>
//        )
//    }
// }

export default TodoListUI;