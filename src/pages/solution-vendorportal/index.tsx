import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import HeaderVendorPortal from '@/app/components/Solution/VendorPortal/HeaderVendorPortal';
import VendorPortalComponent from '@/app/components/Solution/VendorPortal/VendorPortalComponent';
import axios from 'axios';
import Head from 'next/head';

export default function VendorPortal({ dataHeader }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Vendor Portal',
          metaDescription: 'Gyloop - Vendor Portal',
          metaKeywords: 'Gyloop - Vendor Portal',
          metaTitle: 'Gyloop - Vendor Portal',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderVendorPortal dataHeader={dataHeader[0]} />
      <VendorPortalComponent />
      <Footer />
    </>
  );
}
export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=vendor_portal`
  );
  const dataHeader = fetchHeader.data.data;
  return {
    props: {
      dataHeader: dataHeader,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
