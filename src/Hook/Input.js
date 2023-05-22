import React from 'react'

const Input = ({type, placeholder}, ref) => {
  return (
    <div>
        <input ref={ref} type={type} placeholder={placeholder}></input>
    </div>
  )
}

const forwaredInput = React.forwardRef(Input);

export default forwaredInput;