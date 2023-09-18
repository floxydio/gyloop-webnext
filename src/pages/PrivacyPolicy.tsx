import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle';
import NextSEO from '@/app/components/NextHead/NextSEO';
import PrivacyComponent from '@/app/components/PrivacyPolicy/PrivacyComponent';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <NextSEO seoHead={{
        title: "Gyloop - Privacy Statement for Gyloop",
        metaDescription: "Gyloop - Privacy Statement for Gyloop",
        metaKeywords: "Gyloop - Privacy Statement for Gyloop",
        metaTitle: "Gyloop - Privacy Statement for Gyloop",
        metaLocale: "en-US"
      }}/>
      <HeaderNoMenuTransparent type={1} />
      <LeadershipTitle title="Privacy Statement for Gyloop
" />
      <PrivacyComponent />
      <Footer />
    </>
  );
}
