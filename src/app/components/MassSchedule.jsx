import React from 'react'

export default function MassSchedule() {
  return (
    <main className='h-[960px] w-[100vw] relative flex items-center justify-center'>
    <section className='h-[90%] w-[100vw] bg-[#566e83] bg-blend-overlay bg-cover bg-no-repeat'
    style={{
        backgroundImage: `url("/st-ignatius-nyc_holy-thursday-scaled.jpg")`
    }}>

    </section>
    <span className='h-[100%] w-[450px] bg-[#2e5577] absolute left-10 rounded-tr-[2rem] rounded-bl-[2rem] flex flex-col items-start p-[2rem] '>

        <div className='font-cinzel text-[37px] mt-[6rem] mb-[2rem] text-[#FFF7ED] underline underline-offset-4'>Mass Schedule</div>

        <p className='h-[150px] w-[200px]'> 
            <h4 className='text-[20px] underline underline-[#FFF7ED] text-[#FFF7ED] font-cinzel'>MONDAY-FRIDAY</h4>

            <table className='h-[80px] w-[100%] text-left text-[17px] text-[white]'>
                <tbody className=' w-[100%]'>
                    <tr>
                        <th> 8:00 AM </th>
                        <td> Church</td>
                    </tr>
                    <tr>
                        <th> 6:30 PM </th>
                        <td> Church </td>
                    </tr>
                </tbody>
            </table>
        </p>

        <p className='h-[150px] w-[200px]'>
            <h4 className='text-[20px] underline underline-[#FFF7ED] text-[#FFF7ED] font-cinzel'>SATURDAY</h4>

            <table className='h-[80px] w-[100%] text-left text-[17px] text-[white]'>
                <tbody className=' w-[100%]'>
                    <tr>
                        <th> 8:00 AM </th>
                        <td> Church 
                            <span></span>
                        </td>
                    </tr>
                    <tr>
                        <th> 6:30 PM </th>
                        <td> Church </td>
                    </tr>
                </tbody>
            </table>
        </p>

        <p className='h-[auto] w-[350px]'>
            <h4 className='text-[20px] underline underline-[#FFF7ED] text-[#FFF7ED] font-cinzel'>SUNDAY</h4>

            <table className='h-[auto] w-[100%] text-left text-[17px] text-[white]'>
                <tbody className=' w-[100%]'>
                    <tr>
                        <th> 7:20 AM </th>
                        <td> Church 
                        </td>
                    </tr>
                    <tr>
                        <th> 9:40 AM </th>
                        <td> Church 
                        </td>
                    </tr>
                    <tr>
                        <th> 11:00 AM </th>
                        <td> Church thanksgiving 
                        </td>
                    </tr>
                    <tr>
                        <th> 6:30 PM </th>
                        <td> Church </td>
                    </tr>
                </tbody>
            </table>
        </p>      

        <div className='font-cinzel text-[37px] mt-[2rem] text-[#FFF7ED] underline underline-offset-4'>RECONCILATION</div>

        <p className='h-[150px] w-[200px]'> 
            <table className='h-[80px] w-[100%] text-left text-[17px] text-[white]'>
                <tbody className=' w-[100%]'>
                    <tr>
                        <th> SATURDAYS</th>
                        <td>  4:30 PM </td>
                    </tr>
                </tbody>
            </table>
        </p>                           
    
    <span className='h-[130px] w-[130px] bg-no-repeat rounded-full z-10 absolute -top-10 left-20 shadow-2xl flex items-center justify-center bg-contain'
    style={{
        backgroundImage: `url('/host.svg')`
        }}></span>

    </span>
    </main>
  )
}
