import Footer from '@/app/components/Footer/Footer'
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent'
import NextSEO from '@/app/components/NextHead/NextSEO'
import LibraryComponent from '@/app/components/Resources/Library/LibraryComponent'
import Head from 'next/head'
import React from 'react'

export default function Library() {
  return (
    <>
   
      <NextSEO seoHead={{
        title: "Gyloop - Library",
        metaDescription: "Gyloop - Library",
        metaKeywords: "Gyloop - Library",
        metaTitle: "Gyloop - Library",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type = {0} />
      <LibraryComponent />
      <Footer />
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`@/translate/${context.locale}.json`)).default
    }
  };
}
