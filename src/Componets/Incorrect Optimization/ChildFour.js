import React from 'react'

export const ChildFour = ({name}) => {

const date = new Date();
console.log('Childfour Rerender!!');

  return (
    <div>
        Hello {name} , current time is {date.getHours()} : {date.getMinutes()} : {date.getSeconds()}
    </div>
  )
}

export const MemorizedChildFour = React.memo(ChildFour);