import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NewsAndEvent from '@/app/components/NewsAndEvent/NewsAndEvent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import Head from 'next/head';
import React from 'react';

export default function index() {
  return (
    <>
   
      <NextSEO seoHead={{
        title: "Gyloop - News And Event",
        metaDescription: "Gyloop - News And Event",
        metaKeywords: "Gyloop - News And Event",
        metaTitle: "Gyloop - News And Event",
        metaLocale: "en-US"
      }} />

      <HeaderNoMenuTransparent type={0} />
      <NewsAndEvent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
