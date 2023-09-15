"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import Header from '../components/Header'
import {LiaMapMarkedAltSolid} from 'react-icons/lia'
import {BiPhoneCall} from 'react-icons/bi'
import {FiMail} from 'react-icons/fi'
import {BiLogoFacebook, BiLogoInstagram, BiLogoYoutube} from "react-icons/bi"
import ScrollToTop from '../components/ScrollToTop'


export default function page() {

    const bro = "#765426"

    const catholic_cream = "#f5eee4"

  return (
    <main className='h-[auto] relative'>
    <Header title={"CONNECT"} image={'/subscribe-bg-scaled.jpg'}/>

    <section className='h-[700px] w-[100vw] bg-[white] flex flex-col items-center justify-center font-cinzel relative'>
      <p className='w-[100vw] h-[auto] block text-center font-oswald text-[15px] text-[#825835] absolute top-0 left-0'> CONNECT</p>

        <aside className='h-[80%] w-[auto]'>

        <div className='h-[200px] w-[80vw] text-[30px] sm:text-[20px] text-[#000000] text-center flex items-center justify-center p-2 relative'>
          <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5'></span>
            Our love of Christ impels us to welcome all; to worship joyfully and pray fervently; to walk together with those in need, and to reverence God in the wonder of creation.
            <span className='h-[1px] w-[50px] bg-[#f1d1b7] mx-5'></span>
            <p className='w-[100%] h-[auto] block text-center font-oswald text-[12px] text-[#825835] absolute bottom-0 left-0'> ST. IGNATIUS OF LOYOLA</p>
        </div>

        <div className='h-[200px] w-[800px]  text-[20px] text-center font-roboto flex flex-row items-center'>
           
            <aside className=''>
                <table className='w-[400px] '>
                    <tbody className='text-left'>
                        <tr><LiaMapMarkedAltSolid style={{color: "#825835"}} size={20}/></tr>
                        <tr>KM 38 Lekki-Epe Expressway, Ibeju-Lekki Lagos</tr>
                    </tbody>
                </table>
            </aside>

            <aside>
                <table className=''>
                    <tbody className='text-left'>
                        <tr>
                            <td className='w-[35px]'><BiPhoneCall style={{color: "#825835"}} size={20}/></td>
                            <td>+234 806 639 7225</td>
                        </tr>
                        <tr>
                            <td className='w-[35px]'><FiMail style={{color: "#825835"}} size={20}/></td>
                            <td>catholicchurchofassumption@gmail.com</td>
                        </tr>
                    </tbody>
                </table>
            </aside>

        </div>

        <span className='h-[0.5px] w-[500px] bg-[black] mx-5 block'></span>

        <table className='mt-16 p-2'>
            <thead className='text-[#ebda6c] text-[25px]'>
                Follow Us On!
            </thead>
            <tbody className='w-[300px]'>
                <tr>
                <div className='h-[50px] w-[300px] flex items-center justify-around text-left '>
                    <a href="https://www.facebook.com/profile.php?id=100075787488582" className='text-[black]' target="_blank">
                            <BiLogoFacebook size={26}/>
                        </a>
                        <a href="./" className='text-[black]'>
                            <BiLogoInstagram size={26}/>
                        </a>
                        <a href="https://www.youtube.com/@LumenChristitv" className='text-[black]'>
                            <BiLogoYoutube size={26}/>
                        </a>
                    </div>
                </tr>
            </tbody>
            
        </table>

        </aside>
    </section>

    {/* <section className='h-[auto] w-[100vw] flex items-center justify-center'>
    <Contact title={`VISIT!`} subtitle={`We hope that your visit among us will be physically and spiritually refreshing.`} messageplaceholder={`Hello bro and sis in Jesus Christ!`}/>
      
    </section>


   

    <section className='h-[auto] w-[100vw] flex flex-col items-center justify-center'>
    <Footer/>
    <div className='h-[20px] w-[100vw] bg-[#000000] flex items-center justify-center font-roboto text-[11px] text-[white]'>
      Copyrights © 2020 Catholic Church of the Assumption , All Right Reserved. | Design by
        <Link
            href={`https://www.linkedin.com/in/franc-enemuo/`}
            className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1 font-oswald"
        >
            Coderite.
        </Link>       
        &
        <Link
            href={`https://www.linkedin.com/in/christopher-masha-68377924a/`}
            className="decoration-[none] border-dotted border-b-2 border-[#fafafa9a] hover:text-white hover:transition-all transition-all mx-1 font-oswald"
          >
            Masha.
          </Link>

    </div>
    </section> */}
    </main>   
  )
}
