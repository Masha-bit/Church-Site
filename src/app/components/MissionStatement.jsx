import React from 'react'

export default function MissionStatement() {
  return (
    <div className='h-[420px] w-[90%] flex flex-col items-center justify-around bg-[white] rounded-tr-[2rem] rounded-bl-[2rem] outline outline-1 outline-[#765426] -outline-offset-[10px] relative '>
        <p className='text-[28px] font-cinzel mt-[4rem]'>Parish Mission Statement</p>
        <span className='w-[40%] border border-black rounded-tr-[2rem] rounded-bl-[2rem]'>
        </span>
        <p className='h-[180px] w-[750px] text-center font-roboto leading-8'>
            To build a community of God's people daily enlightened by the Word, nourished at the Table, and who are empassioned to embrace the beauty of th sacred liturgy.
            {/* <br/>
            To be a beacon of light guiding the people of God to eternal salvation. */}
        </p>

    <span className='h-[100px] w-[100px] rounded-full z-10 absolute -top-10 shadow-2xl flex items-center justify-center bg-cover'
    style={{
        backgroundImage: `url('/cross.svg')`
        }}>
    </span>
    </div>
  )
}
