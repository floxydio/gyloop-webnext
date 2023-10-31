import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import ProviderComponent from '@/app/components/Product/Provider/ProviderComponent';
import FooterProvider from '@/app/components/Product/Provider/ProviderFooter';
import ProviderHeader from '@/app/components/Product/Provider/ProviderHeader';
import axios from 'axios';
import Head from 'next/head';

export default function ProviderIndex({
  dataHeader,
  dataFaq,
  dataProductDetail,
  dataProductFunction,
  dataProductPricing,
  dataProductFeature,
  dataFooter,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Provider',
          metaDescription: 'Gyloop - Provider',
          metaKeywords: 'Gyloop - Provider',
          metaTitle: 'Gyloop - Provider',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <ProviderHeader dataHeader={dataHeader[0]} />
      <ProviderComponent
        dataFaq={dataFaq}
        dataProductDetail={dataProductDetail}
        dataProductFunction={dataProductFunction}
        dataProductPricing={dataProductPricing}
        dataProductFeature={dataProductFeature}
      />
      <FooterProvider dataFooter={dataFooter} />
    </>
  );
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=provider`
  );
  const fetchFaq = await axios.get(
    `http://159.89.44.46:4000/v1/product-faq-item/get?lang_code=${context.locale}&page_code=provider`
  );
  const fetchProductDetail = await axios.get(
    `http://159.89.44.46:4000/v1/product-detail/get?lang_code=${context.locale}&page_code=provider`
  );
  const fetchProductFunction = await axios.get(
    `http://159.89.44.46:4000/v1/product-functionality/get?lang_code=${context.locale}&page_code=provider`
  );
  const fetchPricingItem = await axios.get(
    `http://159.89.44.46:4000/v1/product-pricing-item/get?lang_code=${context.locale}&page_code=provider`
  );
  const fetchFeature = await axios.get(
    `http://159.89.44.46:4000/v1/product-feature/get?lang_code=${context.locale}&page_code=provider`
  );
  const fetchFooter = await axios.get(
    `http://159.89.44.46:4000/v1/main/homepage-footer`
  );

  if (
    fetchHeader.data.data === undefined ||
    fetchFaq.data.data === undefined ||
    fetchProductDetail.data.data === undefined ||
    fetchProductFunction.data.data === undefined ||
    fetchPricingItem.data.data === undefined ||
    fetchFeature.data.data === undefined ||
    fetchFooter.data.data === undefined
  ) {
    return {
      notFound: true,
    };
  }

  const dataHeader = fetchHeader.data.data;
  const dataFaq = fetchFaq.data.data;
  const dataProductDetail = fetchProductDetail.data.data;
  const dataProductFunction = fetchProductFunction.data.data;
  const dataProductPricing = fetchPricingItem.data.data;
  const dataFeature = fetchFeature.data.data;
  const dataFooter = fetchFooter.data.data;

  return {
    props: {
      dataHeader: dataHeader || null,
      dataFaq: dataFaq || null,
      dataProductDetail: dataProductDetail || null,
      dataProductFunction: dataProductFunction || null,
      dataProductPricing: dataProductPricing || null,
      dataProductFeature: dataFeature || null,
      dataFooter: dataFooter || null,

      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
