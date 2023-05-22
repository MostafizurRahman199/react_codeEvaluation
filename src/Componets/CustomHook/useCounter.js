import React, { useState } from 'react'

const useCounter = (initialCount = 0, value) => {

  const [count, setcount] = useState(initialCount);


const incrementCount = ()=>{
    setcount(count + value);
}

const decrementCount = ()=>{
    setcount(count - value);
}

const resetCount = ()=>{
    setcount(0);
}


  return [count, incrementCount, decrementCount, resetCount];
}

export default useCounter;