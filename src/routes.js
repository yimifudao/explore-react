import React from 'react';
import { HashRouter as Router,Switch, Route, Redirect } from "react-router-dom";

import XxwRoutes from './pages/xxw.routes';

class AppRoutes extends React.Component {

  render(){
    return(
      <Router>
        <Switch>
          <Route path="/xxw" component={ XxwRoutes} /> 
          {/* 默认路由 */}
          <Redirect from="/" to="/xxw" />
        </Switch>
      </Router>
    )
  }
}

export default AppRoutes;