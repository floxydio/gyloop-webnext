import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import HeaderProcurement from '@/app/components/Solution/EProcurement/HeaderProcurement';
import EProcurementComponent from '@/app/components/Solution/EProcurement/Procurement';
import axios from 'axios';
import Head from 'next/head';

export default function EProcurement({ dataHeader }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - E-Procurement',
          metaDescription: 'Gyloop - E-Procurement',
          metaKeywords: 'Gyloop - E-Procurement',
          metaTitle: 'Gyloop - E-Procurement',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderProcurement dataHeader={dataHeader[0]} />
      <EProcurementComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=procurement`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
