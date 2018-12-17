/**
 * @description react 组件生命周期 >v16.6 版本
 */

import React from 'react';

import EmailInput from './com/EmailInput';

import InitState from './com/InitState'

const UserList = [
  {
    email:'xxx@123.com'
  },
  {
    email:'xxw@189.com'
  }
]

class ComLifecycle extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'1232',
      nameKey:Date.now(),
      user:{
        email:'xxx@123.com',
        id:123
      }
    }
  }
  handlerBtnClick = (e)=>{
    e.stopPropagation();
    // e.cancelBubble = true;
    console.log(e.bubbles);
    console.log(e.target.dataset);
    console.log(e.currentTarget);
    this.setState({
      t:!this.state.t,
      user:{
        email:'xxx@1232.com',
        id:1234
      }
    })
  }
  divClick = (e)=>{
    console.log('divClick')
  }
  renderEmailInput = ()=>{
    if(this.state.t){
      return (
        <EmailInput defaultEmail={this.state.user.email} key={this.state.user.id}/>
      )
    }else{
      return (
        <div>hhhh</div>
      )
    }
    
  }
  changeName = ()=>{
    this.setState({
      name:'hello',
      nameKey:Date.now()
    })
  }
  // static getDerivedStateFromProps(props, state){
  //   console.log(props)
  //   console.log(state)
  //   return {
  //     name:'12312'
  //   }
  // }
  // componentDidMount(){
  //   this.setState({
  //     name:'132'
  //   })
  // }
  render(){
    return(
      <div onClick={this.divClick}>
        <button data-userlist={JSON.stringify(UserList)} onClick={this.handlerBtnClick}>change user</button>
        {
          this.renderEmailInput()
        }
        <div>
          <h4>练习如何使用默认值</h4>
          <button onClick={this.changeName}>change name</button>
          <InitState defaultName={this.state.name} key={this.state.nameKey}/>
        </div>
      </div>
    )
  }
}


 
export default ComLifecycle;