import React from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {

    const navigate = useNavigate();

  return (
    <div>
      <h1>Profile</h1>
      <p>I am a very simple guy, who have not good in any field. I love to memorize Quran and watch Islamic lectures. I have no friend. I don't like to sleep. I think is consume my  time.</p>

      <button onClick={()=>{navigate("/home")}}>Go to Home</button>
    </div>
  )
}

export default Profile
