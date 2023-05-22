import React, { Component } from 'react'

export class HoverCounterTwo extends Component {
  render() {

    const {count , incrementCount} = this.props;

    return (
     <div>
      <h1>Hover counter</h1>
      <p onMouseOver={incrementCount}>Hover {count} times</p>
     </div>
    )
  }
}

export default HoverCounterTwo