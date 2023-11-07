import Footer from '@/app/components/Footer/Footer';
import { useEffect, useState } from 'react';
import BusinessComponent from '@/app/components/Product/Business/BusinessComponent';
import HeaderBusiness from '@/app/components/Product/Business/HeaderBusiness';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import Head from 'next/head';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

export default function Businnes({
  dataHeader,
  dataFetchPrice,
  dataTablePlan,
  dataProductDetail,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Business',
          metaDescription: 'Gyloop - Business',
          metaKeywords: 'Gyloop - Business',
          metaTitle: 'Gyloop - Business',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={0} />
      <HeaderBusiness dataHeader={dataHeader[0]} />
      <BusinessComponent
        dataPriceItem={dataFetchPrice}
        dataTablePlan={dataTablePlan}
        dataProductDetail={dataProductDetail}
      />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage-10, stale-while-revalidate=59'
  )

  const fetchHeader = await axios.get(
    `http://159.89.44.46:4000/v1/product-header/get?lang_code=${context.locale}&page_code=business`
  );
  const fetchFeature = await axios.get(
    `http://159.89.44.46:4000/v1/product-feature/get?lang_code=${context.locale}&page_code=business`
  );
  const fetchMediaH = await axios.get(
    `http://159.89.44.46:4000/v1/main/media?page_code=business`
  );
  const fetchPricingItem = await axios.get(
    `http://159.89.44.46:4000/v1/product-pricing-item/get?lang_code=${context.locale}&page_code=business`
  );
  const fetchTablePlan = await axios.get(
    `http://159.89.44.46:4000/v1/product-table-plan/get?lang_code=${context.locale}&page_code=business`
  );
  const fetchProductDetail = await axios.get(
    `http://159.89.44.46:4000/v1/product-detail/get?lang_code=${context.locale}&page_code=business`
  );

  if (
    fetchHeader.data.data === undefined ||
    fetchFeature.data.data === undefined ||
    fetchMediaH.data.data === undefined ||
    fetchPricingItem.data.data === undefined ||
    fetchTablePlan.data.data === undefined ||
    fetchProductDetail.data.data === undefined
  ) {
    return {
      props: {
        dataHeader: [],
        dataFeature: [],
        dataMedia: [],
        dataFetchPrice: [],
        dataTablePlan: [],
        dataProductDetail: [],
      },
    };
  }

  const dataHeader = fetchHeader.data.data;
  const dataFeature = fetchFeature.data.data;
  const dataMedia = fetchMediaH.data.data;
  const dataFetchPrice = fetchPricingItem.data.data;
  const dataTablePlan = fetchTablePlan.data.data;
  const dataProductDetail = fetchProductDetail.data.data;

  return {
    props: {
      dataHeader: dataHeader || null,
      dataFeature: dataFeature || null,
      dataMedia: dataMedia || null,
      dataFetchPrice: dataFetchPrice || null,
      dataTablePlan: dataTablePlan || null,
      dataProductDetail: dataProductDetail || null,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
