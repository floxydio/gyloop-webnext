import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import AutomationComponent from '@/app/components/Solution/SalesAutomation/AutomationComponent';
import FooterSalesAutomation from '@/app/components/Solution/SalesAutomation/FooterSalesAutomation';
import HeaderAutomation from '@/app/components/Solution/SalesAutomation/HeaderAutomation';
import axios from 'axios';

export default function SalesAutomation({
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
          title: 'Gyloop - Sales Automation',
          metaDescription: 'Gyloop - Sales Automation',
          metaKeywords: 'Gyloop - Sales Automation',
          metaTitle: 'Gyloop - Sales Automation',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderAutomation dataHeader={dataHeader[0]} />
      <AutomationComponent
        dataSolutionFunction={dataSolutionFunction}
        dataSolutionProduct={dataSolutionProduct}
        dataMediaHighlight={dataMediaHighlight}
      />
      <FooterSalesAutomation dataFooter={dataFooter} />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/product-header/get?lang_code=${context.locale}&page_code=sales_automation`
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
