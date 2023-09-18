import AboutIndexComponent from '@/app/components/About/AboutIndexComponent'
import Footer from '@/app/components/Footer/Footer'
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent'
import Head from 'next/head'
import React from 'react'
import NextSEO from '@/app/components/NextHead/NextSEO'

export default function About() {
  return (
    <>
    <NextSEO seoHead={{
      title: "Gyloop - About",
      metaDescription: "Gyloop - About",
      metaKeywords: "Gyloop - About",
      metaTitle: "Gyloop - Tentang Kami",
      metaLocale: "en-US"
    }} />
    <HeaderNoMenuTransparent type={0}/>
    <AboutIndexComponent />
    <Footer/>
    
    </>
  )
}
