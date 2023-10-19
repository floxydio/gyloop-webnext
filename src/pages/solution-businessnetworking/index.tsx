import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import BusinessNetworkingComponent from '@/app/components/Solution/BusinessNetworking/BusinessNetworking';
import HeaderBusinessNetworking from '@/app/components/Solution/BusinessNetworking/HeaderBusinessNetworking';
import axios from 'axios';
import Head from 'next/head';

export default function BusinessNetworking({ dataHeader }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Business Networking',
          metaDescription: 'Gyloop - Business Networking',
          metaKeywords: 'Gyloop - Business Networking',
          metaTitle: 'Gyloop - Business Networking',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderBusinessNetworking dataHeader={dataHeader[0]} />
      <BusinessNetworkingComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=business_networking`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
