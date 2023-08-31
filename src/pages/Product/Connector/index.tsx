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
         {/* <!-- Android  --> */}
         <meta name="theme-color" content="#12AAF2" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* <!-- iOS --> */}
        <meta name="apple-mobile-web-app-title" content="Application Title" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* <!-- Windows  --> */}
        <meta name="msapplication-navbutton-color" content="#12AAF2" />
        <meta name="msapplication-TileColor" content="#12AAF2" />
        <meta
          name="msapplication-TileImage"
          content="icons/ms-icon-144x144.png"
        />
        <meta name="msapplication-config" content="icons/browserconfig.xml" />

        {/* <!-- Pinned Sites  --> */}
        <meta name="application-name" content="Application Name" />
        <meta name="msapplication-tooltip" content="Tooltip Text" />
        <meta name="msapplication-starturl" content="/" />

        {/* <!-- Tap highlighting  --> */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* <!-- UC Mobile Browser  --> */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        {/* <!-- Disable night mode for this page  --> */}
        <meta name="nightmode" content="disable" />

        {/* <!-- Layout mode --> */}
        <meta name="layoutmode" content="fitscreen/standard" />

        {/* <!-- imagemode - show image even in text only mode  --> */}
        <meta name="imagemode" content="force" />

        {/* <!-- Orientation  --> */}
        <meta name="screen-orientation" content="portrait" />

        <title>Gyloop - Connector</title>
      </Head>

      <HeaderNoMenuTransparent type = {0} />
      <HeaderConnector />
      <ConnectorComponent />

      <Footer />
    </>
  );
}
