import React, { useCallback, useMemo, useState } from 'react'


import memorizedChild, { MemorizedChild } from './ChildThree';
import { MemorizedChildFive } from './ChildFive';

const ParentFour = () => {

const [count,setCount] = useState(0);
const [name, setName] = useState('Mostafiz');

const person = {
    fname : 'Fahim',
    lname : 'Rahman',
}

const memoPerson = useMemo(()=> person, []);

const handle = ()=>{
    console.log('I Love U');
}

const callbackFunction = useCallback(handle, []);




console.log('ParentFour Rerender!!');

  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>Increment {count}</button>
        <button onClick={()=>{setName('Shifat')}}>Change Name</button>
      
{/* <MemorizedChild name={name}>
    <strong>
        Hello
    </strong>
</MemorizedChild> */}

<MemorizedChildFive name={name} person={memoPerson} handle={callbackFunction}></MemorizedChildFive>
       
    </div>



  )
}

export default ParentFour


