import React from 'react';
import { Link } from 'react-router-dom'

class HomePage extends React.Component {

  render(){
    return(
      <div className="homepage">
      <ul>
        <h4>react开发模式，controller VS uncontroller</h4>
        <li>
          <Link to="/xxw/controller">1.controller</Link>
        </li>
        <li>
          <Link to="/xxw/uncontroller">2.uncontroller</Link>
        </li>
        <li>
          <Link to="/xxw/refs">3.refs</Link>
        </li>
        <li>
          <Link to="/xxw/comb">4.组件创建</Link>
        </li>
      </ul>
      </div>
    )
  }
}

export default HomePage;