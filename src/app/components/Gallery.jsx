import React from 'react'

export default function Gallery() {
  return (
    <div className='grid-wrapper'>
        <div>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className='big'>
            <img src="/church_img/gi (1).jpeg" alt="" />
        </div>
        <div className='wide'>
            <img src="/church_img/gi (2).jpeg" alt="" />
        </div>
        <div>
            <img src="/church_img/gi (4).jpeg" alt="" />
        </div>
        <div>
            <img src="/church_img/gi (5).jpeg" alt="" />
        </div>
        <div className='tall'>
            <img src="/church_img/cimg (6).jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/church_img/cimg (3).jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/church_img/cimg (3).jpeg" alt="" />
        </div>
        <div >
            <img src="/church_img/gi (6).jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/church_img/gi (7).jpeg" alt="" />
        </div>
        <div className='big'>
            <img src="/church_img/gi (6).jpeg" alt="" />
        </div>
        <div className='wide'>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className='tall'>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div >
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className='wide'>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className='tall'>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className='wide'>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className=''>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <div className='wide'>
            <img src="/church_img/cimg (1).jpeg" alt="" />
        </div>
        <style>
            {`
            img{
                max-width: 100%;
                height: auto;
                vertical-align: middle;
                display: inline-block'
            }
            .grid-wrapper > div{
                display:flex;
                justify-content:center;
                align-items: center;
            }
            .grid-wrapper > div > img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
            .grid-wrapper{
                display: grid;
                grid-gap:10px;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                grid-auto-rows: 200px;
                grid-uto-flow: dense;
            }
            .grid-wrapper .wide{
                grid-column: span 2;
            }
            .grid-wrapper .tall{
                grid-row: span 2;
            }
            .grid-wrapper .big{
                grid-row: span 2;
                grid-column: span 2;
            }
            @media screen and (max-width: 639px ) {
                .grid-wrapper{
                    display: grid;
                    grid-gap:5px;
                    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                    grid-auto-rows: 150px;
                    grid-uto-flow: dense;
                }
            }
            `}
        </style>
    </div>
  )
}
