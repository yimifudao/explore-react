import React,{Suspense,lazy} from 'react';
import { Switch, Route,Redirect} from "react-router-dom";

/**
 * 页面导入
 */
const HomePages = lazy(()=>import('./xxw/HomePage'))
const ButtonSample = lazy(()=>import('./xxw/ButtonSample'))
const RefsPage = lazy(()=>import('./xxw/RefsPage'))
const CreateReactComb = lazy(()=>import('./xxw/CreateReactComb'))
const Lazy = lazy(()=>import('./xxw/Lazy'))
const Controller = lazy(()=>import('./xxw/pattern/Controller'))
const UnController = lazy(()=>import('./xxw/pattern/UnController'))
/**
 * 编程模式
 */
// import Controller from './xxw/pattern/Controller'
// import UnController from './xxw/pattern/UnController'
class XxwRoutes extends React.Component {

  render(){
    return(
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/xxw/home" component={HomePages} /> 
          <Route path="/xxw/button" component={ButtonSample} /> 
          <Route path="/xxw/controller" component={Controller} /> 
          <Route path="/xxw/uncontroller" component={UnController} /> 
          <Route path="/xxw/refs" component={RefsPage} /> 
          <Route path="/xxw/comb" component={CreateReactComb} /> 
          <Route path="/xxw/lazy" component={Lazy} /> 
          <Redirect from="/xxw" to="/xxw/home" />
        </Switch>
      </Suspense>
    )
  }
}

export default XxwRoutes;