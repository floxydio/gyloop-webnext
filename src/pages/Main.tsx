

import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { useEffect } from 'react';
import Header from '@/app/components/Header/header';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import MainHeader from '@/app/components/Main/MainHeader';
import dynamic from 'next/dynamic';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
import { HomepageContent } from '@/app/components/Main/MainComponent';
import FooterMain from '@/app/components/Main/MainFooter';

const MainHeaderComponent = dynamic(
  () => import('@/app/components/Main/MainHeader'),
  {
    ssr: false,
  }
);

const MainComponent = dynamic(
  () => import('@/app/components/Main/MainComponent'),
  {
    ssr: false,
  }
);

export default function Main({
  dataHomepageFeature,
  dataFetchContent,
  dataHomepageHeader,
  dataFooter,
}) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop',
          metaDescription: 'Gyloop - Solution',
          metaKeywords: 'Gyloop - Solution',
          metaTitle: 'Gyloop - Solution',
          metaLocale: 'en-US',
        }}
      />
      <HeaderNoMenuTransparent type={0} />
      <MainHeaderComponent dataHomepageHeader={dataHomepageHeader} />
      <MainComponent
        feature={dataHomepageFeature.data}
        content={dataFetchContent.data}
      />
      {/* <Footer  */}
      <FooterMain dataFooter={dataFooter} />
    </>
  );
}

export async function getStaticProps(context) {
  const [
    dataHomepageFeature,
    dataFetchContent,
    dataHomepageHeader,
    dataFooter,
  ] = await Promise.all([
    axios.get(
      `${process.env.REACT_DEV_URL}/v1/main/homepage-overview-item?lang_code=${context.locale}`
    ),
    axios.get(
      `${process.env.REACT_DEV_URL}/v1/main/homepage-content/get?lang_code=${context.locale}`
    ),
    axios.get(
      `${process.env.REACT_DEV_URL}/v1/main/homepage-header?lang_code=${context.locale}`
    ),
    axios.get(`${process.env.REACT_DEV_URL}/v1/main/homepage-footer`),
  ]);

  return {
    props: {
      dataHomepageFeature: dataHomepageFeature.data,
      dataFetchContent: dataFetchContent.data,
      dataHomepageHeader: dataHomepageHeader.data.data,
      dataFooter: dataFooter.data.data,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
