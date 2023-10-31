import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import NetworkComponent from '@/app/components/Product/Network/NetworkComponent';
import NetworkFooter from '@/app/components/Product/Network/NetworkFooter';
import NetworkHeader from '@/app/components/Product/Network/NetworkHeader';
import axios from 'axios';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function NetworkIndex({
  dataHeader,
  dataFaqHeader,
  dataFaqItem,
  dataProductPrice,
  dataProductFunction,
  dataProductDetail,
  dataProductFeature,
  dataSolutionFunction,
  dataFooter,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Network',
          metaDescription: 'Gyloop - Network',
          metaKeywords: 'Gyloop - Network',
          metaTitle: 'Gyloop - Network',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <NetworkHeader dataHeader={dataHeader[0]} />
      <NetworkComponent
        dataFaqItem={dataFaqItem}
        dataFaqHeader={dataFaqHeader}
        dataProductFunction={dataProductFunction}
        dataPricingItem={dataProductPrice}
        dataProductDetail={dataProductDetail}
        dataProductFeature={dataProductFeature}
        dataSolutionFunction={dataSolutionFunction}
      />

      <NetworkFooter dataFooter={dataFooter} />
    </>
  );
}

export async function getServerSideProps({ context, req, res }) {

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=network`
  );
  const fetchMediaH = await axios.get(
    `http://159.89.44.46:4000/v1/main/media?page_code=network`
  );
  const fetchFeature = await axios.get(
    `http://159.89.44.46:4000/v1/product-feature/get?lang_code=${context.locale}&page_code=network`
  );
  const fetchFaqHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-faq-header/get?lang_code=${context.locale}&page_code=network`
  );
  const fetchFaqItem = await axios.get(
    `http://159.89.44.46:4000/v1/product-faq-item/get?lang_code=${context.locale}&page_code=network`
  );
  const fetchFooter = await axios.get(
    `http://159.89.44.46:4000/v1/main/homepage-footer`
  );
  const fetchProductDetail = await axios.get(
    `http://159.89.44.46:4000/v1/product-detail/get?lang_code=${context.locale}&page_code=network`
  );
  const fetchPricingItem = await axios.get(
    `http://159.89.44.46:4000/v1/product-pricing-item/get?lang_code=${context.locale}&page_code=network`
  );
  const fetchProductFunction = await axios.get(
    `http://159.89.44.46:4000/v1/product-functionality/get?lang_code=${context.locale}&page_code=network`
  );
  const fetchSolutionFunction = await axios.get(
    `http://159.89.44.46:4000/v1/solution/function?lang_code=${context.locale}&page_code=network`
  );

  if (
    fetchHeader.data.data === undefined ||
    fetchMediaH.data.data === undefined ||
    fetchFeature.data.data === undefined ||
    fetchFaqHeader.data.data === undefined ||
    fetchFaqItem.data.data === undefined ||
    fetchFooter.data.data === undefined ||
    fetchProductDetail.data.data === undefined ||
    fetchPricingItem.data.data === undefined ||
    fetchProductFunction.data.data === undefined ||
    fetchSolutionFunction.data.data === undefined
  ) {
    return {
      props: {
        dataHeader: [],
        dataMediaHighlight: [],
        dataFeature: [],
        dataFaqHeader: [],
        dataFaqItem: [],
        dataFooter: [],
        dataProductDetail: [],
        dataProductPrice: [],
        dataProductFunction: [],
        dataSolutionFunction: [],
      },
    };
  }

  const dataHeader = fetchHeader.data.data;
  const dataFaqHeader = fetchFaqHeader.data.data;
  const dataFaqItem = fetchFaqItem.data.data;
  const dataProductFunction = fetchProductFunction.data.data;
  const dataFooter = fetchFooter.data.data;
  const dataProductPrice = fetchPricingItem.data.data;
  const dataProductDetail = fetchProductDetail.data.data;
  const dataFeature = fetchFeature.data.data;
  const dataSolutionFunction = fetchSolutionFunction.data.data;

  return {
    props: {
      dataHeader: dataHeader || null,
      dataFaq: dataFaqHeader || null,
      dataFaqItem: dataFaqItem || null,
      dataProductFunction: dataProductFunction || null,
      dataFooter: dataFooter || null,
      dataProductPrice: dataProductPrice || null,
      dataProductDetail: dataProductDetail || null,
      dataProductFeature: dataFeature || null,
      dataSolutionFunction: dataSolutionFunction || null,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
