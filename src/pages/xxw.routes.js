import React from 'react';
import { Switch, Route,Redirect} from "react-router-dom";

/**
 * 页面导入
 */
import HomePages from './xxw/HomePage';
import ButtonSample from './xxw/ButtonSample';
import RefsPage from './xxw/RefsPage';
import CreateReactComb from './xxw/CreateReactComb';
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
        <Route path="/xxw/refs" component={RefsPage} /> 
        <Route path="/xxw/comb" component={CreateReactComb} /> 
        <Redirect from="/xxw" to="/xxw/home" />
      </Switch>
    )
  }
}

export default XxwRoutes;