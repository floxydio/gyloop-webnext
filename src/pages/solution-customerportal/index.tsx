import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import CustomerPortalComponent from '@/app/components/Solution/CustomerPortal/CustomerPortal';
import HeaderCustomerPortal from '@/app/components/Solution/CustomerPortal/HeaderCustomerPortal';
import axios from 'axios';
import Head from 'next/head';

export default function CustomerPortal({ dataHeader }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Customer Portal',
          metaDescription: 'Gyloop - Customer Portal',
          metaKeywords: 'Gyloop - Customer Portal',
          metaTitle: 'Gyloop - Customer Portal',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderCustomerPortal dataHeader={dataHeader[0]} />
      <CustomerPortalComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=customer_portal`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
