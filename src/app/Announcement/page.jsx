import React from 'react'
import Header from '../components/Header'


export default function page() {

    const bro = "#765426"

    const catholic_cream = "#f5eee4"

  return (
    <main className='h-[auto] relative'>
    <Header title={"ANNOUNCEMENTS"} image={'/subscribe-bg-scaled.jpg'}/>

    {/* ADJUST SECTION HEIGHT FROM HERE !! */}
    <section className='h-[700px] w-[100vw] bg-[white] flex flex-col items-center justify-center font-cinzel relative'>
      <p className='w-[100vw] h-[auto] block text-center font-oswald text-[15px] text-[#825835] absolute top-0 left-0'>ANNOUNCEMENTS </p>

        <aside className='h-[80%] w-[100vw]'>

        <div className='h-[200px] w-[100vw] sm:w-[100vw] text-[30px] sm:text-[20px] text-[#000000] text-center flex items-center justify-center relative'>
          <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>
            Let’s join together and work to assure a bright future for the parish.
            <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>
            <p className='w-[100%] h-[auto] block text-center font-oswald text-[12px] text-[#825835] absolute bottom-0 left-0'></p>
        </div>
            
            {/* INSERT BODY CODE HERR !!! */}

        </aside>
    </section>
    </main>   
  )
}
