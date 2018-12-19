import React,{Suspense} from 'react';

const LazyBtn = React.lazy(() => import('./com/LazyBtn'));
const LazyDiv = React.lazy(() => import('./com/LazyDiv'));
const LazyMemo = React.lazy(() => import('./com/LazyMemo'));


class Lazy extends React.PureComponent {
  render(){
    return(
      <React.Fragment>
        <Suspense fallback={<div>Loading...</div>}>
          <LazyBtn />
          <LazyDiv />
          <LazyMemo />
        </Suspense>
      </React.Fragment>
    )
  }
}

export default Lazy;