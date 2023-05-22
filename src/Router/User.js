import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const User = () => {

    const {userid} = useParams();
    const [searchParam, setSearchParam] = useSearchParams(); 
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    console.log(searchParam.get("id"))

    const handleSubmit = (event) =>{
      event.preventDefault();
      setSearchParam({name : name, age:age})

    }

  return (
    <div>
     <h1> User</h1>

     <form onSubmit={handleSubmit}>
     <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="name"></input>
     <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} placeholder="age"></input>
     <button type='submit' onClick={handleSubmit}>Find User</button>
     </form>

      <h1>{searchParam.get("id")}</h1>
      <h1>{searchParam.get("age")}</h1>
      <h1>{searchParam.get("name")}</h1>
    </div>
  )
}

export default User
