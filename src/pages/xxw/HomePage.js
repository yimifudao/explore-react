import React from 'react';

import {Button} from 'antd';
class HomePage extends React.Component {

  render(){
    return(
      <div className="homepage">
        <Button type="primary" block>Primary</Button>
        <Button block>Default</Button>
        <Button type="dashed" block>Dashed</Button>
        <Button type="danger" block>danger</Button>
      </div>
    )
  }
}

export default HomePage;