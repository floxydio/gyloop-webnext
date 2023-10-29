import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import FooterCatalogManagement from '@/app/components/Solution/CatalogManagement/FooterCatalogManagement';
import HeaderCatalogManagement from '@/app/components/Solution/CatalogManagement/HeaderCatalogManagement';
import ManagementComponent from '@/app/components/Solution/CatalogManagement/ManagementComponent';
import axios from 'axios';
import Head from 'next/head';

export default function CatalogManagement({
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
          title: 'Gyloop - Catalog Management',
          metaDescription: 'Gyloop - Catalog Management',
          metaKeywords: 'Gyloop - Catalog Management',
          metaTitle: 'Gyloop - Catalog Management',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderCatalogManagement dataHeader={dataHeader[0]} />
      <ManagementComponent
        dataMediaHighlight={dataMediaHighlight}
        dataSolutionFunction={dataSolutionFunction}
        dataSolutionProduct={dataSolutionProduct}
      />
      <FooterCatalogManagement dataFooter={dataFooter} />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/product-header/get?lang_code=${context.locale}&page_code=catalog_management`
  );
  const fetchSolutionFunction = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/function?page_code=catalog_management&lang_code=${context.locale}`
  );
  const fetchSolutionProduct = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/product?lang_code=${context.locale}&page_code=catalog_management`
  );

  const fetchMediaHighlight = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/main/media?lang_code=${context.locale}&page_code=catalog_management`
  );
  const fetchFooter = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/main/homepage-footer`
  );

  if (fetchHeader.data.data === undefined || fetchSolutionFunction.data.data === undefined || fetchSolutionProduct.data.data === undefined || fetchMediaHighlight.data.data === undefined || fetchFooter.data.data === undefined) {
    return {
      props: {
        dataHeader: [],
        dataSolutionFunction: [],
        dataSolutionProduct: [],
        dataMediaHighlight: [],
        dataFooter: [],
      }
    }
  }

  const dataMediaHighlight = fetchMediaHighlight.data.data;
  const dataHeader = fetchHeader.data.data;
  const dataSolutionFunction = fetchSolutionFunction.data.data;
  const dataSolutionProduct = fetchSolutionProduct.data.data;
  const dataFooter = fetchFooter.data.data;

  return {
    props: {
      dataHeader: dataHeader || null,
      dataSolutionFunction: dataSolutionFunction || null,
      dataSolutionProduct: dataSolutionProduct || null,
      dataMediaHighlight: dataMediaHighlight || null,
      dataFooter: dataFooter || null,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
