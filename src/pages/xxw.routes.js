import React from 'react';
import { Switch, Route,Redirect} from "react-router-dom";

/**
 * 页面导入
 */
import HomePages from './xxw/HomePage';
import ButtonSample from './xxw/ButtonSample';

class XxwRoutes extends React.Component {

  render(){
    return(
      <Switch>
        <Route path="/xxw/home" component={HomePages} /> 
        <Route path="/xxw/button" component={ButtonSample} /> 
        <Redirect from="/xxw" to="/xxw/home" />
      </Switch>
    )
  }
}

export default XxwRoutes;