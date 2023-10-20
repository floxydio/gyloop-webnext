import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import BillingAutomationComponent from '@/app/components/Solution/BillingAutomation/BillingAutomationComponent';
import HeaderBillingAutomation from '@/app/components/Solution/BillingAutomation/HeaderBilling';
import axios from 'axios';
import Head from 'next/head';

export default function BillingAutomation({ dataHeader }) {
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
      <BillingAutomationComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=billing_automation`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
