import Footer from '@/app/components/Footer/Footer';
import { useEffect, useState } from 'react';
import BusinessComponent from '@/app/components/Product/Business/BusinessComponent';
import HeaderBusiness from '@/app/components/Product/Business/HeaderBusiness';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import Head from 'next/head';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

// Dont Forget add { } in props
export default function Businnes({ dataHeader, dataFetchPrice, dataTablePlan }) {


  return (
    <>

      <NextSEO seoHead={{
        title: "Gyloop - Business",
        metaDescription: "Gyloop - Business",
        metaKeywords: "Gyloop - Business",
        metaTitle: "Gyloop - Business",
        metaLocale: "en-US"
      }} />

      <HeaderNoMenuTransparent type={0} />
      <HeaderBusiness dataHeader={dataHeader[0]} />
      <BusinessComponent dataPriceItem={dataFetchPrice} dataTablePlan={dataTablePlan} />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchHeader = await axios.get(`http://localhost:4000/v1/product-header/get?lang_code=${context.locale}&page_code=business`)
  const fetchFeature = await axios.get(`http://localhost:4000/v1/product-feature/get?lang_code=${context.locale}&page_code=business`)
  const fetchMediaH = await axios.get(`http://localhost:4000/v1/main/media?page_code=business`)
  const fetchPricingItem = await axios.get(`http://localhost:4000/v1/product-pricing-item/get?lang_code=${context.locale}&page_code=business`)
  const fetchTablePlan = await axios.get(`http://localhost:4000/v1/product-table-plan/get?lang_code=${context.locale}&page_code=business`)

  const dataHeader = fetchHeader.data.data
  const dataFeature = fetchFeature.data.data
  const dataMedia = fetchMediaH.data.data
  const dataFetchPrice = fetchPricingItem.data.data
  const dataTablePlan = fetchTablePlan.data.data
  return {
    props: {
      dataHeader: dataHeader,
      dataFeature: dataFeature,
      dataMedia: dataMedia,
      dataFetchPrice: dataFetchPrice,
      dataTablePlan: dataTablePlan,
      messages: (await import(`@/translate/${context.locale}.json`)).default
    }
  };
}