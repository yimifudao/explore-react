import React from 'react';

const LazyMemo = (props)=>{
  return(
    <React.Fragment>
      {props.name}
    </React.Fragment>
  )
}

const propsDiff = (prevProps, nextProps)=>{
  return prevProps.name === nextProps.name
}

export default React.memo(LazyMemo,propsDiff)