import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import AutomationComponent from '@/app/components/Solution/SalesAutomation/AutomationComponent';
import Head from 'next/head';

export default function SalesAutomation() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Sales Automation",
        metaDescription: "Gyloop - Sales Automation",
        metaKeywords: "Gyloop - Sales Automation",
        metaTitle: "Gyloop - Sales Automation",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type={0} />
      <AutomationComponent />
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
