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

export default function Home() {

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

      //const scrollToTop = () =>{
        //        document.body.scrollTop=0;document.documentElement.scrollTop=0;}
        //      <div className="container">
        //          <button onClick={scrollToTop}>Go to top</button>
        //            </div>
        //       <div style={{position: "fixed", bottom:"3%", right:"-8%"}}>
        //         {!isScrolled ? (<img src="/images/arrowup.png"/>):(<></>)}</div>
        
  return (
    <main className='h-[auto] relative'>

      <a href='#' className={ isScrolled ? `transition-all duration-[350ms] h-[50px] w-[50px] rounded-full bg-[#b4884a62] text-[white] fixed bottom-10 right-10 z-20 flex items-center  justify-center`: `transition-all duration-[350ms] -z-10`}>
        <SlArrowUp style={{}} size={11}/>
      </a>
      <section className='h-[70px] w-[100vw]'>
        <Nav/>
      </section>

      <section className='h-[600px] w-[100vw] bg-[yellow] flex items-center justify-center overflow-hidden relative'>
        <SwiperComp/>

        <div className='h-[200px] w-[100vw] absolute left-0 z-10'>
          <p className='text-[40px] text-[#000000] font-cinzel font-extrabold flex flex-col items-center justify-center'>
          <span className='text-[14px] text-[#392e25] font-oswald'>WELCOME TO!</span>

          <div className='h-[100px] w-[auto] relative flex items-center justify-center text-[30px] font-cinzel'>
          <span className='h-[0.5px] w-[150px] bg-[black] mx-5'></span> 
          Catholic Church of the Assumption , Awoyaya
          <span className='h-[0.5px] w-[150px] bg-[black] mx-5'></span> 
          </div>
          
          </p>
        </div>
      </section>


      <section className='mt-[5rem]'>
      <MassSchedule/>
      </section>
      
      <section className='h-[600px] w-[100vw] flex items-center justify-center'>
        <MissionStatement/>
      </section>


     

      <section className='h-[auto]'>
      <Footer/>
      <div className='h-[20px] w-[100vw] bg-[#000000] flex items-center justify-center font-roboto text-[11px] text-[white]'>
        Copyrights © 2020 Catholic Church of the Assumption , All Right Reserved. | Design by 
        <Link
              href={`./`}
              className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1"
            >
              Masha.
            </Link>
      </div>
      </section>


    </main>
  )
}
