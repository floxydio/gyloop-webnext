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
export default function Connector() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle')
}, [])

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

        <title>Gyloop - Connector</title>
      </Head>

      <HeaderNoMenuTransparent />
      <HeaderConnector />
      <ConnectorComponent />

      <Footer />
    </>
  );
}
