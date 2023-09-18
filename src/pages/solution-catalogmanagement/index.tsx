import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import ManagementComponent from '@/app/components/Solution/CatalogManagement/ManagementComponent';
import Head from 'next/head';

export default function CatalogManagement() {
  return (
    <>

      <NextSEO seoHead={{
        title: "Gyloop - Catalog Management",
        metaDescription: "Gyloop - Catalog Management",
        metaKeywords: "Gyloop - Catalog Management",
        metaTitle: "Gyloop - Catalog Management",
        metaLocale: "en-US"
      }}/>


      <HeaderNoMenuTransparent type = {0} />
      <ManagementComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      messages: (await import(`@/translate/${context.locale}.json`)).default
    }
  };
}
