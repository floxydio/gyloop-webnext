import NextSEO from '@/app/components/NextHead/NextSEO';
import DemoComponent from '@/app/components/Subscribe/DemoComponent';
import Head from 'next/head';

export default function SubscribeDemo() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Subscribe Demo User",
        metaDescription: "Gyloop - Subscribe Demo User",
        metaKeywords: "Gyloop - Subscribe Demo User",
        metaTitle: "Gyloop - Subscribe Demo User",
        metaLocale: "en-US"
      }} />

      <DemoComponent />
    </>
  );
}
