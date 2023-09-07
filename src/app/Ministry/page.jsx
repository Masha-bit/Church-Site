'use client';
import Image from 'next/image';
import { SlArrowUp } from 'react-icons/sl';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Header from '../components/Header';
import { LiaMapMarkedAltSolid } from 'react-icons/lia';
import { BiPhoneCall } from 'react-icons/bi';
import { FiMail } from 'react-icons/fi';
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube } from 'react-icons/bi';
import ScrollToTop from '../components/ScrollToTop';
import NestedNav from '../components/NestedNav';
import MinistryDescription from '../components/[slug]';
import MinistryDes from './MinistryDescription/[slug]/page';

export default function page() {
  const bro = '#765426';

  const catholic_cream = '#f5eee4';

  return (
    <main className="h-[auto] w-[100vw] relative]">
      <MinistryDes/>
    </main>
  );
}
