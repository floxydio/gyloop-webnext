import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import CustomerPortalComponent from '@/app/components/Solution/CustomerPortal/CustomerPortal';
import Head from 'next/head';

export default function CustomerPortal() {
  return (
    <>
 
      <NextSEO seoHead={{
        title: "Gyloop - Customer Portal",
        metaDescription: "Gyloop - Customer Portal",
        metaKeywords: "Gyloop - Customer Portal",
        metaTitle: "Gyloop - Customer Portal",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type = {0} />
      <CustomerPortalComponent />
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