"use client"
import Image from 'next/image'
import Nav from './components/Nav'
import SwiperComp from './components/SwiperComp'
import MissionStatement from './components/MissionStatement'
import MassSchedule from './components/MassSchedule'
import Footer from './components/Footer'
import {SlArrowUp} from 'react-icons/sl'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Catholic Church of the Assumption Awoyaya',
//   description: '',
// }

export default function RootLayout({ children }) {
  const bro = "#765426"

  const catholic_cream = "#f5eee4"
  
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
<body>
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
  Copyrights © 2020 Catholic Church of the Assumption , All Right Reserved. | Design by 
  <Link
      href={`https://www.linkedin.com/in/franc-enemuo/`}
      className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1 font-oswald"
  >
      Coderite.
  </Link>       
  &
  <Link
        href={`./`}
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
