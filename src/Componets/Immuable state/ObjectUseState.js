import React, { useState } from 'react'

const initState = {
    fname :'Mostafiz',
    lname: 'Rahman'
}

const ObjectUseState = () => {

const [person, setPerson]= useState(initState);

const changeName = ()=>{
    // person.fname = 'Fahim',
    // person.lname = 'Khan'
    // setPerson(person);

    const newPerson = {...person};
    newPerson.fname = 'Fahim';
    newPerson.lname = 'Khan';
    setPerson(newPerson);
    

}

console.log('UseObject Render!!');

  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState