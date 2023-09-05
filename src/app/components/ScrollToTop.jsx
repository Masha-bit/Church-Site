"use client"
import React, { useEffect, useState } from 'react'
import {SlArrowUp} from 'react-icons/sl'

export default function ScrollToTop() {
    const [isScrolled,setScroll] = useState(false)
    
    const handleScroll = () => {
      if (window.pageYOffset >= 800) {
          setScroll(true)
        }else{
          setScroll(false)
  }}
  console.log(isScrolled)

  useEffect(() => {      
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };

    }, []);


  return (
    <a href='#' className={ isScrolled ? `transition-all duration-[350ms] h-[50px] w-[50px] rounded-full bg-[#b4884a62] text-[white] fixed bottom-10 right-10 z-20 flex items-center  justify-center`: `transition-all duration-[350ms] -z-10`}>
      <SlArrowUp style={{}} size={11}/>
    </a>
  )
}
