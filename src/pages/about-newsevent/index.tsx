import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NewsAndEvent from '@/app/components/NewsAndEvent/NewsAndEvent';
import Head from 'next/head';
import React from 'react';

export default function index() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <title>Gyloop - News And Event</title>
      </Head>
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