import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import HeaderSourcingManagement from '@/app/components/Solution/SourcingManagement/HeaderSourcingManagement';
import SourcingComponent from '@/app/components/Solution/SourcingManagement/SourcingComponent';
import axios from 'axios';
import Head from 'next/head';

export default function SourcingManagement({
  dataSolutionFunction,
  dataSolutionProduct,
  dataHeader,
  dataMediaHighlight,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Sourcing Management',
          metaDescription: 'Gyloop - Sourcing Management',
          metaKeywords: 'Gyloop - Sourcing Management',
          metaTitle: 'Gyloop - Sourcing Management',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderSourcingManagement dataHeader={dataHeader[0]} />
      <SourcingComponent
        dataMediaHighlight={dataMediaHighlight}
        dataSolutionFunction={dataSolutionFunction}
        dataSolutionProduct={dataSolutionProduct}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/product-header/get?lang_code=${context.locale}&page_code=sourcing_management`
  );

  const fetchSolutionFunction = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/function?lang_code=${context.locale}&page_code=sourcing_management`
  );

  const fetchSolutionProduct = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/product?lang_code=${context.locale}&page_code=sourcing_management`
  );

  const fetchMediaHighlight = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/main/media?lang_code=${context.locale}&page_code=sourcing_management`
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
