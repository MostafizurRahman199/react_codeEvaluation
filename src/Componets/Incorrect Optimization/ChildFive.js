import React from 'react'

export const ChildFive = ({name, person}) => {
    console.log('Child Five Rerender!!');
  return (
    <div>
        Hello {name}!!
        person name : {person.fname} {person.lname}
    </div>
  )
}

export const MemorizedChildFive = React.memo(ChildFive);