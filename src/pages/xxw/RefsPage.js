import React from 'react';
import ModalWrap from './com/ModalWrap';
class RefsPage extends React.Component {
  constructor(props){
    super(props);
    this.modalRef = React.createRef();
    this.btnRef = React.createRef();
  }
  showModal = ()=>{
    console.log(this.modalRef)
    this.modalRef.current.openModal();
  }
  state = {
    
  }
  // modalRef=
  componentDidMount(){
    console.log(this.modalRef.current)
    console.log(this.modalRef2)
    console.log(this.btnRef)
  }
  render(){
    return(
      <div>
        <h4>refs 使用实践</h4>
        <button onClick={this.showModal} ref={this.btnRef}>显示modal</button>
        <ModalWrap ref={this.modalRef}/>
        <ModalWrap ref={ref=>this.modalRef2=ref}/>
      </div>
    )
  }
}

export default RefsPage;