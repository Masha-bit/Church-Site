"use client"
import Nav from './components/Nav'
import Footer from './components/Footer'
import { SlArrowUp } from 'react-icons/sl'
import {React , useEffect, useState } from 'react'
import Link from 'next/link'
import './globals.css'


export default function RootLayout({ children }) {
  const catholic_cream = "#f5eee4"
  const year = new Date().getFullYear()

  
  const [isScrolled,setScroll] = useState(false)
  
      const handleScroll = () => {
        if (window.pageYOffset >= 50) {
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
<html lang="en">
<link rel="icon" href="/immaculate mother.png "/>
<body>
<main className='relative'>

<a href='#' className={ isScrolled ? `transition-all duration-[350ms] h-[50px] w-[50px] rounded-full bg-[#b4884a62] text-[white] fixed bottom-10 right-10 z-20 flex items-center  justify-center`: `transition-all duration-[350ms] -z-10`}>
  <SlArrowUp style={{}} size={11}/>
</a>
<section className='h-[70px] w-[100vw]'>
  <Nav/>
</section>

<section className='w-[100vw] overflow-x-hidden'>
  {children}
</section>
<section className='h-[auto] w-[100vw] overflow-x-hidden'>
<Footer/>
<p className='h-[20px] sm:h-[30px] w-[100vw] bg-[#4d619e] inline-block items-center  font-roboto text-[11px] text-[white] text-center sm:p-4'>
  Copyrights © {year} Catholic Church of the Assumption , All Right Reserved. | Design by 
  <a
      href={`https://www.linkedin.com/in/franc-enemuo/`}
      className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1 font-oswald inline"
  >
      Coderite.
  </a>       
  &
  <a
        href={`https://www.linkedin.com/in/christopher-masha-68377924a/`}
        className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1 no-underline font-oswald text-[white] inline"
      >
        Masha.
      </a>
</p>
</section>


</main>        
</body>
</html>
  )
  }
