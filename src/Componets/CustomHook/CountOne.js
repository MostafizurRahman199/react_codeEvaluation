import React, { useState } from 'react'
import useCounter from './useCounter'

const CountOne = () => {

const [count , incrementCount, decrementCount, resetCount] = useCounter(10, 2);

  return (
    <div>CountOne : {count} <br></br>
    <button onClick={()=> {incrementCount() }}>Increment</button>
    <button onClick={()=>{decrementCount()}}>Decrement</button>
    <button onClick={()=>{resetCount()}}>Reset</button>
    
    
    
    </div>
  )
}

export default CountOne