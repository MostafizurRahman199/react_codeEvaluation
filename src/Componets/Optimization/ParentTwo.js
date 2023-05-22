import React, { useState } from 'react'

import ChildOne from './ChildOne';
import memorizedChild, { MemorizedChild } from './ChildTwo';

const ParentTwo = () => {

const [count,setCount] = useState(0);
const [name, setName] = useState('Mostafiz');

console.log('ParentTwo Rerender!!');

  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>Increment {count}</button>
        <button onClick={()=>{setName('Shifat')}}>Change Name</button>
      
<MemorizedChild name={name}></MemorizedChild>
       
    </div>



  )
}

export default ParentTwo


