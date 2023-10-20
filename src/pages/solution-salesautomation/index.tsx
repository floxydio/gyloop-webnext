import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import AutomationComponent from '@/app/components/Solution/SalesAutomation/AutomationComponent';
import HeaderAutomation from '@/app/components/Solution/SalesAutomation/HeaderAutomation';
import axios from 'axios';
import Head from 'next/head';

export default function SalesAutomation({
  dataSolutionFunction,
  dataSolutionProduct,
  dataHeader,
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
        feature={dataSolutionFunction}
        product={dataSolutionProduct}
      />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const [fetchSolutionFunction, fetchSolutionProduct, fetchHeader] =
    await Promise.all([
      axios.get(
        `http://localhost:4000/v1/solution/function?lang_code=${context.locale}&page_code=sales_automation`
      ),
      axios.get(
        `http://localhost:4000/v1/solution/product?lang_code=${context.locale}`
      ),
      axios.get(
        `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=sales_automation`
      ),
    ]);
    
  return {
    props: {
      dataSolutionFunction: fetchSolutionFunction.data.data,
      dataSolutionProduct: fetchSolutionProduct.data.data,
      dataHeader: fetchHeader.data.data,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
