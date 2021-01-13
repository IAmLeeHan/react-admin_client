/* 
    入口js    
*/
import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

// 将App组件标签渲染到index页面的root-div上
ReactDom.render(<App />,document.getElementById('root'))