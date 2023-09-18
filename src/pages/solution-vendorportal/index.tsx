import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import VendorPortalComponent from '@/app/components/Solution/VendorPortal/VendorPortalComponent';
import Head from 'next/head';

export default function VendorPortal() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Vendor Portal",
        metaDescription: "Gyloop - Vendor Portal",
        metaKeywords: "Gyloop - Vendor Portal",
        metaTitle: "Gyloop - Vendor Portal",
        metaLocale: "en-US"
      }}/>


      <HeaderNoMenuTransparent type={0} />
      <VendorPortalComponent />
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
