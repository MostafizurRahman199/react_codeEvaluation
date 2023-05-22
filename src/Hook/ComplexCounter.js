import React, { useReducer } from 'react'

const initialState = {
    counter : 10,
    counter2 : 20
};
const reducer = (state, action)=>{
        switch(action.type){
            case 'increment':
                return {...state, counter : state.counter + action.value };
            case 'decrement':
                return {...state, counter : state.counter - action.value};
            case 'increment2':
                return {...state, counter2 : state.counter2 + action.value };
            case 'decrement2':
                return {...state, counter2 : state.counter2 - action.value};
            default: 
                return state;
        }
}
 
const ComplexCounter = () => {
    const [count , dispatch] = useReducer(reducer, initialState);

  return (

    <div>
    <div>
        <div>Count - {count.counter}</div>
        <button type="button" onClick={()=> dispatch({
            type:'increment',
            value : 5,
        })}>Increment</button>

        <button type="button" onClick={()=> dispatch({
            type:'decrement',
            value: 10, 
        })}>Decrement</button>
    </div>
    <div>
        <div>Count2 - {count.counter2}</div>
        <button type="button" onClick={()=> dispatch({
            type:'increment2',
            value : 5,
        })}>Increment2</button>

        <button type="button" onClick={()=> dispatch({
            type:'decrement2',
            value: 10, 
        })}>Decrement2</button>
    </div>


    </div>
  )
}

export default ComplexCounter;