import React, { useEffect, useState } from 'react'

export default function Header(props) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
          setScrollY(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    // `${props.image}`
  return (
    <header className='h-[500px] w-[100vw] relative overflow-hidden flex items-center justify-center text-[30px] font-cinzel' >
        <div className='absolute top-0 left-0 w-[100%] h-[100%] -z-[1] overflow-hidden'>
        <img src={props.image} alt="" className='w-[100%] min-h-[100%] object-cover translate-x-0 translate-y-0 transition-all duration-[10ms]' style={{
            transform: `translate(0, ${scrollY * 0.35}px)`, // Adjust the parallax effect strength (0.5 in this example)
          }}/>
        </div>



        <span className='h-[0.5px] w-[150px] bg-[black] mx-5'></span>
            {props.title}
            {/* CONNECT */}
        <span className='h-[0.5px] w-[150px] bg-[black] mx-5'></span>       
    </header>
  )
}
