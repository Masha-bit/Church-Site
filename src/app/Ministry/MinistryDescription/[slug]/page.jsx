'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import ministryDescription from '@/app/components/ministry';
// import ministryDescription from '../ministry';

const MinistryDes = () => {
  const router = useParams();
  const { slug } = router;
  console.log(router);


  const m = ministryDescription.ministry.find((a) => a.slug == slug);

  if (!m) {
    return <div>Product Not Found</div>
  }
  return (
  <main className='h-[auto] w-[auto] flex flex-col items-center justify-center'>
    <p className='mt-[5rem] mb-0 capitalize text-[12px] text-center text-[#ddc78f] h-[50px] w-[100%] font-oswald'>{`ministry  /  ${m.name}`}</p>
    <p className='text-[40px] text-center mt-0 '>
    {`${m.name}` +  `${m.abbrv !== null ? m.abbrv? `( ${m.abbrv} )`:null: ''}`}
    </p>

    <div className='h-[600px] w-[100vw] flex items-center justify-center font-garamond '>
      <aside className='h-[100%] w-[65%] flex justify-center text-[15px] leading-8 font-roboto'>
        <p className='w-[800px]'>
        {m.description}
        </p>
      </aside>

      <aside className='h-[100%] w-[35%] flex flex-col items-center text-[13px]'>

          <div className='h-[200px] w-[100%]'>
          <p className='h-[auto] w-[100%] font-oswald text-[14px] text-[#ddc78f] text-center'>DATES</p>

          <table className='h-[auto] w-[100%]'>
            <tbody className='h-[auto] w-[100%]'>
              <tr>
                <th>Days</th>
                <td> {m.meeting_date} </td>
              </tr>
              <tr>
                <th>Meeting Times</th>
                <td> {m.meeting_time} </td>
              </tr>
              <tr className='text-center font-roboto my-2 text-[11px]'>
                {m.meeting_note}
              </tr>
            </tbody>
          </table>
          </div>

        <div className='h-[0.5px] w-[90%] bg-[#ddc78f] my-5 '></div>

        
        <div className='h-[200px] w-[100%]'>
        <p className='h-[auto] w-[100%] font-oswald text-[14px] text-[#ddc78f] text-center'>CONTACTS</p>

        <table className='h-[auto] w-[100%]'>
        <tbody className='h-[auto] w-[100%]'>
            <tr>
              <th>{ m.office.chairman ? `Chairman`: m.office.choir_master? `Choir Master`: m.office.president? `President`: m.office.pro? `P.R.0`: m.office.secretary? `Secretary`: `please stay posted`}</th>

              <td>{m.office.chairman ? m.office.chairman: m.office.choir_master? m.office.choir_master: m.office.president? m.office.president: m.office.pro? m.office.pro: m.office.secretary?  m.office.secretary: `please stay posted`}  {`(${ m.office.chairman ? m.office.chairman_contact: m.office.president? m.office.president_contact: m.office.pro? m.office.pro_contact: m.office.secretary?  m.office.secretary_contact: `...`})`} </td>
          </tr>
        </tbody>
      </table>          
      </div>

        

      </aside>
    </div>
    
    <style>
              {
                `
                tr{
                  // border: none !important;
                  height: 40px;
                  width: 100%;
                  display: flex;
                  // background-color: yellow;
                }
                th {
                  height: 100%;
                  width: 150px;
                  // background-color: yellow;
                  display: flex;
                  align-items: center;
                  // justify-content: center;
                  font-family: Roboto, sans-serif;
                  font-size: 15px;
                  text-align: left;
                }
                td{
                  height: 100%;
                  width: auto;
                  // background-color: teal;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-family: Roboto, sans-serif;
                  font-size: 15px;
                  text-align: left;
                  text-transform: capitalize;
                }
                `
              }
            </style>
  </main>
  )
}

export default MinistryDes;
