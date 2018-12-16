import React from 'react';
import { Link } from 'react-router-dom'

import {Button} from 'antd';
class HomePage extends React.Component {

  render(){
    return(
      <div className="homepage">
        <Link to="/xxw/button"> button 组件</Link>
      </div>
    )
  }
}

export default HomePage;