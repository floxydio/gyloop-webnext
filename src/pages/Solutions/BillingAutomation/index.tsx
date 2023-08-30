import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import BillingAutomationComponent from '@/app/components/Solution/BillingAutomation/BillingAutomationComponent';
import Head from 'next/head';

export default function BillingAutomation() {
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

        <title>Gyloop - Billing Automation</title>
      </Head>

      <HeaderNoMenuTransparent />
      <BillingAutomationComponent />
      <Footer />
    </>
  );
}
