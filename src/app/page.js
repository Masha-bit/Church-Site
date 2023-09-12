"use client"
import React from 'react'
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
        
  return (
<div>
<link rel="icon" href="/favicon.io"/>
      
<section className='h-[600px] w-[100vw] flex items-center justify-center overflow-hidden relative'>
  <SwiperComp/>
  <div className='h-[100%] w-[100%] bg-[#be98643a] absolute left-0 top-0 z-[8]'>

  </div>

  <div className='h-[200px] w-[100vw] absolute left-0 z-10'>
    <p className='text-[60px] text-[#000000] font-cinzel font-extrabold flex flex-col items-center justify-center'>
    <span className='text-[14px] text-[#000000] font-oswald'>WELCOME TO!</span>

    <div className='h-[100px] w-[auto] relative flex items-center justify-center text-[40px] font-cinzel'>
    <span className='h-[0.5px] w-[150px] bg-[black] mx-5'></span> 
    Catholic Church of the Assumption , Awoyaya
    <span className='h-[0.5px] w-[150px] bg-[black] mx-5'></span> 
    </div>
    
    </p>
  </div>
</section>

<section className='h-[600px] w-[100vw] flex items-center justify-center'>
  <MissionStatement/>
</section>

<section className='mt-[5rem]'>
<MassSchedule/>
</section>

<section className='h-[500px] w-[100vw] flex items-center'>
  <aside></aside>
  <aside></aside>
</section>



</div>
  )
}
