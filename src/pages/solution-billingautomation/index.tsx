import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import BillingAutomationComponent from '@/app/components/Solution/BillingAutomation/BillingAutomationComponent';
import HeaderBillingAutomation from '@/app/components/Solution/BillingAutomation/HeaderBilling';
import axios from 'axios';
import Head from 'next/head';

export default function BillingAutomation({
  dataSolutionFunction,
  dataSolutionProduct,
  dataHeader,
  dataMediaHighlight,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Billing Automation',
          metaDescription: 'Gyloop - Billing Automation',
          metaKeywords: 'Gyloop - Billing Automation',
          metaTitle: 'Gyloop - Billing Automation',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderBillingAutomation dataHeader={dataHeader[0]} />
      <BillingAutomationComponent
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
