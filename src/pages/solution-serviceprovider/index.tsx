import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import ServiceProviderComponent from '@/app/components/Solution/ServiceProvider/ServiceProvider';
import Head from 'next/head';

export default function ServiceProvider() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Service Provider",
        metaDescription: "Gyloop - Service Provider",
        metaKeywords: "Gyloop - Service Provider",
        metaTitle: "Gyloop - Service Provider",
        metaLocale: "en-US"
      }}/>

      <HeaderNoMenuTransparent type={0} />
      <ServiceProviderComponent />
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
