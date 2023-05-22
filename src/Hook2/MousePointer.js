import React, { useEffect, useState } from 'react'

const MousePointer = () => {

const [x, setX] = useState(0);
const [y, setY] = useState(0);

const logMousePosition = (e)=>{
    setX(e.clientX);
    setY(e.clientY)

}

useEffect(()=>{
    window.addEventListener('mousemove', logMousePosition)
},[])

  return (
    <div>
        <h1>x : {x}</h1>
        <h1>y : {y}</h1>
    </div>
  )
}

export default MousePointer