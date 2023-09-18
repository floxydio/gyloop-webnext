import Head from 'next/head';
// import DemoComponent from "../app/components/Subscribe/DemoComponent";
import FunctionalComponent from '../app/components/Subscribe/FunctionalComponent';
import NextSEO from '@/app/components/NextHead/NextSEO';

export default function SubscribeFunctional() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Subscribe Functional",
        metaDescription: "Gyloop - Subscribe Functional",
        metaKeywords: "Gyloop - Subscribe Functional",
        metaTitle: "Gyloop - Subscribe Functional",
        metaLocale: "en-US"
      }} />

      <FunctionalComponent />
    </>
  );
}
