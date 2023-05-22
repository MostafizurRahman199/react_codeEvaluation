import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {

const[count,setCount] = useState(0);
console.log('Parent Rerender!!');

  return (
    <div>
        <button onClick={()=>{setCount(count + 1)}}>Increment {count}</button>
        <button onClick={()=>{setCount(count - 1)}}>Decremenet {count}</button>
        <button onClick={()=>{setCount(0)}}>Reset {count}</button>
        <Child></Child>
    </div>



  )
}

export default Parent


