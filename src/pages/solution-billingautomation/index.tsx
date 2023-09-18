import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import BillingAutomationComponent from '@/app/components/Solution/BillingAutomation/BillingAutomationComponent';
import Head from 'next/head';

export default function BillingAutomation() {
  return (
    <>
     
      <NextSEO seoHead={{
        title: "Gyloop - Billing Automation",
        metaDescription: "Gyloop - Billing Automation",
        metaKeywords: "Gyloop - Billing Automation",
        metaTitle: "Gyloop - Billing Automation",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type={0} />
      <BillingAutomationComponent />
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
