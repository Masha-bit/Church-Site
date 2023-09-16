import React from 'react'
import Header from '../components/Header'
"react-icons/bi"



export default function page() {

    const bro = "#765426"

    const catholic_cream = "#f5eee4"

  return (
    <main className='h-[auto] relative'>
    <Header title={"DONATIONS"} image={'/subscribe-bg-scaled.jpg'}/>

    <section className='h-[700px] sm:h-[auto] w-[100vw] bg-[white] flex flex-col items-center justify-center font-cinzel relative'>
      <p className='w-[100vw] h-[auto] block text-center font-oswald text-[15px] text-[#825835] absolute top-0 left-0'> DONATE</p>

        <aside className='h-[80%] w-[auto] sm:w-[100%] sm:my-[2.5rem]'>

        <div className='h-[200px] sm:h-[auto] w-[80vw] sm:w-[100%] text-[30px] sm:text-[20px]  text-[#000000] text-center flex items-center justify-center p-2 relative'>
          <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>
            Let’s join together and work to assure a bright future for the parish.
            <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5 sm:hidden'></span>
            <p className='w-[100%] h-[auto] block text-center font-oswald text-[12px] text-[#825835] absolute bottom-0 left-0'></p>
        </div>

        <div className='flex sm:flex-col items-center justify-around'> 
            <aside className=''>
                <img src='stlawrence-2.jpg' className='w-[450px]'/>
            </aside>

            <aside className='h-[360px] sm:h-[auto] sm:w-[100%] sm:flex sm:flex-col sm:items-center sm:justify-center w-[600px] text-left sm:p-4'>
            <p className='text-2xl text-[#7c583a]'>Make a Donation</p>
            <table>
                <tbody className='text-sm'>
                    <tr>
                        <th>Fidelity Bank</th>
                        <td>00000000000000</td>
                    </tr>
                    <tr>
                        <th>First Bank Plc</th>
                        <td>00000000000000</td>
                    </tr>
                    <tr>
                        <th>UBA</th>
                        <td>00000000000000</td>
                    </tr>
                </tbody>
                <style>
                    {`
                    tr{
                        height:40px;
                        margin-top: 1rem;
                        margin-bottom: 1rem;
                    }
                    th{
                        width: 150px;
                    }
                    @media screen and (max-width: 639px ) {
                        tr{
                          height:auto;
                        }
                        th, td{
                          height: auto;
                          width: 50%;
                          padding:2px;
                        }
                      }

                    `}
                </style>
            </table>
            </aside>
        </div>


        </aside>
    </section>
    </main>   
  )
}
