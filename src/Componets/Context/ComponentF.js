import React, { useContext } from 'react'
import { UserName1, UserName2} from '../../App'



const ComponentF = () => {

  const name2 = useContext(UserName1)
  const name1 = useContext(UserName2)
  return (
    <div>
        
            {
                <h1>My name is {name1} {name2}</h1>
                
            }
     
    </div>
  )
}

export default ComponentF