import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import HeaderServiceProvider from '@/app/components/Solution/ServiceProvider/HeaderServiceProvider';
import ServiceProviderComponent from '@/app/components/Solution/ServiceProvider/ServiceProvider';
import axios from 'axios';
import Head from 'next/head';

export default function ServiceProvider({ dataHeader }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Service Provider',
          metaDescription: 'Gyloop - Service Provider',
          metaKeywords: 'Gyloop - Service Provider',
          metaTitle: 'Gyloop - Service Provider',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderServiceProvider dataHeader={dataHeader[0]} />
      <ServiceProviderComponent />
      <Footer />
    </>
  );
}
export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=service_provider`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
