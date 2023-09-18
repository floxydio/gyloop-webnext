import Head from 'next/head';
// import FunctionalComponent from "../app/components/Subscribe/FunctionalComponent";
import ProfessionalComponent from '../app/components/Subscribe/ProfessionalComponent';
import NextSEO from '@/app/components/NextHead/NextSEO';

export default function SubscribeFunctional() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Subscribe Professional",
        metaDescription: "Gyloop - Subscribe Professional",
        metaKeywords: "Gyloop - Subscribe Professional",
        metaTitle: "Gyloop - Subscribe Professional",
        metaLocale: "en-US"
      }} />

      <ProfessionalComponent />
    </>
  );
}
