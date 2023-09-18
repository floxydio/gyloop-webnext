import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import NetworkComponent from '@/app/components/Product/Network/NetworkComponent';
import NetworkHeader from '@/app/components/Product/Network/NetworkHeader';
import Head from 'next/head';

export default function NetworkIndex() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Network",
        metaDescription: "Gyloop - Network",
        metaKeywords: "Gyloop - Network",
        metaTitle: "Gyloop - Network",
        metaLocale: "en-US"
      }}/>


      <HeaderNoMenuTransparent type={0} />
      <NetworkHeader />
      <NetworkComponent />

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
