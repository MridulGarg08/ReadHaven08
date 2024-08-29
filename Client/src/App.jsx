import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './Context/AuthProvider'
import ContactUs from './Components/ContactUs'

const App = () => {
  const [authUser,setauthUser]=useAuth()
    console.log(authUser)
  return (
    <>
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={authUser?<Courses/>:<Navigate to="/signup"/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
    </Routes>
    <Toaster />
    </div>
    </>
  )
}

export default App