import CultureComponent from '@/app/components/Culture/CultureComponent';
import FooterCulture from '@/app/components/Culture/FooterCulture';
import HeaderCulture from '@/app/components/Culture/HeaderCulture';
import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
import Head from 'next/head';

export default function index({
  dataHeader,
  dataSolutionFunction,
  dataHighlight,
  dataCulture,
  dataFooter,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Culture',
          metaDescription: 'Gyloop - Culture',
          metaKeywords: 'Gyloop - Culture',
          metaTitle: 'Gyloop - Culture',
          metaLocale: 'en-US',
        }}
      />
      <HeaderNoMenuTransparent type={0} />
      <HeaderCulture dataHeader={dataHeader[0]} />
      <CultureComponent
        dataCulture={dataCulture}
        dataHighlight={dataHighlight}
        dataSolutionFunction={dataSolutionFunction}
      />
      <FooterCulture dataFooter={dataFooter} />
    </>
  );
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=culture`
  );
  const fetchHighlight = await axios.get(
    `http://159.89.44.46:4000/v1/about/highlight?lang_code=${context.locale}&page_code=culture`
  );
  const fetchSolutionFunction = await axios.get(
    `http://159.89.44.46:4000/v1/solution/function?lang_code=${context.locale}&page_code=culture`
  );
  const fetchCulture = await axios.get(
    `http://159.89.44.46:4000/v1/about/culture?lang_code=${context.locale}`
  );
  const fetchFooter = await axios.get(
    `http://159.89.44.46:4000/v1/main/homepage-footer`
  );

  if (
    fetchHeader.data.data === undefined ||
    fetchHighlight.data.data === undefined ||
    fetchSolutionFunction.data.data === undefined ||
    fetchCulture.data.data === undefined ||
    fetchFooter.data.data === undefined
  ) {
    return {
      props: {
        dataHeader: [],
        dataHighlight: [],
        dataSolutionFunction: [],
        dataCulture: [],
        dataFooter: [],
      },
    };
  }

  const dataHeader = fetchHeader.data.data;
  const dataSolutionFunction = fetchSolutionFunction.data.data;
  const dataHighlight = fetchHighlight.data.data;
  const dataCulture = fetchCulture.data.data;
  const dataFooter = fetchFooter.data.data;

  return {
    props: {
      dataHeader: dataHeader,
      dataSolutionFunction: dataSolutionFunction,
      dataHighlight: dataHighlight,
      dataCulture: dataCulture,
      dataFooter: dataFooter,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
