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
    <html lang="en">
    <body className='h-[auto] w-[100vw] relative'>
    
    <ScrollToTop/>
    <section className='h-[70px] w-[100vw]'>
      <Nav delay={450}/>
    </section>

    <Header title={"OUR MINISTRIES"} image={'/subscribe-bg-scaled.jpg'}/>

    <section className='h-[900px] w-[100vw] bg-[white] flex flex-col items-center font-cinzel relative'>
      <p className='w-[100vw] h-[auto] block text-center font-oswald text-[15px] text-[#825835] absolute top-0 left-0 m-0'>MINISTRY</p>

        <aside className='h-[150px] w-[100vw] p-2 flex flex-col items-center my-4'>

        <div className='h-[100px] w-[80vw] text-[30px] text-[#000000] text-center flex items-center justify-center relative'>
            <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5'></span>The participation of the People of God in “the work of God.”<span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5'></span>
            <p className='w-[100%] h-[auto] block text-center font-oswald text-[12px] text-[#825835] absolute bottom-0 left-0'>
            “Love is shown more in deeds than in words.” | St. Ignatius of Loyola</p>
        </div>

            {/* mini nav */}
            <NestedNav />
        </aside>

    <section className='h-[500px] w-[100vw]'>
        {children}
    </section>
    </section>

    <section>
    <Contact title={`VISIT!`} subtitle={`We hope that your visit among us will be physically and spiritually refreshing.`} messageplaceholder={`Hello bro and sis in Jesus Christ!`}/>
      
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

    <style></style>
    </body> 
    </html>
  )
}
