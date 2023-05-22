import React, { useState } from 'react'
import ParentOne from './ParentOne';
import ChildOne from './ChildOne';

const GrandParent = () => {
    const [newcount , setCount] = useState(0);
  return (
    <div>GrandParent
        <button onClick={()=>{setCount(newcount => {newcount + 1})}}>GrandParentCount {newcount}</button>

        <ParentOne newcount={newcount}>
            <ChildOne></ChildOne>
        </ParentOne>
    </div>

  )
}


export default GrandParent