import Head from 'next/head';
import VerifiedComponent from '../app/components/Subscribe/VerifiedComponent';
import NextSEO from '@/app/components/NextHead/NextSEO';

export default function SubscribeVerified() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Subscribe Verified",
        metaDescription: "Gyloop - Subscribe Verified",
        metaKeywords: "Gyloop - Subscribe Verified",
        metaTitle: "Gyloop - Subscribe Verified",
        metaLocale: "en-US"
      }} />

      <VerifiedComponent />
    </>
  );
}
