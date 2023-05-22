import React, { useState } from 'react'
import useFormCustomHook from './useFormCustomHook';

const UserFrom = () => {


const[firstName, bindFirstName, resetFirstName] = useFormCustomHook('');
const [lastName, bindLastName, resetLastName] = useFormCustomHook('');


const handleForm = (e)=>{
e.preventDefault();
alert(`Hello ${firstName} ${lastName}`);
resetFirstName();
resetLastName();
}

  return (
    <div>
        <form onSubmit={handleForm}>
           <div>
                <label>First Name : </label>
                <input type='text' {...bindFirstName}></input>
           </div>
           <div>
                <label>Last Name : </label>
                <input type='text'{...bindLastName}></input>
           </div>
           <div>
                <button type='submit'>Submit</button>
           </div>
        </form>
    </div>
  )
}


export default UserFrom;