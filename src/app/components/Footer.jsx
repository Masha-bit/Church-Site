import React from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi"

export default function Footer() {
  return (
    <div className='h-[300px] sm:h-[auto] w-[100vw] text-[#000000] flex flex-col items-center justify-center'>
        <span className='h-[0.5px] w-[80vw] sm:w-[90%] bg-[#000000]'></span>

        <div className='h-[280px] sm:h-[auto] sm:w-[100vw] text-[14px] flex sm:flex-col '>

            <aside className='h-[280px] w-[700px] sm:w-[100%] text-[16px]'>

            <div className='h-[250px] flex items-center sm:justify-center font-cinzel text-[36px] sm:text-[30px] font-[500]'>
            <span className='h-[100%] w-[200px] flex items-center justify-center sm:hidden'>
            <img src='/immaculate mother.png' width={120}/>
            </span>
            Catholic Church of the Assumption
            <br />
            Awoyaya
            </div>

            </aside>

            <aside className='h-[100%] sm:h-[auto] w-[600px] sm:w-[100vw] text-[12px] p-2 sm:p-0 flex sm:flex-col items-center justify-around'>

                <div className='h-[200px] w-[150px] sm:w-[90%] flex flex-col text-left '>
                    
                    <h1 className='font-cinzel text-[20px] my-2 underline'>CONNECT</h1>
                    
                    <span className='flex flex-col text-left'>
                    <p href="" target="_blank" className='my-2'>
                    KM 38 Lekki-Epe Expressway, Ibeju-Lekki Lagos
                    
                    </p>
                    <p href="" className='my-2'>
                        +234 806 639 7225
                    </p>

                    <p href="" className='my-2'>
                        catholicchurchofassumption@gmail.com
                    </p>
                    

                    <div className='h-[50px] w-[100px] flex items-center justify-around '>
                    <a href="https://www.facebook.com/profile.php?id=100075787488582" target="_blank" className='text-[black]'>
                            <BiLogoFacebook size={16}/>
                        </a>
                        <a href="./" className='text-[black]'>
                            <BiLogoInstagram size={16}/>
                        </a>
                        <a href="https://www.youtube.com/@LumenChristitv" className='text-[black]'>
                            <BiLogoYoutube size={16}/>
                        </a>
                    </div>
                    </span>

                </div>

                <div className='h-[200px] w-[150px] sm:w-[90%] flex flex-col text-left relative'>
                    
                    <h1 className='font-cinzel text-[20px] my-2 underline '>QUICK LINKS</h1>
                    
                    <span className='flex flex-col text-left font-cinzel'>
                    <a href="#" className='my-2 text-[black] no-underline'>
                    HOME
                    </a>
                    <a href="/Announcement" className='my-2 text-[black] no-underline'>
                    ANNOUNCEMENTS
                    </a>
                    <a href="/Laity" className='my-2 text-[black] no-underline'>
                    LAITY
                    </a>
                    <a href="/Sacrament" className='my-2 text-[black] no-underline'>
                    SACRAMENTS
                    </a>
                    <a href="/Donation" className='my-2 text-[black] no-underline'>
                    DONATIONS
                    </a>
                    </span>
                    
                    

                </div>

            </aside>
 
        </div>

    </div>
  )
}
