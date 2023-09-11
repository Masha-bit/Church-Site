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
<link rel="icon" href="/immaculate mother.png"/>
<body >
<main className='h-[auto] relative'>

<a href='#' className={ isScrolled ? `transition-all duration-[350ms] h-[50px] w-[50px] rounded-full bg-[#b4884a62] text-[white] fixed bottom-10 right-10 z-20 flex items-center  justify-center`: `transition-all duration-[350ms] -z-10`}>
  <SlArrowUp style={{}} size={11}/>
</a>
<section className='h-[70px] w-[100vw]'>
  <Nav/>
</section>
  {children}
<section className='h-[auto]'>
<Footer/>
<div className='h-[20px] w-[100vw] bg-[#000000] flex items-center justify-center font-roboto text-[11px] text-[white]'>
  Copyrights © {year} Catholic Church of the Assumption , All Right Reserved. | Design by 
  <Link
      href={`https://www.linkedin.com/in/franc-enemuo/`}
      className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1 font-oswald"
  >
      Coderite.
  </Link>       
  &
  <Link
        href={`https://www.linkedin.com/in/christopher-masha-68377924a/`}
        className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1 no-underline font-oswald text-[white]"
      >
        Masha.
      </Link>
</div>
</section>


</main>        
</body>
</html>
  )
  }
