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

export async function getStaticProps(context) {
  const fetchData = await axios.get(
    `http://159.89.44.46:4000/v1/about/leadership?lang_code=${context.locale}`
  );
  const dataLeadership = await fetchData.data.data;

  return {
    props: {
      dataLeadership,
      message: (await import(`@/translate/${context.locale}.json`)).default,
    },
  };
}
