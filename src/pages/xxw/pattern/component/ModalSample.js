import React from 'react';

import {Modal,Button,Icon} from 'antd' 

const ButtonGroup = Button.Group;
class ModalSample extends React.Component {


  render(){
    let {
      title='这是默认的标题',
      width=300,
      content='这是默认的内容',
      visible=false,
      mask=false
    } = this.props;
    return (
      <div className="modal-sample">
        <ButtonGroup>
          <Button type="primary" onClick={this.props.showModal}>
            <Icon type="eye" />显示
          </Button>
          <Button type="danger" onClick={this.props.hiddenModal}>
            隐藏<Icon type="eye-invisible" />
          </Button>
        </ButtonGroup>
        <Modal 
          title={title}
          width={width}
          content={content}
          visible={visible}
          mask={mask}
        />
        <style jsx={'true'}>{`
          .modal-sample{
            width: 800px;
            margin: 0 auto;
            padding: 40px 80px;
            position: fixed;
            top: 0;
            left: 50%;
            margin-left: -400px;
            box-shadow: 0px 0px 40px rgba(0,0,0,.2);
            top: 20px;
            border-radius: 10px;
            z-index: 100000;
          }
        `}</style>
      </div>
    )
  }
}

export default ModalSample;