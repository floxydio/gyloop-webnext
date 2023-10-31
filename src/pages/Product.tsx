'use client';
import Footer from '@/app/components/Footer/Footer';
import HeaderProduct from '@/app/components/Header/HeaderProduct';
import Header from '@/app/components/Header/header';
import ProductSlider from '@/app/components/SliderNavbar/ProductSlider';
import Head from 'next/head';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import ProductIndex from '@/app/components/Product/ProductIndex';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

export default function Product({ dataHeader, dataOverview }) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Product Overview',
          metaDescription: 'Gyloop - Product Overview',
          metaKeywords: 'Gyloop - Product Overview',
          metaTitle: 'Gyloop - Product Overview',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <ProductSlider dataHeader={dataHeader[0]} />
      <ProductIndex dataOverview={dataOverview} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=product`
  );
  const fetchOverview = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=product`
  );

  if (fetchHeader.data.data === undefined || fetchOverview.data.data === undefined) {
    return {
      props: {
        dataHeader: [],
        dataOverview: [],
      },
    };
  }

  const dataHeader = fetchHeader.data.data;
  const dataOverview = fetchOverview.data.data;

  return {
    props: {
      dataHeader: dataHeader || null,
      dataOverview: dataOverview || null,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
