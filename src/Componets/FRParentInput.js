import React, { Component } from 'react'
import FRInput from './FRInput'

export class FRParentInput extends Component {

constructor(props) {
  super(props)
  this.inputRef = React.createRef();

  this.state = {
     
  }
}

clickHandler = ()=>{
    this.inputRef.current.focus();
}

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}></FRInput>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput