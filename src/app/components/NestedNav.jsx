import Link from 'next/link'
import React, { useState } from 'react'
import ministryDescription from './ministry'
import { useParams } from 'next/navigation'

export default function NestedNav(props) {
    ministryDescription.ministry

    const [ministry_e, setMinistry_e] = useState("")
    const [isActive, setActive] = useState("")

    const handle_hover = (a) => {
        setMinistry_e(a)
        setActive(a)
    }
    console.log(ministry_e)

    const router = useParams()
    
    const handle_link = () => {
        router.push()
    }
    
    // const ministry_group_list = ministryDescription.ministry.filter((m) => m.group == ministry_e ).map((ministry) => ())
    // console.log(ministry_group_list)



    const ministry_group = [
        "parish ministries","spiritual and prayer groups","fellowship and social groups","educational and study groups","special devotions","liturgical ministries"
    ]
  return (
    <table className='m-0 p-0'>
    <tbody className='h-[50px] w-[100vw] bg-[#f6eee3a6] flex flex-wrap items-center justify-center'>
        <tr className='h-[auto] w-[auto]  flex items-center justify-center'>
            {ministry_group.map((e) => (
                <div className='h-[50px] w-[200px] relative'>
                <td className='h-[100%] w-[200px] text-[14px] text-[#43262b] text-center border-[0.05px] flex items-center justify-center transition-colors duration-[350ms] hover:transition-colors hover:duration-[350ms] hover:bg-[#ad91606c]  hover:border-0  hover:border-b-2 hover-border-[#43262b] hover:border-solid capitalize font-cinzel ' onMouseOver={() => handle_hover(e)} onMouseLeave={() => handle_hover("")}>
                    {e}
                </td>

                <div className={isActive == e ? `hover:cursor-pointer h-[auto] w-[300px] pb-2 bg-[#d7c9b5] text-[#2e1a1a] flex flex-col z-[10] text-left`: `hidden`}  onMouseEnter={() => handle_hover(e)} onMouseLeave={() => handle_hover("")}>
                {ministryDescription.ministry.filter((m) => m.group == e ).map((ministry) => (
                    <Link href={`/Laity/MinistryDescription/${ministry.slug}`} className='text-[black] no-underline'>
                    <p className='h-[50px] text-left m-0 py-0 px-3 capitalize text-[13px] flex items-center transition-colors duration-[350ms] hover:transition-colors hover:duration-[350ms] hover:bg-[#ad91606c]'>{ministry.name}</p>
                    </Link>
                    ))}
                </div>
            </div>
            ))}
            
        </tr>
    </tbody>








{/* 

        {(ministryDescription.ministry).map((link) => (
            <Link href={link.slug} className='h-[100%] w-[50px] border flex items-center justify-center '>
            <td className='h-[auto] w-[auto] text-[10px] text-[#ad9160] text-center'>
                {link.abbrv? link.abbrv : link.name}
            </td>
            </Link>
        ))

        } */}
        
        {/* <div></div> */}

    
    </table>
  )
}
