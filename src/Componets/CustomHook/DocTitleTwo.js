import React, { useState } from 'react'
import useDocumentHook from './useDocumentHook';

const DocTitleTwo = () => {

const [count, setcount] = useState(0);

useDocumentHook(count);

  return (
    <div>

      <button onClick={ ()=> setcount(count + 1)}>Count : {count}</button>
    </div>
  )
}

export default DocTitleTwo