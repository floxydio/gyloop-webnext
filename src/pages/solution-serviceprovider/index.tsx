import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import FooterServiceProvider from '@/app/components/Solution/ServiceProvider/FooterServiceProvider';
import HeaderServiceProvider from '@/app/components/Solution/ServiceProvider/HeaderServiceProvider';
import ServiceProviderComponent from '@/app/components/Solution/ServiceProvider/ServiceProvider';
import axios from 'axios';
import Head from 'next/head';

export default function ServiceProvider({
  dataSolutionFunction,
  dataSolutionProduct,
  dataHeader,
  dataMediaHighlight,
  dataFooter,
}) {
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
      <ServiceProviderComponent
        dataSolutionFunction={dataSolutionFunction}
        dataSolutionProduct={dataSolutionProduct}
        dataMediaHighlight={dataMediaHighlight}
      />
      <FooterServiceProvider dataFooter={dataFooter} />
    </>
  );
}
export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=service_provider`
  );
  const fetchSolutionFunction = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/function?page_code=sales_automation&lang_code=${context.locale}`
  );
  const fetchSolutionProduct = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/product?lang_code=${context.locale}&page_code=sales_automation`
  );
  const fetchMediaHighlight = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/main/media?lang_code=${context.locale}&page_code=sales_automation`
  );
  const fetchFooter = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/main/homepage-footer`
  );
  const dataMediaHighlight = fetchMediaHighlight.data.data;
  const dataHeader = fetchHeader.data.data;
  const dataSolutionFunction = fetchSolutionFunction.data.data;
  const dataSolutionProduct = fetchSolutionProduct.data.data;
  const dataFooter = fetchFooter.data.data;
  return {
    props: {
      dataSolutionFunction: dataSolutionFunction,
      dataSolutionProduct: dataSolutionProduct,
      dataHeader: dataHeader,
      dataMediaHighlight: dataMediaHighlight,
      dataFooter: dataFooter,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
