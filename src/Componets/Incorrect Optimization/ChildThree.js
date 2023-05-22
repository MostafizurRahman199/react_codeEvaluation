import React from 'react'

export const ChildThree = ({children, name}) => {
    console.log('ChildThree Rerender!!!');
  return (
    <div>
        {name} {children}
    </div>
  )
}


export const MemorizedChild = React.memo(ChildThree);