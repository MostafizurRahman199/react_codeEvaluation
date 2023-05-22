import React, { useState } from 'react'
import MousePointer from './MousePointer';

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);


  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle</button>
        {
            display && <MousePointer></MousePointer>
        }
    </div>
  )
}

export default MouseContainer