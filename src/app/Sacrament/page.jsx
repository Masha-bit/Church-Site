import React from 'react'
import Header from '../components/Header'
import sacramentDescription from '@/app/components/sacrament'
import Image from 'next/image'

export default function page(){
  console.log(sacramentDescription.sacrament.map((e) => {e.url}))
  return (
<main className='h-[auto] relative'>
    <Header title={"SACRAMENTS"} image={'/subscribe-bg-scaled.jpg'}/>

    <section className='h-[auto] w-[100vw] bg-[white] flex flex-col items-center justify- sm:justify-around font-cinzel relative'>
      <p className='w-[100vw] h-[auto] block text-center font-oswald text-[15px] text-[#825835] absolute top-0 left-0'> SACRAMENTS</p>

        <aside className='h-[80%] sm:h-[auto] sm:my-[2.5rem] w-[auto] flex flex-col items-center justify-center'>

        <div className='h-[400px] sm:h-[auto] w-[80vw] sm:w-[100vw] text-[30px] sm:text-[20px] text-[#000000] text-center flex items-center justify-center p-2 sm:p-8 relative'>
          <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>
          Roman Catholic teaching and practice is based on seven sacraments that are seen as mystical channels of divine grace, instituted by Christ. Each is celebrated with a visible rite, which reflects the invisible, spiritual essence of the sacrament.
            <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>
            <p className='w-[100%] h-[auto] block text-center font-oswald text-[12px] text-[#825835] absolute bottom-0 left-0 uppercase'> The participation of the People of God in “the work of God.”</p>
        </div>

        <div className='h-[auto] w-[100vw] flex flex-col items-center sm:my-[2rem] sm:p-6 sm:justify-around '>       
          
          {sacramentDescription.sacrament.map((s) => 
            (  <aside className='h-[250px] sm:h-[auto]  w-[900px] sm:w-[100%] flex sm:flex-col items-center justify-around sm:my-8 '>
                    <div className='h-[200px] w-[400px] overflow-hidden bg-cover'>
                      <Image src={s.url} className='w-[100%] min-h-[100%] object-fill' />
                      {/* <img src={s.url} alt={s.name} className='w-[100%] min-h-[100%] object-cover'/> */}
                    </div>

                    <div className='h-[200px] w-[400px] p-2'>
                        <p className='mt-0'>{s.name}</p>
                        <p className='font-roboto leading-6'>{s.description}</p>
                    </div>
                </aside>
            ))}

        </div>

        </aside>
    </section>
    </main>   
  )
}
