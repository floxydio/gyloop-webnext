import Footer from '@/app/components/Footer/Footer';
import { useEffect, useState } from 'react';
import BusinessComponent from '@/app/components/Product/Business/BusinessComponent';
import HeaderBusiness from '@/app/components/Product/Business/HeaderBusiness';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import Head from 'next/head';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

export default function Businnes({ dataHeader }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Business',
          metaDescription: 'Gyloop - Business',
          metaKeywords: 'Gyloop - Business',
          metaTitle: 'Gyloop - Business',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderBusiness dataHeader={dataHeader[0]} />
      <BusinessComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=business`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
