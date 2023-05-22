import React, { useEffect, useRef } from 'react'

const RefHook = () => {


const inputRef = useRef(null);

useEffect(()=>{
    inputRef.current.focus();
},[])

  return (
    <div>
        <input ref={inputRef}></input>
    </div>
  )
}

export default RefHook