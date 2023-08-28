import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { useEffect } from 'react';
import MainComponent from '@/app/components/Main/MainComponent';
import Header from '@/app/components/Header/Header';

export default function Main() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  })

  return (
    <>
        <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <title>Gyloop | Make Business Connected</title>
        </Head>

      <Header />
      <MainComponent />
      <Footer />
    </>
  );
}
