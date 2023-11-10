import baseUrl from '@/Constant/server_config';
import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import FooterInvoiceAutomation from '@/app/components/Solution/InvoiceAutomation/FooterInvoiceAutomation';
import HeaderInvoiceAutomation from '@/app/components/Solution/InvoiceAutomation/HeaderInvoiceAutomation';
import InvoiceAutomationComponent from '@/app/components/Solution/InvoiceAutomation/InvoiceAutomation';
import axios from 'axios';
import Head from 'next/head';

export default function InvoiceAutomation({
  dataSolutionFunction,
  dataSolutionProduct,
  dataMediaHighlight,
  dataHeader,
  dataFooter,
}) {
  <>
    <NextSEO
      seoHead={{
        title: 'Gyloop - Invoice Automation',
        metaDescription: 'Gyloop - Invoice Automation',
        metaKeywords: 'Gyloop - Invoice Automation',
        metaTitle: 'Gyloop - Invoice Automation',
        metaLocale: 'en-US',
      }}
    />
    <HeaderNoMenuTransparent type={0} />
    <HeaderInvoiceAutomation dataHeader={dataHeader[0]} />
    <InvoiceAutomationComponent
      dataSolutionFunction={dataSolutionFunction}
      dataSolutionProduct={dataSolutionProduct}
      dataMediaHighlight={dataMediaHighlight}
    />
    <FooterInvoiceAutomation dataFooter={dataFooter} />
  </>;
}

export async function getServerSideProps(context) {
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const fetchHeader = await axios.get(
    `${url}/v1/product-header/get?lang_code=${context.locale}&page_code=invoice_automation`
  );

  const fetchSolutionFunction = await axios.get(
    `${url}/v1/solution/function?lang_code=${context.locale}&page_code=invoice_automation`
  );

  const fetchSolutionProduct = await axios.get(
    `${url}/v1/solution/product?lang_code=${context.locale}&page_code=invoice_automation`
  );

  const fetchMediaHighlight = await axios.get(
    `${url}/v1/main/media?lang_code=${context.locale}&page_code=invoice_automation`
  );
  const fetchFooter = await axios.get(
    `${url}/v1/main/homepage-footer`
  );
  if (
    fetchHeader.data.data === undefined ||
    fetchSolutionFunction.data.data === undefined ||
    fetchSolutionProduct.data.data === undefined ||
    fetchMediaHighlight.data.data === undefined ||
    fetchFooter.data.data === undefined
  ) {
    return {
      props: {
        dataHeader: [],
        dataSolutionFunction: [],
        dataSolutionProduct: [],
        dataMediaHighlight: [],
        dataFooter: [],
      },
    };
  }

  const dataMediaHighlight = fetchMediaHighlight.data.data;
  const dataHeader = fetchHeader.data.data;
  const dataSolutionFunction = fetchSolutionFunction.data.data;
  const dataSolutionProduct = fetchSolutionProduct.data.data;
  const dataFooter = fetchFooter.data.data;

  return {
    props: {
      dataSolutionFunction: dataSolutionFunction || null,
      dataSolutionProduct: dataSolutionProduct || null,
      dataHeader: dataHeader || null,
      dataMediaHighlight: dataMediaHighlight || null,
      dataFooter: dataFooter || null,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
