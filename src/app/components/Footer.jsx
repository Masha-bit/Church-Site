import React from 'react'
import {BiLogoFacebook, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi"

export default function Footer() {
  return (
    <div className='h-[300px] w-[100vw] text-[#000000] flex flex-col items-center justify-center'>
        <span className='h-[0.5px] w-[80vw] bg-[#000000]'></span>

        <div className='h-[90%] text-[14px] flex '>

            <aside className='h-[100%] w-[700px] text-[12px]'>

            <div className='h-[300px] w-[100%] flex items-center font-cinzel text-[36px] font-[500]'>
            <span className='h-[100%] w-[200px] flex items-center justify-center'>
            <img src='/logo.png' width={200}/>
            </span>

            Catholic Church of the Assumption
            <br />
            Awoyaya
            </div>

            </aside>

            <aside className='h-[100%] w-[400px] text-[12px] p-4 flex items-center justify-around'>

                <div className='h-[200px] w-[150px] flex flex-col text-left '>
                    
                    <h1 className='font-cinzel text-[20px] my-2 underline'>CONNECT</h1>
                    
                    <span className='flex flex-col text-left'>
                    <p href="" target="_blank" className='my-2'>
                    980 Park Avenue New York, NY 10028
                    </p>
                    <p href="" className='my-2'>
                        212-288-3588
                    </p>

                    <p href="" className='my-2'>
                        church@hjcrttuvyk.org
                    </p>
                    

                    <div className='h-[50px] w-[100px] flex items-center justify-around '>
                    <a href="https://www.facebook.com/catholicchurchofassumptionawoyaya" target="_blank" className='text-[black]'>
                            <BiLogoFacebook size={16}/>
                        </a>
                        <a href="" className='text-[black]'>
                            <BiLogoInstagram size={16}/>
                        </a>
                        <a href="" className='text-[black]'>
                            <BiLogoYoutube size={16}/>
                        </a>
                    </div>
                    </span>

                </div>

                <div className='h-[200px] w-[150px] flex flex-col text-left relative'>
                    
                    <h1 className='font-cinzel text-[20px] my-2 underline '>QUICK LINKS</h1>
                    
                    <span className='flex flex-col text-left font-cinzel'>
                    <a href="#" className='my-2 text-[black] no-underline'>
                    HOME
                    </a>
                    <a href="" className='my-2 text-[black] no-underline'>
                    MINISTRIES
                    </a>
                    <a href="" className='my-2 text-[black] no-underline'>
                    SACRAMENTS
                    </a>
                    <a href="" className='my-2 text-[black] no-underline'>
                    DONATIONS
                    </a>
                    </span>
                    
                    

                </div>

            </aside>
 
        </div>

    </div>
  )
}
