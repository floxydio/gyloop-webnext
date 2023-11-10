import { useRouter } from 'next/router';
import LeadershipDetailComponent from '@/app/components/Leadership/LeadershipDetail';
import Head from 'next/head';
import HeaderNoMenu from '@/app/components/Header/HeaderNoMenu';
import Footer from '@/app/components/Footer/Footer';
import LeadershipTitle from '@/app/components/Leadership/LeadershipTitle';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';
import baseUrl from '@/Constant/server_config';
import HeaderDetail from '@/app/components/Header/HeaderDetail';

export default function DetailLeadership(data) {
  const router = useRouter();

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

      <HeaderDetail />

      <LeadershipTitle title="Leadership" />

      <LeadershipDetailComponent feature={data.data.data} />
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  const fetchData = await axios.get(
    `${url}/v1/about/leadership`
  );
  const dataLeadership = await fetchData.data.data;
  const paramLeaderId = dataLeadership.map((e) => ({
    params: { id: e.id.toString() },
  }));

  return { paths: paramLeaderId, fallback: false };
}

export async function getStaticProps(context) {
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  const { params } = context;
  const fetchDetail = await axios.get(
    `${url}/v1/about/leadership/detail/${params.id}`
  );

  if (fetchDetail.data.data === undefined || fetchDetail.data === undefined) {
    return {
      props: {
        data: [],
      },
    };
  }

  const data = fetchDetail.data;

  return {
    props: {
      data,
    },
  };
}
