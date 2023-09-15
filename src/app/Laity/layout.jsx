"use client"
// import "./../global.css"
import Link from 'next/link'
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Header from '../components/Header'
import ScrollToTop from '../components/ScrollToTop'
import NestedNav from '../components/NestedNav'

// export const metadata = {
//   title: 'Catholic Church of the Assumption Awoyaya',
//   description: '',
// }

export default function MinistryLayout({ children }) {
  return (
    <main lang="en">
    <Header title={"PARISH LAITY COUNCILS"} image={'/subscribe-bg-scaled.jpg'}/>

    <section className='h-[auto] w-[100vw] bg-[white] flex flex-col items-center font-cinzel relative'>
      <p className='w-[100vw] h-[auto] block text-center font-oswald text-[15px] text-[#825835] absolute top-0 left-0 m-0'>LAITY</p>

        <aside className='h-[auto] w-[100vw] p-2 flex flex-col items-center my-4'>

        <div className='h-[200px] w-[80vw] sm:w-[100vw] text-[30px] sm:text-[20px] text-[#000000] text-center flex items-center justify-center relative'>
            <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>The participation of the People of God in “the work of God.”<span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>
            <p className='w-[100%] h-[auto] block text-center font-oswald text-[16px] text-[#825835] absolute bottom-0 left-0'>
            “Love is shown more in deeds than in words.” | St. Ignatius of Loyola</p>
        </div>

            {/* mini nav */}
            <NestedNav />
        </aside>

    <section className='h-[auto] w-[100vw]'>
        {children}
    </section>

    </section>
    </main>
  )
}
