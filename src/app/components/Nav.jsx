'use client';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {HiOutlineBars3BottomLeft} from 'react-icons/hi2'

export default function Nav(props) {
  const [isActive, setActive] = useState('');
  const [linkStyle, setLinkStyle] = useState('close'); //"open"
  const [isScrolled, setScroll] = useState(false);
  console.log(isActive);

  const handleLinkActive = (link) => {
    setActive(link);
  };

  const ref = useRef(null);

  const handleScroll = () => {
    if (window.pageYOffset >= (props.delay ? props.delay : 100)) {
      setScroll(true);
    } else {
      setScroll(false);

      const nav = ref.current;
      !isScrolled
        ? gsap.fromTo(
            nav,
            {
              opacity: 0,
              yPercent: -100,
              ease: 'power2.inOut',
            },
            {
              duration: 0.1,
              opacity: 1,
              yPercent: 0,
              position: 'fixed',
              //   backgroundColor: "red",
              ease: 'power1.inOut',
            }
          )
        : null;
    }
  };
  console.log(isScrolled);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const font_rgb = '#660318';
  return (
    <nav
      ref={ref}
      className={`fixed top-0 left-0 h-[70px] w-[100vw] bg-[#ffffff] flex items-center justify-around font-cinzel text-[${font_rgb}] z-[100] transition-all duration-[350ms] shadow-md sm:h-[auto] sm:flex-col`}
    >
      <aside
        className={`h-[100%] w-[40%] flex items-center justify-center font-cinzel text-[19px] text-[${font_rgb}] sm:hidden `}
      >
        {/* <img src='/logo_text.png' width={100}/> */}
        <p>
          Catholic Church of the Assumption
          <br />
          Awoyaya
        </p>
      </aside>

      <a href='/#' className="h-[100%] w-[10%] flex items-center justify-center sm:hidden ">
        <img src="/immaculate mother.png" width={35} />
      </a>

      <aside className="h-[100%] w-[45%] flex items-center justify-center text-[12px] sm:hidden">
        <div className="w-[90%] flex items-center justify-around text-[black] no-underline">
          <Link href="/#" className="text-[black] no-underline ">
            <p
              className={`${isActive == 'home' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('home')}
            >
              HOME
            </p>
          </Link>
          <Link href="/Announcement" className="text-[black] no-underline">
            <p
              className={`${isActive == 'announcement' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('announcement')}
            >
              Announcement
            </p>
          </Link>
          <Link href="/Connect" className="text-[black] no-underline">
            <p
              className={`${isActive == 'connect' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('connect')}
            >
              CONNECT
            </p>
          </Link>
          <Link href="/Laity" className="text-[black] no-underline">
            <p
              className={`${isActive == 'ministry' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('ministry')}
            >
              LAITY
            </p>
          </Link>

          <Link href="/Sacrament" className="text-[black] no-underline">
            <p
              className={`${isActive == 'sacrament' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('sacrament')}
            >
              SACRAMENTS
            </p>
          </Link>

          <Link href="/Media" className="text-[black] no-underline">
            <p
              className={`${isActive == 'media' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('media')}
            >
              MEDIA
            </p>
          </Link>

          <a
            href="/Donation"
            className="hover:transition-all hover:text-[black] no-underline"
          >
            <div className="h-[40px] w-[120px] bg-[#fce97a62] transition-all hover:transition-all hover:bg-[#86673ba7] hover:text-[white] flex items-center justify-center text-[black]">
              DONATE TODAY
            </div>
          </a>
        </div>
      </aside>

      <style jsx>
        {`
          .open {
            transition: color 350ms ease-in-out;
            color: black;
            // font-size: 17px;
          }
          .close {
            transition: color 350ms ease-in-out;
            // color: black;
          }
          .close:hover {
            transition: color 350ms ease-in-out;
            color: black;
          }
        `}
      </style>

      {/* mobile nav  */}

      {/* <div className='hidden sm:flex flex-col bg-[purple] h-[100%] w-[100vw]'> */}
      <aside className='hidden sm:flex h-[120px] w-[100vw] items-center justify-around'>

      <a href='/#' className="h-[100%] w-[50px] flex items-center justify-center">
        <img src="/immaculate mother.png" width={50} />
      </a>

      <aside
        className={`h-[100%] w-[240px] flex items-center justify-center font-cinzel text-[24px] text-[${font_rgb}]`}
      >
        <p>
          Catholic Church of the Assumption
          <br />
          Awoyaya
        </p>
      </aside>

      </aside>

      <aside className='hidden sm:flex flex-col items-center justify-center h-[auto] w-[100vw] bg-[#f6eee3a6]'>
        <span className='h-[40px] w-[50px] bg-[#ffd79e] rounded-md flex items-center justify-center py-2'> 
          <HiOutlineBars3BottomLeft size={30}/>
        </span>
        <div className='hidden h-[auto] w-[100vw] flex flex-col items-center '>
        <Link href="/#" className="w-[100vw] flex items-center justify-center text-[black] no-underline transition-all hover:transition-all hover:bg-[#86673ba7]">
            <p
              className={`${isActive == 'home' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('home')}
            >
              HOME
            </p>
          </Link>
          <Link href="/Announcement" className="w-[100vw] flex items-center justify-center text-[black] no-underline transition-all hover:transition-all hover:bg-[#86673ba7]">
            <p
              className={`${isActive == 'announcement' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('announcement')}
            >
              Announcement
            </p>
          </Link>
          <Link href="/Connect" className="w-[100vw] flex items-center justify-center text-[black] no-underline transition-all hover:transition-all hover:bg-[#86673ba7]">
            <p
              className={`${isActive == 'connect' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('connect')}
            >
              CONNECT
            </p>
          </Link>
          <Link href="/Laity" className="w-[100vw] flex items-center justify-center text-[black] no-underline transition-all hover:transition-all hover:bg-[#86673ba7]">
            <p
              className={`${isActive == 'ministry' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('ministry')}
            >
              LAITY
            </p>
          </Link>

          <Link href="/Sacrament" className="w-[100vw] flex items-center justify-center text-[black] no-underline transition-all hover:transition-all hover:bg-[#86673ba7]">
            <p
              className={`${isActive == 'sacrament' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('sacrament')}
            >
              SACRAMENTS
            </p>
          </Link>

          <Link href="/Media" className="w-[100vw] flex items-center justify-center text-[black] no-underline transition-all hover:transition-all hover:bg-[#86673ba7]">
            <p
              className={`${isActive == 'media' ? 'open' : 'close'}`}
              onClick={() => handleLinkActive('media')}
            >
              MEDIA
            </p>
          </Link>

          <a
            href="/Donation"
            className="hover:transition-all hover:text-[black] no-underline"
          >
            <div className="h-[40px] w-[190px] bg-[#f0d485] transition-all hover:transition-all hover:bg-[#86673ba7] hover:text-[white] flex items-center justify-center text-[black]">
              DONATE TODAY
            </div>
          </a>
        </div>
      </aside>
      {/* </div> */}


    </nav>
  );
}
