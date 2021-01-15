import React, { Component } from 'react';
import './login.less';
import logo from './images/logo.png';
import { Form, Input, Button,Icon } from 'antd';

// const Item = Form.Item;//不能写在import之前
// 登录的路由组件
class Login extends Component {
    handleSubmit = e => {
        
        // 阻止事件的默认行为
        e.preventDefault();
        // 得到form对象
        const form = this.props.form;
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    /* 
        对密码进行自定义验证
    */

   validatorPwd = (rule,value,callback) => {
       /* 
            用户名/密码的合法性要求：
            1). 必须输入
            2). 必须大于等于四位
            3). 必须小于等于12位
            4). 必须是英文、数字、下划线组成
        */

        if(!value){
            callback('密码必须输入')
        }else if(value.length <= 4){
            callback('密码长度不能小于4位')
        }else if(value.length >= 12){
            callback('密码不能超过12位')
        }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
            callback('密码必须是英文、数字、下划线组成')
        }else{
            callback()//验证通过
        }

        // callback('xxxx')// 验证失败 传入提示的文本
   }

    render() {
        // 得到强大功能的form对象
        const form = this.props.form;
        const { getFieldDecorator } = form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt=""/>
                    <h1>React项目：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {
                                /* 
                                    用户名的合法性要求：
                                    1). 必须输入
                                    2). 必须大于四位
                                    3). 必须小于12位
                                    4). 必须是英文、数字、下划线组成
                                */
                            }
                            {getFieldDecorator('username', {
                                // 声明式验证：直接使用别人定义好的验证规则进行验证
                                rules: [
                                    { 
                                        required: true, 
                                        whitespace:true,
                                        message: '请输入用户名'
                                    },
                                    {
                                        min:4,
                                        message: '用户名不能少于四个字符'
                                    },
                                    {
                                        max:12,
                                        message: '用户名最多12个字符'
                                    },
                                    {
                                        pattern:/^[a-zA-Z0-9_]+$/,
                                        message: '用户名必须是英文、数字、下划线组成'
                                    }
                                ],
                            })(
                                <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="用户名"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    rules: [{ 
                                        validator:this.validatorPwd
                                    }],
                                })(
                                    <Input
                                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        type="password"
                                        placeholder="密码"
                                        />
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
/**
 * 1、高阶函数
 *  1). 一类特别的函数
 *      a.接收函数类型的参数
 *      b.返回值是函数
 *  2).常见：
 *      a.定时器
 *      b.Promise: Promise(()=>{}) then(value => {}, reason => {})
 *      c.数组便利相关的方法:forEach()/filter()/map()/reduce()/find()/findIndex()
 *      d.fn.bind()
 *  3).高阶函数更加动态，更加具有扩展性
 * 
 * 2、高阶组件
 *  1).本质就是一个函数
 *  2).接收一个组件（被包装组件），返回一个新的组件（包装组件），包装组件会向被包装组件传入特定属性
 *  3).作用：扩展组件的功能
 */

/* 
    包装Form组件 生成一个新的组件：Form(Login)
    新组建会向Form组件传递一个强大的对象属性：form
*/


const WrapLogin = Form.create()(Login);
export default WrapLogin;
/**
 * 1、前台表单验证
 * 2、收集表单输入数据
*/