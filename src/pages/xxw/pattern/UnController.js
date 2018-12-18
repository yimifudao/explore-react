import React from 'react';

class UnController extends React.Component {
  state = {

  }
  handleChange = (e)=>{
    let {type} = e.target.dataset;
    console.log(type)

    switch (key) {
      /**modify name */
      case 'name':
        this.setState({
          nameMessage:'name be changed'
        })
        break;
      /**modify age */
      case 'age':
        this.setState({
          ageMessage:'age be changed'
        })
        break;
      /** submit */
      case 'submit':
        this.setState({
          submitMessage:'submit'
        })
        break;
    
      default:
        break;
    }

  }
  handleChangeA(){
    console.log('sdsd')
  }
  render(){
    return(
      <div className="uncontroller">
        <h4>uncontroller pattern</h4>

        <button onClick={this.handleChange} data-type="name">修改名称</button>
        <button onClick={this.handleChange} data-type="age">修改年龄</button>
        <button onClick={this.handleChange} data-type="submit">提交</button>
        <button onClick={this.handleChangeA.bind(this,{})} data-type="submit">提交2</button>
      </div>
    )
  }
}

export default UnController;