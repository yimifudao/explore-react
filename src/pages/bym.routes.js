import React from 'react';
import { Switch, Route,Redirect} from "react-router-dom";

/**
 * 页面导入
 */
import HomePages from './bym/HomePage';

class BymRoutes extends React.Component {

  render(){
    return(
      <Switch>
        <Redirect from="/bym" to="/bym/home" />
      </Switch>
    )
  }
}

export default BymRoutes;