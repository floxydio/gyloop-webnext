import baseUrl from '@/Constant/server_config';
import CultureDetail from '@/app/components/Culture/CultureDetail';
import CampaignTitle from '@/app/components/Culture/CultureTitle';
import HeaderDetail from '@/app/components/Header/HeaderDetail';
import HeaderNoMenuTransparent from '@/app/components/Header/HeaderNoMenuTransparent';
import NextSEO from '@/app/components/NextHead/NextSEO';
import axios from 'axios';

export default function DetailCampaign({ data }) {
return (
    <>
      <NextSEO
        seoHead={{
          title: 'Gyloop - Campaign',
          metaDescription: 'Gyloop - Campaign',
          metaKeywords: 'Gyloop - Campaign',
          metaTitle: 'Gyloop - Campaign',
          metaLocale: 'en-US',
        }}
      />
      <HeaderDetail />
      <CampaignTitle title="Campaign Program" />
      <CultureDetail feature={data.data} />
    </>
  );
}

export async function getStaticPaths() {
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  const fetchData = await axios.get(
    `${url}/v1/about/culture`
  );
  const dataCampaign = await fetchData.data.data;
  const paramLeaderId = dataCampaign.map((e) => ({
    params: { id: e.id.toString() },
  }));

  return { paths: paramLeaderId, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;
  let url = await baseUrl(process.env.SERVER_TYPE as string, process.env.PORT_CORE_PROD as string)
  const fetchDetail = await axios.get(
    `${url}/v1/about/culture/detail/${params.id}`
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
