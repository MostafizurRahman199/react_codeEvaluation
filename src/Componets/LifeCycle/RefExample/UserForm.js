import React, { Component, createRef } from 'react'

export default class UserForm extends Component {

constructor(props) {
  super(props)
  this.userNameRef = createRef();

  this.state = {
     
  }
}

handleSubmit = (event)=>{
    event.preventDefault();
    console.log(this.userNameRef.current);
    this.userNameRef.current.style.color = "green"
}


  render() {
    return (
      <form onSubmit={this.handleSubmit}>

       <div className='form-   field'>
       <label htmlFor='UserName'>UserName : </label>
        <input id='userName' type="text" ref={this.userNameRef}></input>
       </div>

       <div className='form-   field'>
       <label htmlFor='password'>Password : </label>
        <input id='password' type="password"></input>
       </div>

       <button type='submit'>Register</button>
    
      </form>
    )
  }
}
