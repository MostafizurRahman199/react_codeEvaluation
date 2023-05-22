import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState('');

    const handleInput = (e)=>{
        let inputVale = e.target.value;
        let updatedWarning = inputVale.includes('.js') ? "JavaScript paro" : null;

        setTodo(inputVale);
        setWarning(updatedWarning);
    }
  return (
    <div>
        <p>{todo}</p>
        <p>
            <textarea name="todo" value={todo} onChange={handleInput}></textarea>
        </p>
        <br></br>
        <h2>{warning || 'Good choice'}</h2>
    </div>
  )
}

export default Todo