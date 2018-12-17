import React from 'react';
/**
 * @description 控制器模式，介绍
 * 
 * 1. 最外层的父组件，不做任何UI的事情，只是负责数据的处理
 * 2. 子组件的全部的默认状态和初始状态都通过 props传递
 * 3. 子组件中操作数据状态的行为也都暴露在父组件(controller 组件)中
 * 
 * 这种模式，有点类似 现在中心化 的方式
 * 
 * 缺点：
 * 如果props 传递的太深，就不容易追踪，
 * 
 * 好处：
 * 组件相对来说比较单纯，可以移植性比较好
 * 适合封装纯的UI/UE 组件
 * 
 */

 import ModalSample from './component/ModalSample';

class Controller extends React.Component {
  state = {
    mask:false
  }
  showModal = ()=>{
    this.setState({
      visible:true
    })
  }
  hiddenModal = ()=>{
    this.setState({
      visible:false
    })
  }
  render(){
    return(
      <div className="controller">
        <h4>controller pattern</h4>
        <ModalSample
          visible={this.state.visible}
          mask={this.state.mask}
          showModal={this.showModal}
          hiddenModal={this.hiddenModal}
        />
      </div>
    )
  }
}

export default Controller;