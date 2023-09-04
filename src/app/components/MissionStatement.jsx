import React from 'react'

export default function MissionStatement() {
  return (
    <div className='h-[420px] w-[90%] flex flex-col items-center justify-around bg-[white] rounded-tr-[2rem] rounded-bl-[2rem] outline outline-1 outline-[#765426] -outline-offset-[10px] relative '>
        <p className='text-[28px] font-cinzel mt-[4rem]'>Parish Mission Statement</p>
        <span className='w-[40%] border border-black rounded-tr-[2rem] rounded-bl-[2rem]'>
        </span>
        <p className='h-[180px] w-[450px] text-center font-garamond'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus quis laudantium nemo accusantium atque voluptatibus? Laborum ipsum ratione reprehenderit, quaerat repellendus aperiam, eos veniam asperiores, quis optio reiciendis facere quos?
        </p>

    <span className='h-[100px] w-[100px] rounded-full z-10 absolute -top-10 shadow-2xl flex items-center justify-center bg-cover'
    style={{
        backgroundImage: `url('/cross.svg')`
        }}>
    </span>
    </div>
  )
}
