import React, { useState } from 'react'

import ChildOne from './ChildOne';

const ParentOne = ({children}) => {

const[count,setCount] = useState(0);
console.log('ParentOne Rerender!!');

  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>Increment {count}</button>
        {children}
       
    </div>



  )
}

export default ParentOne


