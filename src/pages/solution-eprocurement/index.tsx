import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import EProcurementComponent from '@/app/components/Solution/EProcurement/Procurement';
import Head from 'next/head';

export default function EProcurement() {
  return (
    <>
    
      <NextSEO seoHead={{
        title: "Gyloop - E-Procurement",
        metaDescription: "Gyloop - E-Procurement",
        metaKeywords: "Gyloop - E-Procurement",
        metaTitle: "Gyloop - E-Procurement",
        metaLocale: "en-US"
      }}/>


      <HeaderNoMenuTransparent type = {0} />
      <EProcurementComponent />
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