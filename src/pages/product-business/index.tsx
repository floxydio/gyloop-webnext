import Footer from '@/app/components/Footer/Footer';
import { useEffect, useState } from 'react';
import BusinessComponent from '@/app/components/Product/Business/BusinessComponent';
import HeaderBusiness from '@/app/components/Product/Business/HeaderBusiness';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import Head from 'next/head';
import NextSEO from '@/app/components/NextHead/NextSEO';

export default function Businnes() {


    return (
        <>
   
         <NextSEO seoHead={{
                title: "Gyloop - Business",
                metaDescription: "Gyloop - Business",
                metaKeywords: "Gyloop - Business",
                metaTitle: "Gyloop - Business",
                metaLocale: "en-US"
            }}/>

            <HeaderNoMenuTransparent type = {0} />
            <HeaderBusiness />
            <BusinessComponent />
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