import React, { useState } from 'react'

const HookCounter3 = () => {
    const [name , setName] = useState({firstName:'', lastName:''});
  return (
    <div>
        <input
        value={name.firstName}
        onChange={e => setName({...name, firstName: e.target.value})}
        
        ></input>
        <input
        value={name.lastName}
        onChange={e => setName({...name, lastName: e.target.value})}
        
        ></input>

        <h1>First Name : {name.firstName}</h1>
        <h1>Last Name : {name.lastName}</h1>
    </div>
  )
}

export default HookCounter3