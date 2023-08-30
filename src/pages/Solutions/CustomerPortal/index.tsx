import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import CustomerPortalComponent from '@/app/components/Solution/CustomerPortal/CustomerPortal';
import Head from 'next/head';

export default function CustomerPortal() {
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

        <title>Gyloop - Customer Portal</title>
      </Head>

      <HeaderNoMenuTransparent type = {0} />
      <CustomerPortalComponent />
      <Footer />
    </>
  );
}
