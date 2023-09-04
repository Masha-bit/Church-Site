"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Nav() {

    const [isActive, setActive] = useState("home")
    const  [linkStyle, setLinkStyle] = useState("close") //"open"
    const [isScrolled, setScroll] = useState(false)
    console.log(isActive)

    const handleLinkActive = (link) => {
        setActive(link)
    }

    const handleScroll = () => {
        if (window.pageYOffset >= 100) {
            setScroll(true)
          }else{
            setScroll(false)
    }}
    console.log(isScrolled)

    useEffect(() => {      
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };

      }, []);

    
    const font_rgb = "#660318"
  return (
    <nav className={ isScrolled? `fixed top-0 left-0 h-[70px] w-[100vw] bg-[#cda764b5] flex items-center justify-around font-cinzel text-[${font_rgb}] z-[100] transition-all duration-[350ms] ` : `h-[70px] w-[100vw] bg-[#efebdf]  absolute top-0 left-0 flex items-center justify-around font-cinzel text-[${font_rgb}] transition-all duration-[350ms]`}>


        

        <aside className={`h-[100%] w-[40%] flex items-center justify-center font-cinzel text-[17px] font-[600] text-[${font_rgb}] `}>
        {/* <img src='/logo_text.png' width={100}/> */}
            <p>
                Catholic Church of the Assumption 
                <br />
                Awoyaya
            </p>
        </aside>

        <aside className='h-[100%] w-[20%] flex items-center justify-center '>
            <img src='/logo.png' width={70}/>
        </aside>

        <aside className='h-[100%] w-[40%] flex items-center justify-center text-[13px]'>
            <div className='w-[90%] flex items-center justify-around '>
                <Link href="">
                    <p  className={`${isActive == "home" ? "open":"close"}`} onClick={() => handleLinkActive("home")}>HOME</p>
                </Link>
                <Link href="" >
                    <p className={`${isActive == "connect" ? "open":"close"}`} onClick={() => handleLinkActive("connect")}>CONNECT</p>
                </Link>
                <Link href="" >
                    <p className={`${isActive == "ministry" ? "open":"close"}`} onClick={() => handleLinkActive("ministry")}>MINISTRIES</p>
                </Link>

                <Link href="" >
                    <p className={`${isActive == "sacrament" ? "open":"close"}`} onClick={() => handleLinkActive("sacrament")}>SACRAMENTS</p>
                </Link>

                <Link href="" >
                    <p className={`${isActive == "media" ? 'open':'close'}`} onClick={() => handleLinkActive("media")}>MEDIA</p>
                </Link>

                <a href="" className='hover:transition-all hover:text-[black]'>
                    <div className='h-[40px] w-[120px] bg-[#b4884a62] transition-all hover:transition-all hover:bg-[#86673ba7] hover:text-[white] flex items-center justify-center text-[black]'>DONATE TODAY</div>
                </a>
            </div>
        </aside>

    <style jsx>
        {`
        .open{
            transition: color 350ms ease-in-out;
            color: black;
            font-size: 17px; 
        }
        .close{
            transition: color 350ms ease-in-out;
            // color: black;
        }
        .close:hover{
            transition: color 350ms ease-in-out;
            color: black;
        }
        `}
    </style>
    </nav>
  )
    }
