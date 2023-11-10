import baseUrl from '@/Constant/server_config';
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
      <NextSEO
        seoHead={{
          title: 'Gyloop - Privacy Statement for Gyloop',
          metaDescription: 'Gyloop - Privacy Statement for Gyloop',
          metaKeywords: 'Gyloop - Privacy Statement for Gyloop',
          metaTitle: 'Gyloop - Privacy Statement for Gyloop',
          metaLocale: 'en-US',
        }}
      />
      <HeaderNoMenuTransparent type={1} />
      <LeadershipTitle
        title="Privacy Statement for Gyloop
"
      />
      {dataPrivacy.dataPrivacy === undefined ||
        dataPrivacy.dataPrivacy === null ? (
        <p>Data Kosong</p>
      ) : (
        <PrivacyComponent privacyPolicy={dataPrivacy.dataPrivacy} />
      )}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const fetchData = await axios.get(
    `${url}/v1/privacy-policy?lang_code=${context.locale}`
  );
  if (fetchData.data.data === undefined || fetchData.data === undefined) {
    return {
      props: {
        dataPrivacy: [],
      },
    };
  }
  const dataPrivacy = await fetchData.data.data[0];
  return {
    props: {
      dataPrivacy: dataPrivacy || null,
    },
  };
}
