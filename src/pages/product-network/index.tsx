import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import NetworkComponent from '@/app/components/Product/Network/NetworkComponent';
import NetworkHeader from '@/app/components/Product/Network/NetworkHeader';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';

interface SeoJson {
  title: string,
  og_title: string,
  og_description: string,
  locale: string,
}

export default function NetworkIndex({ dataHeader }) {

  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Network",
        metaDescription: "Gyloop - Network",
        metaKeywords: "Gyloop - Network",
        metaTitle: "Gyloop - Network",
        metaLocale: "en-US"
      }} />


      <HeaderNoMenuTransparent type={0} />
      <NetworkHeader dataHeader={dataHeader[0]} />
      <NetworkComponent />

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(`http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=network`)
  const dataHeader = fetchHeader.data.data
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
