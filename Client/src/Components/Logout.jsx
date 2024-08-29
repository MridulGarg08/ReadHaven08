import React from 'react'
import toast from 'react-hot-toast'
import { useAuth } from '../Context/AuthProvider'


function Logout() {
  const [authUser,setauthUser]=useAuth()
  const handleLogout=()=>{
    try {
      setauthUser({
        ...authUser,
        User:null
      })
      toast.success("Logged out successfully")
      localStorage.removeItem("Users")
      // window.location.reload();
      setTimeout(()=>{
        window.location.reload();
      },500)
      
    } catch (error) {
      toast.error("Error: "+error)
      setTimeout(()=>{},2000)      
    }
  }
  return (
    <div>
        <button className='px-3 py-2 bg-red-600 cursor-pointer text-white rounded-md' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout