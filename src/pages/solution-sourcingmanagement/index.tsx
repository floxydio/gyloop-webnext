import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import HeaderSourcingManagement from '@/app/components/Solution/SourcingManagement/HeaderSourcingManagement';
import SourcingComponent from '@/app/components/Solution/SourcingManagement/SourcingComponent';
import axios from 'axios';
import Head from 'next/head';

export default function SourcingManagement({ dataHeader }) {
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
      <SourcingComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=sourcing_management`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
