import React, { useRef } from 'react'

const UserForm = () => {

const userNameRef = useRef();
const passwordRef = useRef();

const handleSubmit = (event)=>{
    event.preventDefault();
    const userName = userNameRef.current.value;
    const userPassord = passwordRef.current.value;
    userNameRef.current.style.color = "red";


    console.log({userName, userPassord});
}

  return (
    <div>
     <form onSubmit={handleSubmit}>
       <div>
       <label htmlFor='userName'>UserName : </label>
        <input htmlFor='' type='text' id="username" ref={userNameRef}></input>
        <br></br>
        <label htmlFor='password' className='password'>Password : </label>
        <input htmlFor='password' type="password" id='password' ref={passwordRef}></input>
        <br></br>
        <button type='submit'>Submit</button>
       </div>
     </form>
    </div>
  )
}

export default UserForm
