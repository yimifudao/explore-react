import React from 'react';

import FunComb,{DemoComb} from './com/FunComb';

class CreateReactComb extends React.Component {
  state={
    persion:{
      name:'tom',
      age:18
    }
  }
  modifyPersion = ()=>{
    this.setState({
      persion:{
        name:'tom2',
        age:18
      }
    })
  }
  render(){
    return(
      <>
        <h4>练习组件创建的4种方式</h4>
        <button onClick={this.modifyPersion}>修改学生</button>
        <FunComb name="dasd"/>
        <DemoComb persion={this.state.persion}/>
      </>
    )
  }
}

export default CreateReactComb;