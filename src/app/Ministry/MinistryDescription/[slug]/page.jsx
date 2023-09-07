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
  <main>
    <p className='mt-[8rem] mb-0 capitalize text-[12px] text-center text-[#ddc78f] h-[50px] w-[100%] font-oswald'>{`ministry  /  ${m.name}`}</p>
    <p className='text-[40px] text-center mt-0 '>
    {m.name}
    </p>
  </main>
  )
}

export default MinistryDes;
