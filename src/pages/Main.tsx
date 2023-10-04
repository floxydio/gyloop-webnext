import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { useEffect } from 'react';
import Header from '@/app/components/Header/header';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import MainHeader from '@/app/components/Main/MainHeader';
import dynamic from 'next/dynamic';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

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

interface SeoJson {
  title_en: string;
  title_id: string;
  title_fr: string;
  subtitle_en: string;
  subtitle_id: string;
  subtitle_fr: string;
}

export default function Main(dataHomepageFeature) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  });

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
      <MainHeaderComponent />
      <MainComponent feature={dataHomepageFeature.dataHomepageFeature} />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchData = await axios.get(`http://localhost:4000/v1/main/homepage-overview-item?lang_code=${context.locale}`);
  const dataHomepageFeature = await fetchData.data.data;
  return {
    props: {
      dataHomepageFeature,
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
