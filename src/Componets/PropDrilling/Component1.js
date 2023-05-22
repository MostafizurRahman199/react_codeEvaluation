import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './UserContext'

const Component1 = () => {

const [user, setUser] = useState({id:101,name:"Mostafiz"})
const [text, setText] = useState("Hello, kamon aso?");



  return (
    <div>
      <UserContext.Provider value={{user, text}}>
        <Component2></Component2>
      </UserContext.Provider>
    </div>
  )
}

export default Component1
