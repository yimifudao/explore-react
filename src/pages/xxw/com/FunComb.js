import React from 'react';

export default function FunComb(props){
  return (
    <div>
    {props.name}
    </div>
  )
}

function areEqual(prevProps, nextProps){
  return true
}

export const DemoComb = React.memo(function DemoComb(props){
  return(
    <>
      {props.persion.name}
      {props.persion.age}
    </>
  )
},areEqual)

// export const Com = {
//   DemoComb
// } 