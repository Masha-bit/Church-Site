import React from 'react'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
"react-icons/bi"



export default function page() {

    const bro = "#765426"

    const catholic_cream = "#f5eee4"

  return (
    <main className='h-[auto] w-[100vw] relative'>
    <Header title={"GALLERY"} image={'/subscribe-bg-scaled.jpg'}/>

    <section className='h-[auto] w-[100vw] bg-[white] flex flex-col items-center justify-center font-cinzel relative p-4 sm:p-0'>
      <p className='w-[100vw] h-[20%] block text-center font-oswald text-[15px] text-[#825835] absolute top-0 left-0'>GALLERY</p>

        <aside className='h-[80%] w-[100%] mt-8'>
          <Gallery/>
        </aside>


    </section>
    </main>   
  )
}
