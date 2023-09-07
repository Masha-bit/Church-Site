'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import ministryDescription from './ministry';

function MinistryDes() {
  const router = useParams();
  const { slug } = router;
  console.log(router);

  const m = ministryDescription.ministry.find((a) => a.slug == slug);

  if (!m) {
    return <div>Product Not Found</div>;
  }
  return <div>{m.name}</div>;
}

export default MinistryDes;
