import React, { useState, useMemo } from 'react'

const CounterMemo = () => {


const [countOne, setCountOne] = useState(0);
const [countTwo, setcountTwo] = useState(0);

const incrementOne = ()=>{
    setCountOne(countOne + 1);
}

const incrementTwo = ()=>{
    setcountTwo(countTwo + 1);
}

const isEven = useMemo(()=>{
let i;
while( i < 200000000000){
    i++;
}

    if(countOne % 2 == 0)
    {
        return 1;
    }
    else{
        return 0;
    }
    i=0;
}, [countOne])

  return (


    <div>
        <button onClick={incrementOne}>Count : {countOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
        <br></br>
        <button onClick={incrementTwo}>Count : {countTwo}</button>
    </div>
  )
}

export default CounterMemo