import React from 'react';
import {Modal,Button} from 'antd';
const ButtonGroup = Button.Group;
class ModalWrap extends React.Component{
  state = {
    visible:false
  }
  modalFooter = ()=>{
    return(
      <ButtonGroup>
        <Button type="primary">确认</Button>
        <Button type="danger">取消</Button>
      </ButtonGroup>
    )
  }
  closeModal = ()=>{
    this.setState({
      visible:false
    })
  }
  openModal(){
    this.setState({
      visible:true
    })
  }
  render(){
    return(
      <div>
        <Modal 
          visible={this.state.visible}
          footer={this.modalFooter()}
        ></Modal>
      </div>
    )
  }
}

export default ModalWrap