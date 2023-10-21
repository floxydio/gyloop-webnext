import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import FooterVendorPortal from '@/app/components/Solution/VendorPortal/FooterVendorPortal';
import HeaderVendorPortal from '@/app/components/Solution/VendorPortal/HeaderVendorPortal';
import VendorPortalComponent from '@/app/components/Solution/VendorPortal/VendorPortalComponent';
import axios from 'axios';
import Head from 'next/head';

export default function VendorPortal({
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
          title: 'Gyloop - Vendor Portal',
          metaDescription: 'Gyloop - Vendor Portal',
          metaKeywords: 'Gyloop - Vendor Portal',
          metaTitle: 'Gyloop - Vendor Portal',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderVendorPortal dataHeader={dataHeader[0]} />
      <VendorPortalComponent
        dataSolutionFunction={dataSolutionFunction}
        dataSolutionProduct={dataSolutionProduct}
        dataMediaHighlight={dataMediaHighlight}
      />
      <FooterVendorPortal dataFooter={dataFooter} />
    </>
  );
}
export async function getStaticProps(context) {
  const fetchHeader = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/product-header/get?lang_code=${context.locale}&page_code=vendor_portal`
  );

  const fetchSolutionFunction = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/function?lang_code=${context.locale}&page_code=vendor_portal`
  );

  const fetchSolutionProduct = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/solution/product?lang_code=${context.locale}&page_code=vendor_portal`
  );

  const fetchMediaHighlight = await axios.get(
    `${process.env.REACT_DEV_URL}/v1/main/media?lang_code=${context.locale}&page_code=vendor_portal`
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
