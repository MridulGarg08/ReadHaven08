import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios'
import Cards from './Cards';

const Freebook = () => {
  const [book,setbook]=useState([])
    useEffect(()=>{
        const getbook=async()=>{
        try {
            const res=await axios.get('http://localhost:4001/book')
            setbook(res.data)
            console.log(res.data)
        } catch (error) {
            console.log("Error: ",error)
        }
        };
        getbook();
    },[]);
    const filterdata = book.filter((data) => data.category === "Free");
    // console.log(filterdata)
        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
          <h1 className='font-bold text-xl pb-2 text-orange-800'>Free Offered Celestial Secrets</h1>
          <p>Discover a world of knowledge and imagination with our collection of free books! Whether you're an avid reader or just looking to explore new genres, our selection offers something for everyone. From timeless classics to contemporary fiction, self-help guides, and educational resources, these books are available at no cost to help you expand your horizons. Dive into stories that captivate, inspire, and educate—all for free. Don't miss out on this opportunity to enrich your mind and soul without spending a dime!</p>
        </div>
        <div>
          <Slider {...settings}>
            {filterdata.map((item)=>(
                <Cards item={item} key={item.id}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
    
  )
}

export default Freebook