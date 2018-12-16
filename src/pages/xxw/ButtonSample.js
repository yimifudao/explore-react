// 练习如何使用 antd 中的banner组件，

import React from 'react';
import {Button} from 'antd';
/**
 * @description 
 * antd 中的 button 组件，默认支持的属性如下：
 * 1. 设置按钮是否可以点击，可以通过 disable 属性来控制
 * 2. 注意按钮点击的动画效果
 * 3. loading 属性有2中设置，一种是 true/false  二种是 对象，可以设置延时时间
 * 4. 给button添加点击事件和非点击事件的时候，鼠标hover时候的表现是不一样的
 */
import ComLifecycle from './ComLifecycle';

class ButtonSample extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // loading:{
      //   delay:1
      // }
    }
  }
  btnOneClick(){
    console.log('dsd')
    this.setState({
      loading:{
        ...this.state.loading,
        delay:3000
      }
    })
  }
  render(){
    return(
      <div className="button-viewport">
        <Button disabled onClick={()=>this.btnOneClick()}>hello</Button>
        <Button block shape="circle" type="primary" onClick={()=>this.btnOneClick()}>hello</Button>
        <Button 
          htmlType='button'
          onClick={()=>this.btnOneClick()}>hello</Button>
        
        <p>loading 按钮</p>
        <Button loading={this.state.loading} type="danger">加载中...</Button>
        <ComLifecycle />
      </div>
    )
  }
}

export default ButtonSample;