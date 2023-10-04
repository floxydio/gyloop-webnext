import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle';
import NextSEO from '@/app/components/NextHead/NextSEO';
import PrivacyComponent from '@/app/components/PrivacyPolicy/PrivacyComponent';
import axios from 'axios';
import Head from 'next/head';

export default function PrivacyPolicy(dataPrivacy) {
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
      {dataPrivacy.dataPrivacy === undefined ? <p>Data Kosong</p> : 
      <PrivacyComponent privacyPolicy={dataPrivacy.dataPrivacy} />}
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  const fetchData = await axios.get(`http://localhost:4000/v1/privacy-policy?lang_code=${context.locale}`) 
  const dataPrivacy = await fetchData.data.data[0]
  return {
    props: {
      dataPrivacy,
    },
  };
}