import React, { useState } from 'react'
import useCounter from './useCounter';

const CounterTwo = () => {

  const [count , incrementCount, decrementCount, resetCount] = useCounter(20, 5);

  return (
    <div>CounterTwo : {count} <br></br>
    <button onClick={()=> {incrementCount() }}>Increment</button>
    <button onClick={()=>{decrementCount()}}>Decrement</button>
    <button onClick={()=>{resetCount()}}>Reset</button>
    
    
    
    </div>
  )
}

export default CounterTwo