import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import NetworkComponent from '@/app/components/Product/Network/NetworkComponent';
import NetworkHeader from '@/app/components/Product/Network/NetworkHeader';
import Head from 'next/head';
import { useEffect, useState } from 'react';

interface SeoJson {
  title:string,
  og_title:string,
  og_description:string,
  locale:string,
}

export default function NetworkIndex({getSeo}: {getSeo:SeoJson}) {

  return (
    <>
      <NextSEO seoHead={{
        title: String(getSeo?.title),
        metaDescription: "Gyloop - Network",
        metaKeywords: "Gyloop - Network",
        metaTitle: "Gyloop - Network",
        metaLocale: "en-US"
      }}/>


      <HeaderNoMenuTransparent type={0} />
      <NetworkHeader />
      <NetworkComponent />

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchData = await fetch("https://mocki.io/v1/e55b3ada-b352-4572-96aa-7dc70aaf01d9")
  const data = await fetchData.json()
  const seoJsonData = data.seo as [SeoJson]
  const getSeo = seoJsonData.find((item) => item.locale === context.locale)
  return {
    props: {
      getSeo,
      // messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
