import React, {useState } from 'react'

import { ChildA, MemorizedChildA } from './ContextChildren';


export const CountContext = React.createContext();
const CountProvider = CountContext.Provider;

const ContextParent = () => {

const [count , setCount] = useState(0)
console.log('Context Parent Re-render!!');

  return (
    <div>
        <button onClick={()=>{setCount(count => count + 1)}}>Count : {count}</button>
        <CountProvider value={count}>
           <MemorizedChildA></MemorizedChildA>
        </CountProvider>
    </div>
  )
}

export default ContextParent