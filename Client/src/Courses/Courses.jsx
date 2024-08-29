import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'

function Courses() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen dark:bg-slate-900 dark:text-white'>
     <Course/>
    </div>
    <Footer/>
    </>
    
  )
}

export default Courses