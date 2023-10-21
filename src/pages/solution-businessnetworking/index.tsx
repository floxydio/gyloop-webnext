import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import BusinessNetworkingComponent from '@/app/components/Solution/BusinessNetworking/BusinessNetworking';
import HeaderBusinessNetworking from '@/app/components/Solution/BusinessNetworking/HeaderBusinessNetworking';
import axios from 'axios';
import Head from 'next/head';

export default function BusinessNetworking({
  dataSolutionFunction,
  dataSolutionProduct,
  dataHeader,
  dataMediaHighlight,
}) {
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
    `${process.env.REACT_DEV_URL}/v1/product-header/get?lang_code=${context.locale}&page_code=billing_automation`
  );

  const fetchSolutionFunction = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/function?lang_code=${context.locale}&page_code=billing_automation`
  );

  const fetchSolutionProduct = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/product?lang_code=${context.locale}&page_code=billing_automation`
  );

  const fetchMediaHighlight = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/main/media?lang_code=${context.locale}&page_code=billing_automation`
  );

  const dataMediaHighlight = fetchMediaHighlight.data.data;
  const dataHeader = fetchHeader.data.data;
  const dataSolutionFunction = fetchSolutionFunction.data.data;
  const dataSolutionProduct = fetchSolutionProduct.data.data;
  return {
    props: {
      dataSolutionFunction: dataSolutionFunction,
      dataSolutionProduct: dataSolutionProduct,
      dataHeader: dataHeader,
      dataMediaHighlight: dataMediaHighlight,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
