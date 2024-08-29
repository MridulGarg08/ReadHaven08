import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 
import toast from 'react-hot-toast'
import Login from './Login'


function Signup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userinfo={
      name:data.name,
      email:data.email,
      pass:data.pass
    }
    await axios.post("http://localhost:4001/user/signup",userinfo)
    .then((res)=>{
      // console.log(res.data)
      if(res.data)
        toast.success('Signup Successful');
      localStorage.setItem("Users",JSON.stringify(res.data.User))
      navigate('/')
    }).catch((err)=>{
      // alert(err)
      if(err.response)
      {
        console.log(err)
        toast.error('Error: '+err.response.data.message);
      }
    })
  };

  return (
    <>
      <div className=' flex h-screen items-center justify-center dark:bg-slate-900 dark:text-white'>
        <div className="w-[600px]">
          <div className="modal-box dark:bg-slate-900 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h4 className="font-bold text-lg text-center">Signup</h4>
            {/* <p className="py-4">Press ESC key or click on ✕ button to close</p> */}
            <div className='mt-4 space-y-2'>
              <span>Name</span><br></br>
              <input className='bg-transparent rounded-lg w-80 px-3 py-1 border outline-none' type="text" placeholder='Enter Your Name'
              {...register("name", { required: true })}
              ></input>
              <br></br>
              {errors.name && <span className='text-sm text-red-600'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Email</span><br></br>
              <input className='bg-transparent rounded-lg w-80 px-3 py-1 border outline-none' type="email" placeholder='Enter Your Email'
              {...register("email", { required: true })}
              ></input>
              <br></br>
              {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span><br></br>
              <input className='bg-transparent rounded-lg w-80 px-3 py-1 border outline-none' type="password" placeholder='Enter Your Password'
              {...register("pass", { required: true })}
              ></input>
              <br></br>
              {errors.pass && <span className='text-sm text-red-600'>This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              {/* <Link to="/"> */}
                <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                {/* </Link> */}
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                    {
                      navigate('/')
                    }
                      // document.getElementById("my_modal_3").showModal()
                    }
                  >Login</button>{" "}
                  <Login/>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup