import Footer from '@/app/components/Footer/Footer';
import HeaderSubmenuComponent from '@/app/components/Header/header-submenu';
import '@/style/style.min.css';
import '@/style/icon.css';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import ConnectorComponent from '@/app/components/Product/Connector/ConnectorComponent';
import HeaderConnector from '@/app/components/Product/Connector/HeaderComponent';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import Head from 'next/head';
import NextSEO from '@/app/components/NextHead/NextSEO';
export default function Connector() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle')
}, [])

  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Connector",
        metaDescription: "Gyloop - Connector",
        metaKeywords: "Gyloop - Connector",
        metaTitle: "Gyloop - Connector",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type = {0} />
      <HeaderConnector />
      <ConnectorComponent />

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
