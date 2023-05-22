import React from 'react'

export const ChildTwo = () => {
    console.log('ChildTwo Rerender!!!');
  return (
    <div>

    </div>
  )
}


export const MemorizedChild = React.memo(ChildTwo);