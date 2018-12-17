import React from 'react';
import {Button} from 'antd';
class InitState extends React.Component {
  state = {
    name:this.props.defaultName
  }

  changeName = ()=>{
    this.setState({
      name:'被内部进行修改了'
    })
  }
  render(){
    return(
      <div>
        <h5>这是内部组件</h5>
        <Button onClick={this.changeName}> 内部组件修改那么 </Button>
        name:<span style={{color:'red'}}>{this.state.name}</span>
      </div>
    )
  }
}

export default InitState;