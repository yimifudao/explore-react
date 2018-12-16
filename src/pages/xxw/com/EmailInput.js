import React from 'react';

class EmailInput extends React.Component {
  constructor(props){
    super(props)
    console.log('EmailInput constructor')
    this.state = {
      email:props.defaultEmail
    }
  }
  handleChange = (event)=>{
    this.setState({
      email:event.target.value
    })
  }

  componentWillUnmount(){
    // alert('确定')
  }

  render(){
    return(
      <input onChange={this.handleChange} value={this.state.email} />
    )
  }
}

export default EmailInput;