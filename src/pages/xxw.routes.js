import React from 'react';
import { Switch, Route,Redirect} from "react-router-dom";

/**
 * 页面导入
 */
import HomePages from './xxw/HomePage';
import ButtonSample from './xxw/ButtonSample';

/**
 * 编程模式
 */
import Controller from './xxw/pattern/Controller'
import UnController from './xxw/pattern/UnController'
class XxwRoutes extends React.Component {

  render(){
    return(
      <Switch>
        <Route path="/xxw/home" component={HomePages} /> 
        <Route path="/xxw/button" component={ButtonSample} /> 
        <Route path="/xxw/controller" component={Controller} /> 
        <Route path="/xxw/uncontroller" component={UnController} /> 
        <Redirect from="/xxw" to="/xxw/home" />
      </Switch>
    )
  }
}

export default XxwRoutes;