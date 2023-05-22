import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import College from '../Pages/College'
import Inst from '../Pages/Inst'
import School from '../Pages/School'
import University from '../Pages/University'
import Navbar from '../Router/Navbar'
import Protected from './Protected'

const Index = () => {

    const [isLoggedIn, setIsLLoggedIn] = useState(true);
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        {isLoggedIn ? <button onClick={()=>{setIsLLoggedIn(!isLoggedIn)}}>Log Out</button>:<button onClick={()=>{setIsLLoggedIn(!isLoggedIn)}}>Log In</button>} 

        <Routes>
            <Route path='/inst' element={<Inst></Inst>}></Route>
            <Route path='school' element={<School></School>}></Route>
            <Route path='/college' element={<College></College>}></Route>
            
            <Route path='/university' 
            element={
            <Protected isLoggedIn={isLoggedIn}>
                <University></University>
            </Protected>}>

                </Route>

        </Routes>

    </BrowserRouter>
  )
}

export default Index
