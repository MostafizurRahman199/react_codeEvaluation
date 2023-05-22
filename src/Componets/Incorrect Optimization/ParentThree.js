import React, { useState } from 'react'


import memorizedChild, { MemorizedChild } from './ChildThree';
import { MemorizedChildFour } from './ChildFour';

const ParentThree = () => {

const [count,setCount] = useState(0);
const [name, setName] = useState('Mostafiz');

console.log('ParentThree Rerender!!');

  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>Increment {count}</button>
        <button onClick={()=>{setName('Shifat')}}>Change Name</button>
      
{/* <MemorizedChild name={name}>
    <strong>
        Hello
    </strong>
</MemorizedChild> */}

<MemorizedChildFour name={name}></MemorizedChildFour>
       
    </div>



  )
}

export default ParentThree


