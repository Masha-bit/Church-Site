"use client"
import Image from 'next/image'
import Nav from './components/Nav'
import SwiperComp from './components/SwiperComp'
import MissionStatement from './components/MissionStatement'
import MassSchedule from './components/MassSchedule'
import Footer from './components/Footer'
import {SlArrowUp} from 'react-icons/sl'
import { useEffect, useState } from 'react'

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

        <div className='h-[200px] w-[auto] absolute left-0 z-10 p-8 '>
          <p className='text-[40px] text-[#000000] font-cinzel font-extrabold'>
          <span className='font-garamond text-[14px] text-[#000000]'>WELCOME TO!</span>
          <br/>
          Catholic Church of the Assumption ,
          <br />
          Awoyaya
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
      </section>

      
    </main>
  )
}
