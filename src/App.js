import React,{Component} from 'react';
import { Button,message } from 'antd';
// import './app.css'
/* 
    应用的根组件
*/

export default class App extends Component {
    handleClick = ()=>{
        message.success('sccess')
    }
    render(){
        return <div className="App">
                    <Button type="primary" onClick={this.handleClick}>Button</Button>
                </div>
    }
}