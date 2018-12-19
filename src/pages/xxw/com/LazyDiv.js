import React from 'react';

const LazyDiv = (props)=>{
  return(
    <React.Fragment>
      LazyDiv
      <div>{props.name}</div>
    </React.Fragment>
  )
}
export default LazyDiv