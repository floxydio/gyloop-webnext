import Head from 'next/head';
import Footer from '../app/components/Footer/Footer';
import { useEffect } from 'react';
import Header from '@/app/components/Header/header';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import MainHeader from '@/app/components/Main/MainHeader';
import dynamic from 'next/dynamic';
import NextSEO from '@/app/components/NextHead/NextSEO';

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

export default function Main({ getSeo }: { getSeo: SeoJson }) {
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
      <MainComponent />
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  // const fetchData = await fetch(
  //   'https://mocki.io/v1/0b85e732-3869-4fec-80a4-e7a8ecbb0569'
  // );
  // const data = await fetchData.json();
  // const seoJsonData = data.data as [SeoJson];
  // const getSeo = seoJsonData.find((item) => item.title_en == context.locale);
  return {
    props: {
      messages: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
