import React, { useState } from 'react'


const initState = ['Shifat', 'Khan'];
const ArrayUseState = () => {

    const[persons, setPersons] = useState(initState);

    const handleClick = ()=>{
        // persons.push('Rifat');
        // persons.push('Shoel');
        // persons.push('Shazid');
        // setPersons(persons);

        const newPersons = [...persons];
        newPersons.push('Rifat');
        newPersons.push('Rakib');
        newPersons.push('Avoy');

        setPersons(newPersons);

    }

    console.log('ArrayUseState Render!!');
  return (
    <div>
        <button onClick={handleClick}>Click</button>

      {
        persons.map((person)=>(
            <div key={person}>
                {person}
            </div>
        ))
      }
    </div>
  )
}

export default ArrayUseState