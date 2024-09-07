import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Course() {
    const [book,setbook]=useState([])
    useEffect(()=>{
        const getbook=async()=>{
        try {
            const res=await axios.get('https://readhaven08jbs.onrender.com/book')
            // console.log(res.data);
            setbook(res.data)
        } catch (error) {
            console.log("Error: ",error)
        }
        };
        getbook();
    },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
              <div className="mt-16 items-center justify-center text-center">
                  <img className="mx-auto py-8" src="https://www.bookswagon.com/images/bestsellerheading.jpg" alt="bestseller heading"></img>
                  <h1 className="py-8 text-2xl  md:text-4xl">
                      Welcome
                      <span className="text-pink-500"> aboard :)</span>
                  </h1>
              </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
        <div className='text-center mb-8'>
              <Link to="/">
                  <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                      Back
                  </button>
              </Link>
        </div>
    </div>
    </>
  )
}

export default Course
