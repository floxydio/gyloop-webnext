import baseUrl from '@/Constant/server_config';
import Footer from '@/app/components/Footer/Footer';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import LeadershipComponent from '@/app/components/Leadership/LeadershipComponent';
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
import Head from 'next/head';

export default function Leadership(dataLeadership) {
  return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Leadership',
          metaDescription: 'Gyloop - Leadership',
          metaKeywords: 'Gyloop - Leadership',
          metaTitle: 'Gyloop - Leadership',
          metaLocale: 'en-US',
        }}
      />

      <HeaderNoMenuTransparent type={1} />
      <LeadershipTitle title="Leadership" />
      <LeadershipComponent feature={dataLeadership.dataLeadership} />
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
    `${url}/v1/about/leadership?lang_code=${context.locale}`
  );
  if (fetchData.data.data === undefined || fetchData.data === undefined) {
    return {
      props: {
        dataLeadership: [],
      },
    };
  }
  const dataLeadership = await fetchData.data.data;

  return {
    props: {
      dataLeadership,
      message: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
