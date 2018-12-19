import React,{Suspense,lazy} from 'react';
import { HashRouter as Router,Switch, Route, Redirect } from "react-router-dom";

const XxwRoutes = lazy(()=>import('./pages/xxw.routes'))
const LazyError = lazy(()=>import('./pages/xxw/LazyError'))
class AppRoutes extends React.Component {

  render(){
    return(
      <Router>
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route path="/" component={props=><LazyError {...props} />} />
              {/* <Route path="/xxw" component={XxwRoutes} />  */}
              {/* 默认路由 */}
              {/* <Redirect from="/" to="/xxw" /> */}
            </Suspense>
          </Switch>
        </Router>
    )
  }
}

export default AppRoutes;