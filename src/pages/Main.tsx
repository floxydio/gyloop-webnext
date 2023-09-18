import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { useEffect } from 'react';
import Header from '@/app/components/Header/header';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import MainHeader from '@/app/components/Main/MainHeader';
import dynamic from 'next/dynamic';
import NextSEO from '@/app/components/NextHead/NextSEO';

const MainHeaderComponent = dynamic(() => import("@/app/components/Main/MainHeader"), {
  ssr:false
})

const MainComponent = dynamic(() => import("@/app/components/Main/MainComponent"), {
  ssr: false
})


export default function Main() {

  
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  });

  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Solution",
        metaDescription: "Gyloop - Solution",
        metaKeywords: "Gyloop - Solution",
        metaTitle: "Gyloop - Solution",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type={0} />
      <MainHeaderComponent />
      <MainComponent />
      <Footer />
    </>
  );
}


export async function getStaticProps(context) {
    return {
      props: {
        messages: (await import(`@/translate/${context.locale}.json`)).default
      }
    };
  }