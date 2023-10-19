import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import HeaderCatalogManagement from '@/app/components/Solution/CatalogManagement/HeaderCatalogManagement';
import ManagementComponent from '@/app/components/Solution/CatalogManagement/ManagementComponent';
import axios from 'axios';
import Head from 'next/head';

export default function CatalogManagement({ dataHeader }) {
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
      <ManagementComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=catalog_management`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
